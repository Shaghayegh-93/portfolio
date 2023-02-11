import React from "react";

const About = () => {
  return (
    <div name="about" className="bg-[#0a192f] w-full h-screen text-gray-300">
      <div className="w-full h-full flex flex-col items-center justify-center  ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold border-b-4 border-pink-600 inline">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi,I'm Shaghayegh,nice to meet you.Please take a look around</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
              numquam labore provident consequatur, perspiciatis omnis
              dignissimos earum id accusamus nemo officia fuga. Dolor saepe
              quae, odio non quidem beatae libero?
            </p>
          </div>
        </div>
      </div>
    </div>
    // <div name="about" className="bg-[#0a192f] w-full h-screen pt-20">
    //   <div className="flex flex-col sm:flex-row  sm:items-center justify-center  text-gray-300 max-w-[1000px] px-8 mx-auto ">
    //     <div className="max-w-[300px]">
    //       <div className="sm:text-right pb-8 pl-4 w-fit">
    //         <h2 className="text-4xl font-bold border-b-4 border-red-400">
    //           About
    //         </h2>
    //       </div>

    //       <p>Hi,I'm Shaghayegh,nice to meet you.Please take a look around</p>
    //     </div>
    //     <div className="max-w-[500px]">
    //       <p>
    //         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga amet,
    //         perferendis, dolores quaerat obcaecati possimus rem tempora tempore
    //         dolore ipsam corporis odit? Provident excepturi, quam deleniti a
    //         iure tempore maiores!
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default About;
