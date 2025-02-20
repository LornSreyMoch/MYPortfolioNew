"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-6 py-20 text-white">
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

      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-12">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-2xl border-4 border-purple-500"
        >
          <Image
            src="/hero-image.png"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-gray-300 max-w-2xl space-y-6 text-center md:text-left px-6"
        >
          <p className="text-lg md:text-2xl font-medium leading-relaxed">
            Hi, {"I’m"} <span className="text-purple-400 font-bold">Lorn Sreymoch</span>, a passionate backend developer from Phnom Penh, Cambodia.
            I specialize in designing and developing <span className="text-purple-400">scalable</span> and <span className="text-purple-400">secure APIs</span>.
          </p>
          <p className="text-lg md:text-2xl font-medium leading-relaxed">
            My expertise includes <span className="text-purple-400">HTML</span>, <span className="text-purple-400">CSS</span>,
            <span className="text-purple-400">JavaScript</span>, <span className="text-purple-400">React.js</span>, <span className="text-purple-400">Next.js</span>,
            <span className="text-purple-400">Node.js</span>, <span className="text-purple-400">Express.js</span>,
            <span className="text-purple-400">MySQL</span>, and <span className="text-purple-400">PostgreSQL</span>.
          </p>
          <p className="text-lg md:text-2xl font-medium leading-relaxed">
            I am currently in my second year of studying <span className="text-purple-400">Web and Mobile App Development</span> at PSE,
            while interning at <span className="text-purple-400">Bikay Company</span> to gain real-world experience in backend development.
          </p>
          <p className="text-lg md:text-2xl font-medium leading-relaxed">
            Beyond coding, I love <span className="text-purple-400">problem-solving</span>,
            learning new technologies, and improving my skills. In my free time,
            I enjoy watching <span className="text-purple-400">tech videos</span> and <span className="text-purple-400">fun content</span> on YouTube.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
