import {useDispatch} from "react-redux";
import {googleSignInStart, signOutStart} from "../redux/User/user.actions";

function SignOut () {
    const dispatch = useDispatch();

    const signOut = (e) => {
        e.preventDefault();
        dispatch(signOutStart());
    };

    return (
        <button onClick={signOut} className="font-semibold text-black border-green-600 border px-8 py-2 rounded-2xl shadow-md">Log out </button>
    )
}
export default SignOut;