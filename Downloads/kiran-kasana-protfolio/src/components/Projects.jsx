import React from 'react';

export default function Projects({ projects, onOpen }) {
  return (
    <section id="projects" className="space-y-12 py-20">


      <div className="text-center space-y-2">
        <h3 className="text-4xl font-bold bg-clip-text text-transparent   bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300">    Featured Projects    </h3>
        <p className="text-sm text-gray-400">    Interactive • Scalable • Production Ready </p>
      </div>

      {/* Project Grid */}
      <div className="grid gap-10   md:grid-cols-3">
        {projects.map((p, i) => (
          <article  key={i}   className="group relative rounded-2xl overflow-hidden border border-cyan-300/20   bg-gradient-to-br from-[#05060a]/60 to-[#071124]/60 p-0 shadow-xl   hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300"  >

            {/* Project Thumbnail */}
            <div className="h-78 w-full overflow-hidden">
              <img src={p.image}  alt={p.title}  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"   />
            </div>

            {/* Details Panel */}
            <div className="p-6 relative bg-[#050a14]/60 backdrop-blur-xl">
              <h4 className="text-lg font-semibold">{p.title}</h4>
              <p className="text-sm text-gray-300 mt-2">{p.short}</p>

              {/* Tech chips */}
              <div className="mt-4 flex gap-2 flex-wrap">
                {p.tech.map((t, idx) => (
                  <span  key={idx}   className="px-2 py-1 rounded-md bg-white/5 text-xs text-cyan-200 border border-cyan-300/20"     >  {t} </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-5 flex items-center justify-between">
                <button
                  onClick={() => onOpen(i)}
                  className="px-3 py-2 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600
                    text-sm font-semibold shadow-lg hover:scale-105 transition"
                >
                  Details
                </button>

                <div className="flex flex-col items-end px-2 py-1 space-y-1 border border-cyan-300/20">
                  {p.deploy && (
                    <a
                      href={p.deploy}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-cyan-300 hover:text-purple-300"
                    >
                      Live Demo
                    </a>
                  )}

                </div>
              </div>
            </div>

          </article>
        ))}
      </div>
    </section>
  );
}
