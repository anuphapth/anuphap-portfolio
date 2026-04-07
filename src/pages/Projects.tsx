import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Github,
  ExternalLink,
  Star,
  GitFork,
  RefreshCw,
  Database,
  Loader2,
} from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

const projectTitles: Record<string, string> = {
  "Bazi-informed-Restaurant-Business-Analysis": "Restaurant Analytics Platform",
  "Iot-ThiJodRot-Web": "Iot ThiJodRot ",
};

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const githubUsername = import.meta.env.VITE_GITHUB_URL
          ? import.meta.env.VITE_GITHUB_URL.split("/").pop()
          : "anuphapth";

        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`,
        );
        if (!response.ok) throw new Error("Failed to fetch repositories");
        const data: Repo[] = await response.json();

        const selectedRepos = data.filter((repo) =>
          [
            "Bazi-informed-Restaurant-Business-Analysis",
            "Iot-ThiJodRot-Web",
          ].includes(repo.name),
        );

        setRepos(selectedRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      {/* Header */}
      <header className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 font-label"
            >
              My Projects
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-headline text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 xs:mb-6 leading-tight"
            >
              Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-lg text-on-surface-variant leading-relaxed max-w1-xl"
            >
              Practical backend development projects focused on APIs, databases,
              and scalable system design. Data is automatically synced from
              GitHub.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl border border-outline-variant/10"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
              <RefreshCw className={loading ? "animate-spin" : ""} size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-outline">
                Live Status
              </p>
              <p className="text-sm font-medium text-on-surface">
                {loading ? "Syncing..." : "Synced with GitHub repositories"}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </header>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="animate-spin text-primary mb-4" size={48} />
          <p className="font-headline font-bold text-on-surface-variant">
            Fetching Repositories...
          </p>
        </div>
      ) : error ? (
        <div className="bg-error-container text-on-error-container p-8 rounded-2xl text-center">
          <p className="font-bold text-xl mb-2">Error loading projects</p>
          <p>{error}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo, idx) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/10 overflow-hidden hover:border-primary/30 transition-all flex flex-col"
            >
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-surface-container rounded-xl text-primary">
                    <Database size={24} />
                  </div>
                  <div className="flex gap-4 text-outline group-hover:text-primary transition-colors">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="font-headline text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {projectTitles[repo.name] || repo.name}
                </h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6 line-clamp-3">
                  {repo.description ||
                    "Backend-focused project involving API design, database integration, and system architecture."}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {repo.language && (
                    <span className="bg-surface-container-high text-[10px] px-2 py-1 rounded font-bold text-on-surface-variant uppercase tracking-wider">
                      {repo.language}
                    </span>
                  )}
                </div>
              </div>

              <div className="px-8 py-4 bg-surface-container-low border-t border-outline-variant/10 flex justify-between items-center">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1 text-xs font-bold text-on-surface-variant">
                    <Star size={14} className="text-tertiary" />
                    {repo.stargazers_count}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-on-surface-variant">
                    <GitFork size={14} className="text-primary" />
                    {repo.forks_count}
                  </div>
                </div>
                <div className="text-[10px] font-bold text-outline uppercase tracking-widest">
                  {new Date(repo.updated_at).toLocaleDateString()}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
