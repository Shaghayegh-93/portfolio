import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import CV from "../assets/resume/CV.pdf";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navClickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex items-center justify-between px-4 fixed w-full h-[80px] bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} alt="logo" width="80px" />
      </div>
      <div>
        <ul className="hidden md:flex items-center justify-between">
          <li>
            <Link to="hero" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden z-10 cursor-pointer" onClick={navClickHandler}>
        {!isOpen ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}

      <ul
        className={
          isOpen
            ? "bg-[#0a192f] flex flex-col items-center justify-center h-screen w-full absolute top-0 left-0"
            : "hidden"
        }
      >
        <li className="py-6 text-3xl">
          <Link
            onClick={navClickHandler}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link
            onClick={navClickHandler}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link
            onClick={navClickHandler}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link
            onClick={navClickHandler}
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social section */}
      <div className="hidden lg:flex flex-col fixed top-[35%] left-0 items-center  ">
        <ul>
          <li className="flex  w-[160px] h-[60px] ml-[-100px] hover:ml-[1px] bg-blue-600 duration-300">
            <a
              href="https://www.linkedin.com/in/shaghayegh-hosseini/"
              className="flex items-center justify-between w-full text-gray-300 "
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="flex  w-[160px] h-[60px] ml-[-100px] hover:ml-[1px] bg-[#333] duration-300">
            <a
              href="https://github.com/Shaghayegh-93"
              className="flex items-center justify-between w-full text-gray-300 "
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="flex  w-[160px] h-[60px] ml-[-100px] hover:ml-[1px] bg-[#6fc2b0] duration-300">
            <a
              href="mailto:shaghayegh.hoseini93@gmail.com?subject=Subject"
              className="flex items-center justify-between w-full text-gray-300 "
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="flex  w-[160px] h-[60px] ml-[-100px] hover:ml-[1px] bg-[#565f69] duration-300">
            <a
              href={CV}
              download
              className="flex items-center justify-between w-full text-gray-300 "
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
