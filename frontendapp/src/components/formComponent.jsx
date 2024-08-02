import React from "react";

const FormComponent = () => {
    return (
        <div className='flex flex-col w-1/3 rounded-3xl p-8 bg-gray-100'>
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
                        email
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
                        type="text"
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
                       send
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormComponent;