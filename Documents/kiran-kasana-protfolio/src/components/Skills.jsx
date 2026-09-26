import { useState } from "react";
import { MessageSquare, Users, Lightbulb, Clock, RefreshCw, Brain } from "lucide-react";

const tech = [
  { name: "HTML", slug: "html5", color: "F05C37", cat: "Frontend" },
  { name: "JavaScript", slug: "javascript", color: "F0DB4F", cat: "Frontend" },
  { name: "TypeScript", slug: "typescript", color: "3B9BFF", cat: "Frontend" },
  { name: "React", slug: "react", color: "61DAFB", cat: "Frontend" },
  { name: "Redux", slug: "redux", color: "A37CF0", cat: "Frontend" },
  { name: "Bootstrap", slug: "bootstrap", color: "9D5CF5", cat: "Frontend" },
  { name: "Vite", slug: "vite", color: "BD34FE", cat: "Frontend" },
  { name: "Node.js", slug: "nodedotjs", color: "83CD29", cat: "Backend" },
  { name: "Express", slug: "express", color: "FFFFFF", cat: "Backend" },
  { name: "Firebase", slug: "firebase", color: "FFCA28", cat: "Backend" },
  { name: "MongoDB", slug: "mongodb", color: "47A248", cat: "Database" },
  { name: "MySQL", slug: "mysql", color: "4DB8E8", cat: "Database" },
  { name: "Git", slug: "git", color: "F05C37", cat: "Tools" },
  { name: "GitHub", slug: "github", color: "FFFFFF", cat: "Tools" },
  { name: "Postman", slug: "postman", color: "FF6C37", cat: "Tools" },
  { name: "IntelliJ IDEA", slug: "intellijidea", color: "FE315D", cat: "Tools" },
  { name: "Vercel", slug: "vercel", color: "FFFFFF", cat: "Tools" },
  { name: "Netlify", slug: "netlify", color: "00C7B7", cat: "Tools" },
];

const tabs = ["All", "Frontend", "Backend", "Database", "Tools"];


const softSkills = [
  { name: "Communication", icon: MessageSquare, desc: "Clear, concise updates with teams and clients" },
  { name: "Teamwork", icon: Users, desc: "Collaborative, open to feedback and code reviews" },
  { name: "Problem Solving", icon: Lightbulb, desc: "Breaking complex problems into simple solutions" },
  { name: "Time Management", icon: Clock, desc: "Prioritizing tasks and meeting deadlines" },
  { name: "Adaptability", icon: RefreshCw, desc: "Quickly picking up new tools and technologies" },
  { name: "Critical Thinking", icon: Brain, desc: "Evaluating trade-offs before making decisions" },
];


const SubHeading = ({ children }) => (
  <div className="flex items-center gap-4 mb-8">
    <h4 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-300 whitespace-nowrap">
      {children}
    </h4>
    <span className="h-px flex-1 bg-gradient-to-r from-cyan-300/40 to-transparent" />
  </div>
);


const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");
  const shown = activeTab === "All" ? tech : tech.filter((t) => t.cat === activeTab);

  return (
    <section id="skills" className="relative py-20 w-full mx-0 px-0">

      {/* Decorative glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-56 w-[32rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 space-y-16">

        <div data-reveal className="text-center space-y-3">
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-cyan-300/70 font-semibold">
            <span className="h-px w-6 bg-cyan-300/50" /> What I Work With <span className="h-px w-6 bg-cyan-300/50" />
          </span>
          <h3 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 drop-shadow-[0_0_25px_rgba(34,211,238,0.25)]">
            Skills
          </h3>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
        </div>

        {/* Technical Expertise */}
        <div>
          <SubHeading>Technical Expertise</SubHeading>

          {/* Filter tabs */}
          <div data-reveal className="mb-8 flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25"
                    : "border border-white/10 bg-white/5 text-gray-300 hover:border-cyan-300/40 hover:text-cyan-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Logo tiles */}
          <div data-reveal-stagger className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
            {shown.map((item) => (
              <div
                key={item.name}
                style={{ "--brand": `#${item.color}` }}
                className="group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0d1528] to-[#070b16] px-3 py-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[color:var(--brand)] hover:shadow-[0_10px_35px_-10px_var(--brand)]"
              >
                <div className="pointer-events-none absolute -top-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-[var(--brand)] opacity-10 blur-2xl transition-opacity duration-300 group-hover:opacity-30" />
                <img
                  src={`https://cdn.simpleicons.org/${item.slug}/${item.color}`}
                  alt=""
                  className="relative h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <span className="relative text-center text-xs font-medium text-gray-300 group-hover:text-white sm:text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <SubHeading>Soft Skills</SubHeading>
          <div data-reveal-stagger className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="group rounded-2xl p-[1.5px] bg-gradient-to-br from-cyan-400/30 via-white/10 to-purple-500/30 hover:from-cyan-300/70 hover:to-purple-400/70 transition-all duration-500 hover:-translate-y-1">
                  <div className="h-full flex items-start gap-4 rounded-[calc(1rem-1.5px)] bg-[#0d1323] p-5 shadow-[0_0_20px_rgba(0,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(0,255,255,0.3)] transition-all duration-300">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/40 bg-[#0b1628] shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-5 w-5 text-cyan-300" />
                    </span>
                    <div>
                      <h4 className="font-semibold text-cyan-200">{skill.name}</h4>
                      <p className="mt-1 text-sm text-gray-400 leading-relaxed">{skill.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
