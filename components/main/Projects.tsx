"use client";
import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  // All project data
  const items = [
    { id:1,src: "/bikay.png", title: "Short URL", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id:2,src: "/pos.png", title: "Point of Sale", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id:3,src: "/portfo.png", title: "Portfolio Website", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id:4,src: "/portfo.png", title: "New Project 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id:5,src: "/portfo.png", title: "New Project 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id:6,src: "/portfo.png", title: "New Project 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id:7,src: "/portfo.png", title: "New Project 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id:8,src: "/portfo.png", title: "New Project 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id:9,src: "/portfo.webp", title: "New Project 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  const handleToggle =() => setShowMore(!showMore);

  const diplayItems = showMore ? items : items.slice(0,6);

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 transition-all duration-500">
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
        className="mt-8 py-2 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Projects;
