import Link from "next/link";
import type { Project } from "@/lib/types";
import { StatusTag } from "./StatusTag";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block border-b border-border py-8 transition-colors first:pt-0 last:border-b-0 sm:py-10"
    >
      <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-2">
        <span className="text-lg font-medium text-foreground group-hover:text-accent">
          {project.title}
        </span>
        <span className="text-sm text-muted">{project.year}</span>
        <StatusTag status={project.status} />
      </div>
      <p className="mb-2 max-w-prose text-muted leading-relaxed">{project.oneLiner}</p>
      {project.tags?.length ? (
        <p className="text-sm text-muted">{project.tags.join(" · ")}</p>
      ) : null}
    </Link>
  );
}
