import React from "react";
import { Mail, Phone, Building, MessageCircle } from "lucide-react";

const Careers = () => {
  return (
    <div className="w-full flex items-center justify-center z-0 pt-20 flex-col">
      <div className="max-w-3xl text-center mb-16 mt-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Get In{" "}
          <span className="text-purple-600 dark:text-purple-400">Touch</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center">
          We'd love to hear from you. Let's discuss how we <br /> can help bring
          your project to life!
        </p>
      </div>
      <div>
        <div className="flex md:flex-row flex-col gap-8 mx-auto w-[80%] text-white">
          <div className="bg-slate-800 rounded-xl p-8 hover:cursor-pointer transition-transform all duration-300 ease-in-out hover:scale-105">
            <div className="font-bold text-center flex justify-center">
              <span className="p-2 font-bold text-violet-500"><Phone /></span>{" "}
            </div>
            <p className="text-xl font-semibold my-3 text-slate-100 text-center  ">
              Call Us
            </p>
            <p className="my-2 text-center"><span className="hover:underline">+91 76350 75422</span><br />
<span className="hover:underline">+91 11 6929 0750</span></p>
            <p className="text-slate-400 text-center">Mon - Sat: 9:00 AM - 6:00 PM IST</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-8 hover:cursor-pointer transition-transform all duration-300 ease-in-out hover:scale-105">
            <div className="font-bold text-center flex justify-center">
              <span className="p-2 font-bold text-violet-500"><Mail /></span>{" "}
            </div>
            <p className="text-xl font-semibold my-3 text-slate-100 text-center  ">
              Email Us
            </p>
            <p className="my-2 text-center hover:underline"><a href="contact@appdost.in">contact@appdost.in</a></p>
            <p className="text-slate-400 text-center">We'll respond within 24 hours</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-8 hover:cursor-pointer transition-transform all duration-300 ease-in-out hover:scale-105">
            <div className="font-bold text-center flex justify-center">
              <span className="p-2 font-bold text-violet-500"><Building /></span>{" "}
            </div>
            <p className="text-xl font-semibold my-3 text-slate-100 text-center  ">
              Our Offices
            </p>
            <p className="my-2 text-center hover:underline">3 Locations Across Bihar & Delhi</p>
            <p className="text-slate-400 text-center">Visit any of our offices</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-8 hover:cursor-pointer transition-transform all duration-300 ease-in-out hover:scale-105">
            <div className="font-bold text-center flex justify-center">
              <span className="p-2 font-bold text-violet-500"><MessageCircle /></span>{" "}
            </div>
            <p className="text-xl text-center font-semibold my-3 text-slate-100 ">
              Social Media
            </p>
            <p className="my-2 text-center hover:underline">
              <div className=" flex gap-4 justify-center">
                <span><img className="hover:scale-110 transition-transform all duration-300 ease-in-out" src="/instagram.png" height={28} width={28} alt="" /></span>
                <span><img className="hover:scale-110 transition-transform all duration-300 ease-in-out" src="/twitter.png" height={28} width={28} alt="" /></span>
                <span><img className="hover:scale-110 transition-transform all duration-300 ease-in-out" src="/linkedin.png" height={28} width={28} alt="" /></span>
                <span><img className="hover:scale-110 transition-transform all duration-300 ease-in-out" src="/facebook.png" height={28} width={28} alt="" /></span>
              </div>
            </p>
            <p className="text-slate-400 text-center">We'll respond within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
