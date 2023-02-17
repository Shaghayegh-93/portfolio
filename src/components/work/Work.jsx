import React from "react";
import todoApp from "../../assets/images/todoApp.png";
import travelApp from "../../assets/images/travelApp.png";
import WorkCard from "./WorkCard";

const Work = () => {
  const workInfo = [
    {
      image: todoApp,
      codeUrl: "https://github.com/Shaghayegh-93/todo_list_app",
      demoUrl: "https://resplendent-arithmetic-ddb679.netlify.app/",
      id: Math.floor(Math.random() * 1000),
    },
    {
      image: travelApp,
      codeUrl: "https://github.com/Shaghayegh-93/travel_app",
      demoUrl: "https://imaginative-mermaid-42cdba.netlify.app/",
      id: Math.floor(Math.random() * 1000),
    },

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
          {workInfo.map((work) => {
            return (
              <div key={work.id}>
                <WorkCard
                  style={{ backgroundImage: `url(${work.image})` }}
                  codeUrl={work.codeUrl}
                  demoUrl={work.demoUrl}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
