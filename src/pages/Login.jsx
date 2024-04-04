import { Link } from "react-router-dom";
import Navbar from "../components/Common/Navbar";

const Login = () => {
    return (
        <div className="container mx-auto">
            <Navbar/>
            <div className="w-full h-dvh flex items-center justify-center">
            <div className="w-full max-w-md p-10 text-[#403F3F] bg-white rounded-md space-y-6">
                <h1 className="text-2xl font-bold text-center">Login your account</h1>
                <hr />
                <form noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block  text-[#403F3F] font-semibold">Email address</label>
                        <input type="text" name="username" id="username" placeholder="Enter your email address" className="bg-[#F3F3F3] w-full px-4 py-3 rounded-md border-gray-700    text-[#403F3F] focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block  text-[#403F3F] font-semibold">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" className="bg-[#F3F3F3] w-full px-4 py-3 rounded-md border-gray-700    text-[#403F3F] focus:border-violet-400" />
                        <div className="flex justify-end text-xs  text-[#403F3F] font-semibold">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-md text-white font-bold bg-[#403F3F]">Sign in</button>
                </form>
                <p className="text-xs text-center sm:px-6  text-[#403F3F] font-semibold">Don't have an account?
                    <Link to="/signup" className="text-[#403F3F]"> Register</Link>
                </p>
            </div>
        </div>
        </div>
    );
};

export default Login;