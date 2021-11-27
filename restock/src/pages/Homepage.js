import SignInWithGoogle from "../components/SignInWithGoogle";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
});

function Homepage() {
  const { currentUser } = useSelector(mapState);

  if (currentUser != null) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div className="text-black px-32 py-16 flex flex-col">
      <h1 className="font-bold text-2xl inline-flex">
        Restauck. Your solution to a more
        <p className="text-green-400 px-1"> ecologic </p> approach to
        distribution.
      </h1>
      <SignInWithGoogle />
    </div>
  );
}

export default Homepage;
