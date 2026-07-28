import * as fa from "react-icons/fa";
import { jobs } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const companyIcon: Record<string, JSX.Element> = {
  "Balanced Plus": <fa.FaBuilding />,
  Outlier: <fa.FaRobot />,
  "University of Windsor": <fa.FaUniversity />,
  "RIRA Company": <fa.FaCode />,
  Contractor: <fa.FaLaptopCode />,
};

export default function WorkExperience() {
  return (
    <section id="experience" className="snap-start bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <SectionHeading eyebrow="Where I've worked" title="Work Experience" />

        <div className="relative border-l border-slate-200 ml-4">
          {jobs.map((job, i) => (
            <Reveal key={job.title + job.company} delay={Math.min(i, 4) * 80} className="relative pl-10 pb-10">
              <span
                className={
                  "absolute -left-[19px] top-0 w-9 h-9 rounded-full flex items-center justify-center text-sm ring-4 ring-white " +
                  (job.current
                    ? "bg-orange-500 text-white"
                    : "bg-slate-100 text-slate-500 border border-slate-200")
                }
              >
                {companyIcon[job.company] ?? <fa.FaBriefcase />}
              </span>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className="font-semibold text-slate-900">
                  {job.title}{" "}
                  <span className="text-orange-500 font-normal">{job.company}</span>
                </p>
                {job.current && (
                  <span className="text-[10px] font-bold uppercase tracking-wide bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full">
                    Current
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <p className="text-sm text-slate-500">{job.location}</p>
                <p className="italic text-sm text-slate-400">{job.period}</p>
              </div>
              <ul className="mt-2 space-y-1">
                {job.bullets.map((b) => (
                  <li key={b} className="text-sm text-slate-600 leading-relaxed">
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
