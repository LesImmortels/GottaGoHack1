import {googleSignInStart} from "../redux/User/user.actions";
import {useDispatch} from "react-redux";

function SignInWithGoogle() {
    const dispatch = useDispatch();

    const handleGoogleSignIn = (e) => {
        e.preventDefault();

        dispatch(googleSignInStart());
    };

    return (
        <button onClick={handleGoogleSignIn}>Sign in </button>
    )
}

export default SignInWithGoogle;