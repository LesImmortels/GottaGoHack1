import useMemberAuth  from "./../hooks/useMemberAuth";

const MemberAuth = (props) => useMemberAuth(props) && props.children;

export default MemberAuth;