import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div name="hero" className=" bg-[#0a192f] h-screen w-full ">
      <div className="max-w-[1000px] flex flex-col px-8 mx-auto h-full justify-center ">
        <p className="text-[#E5E2E1]">Hi my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] ">
          Shaghayegh
        </h1>
        <h2 className="text-[#8892b0] text-4xl sm:text-7xl font-bold">
          I'm a FrontEnd Developer.
        </h2>
        <p className="text-[#8892b0] max-w-[65%] py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum eaque
          ratione consequatur sit, eligendi odio voluptatem iure corrupti unde
          voluptates nesciunt dolorem!
        </p>
        <div>
          <button className="border-2 text-white flex items-center justify-center px-6 py-3 my-2 hover:bg-[#E5E2E1] hover:text-black group">
            View Work
            <span className="group-hover:rotate-90 duration-300 ">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
