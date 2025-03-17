import React from "react";
import {
  FaDumbbell,
  FaCertificate,
  FaVideo,
  FaShoppingCart,
  FaTshirt,
  FaStar,
  FaUtensils,
  FaServer,
} from "react-icons/fa";

const projects = [
  { name: "Fitness App", icon: <FaDumbbell />, link: "https://github.com/AshishS2407/Fitness-App", hoverColor: "hover:text-red-500" },
  { name: "Certificate D-App", icon: <FaCertificate />, link: "https://github.com/AshishS2407/certi-Dapp", hoverColor: "hover:text-blue-400" },
  { name: "Netflix Clone D-App", icon: <FaVideo />, link: "https://github.com/AshishS2407/Netflix-Clone-Dapp", hoverColor: "hover:text-purple-400" },
  { name: "NFT Market Place", icon: <FaShoppingCart />, link: "https://github.com/AshishS2407/NFT_Market_Place", hoverColor: "hover:text-green-400" },
  { name: "Fashion Supply Chain", icon: <FaTshirt />, link: "https://github.com/AshishS2407/Fashion-Supply-chain", hoverColor: "hover:text-yellow-400" },
  { name: "Review Arena", icon: <FaStar />, link: "https://github.com/AshishS2407/Review-Arena", hoverColor: "hover:text-orange-400" },
  { name: "Menu App", icon: <FaUtensils />, link: "https://github.com/AshishS2407/Food-and-Drinks-Menu-App", hoverColor: "hover:text-teal-400" },
  { name: "Asset Management", icon: <FaServer />, link: "https://github.com/AshishS2407/Simplyfi-Task", hoverColor: "hover:text-gray-400" },
];

const MyWorks = () => {
  return (
    <section 
      id="projects" 
      className="relative flex flex-col items-center justify-center min-h-screen p-16 
      bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl text-center space-y-12">
        
        {/* Title */}
        <h3 className="font-extrabold text-5xl text-white tracking-wide transition duration-500 hover:text-red-500">
          My Works
        </h3>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-xl shadow-lg 
              transform transition-transform duration-500 hover:scale-105 hover:shadow-red-600/50
                        backdrop-blur-xl border border-gray-700"
            >
              {/* Icon with Hover Effect */}
              <div className={`text-5xl text-gray-300 mb-3 transition-all duration-300 ${project.hoverColor}`}>
                {project.icon}
              </div>

              {/* Project Name */}
              <h3 className="text-white font-semibold text-lg">{project.name}</h3>

              {/* GitHub Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-5 py-2 bg-white text-gray-900 font-bold rounded-lg 
                hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>

        {/* Animated Divider */}
        <div className="w-36 h-1 bg-red-500 rounded-lg animate-pulse"></div>
      </div>
    </section>
  );
};

export default MyWorks;
