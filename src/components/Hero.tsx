import * as fa from "react-icons/fa";
import { profile } from "../data";
import Reveal from "./Reveal";

interface Props {
  onNavigate: (id: string) => void;
}

const stats = [
  { value: "5+", label: "Years Full-Stack" },
  { value: "Enterprise", label: "SaaS Delivery" },
  { value: "Published", label: "AI/ML Researcher" },
  { value: "Client-Facing", label: "Technical Ownership" },
];

export default function Hero({ onNavigate }: Props) {
  return (
    <section
      id="home"
      className="snap-start relative w-full min-h-[calc(100vh-4rem)] flex flex-col justify-end overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(./hero-code.png)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/85 to-slate-900/40" />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pt-32">
        <Reveal>
          <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-4">
            {profile.location}
          </p>
          <h1 className="font-Roboto font-bold text-white text-4xl sm:text-6xl leading-tight max-w-2xl">
            Software &amp; <span className="text-orange-400">AI Engineer</span>
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 text-slate-200 text-xl">I'm {profile.name}</p>
          <p className="mt-2 text-slate-300 max-w-xl">{profile.tagline}</p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate("about")}
              className="bg-orange-500 hover:bg-orange-600 text-slate-900 font-semibold px-6 py-3 rounded-md transition-all hover:-translate-y-0.5 shadow-lg shadow-orange-500/20"
            >
              About Me
            </button>
            <button
              onClick={() => onNavigate("experience")}
              className="border border-slate-300 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-md transition-all hover:-translate-y-0.5"
            >
              See Work Experience
            </button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={340} className="relative z-10 mt-16">
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-orange-400 font-Roboto font-bold text-lg sm:text-2xl leading-snug">
                  {s.value}
                </p>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <button
        onClick={() => onNavigate("about")}
        aria-label="Scroll to About"
        className="absolute z-10 left-1/2 -translate-x-1/2 bottom-3 text-slate-300 hover:text-orange-300 animate-bounce"
      >
        <fa.FaChevronDown />
      </button>
    </section>
  );
}
