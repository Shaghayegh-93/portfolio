import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("open", isOpen);
  // const toggleMenuHandler = () => {};
  return (
    <div className="flex items-center justify-between px-4 fixed w-full h-[80px] bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} alt="logo" width="80px" />
      </div>
      <div>
        <ul className="hidden md:flex items-center justify-between">
          <li>Home</li>
          <li>About</li>
          <li>Experience</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="md:hidden z-10 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? <FaTimes /> : <FaBars />}
      </div>
      {/* mobile menu */}

      <ul
        className={
          !isOpen
            ? "  bg-[#0a192f] flex flex-col items-center justify-center h-screen w-full absolute top-0 left-0"
            : "hidden"
        }
      >
        <li className="py-6 text-3xl">Home</li>
        <li className="py-6 text-3xl">About</li>
        <li className="py-6 text-3xl">Experience</li>
        <li className="py-6 text-3xl">Work</li>
        <li className="py-6 text-3xl">Contact</li>
      </ul>
    </div>
  );
};

export default Nav;
