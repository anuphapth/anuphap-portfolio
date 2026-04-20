import React from "react";
import { motion } from "motion/react";
import { Terminal, Layers, Cloud, Database, Code } from "lucide-react";

const Skills: React.FC = () => {
  const stack = [
    {
      category: "Languages",
      items: ["JavaScript", "Python", "SQL", "C++"],
    },
    {
      category: "Frontend Frameworks & Libraries",
      items: [
        "React (learning)",
        "Next.js (learning)",
        "Tailwind CSS (learning)",
      ],
    },
    {
      category: "Backend Frameworks & Tools",
      items: [
        "Node.js",
        "Express.js",
        "Restful API",
        "FastAPI",
        "TypeScript (learning)",
      ],
    },
    {
      category: "Data & Infrastructure",
      items: ["PostgreSQL", "MySQL", "Redis", "Docker"],
    },
  ];

  const toolkit = [
    {
      icon: <Code size={24} />,
      title: "Backend Logic",
      desc: "Implementing business logic, background jobs, and data processing pipelines.",
    },
    {
      icon: <Database size={24} />,
      title: "Database Systems",
      desc: "Designing relational schemas, indexing strategies, and optimizing queries for performance.",
    },
    {
      icon: <Layers size={24} />,
      title: "RESTful APIs",
      desc: "Building scalable APIs with authentication, pagination, and structured error handling.",
    },
    {
      icon: <Cloud size={24} />,
      title: "Deployment & DevOps",
      desc: "Containerizing applications with Docker and deploying backend services to cloud environments.",
    },
    {
      icon: <Code size={24} />,
      title: "Front-end Interfaces",
      desc: "Learning to build responsive UIs with React, Next.js, and modern CSS frameworks.",
    },
  ];

  const workflow = [
    {
      id: "01",
      title: "System Design Thinking",
      desc: "Designing modular and maintainable backend systems with clear separation of concerns.",
    },
    {
      id: "02",
      title: "Collaboration",
      desc: "Working in small teams, contributing to shared architecture decisions and code reviews.",
    },
    {
      id: "03",
      title: "Documentation",
      desc: "Writing clear API documentation and explaining system behavior for maintainability.",
    },
  ];

  return (
    <div>
      {/* Header */}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="inline-block bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] xs:text-xs font-bold tracking-widest uppercase mb-4 font-label"
      >
        My Skills
      </motion.span>

      <header className="mb-16 xs:mb-20 sm:mb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="font-headline text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 xs:mb-6"
        >
          Engineering <span className="text-primary">Stack</span>
        </motion.h1>

        {/* 👇 บรรทัดเดียว desktop */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-base xs:text-lg text-on-surface-variant max-w-2xl xl:max-w-none xl:whitespace-nowrap leading-relaxed"
        >
          Focused on backend development APIs, data systems, and business logic
          while growing skills in frontend interfaces.
        </motion.p>
      </header>

      {/* Core Stack */}
      <div className="mb-20 xs:mb-24 sm:mb-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8 xs:mb-10"
        >
          <Terminal className="text-primary w-6 h-6" />
          <h2 className="font-headline text-xl xs:text-2xl font-bold">
            Core Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8">
          {stack.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-surface-container-low p-6 xs:p-8 rounded-xl border border-outline-variant/10"
            >
              <h3 className="font-bold mb-4 text-primary text-sm xs:text-base">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-surface-container-high text-xs font-semibold rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Toolkit */}
      <div className="mb-20 xs:mb-24 sm:mb-32">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="font-headline text-2xl xs:text-3xl font-bold mb-8 xs:mb-12"
        >
          What I Build
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xs:gap-6">
          {toolkit.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-surface-container-low p-4 xs:p-6 rounded-lg hover:bg-surface-bright transition-all border-b-2 border-transparent hover:border-primary"
            >
              <div className="text-primary mb-4">{tool.icon}</div>
              <h3 className="font-bold mb-2 text-sm xs:text-base">
                {tool.title}
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {tool.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Workflow */}
      <div>
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="font-headline text-2xl xs:text-3xl font-bold mb-8 xs:mb-12"
        >
          How I Work
        </motion.h2>

        <div className="space-y-4 xs:space-y-6 max-w-3xl">
          {workflow.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex gap-4 xs:gap-6"
            >
              <span className="text-primary font-bold text-lg xs:text-xl">
                {item.id}
              </span>
              <div>
                <h4 className="font-bold text-base xs:text-lg mb-1">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
