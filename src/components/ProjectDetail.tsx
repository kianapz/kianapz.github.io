import { Link, Navigate, useParams } from "react-router-dom";
import { projectDetails } from "../data";

export default function ProjectDetail() {
  const { slug } = useParams();
  const detail = slug ? projectDetails[slug] : undefined;

  if (!detail) return <Navigate to="/projects" replace />;

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <p className="text-sm text-slate-400 mb-4">
        <Link to="/projects" className="hover:text-orange-500">
          Projects Overview
        </Link>{" "}
        › <span className="text-orange-500">{detail.title}</span>
      </p>

      <h1 className="font-Roboto font-bold text-3xl sm:text-4xl text-slate-900 mb-1">
        {detail.title}
      </h1>
      <p className="italic text-slate-500 mb-8">{detail.company}</p>

      <ul className="space-y-4 max-w-2xl">
        {detail.bullets.map((b) => (
          <li key={b} className="flex gap-3 text-slate-700 leading-relaxed">
            <span className="text-orange-500 mt-1.5 text-xs">●</span>
            {b}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-10">
        {detail.tags.map((t) => (
          <span
            key={t}
            className="text-xs bg-orange-50 text-orange-600 border border-orange-200 rounded-full px-3 py-1"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
