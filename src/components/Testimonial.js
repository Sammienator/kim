import React from 'react';
// import Exclusi from "../assets/exclusi.png"

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center bg-[#E3BC62] ">
      <div className="flex justify-between w-11/12 max-w-6xl mt-10">
        {/* Card 1 */}
        <div className="bg-[#B7FFFB] rounded-lg p-6 shadow-lg mx-1 w-3/4">
{/* 
        <img
        src= {Exclusi}
        alt="Your Im"
        
      /> */}
          <p className="text-black mb-2 text-3xl ">"  B.E MWANIKI</p>
          <p className="text-black text-xl">-  I am thrilled with my purchase and the entire shopping experience with your company. Your dedication to quality, style, and customer satisfaction is evident in every aspect of your service.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg p-6 shadow-lg mx-1 w-3/4">
          <p className="text-black mb-2 text-3xl">"  PAUL MACHARIA</p>
          <p className="text-black text-xl"> The fabric you used is of top-notch quality. It feels soft against the skin and drapes beautifully. I appreciate the range of customization options available.</p>
        </div>
      </div>

      {/* Slide Arrows */}
      <div className="mt-8 mb-8 flex">
        <button className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 cursor-pointer hover:text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 border bg-[#B7FFFB] cursor-pointer hover:bg-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
