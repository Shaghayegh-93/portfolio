import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="grid grid-cols-5 ">
      <div className="col-span-2"></div>
      <div className="col-span-3">
        <p>Hi my name is</p>
        <p>Shaghayegh</p>
        <p>I'm a FrontEnd Developer.</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum eaque
          ratione consequatur sit, eligendi odio voluptatem iure corrupti unde
          voluptates nesciunt dolorem! Praesentium culpa consectetur dolorem
          architecto fuga facere assumenda.
        </p>
        <button>
          View Work <HiArrowNarrowRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
