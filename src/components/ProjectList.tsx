"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/types";
import { ProjectCard } from "./ProjectCard";

type ProjectListProps = {
  projects: Project[];
  tags: string[];
};

export function ProjectList({ projects, tags }: ProjectListProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!activeTag) return projects;
    return projects.filter((project) => project.tags?.includes(activeTag));
  }, [projects, activeTag]);

  const filterButtonClass = (isActive: boolean) =>
    [
      "rounded-full border px-3 py-1 text-sm transition-colors",
      isActive
        ? "border-accent text-accent"
        : "border-border text-muted hover:border-accent/40 hover:text-foreground",
    ].join(" ");

  return (
    <>
      {tags.length > 0 ? (
        <div className="mb-10 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveTag(null)}
            className={filterButtonClass(activeTag === null)}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={filterButtonClass(activeTag === tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      ) : null}

      {filtered.length > 0 ? (
        <div>
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted">No projects with that tag.</p>
      )}
    </>
  );
}
