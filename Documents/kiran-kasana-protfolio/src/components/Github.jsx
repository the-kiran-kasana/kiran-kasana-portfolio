import React, { useEffect, useState } from "react";
import { Github as GithubIcon, BookMarked, Code2, CalendarDays, ArrowUpRight, Flame, Activity } from "lucide-react";

const USERNAME = "the-kiran-kasana";

const langColors = {
  JavaScript: "#F0DB4F",
  TypeScript: "#3B9BFF",
  Python: "#4B8BBE",
  HTML: "#E34F26",
  CSS: "#8B5CF6",
  Java: "#ED8B00",
  "C++": "#F34B7D",
  C: "#A8B9CC",
  "Jupyter Notebook": "#F37626",
  Shell: "#89E051",
};

const levelColors = ["rgba(255,255,255,0.05)", "#0e4d5c", "#0f7c8f", "#14b8d4", "#67e8f9"];

function computeStreaks(days) {
  let longest = 0;
  let run = 0;
  days.forEach((d) => {
    run = d.count > 0 ? run + 1 : 0;
    longest = Math.max(longest, run);
  });
  let current = 0;
  let i = days.length - 1;
  if (i >= 0 && days[i].count === 0) i--; // today may not have activity yet
  for (; i >= 0 && days[i].count > 0; i--) current++;
  return { current, longest };
}

function toWeeks(days) {
  const weeks = [];
  let week = new Array(new Date(days[0].date).getDay()).fill(null);
  days.forEach((d) => {
    week.push(d);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  });
  if (week.length) weeks.push(week);
  return weeks;
}

const Card = ({ children, className = "" }) => (
  <div className={`group rounded-[1.5rem] p-[1.5px] bg-gradient-to-br from-cyan-400/30 via-white/10 to-purple-500/30 hover:from-cyan-300/70 hover:to-purple-400/70 transition-all duration-500 ${className}`}>
    <div className="relative h-full overflow-hidden rounded-[calc(1.5rem-1.5px)] bg-[#070b16]/95 p-6 shadow-xl backdrop-blur-xl transition-all duration-500 group-hover:shadow-[0_25px_60px_-15px_rgba(34,211,238,0.3)]">
      {children}
    </div>
  </div>
);

