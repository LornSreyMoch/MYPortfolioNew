import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-6">
      <div className="w-full h-full flex items-center justify-between mx-auto gap-[10px]">  {/* Adjusted gap */}

        {/* Logo & Name MOCH */}
        <div className="flex items-center gap-[10px] mr-5">  {/* Adjusted gap and margin-right */}
          <a href="#hero" className="flex items-center gap-[10px]">  {/* Adjusted gap */}
            <Image
              src="/logo_prev_ui.png"
              alt="logo"
              width={40}
              height={40}
              className="cursor-pointer hover:animate-slowspin"
            />
            <span className="font-bold text-gray-300 hidden md:block">
              MOCH
            </span>
          </a>
        </div>

        {/* Menu in the center */}
        <div className="flex flex-grow justify-center">
          <ul className="flex items-center gap-[10px] bg-[#0300145e] border border-[#7042f861] rounded-full shadow-md shadow-purple-900/40 px-6 py-2">
            <li>
              <Link
                href="#hero"
                className="px-3 py-1 text-gray-200 hover:text-purple-400 transition-all duration-300"
              >
                Hero
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="px-3 py-1 text-gray-200 hover:text-purple-400 transition-all duration-300"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="px-3 py-1 text-gray-200 hover:text-purple-400 transition-all duration-300"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="px-3 py-1 text-gray-200 hover:text-purple-400 transition-all duration-300"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>

        {/* Discord Icon */}
        <div className="flex items-center gap-[10px] ml-5">  {/* Adjusted gap and margin-left */}
          {Socials.map((social) =>
            social.name === "Discord" ? (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={22}
                height={22}
                className="ml-2 hover:scale-110 transition-transform duration-300"
              />
            ) : null
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
