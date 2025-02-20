"use client";
import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  // All project data
  const items = [
    { id: 1, src: "/bikay.png", title: "Short URL", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", demoLink: "https://link-shorten-two.vercel.app/api/short/91f6c83d" },
    { id: 2, src: "/pos.png", title: "Point of Sale", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", demoLink: "https://shorturl.demo" },
    { id: 3, src: "/portfo.png", title: "Portfolio Website", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", demoLink: "https://http://localhost:3000" },
    { id: 4, src: "/buynow.png", title: "Buy Now", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", demoLink: "https://buynow-pied.vercel.app/" },
    { id: 5, src: "/culator.png", title: "Calculator", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", demoLink: "https://online-calculator-indol.vercel.app/" },
    { id: 6, src: "/weather.png", title: "Weather", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", demoLink: "https://pp-weather-azure.vercel.app/" },
    { id: 7, src: "/portfo.png", title: "New Project 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", demoLink: "https://shorturl.demo" },
    { id: 8, src: "/portfo.png", title: "New Project 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", demoLink: "https://shorturl.demo" }
  ];

  const handleToggle = () => setShowMore((prevState) => !prevState);

  const displayItems = showMore ? items : items.slice(0, 3); // Shows 3 projects initially

  return (
    <div className="relative z-20 mt-8 py-2 px-6 text-white rounded-lg transition-all duration-300 hover:shadow-lg cursor-pointer">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-blue bg-opacity-50 z-0"></div>

      <motion.h2 
        className="relative z-20 text-2xl font-bold text-center mb-6"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          My Projects
        </span>
      </motion.h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 transition-all duration-500 relative z-20">
        {displayItems.map((item) => (
          <ProjectCard
            key={item.id}
            src={item.src}
            title={item.title}
            description={item.description}
            demoLink={item.demoLink}
          />
        ))}
      </div>

      {/* Show More / Show Less Button */}
      <button
        onClick={handleToggle}
        className="relative z-30 mt-8 py-2 px-6 bg-gradient-to-br from-blue-500 to-purple-600 hover:from-purple-500 hover:to-blue-600 transition-all text-white shadow-md font-medium rounded-lg duration-300 cursor-pointer mx-auto block"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Projects;
