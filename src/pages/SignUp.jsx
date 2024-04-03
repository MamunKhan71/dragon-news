import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useForm } from "react-hook-form"

const SignUp = () => {
    const { createNewUser } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    return (
        <div className="w-full h-dvh flex items-center justify-center">
            <div className="w-full max-w-md p-10 text-black bg-white rounded-md space-y-6">
                <h1 className="text-2xl font-bold text-center">Register your account</h1>
                <hr />
                <form noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block  text-black font-semibold">Your Name</label>
                        <input type="text" name="username" id="username" placeholder="Enter your name" className="bg-[#F3F3F3] w-full px-4 py-3 rounded-md border-gray-700    text-black focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block  text-black font-semibold">Photo URL</label>
                        <input type="password" name="password" id="password" placeholder="Enter your photo url" className="bg-[#F3F3F3] w-full px-4 py-3 rounded-md border-gray-700    text-black focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block  text-black font-semibold">Email</label>
                        <input type="password" name="password" id="password" placeholder="Enter your email address" className="bg-[#F3F3F3] w-full px-4 py-3 rounded-md border-gray-700    text-black focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block  text-black font-semibold">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" className="bg-[#F3F3F3] w-full px-4 py-3 rounded-md border-gray-700    text-black focus:border-violet-400" />
                    </div>
                    <div className="flex items-center">
                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium">Accept Terms & Conditions</label>
                    </div>
                    <button className="block w-full p-3 text-center rounded-md text-white font-bold bg-[#403F3F] ">Sign in</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;