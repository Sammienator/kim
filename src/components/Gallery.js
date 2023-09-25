// ThreeColumnGallery.js

import React from 'react';
import gal1 from "../assets/gal1.png";
import gal2 from "../assets/gal2.png";
import gal3 from "../assets/gal3.png";
import gal4 from "../assets/gal4.png";
import gal5 from "../assets/gal5.png";
import gal6 from "../assets/gal6.png";

const ThreeColumnGallery = () => {
  // Sample data for images and text
  const items = [
    {
      imageSrc: gal1,
      imageText: gal2,
    },
    {
      imageSrc: gal3,
      imageText: gal4,
    },
    {
      imageSrc: gal5,
      imageText: gal6,
    },
  ,
  ];

  return (
    <>
    <div className=' bg-[#E3BC62] pb-8' >
    <h1 className='text-center bg-[#E3BC62] pt-24 text-[#224F34] text-5xl'> Trending Fashion</h1>
     <p className='text-center text-xl bg-[#E3BC62] text-[#224F34] mt-12 mb-12'> Get In On The Trend With Our Customized selection of Trending Styles.</p>
    <div className="ml-8 mr-8 mt-4 grid grid-cols-3 gap-4 ">
      {items.map((item, index) => (
        <div key={index} className="text-center">
          <img src={item.imageSrc} alt={`Item ${index + 1}`} className="w-80 mb-2" />
          <p className="text-sm ml-12 "> <img src={item.imageText} alt='#'/> </p>
        </div>
      ))}
    </div>


    </div>
     
    </>
  );
};

export default ThreeColumnGallery;
