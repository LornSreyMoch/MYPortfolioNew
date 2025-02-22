"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-6 py-20 text-white bg-gradient-to-b to-gray-800">
      <motion.h2
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="text-3xl font-semibold text-gray-200 text-center mb-8"
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
          <p className="text-lg md:text-xl font-medium leading-relaxed">
           {"I’m"} <span className="text-purple-400 font-bold">Lorn Sreymoch</span>, a passionate full-stack developer based in Phnom Penh, Cambodia. I specialize in building scalable web applications using technologies like <span className="text-purple-400">HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MySQL, PostgreSQL, and Git</span>.
          </p>
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            My expertise includes designing user interfaces, developing backend systems, and ensuring smooth full-stack integration. I’m skilled in <span className="text-purple-400">React.js</span>, <span className="text-purple-400">Next.js</span>, <span className="text-purple-400">Node.js</span>, <span className="text-purple-400">MySQL</span>, and <span className="text-purple-400">PostgreSQL</span>.
          </p>
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            Currently, {"I’m"} in my second year studying <span className="text-purple-400">Web and Mobile App Development</span> at PSE, while also gaining hands-on experience as a backend development intern at <span className="text-purple-400">Bikay Company</span>.
          </p>
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            When I'm not coding, I enjoy <span className="text-purple-400">playing football</span>, exploring <span className="text-purple-400">tech tutorials</span>, and watching <span className="text-purple-400">entertaining content</span> on YouTube.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;

