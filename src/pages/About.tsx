import React from "react";
import { motion } from "motion/react";
import { LayoutTemplate, School, Code } from "lucide-react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="space-y-20 xs:space-y-28">
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
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-headline text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 xs:mb-6">
            Engineering <span className="text-primary">Solutions</span>
          </h1>
          <p className="font-body text-base xs:text-lg sm:text-xl text-on-surface-variant leading-relaxed max-w-3xl lg:whitespace-nowrap">
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
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline text-2xl xs:text-3xl font-bold mb-8 xs:mb-12">
            Featured Projects
          </h2>

          <p className="text-on-surface-variant text-lg mb-8 max-w-3xl lg:whitespace-nowrap">
            Selected work that reflects my approach to building scalable systems
            and translating complex ideas into real world applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10">
          {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 p-6 xs:p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition"
          >
            <div className="flex flex-col lg:flex-row justify-between gap-6 xs:gap-8">
              <div className="flex-1">
                <h3 className="font-bold text-lg xs:text-xl sm:text-2xl mb-3">
                  Bazi Informed Restaurant Business Analysis
                </h3>

                <p className="text-on-surface-variant mb-6 leading-relaxed text-sm xs:text-base">
                  Full stack recommendation system suggesting food based on
                  Bazi. Analyzes birth data to determine elemental balance and
                  maps it to suitable food categories.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
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
                  className="text-primary font-semibold flex items-center gap-2"
                >
                  View Project →
                </Link>
              </div>

              <div className="lg:w-[280px] bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
                <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-3 font-label">
                  My Role
                </p>
                <p className="font-semibold mb-2">Backend Developer</p>
                <p className="text-sm text-on-surface-variant mb-4">
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
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 p-6 xs:p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition"
          >
            <div className="flex flex-col lg:flex-row justify-between gap-6 xs:gap-8">
              <div className="flex-1">
                <h3 className="font-bold text-lg xs:text-xl sm:text-2xl mb-3">
                  IoT-ThiJodRot-Web
                </h3>

                <p className="text-on-surface-variant mb-6 text-sm xs:text-base">
                  A responsive web application that displays real-time parking
                  slot availability collected from IoT sensors.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Node.js", "PostgreSQL", "SSE"].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-surface-container-high rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link to="/projects" className="text-primary font-semibold">
                  View Project →
                </Link>
              </div>

              <div className="lg:w-[280px] bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
                <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-3 font-label">
                  My Role
                </p>
                <p className="font-semibold mb-2">
                  Frontend & Backend Developer
                </p>
                <p className="text-sm text-on-surface-variant mb-4">
                  Designed dashboard and backend APIs.
                </p>
                <p className="text-xs text-on-surface-variant">
                  Solo Developer
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core + Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/5">
          <div className="mb-6 flex items-center gap-2">
            <LayoutTemplate className="text-tertiary" />
            <span className="font-bold uppercase tracking-widest">
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
              "C++",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-surface-container-high rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-primary p-8 rounded-2xl text-on-primary">
          <School />
          <h3 className="font-bold mt-4">B.Eng Computer Engineering</h3>
          <p className="text-xs opacity-70">Currently Studying</p>
        </div>
      </section>
    </div>
  );
};

export default About;
