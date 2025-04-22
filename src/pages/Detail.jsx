import React from "react";
import { useLocation } from "react-router-dom";

function Detail() {
  const { state: cartItems } = useLocation(); // <-- receive items here

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-400">
          🛍️ Order Summary
        </h1>

        {/* Product List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cartItems?.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-28 h-28 object-contain bg-white rounded-lg mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-indigo-300 font-bold mt-1">₹{item.price}</p>
                <p className="text-gray-400 text-sm">Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg space-y-4 max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center text-indigo-300">Enter Your Details</h2>

          <input
            type="text"
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="number"
            placeholder="Mobile number"
            className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Full address"
            rows="4"
            className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          <button
          type="submit"
          onClick={() => alert("Order Confirmed!")} 
          className="w-full mt-6 py-3 rounded-md bg-green-600 hover:bg-green-700 text-lg font-bold transition">
            ✅ Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
