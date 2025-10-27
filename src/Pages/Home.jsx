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

const WorkCultureValues = () => {
  const values = [
    {
      icon: (
        <span role="img" aria-label="innovation" className="mr-2 text-pink-500">
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </span>
      ),
      title: "Innovation First",
      description: "Encouraging creative problem-solving",
    },
    {
      icon: (
        <span
          role="img"
          aria-label="collaboration"
          className="mr-2 text-yellow-500"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 20h-5m-5 0h10m-1 0v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2m3-8a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </span>
      ),
      title: "Collaborative Environment",
      description: "Cross-functional teamwork",
    },
    {
      icon: (
        <span role="img" aria-label="learning" className="mr-2 text-green-500">
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.253v13m0-13C10.832 5.477 9.206 5 7.5 5A7.5 7.5 0 002 12c0 2.112.446 4.14 1.253 6H12m0-13V9m0 2.253A7.46 7.46 0 0115 12c0 2.112-.446 4.14-1.253 6H12m0-13a7.46 7.46 0 00-3.753-.967M12 21V9m0 12h8.25c.621 0 1.125-.504 1.125-1.125V11.25c0-.621-.504-1.125-1.125-1.125H12M9.75 4.5V21M9.75 4.5V6.75m0-2.25H7.5M9.75 4.5h2.25M4.5 9h15"
            />
          </svg>
        </span>
      ),
      title: "Continuous Learning",
      description: "Regular training & workshops",
    },
    {
      icon: (
        <span role="img" aria-label="growth" className="mr-2 text-teal-500">
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </span>
      ),
      title: "Growth Mindset",
      description: "Diverse projects & new technologies",
    },
    {
      icon: (
        <span
          role="img"
          aria-label="work-life-balance"
          className="mr-2 text-orange-500"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      ),
      title: "Work-Life Balance",
      description: "Flexible arrangements",
    },
    {
      icon: (
        <span
          role="img"
          aria-label="recognition"
          className="mr-2 text-purple-500"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.085 19.231H4.55v-10.5h6.535m0 10.5c-.328 0-.649-.13-.881-.362-.232-.232-.362-.553-.362-.881v-10.5c0-.328.13-.649.362-.881.232-.232.553-.362.881-.362h8.835l2.25-1.125v12.75l-2.25-1.125-8.835 1.125z"
            />
          </svg>
        </span>
      ),
      title: "Recognition & Rewards",
      description: "Celebrating achievements",
    },
  ];
};

