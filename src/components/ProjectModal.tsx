import { useEffect } from "react";
import * as fa from "react-icons/fa";
import { ProjectItem } from "../data";

interface Props {
  project: ProjectItem;
  onClose: () => void;
}

const orgBadge: Record<string, string> = {
  "Balanced Plus": "bg-orange-50 text-orange-600",
  RIRA: "bg-sky-50 text-sky-600",
  "University of Windsor": "bg-violet-50 text-violet-600",
  "Personal Project": "bg-emerald-50 text-emerald-600",
};

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const badge = orgBadge[project.org] ?? orgBadge["Personal Project"];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white flex items-start justify-between p-6 border-b border-slate-100">
          <div>
            <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2 ${badge}`}>
              {project.org}
            </span>
            <h3 className="font-Roboto font-bold text-xl sm:text-2xl text-slate-900">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-slate-400 hover:text-slate-700 transition-colors text-xl p-1 shrink-0"
          >
            <fa.FaTimes />
          </button>
        </div>

        <div className="p-6">
          <ul className="space-y-3">
            {project.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-slate-700 text-sm leading-relaxed">
                <span className="text-orange-500 mt-1.5 text-xs">●</span>
                {b}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.skills.map((s) => (
              <span
                key={s}
                className="text-xs bg-orange-50 text-orange-600 border border-orange-200 rounded-full px-3 py-1"
              >
                {s}
              </span>
            ))}
          </div>

          {project.externalLink && (
            <a
              href={project.externalLink.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-sky-600 hover:text-sky-700"
            >
              <fa.FaGithub />
              {project.externalLink.label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
