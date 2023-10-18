import React,{ useEffect } from 'react';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AOS from 'aos';

const TestimonialSection = () => {

    useEffect(() => {
        AOS.refresh(); // Refresh AOS whenever the component re-renders
      }, []);

  return (

<>  

<section className='bg-[#E3BC62] ' >


<div data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="3000" className=" bg-[#E3BC62]  flex flex-col md:flex-row justify-center items-center pt-10 mb-10">
      {/* Testimonial Cards */}
      <div className="testimonial-card md:mr-4 mb-4 md:mb-0">
        {/* Testimonial content */}
        <div className="bg-[#B7FFFB] p-6 rounded-lg shadow-lg">
          {/* Testimonial text */}
          <div className=" font-bold text-3xl mb-2 italic">"  B.E MWANIKI</div>
              <p className='text-xl'>I am thrilled with my purchase and the entire shopping experience with your company. Your dedication to quality, style, and customer satisfaction is evident in every aspect of your service.</p>
        </div>
      </div>

      <div className="testimonial-card md:ml-4 mb-4 md:mb-0">
        {/* Testimonial content */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Testimonial text */}
          <div className=" font-bold text-3xl mb-2 italic">"  PAUL MACHARIA</div>
              <p className='text-xl'>The fabric you used is of top-notch quality. It feels soft against the skin and drapes beautifully. I appreciate the range of customization options available.</p>
        </div>
      </div>

     
    </div>

     {/* Directional Icons */}
     <div className="flex justify-center mt-4 ">





        {/* Right Icon */}
        <div className="mx-2 text-7xl cursor-pointer hover:text-blue-500 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M15.707 11.293L14.293 12.707 10.586 9l3.707-3.707 1.414 1.414L13.414 9z" />
          </svg>
        </div>

        
        {/* Left Icon */}
        <div className="mx-2  text-7xl   cursor-pointer hover:bg-[#B7FFFB] mb-4" >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M8.293 11.293L9.707 12.707 13.414 9 9.707 5.293 8.293 6.707 10.586 9z" />
          </svg>
        </div>

        
      </div>





</section>






</>

   
  );
};

export default TestimonialSection;
