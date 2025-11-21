"use client";

import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 lg:py-24">
      <div className="section-wrap">
        <div className="mx-auto max-w-2xl">
          <h2 className="section-title">
            Contact <span className="section-title-accent">Me!</span>
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base lg:text-[1.05rem]">
            Want to talk about AI, MLOps, or a project you&apos;re working on?
            Drop me a message and I&apos;ll get back to you.
          </p>

          <form
            method="POST"
            action="https://getform.io/f/70a7734a-55fd-4bb8-a0f6-54e393d648d8"
            className="mt-8 space-y-5"
            onSubmit={() => setSubmitted(true)}
          >
            <div className="flex flex-col gap-5 sm:flex-row">
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="mb-1 block text-xs font-medium text-slate-300 sm:text-sm"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Jane Doe"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-slate-100 shadow-sm outline-none transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:text-base"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="mb-1 block text-xs font-medium text-slate-300 sm:text-sm"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-slate-100 shadow-sm outline-none transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:text-base"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-xs font-medium text-slate-300 sm:text-sm"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell me a bit about what you’re working on..."
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-slate-100 shadow-sm outline-none transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:text-base"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-sky-500/30 transition hover:bg-sky-400"
            >
              Send message
            </button>

            {submitted && (
              <p className="pt-2 text-xs text-emerald-400 sm:text-sm">
                Thanks! Your message has been submitted.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
