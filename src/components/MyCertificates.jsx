import React, { useState } from "react";
import certImage from "../assets/Images/bf.png";
import cert from "../assets/Images/deb-1.png";
import cba from "../assets/Images/cba.jpg";
import ef from "../assets/Images/ef.jpg";
import chf from "../assets/Images/chf.jpg";

const certificates = [
  {
    name: "Blockchain Foundation Program",
    image: certImage,
  },
  {
    name: "Developer Essentials for Blockchain",
    image: cert,
  },
  {
    name: "Ethereum Fundamentals Program",
    image: ef,
  },
  {
    name: "Certified Blockchain Associate",
    image: cba,
  },
  {
    name: "Certified Hyperledger Fabric Developer",
    image: chf,
  },
];

const MyCertificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="certificates"
      className="relative flex flex-col items-center justify-center min-h-screen p-16 
      bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl text-center space-y-12">
        {/* Title */}
        <h3 className="font-extrabold text-5xl text-white tracking-wide transition duration-500 hover:text-red-500">
          My Certificates
        </h3>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="relative bg-gray-800 bg-opacity-90 p-4 rounded-xl shadow-lg text-center
                        transform transition-transform duration-500 hover:scale-105 hover:shadow-red-500/50
                        backdrop-blur-xl border border-gray-700"
            >
              {/* Certificate Image (Small Preview) */}
              <div className="h-40 w-60 overflow-hidden rounded-lg mx-auto">
                <img
                  src={cert.image}
                  className="h-full w-full object-contain"
                  alt={cert.name}
                />
              </div>

              {/* Certificate Name */}
              <h3 className="text-white font-semibold text-lg mt-3">
                {cert.name}
              </h3>

              {/* View Certificate Button (Styled) */}
              <button
                onClick={() => setSelectedCert(cert)}
                className="mt-3 px-5 py-2 bg-white text-gray-900 font-bold rounded-lg 
                hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                View Certificate
              </button>
            </div>
          ))}
        </div>

        {/* Animated Divider */}
        <div className="w-36 h-1 bg-red-500 rounded-lg animate-pulse"></div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 p-4">
          <div className="relative w-full max-w-5xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-white text-3xl hover:text-red-500"
            >
              ✖
            </button>

            {/* Large Certificate Image */}
            <div className="flex justify-center">
              <img
                src={selectedCert.image}
                className="w-auto max-h-screen object-contain"
                alt={selectedCert.name}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyCertificates;
