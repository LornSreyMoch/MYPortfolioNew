'use client';

import React from 'react';
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Education = () => {
    const educationData = [
        { year: '2022', title: 'Grade 9', description: 'Graduated from Prek Antes Secondary School.' },
        { year: '2023', title: 'Foundation Studies Division', description: 'Completed studies at PSE-Institute (Pour un Sourire d’Enfant).' },
        { year: '2024', title: 'Year 2 - Web & Mobile App Development', description: 'Currently studying at SOB Margaret, PSE-Institute.' }
    ];    

    return (
        <div className="flex flex-col items-center text-white py-16 px-6">
            <motion.h2
                variants={slideInFromTop}
                initial="hidden"
                animate="visible"
                className="text-4xl font-semibold text-gray-200 text-center mb-6"
            >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    Education
                </span>
            </motion.h2>
            <div className="relative w-full max-w-4xl flex flex-col items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white-400 top-0 bottom-0"></div>
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative w-full max-w-md p-6 mb-10 rounded-lg shadow-xl border border-blue-400 text-center"
                    >
                        <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-900 px-4 py-1 text-blue-400 font-bold text-lg rounded-full">
                            {edu.year}
                        </span>
                        <h3 className="text-2xl font-bold mt-6 text-white">{edu.title}</h3>
                        <p className="mt-3 text-white-600">{edu.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Education;
