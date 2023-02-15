import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="bg-[#0a192f] w-full">
      <div className="max-w-[1000px] w-full h-full p-4 mx-auto flex flex-col ">
        <div className=" pb-8 text-gray-300">
          <h2 className="font-bold border-b-4 border-pink-600 inline text-4xl ">
            Contact
          </h2>
          <p className="py-4">
            Submit the form below or send me an email -
            shaghayegh.hoseini93@gmail.com
          </p>
        </div>
        <form
          action="https://getform.io/f/b449e0a6-246e-43a0-86b8-f1e73e3c0428"
          method="POST"
          className="flex flex-col mx-auto items-center justify-center w-full max-w-[600px]"
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="bg-[#ccd6f6] my-2 p-2 w-full"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="bg-[#ccd6f6] my-2 p-2 w-full"
          />
          <textarea
            name="message"
            id="message"
            rows="10"
            placeholder="Message"
            className="bg-[#ccd6f6] my-2 p-2 w-full"
          />
          <button className="border-2 border-[#ccd6f6] text-white flex items-center justify-center px-6 py-3 my-2 hover:bg-[#ccd6f6] hover:text-black ">
            Let's Collabrate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
