import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Gamepad2, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Hello! I'm Navneeth Kumar, a passionate Full Stack Developer with a strong foundation in web development
              and a keen interest in game development. I specialize in creating responsive, user-friendly applications
              using modern technologies like React.js, Java, and Python.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              With a background in computer science and hands-on experience in various projects, I bring creativity
              and technical expertise to every project I work on. I'm particularly enthusiastic about creating
              interactive web experiences and developing engaging games.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <Code2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Web Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building modern web applications with React.js and Java
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <Gamepad2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                App Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Creating interactive and appeling Apps.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg col-span-full">
              <Coffee className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Always Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Constantly exploring new technologies and improving my skills
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;