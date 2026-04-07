import React from "react";
import { motion } from "motion/react";
import { Terminal, MemoryStick, Cloud, Mail } from "lucide-react";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "TechFlow Solutions",
      period: "JAN 2022 — PRESENT",
      desc: "Leading the development of a distributed microservices architecture processing over 5M daily requests. Architected the core telemetry engine using Go and Kafka, reducing latency by 40%.",
      tags: ["Golang", "Kubernetes", "gRPC"],
    },
    {
      title: "Embedded Systems Intern",
      company: "AeroDynamics Research Lab",
      period: "MAY 2021 — DEC 2021",
      desc: "Developed real-time firmware for autonomous drone stabilization systems. Implemented PID control loops on STM32 microcontrollers and optimized sensor data fusion algorithms in C++.",
      tags: ["C++", "RTOS", "ARM Cortex-M"],
      image: "https://picsum.photos/seed/lab/800/400",
    },
    {
      title: "Software Developer (Contract)",
      company: "Nexus Fintech",
      period: "JUN 2020 — APR 2021",
      desc: "Engineered a secure payment gateway integration for a high-traffic e-commerce platform. Focused on PCI-DSS compliance, data encryption, and robust error handling.",
      tags: ["Python", "PostgreSQL", "Redis"],
    },
    {
      title: "Full-Stack Development Intern",
      company: "GreenLoop Systems",
      period: "JAN 2020 — MAY 2020",
      desc: "Collaborated on a smart-grid monitoring dashboard. Optimized front-end data visualization using D3.js, enabling real-time energy consumption tracking for 50+ industrial clients.",
      tags: ["React", "D3.js", "Node.js"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 pt-20 pb-32">
      <header className="mb-24 max-w-3xl">
        <span className="font-label text-xs uppercase tracking-[0.2em] text-tertiary font-bold mb-4 block">
          Professional Journey
        </span>
        <h1 className="font-headline text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 xs:mb-6 leading-[1.1]">
          Engineering high-performance{" "}
          <span className="text-primary italic">digital systems</span> and
          scalable architectures.
        </h1>
        <p className="font-body text-lg text-on-surface-variant leading-relaxed opacity-80">
          A chronological overview of my technical contributions, ranging from
          embedded systems design to full-stack engineering at scale.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
        <aside className="hidden lg:block lg:col-span-4 sticky top-32 h-fit">
          <div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-primary">
            <h3 className="font-headline text-xl font-bold mb-4">
              Core Competencies
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Terminal className="text-primary" size={20} />
                <span className="font-label text-sm tracking-wide uppercase font-semibold">
                  System Architecture
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MemoryStick className="text-primary" size={20} />
                <span className="font-label text-sm tracking-wide uppercase font-semibold">
                  Embedded Engineering
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Cloud className="text-primary" size={20} />
                <span className="font-label text-sm tracking-wide uppercase font-semibold">
                  Cloud Infrastructure
                </span>
              </li>
            </ul>
            <div className="mt-8 pt-8 border-t border-outline-variant/20">
              <p className="font-body text-sm text-on-surface-variant italic">
                "Muad approaches every problem with an architect's precision and
                a developer's curiosity."
              </p>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-8 space-y-20">
          {experiences.map((exp, idx) => (
            <article
              key={idx}
              className={`group relative pl-8 md:pl-12 border-l ${idx === experiences.length - 1 ? "border-transparent" : "border-surface-container-highest"}`}
            >
              <div className="absolute -left-2.5 top-0 w-5 h-5 bg-surface-container-highest rounded-full border-4 border-surface ring-4 ring-transparent group-hover:ring-primary-container transition-all"></div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6">
                <div>
                  <h2 className="font-headline text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">
                    {exp.title}
                  </h2>
                  <p className="font-headline text-lg font-semibold text-primary-dim">
                    {exp.company}
                  </p>
                </div>
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant/60 mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <div className="space-y-4 max-w-2xl">
                <p className="font-body text-on-surface-variant leading-relaxed">
                  {exp.desc}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface-container-high px-3 py-1 font-label text-[10px] tracking-wider uppercase text-on-surface-variant font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {exp.image && (
                <div className="mt-8 relative h-48 w-full md:w-4/5 overflow-hidden rounded-xl">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      <section className="mt-32 p-12 bg-primary rounded-xl text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        <h2 className="font-headline text-3xl font-bold text-on-primary mb-6">
          Looking for a technical architect?
        </h2>
        <p className="font-body text-on-primary/80 mb-8 max-w-xl mx-auto">
          I am always open to discussing complex systems, innovative hardware
          projects, and large-scale software engineering opportunities.
        </p>
        <button className="inline-flex items-center gap-2 bg-tertiary-container text-on-tertiary-container px-8 py-4 rounded-md font-headline font-bold hover:bg-tertiary-fixed transition-colors">
          <Mail size={20} />
          Get in touch
        </button>
      </section>
    </div>
  );
};

export default Experience;
