import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cart/cartSlice";

function Cart() {
  const { cartItem, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4">
      <div className="max-w-5xl mx-auto bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-8">
          🛒 Your Shopping Cart
        </h2>

        {cartItem.length === 0 ? (
          <p className="text-gray-300 text-center">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-6">
              {cartItem.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row justify-between items-center bg-black border border-gray-700 p-4 rounded-xl shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-contain bg-white rounded-md"
                    />
                    <div>
                      <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                      <p className="text-indigo-400 font-bold mt-1">₹{item.price}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-0">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      className="w-20 px-2 py-1 rounded-md text-center text-black"
                      onChange={(e) =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: Number(e.target.value),
                          })
                        )
                      }
                    />
                    <button
                      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>

                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Buy this now 
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-right mt-8">
              <h3 className="text-2xl font-bold text-white">
                Total: <span className="text-green-400">₹{totalAmount}</span>
              </h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
