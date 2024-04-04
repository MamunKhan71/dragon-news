import { Link } from "react-router-dom";
import Navbar from "../components/Common/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useForm } from "react-hook-form"
const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const [authError, setAuthError] = useState(null)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const handleLogin = (data) => {
        const email = data.email
        const password = data.password
        loginUser(email, password)
            .then(result => console.log(result.user))
            .catch(error => console.log(error.message))
    }
    return (
        <div className="container mx-auto">
            <Navbar/>
            <div className="w-full h-dvh flex items-center justify-center">
            <div className="w-full max-w-md p-10 text-[#403F3F] bg-white rounded-md space-y-6">
                <h1 className="text-2xl font-bold text-center">Login your account</h1>
                <hr />
                <form onSubmit={handleSubmit(handleLogin)} noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block  text-[#403F3F] font-semibold">Email address</label>
                        <input {...register('email')} type="email" name="email" id="email" placeholder="Enter your email address" className="bg-[#F3F3F3] w-full px-4 py-3 rounded-md border-gray-700    text-[#403F3F] focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block  text-[#403F3F] font-semibold">Password</label>
                        <input {...register('password')} type="password" name="password" id="password" placeholder="Enter your password" className="bg-[#F3F3F3] w-full px-4 py-3 rounded-md border-gray-700    text-[#403F3F] focus:border-violet-400" />
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