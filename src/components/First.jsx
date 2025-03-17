import React from "react";

const First = () => {
  return (
    <section id= "home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white text-center px-6">
      <div className="space-y-6">
        <h4 className="text-4xl font-extrabold mt-12 animate-fadeIn">
          Hi, I am <span className="text-red-500">Ashish S</span>
        </h4>
        <p className="text-lg text-gray-300">Aspiring IT Professional</p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-red-600"
        >
          Explore Projects
        </a>
      </div>
    </section>
  );
};

export default First;
