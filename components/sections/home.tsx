"use client";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="w-full pt-20 sm:pt-24 lg:pt-28 xl:pt-32"
    >
      <div className="section-wrap flex min-h-[70vh] lg:min-h-[80vh] items-center justify-start">
        <div className="max-w-3xl lg:max-w-4xl space-y-6">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-fuchsia-400 sm:text-xs">
            Hi, my name is
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl xl:text-7xl">
            Bhaven Naik.
          </h1>

          <h2 className="text-lg font-semibold text-slate-200 sm:text-xl lg:text-3xl xl:text-[2rem]">
            I&apos;m an 🤖 Artificial Intelligence Consultant at{" "}
            <span className="text-sky-300">Lemay.ai</span>
          </h2>

          <p className="max-w-2xl text-sm text-slate-300 sm:text-base lg:text-lg xl:text-xl">
            🌟 I help teams turn data and machine learning into real,
            production-grade products. From MLOps and solution architecture to
            deep learning research, I love building AI systems that actually
            ship.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#work"
              className="rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-sky-500/25 transition hover:bg-sky-400"
            >
              View my projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-600 px-6 py-2.5 text-sm font-medium text-slate-200 hover:border-slate-300 hover:bg-slate-900 transition"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
