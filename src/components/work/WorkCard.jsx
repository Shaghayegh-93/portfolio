import React from "react";

const WorkCard = ({ style, codeUrl, demoUrl, title, createdBy }) => {
  return (
    <div
      style={style}
      className="shadow-lg shadow-[#040c16] flex flex-col items-center justify-center group container rounded-md mx-auto content-div"
    >
      <div className="opacity-0 group-hover:opacity-100 mt-8  ">
        <h2 className="text-2xl font-bold text-white text-center mb-2">
          {title}
        </h2>
        <span className="text-lg font-bold text-white tracking-wider">
          {createdBy}
        </span>
        <div className="flex items-center justify-center mt-2 w-full">
          <a
            target="_blank"
            href={demoUrl}
            className="text-lg text-center rounded-lg w-1/2  px-2 py-2 m-2 bg-white text-gray-700 font-bold"
          >
            <button>Demo</button>
          </a>
          <a
            target="_blank"
            href={codeUrl}
            className="text-lg text-center rounded-lg w-1/2 px-2  py-2 m-2 bg-white text-gray-700 font-bold"
          >
            <button>Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