const CardTitle = ({ icon, children }) => {
  const Icon = icon;
  return (
  <div className="mb-5 flex items-center gap-3">
    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/40 bg-[#0b1628] shadow-lg shadow-cyan-500/20">
      <Icon className="h-4 w-4 text-cyan-300" />
    </span>
    <h4 className="font-semibold text-white">{children}</h4>
  </div>
  );
};

export default function GitHub() {
  const [profile, setProfile] = useState(null);
  const [languages, setLanguages] = useState(null);
  const [contrib, setContrib] = useState(null);
  const [contribFailed, setContribFailed] = useState(false);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        const days = data.contributions;
        setContrib({ total: data.total.lastYear, weeks: toWeeks(days), ...computeStreaks(days) });
      })
      .catch(() => setContribFailed(true));

    fetch(`https://api.github.com/users/${USERNAME}`)
      .then((r) => (r.ok ? r.json() : null))
      .then(setProfile)
      .catch(() => {});

    fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`)
      .then((r) => (r.ok ? r.json() : null))
      .then((repos) => {
        if (!repos) return;
        const counts = {};
        repos.forEach((repo) => {
          if (repo.language) counts[repo.language] = (counts[repo.language] || 0) + 1;
        });
        const total = Object.values(counts).reduce((a, b) => a + b, 0);
        const top = Object.entries(counts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 6)
          .map(([name, count]) => ({ name, percent: Math.round((count / total) * 100) }));
        setLanguages(top);
      })
      .catch(() => {});
  }, []);

  const stats = [
    { icon: BookMarked, label: "Public Repositories", value: profile?.public_repos },
    { icon: Code2, label: "Languages Used", value: languages?.length ? `${languages.length}+` : undefined },
    { icon: CalendarDays, label: "Coding on GitHub Since", value: profile ? new Date(profile.created_at).getFullYear() : undefined },
  ];

  return (
    <section id="github" className="relative space-y-14 py-20">

      {/* Decorative glow */}
      <div className="pointer-events-none absolute left-1/2 -top-10 -z-10 h-56 w-[32rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div data-reveal className="text-center space-y-3">
        <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-cyan-300/70 font-semibold">
          <span className="h-px w-6 bg-cyan-300/50" /> Open Source <span className="h-px w-6 bg-cyan-300/50" />
        </span>
        <h3 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 drop-shadow-[0_0_25px_rgba(34,211,238,0.25)]">
          GitHub Activity
        </h3>
        <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
      </div>

      {/* Stats */}
      <div data-reveal-stagger className="grid gap-6 sm:grid-cols-3">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <Card key={idx}>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/40 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 shadow-lg shadow-cyan-500/20 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-cyan-300" />
                </span>
                <div>
                  <p className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-300">
                    {s.value ?? "—"}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-gray-500">{s.label}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Contribution heatmap */}
      {!contribFailed && (
        <Card>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <CardTitle icon={Activity}>Contribution Graph</CardTitle>
            {contrib && (
              <p className="mb-5 text-sm text-gray-400">
                <span className="font-semibold text-cyan-300">{contrib.total}</span> contributions in the last year
              </p>
            )}
          </div>
          <div className="overflow-x-auto pb-2">
            {contrib ? (
              <div className="flex min-w-[720px] gap-[3px]">
                {contrib.weeks.map((week, wi) => (
                  <div key={wi} className="flex flex-1 flex-col gap-[3px]">
                    {Array.from({ length: 7 }).map((_, di) => {
                      const day = week[di];
                      return (
                        <span
                          key={di}
                          title={day ? `${day.count} contributions on ${day.date}` : ""}
                          className="aspect-square w-full rounded-[3px] transition-transform duration-200 hover:scale-150"
                          style={{ background: day ? levelColors[day.level] : "transparent" }}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-32 w-full min-w-[720px] animate-pulse rounded-lg bg-white/5" />
            )}
          </div>
          <div className="mt-3 flex items-center justify-end gap-1.5 text-xs text-gray-500">
            Less
            {levelColors.map((c) => (
              <span key={c} className="h-3 w-3 rounded-[3px]" style={{ background: c }} />
            ))}
            More
          </div>
        </Card>
      )}

      <div data-reveal-stagger className="grid gap-6 md:grid-cols-2">
        {/* Streak */}
        <Card>
          <CardTitle icon={Flame}>Contribution Streak</CardTitle>
          {contribFailed ? (
            <img src="/streaks.png" alt="GitHub streak stats" className="w-full h-auto rounded-xl" />
          ) : (
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { label: "Total (1 yr)", value: contrib?.total },
                { label: "Current Streak", value: contrib ? `${contrib.current}d` : undefined, highlight: true },
                { label: "Longest Streak", value: contrib ? `${contrib.longest}d` : undefined },
              ].map((s) => (
                <div
                  key={s.label}
                  className={`rounded-2xl border p-4 ${s.highlight ? "border-purple-400/40 bg-purple-500/10" : "border-white/10 bg-white/5"}`}
                >
                  {s.highlight && <Flame className="mx-auto mb-1 h-5 w-5 text-purple-300" />}
                  <p className="text-2xl font-extrabold text-white">{s.value ?? "—"}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wide text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Languages */}
        <Card>
          <CardTitle icon={Code2}>Most Used Languages</CardTitle>
          {languages ? (
            <div className="space-y-4">
              <div className="flex h-3 w-full overflow-hidden rounded-full bg-white/5">
                {languages.map((l) => (
                  <span key={l.name} style={{ width: `${l.percent}%`, background: langColors[l.name] || "#22D3EE" }} />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((l) => (
                  <div key={l.name} className="flex items-center gap-2 text-sm">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: langColors[l.name] || "#22D3EE" }} />
                    <span className="text-gray-300">{l.name}</span>
                    <span className="ml-auto text-gray-500">{l.percent}%</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <img src="/githubLanguage.png" alt="Top Languages" className="w-full h-auto rounded-xl" />
          )}
        </Card>
      </div>

      {/* CTA */}
      <div className="flex justify-center">
        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-400/40"
        >
          <GithubIcon className="h-4 w-4" /> View GitHub Profile <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
