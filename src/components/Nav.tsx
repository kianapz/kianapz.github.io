import { useState } from "react";
import * as io from "react-icons/io";
import * as hi from "react-icons/hi";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Work Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

interface Props {
  active: string;
  onNavigate: (id: string) => void;
  scrolled: boolean;
  progress: number;
}

export default function Nav({ active, onNavigate, scrolled, progress }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <nav
      className={
        "w-full bg-slate-900 shrink-0 z-40 relative transition-shadow duration-300 " +
        (scrolled ? "shadow-lg shadow-black/20" : "")
      }
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <button onClick={() => go("home")} className="shrink-0" aria-label="Kiana Pezeshki — home">
          <img src="./logo-dark.png" alt="Kiana Pz logo" className="h-9 sm:h-10 w-auto object-contain" />
        </button>

        <ul className="hidden md:flex items-center gap-8 font-Roboto text-sm">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={
                  "relative pb-1 transition-colors " +
                  (active === l.id
                    ? "text-orange-400"
                    : "text-slate-200 hover:text-orange-300")
                }
              >
                {l.label}
                <span
                  className={
                    "absolute left-0 -bottom-0 h-0.5 bg-orange-400 transition-all duration-300 " +
                    (active === l.id ? "w-full" : "w-0")
                  }
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="./Kiana-Pz-CV.pdf"
            download
            className="hidden md:flex items-center gap-1 text-xs text-slate-300 hover:text-orange-300 transition-colors"
          >
            <io.IoMdDownload />
            Resume
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden text-white text-2xl"
          >
            {menuOpen ? <hi.HiX /> : <hi.HiMenu />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={
          "md:hidden overflow-hidden transition-[max-height] duration-300 ease-out bg-slate-900 border-t  " +
          (menuOpen ? "max-h-96" : "max-h-0")
        }
      >
        <ul className="flex flex-col px-6 py-4 gap-4 font-Roboto text-sm">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={active === l.id ? "text-orange-400" : "text-slate-200"}
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <a href="./Kiana-Pz-CV.pdf" download className="flex items-center gap-1 text-slate-300">
              <io.IoMdDownload />
              Download Resume
            </a>
          </li>
        </ul>
      </div>

      {/* scroll progress */}
      <div className="h-0.5 w-full bg-slate-800">
        <div
          className="h-full bg-orange-500 transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </nav>
  );
}
