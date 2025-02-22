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
    }, isAdding ? 150 : 80); // Faster typing and slower deletion for smoother effect

    return () => clearTimeout(timeout);
  }, [charIndex, isAdding, index, texts]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
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
      className="flex flex-col sm:flex-row items-center justify-center px-6 md:px-12 lg:px-20 mt-12 sm:mt-20 w-full z-[20] relative"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[12px] px-[15px] border border-[#7042f88b] opacity-[0.9] mb-4"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 animate-pulse" />
          <h1 className="Welcome-text text-[14px] font-semibold">Fullstack Developer Portfolio</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold text-white max-w-[700px] w-auto h-auto"
        >
          <span>
            {"Hi, I'm "}
            <TextChange />
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-300 my-5 max-w-[700px] sm:text-xl"
        >
          {"I'm"} a Full Stack Developer with experience in Website, Mobile, and Software development. {"Let's"} connect and explore my projects and skills.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-start gap-6 w-full mt-5">
          <Link
            href="/#contact"
            className="flex items-center justify-center px-8 py-3 w-full sm:w-fit rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:bg-gradient-to-l hover:from-purple-600 hover:to-indigo-500 transition-all duration-300 text-white shadow-xl font-medium transform hover:scale-105"
          >
            Contact Me
          </Link>

          <a
            href="/LORN Sreymoch C3-WMAD CV 2025.Docx.pdf"
            download
            onClick={handleDownloadClick}
            className={`text-white py-4 px-10 rounded-full text-lg font-semibold transform hover:scale-110 hover:shadow-xl transition-all duration-300 ease-in-out shadow-md 
            ${isDownloaded ? 'bg-gradient-to-r from-green-600 to-green-400' : 'bg-gradient-to-r from-blue-500 to-purple-600'} hover:bg-gradient-to-l
            hover:from-purple-500 hover:to-blue-600`}
          >
            {isDownloaded ? 'Downloading...' : 'Download CV'}
          </a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-12 sm:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          className="transform hover:scale-110 transition-all duration-500"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
