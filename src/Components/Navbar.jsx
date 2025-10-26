import React from "react";
import { Link } from "react-router-dom"; 
import { useState } from "react";
const Navbar = () => {
  return (
    <div
      className="w-full flex justify-between md:justify-around items-center md:mx-0 px-2 py-2 md:py-3.5 fixed top-0 z-10
    backdrop-blur-sm text-white bg-green-400 "
    >
      {/* Logo side */}
      <Link to='/'><div className="flex justify-center items-center border md:h-10 h-10 md:w-60 w-60">
        <img
          className=" mx-3"
          height={70}
          width={70}
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
      <ul className="gap-4 md:flex hidden">
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
      <div>
        <img src="./src/assets/" alt="" />
      </div>
      
    </div>
    
  );
};

export default Navbar;
