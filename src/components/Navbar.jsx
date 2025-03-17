import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold">Ashish S</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white">
          {[
            { name: "Home", link: "#home" },
            { name: "About", link: "#about" },
            { name: "Academics", link: "#academics" },
            { name: "Certificates", link: "#certificates" },
          ].map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="relative text-lg font-medium transition-all duration-300 hover:text-red-500 
                after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-red-500 
                after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
