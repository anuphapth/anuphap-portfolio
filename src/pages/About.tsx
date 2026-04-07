import React from "react";
import { motion } from "motion/react";
import { Terminal, LayoutTemplate, School, Code } from "lucide-react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 py-16 xs:py-20 space-y-20 xs:space-y-28">
      {/* Title */}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="inline-block bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] xs:text-xs font-bold tracking-widest uppercase mb-4 font-label"
      >
        About Me
      </motion.span>

      {/* Introduction */}
      <header className="mb-8 xs:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-headline text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 xs:mb-6">
            Engineering <span className="text-primary"> Solutions</span>
          </h1>
          <p className="font-body text-base xs:text-lg sm:text-xl text-on-surface-variant leading-relaxed max-w-2xl xs:max-w-5xl">
            I focus on solving real-world problems through well-structured
            systems, ensuring performance, scalability, and usability.
          </p>
        </motion.div>
      </header>

      {/* Featured Projects */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline text-2xl xs:text-3xl font-bold mb-8 xs:mb-12">
            Featured Projects
          </h2>
          <p className="text-on-surface-variant text-lg mb-8">
            Selected work that reflects my approach to building scalable systems
            and translating complex ideas into real world applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 items-stretch">
          {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 p-6 xs:p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition"
          >
            <div className="flex flex-col lg:flex-row justify-between gap-6 xs:gap-8">
              <div className="flex-1">
                <h3 className="font-bold text-lg xs:text-xl sm:text-2xl mb-3">
                  Bazi Informed Restaurant Business Analysis
                </h3>
                <p className="text-on-surface-variant mb-4 xs:mb-6 leading-relaxed text-sm xs:text-base">
                  Full stack recommendation system suggesting food based on
                  Bazi. Analyzes birth data to determine elemental balance and
                  maps it to suitable food categories.
                </p>
                <div className="flex flex-wrap gap-2 mb-4 xs:mb-6">
                  {["React", "Node.js", "Express", "PostgreSQL"].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-surface-container-high rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  to="/projects"
                  className="text-primary font-semibold flex items-center gap-2 text-sm xs:text-base"
                >
                  View Project →
                </Link>
              </div>

              <div className="lg:w-[280px] bg-surface-container-low p-4 xs:p-6 rounded-xl border border-outline-variant/10">
                <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-3 font-label">
                  My Role
                </p>
                <p className="font-semibold mb-2 text-sm xs:text-base">
                  Backend Developer
                </p>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
                  Designed backend architecture, implemented business logic and
                  data processing for Bazi analysis.
                </p>
                <p className="text-xs text-on-surface-variant">
                  Team of 2 developers
                </p>
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 p-6 xs:p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition"
          >
            <div className="flex flex-col lg:flex-row justify-between gap-6 xs:gap-8">
              <div className="flex-1">
                <h3 className="font-bold text-lg xs:text-xl sm:text-2xl mb-3">
                  Iot-ThiJodRot-Web
                </h3>
                <p className="text-on-surface-variant mb-4 xs:mb-6 leading-relaxed text-sm xs:text-base">
                  A responsive web application that displays real-time parking
                  slot availability collected from IoT sensors...
                </p>
                <div className="flex flex-wrap gap-2 mb-4 xs:mb-6">
                  {["Node.js", "PostgreSQL", "SSE"].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-surface-container-high rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  to="/projects"
                  className="text-primary font-semibold flex items-center gap-2 text-sm xs:text-base"
                >
                  View Project →
                </Link>
              </div>

              <div className="lg:w-[280px] bg-surface-container-low p-4 xs:p-6 rounded-xl border border-outline-variant/10">
                <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-3 font-label">
                  My Role
                </p>
                <p className="font-semibold mb-2 text-sm xs:text-base">
                  Frontend & Backend Developer
                </p>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
                  Designed and implemented the web dashboard, created backend
                  APIs...
                </p>
                <p className="text-xs text-on-surface-variant">
                  Solo Developer
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engineering Mindset */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 bg-surface-container-lowest p-6 xs:p-8 rounded-2xl border border-outline-variant/5 group hover:border-tertiary/20 transition-all"
        >
          <div className="mb-4 xs:mb-6 flex items-start gap-2">
            <LayoutTemplate className="text-tertiary w-6 h-6 xs:w-8 xs:h-8" />
            <span className="text-lg xs:text-[24px] font-label font-bold uppercase tracking-widest text-on-surface-variant">
              Core Stack
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Node.js",
              "Express",
              "PostgreSQL",
              "Docker",
              "JavaScript",
              "HTML",
              "CSS",
              "C++",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-surface-container-high rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-surface-container-lowest p-6 xs:p-8 rounded-2xl border border-outline-variant/5 hover:bg-primary-container/20 transition-all group"
        >
          <div className="mb-4 xs:mb-6">
            <LayoutTemplate className="text-tertiary w-6 h-6 xs:w-8 xs:h-8" />
          </div>
          <h3 className="font-headline text-lg xs:text-xl font-bold mb-2">
            System Thinking
          </h3>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Designing modular and scalable systems with a focus on
            maintainability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-primary p-6 xs:p-8 rounded-2xl text-on-primary flex flex-col justify-between"
        >
          <div>
            <School className="text-on-primary w-6 h-6 xs:w-8 xs:h-8" />
            <h3 className="font-headline text-lg xs:text-xl font-bold mb-1 mt-4">
              B.Eng Computer Engineering
            </h3>
          </div>
          <p className="text-xs opacity-70 tracking-wide uppercase font-label">
            Currently Studying (Year 3)
          </p>
        </motion.div>
      </section>

      {/* Development Approach */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 xs:gap-16 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline text-3xl xs:text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 xs:mb-8">
            How I Build.
          </h2>
          <p className="text-on-surface-variant text-base xs:text-lg leading-relaxed mb-6 xs:mb-8">
            I focus on practical full stack applications with clean structure...
          </p>
          <ul className="space-y-4">
            {[
              "Write clean, structured, and maintainable code",
              "Design scalable systems with clear separation of concerns",
              "Prioritize real world usability over theoretical perfection",
            ].map((item, idx) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="flex items-center gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-tertiary flex items-center justify-center text-white">
                  <Code size={12} />
                </div>
                <span className="font-semibold">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <div className="bg-tertiary-fixed-dim/20 p-6 xs:p-8 rounded-2xl border-l-4 border-tertiary">
            <p className="font-body text-lg xs:text-2xl italic text-on-surface-variant leading-relaxed mb-4 xs:mb-6">
              Building software is not just about making it work, but making it
              reliable, scalable, and easy to maintain over time.
            </p>
            <p className="font-label uppercase tracking-widest font-bold text-tertiary text-xs xs:text-sm">
              Development Approach
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
