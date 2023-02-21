import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

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
          I'm an IT graduate with a few years of experience. My passion for
          Front-End development always moves me forward to learn and improve my
          skills in this field.
        </p>
        <div>
          <button className="border-2 text-white  px-6 py-3 my-2 hover:bg-[#E5E2E1] hover:text-black group">
            <Link
              to="work"
              smooth={true}
              duration={500}
              className="flex items-center justify-center"
            >
              View Work
              <span className="group-hover:rotate-90 duration-300 ">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
