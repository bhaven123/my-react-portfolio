"use client";

import Image from "next/image";
import {
  faPython,
  faBootstrap,
  faDocker,
  faAws,
  faLinux,
  faWindows,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-24">
      <div className="section-wrap flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
        {/* Left: heading + avatar */}
        <div className="flex flex-col items-center gap-8 lg:w-1/3 lg:items-start">
          <h2 className="section-title">
            About <span className="section-title-accent">Me!</span>
          </h2>

          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-sky-500/30 blur-xl" />
            <Image
              src="/assets/profile-picture.png"
              alt="Profile Pic"
              width={260}
              height={260}
              className="relative h-52 w-52 rounded-full border border-slate-600 object-cover shadow-xl lg:h-64 lg:w-64"
            />
          </div>
        </div>

        {/* Right: content */}
        <div className="space-y-5 text-slate-200 lg:w-2/3">
          <h3 className="text-2xl font-semibold text-slate-100 sm:text-3xl lg:text-4xl">
            👋 Hi! I&apos;m Bhaven Naik
          </h3>

          <p className="text-sm leading-relaxed text-slate-200 sm:text-base lg:text-lg">
            I&apos;m an AI Consultant at Lemay.ai passionate about transforming
            data into actionable insights and building robust AI solutions. My
            expertise spans MLOps, Solution Architecture, Data Science, Machine
            Learning, and Deep Learning.
          </p>

          <p className="text-sm leading-relaxed text-slate-200 sm:text-base lg:text-lg">
            I love solving complex problems and delivering scalable, efficient
            systems—from end-to-end ML pipelines to cloud-native production
            deployments. I care a lot about clean interfaces, observability, and
            making research actually shippable.
          </p>

          <p className="text-sm leading-relaxed text-slate-200 sm:text-base lg:text-lg">
            🚀 Let&apos;s connect and collaborate on exciting AI and data science
            ventures!
          </p>

          {/* Experience */}
          <div className="pt-3 space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.23em] text-slate-400 sm:text-sm">
              Experience
            </h4>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-200 sm:text-base lg:text-[1.05rem]">
              <li>
                Artificial Intelligence Consultant at Lemay.ai (2023–Present)
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div className="pt-3 space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.23em] text-slate-400 sm:text-sm">
              Technical Skills
            </h4>
            <ul className="space-y-2 text-sm text-slate-200 sm:text-base lg:text-[1.02rem]">
              <li>
                <span className="font-semibold">ML &amp; Data:</span> PyTorch,
                TensorFlow, Keras, Scikit-Learn, Hugging Face, RL, Computer
                Vision, Pandas, NumPy, PySpark, MLflow, DVC, Airflow,
                Matplotlib, Power BI
              </li>
              <li>
                <span className="font-semibold">MLOps &amp; DevOps:</span> Git,
                GitHub, GitLab, Bitbucket, Docker{" "}
                <FontAwesomeIcon
                  icon={faDocker}
                  className="text-sky-400 inline-block"
                />
                , Kubernetes, Airflow, MLflow, DVC, Terraform, Ansible
              </li>
              <li>
                <span className="font-semibold">Programming &amp; Web:</span>{" "}
                Python{" "}
                <FontAwesomeIcon
                  icon={faPython}
                  className="text-yellow-300 inline-block"
                />
                , JavaScript (Node.js), FastAPI, Flask, Express, React, Gradio,
                HTML5, CSS3, Bootstrap{" "}
                <FontAwesomeIcon
                  icon={faBootstrap}
                  className="text-purple-400 inline-block"
                />
              </li>
              <li>
                <span className="font-semibold">Cloud &amp; Infra:</span> AWS{" "}
                <FontAwesomeIcon
                  icon={faAws}
                  className="text-orange-400 inline-block"
                />
                , Azure, Hadoop, Sqoop, Hive, MySQL, MongoDB
              </li>
              <li>
                <span className="font-semibold">Operating Systems:</span> Linux{" "}
                <FontAwesomeIcon icon={faLinux} className="inline-block" />, macOS{" "}
                <FontAwesomeIcon icon={faApple} className="inline-block" />,
                Windows{" "}
                <FontAwesomeIcon icon={faWindows} className="inline-block" />
              </li>
              <li>
                <span className="font-semibold">Tools:</span> VS Code, NeoVim,
                JetBrains, Jupyter, Anaconda, Jira, Slack, Zoom, MS Teams,
                Discord
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="pt-3 space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.23em] text-slate-400 sm:text-sm">
              Education
            </h4>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-200 sm:text-base lg:text-[1.05rem]">
              <li>
                Master of Applied Computer Science – St. Francis Xavier
                University (2020–2022)
              </li>
              <li>
                Bachelor of Computer Engineering – University of Mumbai
                (2016–2020)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
