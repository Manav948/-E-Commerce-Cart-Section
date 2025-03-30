import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cart/cartSlice";

function Cart() {
    const { cartItem, totalAmount } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            {cartItem.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                <div>
                    {cartItem.map((item) => (
                        <div key={item.id} className="bg-white border shadow-md p-4 mb-3 rounded-lg flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <p className="text-gray-600">₹{item.price}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    value={item.quantity}
                                    min="1"
                                    className="border p-1 w-16 text-center"
                                    onChange={(e) =>
                                        dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
                                    }
                                />
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <h3 className="text-lg font-bold mt-4">Total: ₹{totalAmount}</h3>
                </div>
            )}
        </div>
    );
}

export default Cart;