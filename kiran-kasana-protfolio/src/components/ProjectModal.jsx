import React from "react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed  inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="max-w-8xl w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#061022]/90 to-[#071124]/80   border border-cyan-300/20 shadow-2xl backdrop-blur-xl">


        <div className="grid md:grid-cols-3">

          {/* Left: Project Image */}
          <div className="h-64 md:h-full overflow-hidden">
            <img   src={project.image}   alt={project.title}   className="w-full h-full object-cover opacity-90" />
          </div>

          {/* Right: Details */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-bold text-cyan-200">{project.title}</h4>
              <p className="text-sm text-gray-300 mt-2">{project.long}</p>

              {/* Tech */}
              <div className="mt-4 flex gap-2 flex-wrap">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="px-2 py-1 rounded-md bg-white/5 text-xs border border-cyan-400/20 text-cyan-200" > {t}  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-3"> {project.deploy && (
                <a href={project.deploy} target="_blank" rel="noreferrer"  className="px-4 py-2 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 text-sm font-semibold hover:scale-105 transition" >
                  Live Demo
                </a>
              )}

              <a href={project.link} target="_blank" rel="noreferrer"  className="px-4 py-2 rounded-lg bg-[#0e1627]/50 border border-white/10 text-sm hover:bg-white/5" >  GitHub  </a>

              <button  onClick={onClose}  className="px-4 py-2 rounded-lg bg-white/5 text-sm" > Close</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
