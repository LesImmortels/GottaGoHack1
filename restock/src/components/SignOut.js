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
        <button onClick={signOut} className="font-semibold text-black border-green-500 border px-8 py-2 rounded-2xl shadow-md">Log out </button>
    )
}
export default SignOut;