import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    const navLinks = <>
        <NavLink className={({isActive}) => isActive ? 'bg-[#403F3F] btn  text-white': 'btn shadow-none bg-transparent border-none'} to="/">Home</NavLink>
        <NavLink className={({isActive}) => isActive ? 'bg-[#403F3F] btn  text-white': 'btn shadow-none bg-transparent border-none'} to="/about">About</NavLink>
        <NavLink className={({isActive}) => isActive ? 'bg-[#403F3F] btn  text-white': 'btn shadow-none bg-transparent border-none'} to="/career">Career</NavLink>
    </>
    return (
        <div className="navbar px-0">
            <div className="navbar-start">

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold gap-4">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <div className="avatar">
                    <div className="w-8 rounded-full ring ring-[#403F3F] hover:cursor-pointer ring-offset-base-100 ring-offset-2">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <Link to="/login" className="relative inline-flex items-center justify-center px-10 font-bold rounded-md py-3 overflow-hidden font-mono tracking-tighter text-white bg-[#403F3F]  group">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-900 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1  opacity-30 bg-gradient-to-b rounded-md from-transparent via-transparent to-gray-700"></span>
                    <span className="relative">Login</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;