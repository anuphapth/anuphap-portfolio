import React from "react";
import { motion } from "motion/react";
import { Award, BookOpen, GraduationCap, CheckCircle } from "lucide-react";

const Education: React.FC = () => {
  const certifications = [
    /*
    { name: 'Backend Development Specialization', issuer: 'Online Learning', date: '2023' },
    { name: 'Database Management Systems', issuer: 'University Course', date: '2023' },
    { name: 'API Design Best Practices', issuer: 'Industry Standard', date: '2022' },
    */
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <span className="inline-block bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 font-label">
          Academic Journey
        </span>

        <h1 className="font-headline text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 xs:mb-6">
          Computer <span className="text-primary"> Engineering</span>
        </h1>
        <p className="font-body text-xl text-on-surface-variant leading-relaxed">
          Currently a third-year Computer Engineering student at RMUTL, focused
          on backend development. Experienced in designing and building RESTful
          APIs, working with relational databases, and developing scalable
          server-side applications.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
        {/* Main Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8"
        >
          <div className="bg-surface-container-lowest p-12 rounded-2xl border border-outline-variant/10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center text-on-primary-container shrink-0">
                <GraduationCap size={32} />
              </div>
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="font-headline text-2xl xs:text-3xl font-bold text-on-surface mb-2">
                      B.Eng. in Computer Engineering
                    </h2>
                    <p className="text-primary font-semibold text-lg mb-1">
                      Rajamangala University of Technology Lanna (RMUTL)
                    </p>
                    <p className="text-on-surface-variant font-medium mt-2 text-sm xs:text-base">
                      Cumulative GPA: 3.68
                    </p>
                  </div>
                  <span className="font-label text-xs font-bold text-on-surface-variant bg-surface-container px-3 py-1 rounded">
                    2023 — Present
                  </span>
                </div>
                <p className="font-body text-on-surface-variant leading-relaxed mb-8">
                  Developing backend systems through academic and personal
                  projects, focusing on performance optimization, database
                  design, and scalable architecture.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Data Structures and Algorithms",
                    "Database Systems",
                    "Data Communication and Networks",
                    "Web Programming",
                    "Software Design and Development",
                    "Object-Oriented Programming",
                  ].map((course) => (
                    <motion.div
                      key={course}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center gap-2 text-sm font-medium text-on-surface-variant"
                    >
                      <CheckCircle size={14} className="text-tertiary" />
                      {course}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Status / Awards Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-4 space-y-6"
        >
          <div className="bg-surface-container-low p-8 rounded-2xl text-on-surface h-full flex flex-col justify-between border border-outline-variant/10">
            <div>
              <Award size={40} className="mb-6 opacity-80" />
              <h3 className="font-headline text-2xl font-bold mb-4">
                Current Status
              </h3>
              <p className="font-body leading-relaxed opacity-90">
                Actively building backend systems and exploring open-source
                contributions on GitHub.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certifications Section (Commented out for now) */}
      {/*
      <section>
        <h2 className="font-headline text-3xl font-bold mb-12 flex items-center gap-4">
          <BookOpen className="text-primary" />
          Certifications & Specialized Training
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 hover:bg-surface-bright transition-all"
            >
              <p className="font-label text-[10px] uppercase tracking-widest font-bold text-tertiary mb-2">
                {cert.date}
              </p>
              <h4 className="font-bold text-on-surface mb-1 leading-tight">
                {cert.name}
              </h4>
              <p className="text-sm text-on-surface-variant">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </section>
      */}
    </div>
  );
};

export default Education;
