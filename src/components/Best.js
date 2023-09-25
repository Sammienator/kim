import React from 'react'
import best1 from "../assets/best1.png";
import best2 from "../assets/best2.png";
import best3 from "../assets/best3.png";
import best4 from "../assets/best4.png";
import best5 from "../assets/best5.png";
import best7 from "../assets/best7.png";
import best8 from "../assets/best8.png";
import best6 from "../assets/best6.png";


const Best = () => {

  const items = [
    {
      imageSrc: best7,
      imageText: best8,
    },
    {
      imageSrc: best1,
      imageText: best8,
    },
    {
      imageSrc: best2,
      imageText: best8,
    },
    {
      imageSrc: best3,
      imageText: best8,
    },
    {
      imageSrc: best4,
      imageText: best8,
    },
    {
      imageSrc: best5,
      imageText: best8,
    },
    {
      imageSrc: best6,
      imageText: best8,
    },
    {
      imageSrc: best7,
      imageText: best8,
    },
  ,
  ];

  return (
    <div className='text-center bg-[#E3BC62] pt-12 pb-12 text-3xl'>
        <h1 className='text-[#224F34] pt-10 mb-8'>BEST SELLING</h1>

        <nav className='text-center bg-[#E3BC62] pt-12 mb-6 text-xl' id='pop' class="md:ml-auto md:mr-auto flex flex-wrap items-center text-black justify-center md:space-x-10  ">
      <a href='#sale' class="mr-5 hover:text-gray-900  cursor-pointer">SALE</a>
      <a href='#hot' class="mr-5 hover:text-gray-900  cursor-pointer">HOT</a>
      <a href='#newarrivals' class="mr-5 hover:text-gray-900 cursor-pointer underline">NEW ARRIVALS</a>
      <a href='#accessories' class="mr-5 hover:text-gray-900 cursor-pointer">ACCESSORIES</a>
     
    </nav>


    <div className="ml-8 mr-8 mt-4 grid grid-cols-4 gap-6 ">
      {items.map((item, index) => (
        <div key={index} className="text-center">
          <img src={item.imageSrc} alt={`Item ${index + 1}`} className="w-80 mb-2" />
          <p className="text-sm ml-12 "> <img src={item.imageText} alt='#'/> </p>
        </div>
      ))}
    </div>

    </div>
  )
}

export default Best