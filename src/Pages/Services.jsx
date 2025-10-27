import React from "react";
import { Search, Brush, Bug, Globe } from "lucide-react";
const steps = [
  {
    id: 1,
    title: "Discovery & Planning",
    details:
      "We deep dive into your requirements, understand your business goals, analyze competitors, and create a comprehensive project roadmap with clear milestones.",
    isComplete: true,
    Icon: Search,
    iconBg: "bg-gray-700",
  },
  {
    id: 2,
    title: "Design & Prototype",
    details:
      "Our design team creates intuitive wireframes, stunning UI mockups, and interactive prototypes that bring your vision to life before development begins.",
    isComplete: true,
    Icon: Brush,
    iconBg: "bg-gray-700",
  },
  {
    id: 3,
    title: "Development & Testing",
    details:
      "Expert developers write clean, scalable code while our QA team performs rigorous testing to ensure flawless functionality across all devices and platforms.",
    isComplete: true,
    Icon: Bug,
    iconBg: "bg-gray-700",
  },
  {
    id: 4,
    title: "Deployment & Support",
    details:
      "We handle the complete deployment process and provide ongoing maintenance, updates, and 24/7 technical support to keep your solution running smoothly.",
    isComplete: true,
    Icon: Globe,
    iconBg: "bg-gray-700",
  },
];
const StepperItem = ({ step, isFirst, isLast }) => {
  const IconComponent = step.Icon;

  return (
    <div className="flex w-full mb-10 last:mb-0">
      <div className="flex flex-col items-center w-8">
        {!isFirst && (
          <div
            className={`h-10 w-0.5 ${
              step.isComplete ? "bg-green-600" : "bg-gray-700"
            }`}
          />
        )}
        {isFirst && <div className="h-5" />}

        <div
          className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full ring-4 ring-white dark:ring-gray-900 ${step.iconBg}`}
        >
          <IconComponent
            className={`w-4 h-4 ${
              step.isComplete ? "text-white" : "text-gray-400"
            }`}
          />
        </div>
        {!isLast && (
          <div
            className={`flex-grow w-0.5 ${
              step.isComplete ? "bg-green-600" : "bg-gray-700"
            }`}
          />
        )}
      </div>

      <div className="flex-1 ms-4 pt-1">
        <h3 className="font-semibold leading-tight text-white dark:text-gray-100">
          {step.title}
        </h3>
        <p className="text-sm text-gray-400">{step.details}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="w-full flex items-center justify-center z-0 pt-20  ">
      <div className=" bg-white dark:bg-gray-900 pb-16 px-4 flex flex-col items-center font-sans ">
        {/* Header Section */}
        <div className="max-w-3xl text-center mt-8 ">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Our{" "}
            <span className="text-purple-600 dark:text-purple-400">
              Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Comprehensive IT Solutions Tailored to Your Business Needs
          </p>
        </div>
        <div className="text-center m-8 mt-12">
            <label htmlFor="Services">
              <span className="text-white text-4xl font-semibold mb-10 mt-16 border-b-4 border-blue-500 ">
                What We Offer 
              </span>
            </label>
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
                Building robust, scalable enterprise solutions <br /> tailored
                to your unique business <br /> requirements. From concept to
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
                using the latest frameworks and <br /> technologies. Your
                digital presence, <br />
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
        <div className=" text-white flex flex-col items-center mx-auto">
          <div className="text-center m-12 mt-12">
            <label htmlFor="Services">
              <span className="text-white text-4xl font-bold mb-10 mt-16 border-b-4 border-blue-500 ">
                Our Development Process
              </span>
            </label>
          </div>
          <div className="flex flex-col justify-center w-100 mb-8 mx-auto ">
            {steps.map((step, index) => (
              <StepperItem
                key={step.id}
                step={step}
                isFirst={index === 0}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
