"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-6 relative">
      {/* Title - Now Closer */}
      <motion.h2
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="text-4xl font-semibold text-gray-200 text-center mb-6"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          About Me
        </span>
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-8">
        {/* Left - Profile Image */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg"
        >
          <Image
            src="/moch.jpg" // Replace with your actual image path
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>

        {/* Right - Description */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-gray-300 max-w-lg text-center md:text-left space-y-4"
        >
          <p className="text-lg leading-relaxed">
            Hi, I'm <span className="text-purple-400 font-semibold">Lorn Sreymoch</span>, a **backend developer** from Phnom Penh, Cambodia.
            I specialize in **Node.js, Express, PostgreSQL, and MongoDB**.
          </p>
          <p className="text-lg leading-relaxed">
            I'm currently a **Year 2 Web and Mobile App Development student** at **SOB Margaret, PSE**,
            and an **intern at Bikay Company**, where I work on building secure and scalable APIs.
          </p>
          <p className="text-lg leading-relaxed">
            I love problem-solving, learning new technologies, and improving my skills.
            Outside of coding, I enjoy watching tech videos and funny content on YouTube.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
