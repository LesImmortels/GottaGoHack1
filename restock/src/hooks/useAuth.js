import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";

const mapState = ({ user }) => ({
    currentUser: !!user.currentUser,
});



const useAuth = () => {
    const { currentUser } = useSelector(mapState);
    const [authentication, setAuthState] = useState({
        authenticated: false,
        initializing: true,
    });
    const history = useNavigate();

    useEffect(
        () =>
            firebase.auth().onAuthStateChanged((user) => {
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
            history.push("/login");
        }

    }, [authentication, history]);

    return currentUser;
};

export default useAuth;