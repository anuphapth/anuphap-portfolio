import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import profileImg from "../assets/profile.png";

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh] flex items-center py-16 xs:py-20 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full mb-6 xs:mb-8">
              <Terminal size={14} className="xs:w-4 xs:h-4" />
              <span className="font-label text-[10px] xs:text-xs uppercase tracking-widest font-bold">
                Build & Solve
              </span>
            </div>

            <h1 className="font-headline text-5xl xs:text-6xl sm:text-7xl font-extrabold tracking-tighter text-on-surface mb-6 xs:mb-8 text-left">
              <span className="block">Anuphap</span>
              <span className="block pl-[1.05ch] sm:pl-0 text-primary italic">
                Thianprayoon
              </span>
            </h1>

            <p className="font-body text-lg xs:text-xl text-on-surface-variant max-w-lg xs:max-w-xl mb-8 xs:mb-12 leading-relaxed">
              I am a{" "}
              <span className="font-semibold text-on-surface">
                Computer Engineering student
              </span>{" "}
              passionate about technology and solving complex problems. I build
              and experiment with full stack systems, focusing on how each layer
              works together to deliver efficient solutions.
            </p>

            <div className="flex flex-col sm:flex-wrap sm:flex-row gap-4">
              <Link
                to="/projects"
                className="bg-primary text-on-primary px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:translate-y-[-2px] transition-all editorial-shadow text-sm sm:text-base w-full sm:w-auto"
              >
                Explore My Projects
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-primary border border-outline-variant/20 hover:bg-surface-container-low transition-colors text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative group mt-8 lg:mt-0"
          >
            <div className="absolute inset-0 bg-tertiary-container/30 rounded-full blur-3xl group-hover:bg-tertiary-container/50 transition-colors duration-700"></div>
            <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden editorial-shadow border border-surface-container">
              <img
                src={profileImg}
                alt="Muad Portrait"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/4 xs:w-1/3 h-full bg-surface-container-low -z-10 skew-x-12 translate-x-10 xs:translate-x-20 hidden sm:block"></div>
      </section>
    </div>
  );
};

export default Home;
