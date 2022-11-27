import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

//     className={({ isActive }) =>
//     isActive ? "bg-pink-500 px-2 py-1 rounded-md" : undefined
//   }

    const menuItems = <React.Fragment>
        <li><NavLink className={({isActive})=> isActive? 'text-amber-500': undefined} to="/">Home</NavLink></li>
        <li><NavLink className={({isActive})=> isActive? 'text-amber-500': undefined} to="/blog">Blog</NavLink></li>
        {/* <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li> */}
        {user?.uid ?
            <>
                <li><NavLink className={({isActive})=> isActive? 'text-amber-500': undefined} to="/dashboard">Dashboard</NavLink></li>
                <li><button onClick={handleLogOut}>Sign out</button></li>
            </>
            : <li><NavLink className={({isActive})=> isActive? 'text-amber-500': undefined} to="/login">Login</NavLink></li>}
    </React.Fragment>

    return (
        <div className="navbar bg-base-100 flex justify-between">
        <div className="navbar-start md:mx-10">
        <img className='h-16' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmQAqCJqHfEfPowO76cloozvOSDOo8LIEmw&usqp=CAU" alt="" />
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
            </div>
           
          
            <NavLink to="/" className="btn btn-ghost normal-case text-xl text-amber-500">Trusted Furniture</NavLink>
          
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
                {menuItems}
            </ul>
        </div>
        <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
    </div>
    );
};

export default Navbar;