import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search,
  Brush,
  Bug,
  Globe,
  Bot,
  LineSquiggle,
  Briefcase,
  MessageCircle,
  Clock, ArrowRight, FileText,
  Check, Shield
} from "lucide-react";



const FeaturedArticleCard = () => {
  return (
    <div className="w-full lg:w-[450px] shadow-xl rounded-2xl bg-white dark:bg-gray-800 transition-all hover:shadow-2xl ">
      <div className="p-10 pt-16 h-72 rounded-t-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center relative">
        {/* Placeholder Icon for the document graphic */}
        <div className="p-6 bg-white/20 rounded-full">
            <FileText className="w-12 h-12 text-white/80" strokeWidth={1.5} />
        </div>
      </div>
      
      {/* Article Content Section */}
      <div className="p-6 flex flex-col">
        {/* Metadata: Tag and Reading Time */}
        <div className="flex justify-between items-center text-sm mb-3">
          <span className="px-3 py-1 text-xs font-semibold uppercase rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/40 dark:text-pink-300">
            Design
          </span>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Clock className="w-3.5 h-3.5 mr-1" />
            <span>12 min</span>
          </div>
        </div>

        {/* Title and Snippet */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 leading-snug hover:underline hover:cursor-pointer">
          TestDisabled This account doesn't meet our policy...
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 line-clamp-3 hover:underline hover:cursor-pointer">
          TestDisabled This account doesn't meet our policy guidelines.Disabled This account doesn't meet our policy guidelines.Disabled This...
        </p>

        {/* Footer: Author and Date */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 hover:cursor-pointer">
          <div className="flex items-center">
            {/* Author Avatar Placeholder */}
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold mr-3">
              AP
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">AppDost Team</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Oct 12, 2025</p>
            </div>
          </div>
          
          {/* Read More Arrow */}
          <button className="p-2 rounded-full text-purple-600 dark:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors hover:cursor-pointer">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    title: "DeepFake Detection",
    subtitle: "AI/ML Summer Internship Project",
    tags: [
      { label: "AI/ML", bg: "bg-purple-500/50" },
      { label: "Jupyter", bg: "bg-purple-500/50" },
    ],
    description:
      "Advanced deep learning model for detecting manipulated media using computer vision and neural networks. Summer internship research project.",
    colorClass: "bg-gradient-to-br from-purple-600 to-indigo-700",
    Icon: Bot, // Placeholder Icon
    githubLink: "https://github.com/priyesranjan/DeepFake",
  },
  {
    title: "NooBot",
    subtitle: "Intelligent Python Automation Bot",
    tags: [
      { label: "Python", bg: "bg-green-500/50 text-green-800" },
      { label: "Automation", bg: "bg-green-500/50 text-green-800" },
    ],
    description:
      "Smart automation bot built with Python for task scheduling, data processing, and intelligent workflow automation.",
    colorClass: "bg-gradient-to-br from-teal-500 to-green-600",
    Icon: LineSquiggle, // Placeholder Icon
    githubLink: "https://github.com/priyesranjan/NooBot",
  },
  {
    title: "EduTools",
    subtitle: "Educational Web Platform",
    tags: [
      { label: "HTML/CSS", bg: "bg-pink-500/50 text-pink-800" },
      { label: "Education", bg: "bg-pink-500/50 text-pink-800" },
    ],
    description:
      "Collection of educational tools and utilities for students and teachers. Interactive learning resources and study aids.",
    colorClass: "bg-gradient-to-br from-pink-500 to-red-600",
    Icon: Briefcase, // Placeholder Icon
    githubLink: "https://github.com/priyesranjan/edutools",
  },
  {
    title: "DialogFlow Chatbot",
    subtitle: "Conversational AI Assistant",
    tags: [
      { label: "DialogFlow", bg: "bg-blue-500/50 text-blue-800" },
      { label: "NLP", bg: "bg-blue-500/50 text-blue-800" },
    ],
    description:
      "Intelligent chatbot using Google's DialogFlow ES for natural language processing and automated customer support.",
    colorClass: "bg-gradient-to-br from-blue-400 to-cyan-500",
    Icon: MessageCircle, // Placeholder Icon
    githubLink: "https://github.com/priyesranjan/chatbot",
  },
];

// --- 2. Card Component ---
const ProjectCardd = ({ project }) => {
  const IconComponent = project.Icon;

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-shadow hover:shadow-xl hover:scale-105 transition-transform all duration-300 ease-in-out">
      <div
        className={`p-6 pt-10 flex flex-col items-center justify-center ${project.colorClass} relative min-h-[140px]`}
      >
        <div className="absolute top-0 right-0 w-full h-full opacity-10" />

        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 shadow-xl mb-4">
          <IconComponent className="w-8 h-8 text-gray-700" />
        </div>

        <h3 className="text-xl font-bold text-white text-center">
          {project.title}
        </h3>
        <p className="text-sm text-white/80 text-center">{project.subtitle}</p>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-0.5 text-xs font-medium rounded-full ${tag.bg} text-white `}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow mb-4">
          {project.description}
        </p>

        {/* Button (Always at the bottom) */}
        <a
          href={project.githubLink}
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // Security best practice
          className={`mt-auto w-full py-2 rounded-lg font-semibold text-white transition-all duration-200 
            flex items-center justify-center hover:scale-105 transition-transform all duration-300 ease-in-out hover:bg-slate-900
            ${project.colorClass
              .replace("to-", "hover:to-")
              .replace("from-", "hover:from-")} 
            shadow-md hover:shadow-lg`}
          style={{
            background: project.colorClass.split("to-")[1]
              ? project.colorClass.split("to-")[1]
              : project.colorClass.split("from-")[1],
          }}
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
};

const COLORS = {
  "primary-green": "#38a169",
  "primary-blue": "#667eea",
};

const ProjectCard = ({
  category = "Educational Platform",
  projectTitle = "Devskillquest",
  description = "An interactive learning platform designed for aspiring developers to master coding skills through hands-on projects, code...",
  techStack = ["Next.js", "TypeScript", "PostgreSQL"],
  button1Text = "Website",
  button1Icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 0 4 10 15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0-4-10 15.3 15.3 0 0 0 4-10zM2.5 7h19M2.5 17h19" />
    </svg>
  ),
  button1Color = "bg-blue-500 hover:bg-blue-600",
  button1Link = "https://theweddingschapter.com/",
  graphicColor = "bg-purple-600/10 border-purple-600/20",
  // Example Icon SVG (Can be replaced with a different Lucide-React or custom SVG)
  iconSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-24 text-purple-600"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h17a1 1 0 0 1 1 1v14zM2 8h20M7 3v2M7 21v-2M18 3v2M18 21v-2" />
    </svg>
  ),
}) => {
  const CardButton = ({ text, icon, colorClasses, link }) => (
    <a
      href={link}
      className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 text-white font-medium rounded-lg ${colorClasses} focus:outline-none focus:ring-4 transition duration-150 shadow-md hover:shadow-lg`}
    >
      {icon}
      <span>{text}</span>
    </a>
  );

  return (
    <div
      // Main Card Container
      className="w-full max-w-sm bg-white rounded-xl shadow-xl transform hover:scale-[1.02] transition duration-300"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Image/Graphic Section */}
      <div className="h-48 bg-gray-100 flex justify-center items-center p-6 relative">
        {/* Inner Graphic Container (The colored circle) */}
        <div
          className={`w-40 h-40 rounded-full ${graphicColor} flex justify-center items-center shadow-lg`}
        >
          {iconSvg}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6">
        {/* Category Tag (Chip) */}
        <span className="inline-flex items-center px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full mb-4">
          {category}
        </span>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {projectTitle}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons (Using the single button prop for Devskillquest) */}
        <div className="flex flex-col sm:flex-row gap-4">
          <CardButton
            text={button1Text}
            icon={button1Icon}
            colorClasses={button1Color}
            link={button1Link}
          />
        </div>
      </div>
    </div>
  );
};

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
  // Data for the first card ("BEU Mate")
  const beuMateProps = {
    category: "AI-Powered Educational Platform",
    projectTitle: "BEU Mate - Bihar Engineering",
    description:
      "An AI-powered study companion for B.Tech students offering personalized learning, career guidance, and placement preparation.",
    techStack: ["React Native", "Node.js", "AI/ML"],
    button1Text: "Play Store",
    button1Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    ),
    button1Color: "bg-primary-green hover:bg-green-700 focus:ring-green-500/50",
    button1Link:
      "https://play.google.com/store/apps/details?id=com.priyesranjan.beumate",
    graphicColor: "bg-blue-600/10 border-blue-600/20",
    iconSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-24 h-24 text-blue-600"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2L1 7v10l11 5 11-5V7L12 2zm1 14.93L6.83 14 13 11.07V16.93zm0-3.15L6.83 10.85 13 7.92v5.86zM22 7.66l-10 4.74v5.86l10-4.74V7.66z" />
        <path d="M14 12.83l-2.07-.98-6.1-2.89L12 6.81l6.1 2.89 2.07.98-6.1 2.89z" />
        <path d="M12 4.19L2 9v8l10 5 10-5V9l-10-4.81zm0 13.75L2 14v-4l10 5 10-5v4l-10 4.94z" />
      </svg>
    ),
  };

  // Data for the second card ("Devskillquest") - using defaults for the website button
  const devskillquestProps = {
    category: "Educational Platform",
    projectTitle: "Devskillquest",
    description:
      "An interactive learning platform designed for aspiring developers to master coding skills through hands-on projects, coding challenges, and personalized learning paths. Focuses on full-stack development and cloud technologies.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL"],
    button1Text: "Website",
    button1Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    ),
    button1Color: "bg-blue-500 hover:bg-blue-600",
    button1Link: "https://devskillquest.com/",
    graphicColor: "bg-purple-600/10 border-purple-600/20",
    iconSvg: (
      // Custom SVG for Devskillquest - representing code/development
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-24 h-24 text-purple-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="4" y1="12" x2="20" y2="12" />
      </svg>
    ),
  };

  return (
    <>
      <section className="relative w-full h-screen flex items-center justify-center z-0 md:pt-0 pt-10">
        <div className="absolute inset-0 z-30 items-center justify-center sm:flex hidden ">
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

        <div className="relative z-10 text-white text-center md:mt-20 mt-4 ">
          <span className="font-bold text-5xl p-2">
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
          <span className="text-sm font-md p-1 text-slate-300 md:mb-4">
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
          <div className="md:mb-12 mb-6 md:text-sm text-[12px] p-2">
            <span className=" bg-blue-500 md:py-3 py-2 md:px-4 px-2 rounded-full md:mb-8 mb-6">
              Complete IT Solution Provider Since 2025
            </span>
          </div>
          <div className="buttons md:text-md text-sm">
            <Link to="/services">
              <button
                className="bg-blue-400 py-3 md:px-4 px-3 md:m-2 m-1 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-gradient-to-br"
                id="Explore"
              >
                Explore Our Services
              </button>
            </Link>
            <Link to="/contact">
              <button
                className="bg-blue-400 py-3  md:px-4 px-3 md:m-2 m-1 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-gradient-to-br "
                id="Explore"
              >
                Get Free Consultation
              </button>
            </Link>
          </div>
          <div className="flex gap-3 mt-4 px-2">
            <div className="bg-slate-700 flex items-center justify-center py-1 px-4 rounded-md gap-0.5  relative mt-4 md:text-sm text-[12px]">
              <Check />
              100% Client Satisfaction
            </div>
            <div className="bg-slate-700 flex items-center justify-center py-1 px-4 rounded-md gap-0.5  relative mt-4 md:text-sm text-[12px]">
              <Shield />
              Secure & Scalable
            </div>
            <div className="bg-slate-700 flex items-center justify-center py-1 px-4 rounded-md gap-0.5  relative mt-4 md:text-sm text-[12px]">
              <Clock />
              24/7 Support
            </div>
          </div>
          <div className=" mt-10 flex items-center justify-center">
            <svg
              className="md:size-12 size-10 text-blue-600 animate-bounce"
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
        <div className="text-center md:m-12 m-10 text-white">
          <span className="font-bold text-5xl">
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
        <div className="flex md:flex-row flex-col gap-8 mx-auto w-[80%] items-center justify-center">
          <div className="border bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out hover:scale-105 flex items-center flex-col">
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
          <div className="border bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out hover:scale-105 flex items-center flex-col">
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
          <div className="border bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out hover:scale-105 flex items-center flex-col">
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
        <div className="flex md:flex-row flex-col gap-8 mx-auto w-[80%] items-center justify-center">
          <div className="border bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out hover:scale-105 flex items-center flex-col">
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
          <div className="border bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out hover:scale-105 flex items-center flex-col">
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
          <div className="border bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out hover:scale-105 flex items-center flex-col">
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
      <div className="Why-choose text-white">
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
        <div className=" md:w-1/2 rounded-xl md:p-10 p-2 flex-flex-col md:m-4 m-0 w-full bg-gray-800 shadow-2xl transition-transform all duration-300 ease-in-out hover:scale-105 ">
          <label htmlFor="AppDost " className="">
            <div className="text-center flex flex-col items-center  ">
              <div className="font-bold md:text-4xl text-2xl w-full  ">
                👥 Work Culture & Values
              </div>
              <p className="md:text-md text-sm">At AppDost, we believe in:</p>
            </div>
          </label>
          <ul className="mt-10 md:text-md text-sm p-2">
            <li className="my-2.5 px-4 py-3 border-b-[1px] hover:transition-transform all duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 hover:cursor-pointer">
              🎯<span className="font-bold">Innovation First</span> -
              Encouraging creative problem-solving
            </li>
            <li className="my-2.5 px-4 py-3  border-b-[1px] hover:transition-transform all duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 hover:cursor-pointer">
              🤝<span className="font-bold"> Collaborative Environment</span> -
              Cross-functional teamwork
            </li>
            <li className="my-2.5 px-4 py-3 border-b-[1px] hover:transition-transform all duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 hover:cursor-pointer">
              📚<span className="font-bold">Continuous Learning</span> - Regular
              training & workshops
            </li>
            <li className="my-2.5 px-4 py-3  border-b-[1px] hover:transition-transform all duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 hover:cursor-pointer">
              🌱<span className="font-bold">Growth Mindset</span> - Diverse
              projects & new technologies
            </li>
            <li className="my-2.5 px-4 py-3  border-b-[1px] hover:transition-transform all duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 hover:cursor-pointer">
              ⚖️<span className="font-bold">Work-Life Balance</span> - Flexible
              arrangements
            </li>
            <li className="my-2.5 px-4 py-3 border-b-[1px] hover:transition-transform all duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 hover:cursor-pointer">
              🏆<span className="font-bold">Recognition & Rewards</span> -
              Celebrating achievements
            </li>
          </ul>
        </div>
        {/* Right */}
        <div className="md:w-1/2 w-full rounded-xl p-6 flex-flex-col md:m-4 m-0 bg-gray-800 shadow-2xl transition-transform all duration-300 ease-in-out hover:scale-105">
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
              <button className="md:p-4 p-3 relative  w-full m-2 rounded-xl font-semibold bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl transition-transform all duration-300 ease-in-out hover:scale-105 items-center">
                Join Our Team{" "}
              </button>
            </Link>
            <Link to="/contact">
              <button className="md:p-4 p-3 w-full m-2 rounded-xl font-semibold bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl transition-transform all duration-300 ease-in-out hover:scale-105">
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
        <div className="flex md:flex-row flex-col gap-8 mx-auto w-[80%] items-center">
          <div className="border bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out w-[90%] hover:scale-105 items-center flex flex-col">
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
          <div className="border bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out w-[90%] hover:scale-105 items-center flex flex-col">
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
          <div className="border bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out w-[90%] hover:scale-105 items-center flex flex-col">
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
        <div className="flex md:flex-row flex-col gap-8 mx-auto w-[80%] items-center">
          <div className="border bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out w-[90%] hover:scale-105 items-center flex flex-col">
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
          <div className="border bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out w-[90%] hover:scale-105 items-center flex flex-col">
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
          <div className="border bg-slate-700 border-slate-600 rounded-xl p-8 hover:bg-slate-600 transition-transform all duration-300 ease-in-out w-[90%] hover:scale-105 items-center flex flex-col">
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

      <div className=" Dev-Process text-white flex flex-col items-center mx-auto">
        <div className="text-center ">
          <label htmlFor="Services">
            <span className="text-white text-4xl font-bold mb-10 mt-16 border-b-4 border-blue-500 mx-8 ">
              Our Development Process
            </span>
          </label>
          <p className="my-8 text-white text-xl mx-8">
            A proven methodology that ensures quality, efficiency, and client
            satisfaction
          </p>
        </div>
        <div className="flex flex-col justify-center mb-8 mx-8">
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
      <div className=" w-[90%] mx-auto border border-slate-600 m-8"></div>
      <div className="Featured-Products mx-auto flex flex-col justify-center">
        <div className="text-center ">
          <label htmlFor="Projects">
            <span className="text-white text-4xl font-bold mb-10 mt-16 border-b-4 border-blue-500 mx-8">
              Our Featured Projects
            </span>
          </label>
          <p className="my-8 text-white text-xl mx-8">
            Real solutions for real businesses - explore our successful projects
          </p>
        </div>
        <div className="p-4 md:p-10 bg-slate-900 mx-auto px-10 w-[90%] rounded-2xl flex justify-center">
          <style
            dangerouslySetInnerHTML={{
              __html: `
            /* Inject custom colors for demonstration */
            .bg-primary-green { background-color: ${COLORS["primary-green"]}; }
            .hover\\:bg-green-700:hover { background-color: #2f855a; }
            .focus\\:ring-green-500\\/50:focus { --tw-ring-color: #48bb78; }
            .bg-primary-blue { background-color: ${COLORS["primary-blue"]}; }
            .hover\\:bg-indigo-600:hover { background-color: #5a67d8; }
            .focus\\:ring-indigo-500\\/50:focus { --tw-ring-color: #667eea; }
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        `,
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {/* Usage of the BEU Mate card */}
            <ProjectCard {...beuMateProps} />

            {/* Usage of the Devskillquest card */}
            <ProjectCard {...devskillquestProps} />

            <ProjectCard
              category="Wedding Planning Portal"
              projectTitle="The Weddings Chapter"
              description="A premium wedding planning platform connecting couples with top vendors, venues, and services. Features vendor management and client-side scheduling."
              techStack={["PHP", "Laravel", "MySQL"]}
              graphicColor="bg-red-700/10 border-red-700/20"
              iconSvg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-24 h-24 text-red-700"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4-9h-3V7c0-.55-.45-1-1-1s-1 .45-1 1v4H8c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1z" />
                </svg>
              }
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Link to='/portfolio'><button className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl px-4 py-3 text-white font-semibold rounded-full transition-transform all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer">
            View All Projects
          </button></Link>
        </div>
      </div>
      <div className=" w-[90%] mx-auto border border-slate-600 m-8"></div>
      <div className="Innovation-Projects">
        <div className=" text-center ">
          <label htmlFor="Projects">
            <span className="text-white text-4xl font-bold mb-10 mt-16 border-b-4 border-blue-500 mx-8 text-center">
              Open Source & Innovation Projects
            </span>
          </label>
          <p className="my-8 text-white text-xl mx-8">
            Explore our contributions to AI, automation, and educational
            technology
          </p>
        </div>
        <div className=" bg-gray-100 dark:bg-gray-900 sm:p-12">
          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.3333%-2rem)] mx-4"
              >
                <ProjectCardd project={project} />
              </div>
            ))}
          </div>
        </div>
          <div className="mx-auto text-white flex flex-col items-center gap-4">
          <p className="m-8">Interested in working with us on your next project?</p>
          <Link to='/portfolio'><button className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl px-4 py-3 text-white font-semibold rounded-full transition-transform all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer">
            Start Your Project
          </button></Link>
        </div>
        
      </div>
      <div className=" w-[90%] mx-auto border border-slate-600 m-8"></div>
      <div className="Tech-we-master">
        <div className="text-center ">
          <label htmlFor="Projects">
            <span className="text-white text-4xl font-bold mb-10 mt-16 border-b-4 border-blue-500 mx-8">
              Technologies We Master
            </span>
          </label>
          <p className="my-8 text-white text-xl mx-8">
            We leverage cutting-edge technologies to build robust, scalable, and innovative solutions
          </p>
        </div>
        <div className=" flex mx-auto w-[80%] justify-around flex-wrap">
          <div className="React border p-8 w-32 rounded-2xl text-center bg-white hover:scale-105 transition-transform all duration-300 ease-in-out hover:cursor-pointer hover:translate-1 m-4">
            <span className="text-4xl "><img className="" src="/atom.png" alt="" /></span><br />
            <p className="font-semibold">React</p>
          </div>
          <div className="React border p-8 w-32 rounded-2xl text-center bg-white hover:scale-105 transition-transform all duration-300 ease-in-out hover:cursor-pointer hover:translate-1 m-4">
            <span className="text-4xl "><img src="/node-js.png" alt="" /></span><br />
            <p className=" font-semibold">Node.js</p>
          </div>
          <div className="React border p-8 w-32 rounded-2xl text-center bg-white hover:scale-105 transition-transform all duration-300 ease-in-out hover:cursor-pointer hover:translate-1 m-4">
            <span className="text-4xl "><img src="/python.png" alt="" /></span><br />
            <p className=" font-semibold">Python</p>
          </div>
          <div className="React border p-8 w-32 rounded-2xl text-center bg-white hover:scale-105 transition-transform all duration-300 ease-in-out hover:cursor-pointer hover:translate-1 m-4">
            <span className="text-4xl "><img src="/leaf.png" alt="" /></span><br />
            <p className=" font-semibold">MongoDB</p>
          </div>
          <div className="React border p-8 w-32 rounded-2xl text-center bg-white hover:scale-105 transition-transform all duration-300 ease-in-out hover:cursor-pointer hover:translate-1 m-4">
            <span className="text-4xl "><img src="/cloud-service.png" alt="" /></span><br />
            <p className="mt-6 font-semibold">AWS</p>
          </div>
          <div className="React border p-8 w-32 rounded-2xl text-center bg-white hover:scale-105 transition-transform all duration-300 ease-in-out hover:cursor-pointer hover:translate-1 m-4">
            <span className="text-4xl "><img src="/social.png" alt="" /></span><br />
            <p className=" font-semibold">Docker</p>
          </div>
          <div className="React border p-8 w-32 rounded-2xl text-center bg-white hover:scale-105 transition-transform all duration-300 ease-in-out hover:cursor-pointer hover:translate-1 m-4">
            <span className="text-4xl "><img src="/script.png" alt="" /></span><br />
            <p className=" font-semibold">Kotlin</p>
          </div>
          <div className="React border p-8 w-32 rounded-2xl text-center bg-white hover:scale-105 transition-transform all duration-300 ease-in-out hover:cursor-pointer hover:translate-1 m-4">
            <span className="text-4xl "><img src="/typescript.png" alt="" /></span><br />
            <p className=" font-semibold">Typescript</p>
          </div>
        </div>
        
        
      </div>
      <div className=" w-[90%] mx-auto border border-slate-600 m-8"></div>
      <div className="latest updates">
        <Link to='/blog'><div className=" bg-white dark:bg-gray-900 pb-16 px-4 flex flex-col items-center font-sans">
      
      {/* Header Section */}
      <div className="max-w-3xl text-center mb-12">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-300 mx-8">
          Latest Updates
        </span>
        <h2 className="text-4xl mx-8 sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Insights & <span className="text-purple-600 dark:text-purple-400">Tech Articles</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mx-8">
          Stay informed with our latest insights, tech trends, and industry expertise
        </p>
      </div>

      <FeaturedArticleCard />

      </div></Link>
      <div className="flex justify-center"><Link to='/blog'><button className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl px-4 py-3 text-white font-semibold rounded-full transition-transform all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer">
            View All Articles
          </button></Link></div>
      </div>
      <div className="flex justify-center items-center py-20 px-4 sm:px-6 lg:px-8 min-h-[400px]">
      
      <div 
        className="w-full max-w-4xl p-10 sm:p-14 rounded-3xl text-center shadow-2xl relative"
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
          Ready to Start Your Project?
        </h2>
        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto z-10 relative">
          Let's discuss how we can help transform your ideas into reality with cutting-edge technology and expert development.
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
    </>
  
  );
};

export default Home;
