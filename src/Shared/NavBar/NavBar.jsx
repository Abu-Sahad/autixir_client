import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import img from "../../assets/logo_150x.png";

const NavBar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch((error) => console.log(error));
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const commonMenu = (
        <>
            <li>
                {" "}
                <Link className="mr-3" to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/about">blogs</Link>
            </li>
            {user?.email ? (
                <>
                    <li>
                        <Link to="/about">All Toys</Link>
                    </li>
                    <li>
                        <Link to="/about">Add A Toy</Link>
                    </li>
                    <li>
                        <button onClick={handleLogOut}>Log out</button>
                    </li>
                </>
            ) : (
                <li>
                    <Link to="/login">Log in</Link>
                </li>
            )}
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {commonMenu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <img src={img} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{commonMenu}</ul>
                </div>
                <div className="navbar-end">
                    {user && (
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginRight: "30px",
                                position: "relative",
                            }}
                        >
                            <div
                                style={{
                                    width: "32px",
                                    height: "32px",
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                    marginRight: "8px",
                                }}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img
                                    src={user.photoURL}
                                    alt="User"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                                {isHovered && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            bottom: 0,
                                            left: 0,
                                            width: "100%",
                                            background: "rgba(255, 255, 255, 0)",
                                            color: "black",
                                            padding: "4px",
                                            textAlign: "center",
                                            borderRadius: "0 0 8px 8px",
                                        }}
                                    >
                                        {user.displayName}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
