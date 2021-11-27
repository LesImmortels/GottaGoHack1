import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import firebaseInstance from "../services/firebase";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const useMemberAuth = (props) => {
  const { currentUser } = useSelector(mapState);
  const [authentication, setAuthState] = useState({
    authenticated: false,
    initializing: true,
  });

  const navigate = useNavigate();

  useEffect(
    () =>
      firebaseInstance.firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setAuthState({
            authenticated: true,
            initializing: false,
          });
        } else {
          setAuthState({
            authenticated: false,
            initializing: false,
          });
        }
      }),
    [setAuthState]
  );

  useEffect(() => {
    if (!authentication.initializing && !authentication.authenticated) {
      navigate("/");
    }
  }, [authentication]);

  return currentUser;
};

export const isMember = (currentUser) => {
  if (!currentUser || !Array.isArray(currentUser.roles)) return false;
  const { roles } = currentUser;
  return !!(roles.includes("member") || roles.includes("admin"));
};

export default useMemberAuth;
