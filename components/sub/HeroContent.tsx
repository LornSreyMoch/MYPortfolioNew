"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const TextChange = () => {
  const texts = ["Sreymoch", "a Full Stack Developer"];
  const [currentText, setCurrentText] = useState("");
  const [isAdding, setIsAdding] = useState(true);
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isAdding) {
        // Typing logic
        if (charIndex < texts[index].length) {
          setCurrentText((prev) => prev + texts[index][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setIsAdding(false);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIndex((prev) => (prev + 1) % texts.length);
          setIsAdding(true);
        }
      }
    }, isAdding ? 200 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isAdding, index, texts]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
      {currentText}
    </span>
  );
};

const HeroContent = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownloadClick = () => {
    setIsDownloaded(true);

    setTimeout(() => {
      setIsDownloaded(false);
    }, 3000);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-5 sm:px-10 lg:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center text-center sm:text-left m-auto max-w-[900px]">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Fullstack Developer Portfolio</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            {"Hi, I'm "}
            <TextChange />
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Developer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-start gap-6 w-full mt-5">
          <Link
            href="/#contact"
            className="flex items-center justify-center px-8 py-3 w-full sm:w-fit rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:bg-gradient-to-l hover:from-purple-600 hover:to-blue-500 transition-all duration-300 text-white shadow-xl font-medium transform hover:scale-105 active:scale-95"
          >
            Contact Me
          </Link>

          <a
            href="/LORN Sreymoch C3-WMAD CV 2025.Docx.pdf"
            download
            onClick={handleDownloadClick}
            className={`flex items-center justify-center px-8 py-3 w-full sm:w-fit rounded-full text-white shadow-xl font-medium transform hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out
            ${isDownloaded ? 'bg-gradient-to-r from-green-600 to-green-400' : 'bg-gradient-to-r from-blue-500 to-purple-600'} hover:bg-gradient-to-l hover:from-purple-600 hover:to-blue-500`}
          >
            {isDownloaded ? 'Downloading...' : 'Download CV'}
          </a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 sm:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          className="w-full h-auto max-w-[600px] sm:max-w-[700px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
