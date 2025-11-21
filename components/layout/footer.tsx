"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    {
      href: "https://www.linkedin.com/in/bhaven-naik/",
      icon: faLinkedinIn,
      label: "LinkedIn",
    },
    { href: "https://github.com/bhaven123", icon: faGithub, label: "GitHub" },
    { href: "https://twitter.com/bhavennaik", icon: faTwitter, label: "Twitter" },
    {
      href: "https://www.facebook.com/bhaven.naik.1/",
      icon: faFacebook,
      label: "Facebook",
    },
  ];

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="section-wrap flex flex-col items-center justify-between gap-3 py-5 text-xs text-slate-500 md:flex-row">
        <span>© {year} Created by Bhaven Naik</span>
        <div className="flex items-center gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-slate-300 hover:border-sky-400 hover:text-sky-400 transition"
              aria-label={link.label}
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
