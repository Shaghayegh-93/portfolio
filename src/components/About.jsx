import React from "react";

const About = () => {
  return (
    <div name="about" className="bg-[#0a192f] w-full h-screen text-gray-300">
      <div className="w-full h-full flex flex-col items-center justify-center mt-40 md:-mt-[200px] ">
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
            <p>
              Hi, I'm Shaghayegh, nice to meet you. Please take a look around
            </p>
          </div>
          <div>
            <p className="text-justify">
              I'm an IT graduate always eager to learn and improve my skills in
              front-end web development methods. In the recent few years, I've
              done my best to learn different languages and frameworks like
              JavaScript, React.js, Next.js, and Tailwind CSS.
              <br />I have a good experience in working with Libraries, getting
              data from APIs, and code based on websites’ design on Figma.
              <br /> I have worked on many projects using React.js and Next.js,
              and I know how to create effective, concise code while being able
              to keep up with tight deadlines and be adaptive with my responses
              to bugs and issues that arose.
              <br /> Now, I see myself ready to climb up another step in my
              career ladder. I do believe that I would be a passionate,
              hardworking team player who always loves to challenge herself to
              progress more and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
