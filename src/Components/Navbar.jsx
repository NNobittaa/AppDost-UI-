import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div
      className="w-full flex justify-between md:justify-around items-center md:mx-0 px-2 py-2 md:py-3.5 fixed top-0 z-10
      backdrop-blur-sm text-white"
    >
      <Link to="/">
        <div className=" px- mx-4 flex justify-center items-center md:h-10 h-10 md:w-60 w-60">
          <img
            className="mx-2"
            height={70}
            width={70}
            src="/appdostlogo.png"
            alt="Appdost Logo"
          />
          <span
            className="font-bold bg-clip-text 
              text-transparent 
              bg-gradient-to-r from-blue-400 to-blue-700"
          >
            AppDost
            <br />
            <span className="text-[14px] font-medium">
              Complete IT solution
            </span>
          </span>
        </div>
      </Link>

      <ul className="gap-4 md:flex hidden">
        <Link to={"/"}>
          <li className="py-1 px-2 rounded-md hover:bg-violet-800 hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-200">
            Home
          </li>
        </Link>
        <Link to="/about">
          <li className="py-1 px-2 rounded-md hover:bg-violet-800 hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-200">
            About
          </li>
        </Link>
        <Link to="/services">
          <li className="py-1 px-2 rounded-md hover:bg-violet-800 hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-200">
            Services
          </li>
        </Link>
        <Link to="/portfolio">
          <li className="py-1 px-2 rounded-md hover:bg-violet-800 hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-200">
            Portfolio
          </li>
        </Link>
        <Link to="/careers">
          <li className="py-1 px-2 rounded-md hover:bg-violet-800 hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-200">
            Careers
          </li>
        </Link>
        <Link to="/blog">
          <li className="py-1 px-2 rounded-md hover:bg-violet-800 hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-200">
            Blog
          </li>
        </Link>
        <Link to="/contact">
          <li className="py-1 px-2 rounded-md hover:bg-violet-800 hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-200">
            Contact
          </li>
        </Link>
      </ul>
      <div className="md:hidden flex">
        <button
          onClick={handleToggle}
          className="p-2 m-2 transition-transform duration-300"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>
      </div>
      {open && (
        <div
          id="mobile-menu"
          className="absolute top-14 left-0 w-full bg-black/80 backdrop-blur-md flex flex-col items-center md:hidden"
        >
          <Link to="/" onClick={() => setOpen(false)} className="py-2 text-white">
            Home
          </Link>
          <Link to="/about" onClick={() => setOpen(false)} className="py-2 text-white">
            About
          </Link>
          <Link to="/services" onClick={() => setOpen(false)} className="py-2 text-white">
            Services
          </Link>
          <Link to="/portfolio" onClick={() => setOpen(false)} className="py-2 text-white">
            Portfolio
          </Link>
          <Link to="/careers" onClick={() => setOpen(false)} className="py-2 text-white">
            Careers
          </Link>
          <Link to="/blog" onClick={() => setOpen(false)} className="py-2 text-white">
            Blog
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="py-2 text-white">
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
