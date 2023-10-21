import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { useContext, useEffect, useState } from "react";
import userImg from '../../assets/user.png'
import swal from "sweetalert";
import Swal from "sweetalert2";


const Navbar = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    // Handle Toggle.
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Logout Successful',
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })
            })
            .catch(error => {
                console.log();
                swal(error.message)
            })
    }

    const navLinks = <>
        <NavLink to="/" className="text-base mr-3 font-semibold">Home</NavLink>

        <NavLink to="/addProduct" className="text-base mr-3 font-semibold">Add Product</NavLink>

        <NavLink to="/carts" className="text-base font-semibold">My Cart</NavLink>
    </>

    return (
        <nav className="navbar bg-gray-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center text-center">
                    <img className="w-28" src="https://i.ibb.co/hB3V9FD/logo.png" alt="" />
                    <h2 className="text-xl font-bold hidden md:block">Spark Fusion</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex items-center gap-2">

                    {
                        user ? <div className="flex gap-2">
                            <div className="flex items-center gap-2"> <h2 className="text-sm font-semibold hidden md:block">{user?.displayName}</h2> <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" /> </div>

                            <button onClick={handleLogOut} className="bg-[#CE1446] text-white font-semibold px-4 py-2 rounded hover:bg-rose-400">Log Out</button>
                        </div>
                            :
                            <div className="flex items-center gap-2">
                                <label >
                                    <div className="w-10 rounded-full hidden md:block">
                                        <img src={userImg} />
                                    </div>
                                </label>

                                <Link to="/login">
                                    <button className="bg-[#CE1446] text-white font-semibold px-4 py-2 rounded hover:bg-rose-400">Login</button>
                                </Link>

                                <input onChange={handleToggle} type="checkbox" className="toggle toggle-primary" />
                            </div>

                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;