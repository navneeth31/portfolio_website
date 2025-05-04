import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Github, Linkedin, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {/* Enter your name below */}
              Hi, I'm <span className="text-blue-600">Your NAME</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Full Stack Developer & App Development Enthusiast
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
              >
                View Portfolio
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
              >
                Hire Me
              </Link>
            </div>
            <div className="flex items-center gap-4 mt-8 justify-center md:justify-start">
              <a
                //Add your GitHub link below
                href=""
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                //Add your LinkedIn link below
                href=""
                title='LinkedIn'
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                //Add your Resume link below from Google Drive or any other source
                href=""
                title ="Resume"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Download size={24} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto overflow-hidden rounded-full bg-blue-100 dark:bg-blue-900">
              <img
                //Replace with your image below(Add your image to the public folder [.png])
                src="/nk.png"
                alt="Navneeth Kumar"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;