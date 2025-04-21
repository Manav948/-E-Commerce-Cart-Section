import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
    const HandleButton = () => {
        window.location.href = '/cart';
    }
    const handleHome = () => {
        window.location.href = '/';
    }
    return (
        <div>
            <nav className="bg-blue-950 text-white p-4 flex justify-between items-center shadow-md">
                <h1 className="text-2xl font-bold">🛒 E-Commerce Cart</h1>
                <form className="flex flex-wrap gap-2 items-center justify-center">
                    <input
                        type="text"
                        placeholder="Search Your Items..."
                        className="w-full sm:w-80 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-100 text-white"
                    />
                    <button
                        type="submit"
                        className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300">
                        Search
                    </button>
                </form>
                <div className="flex gap-6 items-center">
                    <button onClick={HandleButton} className="flex items-center gap-2 bg-red-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                        🛒 Cart
                    </button>

                    <button onClick={handleHome} className="flex items-center gap-2 bg-red-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                        Home
                    </button>
                </div>

            </nav>
            <div />
 
        </div>

    );
}

export default Navbar;