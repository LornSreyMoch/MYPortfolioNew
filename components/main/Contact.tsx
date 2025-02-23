"use client";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="w-full py-16 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center">

        {/* Title with animation */}
        <motion.h2
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className="text-4xl font-semibold text-gray-200 mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Contact Me
          </span>
        </motion.h2>

        {/* Description */}
        <p className="text-gray-300 text-lg mb-8">
          Feel free to reach out to me through any of the following channels.
        </p>

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 lg:gap-20">

          {/* Phone */}
          <motion.div
            className="flex flex-col items-center gap-4 text-lg sm:text-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaPhoneAlt className="text-purple-600" size={32} />
            <a
              href="tel:+88570857113"
              className="text-gray-300 hover:text-purple-500 transition duration-300"
            >
              +885 70 857 113
            </a>
          </motion.div>

          {/* Email */}
          <motion.div
            className="flex flex-col items-center gap-4 text-lg sm:text-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaEnvelope className="text-purple-600" size={32} />
            <a
              href="mailto:lornsreymoch5@gmail.com"
              className="text-gray-300 hover:text-purple-500 transition duration-300"
            >
              lornsreymoch5@gmail.com
            </a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            className="flex flex-col items-center gap-4 text-lg sm:text-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <FaLinkedin className="text-purple-600" size={32} />
            <a
              href="https://www.linkedin.com/in/sreymoch-lorn-793538352/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-500 transition duration-300"
            >
              linkedin.com/in/sreymoch-lorn
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
