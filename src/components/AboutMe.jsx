import React from "react";
import snap1 from "../assets/Images/mypic.jpg";
import { FaReact, FaNodeJs, FaEthereum, FaDocker, FaJs, FaHtml5, FaCss3, FaGithub } from "react-icons/fa";
import { SiMongodb, SiSolidity, SiTailwindcss, SiExpress } from "react-icons/si";

const AboutMe = () => {
  return (
    <section 
      id="about" 
      className="relative flex flex-col items-center justify-center min-h-screen p-16 
      bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-5xl text-center space-y-12">
        
        {/* Title */}
        <h3 className="font-extrabold text-5xl text-white tracking-wide transition duration-500 hover:text-red-500">
          About Me
        </h3>

        {/* Introduction Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          
          {/* Text Section */}
          <div className="md:w-1/2 text-left space-y-6">
          <p className="text-lg font-medium leading-relaxed text-gray-300">
  Transitioning from <span className="text-red-500">civil engineering</span> to the tech industry,  
  I have developed strong expertise in <span className="text-red-500">full-stack development</span> using the MERN stack,  
  along with experience in <span className="text-red-500">blockchain application development</span>.  
  My skill set includes JavaScript, React, Node.js, MongoDB, and Solidity, enabling me to build both  
  traditional web applications and decentralized solutions.
</p>
<p className="text-lg font-medium leading-relaxed text-gray-300">
   I have worked on various projects,  
  including <span className="text-red-500">web platforms</span> and <span className="text-red-500">DApps</span>.  
  These projects have enhanced my ability to work with databases, authentication systems, and smart contracts.
</p>
<p className="text-lg font-medium leading-relaxed text-gray-300">
  I continuously explore advancements in modern web development,  
  ensuring that I stay adaptable in the evolving tech landscape. Whether building  
  <span className="text-red-500">dynamic web applications</span> or integrating <span className="text-red-500">blockchain features</span>
</p>


          </div>

        {/* Image Section */}
<div className="relative md:w-1/2 flex justify-center">
  <div className="relative group w-full max-w-[500px] py-10">
    <img
      src={snap1}
      className="rounded-lg shadow-2xl w-full h-auto object-cover 
      transition-all duration-500 ease-in-out transform group-hover:scale-105 group-hover:rotate-3"
      alt="Ashish S"
    />
  </div>
</div>


        </div>

        {/* Animated Divider */}
        <div className="w-36 h-1 bg-red-500 rounded-lg animate-pulse"></div>

        {/* Tech Stack Section */}
        <div className="text-center">
          <h4 className="text-3xl font-semibold text-white mb-6">Tech Stack</h4>
          <div className="flex justify-center gap-6 text-5xl text-gray-300">
            <FaReact className="hover:text-blue-500 transition-all duration-300" />
            <FaNodeJs className="hover:text-green-500 transition-all duration-300" />
            <SiMongodb className="hover:text-green-400 transition-all duration-300" />
            <SiSolidity className="hover:text-gray-400 transition-all duration-300" />
            <FaEthereum className="hover:text-blue-400 transition-all duration-300" />
            <FaDocker className="hover:text-blue-300 transition-all duration-300" />
            <SiTailwindcss className="hover:text-teal-400 transition-all duration-300" />
            <FaJs className="hover:text-yellow-400 transition-all duration-300" />
            <FaGithub className="hover:text-gray-200 transition-all duration-300" />
            <FaHtml5 className="hover:text-orange-500 transition-all duration-300" />
            <FaCss3 className="hover:text-blue-500 transition-all duration-300" />
            <SiExpress className="hover:text-red-500 transition-all duration-300" />
          </div>
        </div>

      </div>
    </section>

    
  );
};

export default AboutMe;
