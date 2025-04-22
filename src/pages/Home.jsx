import React, { useEffect, useState } from 'react';
import { getAllItems } from '../service/api';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

function ProductList() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchitem = async () => {
      const item = await getAllItems();
      setProducts(item);
    };
    fetchitem();
  }, []);

  const handleAddCart = (product) => {
   window.alert("Product Added to Cart")
    dispatch(addToCart(product))
  }
  const handleOrderDetail = (product) => {
    dispatch(addToCart(product))
    navigate('/order-detail ', { state: product })
  }

  return (
    <div className="min-h-screen bg-gray-950 from-slate-100 to-slate-200 py-12 px-4">
      <h1 className="text-4xl font-extrabold text-center text-gray-100 mb-10">🛍️ Featured Products</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-black rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border hover:border-indigo-500 p-5 flex flex-col justify-between"
          >
            <div className="w-full h-48 flex items-center justify-center overflow-hidden mb-4">
              <img
                src={product.images[0]}
                alt={product.title}
                className="h-full object-contain transform hover:scale-105 transition-transform duration-300 rounded-2xl"
              />
            </div>
            <h2 className="text-lg font-semibold text-white line-clamp-2">{product.title}</h2>
            <p className="text-indigo-600 font-bold text-xl mt-2">${product.price}</p>
            <div className='flex flex-row gap-12'>
              <button onClick={() => handleAddCart(product)} className="mt-4  bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-2 rounded-xl transition-all">
                Add to Cart
              </button>

              <button onClick={() => handleOrderDetail(product)} className="mt-4  bg-red-600 hover:bg-red-700 text-white py-2 px-1 rounded-xl transition-all">
                Buy This Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
