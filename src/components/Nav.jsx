import React from "react";
import logo from "../assets/images/logo.png";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-4 fixed w-full h-[80px] bg-[#0a192f] text-gray-300">
        <div>
          <img src={logo} alt="logo" width="80px" />
        </div>
        <div>
          <ul className="flex items-center justify-between">
            <li>Home</li>
            <li>About</li>
            <li>Experience</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="hidden">
          <FaBars />
        </div>
        {/* mobile menu */}
        <ul className="hidden">
          <li>Home</li>
          <li>About</li>
          <li>Experience</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
