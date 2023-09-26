// ThreeColumnGallery.js

import React from 'react';
import cust1 from "../assets/cust1.png";
import cust2 from "../assets/cust2.png";
import cust3 from "../assets/cust3.png";


const Customized = () => {
  // Sample data for images and text
  const items = [
    {
      imageSrc: cust1,
      heading: 'Tshirts',
      text: "Experience The Perfect Blend Of Style, Comfort, And Durability. Its Time To Make A Statement Effortlessly!"
    },
    {
      imageSrc: cust2,
      heading: 'Hoodies',
      text: 'Introducing Our Cozy Comfort Hoodie- The Ultimate Blend Of Warmth, Style, And Versatility.'
    },
    {
      imageSrc: cust3,
      heading: 'Trousers',
      text: 'Embrace The Future Of Fashion With Our Customized Trouser And Discover The Perfect Blend Of Comfort, Quality, And Individuality. '
    },
  ,
  ];

  return (
    <>
    <div className=' bg-[#E3BC62] pb-8' >
    <h1 className='text-center bg-[#E3BC62] pt-24 text-[#224F34] text-5xl capitalize'> Customized Outfits For You.</h1>
     <p className='text-center text-xl bg-[#E3BC62] text-[#224F34] mt-12 mb-12 '> Style Is A Way To Say Who You Are Without Having To Speak.</p>
    <div className="ml-8 mr-8 mt-4 grid grid-cols-3 gap-4 ">
      {items.map((item, index) => (
        <div key={index} className="text-center">
          <img src={item.imageSrc} alt={`Item ${index + 1}`} className="w-80 mb-2 ml-8" />
          <h1 id='ruf' className="text-sm  ">{item.heading}  </h1>
          <p id='ruf' className="text-sm text-center mr-8 ">{item.text}  </p>
        </div>
      ))}
    </div>


    </div>
     
    </>
  );
};

export default Customized;
