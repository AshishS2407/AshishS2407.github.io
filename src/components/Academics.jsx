import React from "react";

const Academics = () => {
  const achievements = [
    {
      id: 1,
      title: "10th Grade",
      description:
        "I achieved an 8.6 out of 10 in my CBSE 10th grade exams at Sree Sabari Central, reflecting my dedication and proficiency in learning.",
    },
    {
      id: 2,
      title: "12th Grade",
      description:
        "I scored 77% in my +2 exams from VVHSS Thamarakulam under the Kerala State Board, showcasing my ability to excel in academics.",
    },
    {
      id: 3,
      title: "B.Tech (Civil)",
      description:
        "I graduated with a CGPA of 7.6 in Civil Engineering from Mahaaguru Institute of Technology, showcasing my technical proficiency and dedication.",
    },
  ];

  return (
    <div id="academics" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex flex-col items-center justify-center text-white p-8">

      {/* Page Heading */}
      <h1 className="text-5xl font-extrabold text-center shadow-lg tracking-wide mb-12               transition duration-500 hover:text-red-500">
        Academics
      </h1>

      {/* Academic Achievements Section */}
      <div className="w-full max-w-5xl space-y-10">
        {/* Academic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="relative bg-gray-800 bg-opacity-90 p-6 rounded-2xl shadow-xl text-center
                         transform transition-transform duration-500 hover:scale-105 hover:shadow-red-500/50
                         backdrop-blur-xl border border-gray-700"
            >
              <h3 className="text-2xl font-extrabold text-red-500">{item.title}</h3>
              <p className="mt-4 text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>

        {/* PG Diploma in Blockchain Section */}
        <div className="relative bg-gray-800 bg-opacity-90 p-6 rounded-2xl shadow-xl text-center
                        transform transition-transform duration-500 hover:scale-105 hover:shadow-red-500/50
                        backdrop-blur-xl border border-gray-700"
        >
          <h3 className="text-3xl font-extrabold text-red-500">PG Diploma in Blockchain</h3>
          <p className="mt-4 text-gray-300 text-lg">
            I successfully completed a Postgraduate Diploma in Blockchain Technology, covering MERN Stack, Ethereum, and Hyperledger Fabric. This course equipped me with the skills to build decentralized applications, smart contracts, and enterprise blockchain solutions.
          </p>
        </div>

        {/* Animated Divider */}
        <div className="w-36 h-1 bg-red-500 rounded-lg animate-pulse"></div>
      </div>
    </div>
  );
};

export default Academics;
