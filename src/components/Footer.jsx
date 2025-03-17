import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 text-lg font-semibold">
      &copy; {new Date().getFullYear()} All Rights Reserved
    </footer>
  );
};

export default Footer;
