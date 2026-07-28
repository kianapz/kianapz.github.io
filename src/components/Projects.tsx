import { useState } from "react";
import * as fa from "react-icons/fa";
import { projects, ProjectItem } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectModal from "./ProjectModal";

const orgStyles: Record<string, { badge: string; accent: string; pill: string }> = {
  "Balanced Plus": {
    badge: "bg-orange-50 text-orange-600",
    accent: "before:bg-orange-400",
    pill: "bg-orange-50 text-orange-600 border-orange-200",
  },
  RIRA: {
    badge: "bg-sky-50 text-sky-600",
    accent: "before:bg-sky-400",
    pill: "bg-sky-50 text-sky-600 border-sky-200",
  },
  "University of Windsor": {
    badge: "bg-violet-50 text-violet-600",
    accent: "before:bg-violet-400",
    pill: "bg-violet-50 text-violet-600 border-violet-200",
  },
  "Personal Project": {
    badge: "bg-emerald-50 text-emerald-600",
    accent: "before:bg-emerald-400",
    pill: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
};

export default function Projects() {
  const [active, setActive] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="snap-start max-w-6xl mx-auto px-6 py-20">
      <SectionHeading eyebrow="Selected work" title="Projects" />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((p, i) => {
          const style = orgStyles[p.org] ?? orgStyles["Personal Project"];
          return (
            <Reveal key={p.slug} delay={(i % 3) * 90}>
              <button
                onClick={() => setActive(p)}
                className={
                  "relative text-left w-full bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all rounded-lg p-6 h-full flex flex-col justify-between min-h-[230px] overflow-hidden " +
                  "before:content-[''] before:absolute before:left-0 before:top-0 before:h-1 before:w-full " +
                  style.accent
                }
              >
                {p.featured && (
                  <span className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-orange-500">
                    <fa.FaStar className="text-[10px]" />
                    Featured
                  </span>
                )}
                <div>
                  <span className={`inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full mb-3 ${style.badge}`}>
                    {p.org}
                  </span>
                  <p className="font-semibold text-slate-900 mb-2 pr-6">{p.title}</p>
                  <p className="text-sm text-slate-600">{p.blurb}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {p.skills.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className={`text-[11px] border rounded-full px-2.5 py-0.5 ${style.pill}`}
                      >
                        {s}
                      </span>
                    ))}
                    {p.skills.length > 4 && (
                      <span className="text-[11px] text-slate-400 px-1 py-0.5">
                        +{p.skills.length - 4} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-orange-500 text-xs font-semibold">View details</span>
                    {p.externalLink ? (
                      <fa.FaGithub className="text-slate-400" />
                    ) : (
                      <span className="text-orange-500">→</span>
                    )}
                  </div>
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
