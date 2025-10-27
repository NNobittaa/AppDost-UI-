import React from 'react';
import { Users, TrendingUp, Lightbulb, Scale, Trophy, GraduationCap } from 'lucide-react';

const features = [
  {
    title: "Expert Team",
    icon: Users,
    description: "Work alongside 20+ talented developers who are passionate about technology and innovation.",
    color: "text-purple-400",
  },
  {
    title: "Career Growth",
    icon: TrendingUp,
    description: "Continuous learning opportunities, skill development programs, and clear career progression paths.",
    color: "text-blue-400",
  },
  {
    title: "Innovative Projects",
    icon: Lightbulb,
    description: "Work on cutting-edge projects using the latest technologies and industry best practices.",
    color: "text-yellow-400",
  },
  {
    title: "Work-Life Balance",
    icon: Scale,
    description: "Flexible working hours, remote work options, and a supportive work environment.",
    color: "text-red-400",
  },
  {
    title: "Recognition",
    icon: Trophy,
    description: "Performance-based rewards, employee recognition programs, and competitive compensation.",
    color: "text-amber-400",
  },
  {
    title: "Learning Culture",
    icon: GraduationCap,
    description: "Regular training sessions, workshops, certifications, and conference sponsorships.",
    color: "text-emerald-400",
  },
];

const FeatureCard = ({ title, icon: Icon, description, color }) => {
  return (
    <div
      className="
        bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700
        hover:shadow-2xl hover:border-blue-500 transition-all duration-300
        transform hover:-translate-y-1 group
        flex flex-col items-start text-left
      "
    >
      <div className={`p-3 rounded-full bg-gray-700/50 ${color} mb-4 transition-all duration-300 group-hover:bg-gray-700 group-hover:shadow-blue-500/50 group-hover:shadow-xl`}>
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-base leading-relaxed">{description}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-10 ">

      <div className="max-w-3xl text-center mb-16 mt-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Why Work{" "}<span className="text-purple-600 dark:text-purple-400">With Us?</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Stay informed with our latest insights, tech trends, and industry expertise
        </p>
      </div>

      {/* Feature Grid Container */}
      <main className="w-full max-w-6xl">
        <div className="
          grid gap-8 
          sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        ">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              icon={feature.icon}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
      </main>
      <div className=" w-[90%] mx-auto border border-slate-600 m-8"></div>
      
    </div>
  );
};

export default App;
