import { Link } from "react-router-dom";

import img from '../../assets/logo_150x.png'

const NavBar = () => {




    const commonMenu =
        <>
            <li> <Link className='mr-3' to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            {/* {user?.email ? <>
                <li><Link to='/bookings'>Bookings</Link></li>
                <li><button onClick={handleLogOut}>Log out</button></li>

            </> :
                <li><Link to='/login'>Log in</Link></li>
            } */}
            <li><Link to='/login'>Log in</Link></li>
        </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {commonMenu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><img src={img} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {commonMenu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;