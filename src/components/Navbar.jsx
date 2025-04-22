import React from "react";
import { useState } from "react";
import { searchItems } from "../service/api.js";
function Navbar() {

    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const HandleButton = () => {
        window.location.href = '/cart';
    }
    const handleHome = () => {
        window.location.href = '/';
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        const data = await searchItems(search);
        setResults(data);
        console.log(data);
    };
    return (
        <div>
            <nav className="bg-blue-950 text-white p-4 flex justify-between items-center shadow-md">
                <h1 className="text-2xl font-bold">🛒 E-Commerce Cart</h1>
                <form className="flex flex-wrap gap-2 items-center justify-center"  onSubmit={handleSearch}>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        placeholder="Search Your Items..."
                        className="w-full sm:w-80 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-100 text-white"
                    />
                    <button
                        type="button"
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