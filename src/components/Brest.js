import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialSection = () => {
  return (
    <div className=" bg-[#E3BC62]  py-10">
      <div className="flex flex-col mx-6 rounded items-center">
        <div className="flex flex-row items-center justify-center mb-4">
          
          <div className="flex space-x-4">
            <div className="w-full lg:w-1/2 p-4 bg-[#B7FFFB] mb-4 lg:mb-0">
              <div className=" font-bold text-3xl mb-2">"  B.E MWANIKI</div>
              <p className='text-xl'>I am thrilled with my purchase and the entire shopping experience with your company. Your dedication to quality, style, and customer satisfaction is evident in every aspect of your service.</p>
            </div>
            <div className="w-full lg:w-1/2 p-4 bg-gray-100">
            <div className=" font-bold text-3xl mb-2">"  PAUL MACHARIA</div>
              <p className='text-xl'>The fabric you used is of top-notch quality. It feels soft against the skin and drapes beautifully. I appreciate the range of customization options available.</p>
            </div>
          </div>
          
        </div >
        <div className='flex'> <FaChevronLeft className="text-4xl cursor-pointer hover:text-blue-500" />
        <FaChevronRight className="text-4xl cborder bg-[#B7FFFB] cursor-pointer hover:bg-blue-500" />
        
         </div>
         
      </div>
    </div>
  );
};

export default TestimonialSection;
