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
            Hello, I’m <span className="text-purple-400 font-bold">Lorn Sreymoch</span>, a passionate full-stack developer based in Phnom Penh, Cambodia. With hands-on experience in building dynamic, scalable web applications, I specialize in technologies such as <span className="text-purple-400">HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MySQL, PostgreSQL, and Git</span>.
          </p>
          <p className="text-lg md:text-2xl font-medium leading-relaxed">
            My expertise lies in crafting intuitive user interfaces, developing efficient backend systems, and ensuring seamless integration across the full stack. I have a deep understanding of <span className="text-purple-400">HTML</span>, <span className="text-purple-400">CSS</span>, <span className="text-purple-400">JavaScript</span>, <span className="text-purple-400">React.js</span>, <span className="text-purple-400">Next.js</span>, <span className="text-purple-400">Node.js</span>, <span className="text-purple-400">Express.js</span>, <span className="text-purple-400">MySQL</span>, and <span className="text-purple-400">PostgreSQL</span>.
          </p>
          <p className="text-lg md:text-2xl font-medium leading-relaxed">
            Currently, I am pursuing my second year of studies in <span className="text-purple-400">Web and Mobile App Development</span> at PSE, while also gaining valuable real-world experience as a backend development intern at <span className="text-purple-400">Bikay Company</span>.
          </p>
          <p className="text-lg md:text-2xl font-medium leading-relaxed">
            Outside of coding, I am an avid <span className="text-purple-400">problem-solver</span> with a strong passion for learning new technologies and constantly enhancing my skill set. During my free time, I enjoy exploring <span className="text-purple-400">tech tutorials</span> and indulging in <span className="text-purple-400">entertaining content</span> on YouTube.
          </p>

        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
