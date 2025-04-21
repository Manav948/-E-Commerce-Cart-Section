import React from 'react';
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-8 mt-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">🛒 E-Commerce Cart</h2>
          <p className="text-gray-00 text-sm font-bold">
            Your go-to platform for discovering all items and buy it .
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-x-4 text-md text-gray-400 ">
            <Link to="/" className="hover:text-white cursor-pointer">Home</Link>
            <Link to="/cart" className="hover:text-white cursor-pointer">Cart</Link>
            <Link to="/order-detail"className="hover:text-white cursor-pointer">Contact</Link>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 ">
            <a href="https://www.facebook.com/" className="hover:text-blue-400">Facebook</a>
            <a href="https://www.twitter.com/" className="hover:text-sky-400">Twitter</a>
            <a href="https://www.instagram.com/" className="hover:text-pink-400">Instagram</a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-xs hover:text-white cursor-pointer duration-300">
        &copy; {new Date().getFullYear()} 🛒 E-Commerce Cart . All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
