import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import GitHub from "./components/GitHub";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#04010b] min-h-screen text-white">
      {/* Glow Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-10 left-20 w-[500px] h-[500px] rounded-full bg-purple-700 opacity-[0.15] blur-[180px]" />
        <div className="absolute bottom-10 right-20 w-[500px] h-[500px] rounded-full bg-cyan-500 opacity-[0.15] blur-[180px]" />
      </div>

      {/* Main Sections */}
      <Hero />
      <Education />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <GitHub />
      <Contact />
      <Footer />

      {/* Footer */}
      <footer className="text-center py-6 mt-10 border-t border-white/10 text-white/60">
        © {new Date().getFullYear()} Kiran Kasana — All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;

