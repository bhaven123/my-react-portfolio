"use client";

import ProjectsGrid from "@/components/projects/project-grid";

export default function WorkSection() {
  return (
    <section id="work" className="py-20 lg:py-24">
      <div className="section-wrap">
        <div className="mb-10 text-center">
          <h2 className="section-title">
            My <span className="section-title-accent">Projects</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs text-slate-400 sm:text-sm lg:text-base">
            A selection of things I&apos;ve built recently — from full-stack apps
            and data platforms to deep learning research and deployment demos.
          </p>
        </div>

        <ProjectsGrid />
      </div>
    </section>
  );
}
