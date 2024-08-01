import React from 'react';
import line from '../assets/line.svg';

const VerificationComponent = () => {
    return (
        <div className='flex flex-col w-full p-8'>
            <form className='w-full max-w-xs mx-auto'>
                <div className='flex justify-center'>
                    <p className='text-sm'>
                        Write the verification code below.
                    </p>
                </div>
                <div className="flex justify-center mt-4 mb-4">
                    <input
                        type="text"
                        id="code1"
                        className="bg-gray-200 mr-3 text-center appearance-none rounded-xl w-6 py-3 text-gray-700 leading-tight focus:outline-none"
                    />
                    <input
                        type="text"
                        id="code2"
                        className="bg-gray-200 mr-3 text-center appearance-none rounded-xl w-6 py-3 text-gray-700 leading-tight focus:outline-none"
                    />
                    <input
                        type="text"
                        id="code3"
                        className="bg-gray-200 mr-3 appearance-none rounded-xl text-center w-6 py-3 text-gray-700 leading-tight focus:outline-none"
                    />
                    <input
                        type="text"
                        id="code4"
                        className="bg-gray-200 text-center appearance-none rounded-xl w-6 py-3 text-gray-700 leading-tight focus:outline-none"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-blue-200 rounded-lg mt-2 hover:bg-blue-500 text-white font-medium text-sm py-1 w-1/3 focus:outline-none"
                    >
                        send
                    </button>
                </div>
                <img src={line} alt="image_line" className='w-100 mt-8 h-auto'/>
                <div className='flex justify-center mt-4'>
                    <p className='text-sm'>
                        Already have an account?<span className='font-medium text-blue-400'> Login.</span>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default VerificationComponent;