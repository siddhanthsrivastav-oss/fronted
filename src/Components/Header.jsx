import React from "react";
import { FaShoppingCart, FaHeart, FaSearch, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-600">
          Shopyfy
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="hidden md:flex gap-8 font-medium text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">Shop</li>
            <li className="hover:text-blue-600 cursor-pointer">Categories</li>
            <li className="hover:text-blue-600 cursor-pointer">About</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center border rounded-lg px-3 py-2">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none ml-2"
            />
          </div>

          <FaHeart className="text-xl cursor-pointer" />
          <FaShoppingCart className="text-xl cursor-pointer" />

          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <FaUser />
            Login
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;