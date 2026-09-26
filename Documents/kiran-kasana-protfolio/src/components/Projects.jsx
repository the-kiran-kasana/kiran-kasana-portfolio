import React from 'react';
import { Github, ExternalLink, Eye, Code2, ArrowRight } from 'lucide-react';

export default function Projects({ projects, onOpen }) {
  return (
    <section id="projects" className="relative space-y-14 py-20">

      {/* Decorative glow */}
      <div className="pointer-events-none absolute left-1/2 -top-10 -z-10 h-56 w-[32rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div data-reveal className="text-center space-y-3">
        <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-cyan-300/70 font-semibold">
          <span className="h-px w-6 bg-cyan-300/50" /> Portfolio <span className="h-px w-6 bg-cyan-300/50" />
        </span>
        <h3 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 drop-shadow-[0_0_25px_rgba(34,211,238,0.25)]">
          Featured Projects
        </h3>
        <p className="text-sm text-gray-400">Interactive • Scalable • Production Ready</p>
        <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
      </div>

      {/* Project Grid */}
      <div data-reveal-stagger className="grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group relative rounded-[1.75rem] p-[1.5px] bg-gradient-to-br from-cyan-400/30 via-white/10 to-purple-500/30 hover:from-cyan-300/70 hover:via-cyan-200/20 hover:to-purple-400/70 transition-all duration-500 hover:-translate-y-2"
          >
            <article className="relative flex h-full flex-col overflow-hidden rounded-[calc(1.75rem-1.5px)] bg-[#070b16]/95 shadow-xl backdrop-blur-xl transition-all duration-500 group-hover:shadow-[0_25px_60px_-15px_rgba(34,211,238,0.35)]">

              {/* Index badge */}
              <span className="pointer-events-none absolute top-4 right-5 z-10 text-5xl font-black text-white/10 select-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Project Thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover opacity-85 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-100"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-cyan-900/40 via-[#071124] to-purple-900/40">
                    <Code2 className="h-10 w-10 text-cyan-300/70" />
                    <span className="px-6 text-center text-sm font-medium text-cyan-200/70">{p.title}</span>
                  </div>
                )}

                {/* bottom fade into card */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070b16] via-transparent to-transparent opacity-90" />

                {/* hover sheen sweep */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />
              </div>

              {/* Details Panel */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h4 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-300 group-hover:bg-clip-text group-hover:text-transparent">
                  {p.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-400 line-clamp-3">{p.short}</p>

                {/* Tech chips */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wide text-cyan-200/90 transition-colors duration-300 hover:border-cyan-300/50 hover:bg-cyan-400/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-col gap-4 border-t border-white/5 pt-5">
                  <div className="flex flex-wrap items-center gap-3">
                    {p.deploy && (
                      <a
                        href={p.deploy}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-400/40 active:scale-95"
                      >
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                        </span>
                        Live Demo
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}

                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-medium text-gray-200 transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/5 hover:text-cyan-200"
                    >
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                  </div>

                  <button
                    onClick={() => onOpen(i)}
                    className="inline-flex w-fit items-center gap-1.5 text-sm text-gray-400 transition-colors duration-300 hover:text-cyan-300"
                  >
                    <Eye className="h-4 w-4" /> View Details <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
