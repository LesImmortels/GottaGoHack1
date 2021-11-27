import {googleSignInStart} from "../redux/User/user.actions";
import {useDispatch} from "react-redux";

function SignInWithGoogle() {
    const dispatch = useDispatch();

    const handleGoogleSignIn = (e) => {
        e.preventDefault();

        dispatch(googleSignInStart());
    };

    return (
        <button onClick={handleGoogleSignIn} className="font-semibold text-white bg-green-500 px-8 py-2 rounded-2xl shadow-md">Sign in </button>
    )
}

export default SignInWithGoogle;