import { FileText, Clock, ArrowRight,  } from 'lucide-react';
import React from 'react'

const FeaturedArticleCard = () => {
  return (
    <div className="w-full lg:w-[450px] shadow-xl rounded-2xl bg-white dark:bg-gray-800 transition-all hover:shadow-2xl overflow-hidden">
      {/* Top Graphical Section (Large color block with Icon)
        Uses a strong gradient similar to the image
      */}
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
const Blog = () => {
  return (
    <div className='w-full flex items-center justify-center z-0 pt-20  '>
      <div className=" bg-white dark:bg-gray-900 pb-16 px-4 flex flex-col items-center font-sans ">
      
      {/* Header Section */}
      <div className="max-w-3xl text-center mb-16 mt-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Our{" "}<span className="text-purple-600 dark:text-purple-400">Blog</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Stay informed with our latest insights, tech trends, and industry expertise
        </p>
      </div>

      <FeaturedArticleCard />

      </div>
    </div>
  )
}

export default Blog