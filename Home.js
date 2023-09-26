

import React from 'react';
import pic1 from '../assets/pic1.png';
import higene from '../assets/higene.png'
import { HiOutlineShoppingBag } from 'react-icons/hi';


const Home = () => {
  return (
    
    <div >
        <>
        <header class="text-[#224F34]  bg-[#B7FFFB] body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href='#home' class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img class=" rounded-xl" src={higene} alt=""/>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-[#224F34] justify-center">
      <a href='#home' class="mr-5 hover:text-gray-900  cursor-pointer">HOME</a>
      <a href='#shop' class="mr-5 hover:text-gray-900  cursor-pointer">SHOP</a>
      <a href='#features' class="mr-5 hover:text-gray-900 cursor-pointer">FEATURES</a>
      <a href='#contact' class="mr-5 hover:text-gray-900 cursor-pointer">CONTACT</a>
     
    </nav>
    <a href='#contact' class="mr-5 text-5xl hover:text-gray-900 cursor-pointer"> <HiOutlineShoppingBag/></a>
    <button class="inline-flex items-center bg-[#B7FFFB] border-0 py-2 px-5 focus:outline-none  rounded text-base text-[#224F34] mt-4 hover:bg-opacity-80">LOGIN
    </button>
  </div>
</header>

<div class=" mx-auto flex px-5 py-5 md:flex-row flex-col items-center bg-[#B7FFFB]">
    <div class="container lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font tracking-wide sm:text-5xl md:text-7xl xl:text-8xl mb-4 font-bold text-[#224F34] md:ml-16 ">Welcome to <br/> the world of <br/> style.
      </h1>
      <p class="mb-8 leading-relaxed  text-[#224F34] md:ml-16 ">Explore Our Curated Collection Of Stylish <br/> Clothing And Accessories Tailored to Your <br/> Unique Taste </p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-[#224F34] py-4 px-8 focus:outline-none hover:bg-opacity-80  text-xl md:ml-16">EXPLORE NOW.</button>
        
      </div>
    </div>
    <div className='xl:mr-16' >
    <img class="rounded-xl" src={pic1} alt=""/>
    </div>
    </div>

    
    </>
    </div>
  )
}

export default Home