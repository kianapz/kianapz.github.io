import { education, continuingEducation, publications, coreStrengths } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const timelineHighlights = [
  {
    title: "Software Engineer — Balanced Plus",
    subtitle: "Client SaaS platforms, .NET / Vue / React",
    period: "Mar 2026 – Present",
  },
  {
    title: "MSc Computer Science, AI Specialization",
    subtitle: "University of Windsor",
    period: "Completed Oct 2025",
  },
  {
    title: "Full-Stack Engineer – RIRA Company",
    subtitle: "SaaS platforms, .NET / Vue / React",
    period: "Apr 2021 – Apr 2024",
  },
  {
    title: "Web Developer",
    subtitle: "Contractor",
    period: "Sep 2019 – Nov 2025",
  },
];

export default function About() {
  return (
    <section id="about" className="snap-start bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
      <SectionHeading eyebrow="Get to know me" title="About Me" />

      <div className="grid md:grid-cols-[1.4fr_1fr] gap-10">
        <Reveal delay={80} className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            I'm Kiana, an engineer with over 5 years of full-stack engineering experience and
            more than 7 years in web development.
          </p>
          <p>
            My journey started as an undergrad, working as a web development contractor, and
            continued after graduation when I joined RIRA as a full-stack engineer.
          </p>
          <p>
            I later moved to Canada to pursue a Master's in Computer Science with an AI
            specialization at the University of Windsor, graduating in October 2025.
          </p>
          <p>
            My thesis, <em>"A Goal-Driven Evolutionary Framework for the Team Formation Problem
            in Social Networks,"</em> explored how to assemble optimal teams from
            social-network structure, and I've published two AI/ML research papers in the
            field.
          </p>
          <p>Since March 2026, I've been working as a Software Engineer at Balanced Plus.</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {coreStrengths.map((s) => (
              <span
                key={s}
                className="text-xs font-medium bg-slate-900 text-orange-400 rounded-full px-3 py-1.5"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200} className="bg-white rounded-xl shadow-md p-6 space-y-5 h-fit hover:shadow-lg transition-shadow">
          {timelineHighlights.map((h, i) => (
            <div key={h.title}>
              <div className="flex gap-2">
                <span className="text-orange-500 mt-1">●</span>
                <div>
                  <p className="font-semibold text-slate-900">{h.title}</p>
                  <p className="text-sm text-slate-500">{h.subtitle}</p>
                  <p className="text-xs italic text-slate-400 mt-1">{h.period}</p>
                </div>
              </div>
              {i < timelineHighlights.length - 1 && (
                <hr className="mt-5 border-slate-100" />
              )}
            </div>
          ))}
        </Reveal>
      </div>

      {/* Education & Publications */}
      <div className="mt-24">
        <SectionHeading eyebrow="Academic background" title="Education & Publications" />

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 100} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <p className="font-semibold text-slate-900">{e.degree}</p>
              <p className="text-orange-500 text-sm mt-1">
                {e.school} · {e.period}
              </p>
              {e.detail && (
                <p className="italic text-slate-500 text-sm mt-3">{e.detail}</p>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="bg-white rounded-xl shadow-md p-6 mt-6">
          <p className="font-semibold text-slate-900 mb-4">Continuing Education</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2 text-sm text-slate-600">
            {continuingEducation.map((c) => (
              <p key={c} className="flex gap-2">
                <span className="text-orange-500">•</span>
                {c}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {publications.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className="bg-slate-900 rounded-xl p-6 hover:-translate-y-1 transition-transform">
              <p className="text-orange-400 text-sm font-semibold">{p.venue}</p>
              <p className="text-white font-Roboto font-bold text-lg mt-2">{p.title}</p>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">{p.blurb}</p>
            </Reveal>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
