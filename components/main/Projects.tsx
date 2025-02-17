"use client";
import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const [showMore, setShowMore] = useState(false); // Toggle state

  // Project data
  const projectData = [
    { src: "/bikay.png", title: "Short URL", description: "A powerful link shortener built with Express & PostgreSQL." },
    { src: "/pos.png", title: "Point of Sale", description: "A POS system for small businesses with real-time inventory tracking." },
    { src: "/portfo.png", title: "Portfolio Website", description: "A sleek and modern portfolio website using Next.js & Tailwind CSS." },
    { src: "/buynow.png", title: "E-Commerce Platform", description: "An online shop built with React and Strapi CMS." },
    { src: "/culator.png", title: "HR Management System", description: "A web app for managing employee records & payroll." },
    { src: "/portfo.png", title: "Task Manager", description: "A task-tracking app with authentication and real-time updates." },
    { src: "/portfo.png", title: "Learning Platform", description: "An LMS with video courses and interactive quizzes." },
    { src: "/portfo.png", title: "Chat Application", description: "A real-time chat app using WebSockets & MongoDB." },
    { src: "/portfo.webp", title: "Finance Tracker", description: "A budget management tool for tracking expenses and income." },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20 px-5" id="projects">
      {/* Title */}
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10">
        My Projects
      </h1>

      {/* Project Cards */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectData.slice(0, showMore ? 9 : 3).map((project, index) => (
          <ProjectCard key={index} src={project.src} title={project.title} description={project.description} />
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-8 py-2 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:scale-105 transition-transform"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Projects;
