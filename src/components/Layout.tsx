import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useScrollToTop } from "../hooks/useScrollToTop";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Scroll to top on route change
  useScrollToTop();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <nav className="glass-nav h-16 sm:h-20">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 h-full flex items-center justify-between">
          <Link
            to="/"
            className="text-lg xs:text-xl font-bold tracking-tighter text-on-surface font-headline"
          >
            anuphap
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-headline tracking-tight text-xs sm:text-sm font-semibold transition-colors pb-1 border-b-2 ${
                    isActive
                      ? "text-on-surface border-outline"
                      : "text-outline hover:text-on-surface border-transparent"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            {/* --/
                        <button className="bg-primary text-on-primary px-4 xs:px-6 py-2 rounded-lg font-semibold text-xs sm:text-sm active:scale-95 transition-transform duration-150 hover:opacity-90 editorial-shadow">
              Resume
            </button>
            / */}
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-on-surface"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 sm:top-20 left-0 w-full bg-surface border-b border-outline-variant/10 p-6 xs:p-8 flex flex-col gap-4 lg:hidden z-40 shadow-xl"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-headline text-base xs:text-lg font-semibold ${
                      isActive ? "text-primary" : "text-outline"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <button className="bg-primary text-on-primary px-6 py-3 rounded-lg font-semibold text-center mt-4">
                Resume
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow py-16 xs:py-20">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8">{children}</div>
      </main>

      <footer className="w-full py-8 xs:py-10 sm:py-12 border-t border-outline-variant/10 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">
          <div className="flex flex-col items-center lg:items-start gap-2">
            <span className="text-on-surface-variant font-body text-xs tracking-wide uppercase text-center lg:text-left">
              © 2026 Anuphap. All rights reserved.
            </span>
          </div>

          <div className="flex gap-6 xs:gap-8">
            <a
              href={
                import.meta.env.VITE_GITHUB_URL ||
                "https://github.com/anuphapth"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-outline hover:text-tertiary transition-colors font-body text-xs tracking-wide uppercase"
            >
              GitHub
            </a>
            <a
              href={
                import.meta.env.VITE_LINKEDIN_URL ||
                "https://www.linkedin.com/in/anuphap-thianprayoon-580248242/"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-outline hover:text-tertiary transition-colors font-body text-xs tracking-wide uppercase"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
