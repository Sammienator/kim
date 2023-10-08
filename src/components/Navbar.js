import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import higene from '../assets/higene.png'

const Navbar = () => {
  return (
    <nav className= "bg-[#B7FFFB] flex justify-between p-4">
      <div className="flex items-center">
        {/* Brand */}
    
        <a href='#home' class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img class=" rounded-xl" src={higene} alt=""/>
    </a>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        {/* Nav Links */}
        <div class="md:ml-auto md:mr-auto flex flex-wrap items-center text-[#224F34] justify-center">
      <a href='#home' class="mr-5 hover:text-gray-900  cursor-pointer">HOME</a>
      <a href='#shop' class="mr-5 hover:text-gray-900  cursor-pointer">SHOP</a>
      <a href='#features' class="mr-5 hover:text-gray-900 cursor-pointer">FEATURES</a>
      <a href='#contact' class="mr-5 hover:text-gray-900 cursor-pointer">CONTACT</a>
     
    </div>
      </div>
      <div className="flex items-center p-4 m-4 hover:text-aqua-900  cursor-pointer">
        {/* Shopping Cart and Login Button */}
        <FaShoppingCart className="text-gray-700 m-4 " />
        <FaUser className="text-gray-700 " />
      </div>
    </nav>
  );
};

export default Navbar;
