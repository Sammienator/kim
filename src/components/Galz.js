import React from 'react';
import { FaStar } from 'react-icons/fa';
import best1 from '../assets/best1.png'
import best2 from '../assets/best2.png'
import best3 from '../assets/best3.png'
import best4 from '../assets/best4.png'
import best5 from '../assets/best5.png'
import best6 from '../assets/best6.png'
import best7 from '../assets/best7.png'



const Galz = () => {
  const images = [
    { id: 1, src: best1, price: '$10', rating: 4 },
    { id: 2, src: best2, price: '$15', rating: 5 },
    { id: 3, src: best3, price: '$20', rating: 3 },
    { id: 4, src: best4, price: '$12', rating: 4 },
    { id: 5, src: best5, price: '$10', rating: 4 },
    { id: 6, src: best6, price: '$15', rating: 5 },
    { id: 7, src: best7, price: '$20', rating: 3 },
    { id: 8, src: best1, price: '$12', rating: 4 },
    // Add more images as needed
  ];

  return (
    <section className=" bg-[#E3BC62] py-8 px-4">
        <h1 className='text-[#224F34] text-4xl  text-center pt-10 mb-8'>BEST SELLING</h1>
      {/* Small Nav */}
      <nav className="mb-4 ">
        <ul className="flex justify-center ">
          <li className="mr-2">
          <a href='#sale' class="mr-5 hover:text-gray-900  cursor-pointer">SALE</a>
          </li>
          <li className="mr-2">
            <a href='#hot' class="mr-5 hover:text-gray-900  cursor-pointer">HOT</a>
          </li>
          <li className="mr-2">
            <a href='#newarrivals' class="mr-5 hover:text-gray-900 cursor-pointer underline">NEW ARRIVALS</a>
          </li>
          <li>
          <a href='#accessories' class="mr-5 hover:text-gray-900 cursor-pointer">ACCESSORIES</a>
          </li>
        </ul>
      </nav>

      {/* Gallery Images */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {images.map(image => (
          <div key={image.id} className=" p-4 rounded">
            <img src={image.src} alt={`Imag ${image.id}`} className="w-full h-95 object-cover mb-2" />
            <div className="flex justify-between">
              <span className="text-xl">{image.price}</span>
              <div className="flex items-center">
                <span className="text-lg mr-1">Rating:</span>
                {Array.from({ length: image.rating }, (_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Galz;
