import React from "react";
import todoPicture from "../../assets/images/todoPicture.png";
import WorkCard from "./WorkCard";

const Work = () => {
  const workImage = [
    { image: todoPicture, id: Math.floor(Math.random() * 1000) },
    { image: todoPicture, id: Math.floor(Math.random() * 1000) },
    { image: todoPicture, id: Math.floor(Math.random() * 1000) },
  ];
  return (
    <div name="work" className="bg-[#0a192f] md:h-screen w-full text-gray-300">
      <div className="max-w-[1000px] w-full h-full flex flex-col justify-center mx-auto p-4">
        <div className="pb-8 ">
          <h2 className="font-bold border-b-4 border-pink-600 inline text-4xl ">
            Work
          </h2>
          <p className="py-4">Check out some of my recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {workImage.map((work) => {
            return (
              <div key={work.id}>
                <WorkCard style={{ backgroundImage: `url(${work.image})` }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
