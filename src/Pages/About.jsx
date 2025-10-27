import React from "react";
import { Link } from "react-router-dom";
import { Target, Eye, Gem, Users, Clock, Zap, Star } from "lucide-react"; // Import icons

const StatsSectionV2 = () => {
  // Data for the statistics cards
  const stats = [
    {
      label: "Happy Clients",
      value: "10K+",
      Icon: Users,
      color: "text-cyan-400",
      shadow: "shadow-cyan-500/30",
    },
    {
      label: "Projects Completed",
      value: "250+",
      Icon: Zap,
      color: "text-green-400",
      shadow: "shadow-green-500/30",
    },
    {
      label: "Years in Business",
      value: "5",
      Icon: Clock,
      color: "text-amber-400",
      shadow: "shadow-amber-500/30",
    },
    {
      label: "5-Star Ratings",
      value: "4.9",
      Icon: Star,
      color: "text-purple-400",
      shadow: "shadow-purple-500/30",
    },
  ];

  return (
    // Single outer div for the entire section
    <div className="w-full bg-slate-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Track Record
          </h2>
          <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
            Numbers don't lie. See what we've achieved.
          </p>
        </div>

        {/* Grid container for the cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((item) => (
            <StatsCard
              key={item.label}
              label={item.label}
              value={item.value}
              Icon={item.Icon}
              color={item.color}
              shadow={item.shadow}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
const MissionSection = () => {
  // Data for the cards
  const missionData = [
    {
      title: "Our Mission",
      description:
        "To empower businesses with innovative and reliable technology solutions that drive growth, efficiency, and success in a digital-first world.",
      Icon: Target,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Our Vision",
      description:
        "To be a leading global technology partner recognized for our commitment to quality, integrity, and transformative digital experiences.",
      Icon: Eye,
      color: "from-green-400 to-teal-500",
    },
    {
      title: "Our Values",
      description:
        "Innovation, Integrity, Collaboration, and Customer-Centricity. These core principles guide every decision we make and every solution we deliver.",
      Icon: Gem,
      color: "from-purple-500 to-indigo-600",
    },
  ];

  return (
    <>
      {/* This style block defines the floating animation. 
        It's included here to keep everything in one file.
      */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .float-animation {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>

      {/* Single outer div for the entire section */}
      <div className="w-full bg-transparent text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center mt-6">
          {/* Section Header */}
          <div className="max-w-3xl text-center mb-8 mt-8 ">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Empowering Rural India{" "}
              <span className="text-purple-600 dark:text-purple-400">
                with Technology
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Making professional IT solutions affordable and accessible for{" "}
              <br /> rural businesses, educational institutions, and startups
              across India
            </p>
            <div className="text-center m-8 mt-12">
              <label htmlFor="Services">
                <span className="text-white text-4xl font-semibold mb-10 mt-16 border-b-4 border-blue-500 ">
                  Our Mission: Digital Inclusion for All
                </span>
                <p className="text-lg text-gray-600 dark:text-gray-400 m-8">
                  We believe technology should reach every corner of India.{" "}
                  <br /> That's why we're committed to providing world-class IT{" "}
                  <br />
                  solutions at prices that rural entrepreneurs, <br /> schools,
                  and startups can afford.
                </p>
              </label>
            </div>
          </div>

          {/* Grid container for the cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionData.map((item) => (
              <MissionCard
                key={item.title}
                title={item.title}
                description={item.description}
                Icon={item.Icon}
                color={item.color}
              />
            ))}
          </div>
          <div className="text-center m-8 mt-18">
            <label htmlFor="Services">
              <span className="text-white text-4xl font-semibold mb-10 mt-16 border-b-4 border-blue-500 ">
                Our Story
              </span>
              <p className="text-lg text-gray-600 dark:text-gray-400 m-8">
                Founded in 2025, AppDost was born from a simple yet powerful
                vision: to bridge <br /> the digital divide in rural India. We
                noticed that quality IT <br /> services were either too
                expensive or unavailable for <br /> small businesses, schools,
                and entrepreneurs <br /> in rural areas. <br />
                <br />
                As developers who understand the challenges faced by underserved
                communities, <br /> we decided to create a company that puts
                social impact alongside profit. <br /> We believe that every
                business owner, teacher, and <br /> startup founder deserves
                access to professional technology <br /> solutions. <br />
                <br />
                Today, we're proud to serve clients from both urban and rural
                areas, <br /> offering the same quality of service but with
                pricing models <br />
                designed to be truly affordable for everyone.
              </p>
            </label>
          </div>
          <div className="text-center m-8 mt-12">
            <label htmlFor="Impact">
              <span className="text-white text-4xl font-semibold mb-10 mt-16 border-b-4 border-blue-500 ">
                Our Impact
              </span>
              <p className="text-lg text-gray-600 dark:text-gray-400 m-8">
                Numbers that reflect our commitment to making a difference
              </p>
            </label>
          </div>
          <div>
            <div className="flex md:flex-row flex-col gap-8 mx-auto w-[80%]">
              <div className="bg-slate-800 rounded-xl p-8 hover:cursor-pointer transition-transform all duration-300 ease-in-out hover:scale-105">
                <div className="font-bold text-center">
                  <span className="text-6xl font-bold text-violet-500">
                    50+
                  </span>{" "}
                </div>
                <p className="text-xl font-semibold py-1 text-slate-100 text-center ">
                  Rural Businesses Served
                </p>
              </div>
              <div className="bg-slate-800 rounded-xl p-8 hover:cursor-pointer transition-transform all duration-300 ease-in-out hover:scale-105">
                <div className="font-bold text-center">
                  <span className="text-6xl font-bold text-violet-500">
                    15+
                  </span>{" "}
                </div>
                <p className="text-xl font-semibold py-1 text-slate-100 text-center ">
                  Projects Completed
                </p>
              </div>
              <div className="bg-slate-800 rounded-xl p-8 hover:cursor-pointer transition-transform all duration-300 ease-in-out hover:scale-105">
                <div className="font-bold text-center">
                  <span className="text-6xl font-bold text-violet-500">
                    10+
                  </span>{" "}
                </div>
                <p className="text-xl font-semibold py-1 text-slate-100 text-center ">
                  Educational Institutions
                </p>
              </div>
              <div className="bg-slate-800 rounded-xl p-8 hover:cursor-pointer transition-transform all duration-300 ease-in-out hover:scale-105">
                <div className="font-bold text-center">
                  <span className="text-6xl font-bold text-violet-500">
                    40%
                  </span>{" "}
                </div>
                <p className="text-xl font-semibold py-1 text-slate-100 text-center ">
                  Lower Than Market Rates
                </p>
              </div>
            </div>
          </div>
          <div className="text-center m-8 mt-12">
            <label htmlFor="Impact">
              <span className="text-white text-4xl font-semibold mb-10 mt-16 border-b-4 border-blue-500 ">
                Our Core Values
              </span>
              <p className="text-lg text-gray-600 dark:text-gray-400 m-8">
                The principles that guide everything we do
              </p>
            </label>
          </div>
          <div className="">
            <div className="flex md:flex-row flex-col gap-8 mx-auto w-[80%] flex-wrap justify-center">
              <div className="bg-slate-800 rounded-xl p-8 hover:cursor-pointer transition-transform all duration-300 ease-in-out hover:scale-105">
                <div className="font-bold  w-45 ">
                  <span className="text-2xl font-bold text-violet-500">
                    💰Affordability
                  </span>{" "}
                </div>
                <p className="text-md py-3 text-slate-100 flex flex-wrap">
                  Fair pricing that doesn't <br /> compromise on quality. <br />{" "}
                  Special packages for rural <br />
                  areas and non-profits.
                </p>
              </div>
              <div className="bg-slate-800 rounded-xl p-8 hover:cursor-pointer transition-transform all duration-300 ease-in-out hover:scale-105">
                <div className="font-bold  w-45 ">
                  <span className="text-2xl font-bold text-violet-500">
                    🤝 Accessibility
                  </span>{" "}
                </div>
                <p className="text-md py-3 text-slate-100 flex flex-wrap">
                  Easy-to-use solutions with <br /> training and support in{" "}
                  <br /> local languages. No <br />
                  technical jargon.
                </p>
              </div>
              <div className="bg-slate-800 rounded-xl p-8 hover:cursor-pointer transition-transform all duration-300 ease-in-out hover:scale-105">
                <div className="font-bold  w-45 ">
                  <span className="text-2xl font-bold text-violet-500">
                    ⚡ Quality
                  </span>{" "}
                </div>
                <p className="text-md py-3 text-slate-100 flex flex-wrap">
                  Professional-grade <br /> solutions that compete <br /> with
                  expensive <br /> alternatives. No <br /> compromise on
                  excellence.
                </p>
              </div>
              <div className="bg-slate-800 rounded-xl p-8 hover:cursor-pointer transition-transform all duration-300 ease-in-out hover:scale-105">
                <div className="font-bold  w-45 ">
                  <span className="text-2xl font-bold text-violet-500">
                    🌱 Growth
                  </span>{" "}
                </div>
                <p className="text-md py-3 text-slate-100 flex flex-wrap">
                  We grow when our clients <br /> grow. Your success is our{" "}
                  <br /> success.
                </p>
              </div>
              <div className="bg-slate-800 rounded-xl p-8 hover:cursor-pointer transition-transform all duration-300 ease-in-out hover:scale-105">
                <div className="font-bold  w-45 ">
                  <span className="text-2xl font-bold text-violet-500">
                    🎓 Education
                  </span>{" "}
                </div>
                <p className="text-md py-3 text-slate-100 flex flex-wrap">
                  Free training, <br /> documentation, and <br /> ongoing
                  support to make <br /> technology easy to adopt.
                </p>
              </div>
              <div className="bg-slate-800 rounded-xl p-8 hover:cursor-pointer transition-transform all duration-300 ease-in-out hover:scale-105">
                <div className="font-bold  w-45 ">
                  <span className="text-2xl font-bold text-violet-500">
                    💚 Social Impact
                  </span>{" "}
                </div>
                <p className="text-md py-3 text-slate-100 flex flex-wrap">
                  Beyond business - we're <br /> here to create positive <br />{" "}
                  change in rural <br /> communities.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center m-8 mt-12">
            <label htmlFor="Impact">
              <span className="text-white text-4xl font-semibold mb-10 mt-16 border-b-4 border-blue-500 ">
                Our Commitments To You
              </span>
              <p className="text-lg text-gray-600 dark:text-gray-400 m-8">
                What you can expect when you work with AppDost
              </p>
            </label>
          </div>
          <div className="services-box text-white my-12 flex flex-col gap-8 ">
            <div className="flex md:flex-row flex-col gap-8 mx-auto w-[80%]">
              <div className="border bg-slate-700 border-slate-600 rounded-xl py-6 hover:bg-slate-600 transition-transform all duration-300 ease-in-out hover:scale-105 items-center flex flex-col">
                <div className="text-xl font-bold my-4 text-center">
                  🎯 For Rural Businesses
                </div>
                <div className="my-3">
                  <p className="relative my-2 mx-2 px-8">
                    {" "}
                    <lord-icon
                      className="absolute left-0 h-6"
                      src="https://cdn.lordicon.com/hrtsficn.json"
                      trigger="hover"
                    ></lord-icon>
                    40-60% lower pricing than market rates{" "}
                  </p>
                  <p className="relative my-2 mx-2 px-8">
                    {" "}
                    <lord-icon
                      className="absolute left-0 h-6"
                      src="https://cdn.lordicon.com/hrtsficn.json"
                      trigger="hover"
                    ></lord-icon>
                    Flexible payment plans{" "}
                  </p>
                  <p className="relative my-2 mx-2 px-8">
                    {" "}
                    <lord-icon
                      className="absolute left-0 h-6"
                      src="https://cdn.lordicon.com/hrtsficn.json"
                      trigger="hover"
                    ></lord-icon>
                    Free basic maintenance for 6 months{" "}
                  </p>
                  <p className="relative my-2 mx-2 px-8">
                    {" "}
                    <lord-icon
                      className="absolute left-0 h-6"
                      src="https://cdn.lordicon.com/hrtsficn.json"
                      trigger="hover"
                    ></lord-icon>
                    Training in local languages
{" "}
                  </p>
                  <p className="relative my-2 mx-2 px-8">
                    {" "}
                    <lord-icon
                      className="absolute left-0 h-6"
                      src="https://cdn.lordicon.com/hrtsficn.json"
                      trigger="hover"
                    ></lord-icon>
                    No hidden costs{" "}
                  </p>
                </div>
              </div>
              <div className="border bg-slate-700 border-slate-600 rounded-xl py-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out hover:scale-105 items-center flex flex-col">
                <div className="text-xl font-bold my-4 text-center">
                  📚 For Educational Institutions
                </div>
                <div className="my-3">
                  <p className="relative my-2 mx-2 px-8">
                    {" "}
                    <lord-icon
                      className="absolute left-0 h-6"
                      src="https://cdn.lordicon.com/hrtsficn.json"
                      trigger="hover"
                    ></lord-icon>
                    Special education sector discounts
{" "}
                  </p>
                  <p className="relative my-2 mx-2 px-8">
                    {" "}
                    <lord-icon
                      className="absolute left-0 h-6"
                      src="https://cdn.lordicon.com/hrtsficn.json"
                      trigger="hover"
                    ></lord-icon>
                    Free software upgrades{" "}
                  </p>
                  <p className="relative my-2 mx-2 px-8">
                    {" "}
                    <lord-icon
                      className="absolute left-0 h-6"
                      src="https://cdn.lordicon.com/hrtsficn.json"
                      trigger="hover"
                    ></lord-icon>
                    Student & teacher training included{" "}
                  </p>
                  <p className="relative my-2 mx-2 px-8">
                    {" "}
                    <lord-icon
                      className="absolute left-0 h-6"
                      src="https://cdn.lordicon.com/hrtsficn.json"
                      trigger="hover"
                    ></lord-icon>
                    Custom learning management systems
{" "}
                  </p>
                  <p className="relative my-2 mx-2 px-8">
                    {" "}
                    <lord-icon
                      className="absolute left-0 h-6"
                      src="https://cdn.lordicon.com/hrtsficn.json"
                      trigger="hover"
                    ></lord-icon>
                    Long-term partnership programs{" "}
                  </p>
                </div>
              </div>
              <div className="border bg-slate-700 border-slate-600 rounded-xl py-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out hover:scale-105 items-center flex flex-col">
                <div className="text-xl font-bold my-4 text-center">
                  🚀 For Startups
                </div>
                <div className="my-3">
                  <p className="relative my-2 mx-2 px-8">
                    {" "}
                    <lord-icon
                      className="absolute left-0 h-6"
                      src="https://cdn.lordicon.com/hrtsficn.json"
                      trigger="hover"
                    ></lord-icon>
                    MVP development at startup-friendly rates{" "}
                  </p>
                  <p className="relative my-2 mx-2 px-8">
                    {" "}
                    <lord-icon
                      className="absolute left-0 h-6"
                      src="https://cdn.lordicon.com/hrtsficn.json"
                      trigger="hover"
                    ></lord-icon>
                    Scalable architecture from day one{" "}
                  </p>
                  <p className="relative my-2 mx-2 px-8">
                    {" "}
                    <lord-icon
                      className="absolute left-0 h-6"
                      src="https://cdn.lordicon.com/hrtsficn.json"
                      trigger="hover"
                    ></lord-icon>
                    Technical consultation included{" "}
                  </p>
                  <p className="relative my-2 mx-2 px-8">
                    {" "}
                    <lord-icon
                      className="absolute left-0 h-6"
                      src="https://cdn.lordicon.com/hrtsficn.json"
                      trigger="hover"
                    ></lord-icon>
                    Deferred payment options available
{" "}
                  </p>
                  <p className="relative my-2 mx-2 px-8">
                    {" "}
                    <lord-icon
                      className="absolute left-0 h-6"
                      src="https://cdn.lordicon.com/hrtsficn.json"
                      trigger="hover"
                    ></lord-icon>
                    Growth partnership opportunities{" "}
                  </p>
                </div>
              </div>

            </div>
            
          </div>
          <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8 min-h-[400px]">
                
                <div 
                  className="w-full max-w-4xl p-10 sm:p-14 rounded-3xl text-center shadow-2xl relative overflow-hidden"
                  style={{
          
                    backgroundColor: '#1a1a2e', 
                    '--gradient-size': '300%', // Size the gradient much larger than the container
                    '--start-color': 'rgba(45, 52, 71, 1)', // Dark Blue/Grey
                    '--mid-color': 'rgba(111, 74, 178, 0.5)', // Purple/Violet
                    '--end-color': 'rgba(28, 32, 53, 1)', // Very Dark Blue
                    
                    background: 'linear-gradient(-45deg, var(--start-color), var(--mid-color), var(--end-color), var(--start-color))',
                    backgroundSize: 'var(--gradient-size) var(--gradient-size)',
                    animation: 'move-gradient 15s ease infinite',
                  }}
                >
                  <style jsx="true">{`
                    @keyframes move-gradient {
                      0% {
                        background-position: 0% 50%;
                      }
                      50% {
                        background-position: 100% 50%;
                      }
                      100% {
                        background-position: 0% 50%;
                      }
                    }
                  `}</style>
                  
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 z-10 relative">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto z-10 relative text-center">
                   
Join hundreds of rural businesses, schools, and startups who are already <br />
growing with AppDost. Let's discuss how we can help you achieve your <br />
digital goals affordably.

                  </p>
          
                  <div className="flex flex-col sm:flex-row justify-center gap-4 z-10 relative">
          
                    <Link to='/contact'><button className="bg-white text-[#1a1a2e] font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-[1.02]">
                      Get Free Consultation →
                    </button></Link>
          
                    <Link to='/services'><button className="bg-transparent border border-white/50 text-white font-semibold py-3 px-8 rounded-full hover:bg-white/10 transition duration-300 transform hover:scale-[1.02]">
                      View Our Services
                    </button></Link>
                  </div>
                </div>
              </div>
               <div className=" w-[90%] mx-auto border border-slate-600 m-8"></div>
        </div>
      </div>
    </>
  );
};

/**
 * MissionCard Component
 * A reusable card for displaying mission, vision, or values.
 * Includes the floating icon and shine effect.
 */
const MissionCard = ({ title, description, Icon, color }) => {
  return (
    <>
      <div
        className={`
        relative overflow-hidden rounded-xl p-6 bg-slate-800 
        border border-slate-700 transition-all duration-300
        group hover:shadow-2xl
      `}
      >
        {/* --- Shine/Glow Effect --- 
          A pseudo-element that creates a rotating gradient border on hover.
      */}
        <span
          className={`
          absolute -top-[150%] -left-[150%] w-[400%] h-[400%] 
          bg-gradient-to-br ${color} 
          opacity-0 group-hover:opacity-15 transition-all duration-700
          animate-spin
        `}
          style={{ animationDuration: "6s", animationTimingFunction: "linear" }}
        />

        {/* Card Content (relative to stay on top of the shine) */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Floating Icon */}
          <div className="mb-6 flex justify-center">
            <div
              className={`relative p-4 rounded-full bg-gradient-to-br ${color} text-white shadow-lg float-animation`}
            >
              <Icon className="w-10 h-10" />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
            <p className="text-slate-300 text-base leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionSection;
