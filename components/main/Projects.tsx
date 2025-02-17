"use client";
import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const [showMore, setShowMore] = useState(false); // To track showMore state

  // All project cards data
  const projectData = [
    { src: "/bikay.png", title: "Short URL", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { src: "/pos.png", title: "Point of Sale", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { src: "/portfo.png", title: "Portfolio Website", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { src: "/portfo.png", title: "New Project 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { src: "/portfo.png", title: "New Project 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { src: "/portfo.png", title: "New Project 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { src: "/portfo.png", title: "New Project 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { src: "/portfo.png", title: "New Project 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { src: "/portfo.webp", title: "New Project 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  // Function to handle button click
  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      {/* Project Cards */}
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {projectData.slice(0, showMore ? projectData.length : 3).map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={handleToggle} // Handle toggling between showing more or less
        className="mt-5 py-2 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg"
      >
        {showMore ? "Show Less" : "Show More"} {/* Toggle between 'Show More' / 'Show Less' */}
      </button>
    </div>
  );
};

export default Projects;
