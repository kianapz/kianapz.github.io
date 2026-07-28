import * as ai from "react-icons/ai";
import { profile } from "../data";

interface Props {
  onNavigate: (id: string) => void;
}

const quickLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export default function Footer({ onNavigate }: Props) {
  return (
    <footer className="snap-start bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">
        <div className="flex flex-col items-center sm:items-start gap-3">
          <button onClick={() => onNavigate("home")}>
            <img src="./logo.png" alt="Kiana Pz logo" className="h-9 w-auto object-contain" />
          </button>
          <p className="text-sm text-slate-500 max-w-xs text-center sm:text-left">
            {profile.tagline}
          </p>
        </div>

        <div className="flex flex-col items-center sm:items-start gap-3">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
            Quick Links
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-2 text-sm">
            {quickLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => onNavigate(l.id)}
                className="text-slate-600 hover:text-orange-500 transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-end gap-3">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
            Let's Connect
          </p>
          <div className="flex gap-3">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center"
            >
              <ai.AiOutlineMail />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center"
            >
              <ai.AiFillLinkedin />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center"
            >
              <ai.AiFillGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 py-4">
        <p className="text-center text-xs text-slate-400">
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript &amp; Tailwind.
        </p>
      </div>
    </footer>
  );
}
