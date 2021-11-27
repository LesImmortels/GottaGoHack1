import useUserAuth from "./../hooks/useUserAuth";

const UserAuth = (props) => useUserAuth(props) && props.children;

export default UserAuth;