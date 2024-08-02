import React from "react";

const FormComponent = () => {
    return (
        <div className='flex flex-col w-full md:w-1/2 p-12 md:p-10'>
            <div className="bg-gray-100 w-full md:w-8/12 p-5 rounded-3xl mx-auto">
                <form className='w-full max-w-xs mx-auto'>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="company">
                            Company name
                        </label>
                        <input
                            type="text"
                            id="company"
                            className="shadow-md bg-white appearance-none rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="shadow-md bg-white appearance-none rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            className="shadow-md bg-white appearance-none rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="contact">
                            Contact (Phone number)
                        </label>
                        <input
                            type="text"
                            id="contact"
                            className="shadow-md bg-white appearance-none rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="responsible">
                            Responsible
                        </label>
                        <input
                            type="text"
                            id="responsible"
                            className="shadow-md bg-white appearance-none rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        />
                    </div>
                    
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-black rounded-xl hover:bg-blue-500 text-white text-sm py-1 w-32 focus:outline-none"
                        >
                        Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormComponent;
