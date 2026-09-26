import React from "react";
import { GraduationCap, BookOpen, Briefcase, Rocket } from "lucide-react";

const journey = [
  {
    icon: GraduationCap,
    title: "B.Tech in Computer Science",
    place: "Shree Digamber Institute of Technology (RTU)",
    time: "2021 – 2025",
    desc: "Built a strong foundation in Data Structures, Algorithms, and core CS fundamentals.",
  },
  {
    icon: BookOpen,
    title: "Full-Stack Development Program",
    place: "Masai School",
    time: "Completed 2025",
    desc: "Intensive, project-driven training across the MERN stack, system design, and problem-solving.",
  },
  {
    icon: Briefcase,
    title: "Backend Development Intern",
    place: "Kaagaz, Bangalore",
    time: "Mar 2024 – May 2024",
    desc: "Shipped REST APIs with Java & Spring Boot, worked with MongoDB, and managed CI/CD pipelines.",
  },
  {
    icon: Rocket,
    title: "Building Full-Stack Products",
    place: "Independent & Freelance Projects",
    time: "2024 – Present",
    desc: "Designing and shipping complete, live products end-to-end — including TTFixon, a production service-booking platform.",
  },
];

const highlights = [
  { label: "Core Strength", value: "DSA & Problem Solving" },
  { label: "Focus", value: "Full-Stack Development" },
  { label: "Experience", value: "Backend Internship" },
  { label: "Shipped", value: "4+ Live Projects" },
];

export default function About() {
  return (
    <section id="about" className="relative space-y-14 py-20">

      {/* Decorative glow */}
      <div className="pointer-events-none absolute left-1/2 -top-10 -z-10 h-56 w-[32rem] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />

      <div data-reveal className="text-center space-y-3">
        <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-cyan-300/70 font-semibold">
          <span className="h-px w-6 bg-cyan-300/50" /> Get To Know Me <span className="h-px w-6 bg-cyan-300/50" />
        </span>
        <h3 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 drop-shadow-[0_0_25px_rgba(34,211,238,0.25)]">
          About Me
        </h3>
        <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
      </div>

      {/* Summary card */}
      <div data-reveal="zoom" className="mx-auto max-w-4xl rounded-[1.75rem] p-[1.5px] bg-gradient-to-br from-cyan-400/30 via-white/10 to-purple-500/30">
        <div className="rounded-[calc(1.75rem-1.5px)] bg-[#070b16]/95 p-7 md:p-9 backdrop-blur-xl shadow-xl">
          <p className="text-gray-300 leading-relaxed text-center md:text-left">
            I'm Kiran Kasana, a Full-Stack Developer who enjoys turning ideas into reliable, scalable
            products — from REST APIs and databases on the backend to fast, responsive interfaces on
            the frontend. My path started with a strong foundation in Data Structures, Algorithms, and
            problem-solving, sharpened further through an intensive Full-Stack Development program at
            Masai School and a backend internship at Kaagaz. Today, I build complete products end-to-end,
            combining clean architecture with a sharp focus on performance and user experience.
          </p>

          {/* Highlight pills */}
          <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-cyan-500/30 bg-[#0d1323] p-4 text-center shadow-[0_0_20px_rgba(0,255,255,0.12)] transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,255,255,0.3)]"
              >
                <p className="text-sm font-semibold text-cyan-200">{item.value}</p>
                <p className="mt-1 text-xs text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Career progression timeline */}
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-300/60 via-purple-300/30 to-transparent md:left-1/2" />

        <div className="space-y-10">
          {journey.map((step, idx) => {
            const Icon = step.icon;
            const onRight = idx % 2 === 1;
            return (
              <div
                key={idx}
                data-reveal={onRight ? "right" : "left"}
                className={`relative md:w-1/2 ${onRight ? "md:ml-auto md:pl-12" : "md:pr-12"}`}
              >
                <span
                  className={`absolute top-0 left-5 -translate-x-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/40 bg-[#0b1628] shadow-lg shadow-cyan-500/20 ${
                    onRight ? "md:left-0" : "md:left-auto md:right-0 md:translate-x-1/2"
                  }`}
                >
                  <Icon className="h-5 w-5 text-cyan-300" />
                </span>

                <div className="ml-14 rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-[#061022]/60 to-[#041020]/40 p-5 shadow-[0_0_20px_rgba(34,211,238,0.1)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] md:ml-0">
                  <h4 className="font-semibold text-cyan-200">{step.title}</h4>
                  <p className="text-sm text-gray-300">{step.place}</p>
                  <p className="mt-1 text-xs text-gray-500">{step.time}</p>
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
