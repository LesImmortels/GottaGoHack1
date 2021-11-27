import { Link } from "react-router-dom";
import SignInWithGoogle from "./SignInWithGoogle";
import { isMember } from "../hooks/useMemberAuth";
import { isUser } from "../hooks/useUserAuth";
import { useSelector } from "react-redux";
import SignOut from "./SignOut";

const mapState = (state) => ({
    currentUser: state.user.currentUser,
});

function Sidebar() {

    const { currentUser } = useSelector(mapState);


    return (
        <div className="w-1/3 px-4 py-8 border-r border-gray-200 bg-gray-100">
            <h1 className="font-bold text-xl">Restauck</h1>

            <hr className="my-4 -mx-4" />
            {
                currentUser && isMember(currentUser) && (
                    <ul className="space-y-4 font-semibold">
                        <li><Link to={"/"}>Dashboard</Link></li>
                        <li><Link to={"/stock"}>Stock</Link></li>
                        <li><Link to={"/orders"}>Orders</Link></li>
                    </ul>
                )
            }
            {
                currentUser && isUser(currentUser) && (
                    <ul className="space-y-4 pt-4 font-semibold">
                        <li><Link to={"/map"}>Map</Link></li>
                    </ul>
                )
            }
            {/*<div className="bottom-0 absolute pb-4 px-4">*/}
            {/*    <button onClick={}/>*/}
            {/*</div>*/}
            <div className="bottom-0 absolute pb-4">
                {
                    currentUser && (
                        <SignOut />
                    )
                }
                {
                    !currentUser && (
                        <SignInWithGoogle />
                    )
                }
            </div>

        </div>
    )
}

export default Sidebar;