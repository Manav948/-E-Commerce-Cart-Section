import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
    const { totalQuantity, totalAmount } = useSelector((state) => state.cart)
    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
            <h1 className="text-2xl font-bold">🛒 E-Commerce Cart</h1>
            <div className="flex gap-6 items-center">
                <p className="text-lg">Total Items: <strong>{totalQuantity}</strong></p>
                <p className="text-lg">Total Price: <strong>₹{totalAmount}</strong></p>
                
            </div>
        </nav>
    );
}

export default Navbar;