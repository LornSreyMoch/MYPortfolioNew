"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-[80px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-6">
      <div className="w-full h-full flex items-center justify-between px-6">
        
        {/* Logo + Name */}
        <div className="flex items-center gap-[15px]">
          <a href="#home" className="flex items-center gap-[15px]">
            <Image
              src="/logo_prev_ui.png"
              alt="logo"
              width={60}
              height={60}
              className="cursor-pointer hover:animate-slowspin transition-transform duration-500"
            />
            <span className="font-bold text-gray-300 text-xl md:text-2xl hidden md:block">
              MOCH
            </span>
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-200 text-2xl focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Centered Menu for Desktop */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center gap-[20px] bg-[#0300145e] border border-[#7042f861] rounded-full shadow-md shadow-purple-900/40 px-8 py-3 transition-all duration-300">
            <li>
              <Link
                href="#home"
                className="px-4 py-2 text-gray-200 text-lg md:text-xl hover:text-purple-400 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="px-4 py-2 text-gray-200 text-lg md:text-xl hover:text-purple-400 transition-all duration-300"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="px-4 py-2 text-gray-200 text-lg md:text-xl hover:text-purple-400 transition-all duration-300"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="px-4 py-2 text-gray-200 text-lg md:text-xl hover:text-purple-400 transition-all duration-300"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center bg-[#0300145e] absolute top-[80px] w-full transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="w-full flex flex-col items-center gap-[20px] py-4">
          <li>
            <Link
              href="#home"
              className="px-4 py-2 text-gray-200 text-lg md:text-xl hover:text-purple-400 transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="px-4 py-2 text-gray-200 text-lg md:text-xl hover:text-purple-400 transition-all duration-300"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className="px-4 py-2 text-gray-200 text-lg md:text-xl hover:text-purple-400 transition-all duration-300"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="px-4 py-2 text-gray-200 text-lg md:text-xl hover:text-purple-400 transition-all duration-300"
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
