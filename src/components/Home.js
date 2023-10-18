import React, { useEffect } from "react";
import pic1 from "../assets/pic1.png";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS whenever the component re-renders
  }, []);
  return (
    <div>
      <>
        <div class=" mx-auto flex px-5 py-5 md:flex-row flex-col items-center bg-[#B7FFFB]">
          <div
            data-aos="zoom-out-up"
            data-aos-easing="linear"
            data-aos-duration="3000"
            class="container lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          >
            <h1 class="title-font tracking-wide sm:text-5xl md:text-7xl xl:text-8xl mb-4 font-bold text-[#224F34] md:ml-16 ">
              Welcome to <br /> the world of <br /> style.
            </h1>
            <p class="mb-8 leading-relaxed  text-[#224F34] md:ml-16 ">
              Explore Our Curated Collection Of Stylish <br /> Clothing And
              Accessories Tailored to Your <br /> Unique Taste{" "}
            </p>
            <div class="flex justify-center">
              <button
                data-aos="zoom-out-left"
                data-aos-easing="linear"
                data-aos-duration="3000"
                class="inline-flex text-white bg-[#224F34] py-4 px-8 focus:outline-none hover:bg-opacity-80  text-xl md:ml-16"
              >
                EXPLORE NOW.
              </button>
            </div>
          </div>
          <div
            data-aos="zoom-out-down"
            data-aos-easing="linear"
            data-aos-duration="3000"
            className="xl:mr-16"
          >
            <img class="rounded-xl" src={pic1} alt="" />
          </div>
        </div>
      </>
    </div>
  );
};

export default Home;
