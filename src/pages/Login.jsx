const Login = () => {
    return (
        <div className="w-full h-dvh flex items-center justify-center">
            <div className="w-full max-w-md p-10 text-black bg-white rounded-md space-y-6">
                <h1 className="text-2xl font-bold text-center">Login your account</h1>
                <hr />
                <form noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block  text-black font-semibold">Email address</label>
                        <input type="text" name="username" id="username" placeholder="Enter your email address" className="bg-[#F3F3F3] w-full px-4 py-3 rounded-md border-gray-700    text-black focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block  text-black font-semibold">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" className="bg-[#F3F3F3] w-full px-4 py-3 rounded-md border-gray-700    text-black focus:border-violet-400" />
                        <div className="flex justify-end text-xs  text-black font-semibold">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Sign in</button>
                </form>
                <p className="text-xs text-center sm:px-6  text-black font-semibold">Don't have an account?
                    <a rel="noopener noreferrer" href="#" className="text-black"> Register</a>
                </p>
            </div>
        </div>
    );
};

export default Login;