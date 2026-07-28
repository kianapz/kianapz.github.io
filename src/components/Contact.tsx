import * as ai from "react-icons/ai";
import { profile } from "../data";
import Reveal from "./Reveal";

const rows = [
  {
    icon: <ai.AiOutlineMail />,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    bg: "bg-orange-500",
  },
  {
    icon: <ai.AiFillLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/kiana-pezeshki",
    href: profile.linkedin,
    bg: "bg-sky-600",
  },
  {
    icon: <ai.AiFillGithub />,
    label: "GitHub",
    value: "github.com/kianapz",
    href: profile.github,
    bg: "bg-orange-500",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="snap-start w-full min-h-[calc(100vh-4rem)] bg-slate-900 flex items-center"
    >
      <div className="max-w-4xl mx-auto px-6 py-20 w-full">
        <Reveal>
          <h2 className="font-Roboto font-bold text-4xl sm:text-5xl">
            <span className="text-white">CONTACT </span>
            <span className="text-orange-400">ME</span>
          </h2>
          <p className="text-slate-300 mt-4 max-w-lg">
            Let's build something great together. Open to full-stack and AI-adjacent
            engineering roles.
          </p>
        </Reveal>

        <div className="mt-16 space-y-8">
          {rows.map((r, i) => (
            <Reveal key={r.label} delay={i * 100}>
              <a href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 group w-fit">
                <span
                  className={`w-11 h-11 rounded-md ${r.bg} text-white flex items-center justify-center text-xl transition-transform group-hover:-translate-y-0.5`}
                >
                  {r.icon}
                </span>
                <span>
                  <p className="text-slate-400 text-xs">{r.label}</p>
                  <p className="text-white font-semibold group-hover:text-orange-300 transition-colors">
                    {r.value}
                  </p>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <p className="mt-20 italic text-slate-500 text-sm">
          Let's Build Something Great Together
        </p>
      </div>
    </section>
  );
}
