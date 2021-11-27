import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate/*, useNavigate*/ } from "react-router";

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
});

const useMemberAuth = (props) => {
    const { currentUser } = useSelector(mapState);
    //const history = useNavigate();

    useEffect(() => {
        if (!isMember(currentUser)) {
            return (
                <Navigate to={"/"} />
            )
        }
    }, [currentUser]);

    return currentUser;
};

export const isMember = (currentUser) => {
    if (!currentUser || !Array.isArray(currentUser.roles)) return false;
    const { roles } = currentUser;
    return !!(roles.includes("member") || roles.includes("admin"));

};

export default useMemberAuth;