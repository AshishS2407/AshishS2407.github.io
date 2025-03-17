import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, 
  FaGit, FaGithub, FaDocker, FaEthereum 
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiSolidity } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Git", icon: <FaGit className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Solidity", icon: <SiSolidity className="text-gray-300" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
  { name: "Ethereum", icon: <FaEthereum className="text-gray-400" /> },
];

const Skills = () => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 200; 
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="skills" className="text-center bg-gray-900 py-20 relative">
      <h3 className="font-extrabold text-4xl text-white mb-8">My Skills</h3>

      <div className="flex items-center justify-center relative">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white shadow-lg"
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Skills List */}
        <div
          ref={containerRef}
          className="flex space-x-6 overflow-hidden w-[90%] mx-auto px-4"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-800 p-4 w-36 h-48 rounded-2xl shadow-xl 
              transition-all cursor-pointer hover:bg-gray-700 group"
            >
              {/* Icon */}
              <div className="w-20 h-20 flex items-center justify-center text-5xl transition duration-300">
                {skill.icon}
              </div>
              
              {/* Skill Name (Hidden until Hover) */}
              <p className="text-gray-300 text-lg font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-10 bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white shadow-lg"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Skills;
