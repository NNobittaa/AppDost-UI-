import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Icon Components (using Tailwind classes for styling)
const Icon1 = () => (
  <div className=" flex items-center justify-center text-4xl text-white shadow-lg flex-col ">
    <lord-icon
      className="m-2 size-20"
      src="https://cdn.lordicon.com/drdlomqk.json"
      trigger="loop"
    ></lord-icon>
    <span className="text-[18px] text-center text-blue-500 font-semibold">
      Cyber Security
      <p className="text-[16px] text-white mt-2">Security Audits</p>
    </span>
  </div>
);
const Icon2 = () => (
  <div className=" flex items-center justify-center text-4xl text-white shadow-lg flex-col ">
    <lord-icon
      className="m-2 size-20"
      src="https://cdn.lordicon.com/xmoniccu.json"
      trigger="loop"
    ></lord-icon>
    <span className="text-[18px] text-center text-blue-500 font-semibold">
      Web Development
      <p className="text-[16px] text-white mt-2">+10 Projects</p>
    </span>
  </div>
);
const Icon3 = () => (
  <div className=" flex items-center justify-center text-4xl text-white shadow-lg flex-col ">
    <lord-icon
      className="m-2 size-20"
      src="https://cdn.lordicon.com/kgtbcywd.json"
      trigger="loop"
    ></lord-icon>
    <span className="text-[18px] text-center text-green-500 font-semibold">
      Mobile Apps
      <p className="text-[16px] text-white mt-2">+4 Apps</p>
    </span>
  </div>
);
const Icon4 = () => (
  <div className=" flex items-center justify-center text-4xl text-white shadow-lg flex-col ">
    <lord-icon
      className="m-2 size-20"
      src="https://cdn.lordicon.com/vxzzdaaj.json"
      trigger="loop"
    ></lord-icon>
    <span className="text-[18px] text-center text-yellow-500 font-semibold">
      Fast Delivery
      <p className="text-[16px] text-white mt-2">On Time</p>
    </span>
  </div>
);

// --- Icon Position Configuration ---
// Define the final scattered position (using the previous layout as a base)
const iconPositions = {
  icon1: { top: "15%", left: "15%" },
  icon2: { top: "15%", left: "85%" },
  icon3: { top: "60%", left: "15%" },
  icon4: { top: "60%", left: "85%" },
};

// --- Animation Variants ---
const initialFloat = {
  x: [0, 5, -5, 2, 0],
  y: [0, -5, 10, -2, 0],
  rotate: [0, 3, -3, 1, 0],
  transition: {
    x: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "mirror",
    },
    y: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "mirror",
    },
    rotate: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "mirror",
    },
  },
};

