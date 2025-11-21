"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PROJECTS_DATA from "./project-data";

export default function ProjectsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {PROJECTS_DATA.map((project, index) => (
        <article
          key={project.title}
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg shadow-slate-950/60 transition hover:-translate-y-1.5 hover:border-sky-500/80 hover:bg-slate-900 lg:p-6"
          style={{ animationDelay: `${index * 60}ms` }}
        >
          {/* Image */}
          <div className="relative mb-4 overflow-hidden rounded-xl border border-slate-800">
            <Image
              src={project.image}
              alt={project.title}
              width={640}
              height={360}
              className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.03] lg:h-52"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          {/* Header */}
          <div className="mb-2 flex items-start justify-between gap-3">
            <div>
              <h3 className="text-base font-semibold text-slate-100 sm:text-lg lg:text-xl">
                {project.title}
              </h3>
              <p className="text-xs text-slate-400 sm:text-[0.8rem] lg:text-sm">
                {project.role}
              </p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-200 hover:border-sky-400 hover:text-sky-400 transition"
            >
              <FontAwesomeIcon icon={project.linkIcon} className="text-xs" />
            </a>
          </div>

          <p className="mb-3 line-clamp-3 text-xs text-slate-300 sm:text-sm lg:text-[0.95rem]">
            {project.shortText}
          </p>

          {/* Tools */}
          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full bg-slate-900/80 px-2.5 py-1 text-[0.7rem] text-slate-200 ring-1 ring-slate-700/70 lg:text-[0.75rem]"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Description */}
          <details className="mt-auto rounded-xl border border-slate-800 bg-slate-950/70 p-3 text-xs text-slate-200 sm:text-[0.8rem] lg:text-sm">
            <summary className="flex cursor-pointer items-center justify-between font-medium text-slate-100">
              What I did
              <span className="text-[0.6rem] text-slate-400 lg:text-[0.65rem]">
                Click to expand
              </span>
            </summary>
            <ul className="mt-2 max-h-44 space-y-1.5 overflow-y-auto text-xs text-slate-300 sm:text-[0.8rem] lg:text-sm">
              {project.description.map((item, i) => (
                <li key={i} className="list-disc pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </details>
        </article>
      ))}
    </div>
  );
}
