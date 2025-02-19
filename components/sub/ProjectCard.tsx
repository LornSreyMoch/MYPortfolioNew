import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  demoLink?: string; // Optional demo link
}

const ProjectCard = ({ src, title, description, demoLink }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
