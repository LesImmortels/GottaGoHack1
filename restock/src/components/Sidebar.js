import { Link } from "react-router-dom";
import SignInWithGoogle from "./SignInWithGoogle";
import { isMember } from "../hooks/useMemberAuth";
import { isUser } from "../hooks/useUserAuth";
import { useSelector } from "react-redux";
import SignOut from "./SignOut";
import Logo from "../assets/restauck.png";

const mapState = (state) => ({
    currentUser: state.user.currentUser,
});

function Sidebar() {
    const { currentUser } = useSelector(mapState);

    return (
        <>
            {currentUser && (
                <div className="bg-gradient-to-tr font-semibold from-black to-darkG text-gray-200 pl-16 pr-20 py-16 lg:w-3/12">
                    <h1 className="inline-flex items-end text-4xl pb-8">
                        <img src={Logo} width={32} className="mr-2" />
                        Restauck.
                    </h1>
                    {currentUser && (
                        <p className="capitalize py-4 text-xl text-white">
                            Hello, {currentUser.displayName.split(" ")[0]}
                        </p>
                    )}
                    {currentUser && isMember(currentUser) && (
                        <ul className="space-y-4 font-semibold">
                            <li>
                                <Link
                                    to={"/"}
                                    className="inline-flex hover:text-white transition"
                                >
                                    <svg
                                        className="w-6 h-6 mr-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                                    </svg>
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/stock"}
                                    className="inline-flex hover:text-white transition"
                                >
                                    <svg
                                        className="w-6 h-6 mr-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                                        <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                                        <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                                    </svg>
                                    Stock
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="inline-flex hover:text-white transition"
                                    to={"/orders"}
                                >
                                    <svg
                                        className="w-6 h-6 mr-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                        <path
                                            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                    Orders
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/"}
                                    className="inline-flex hover:text-white transition"
                                >
                                    <svg
                                        className="w-6 h-6 mr-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                    Settings
                                </Link>
                            </li>
                        </ul>
                    )}
                    {currentUser && isUser(currentUser) && (
                        <ul className="space-y-4 t-4 font-semibold">
                            <li>
                                <Link
                                    to={"/map"}
                                    className="inline-flex hover:text-white transition"
                                >
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" fillRule="evenodd"
                                        />
                                    </svg>
                                    Map
                                </Link>
                            </li>



                        </ul>
                    )}
                    {/*<div className="bottom-0 absolute pb-4 px-4">*/}
                    {/*    <button onClick={}/>*/}
                    {/*</div>*/}
                    <div className="bottom-0 absolute pb-4">
                        {currentUser && <SignOut />}
                        {!currentUser && <SignInWithGoogle />}
                    </div>
                </div>
            )
            }
        </>
    );
}

export default Sidebar;
