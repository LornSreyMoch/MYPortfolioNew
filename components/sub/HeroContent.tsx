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
  const [currentText, setCurrentText] = useState(""); // Current text being typed/deleted
  const [isAdding, setIsAdding] = useState(true); // Whether we're typing or deleting
  const [index, setIndex] = useState(0); // Tracks which text is being displayed (Sreymoch or Full Stack Developer)
  const [charIndex, setCharIndex] = useState(0); // Tracks the current character being typed/deleted

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isAdding) {
        // Typing logic
        if (charIndex < texts[index].length) {
          setCurrentText((prev) => prev + texts[index][charIndex]); // Add next character
          setCharIndex((prev) => prev + 1); // Increment charIndex
        } else {
          // If fully typed, switch to deleting
          setIsAdding(false);
        }
      } else {
        // Deleting logic
        if (charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1)); // Remove the last character
          setCharIndex((prev) => prev - 1); // Decrement charIndex
        } else {
          // If deletion is complete, switch to the next text in the array
          setIndex((prev) => (prev + 1) % texts.length); // Switch between "Sreymoch" and "a Full Stack Developer"
          setIsAdding(true); // Start typing again
        }
      }
    }, isAdding ? 200 : 100); // Speed of typing and deleting

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

    // Reset the button color after 3 seconds (simulating download completion)
    setTimeout(() => {
      setIsDownloaded(false);
    }, 3000); // 3 seconds
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Fullstack Developer Portfolio</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
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

        <div className="flex justify-start gap-4 w-full mt-3">
        <Link
         href="/"
         className="flex items-center justify-center px-6 py-2 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-purple-600 hover:from-purple-500 hover:to-blue-600 transition-all text-white shadow-md font-medium"
        >
         Contact
       </Link>



          <a
            href="/LORN Sreymoch C3-WMAD CV 2025.Docx.pdf"
            download
            onClick={handleDownloadClick} // Trigger the color change
            className={`text-white py-3 px-8 rounded-full text-base md:text-lg font-semibold transform hover:scale-110 hover:shadow-xl transition-all duration-300 ease-in-out shadow-md 
      ${isDownloaded ? 'bg-gradient-to-r from-green-600 to-green-400' : 'bg-gradient-to-r from-blue-500 to-purple-600'} hover:bg-gradient-to-l
      hover:from-purple-500 hover:to-blue-600`}
          >
            {isDownloaded ? 'Downloading...' : 'Download CV'}
          </a>
        </div>

      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
