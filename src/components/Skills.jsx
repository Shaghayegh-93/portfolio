import React from "react";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import javascript from "../assets/images/javascript.png";
import react from "../assets/images/react.png";
import tailwind from "../assets/images/tailwind.png";
import nextjs from "../assets/images/nextjs.png";
import github1 from "../assets/images/github1.png";
import mongo from "../assets/images/mongo.png";
import bootstrap from "../assets/images/bootstrap.png";



const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] h-screen w-full text-gray-300">
      <div className=" max-w-[1000px] w-full h-full flex flex-col  justify-center mx-auto p-4 ">
        <div className=" pb-8">
          <h2 className="font-bold border-b-4 border-pink-600 inline text-4xl ">
            Skills
          </h2>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4 w-full py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={html} alt="htmlLogo" className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={css} alt="cssLogo" className="w-20 mx-auto" />
            <p className="my-4" >CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={javascript}
              alt="javascriptLogo"
              className="w-20 mx-auto"
            />
            <p className="my-4" >JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={react} alt="reactLogo" className="w-20 mx-auto" />
            <p className="my-4" >REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={tailwind} alt="tailwindLogo" className="w-20 mx-auto" />
            <p className="my-4" >TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={nextjs} alt="nextjsLogo" className="w-20 mx-auto " />
            <p className="my-4" >NEXT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={github1} alt="github1Logo" className="w-20 mx-auto " />
            <p className="my-4" >GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={bootstrap} alt="bootstrapLogo" className="w-20 mx-auto" />
            <p className="my-4" >BOOTSTRAP</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={mongo} alt="mongoLogo" className="w-20 mx-auto" />
            <p className="my-4" >MONGO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
