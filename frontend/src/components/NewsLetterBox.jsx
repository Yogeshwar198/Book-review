import React from 'react';
import joinbg from '../assets/join-bg.jpg';

const NewsLetterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    };

    return (
        <div className="relative w-full">
            {/* Background Image */}
            
            <img src={joinbg} alt="Join Background" className="w-full object-cover" />
        
            
            {/* Overlay Content */}
            <div className="absolute inset-0 p-4 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
                <p className="text-2xl font-medium text-white">Subscribe now & get 50% off</p>
                <p className="text-gray-300 mt-3">And To <br /> Receive The Latest Updates</p>
                <form
                    onSubmit={onSubmitHandler}
                    className="w-full sm:w-1/2 flex items-center gap-3 mx-auto mt-6 border border-gray-300 bg-white p-2 rounded-lg shadow-md"
                >
                    <input
                        className="w-full flex-1 outline-none bg-transparent text-gray-800 placeholder-gray-500 px-2"
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-black text-white text-sm px-6 py-2 rounded-lg hover:bg-gray-800"
                    >
                        SUBSCRIBE
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewsLetterBox;
