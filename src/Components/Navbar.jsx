import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      className="w-full flex md:justify-between px-10 sm:px-20 items-center py-3.5 fixed top-0 z-10 
    backdrop-blur-sm text-white"
    >
      {/* Logo side */}
      <Link to='/'><div className="flex justify-center items-center">
        <img
          className=" mx-3"
          height={80}
          width={80}
          src="./src/assets/appdost-logo.png"
          alt="AppDost"
        />
        <span
          className="font-bold bg-clip-text 
    text-transparent 
    bg-gradient-to-r from-blue-400 to-blue-700"
        >
          AppDost
          <br />
          <span className="text-[14px] font-medium">Complete IT solution</span>
        </span>
      </div></Link>
      {/* Page side */}
      <ul className="flex gap-4">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/services">
          <li>Services</li>
        </Link>
        <Link to="/portfolio">
          <li>Portfolio</li>
        </Link>
        <Link to="/blog">
          <li>Blog</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      
    </div>
    
  );
};

export default Navbar;
