import React from "react";
import { Link } from "react-router-dom"; 
import { useState } from "react";
const Navbar = () => {
  return (
    <div
      className="w-full flex justify-between md:justify-around items-center md:mx-0 px-2 py-2 md:py-3.5 fixed top-0 z-10
    backdrop-blur-sm text-white"
    >
      {/* Logo side */}
      <Link to='/'><div className="flex justify-center items-center md:h-10 h-10 md:w-60 w-60">
        <img
          className=" mx-3"
          height={70}
          width={70}
          src="./src/assets/appdost_logo.png"
          alt="AppDost"
        />
        <span
          className="font-bold bg-clip-text 
    text-transparent 
   from-blue-400 to-blue-700"
        >
          AppDost
          <br />
          <span className="text-[14px] font-md">Complete IT solution</span>
        </span>
      </div></Link>
      {/* Page side */}
      <ul className="gap-4 md:flex hidden">
        <Link to={"/"}>
          <li className=' py-1 px-2 rounded-md hover:bg-violet-800 animation hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-200 '>Home</li>
        </Link>
        <Link to="/about">
          <li className=' py-1 px-2 rounded-md hover:bg-violet-800 animation hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-200 '>About</li>
        </Link>
        <Link to="/services">
          <li className=' py-1 px-2 rounded-md hover:bg-violet-800 animation hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-200 '>Services</li>
        </Link>
        <Link to="/portfolio">
          <li className=' py-1 px-2 rounded-md hover:bg-violet-800 animation hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-200 '>Portfolio</li>
        </Link>
        <Link to="/blog">
          <li className=' py-1 px-2 rounded-md hover:bg-violet-800 animation hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-200 '>Blog</li>
        </Link>
        <Link to="/contact">
          <li className=' py-1 px-2 rounded-md hover:bg-violet-800 animation hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-200 '>Contact</li>
        </Link>
      </ul>
      <div className="md:hidden flex">
        <img src="./src/assets/hamburger.png" width={20} className="m-2" alt="hamburger" />
      </div>
      
    </div>
    
  );
};

export default Navbar;
