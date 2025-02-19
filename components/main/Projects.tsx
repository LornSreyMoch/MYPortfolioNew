"use client";
import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  // All project data
  const items = [
    { id: 1, src: "/bikay.png", title: "Short URL", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, src: "/pos.png", title: "Point of Sale", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 3, src: "/portfo.png", title: "Portfolio Website", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 4, src: "/buynow.png", title: "Buy Now", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 5, src: "/culator.png", title: "Calculator", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 6, src: "/portfo.png", title: "New Project 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 7, src: "/portfo.png", title: "New Project 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 8, src: "/portfo.png", title: "New Project 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 3, src: "/portfo.png", title: "Portfolio Website", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  const handleToggle = () => setShowMore(prevState => !prevState);

  const diplayItems = showMore ? items : items.slice(0, 3); // Updated to show 3 projects initially

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3 h-full py-20 z-[50] relative" id="projects"> {/* Increased z-index to 50 */}
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-blue bg-opacity-50"></div>

      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 relative z-10">
        My Projects
      </h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 transition-all duration-500 relative z-10">
        {diplayItems.map((item) => (
          <ProjectCard
            key={item.id}
            src={item.src}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      {/* Show More / Show Less Button */}
      <button
        onClick={handleToggle}
        className="mt-8 py-2 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer relative z-10"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Projects;