const AnimatedFloatingIcon = ({ children, finalPosition, delay }) => {
  return (
    <motion.div
      className="absolute"
      // Start all icons at the dead center of the parent container
      initial={{ top: "50%", left: "50%", x: "-50%", y: "-50%", opacity: 0 }}
      // 1. SCATTER: Animate to the final position on mount
      animate={{
        top: finalPosition.top,
        left: finalPosition.left,
        x: 0, // Reset the transform: translateX(-50%)
        y: 0, // Reset the transform: translateY(-50%)
        opacity: 1,
        // Define the sequence: scatter quickly, then start the float
        transition: {
          duration: 1.5, // Time to scatter
          delay: delay, // Staggered entry for a cooler effect
          ease: [0.17, 0.67, 0.83, 0.67], // Custom easing for a nice pop

          // 2. FLOAT: Run the continuous float animation after scattering
          ...initialFloat.transition,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <>
      <section className="relative w-full h-screen flex items-center justify-center z-0 md:pt-0 pt-10  ">
        <div className="absolute inset-0 z-0  items-center justify-center md:flex hidden">
          {/* Main container for floating logos - critical for positioning */}
          <div className="relative w-full h-full mt-25 ">
            <AnimatedFloatingIcon
              finalPosition={iconPositions.icon1}
              delay={0.2}
            >
              <motion.div animate={initialFloat}>
                <Icon1 />
              </motion.div>
            </AnimatedFloatingIcon>

            <AnimatedFloatingIcon
              finalPosition={iconPositions.icon2}
              delay={0.4}
            >
              <motion.div animate={initialFloat}>
                <Icon2 />
              </motion.div>
            </AnimatedFloatingIcon>

            <AnimatedFloatingIcon
              finalPosition={iconPositions.icon3}
              delay={0.6}
            >
              <motion.div animate={initialFloat}>
                <Icon3 />
              </motion.div>
            </AnimatedFloatingIcon>

            <AnimatedFloatingIcon
              finalPosition={iconPositions.icon4}
              delay={0.8}
            >
              <motion.div animate={initialFloat}>
                <Icon4 />
              </motion.div>
            </AnimatedFloatingIcon>
          </div>
        </div>

        <div className="relative z-10 text-white text-center md:mt-20 mt-[40] md:p-4 p-8">
          <span className="font-bold md:text-5xl text-2xl ">
            <p className="fade-in-text">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-indigo-600">
                Transform{" "}
              </span>
              Your
            </p>
            <p>
              {" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-indigo-600">
                Ideas
              </span>{" "}
              Into
            </p>
            <p>
              {" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-indigo-600">
                Digital
              </span>{" "}
              Reality
            </p>
          </span>
          <span className="text-sm font-md p-1 text-slate-300 md:mb-4 mb-2">
            <p className="md:m-2 m-1">
              Your trusted partner for comprehensive IT solutions. From{" "}
            </p>
            <p className="md:m-2 m-1">
              mobile apps to enterprise software, we bring innovation and
            </p>
            <p className="md:m-2 m-1">
              excellence to every project with our expert team of developers.
            </p>
          </span>
          <div className="md:mb-12 mb-6 md:text-sm text-[12px]">
            <span className=" bg-blue-500 md:py-3 py-2 md:px-4 px-2 rounded-full md:mb-8 mb-6">
              Complete IT Solution Provider Since 2025
            </span>
          </div>
          <div className="buttons md:text-md text-sm">
            <Link to="/services">
              <button
                className="bg-blue-400 md:py-3 py-2 md:px-4 px-3 md:m-2 m-1 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-gradient-to-br"
                id="Explore"
              >
                Explore Our Services
              </button>
            </Link>
            <Link to="/contact">
              <button
                className="bg-blue-400 md:py-3 py-2 md:px-4 px-3 md:m-2 m-1 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-gradient-to-br "
                id="Explore"
              >
                Get Free Consultation
              </button>
            </Link>
          </div>
          <div className="flex gap-3 mt-4">
            <span className="bg-slate-700 py-1 px-2 pl-8 rounded-md relative mt-4 md:text-sm text-[12px]">
              <img
                src="./src/assets/tick.png"
                className="left-3 invert top-[35%] absolute "
                width={12}
                alt=""
              />
              100% Client Satisfaction
            </span>
            <span className="bg-slate-700 py-1 px-2 pl-8 rounded-md relative mt-4 md:text-sm text-[12px]">
              <img
                src="./src/assets/security.png"
                className="left-3 invert top-[35%] absolute "
                width={12}
                alt=""
              />
              Secure & Scalable
            </span>
            <span className="bg-slate-700 py-1 px-2 pl-8 rounded-md relative mt-4 md:text-sm text-[12px]">
              <img
                src="./src/assets/time.png"
                className="left-2.5 invert top-[25%] absolute "
                width={16}
                alt=""
              />
              24/7 Support
            </span>
          </div>
          <div className=" mt-10 flex items-center justify-center">
            <svg
              className="md:size-12 size-6 text-blue-600 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      <div className="flex md:flex-row flex-col md:my-8 my-10 mx-auto justify-around w-[80%] px-8 pb-8 ">
        <div className="text-white text-center md:border-none border md:my-0 my-2 md:bg-slate-900 bg-slate-800 p-6 rounded-xl hover:bg-slate-800 transition-transform all duration-300 ease-in-out hover:scale-105  ">
          <lord-icon
            className="m-2 size-20"
            src="https://cdn.lordicon.com/xmoniccu.json"
            trigger="hover"
          ></lord-icon><br /><span className="text-3xl text-violet-500 font-bold">10+</span><br /><span className="text-xl m-3">Web Projects</span>
        </div>
        <div className="text-white text-center md:border-none border md:my-0 my-2 md:bg-slate-900 bg-slate-800 p-6 rounded-xl hover:bg-slate-800 transition-transform all duration-300 ease-in-out hover:scale-105">
          <lord-icon
      className="m-2 size-20"
      src="https://cdn.lordicon.com/kgtbcywd.json"
      trigger="hover"
    ></lord-icon><br /><span className="text-3xl text-violet-500 font-bold">4+</span><br /><span className="text-xl m-3">Android Apps</span>
        </div>
        <div className="text-white text-center md:border-none border md:my-0 my-2 md:bg-slate-900 bg-slate-800 p-6 rounded-xl hover:bg-slate-800 transition-transform all duration-300 ease-in-out hover:scale-105">
          <lord-icon
            className="m-2 size-20"
            src="https://cdn.lordicon.com/edplgash.json"
            trigger="hover"
          ></lord-icon><br /><span className="text-3xl text-violet-500 font-bold">1</span><br /><span className="text-xl m-3">CRM Project</span>
        </div>
        <div className="text-white text-center md:border-none border md:my-0 my-2 md:bg-slate-900 bg-slate-800 p-6 rounded-xl hover:bg-slate-800 transition-transform all duration-300 ease-in-out hover:scale-105">
          <lord-icon
            className="m-2 size-20"
            src="https://cdn.lordicon.com/yudxjmzy.json"
            trigger="hover"
          ></lord-icon><br /><span className="text-3xl text-violet-500 font-bold">2025</span><br /><span className="text-xl m-3">Founded Year</span>
        </div>
      </div>
      <div>
        <div className='text-md text-center text-white'><span className=' font-semibold px-3.5 bg-slate-700 rounded-full py-2 m-8'>About AppDost</span></div>
      </div>
      <div className=''>
        <div className='text-center md:m-12 m-6 text-white'>
          <span className="font-bold md:text-5xl text-2xl ">
            <p className="">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-indigo-600 ">
                Your{" "}
              </span>
              Trusted
            </p>
            <p>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-indigo-600">
                Partner 
              </span>{" "}
              For
            </p>
            <p>
              {" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-indigo-600">
                Complete
              </span>{" "}
              Digital Transformation
            </p>
          </span>
          <span className="text-md md:text-sm p-2 text-slate-300 md:mb-4 mb-2">
            <p className="md:m-2 m-1">
              AppDost is your trusted partner for complete digital transformation. We are a dynamic,{" "}
            </p>
            <p className="md:m-2 m-1">
              innovation-driven IT solutions provider specializing in turning visionary ideas into powerful,
            </p>
            <p className="md:m-2 m-1">
              market-ready products. Our mission is to empower businesses with cutting-edge technology
            </p>
            <p className="md:m-2 m-1">
              solutions that drive growth, enhance user experiences, and create lasting digital impact.
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
