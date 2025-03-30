import React from "react";
import { useDispatch } from 'react-redux'
import { addToCart } from "../features/cart/cartSlice";

const products = [
    { id: 1, name: 'laptop', price: 50000 },
    { id: 2, name: 'SmartPhone', price: 20000 },
    { id: 3, name: 'HeadPhones', price: 1500 }
]

function ProductList() {
    const dispatch = useDispatch()
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <div className="grid grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="border shadow-md p-6 rounded-lg bg-white">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-gray-600 text-lg">₹{product.price}</p>
                        <button
                            className="bg-green-500 text-white px-4 py-2 mt-3 rounded hover:bg-green-600 transition"
                            onClick={() => dispatch(addToCart(product))}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;