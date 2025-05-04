import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react"; // Import ArrowUp for Go to Top button

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Show "Go to Top" button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="w-full">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>

        {/* Footer Section */}
        <footer
          className={`py-8 text-center transition-colors duration-300 ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-6 mb-4">
              <a
                href="https://github.com/navneeth31"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/s-navneeth-kumar-4a04452a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/Navneethh31"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} Navneeth Kumar. All rights reserved.
            </p>
          </div>
        </footer>

        {/* Floating "Go to Top" Button */}
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
