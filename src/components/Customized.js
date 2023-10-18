import React, { useEffect } from "react";
import AOS from "aos";

import cust1 from "../assets/cust1.png";
import cust2 from "../assets/cust2.png";
import cust3 from "../assets/cust3.png";

const Galc = () => {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS whenever the component re-renders
  }, []);

  return (
    <div className=" bg-[#E3BC62] justify-center text-center mx-auto py-8">
      <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="3000" >


      <h1 className="text-center bg-[#E3BC62] pt-24 text-[#224F34] text-5xl capitalize">
        {" "}
        Customized Outfits For You.
      </h1>
      <p className="text-center text-xl bg-[#E3BC62] text-[#224F34] mt-12 mb-12 ">
        {" "}
        Style Is A Way To Say Who You Are Without Having To Speak.
      </p>

      </div>
  
      <div className="flex   flex-wrap">
        {/* Column 1 */}
        <div data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000" className="w-full  shadow-md md:w-1/3 p-4">
          <img
            src={cust3}
            alt="Imag 1"
            className="w-full h-auto rounded-lg mb-4"
          />
          <h1 className="text-[#224F34] text-2xl"> T SHIRTS</h1>
          <p className="text-gray-700">
            Experience The Perfect Blend Of Style, Comfort, And Durability. Its
            Time To Make A Statement Effortlessly!
          </p>
        </div>
        {/* Column 2 */}
        <div data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="2000" className="w-full shadow-md  md:w-1/3 p-4">
          <img
            src={cust2}
            alt="Imag 2"
            className="w-full h-auto rounded-lg mb-4"
          />
          <h1 className="text-[#224F34] text-2xl"> HOODIES </h1>
          <p className="text-gray-700">
            Embrace The Future Of Fashion With Our Customized Trouser And
            Discover The Perfect Blend Of Comfort, Quality, And Individuality.
          </p>
        </div>
        {/* Column 3 */}
        <div data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="3000" className="w-full shadow-md md:w-1/3 p-4">
          <img
            src={cust1}
            alt="Imag 3"
            className="w-full h-auto rounded-lg mb-4"
          />
          <h1 className="text-[#224F34] text-2xl"> TROUSERS </h1>
          <p className="text-gray-700">
            Experience The Perfect Blend Of Style, Comfort, And Durability. Its
            Time To Make A Statement Effortlessly!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Galc;
