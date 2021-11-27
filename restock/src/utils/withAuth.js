import useAuth from "./../hooks/useAuth";

const WithAuth = (props) => useAuth(props) && props.children;
export default WithAuth;