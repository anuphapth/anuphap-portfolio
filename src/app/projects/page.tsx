"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  ExternalLink,
  Star,
  GitFork,
  RefreshCw,
  Database,
  Loader2,
} from "lucide-react";
import { Layout } from "../../components/Layout";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  homepage?: string;
}

const projectTitles: Record<string, string> = {
  "Bazi-informed-Restaurant-Business-Analysis": "Restaurant Analytics Platform",
  "IoT-ThiJodRot-Web": "IoT ThiJodRot",
};

const ProjectsPage: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const githubUsername = process.env.NEXT_PUBLIC_GITHUB_URL
          ? process.env.NEXT_PUBLIC_GITHUB_URL.split("/").pop()
          : "anuphapth";

        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`,
        );
        if (!response.ok) throw new Error("Failed to fetch repositories");

        const data: Repo[] = await response.json();

        const selectedRepos = data.filter((repo) =>
          [
            "Bazi-informed-Restaurant-Business-Analysis",
            "IoT-ThiJodRot-Web",
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
    <Layout>
      <div>
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
                className="inline-block bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 font-label"
              >
                My Projects
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="font-headline text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 xs:mb-6"
              >
                Projects
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="font-body text-lg text-on-surface-variant leading-relaxed max-w-xl"
              >
                Practical backend development projects focused on APIs, databases,
                and scalable system design. Data is automatically synced from
                GitHub.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
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
          <div className="bg-red-100 text-red-800 p-8 rounded-2xl text-center">
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
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/10 overflow-hidden hover:border-primary/30 transition-all flex flex-col"
              >
                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-surface-container rounded-xl text-primary">
                      <Database size={24} />
                    </div>

                    <div className="flex gap-4 text-outline group-hover:text-primary">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-headline text-2xl font-bold mb-3 group-hover:text-primary">
                    {projectTitles[repo.name] || repo.name}
                  </h3>

                  <p className="text-sm text-on-surface-variant mb-6 line-clamp-3">
                    {repo.description ||
                      "Backend-focused project involving API design, database integration, and system architecture."}
                  </p>

                  {repo.language && (
                    <span className="bg-surface-container-high text-[10px] px-2 py-1 rounded font-bold uppercase">
                      {repo.language}
                    </span>
                  )}
                </div>

                <div className="px-8 py-4 bg-surface-container-low border-t flex justify-between">
                  <div className="flex gap-4 text-xs font-bold">
                    <span className="flex items-center gap-1">
                      <Star size={14} />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={14} />
                      {repo.forks_count}
                    </span>
                  </div>

                  <span className="text-[10px] uppercase">
                    {new Date(repo.updated_at).toLocaleDateString()}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProjectsPage;
