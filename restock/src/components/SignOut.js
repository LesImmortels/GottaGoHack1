import {useDispatch} from "react-redux";
import {signOutStart} from "../redux/User/user.actions";
import {useNavigate} from "react-router";

function SignOut () {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signOut = (e) => {
        e.preventDefault();
        dispatch(signOutStart());
        navigate("/")
    };

    return (
        <button onClick={signOut} className="hover:text-white transition font-semibold inline-flex text-gray-200 py-2 my-8  ">
            <svg className="w-6 h-6 mr-3"  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" fillRule="evenodd"/>
        </svg>Log out </button>
    )
}
export default SignOut