import { useState } from "react";
import * as fa from "react-icons/fa";
import { skillCards, skillGroups, SkillCard } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, JSX.Element> = {
  genai: <fa.FaRobot />,
  code: <fa.FaCode />,
  backend: <fa.FaServer />,
  devops: <fa.FaCogs />,
  database: <fa.FaDatabase />,
  security: <fa.FaShieldAlt />,
  ml: <fa.FaBrain />,
  dataviz: <fa.FaChartBar />,
  web: <fa.FaGlobe />,
  soft: <fa.FaUsers />,
  frontend: <fa.FaLaptopCode />,
};

const groupStyles: Record<SkillCard["group"], { icon: string; pill: string; ring: string }> = {
  Development: {
    icon: "bg-orange-100 text-orange-500",
    pill: "bg-orange-50 text-orange-600 border-orange-200",
    ring: "hover:ring-orange-200",
  },
  "Data & AI": {
    icon: "bg-violet-100 text-violet-500",
    pill: "bg-violet-50 text-violet-600 border-violet-200",
    ring: "hover:ring-violet-200",
  },
  Infrastructure: {
    icon: "bg-sky-100 text-sky-500",
    pill: "bg-sky-50 text-sky-600 border-sky-200",
    ring: "hover:ring-sky-200",
  },
  "Human Skills": {
    icon: "bg-emerald-100 text-emerald-500",
    pill: "bg-emerald-50 text-emerald-600 border-emerald-200",
    ring: "hover:ring-emerald-200",
  },
};

export default function Skills() {
  const [filter, setFilter] = useState<(typeof skillGroups)[number]>("All");

  const visible = filter === "All" ? skillCards : skillCards.filter((c) => c.group === filter);

  return (
    <section id="skills" className="snap-start bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeading eyebrow="What I bring" title="Skills" />

        <Reveal delay={80} className="flex flex-wrap gap-2 mb-10">
          {skillGroups.map((g) => (
            <button
              key={g}
              onClick={() => setFilter(g)}
              className={
                "text-xs sm:text-sm font-semibold px-4 py-2 rounded-full border transition-colors " +
                (filter === g
                  ? "bg-slate-900 text-orange-400 border-slate-900"
                  : "bg-white text-slate-600 border-slate-200 hover:border-orange-300 hover:text-orange-500")
              }
            >
              {g}
            </button>
          ))}
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visible.map((card, i) => {
            const style = groupStyles[card.group];
            return (
              <Reveal
                key={card.title}
                delay={(i % 3) * 90}
                className={
                  "bg-white rounded-xl shadow-md p-6 ring-1 ring-transparent hover:shadow-lg hover:-translate-y-1 transition-all " +
                  style.ring
                }
              >
                <div className={`w-11 h-11 rounded-md flex items-center justify-center text-xl mb-4 ${style.icon}`}>
                  {iconMap[card.icon]}
                </div>
                <p className="font-semibold text-slate-900 mb-3">{card.title}</p>
                <div className="flex flex-wrap gap-1.5">
                  {card.items.map((item) => (
                    <span
                      key={item}
                      className={`text-xs border rounded-full px-2.5 py-1 ${style.pill}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
