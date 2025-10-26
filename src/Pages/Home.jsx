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
      <section className="relative w-full overflow-hidden h-screen flex items-center justify-center z-0 ">
        <div className="absolute inset-0 z-0 flex items-center justify-center md:block hidden">
          {/* Main container for floating logos - critical for positioning */}
          <div className="relative w-full h-full max-w-7xl max-h-7xl mt-25 ">
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

        <div className="relative z-10 text-white text-center mt-20">
          <span className="font-bold text-5xl ">
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
          <span className="text-sm font-md p-5 text-slate-300 mb-4">
            <p className="m-2">
              Your trusted partner for comprehensive IT solutions. From{" "}
            </p>
            <p className="m-2">
              mobile apps to enterprise software, we bring innovation and
            </p>
            <p className="m-2">
              excellence to every project with our expert team of developers.
            </p>
          </span>
          <div className="mb-12">
            <span className=" bg-blue-500 py-3 px-4 rounded-full mb-8">
              Complete IT Solution Provider Since 2025
            </span>
          </div>
          <div className="buttons">
            <Link to="/services">
              <button
                className="bg-blue-400 py-3 px-4 m-2 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-gradient-to-br "
                id="Explore"
              >
                Explore Our Services
              </button>
            </Link>
            <Link to="/contact">
              <button
                className="bg-blue-400 py-3 px-4 m-2 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-gradient-to-br "
                id="Explore"
              >
                Get Free Consultation
              </button>
            </Link>
          </div>
          <div className="flex gap-3 mt-4">
            <span className="bg-slate-700 py-1 px-2 pl-8 rounded-md relative mt-4 text-sm">
              <img
                src="./src/assets/tick.png"
                className="left-3 invert top-2 absolute "
                width={12}
                alt=""
              />
              100% Client Satisfaction
            </span>
            <span className="bg-slate-700 py-1 px-2 pl-8 rounded-md relative mt-4 text-sm">
              <img
                src="./src/assets/security.png"
                className="left-3 invert top-2 absolute "
                width={12}
                alt=""
              />
              Secure & Scalable
            </span>
            <span className="bg-slate-700 py-1 px-2 pl-8 rounded-md relative mt-4 text-sm">
              <img
                src="./src/assets/time.png"
                className="left-2.5 invert top-1.5 absolute "
                width={16}
                alt=""
              />
              24/7 Support
            </span>
          </div>
          <div className=" mt-10 flex items-center justify-center">
            <svg
              className="w-14 h-14 text-blue-600 animate-bounce"
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
      <div className="flex mx-auto justify-around w-[80%] p-8 ">
        <div className="text-white text-center p-6 rounded-xl hover:bg-slate-800 transition-transform all duration-300 ease-in-out hover:scale-105  ">
          <lord-icon
            className="m-2 size-20"
            src="https://cdn.lordicon.com/xmoniccu.json"
            trigger="hover"
          ></lord-icon><br /><span className="text-3xl text-violet-500 font-bold">10+</span><br /><span className="text-xl m-3">Web Projects</span>
        </div>
        <div className="text-white text-center p-6 rounded-xl hover:bg-slate-800 transition-transform all duration-300 ease-in-out hover:scale-105">
          <lord-icon
      className="m-2 size-20"
      src="https://cdn.lordicon.com/kgtbcywd.json"
      trigger="hover"
    ></lord-icon><br /><span className="text-3xl text-violet-500 font-bold">4+</span><br /><span className="text-xl m-3">Android Apps</span>
        </div>
        <div className="text-white text-center p-6 rounded-xl hover:bg-slate-800 transition-transform all duration-300 ease-in-out hover:scale-105">
          <lord-icon
            className="m-2 size-20"
            src="https://cdn.lordicon.com/edplgash.json"
            trigger="hover"
          ></lord-icon><br /><span className="text-3xl text-violet-500 font-bold">1</span><br /><span className="text-xl m-3">CRM Project</span>
        </div>
        <div className="text-white text-center p-6 rounded-xl hover:bg-slate-800 transition-transform all duration-300 ease-in-out hover:scale-105">
          <lord-icon
            className="m-2 size-20"
            src="https://cdn.lordicon.com/yudxjmzy.json"
            trigger="hover"
          ></lord-icon><br /><span className="text-3xl text-violet-500 font-bold">2025</span><br /><span className="text-xl m-3">Founded Year</span>
        </div>
      </div>
    </>
  );
};

export default Home;
