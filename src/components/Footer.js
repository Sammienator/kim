import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import higene from '../assets/higene.png'
const Footer = () => {
  return (
    <footer className="bg-[#B7FFFB] text-[#224F34] py-10">
      <div className=" mx-auto flex flex-wrap text-[#224F34] justify-between">
        {/* Column 1 */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <div className="flex justify-center items-center mb-4">
            {/* Brand Image */}
            <img
              src={higene}
              alt="Brand Logo"
              className="w-1/2 h-1/2 mr-2"
            />
        
          </div>
          <div className='flex justify-center items-center mb-4 text-2xl ' >
                {/* Social Icons */}
                <a href="#b" className=" mr-4 ">
              <FaFacebook />
            </a>
            <a href="#b" className=" mr-4 ">
              <FaTwitter />
            </a>
            <a href="#b" className=" mr-4 ">
              <FaInstagram />
            </a>
            <a href="#b" className="mr-2 ">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0 underline">
          <div className="text-[#224F34] mb-4">
            <h1 className="mb-2 text-xl">SHOP</h1>
            <ul>
              <li>
                <a href="#b">Products.</a>
              </li>
              <li>
                <a href="#b">Overview.</a>
              </li>
              <li>
                <a href="#b">Pricing.</a>
              </li>
              <li>
                <a href="#b">Releases.</a>
              </li>
            
            </ul>
          </div>
        </div>

        {/* Column 3 */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0 underline">
          <div className="text-[#224F34] mb-4">
            <h1 className="mb-2 text-xl">Company</h1>
            <ul>
              <li>
                <a href="#b">About Us.</a>
              </li>
              <li>
                <a href="#b">Contact.</a>
              </li>
              <li>
                <a href="#b">News.</a>
              </li>
              <li>
                <a href="#b">Support.</a>
              </li>
              
              
            </ul>
          </div>
        </div>

        {/* Column 4 */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0 underline">
          <div className="text-[#224F34] mb-4">
            <h1 className="mb-2">STAY UP TO DATE.</h1>
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-[#B7FFFB] text-[#224F34] px-2 py-1 rounded border-[#224F34] mr-2"
            />
            {/* Submit Button */}
            <button className="bg-[#224F34] text-white px-4 py-2 rounded">Submit</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
