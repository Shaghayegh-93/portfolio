import React from "react";
import logo from "../assets/images/logo.png";

const Nav = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-4 fixed w-full h-[80px] bg-[#0a192f]">
        <div>
          <img src={logo} alt="logo" width="80px" />
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Experience</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
