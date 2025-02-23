"use client";
import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  // All project data
  const items = [
    { id: 1, src: "/portfo.png", title: "Portfolio Website", description: "Portfolio Website a personal website that showcases your work, skills, and experience.", demoLink: "https://sreymoch.vercel.app/" },
    { id: 2, src: "/culator.png", title: "Calculator", description: "Calculator a web-based tool that allows users to perform basic arithmetic operations.", demoLink: "https://online-calculator-indol.vercel.app/" },
    { id: 3, src: "/bikay.png", title: "Short URL", description: "Short URL a service that converts long website links into shorter, easy-to-share URLs.", demoLink: "https://link-shorten-two-gx8i.vercel.app/" },
    { id: 4, src: "/buynow.png", title: "Buy Now", description: "Buy Now a feature on an e-commerce website that lets users quickly purchase a product.", demoLink: "https://buynow-pied.vercel.app/" },
    { id: 5, src: "/weather.png", title: "Weather", description: "Weather a website or app that provides real-time weather updates.", demoLink: "https://pp-weather-azure.vercel.app/" },
    { id: 6, src: "/minimal-blog.png", title: "Minimal Blog", description: "Minimal Blog a simple and clean blogging platform focused on writing and readability.", demoLink: "https://minimal-blog-lac.vercel.app/" },
    { id: 7, src: "/survey-form.png", title: "Survey Form", description: "Survey Form a form where people can answer questions to give feedback or share opinions, often used for research, customer feedback, or collecting data.", demoLink: "https://from-b8.vercel.app/" },
    { id: 8, src: "/Selling-Bikecycle.png", title: "Selling Bikecycle", description: "Selling Bicycle A website or platform where users can buy and sell bicycles, including details like price, features, and contact information.", demoLink: "https://selling-bicycle.vercel.app/" },
    { id: 9, src: "/failytale.png", title: "Faily Tale", description: "Fairy Tale a website or app that shares magical and imaginative stories, often for kids, featuring characters like princesses, wizards, and talking animals." },
    { id: 10, src: "/agro.png", title: "AgroMarket", description: "AgroMarket a platform where farmers and buyers can connect to buy and sell agricultural products like vegetables, fruits, and grains." },
    { id: 11, src: "/pos.png", title: "Point of Sale", description: "Point of Sale (POS) a system used in stores or restaurants to process sales, manage inventory, and track payments from customers." },
    { id: 12, src: "/ai.png", title: "AI Learning Roadmap", description: "AI Learning Roadmap a guide or plan that helps people learn Artificial Intelligence (AI) step by step, including topics like machine learning, deep learning, and programming." },
    { id: 13, src: "/agroadmin.png", title: "AgroAdmin", description: "AgroAdmin a management system for agricultural businesses to track crops, sales, suppliers, and farm activities in one place." }
  ];

  const handleToggle = () => setShowMore((prevState) => !prevState);

  const displayItems = showMore ? items : items.slice(0, 3);

  return (
    <div className="relative z-20 mt-8 py-2 px-6 text-white rounded-lg transition-all duration-300 hover:shadow-lg cursor-pointer">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-blue bg-opacity-50 z-0"></div>

      <motion.h2 className="relative z-20 text-4xl font-bold text-center mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          My Projects
        </span>
      </motion.h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 sm:px-10 transition-all duration-500 relative z-20">
        {displayItems.map((item) => (
          <motion.div
            key={item.id}
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 * item.id }}
          >
            <ProjectCard
              src={item.src}
              title={item.title}
              description={item.description}
              demoLink={item.demoLink || undefined}
            />
          </motion.div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      <button
        onClick={handleToggle}
        className="relative z-30 mt-8 py-2 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:bg-gradient-to-l hover:from-purple-600 hover:to-blue-500 transition-all duration-300 text-white shadow-xl font-medium transform hover:scale-105 active:scale-95 cursor-pointer mx-auto block"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Projects;
