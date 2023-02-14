import React from "react";
import todoPicture from "../assets/images/todoPicture.png";

const Work = () => {
  return (
    <div name="work" className="bg-[#0a192f] h-screen w-full text-gray-300">
      <div className="max-w-[1000px] w-full h-full flex flex-col justify-center mx-auto p-4">
        <div className="pb-8 ">
          <h2 className="font-bold border-b-4 border-pink-600 inline text-4xl ">
            Work
          </h2>
          <p className="py-4">Check out some of my recent work</p>
        </div>
        <div
          style={{ backgroundImage: `url(${todoPicture})` }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          <div className="shadow-lg shadow-[#040c16] flex flex-col items-center justify-center group container rounded-md mx-auto content-div">
            <div>
              <span></span>
              <div>
                <a href="">
                  <button></button>
                </a>
                <a href="">
                  <button></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
