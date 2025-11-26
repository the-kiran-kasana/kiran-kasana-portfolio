import React from "react";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="space-y-16 text-center py-20">

      {/* Heading */}
      <h3 className="text-4xl font-extrabold tracking-wide bg-clip-text text-transparent
      bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300
      drop-shadow-[0_0_10px_rgba(34,211,238,0.45)]">
        Experience
      </h3>

      {/* Timeline Wrapper */}
      <div className="relative flex flex-col items-center w-full md:w-4/5 mx-auto
        px-4 py-10 rounded-2xl border border-cyan-300/30
        bg-gradient-to-br from-[#06111f]/60 to-[#0b1628]/40
        shadow-[0_0_35px_rgba(34,211,238,0.20)]
        backdrop-blur-2xl">

        {/* Vertical Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1
        bg-gradient-to-b from-cyan-300/60 via-purple-200/40 to-transparent
        rounded-full animate-pulse"></div>

        {/* Experience Card */}
        <div className="relative w-full md:w-[75%] mt-10
          p-7 rounded-2xl
          backdrop-blur-xl

          hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
          hover:scale-[1.01]
          transition-all duration-300">

          {/* Floating Icon */}
          <div className="absolute left-1/2 -top-6 -translate-x-1/2
            w-14 h-14 rounded-full
            bg-[#0b1628] border border-cyan-400/40
            flex items-center justify-center shadow-lg
            shadow-cyan-500/30
            animate-[float_3s_ease-in-out_infinite]">
            <Briefcase className="w-6 h-6 text-cyan-300" />
          </div>

          <h4 className="font-semibold text-3xl text-cyan-200 mt-6">
            Backend Development Intern
          </h4>

          <p className="text-2xl text-gray-400">Kaagaz — Bangalore, India</p>
          <p className="text-2xs text-gray-400 mt-1">Mar 2024 – May 2024</p>

          {/* List */}
          <ul className="mt-5 text-gray-300 text-xl space-y-2 text-center">
            <li className= "border-cyan-300/40 pl-3">Developed backend services using Java & Spring Boot.</li>
            <li className=" border-cyan-300/40 pl-3">Built REST APIs and handled MongoDB operations.</li>
            <li className=" border-cyan-300/40 pl-3">Managed GitLab CI/CD pipelines & version control.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
