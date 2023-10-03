import React from 'react';
import foo2 from "../assets/foo2.png"
import foo3 from "../assets/foo3.png"
import foo4 from "../assets/foo4.png"
import foo5 from "../assets/foo5.png"

const Footer = () => {
  return (
    <footer className="bg-[#B7FFFB] text-white py-8">
      <div className="container mx-auto flex mt-10 flex-wrap">
        {/* Column 1: Brand and Social Media Icons */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <img class="rounded-xl" src={foo2} alt=""/>
        
        </div>

        {/* Column 2: Navbar Links */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <img class="rounded-xl" src={foo3} alt=""/>
          
      
        </div>

        {/* Column 3: Company Links */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <img class="rounded-xl" src={foo4} alt=""/>
        </div>

        {/* Column 4: Search Bar */}
        <div className="w-full md:w-1/4">
        <img class="rounded-xl" src={foo5} alt=""/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
