import React from "react";

const WorkCard = ({ style }) => {
  return (
    <div
      style={style}
      className="shadow-lg shadow-[#040c16] flex flex-col items-center justify-center group container rounded-md mx-auto content-div"
    >
      <div className="opacity-0 group-hover:opacity-100">
        <span className="text-2xl font-bold text-white tracking-wider">
          React Js Application
        </span>
        <div className="flex items-center justify-center mt-4">
          <a
            href=""
            className="text-lg text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold"
          >
            <button>Demo</button>
          </a>
          <a
            href=""
            className="text-lg text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold"
          >
            <button>Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