// --- Icon Position Configuration ---
// Define the final scattered position (using the previous layout as a base)
const iconPositions = {
  icon1: { top: "25%", left: "15%" },
  icon2: { top: "25%", left: "85%" },
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
      <section className="relative w-full h-screen flex items-center justify-center z-0 md:pt-0 pt-10">
        <div className="absolute inset-0 z-30 items-center justify-center md:flex hidden">
          {/* Main container for floating logos - critical for positioning */}
          <div className="relative w-full h-full">
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
          ></lord-icon>
          <br />
          <span className="text-3xl text-violet-500 font-bold">10+</span>
          <br />
          <span className="text-xl m-3">Web Projects</span>
        </div>
        <div className="text-white text-center md:border-none border md:my-0 my-2 md:bg-slate-900 bg-slate-800 p-6 rounded-xl hover:bg-slate-800 transition-transform all duration-300 ease-in-out hover:scale-105">
          <lord-icon
            className="m-2 size-20"
            src="https://cdn.lordicon.com/kgtbcywd.json"
            trigger="hover"
          ></lord-icon>
          <br />
          <span className="text-3xl text-violet-500 font-bold">4+</span>
          <br />
          <span className="text-xl m-3">Android Apps</span>
        </div>
        <div className="text-white text-center md:border-none border md:my-0 my-2 md:bg-slate-900 bg-slate-800 p-6 rounded-xl hover:bg-slate-800 transition-transform all duration-300 ease-in-out hover:scale-105">
          <lord-icon
            className="m-2 size-20"
            src="https://cdn.lordicon.com/edplgash.json"
            trigger="hover"
          ></lord-icon>
          <br />
          <span className="text-3xl text-violet-500 font-bold">1</span>
          <br />
          <span className="text-xl m-3">CRM Project</span>
        </div>
        <div className="text-white text-center md:border-none border md:my-0 my-2 md:bg-slate-900 bg-slate-800 p-6 rounded-xl hover:bg-slate-800 transition-transform all duration-300 ease-in-out hover:scale-105">
          <lord-icon
            className="m-2 size-20"
            src="https://cdn.lordicon.com/yudxjmzy.json"
            trigger="hover"
          ></lord-icon>
          <br />
          <span className="text-3xl text-violet-500 font-bold">2025</span>
          <br />
          <span className="text-xl m-3">Founded Year</span>
        </div>
      </div>
      <div>
        <div className=" w-[90%] mx-auto border border-slate-600 m-8"></div>
        <div className="text-md text-center text-white">
          <span className=" font-semibold px-3.5 bg-slate-700 rounded-full py-2 m-8">
            About AppDost
          </span>
        </div>
      </div>
      <div className="">
        <div className="text-center md:m-12 m-6 text-white">
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
              AppDost is your trusted partner for complete digital
              transformation. We are a dynamic,{" "}
            </p>
            <p className="md:m-2 m-1">
              innovation-driven IT solutions provider specializing in turning
              visionary ideas into powerful,
            </p>
            <p className="md:m-2 m-1">
              market-ready products. Our mission is to empower businesses with
              cutting-edge technology
            </p>
            <p className="md:m-2 m-1">
              solutions that drive growth, enhance user experiences, and create
              lasting digital impact.
            </p>
          </span>
        </div>
      </div>
      <div className=" w-[90%] mx-auto border border-slate-600 m-8"></div>
      <div className="what-we-do">
        <div className="text-md text-center text-white">
          <span className=" font-semibold px-3.5 bg-slate-700 rounded-full py-2 m-8">
            What We Do
          </span>
        </div>
      </div>

      <div className="services-box text-white my-12 flex flex-col gap-8 ">
        <div className="flex md:flex-row flex-col gap-8 mx-auto w-[80%]">
          <div className="border bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out w-3/4 hover:scale-105">
            <span>
              <lord-icon
                className="m-2 size-20"
                src="https://cdn.lordicon.com/nwfpiryp.json"
                trigger="hover"
              ></lord-icon>
            </span>
            <div className="text-xl font-bold my-4 text-yellow-300">
              UI/UX Design Excellence
            </div>
            <p>
              Crafting intuitive, user-centric designs that <br /> guarantee
              exceptional user satisfaction and <br /> engagement. We believe
              great design is <br /> invisible—it just works.
            </p>
          </div>
          <div className="border bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out w-3/4 hover:scale-105">
            <span>
              <lord-icon
                className="m-2 size-20"
                src="https://cdn.lordicon.com/ddgirohb.json"
                trigger="hover"
              ></lord-icon>
            </span>
            <div className="text-xl font-bold my-4 text-blue-300">
              Custom Software Development
            </div>
            <p>
              Building robust, scalable enterprise solutions <br /> tailored to
              your unique business <br /> requirements. From concept to
              deployment, <br /> we deliver excellence at every stage.
            </p>
          </div>
          <div className="border bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out w-3/4 hover:scale-105">
            <span>
              <lord-icon
                className="m-2 size-20"
                src="https://cdn.lordicon.com/xmoniccu.json"
                trigger="hover"
              ></lord-icon>
            </span>
            <div className="text-xl font-bold my-4 text-violet-500">
              Web Application Development
            </div>
            <p>
              Creating responsive, high-performance web <br /> applications
              using the latest frameworks and <br /> technologies. Your digital
              presence, <br />
              perfected.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-8 mx-auto w-[80%]">
          <div className="border bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out w-3/4 hover:scale-105">
            <span>
              <lord-icon
                className="m-2 size-20"
                src="https://cdn.lordicon.com/kgtbcywd.json"
                trigger="hover"
              ></lord-icon>
            </span>
            <div className="text-xl font-bold my-4 text-blue-500">
              Mobile App <br />
              Development
            </div>
            <p>
              Developing native and cross-platform mobile <br /> applications
              that users love. iOS, Android, <br /> or hybrid—we've got you
              covered.
            </p>
          </div>
          <div className="border bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out w-3/4 hover:scale-105">
            <span>
              <lord-icon
                className="m-2 size-20"
                src="https://cdn.lordicon.com/ejjkasim.json"
                trigger="hover"
              ></lord-icon>
            </span>
            <div className="text-xl font-bold my-4 text-green-500">
              Full-Stack Development
            </div>
            <p>
              End-to-end development expertise covering
              <br /> frontend elegance, backend power, database <br />{" "}
              optimization, and cloud infrastructure.
            </p>
          </div>
          <div className="border bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out w-3/4 hover:scale-105">
            <span>
              <lord-icon
                className="m-2 size-20"
                src="https://cdn.lordicon.com/zdwrqfmb.json"
                trigger="hover"
              ></lord-icon>
            </span>
            <div className="text-xl font-bold my-4 text-purple-600">
              Digital Transformation Consulting
            </div>
            <p>
              Strategic guidance to help businesses
              <br /> navigate their digital journey, from legacy
              <br /> system modernization to cloud migration.
            </p>
          </div>
        </div>
      </div>
      <div className=" w-[90%] mx-auto border border-slate-600 m-8"></div>
      <div className=" text-white">
        <div className="text-center text-white text-4xl font-bold mb-8 mt-16 ">
          🌟 Why Choose AppDost?
        </div>
        <div>
          <div className="flex md:flex-row flex-col gap-8 mx-auto w-[80%] py-8">
            <div className="bg-slate-700 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out hover:scale-105">
              <div className="font-bold">
                <span>✅</span> Complete Lifecycle Expertise
              </div>
              <p className=" px-7 py-1 text-slate-100">
                From ideation to deployment and beyond
              </p>
            </div>
            <div className="bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out hover:scale-105">
              <div className="font-bold">
                <span>✅</span> Complete Lifecycle Expertise
              </div>
              <p className=" px-7 py-1 text-slate-100">
                From ideation to deployment and beyond
              </p>
            </div>
            <div className="bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out hover:scale-105">
              <div className="font-bold">
                <span>✅</span> Complete Lifecycle Expertise
              </div>
              <p className=" px-7 py-1 text-slate-100">
                From ideation to deployment and beyond
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-8 mx-auto w-[80%] pb-8">
            <div className="bg-slate-700 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out hover:scale-105">
              <div className="font-bold">
                <span>✅</span> Complete Lifecycle Expertise
              </div>
              <p className=" px-7 py-1 text-slate-100">
                From ideation to deployment and beyond
              </p>
            </div>
            <div className="bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out hover:scale-105">
              <div className="font-bold">
                <span>✅</span> Complete Lifecycle Expertise
              </div>
              <p className=" px-7 py-1 text-slate-100">
                From ideation to deployment and beyond
              </p>
            </div>
            <div className="bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out hover:scale-105">
              <div className="font-bold">
                <span>✅</span> Complete Lifecycle Expertise
              </div>
              <p className=" px-7 py-1 text-slate-100">
                From ideation to deployment and beyond
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mx-auto justify-center md:w-[80%] text-white md:flex-row flex-col w-[80%] gap-4">
        {/* Left */}
        <div className=" md:w-1/2 rounded-xl md:p-10 p-2 flex-flex-col md:m-4 m-0 w-full border shadow-2xl transition-transform all duration-300 ease-in-out hover:scale-105 ">
          <label htmlFor="AppDost " className="">
            <div className="text-center flex flex-col items-center  ">
              <div className="font-bold md:text-4xl text-2xl w-full  ">
                👥 Work Culture & Values
              </div>
              <p className="md:text-md text-sm">At AppDost, we believe in:</p>
            </div>
          </label>
          <ul className="mt-10 md:text-md text-sm">
            <li className="my-2.5 px-4 py-3 rounded-full bg-slate-600 hover:transition-transform all duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 hover:cursor-pointer">
              🎯<span className="font-bold">Innovation First</span> -
              Encouraging creative problem-solving
            </li>
            <li className="my-2.5 px-4 py-3 rounded-full bg-slate-600 hover:transition-transform all duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 hover:cursor-pointer">
              🤝<span className="font-bold"> Collaborative Environment</span> -
              Cross-functional teamwork
            </li>
            <li className="my-2.5 px-4 py-3 rounded-full bg-slate-600 hover:transition-transform all duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 hover:cursor-pointer">
              📚<span className="font-bold">Continuous Learning</span> - Regular
              training & workshops
            </li>
            <li className="my-2.5 px-4 py-3 rounded-full bg-slate-600 hover:transition-transform all duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 hover:cursor-pointer">
              🌱<span className="font-bold">Growth Mindset</span> - Diverse
              projects & new technologies
            </li>
            <li className="my-2.5 px-4 py-3 rounded-full bg-slate-600 hover:transition-transform all duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 hover:cursor-pointer">
              ⚖️<span className="font-bold">Work-Life Balance</span> - Flexible
              arrangements
            </li>
            <li className="my-2.5 px-4 py-3 rounded-full bg-slate-600 hover:transition-transform all duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 hover:cursor-pointer">
              🏆<span className="font-bold">Recognition & Rewards</span> -
              Celebrating achievements
            </li>
          </ul>
        </div>
        {/* Right */}
        <div className="md:w-1/2 w-full rounded-xl p-10 flex-flex-col md:m-4 m-0  border shadow-2xl transition-transform all duration-300 ease-in-out hover:scale-105">
          <label htmlFor="Contact">
            <div className="font-bold text-4xl text-center">
              📞 Get In Touch
            </div>
            <p className="text-center px-10 text-xl flex flex-col gap-4 ">
              <br />
              <span className="font-semibold">🌐 Website:</span>
              <a href="www.appdost.inbr">www.appdost.in</a>
              <br />
              📧 Email:
              <a
                href="contact@appdost.
hr@appdost.in"
              >
                contact@appdost. hr@appdost.in
              </a>
              <br />
              📍 Locations: <br />
              HQ-Patna, Motihari, Banka <br />
              📞 Phone: <br />
              +91 76350 75422 <br />
              +91 11 6929 0750
            </p>
          </label>
          <div className="text-white ">
            <Link to="/careers">
              <button className="p-4 relative  w-full m-2 rounded-xl font-semibold bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl transition-transform all duration-300 ease-in-out hover:scale-105 border items-center">
                Join Our Team{" "}
              </button>
            </Link>
            <Link to="/contact">
              <button className="p-4  w-full m-2 rounded-xl font-semibold bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl transition-transform all duration-300 ease-in-out hover:scale-105">
                {" "}
                Start Your Project
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" w-[90%] mx-auto border border-slate-600 m-8"></div>
      <div className="Services">
        <div className="text-center ">
          <label htmlFor="Services">
            <span className="text-white text-4xl font-bold mb-10 mt-16 border-b-4 border-blue-500 ">
              Our services
            </span>
          </label>
        </div>
      </div>
      <div className="services-box text-white my-12 flex flex-col gap-8 ">
        <div className="flex md:flex-row flex-col gap-8 mx-auto w-[80%]">
          <div className="border bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out w-3/4 hover:scale-105 items-center flex flex-col">
            <span className="">
              <lord-icon
                className="m-2 size-20"
                src="https://cdn.lordicon.com/kgtbcywd.json"
                trigger="hover"
              ></lord-icon>
            </span>
            <div className="text-xl font-bold my-4 text-blue-500">
              App Development
            </div>
            <p className="text-center">
              Custom Android applications built with <br />
              the latest technologies to bring your <br /> ideas to life.
            </p>
            <div className="my-6">
              <p className="relative px-8">
                {" "}
                <lord-icon
                  className="absolute left-0 h-6"
                  src="https://cdn.lordicon.com/hrtsficn.json"
                  trigger="hover"
                ></lord-icon>
                Native & Hybrid Apps{" "}
              </p>
              <p className="relative px-8">
                {" "}
                <lord-icon
                  className="absolute left-0 h-6"
                  src="https://cdn.lordicon.com/hrtsficn.json"
                  trigger="hover"
                ></lord-icon>
                Play Store Deployment{" "}
              </p>
              <p className="relative px-8">
                {" "}
                <lord-icon
                  className="absolute left-0 h-6"
                  src="https://cdn.lordicon.com/hrtsficn.json"
                  trigger="hover"
                ></lord-icon>
                Maintenance & Support{" "}
              </p>
            </div>
          </div>
          <div className="border bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out w-3/4 hover:scale-105 items-center flex flex-col">
            <span className="">
              <lord-icon
                className="m-2 size-20"
                src="https://cdn.lordicon.com/xmoniccu.json"
                trigger="hover"
              ></lord-icon>
            </span>
            <div className="text-xl font-bold my-4 text-blue-500">
             Web Development
            </div>
            <p className="text-center">
              Responsive and scalable web <br />
              applications tailored to your business <br /> needs.
            </p>
            <div className="my-6">
              <p className="relative px-8">
                {" "}
                <lord-icon
                  className="absolute left-0 h-6"
                  src="https://cdn.lordicon.com/hrtsficn.json"
                  trigger="hover"
                ></lord-icon>
                Responsive Design{" "}
              </p>
              <p className="relative px-8">
                {" "}
                <lord-icon
                  className="absolute left-0 h-6"
                  src="https://cdn.lordicon.com/hrtsficn.json"
                  trigger="hover"
                ></lord-icon>
                E-commerce Solutions{" "}
              </p>
              <p className="relative px-8">
                {" "}
                <lord-icon
                  className="absolute left-0 h-6"
                  src="https://cdn.lordicon.com/hrtsficn.json"
                  trigger="hover"
                ></lord-icon>
                Progressive Web Apps{" "}
              </p>
            </div>
          </div>
          <div className="border bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out w-3/4 hover:scale-105 items-center flex flex-col">
            <span className="">
              <lord-icon
                className="m-2 size-20"
                src="https://cdn.lordicon.com/nwfpiryp.json"
                trigger="hover"
              ></lord-icon>
            </span>
            <div className="text-xl font-bold my-4 text-blue-500">
              UI/UX Development
            </div>
            <p className="text-center">
              Beautiful, intuitive user interfaces <br />
              that enhance user experience <br /> and engagement.
            </p>
            <div className="my-6">
              <p className="relative px-8">
                {" "}
                <lord-icon
                  className="absolute left-0 h-6"
                  src="https://cdn.lordicon.com/hrtsficn.json"
                  trigger="hover"
                ></lord-icon>
                User Research{" "}
              </p>
              <p className="relative px-8">
                {" "}
                <lord-icon
                  className="absolute left-0 h-6"
                  src="https://cdn.lordicon.com/hrtsficn.json"
                  trigger="hover"
                ></lord-icon>
                Wireframing{" "}
              </p>
              <p className="relative px-8">
                {" "}
                <lord-icon
                  className="absolute left-0 h-6"
                  src="https://cdn.lordicon.com/hrtsficn.json"
                  trigger="hover"
                ></lord-icon>
                Brand Identity{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-8 mx-auto w-[80%]">
          <div className="border bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out w-3/4 hover:scale-105 items-center flex flex-col">
            <span className="">
              <lord-icon
                className="m-2 size-20"
                src="https://cdn.lordicon.com/qaeqyqcc.json"
                trigger="hover"
              ></lord-icon>
            </span>
            <div className="text-xl font-bold my-4 text-blue-500">
              CRM Software
            </div>
            <p className="text-center">
              Comprehensive CRM solutions to <br />
              manage customer relationships and <br /> boost productivity.
            </p>
            <div className="my-6">
              <p className="relative px-8">
                {" "}
                <lord-icon
                  className="absolute left-0 h-6"
                  src="https://cdn.lordicon.com/hrtsficn.json"
                  trigger="hover"
                ></lord-icon>
                Custom Developmen{" "}
              </p>
              <p className="relative px-8">
                {" "}
                <lord-icon
                  className="absolute left-0 h-6"
                  src="https://cdn.lordicon.com/hrtsficn.json"
                  trigger="hover"
                ></lord-icon>
                Integration Services{" "}
              </p>
              <p className="relative px-8">
                {" "}
                <lord-icon
                  className="absolute left-0 h-6"
                  src="https://cdn.lordicon.com/hrtsficn.json"
                  trigger="hover"
                ></lord-icon>
                Maintenance & Support{" "}
              </p>
            </div>
          </div>
          <div className="border bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out w-3/4 hover:scale-105 items-center flex flex-col">
            <span className="">
              <lord-icon
                className="m-2 size-20"
                src="https://cdn.lordicon.com/vbfznnhs.json"
                trigger="hover"
              ></lord-icon>
            </span>
            <div className="text-xl font-bold my-4 text-blue-500">
              Cloud Solutions
            </div>
            <p className="text-center">
              Scalable cloud infrastructure and <br />
              migration services for modern <br /> businesses.
            </p>
            <div className="my-6">
              <p className="relative px-8">
                {" "}
                <lord-icon
                  className="absolute left-0 h-6"
                  src="https://cdn.lordicon.com/hrtsficn.json"
                  trigger="hover"
                ></lord-icon>
                AWS, Azure, GCP{" "}
              </p>
              <p className="relative px-8">
                {" "}
                <lord-icon
                  className="absolute left-0 h-6"
                  src="https://cdn.lordicon.com/hrtsficn.json"
                  trigger="hover"
                ></lord-icon>
                Migration Services{" "}
              </p>
              <p className="relative px-8">
                {" "}
                <lord-icon
                  className="absolute left-0 h-6"
                  src="https://cdn.lordicon.com/hrtsficn.json"
                  trigger="hover"
                ></lord-icon>
                Performance Tuning{" "}
              </p>
            </div>
          </div>
          <div className="border bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out w-3/4 hover:scale-105 items-center flex flex-col">
            <span className="">
              <lord-icon
                className="m-2 size-20"
                src="https://cdn.lordicon.com/drdlomqk.json"
                trigger="hover"
              ></lord-icon>
            </span>
            <div className="text-xl font-bold my-4 text-blue-500">
              Cybersecurity
            </div>
            <p className="text-center">
              Protect your business with robust <br />
              security solutions and best practices.
            </p>
            <div className="my-6">
              <p className="relative px-8">
                {" "}
                <lord-icon
                  className="absolute left-0 h-6"
                  src="https://cdn.lordicon.com/hrtsficn.json"
                  trigger="hover"
                ></lord-icon>
                Security Audits{" "}
              </p>
              <p className="relative px-8">
                {" "}
                <lord-icon
                  className="absolute left-0 h-6"
                  src="https://cdn.lordicon.com/hrtsficn.json"
                  trigger="hover"
                ></lord-icon>
                Penetration Testing{" "}
              </p>
              <p className="relative px-8">
                {" "}
                <lord-icon
                  className="absolute left-0 h-6"
                  src="https://cdn.lordicon.com/hrtsficn.json"
                  trigger="hover"
                ></lord-icon>
                Compliance{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[90%] mx-auto border border-slate-600 m-8"></div>
    </>
  );
};

export default Home;
