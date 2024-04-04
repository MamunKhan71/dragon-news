import { useContext, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useForm } from "react-hook-form"
import Navbar from "../components/Common/Navbar";

const SignUp = () => {
    const [user, setUser] = useState(null)
    const { createNewUser } = useContext(AuthContext)
    const [authError, setAuthError] = useState(null)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const handleFormSubmit = (formData) => {
        const name = formData.name;
        const photoUrl = formData.photoUrl;
        const email = formData.email;
        const password = formData.password;
        createNewUser(email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                setAuthError("Sign up Successful, Please Login")
            })
            .catch(error => setAuthError(error))
    }
    return (
        <div className="container mx-auto">
            <Navbar/>
            <div className="w-full h-dvh flex items-center justify-center">
            <div className="w-full max-w-md p-10 text-[#403F3F] bg-white rounded-md space-y-6">
                <h1 className="text-2xl font-bold text-center">Register your account</h1>
                <p className="text-center text-gray-600">
                    {
                        authError && <>{authError.message}</>
                    }
                </p>
                <hr />
                <form onSubmit={handleSubmit(handleFormSubmit)} noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block  text-[#403F3F] font-semibold">Your Name</label>
                        <input {...register('name')} type="text" name="name" id="name" placeholder="Enter your name" className="bg-[#F3F3F3] w-full px-4 py-3 rounded-md border-gray-700    text-[#403F3F] focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="photoUrl" className="block  text-[#403F3F] font-semibold">Photo URL</label>
                        <input {...register('photoUrl')} type="text" name="photoUrl" id="photoUrl" placeholder="Enter your photo url" className="bg-[#F3F3F3] w-full px-4 py-3 rounded-md border-gray-700    text-[#403F3F] focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block  text-[#403F3F] font-semibold">Email</label>
                        <input {...register('email')} type="email" name="email" id="email" placeholder="Enter your email address" className="bg-[#F3F3F3] w-full px-4 py-3 rounded-md border-gray-700    text-[#403F3F] focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block  text-[#403F3F] font-semibold">Password</label>
                        <input {...register('password')} type="password" name="password" id="password" placeholder="Enter your password" className="bg-[#F3F3F3] w-full px-4 py-3 rounded-md border-gray-700    text-[#403F3F] focus:border-violet-400" />
                    </div>
                    <div className="flex items-center">
                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium">Accept Terms & Conditions</label>
                    </div>
                    <button type="submit" className="block w-full p-3 text-center rounded-md text-white font-bold bg-[#403F3F] ">Sign in</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default SignUp;