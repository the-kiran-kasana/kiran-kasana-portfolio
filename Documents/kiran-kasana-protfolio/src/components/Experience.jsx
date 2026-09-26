import React from "react";
import { Briefcase, MapPin, CalendarDays, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Dream Viewer",
    location: "Noida, Uttar Pradesh",
    time: "Apr 2026 – Present",
    current: true,
    points: [
      "Contributed to both frontend and backend development of web applications.",
      "Built responsive user interfaces and developed REST APIs.",
      "Integrated APIs and managed databases.",
      "Fixed bugs and implemented new features across the stack.",
    ],
    tech: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "REST APIs", "Git & GitHub"],
  },
  {
    role: "Backend Development Intern",
    company: "Kaagaz",
    location: "Bangalore, India",
    time: "Mar 2024 – May 2024",
    points: [
      "Developed backend services using Java & Spring Boot.",
      "Built REST APIs and handled MongoDB operations.",
      "Managed GitLab CI/CD pipelines & version control.",
    ],
    tech: ["Java", "Spring Boot", "REST APIs", "MongoDB", "GitLab CI/CD"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative space-y-14 py-20">

      {/* Decorative glow */}
      <div className="pointer-events-none absolute left-1/2 -top-10 -z-10 h-56 w-[32rem] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />

      <div data-reveal className="text-center space-y-3">
        <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-cyan-300/70 font-semibold">
          <span className="h-px w-6 bg-cyan-300/50" /> Where I've Worked <span className="h-px w-6 bg-cyan-300/50" />
        </span>
        <h3 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 drop-shadow-[0_0_25px_rgba(34,211,238,0.25)]">
          Experience
        </h3>
        <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Timeline line */}
        <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-cyan-300/70 via-purple-300/40 to-transparent" />

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} data-reveal="left" className="relative pl-16 md:pl-20">

              {/* Timeline node */}
              <span className="absolute left-6 top-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-cyan-400/40 bg-[#0b1628] shadow-lg shadow-cyan-500/30">
                {exp.current && <span className="absolute inset-0 rounded-full border border-cyan-300/60 animate-ping" />}
                <Briefcase className="h-5 w-5 text-cyan-300" />
              </span>

              <div className="group rounded-[1.5rem] p-[1.5px] bg-gradient-to-br from-cyan-400/30 via-white/10 to-purple-500/30 hover:from-cyan-300/70 hover:to-purple-400/70 transition-all duration-500 hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-[calc(1.5rem-1.5px)] bg-[#070b16]/95 p-6 md:p-8 shadow-xl backdrop-blur-xl transition-all duration-500 group-hover:shadow-[0_25px_60px_-15px_rgba(34,211,238,0.35)]">

                  <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition-opacity duration-500 group-hover:bg-cyan-400/20" />

                  {/* Header */}
                  <div className="relative flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300" />
                              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
                            </span>
                            Current
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-300">{exp.company}</p>
                      <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-gray-400">
                        <MapPin className="h-4 w-4 text-cyan-300/80" /> {exp.location}
                      </p>
                    </div>

                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                      <CalendarDays className="h-3.5 w-3.5 text-cyan-300" /> {exp.time}
                    </span>
                  </div>

                  {/* Points */}
                  <ul className="relative mt-6 space-y-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                        <span className="text-sm md:text-base leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech */}
                  <div className="relative mt-6 flex flex-wrap gap-2 border-t border-white/5 pt-5">
                    {exp.tech.map((t, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wide text-cyan-200/90 transition-colors duration-300 hover:border-cyan-300/50 hover:bg-cyan-400/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
