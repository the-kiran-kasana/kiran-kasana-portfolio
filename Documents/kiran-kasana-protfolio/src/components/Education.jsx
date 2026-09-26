import React from "react";
import { BookOpen, GraduationCap, School, CalendarDays, CheckCircle2 } from "lucide-react";

const education = [
  {
    icon: BookOpen,
    type: "Professional Program",
    title: "Full-Stack Development",
    place: "Masai School",
    time: "2025",
    status: "Completed",
  },
  {
    icon: GraduationCap,
    type: "Degree",
    title: "B.Tech",
    place: "Shree Digamber Institute of Technology (RTU)",
    time: "2021 – 2025",
    status: "Completed",
  },
  {
    icon: School,
    type: "Secondary School",
    title: "SSC",
    place: "RBSE Board",
    time: "2021",
    score: "92.5%",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative space-y-14 py-20">

      {/* Decorative glow */}
      <div className="pointer-events-none absolute left-1/2 -top-10 -z-10 h-56 w-[32rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div data-reveal className="text-center space-y-3">
        <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-cyan-300/70 font-semibold">
          <span className="h-px w-6 bg-cyan-300/50" /> Academic Journey <span className="h-px w-6 bg-cyan-300/50" />
        </span>
        <h3 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 drop-shadow-[0_0_25px_rgba(34,211,238,0.25)]">
          Education
        </h3>
        <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
      </div>

      <div data-reveal-stagger className="grid gap-6 md:grid-cols-3">
        {education.map((edu, idx) => {
          const Icon = edu.icon;
          return (
            <div
              key={idx}
              className="group rounded-[1.5rem] p-[1.5px] bg-gradient-to-br from-cyan-400/30 via-white/10 to-purple-500/30 hover:from-cyan-300/70 hover:to-purple-400/70 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-1.5px)] bg-[#070b16]/95 p-7 shadow-xl backdrop-blur-xl transition-all duration-500 group-hover:shadow-[0_25px_60px_-15px_rgba(34,211,238,0.35)]">

                {/* corner glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl transition-opacity duration-500 group-hover:bg-cyan-400/20" />

                <div className="relative flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/40 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 shadow-lg shadow-cyan-500/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-7 w-7 text-cyan-300" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                    <CalendarDays className="h-3.5 w-3.5 text-cyan-300" />
                    {edu.time}
                  </span>
                </div>

                <p className="relative mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300/80">{edu.type}</p>
                <h4 className="relative mt-2 text-2xl font-bold text-white transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-300 group-hover:bg-clip-text group-hover:text-transparent">
                  {edu.title}
                </h4>
                <p className="relative mt-2 text-sm leading-relaxed text-gray-400">{edu.place}</p>

                <div className="relative mt-auto pt-6">
                  <div className="border-t border-white/5 pt-5">
                    {edu.score ? (
                      <div className="flex items-end justify-between">
                        <span className="text-xs uppercase tracking-wide text-gray-500">Percentage</span>
                        <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-300">{edu.score}</span>
                      </div>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-300">
                        <CheckCircle2 className="h-4 w-4" /> {edu.status}
                      </span>
                    )}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
