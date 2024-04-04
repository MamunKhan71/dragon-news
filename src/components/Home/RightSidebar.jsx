import { Link } from "react-router-dom";
const RightSidebar = () => {
    return (
        <div className="space-y-4">
            <h1 className="font-bold text-[#403F3F]">Login With</h1>
            <div className="flex flex-col gap-4">
                <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                    <p>Login with Google</p>
                </button>
                <button aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                    </svg>
                    <p>Login with GitHub</p>
                </button>
            </div>
            <h1 className="font-bold text-[#403F3F] w-full">Find Us On</h1>
            <div className="border rounded-md">
                <button aria-label="Login with GitHub" role="button" className="flex items-center justify-start w-full p-4 space-x-4 rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <rect width="30" height="30" rx="15" fill="#F3F3F3" />
                        <path d="M18.2586 16.2051L18.6472 13.6456H16.2158V11.9854C16.2158 11.2851 16.5548 10.6019 17.6438 10.6019H18.75V8.42294C18.75 8.42294 17.7466 8.25 16.7877 8.25C14.7843 8.25 13.476 9.47611 13.476 11.6949V13.6456H11.25V16.2051H13.476V22.3928C13.9229 22.4637 14.3801 22.5 14.8459 22.5C15.3117 22.5 15.7689 22.4637 16.2158 22.3928V16.2051H18.2586Z" fill="#3B599C" />
                    </svg>
                    <p>Facebook</p>
                </button>
                <hr />
                <button aria-label="Login with GitHub" role="button" className="flex items-center justify-start w-full p-4 space-x-4 rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <rect width="30" height="30" rx="15" fill="#F3F3F3" />
                        <path d="M12.7228 20.25C11.0765 20.25 9.54175 19.8205 8.25 19.0793C9.34674 19.143 11.2822 18.9905 12.4861 17.9604C10.6751 17.8859 9.85835 16.64 9.75182 16.1075C9.90569 16.1608 10.6396 16.2246 11.0539 16.0756C8.97059 15.607 8.651 13.967 8.72202 13.4665C9.11263 13.7115 9.77549 13.7967 10.0359 13.7754C8.09467 12.5294 8.79304 10.6552 9.13631 10.2505C10.5294 11.9818 12.6172 12.9541 15.2001 13.0082C15.1514 12.8166 15.1257 12.6171 15.1257 12.4123C15.1257 10.9419 16.4506 9.75 18.0849 9.75C18.9388 9.75 19.7082 10.0754 20.2483 10.5959C20.819 10.4759 21.6777 10.1951 22.0976 9.95233C21.8859 10.6339 21.2271 11.2024 20.8286 11.4131C20.8254 11.4059 20.8319 11.4203 20.8286 11.4131C21.1787 11.3656 22.1258 11.2024 22.5 10.9746C22.315 11.3575 21.6165 11.9941 21.0433 12.3505C21.1499 16.5695 17.5514 20.25 12.7228 20.25Z" fill="#58A7DE" />
                    </svg>
                    <p>Twitter</p>
                </button>
                <hr />
                <button aria-label="Login with GitHub" role="button" className="flex items-center justify-start w-full p-4 space-x-4 rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <rect width="30" height="30" rx="15" fill="#F3F3F3" />
                        <path d="M20.3625 11.4562C20.3625 12.0465 19.884 12.525 19.2937 12.525C18.7035 12.525 18.225 12.0465 18.225 11.4562C18.225 10.866 18.7035 10.3875 19.2937 10.3875C19.884 10.3875 20.3625 10.866 20.3625 11.4562Z" fill="url(#paint0_linear_0_148)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.375 18.9375C17.3425 18.9375 18.9375 17.3425 18.9375 15.375C18.9375 13.4075 17.3425 11.8125 15.375 11.8125C13.4075 11.8125 11.8125 13.4075 11.8125 15.375C11.8125 17.3425 13.4075 18.9375 15.375 18.9375ZM15.375 17.5125C16.5555 17.5125 17.5125 16.5555 17.5125 15.375C17.5125 14.1945 16.5555 13.2375 15.375 13.2375C14.1945 13.2375 13.2375 14.1945 13.2375 15.375C13.2375 16.5555 14.1945 17.5125 15.375 17.5125Z" fill="url(#paint1_linear_0_148)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.25 15.09C8.25 12.6958 8.25 11.4987 8.71595 10.5842C9.12581 9.7798 9.7798 9.12581 10.5842 8.71595C11.4987 8.25 12.6958 8.25 15.09 8.25H15.66C18.0542 8.25 19.2513 8.25 20.1658 8.71595C20.9702 9.12581 21.6242 9.7798 22.0341 10.5842C22.5 11.4987 22.5 12.6958 22.5 15.09V15.66C22.5 18.0542 22.5 19.2513 22.0341 20.1658C21.6242 20.9702 20.9702 21.6242 20.1658 22.0341C19.2513 22.5 18.0542 22.5 15.66 22.5H15.09C12.6958 22.5 11.4987 22.5 10.5842 22.0341C9.7798 21.6242 9.12581 20.9702 8.71595 20.1658C8.25 19.2513 8.25 18.0542 8.25 15.66V15.09ZM15.09 9.675H15.66C16.8806 9.675 17.7104 9.67611 18.3518 9.72851C18.9765 9.77955 19.296 9.87207 19.5189 9.98563C20.0551 10.2589 20.4911 10.6949 20.7644 11.2311C20.8779 11.454 20.9704 11.7735 21.0215 12.3982C21.0739 13.0396 21.075 13.8694 21.075 15.09V15.66C21.075 16.8806 21.0739 17.7104 21.0215 18.3518C20.9704 18.9765 20.8779 19.296 20.7644 19.5189C20.4911 20.0551 20.0551 20.4911 19.5189 20.7644C19.296 20.8779 18.9765 20.9704 18.3518 21.0215C17.7104 21.0739 16.8806 21.075 15.66 21.075H15.09C13.8694 21.075 13.0396 21.0739 12.3982 21.0215C11.7735 20.9704 11.454 20.8779 11.2311 20.7644C10.6949 20.4911 10.2589 20.0551 9.98563 19.5189C9.87207 19.296 9.77955 18.9765 9.72851 18.3518C9.67611 17.7104 9.675 16.8806 9.675 15.66V15.09C9.675 13.8694 9.67611 13.0396 9.72851 12.3982C9.77955 11.7735 9.87207 11.454 9.98563 11.2311C10.2589 10.6949 10.6949 10.2589 11.2311 9.98563C11.454 9.87207 11.7735 9.77955 12.3982 9.72851C13.0396 9.67611 13.8694 9.675 15.09 9.675Z" fill="url(#paint2_linear_0_148)" />
                        <defs>
                            <linearGradient id="paint0_linear_0_148" x1="15.375" y1="8.25" x2="15.375" y2="22.5" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0625" stopColor="#D82D7E" />
                                <stop offset="1" stopColor="#FBA756" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_0_148" x1="15.375" y1="8.25" x2="15.375" y2="22.5" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0625" stopColor="#D82D7E" />
                                <stop offset="1" stopColor="#FBA756" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_0_148" x1="15.375" y1="8.25" x2="15.375" y2="22.5" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0625" stopColor="#D82D7E" />
                                <stop offset="1" stopColor="#FBA756" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <p>Instagram</p>
                </button>
            </div>
            <div className="w-full">
                <div className="bg-[#F3F3F3] p-4 rounded-md">
                    <h1 className="font-bold text-lg">Q-Zone</h1>
                    <div className="flex items-center justify-center flex-col gap-4">
                        <img src="/src/assets/qZone1.png" alt="" />
                        <img src="/src/assets/qZone2.png" alt="" />
                        <img src="/src/assets/qZone3.png" alt="" />
                    </div>
                </div>
                <div className="bg-[url('/src/assets/bg.png')] p-8 space-y-4 text-white text-center">
                    <h1 className="text-3xl font-bold leading-[45px]">Create an Amazing Newspaper</h1>
                    <p className="text-base leading-8">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <div>
                        <Link to="/login" className="relative inline-flex items-center justify-center px-10 font-bold rounded-md py-3 overflow-hidden font-mono tracking-tighter text-white bg-[#D72050]  group">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-900 rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="absolute inset-0 w-full h-full -mt-1  opacity-30 bg-gradient-to-b rounded-md from-transparent via-transparent to-gray-700"></span>
                            <span className="relative text-xl">Latest</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;