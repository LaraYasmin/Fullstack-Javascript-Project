import React from 'react';

const LoginComponent = () => {
    return (
        <div className='flex flex-col w-full p-8'>
            <form className='w-full max-w-xs mx-auto'>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="text"
                        id="email"
                        className="bg-gray-200 appearance-none rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="bg-gray-200 appearance-none rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-200 rounded-xl hover:bg-blue-500 text-white font-medium text-sm py-1 w-full focus:outline-none"
                    >
                        login
                    </button>
                </div>
                
                <div className='flex justify-center mt-4'>
                    <p className='text-sm'>
                        Doesn’t have an account yet?<span className='font-medium text-blue-400'> Register.</span>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default LoginComponent;