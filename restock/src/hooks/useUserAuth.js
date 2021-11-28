import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate/*, useNavigate */ } from "react-router";

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
});

const useUserAuth = (props) => {
    const { currentUser } = useSelector(mapState);
    //const history = useNavigate();

    useEffect(() => {
        if (!isUser(currentUser)) {
            return (
                <Navigate to={"/"} />
            )
        }
    }, [currentUser]);

    return currentUser;
};

export const isUser = (currentUser) => {
    if (!currentUser || !Array.isArray(currentUser.roles)) return false;
    const { roles } = currentUser;
    return !!(roles.includes("user") || roles.includes("admin"));

};

export default useUserAuth;