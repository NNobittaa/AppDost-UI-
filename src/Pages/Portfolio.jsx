import React from "react";

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
      className="w-full max-w-sm bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300"
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

const Portfolio = () => {
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
    <div className="w-full flex items-center justify-center z-0 pt-30  ">
      <div className=" bg-white dark:bg-gray-900 pb-16 px-4 flex flex-col items-center font-sans ">
        <div className="max-w-3xl text-center ">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Our{" "}
            <span className="text-purple-600 dark:text-purple-400">
              Portfolio
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Real projects. Real results. See how we've helped businesses <br />{" "}
            transform their digital presence.
          </p>
        </div>
        <div className="mx-auto flex flex-col justify-center">
          <div className="p-4 md:p-10 bg-slate-900 mx-auto px-10 w-[90%] rounded-2xl">
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
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
