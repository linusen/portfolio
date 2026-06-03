import Link from "next/link";
import type { Project } from "@/lib/types";
import { StatusTag } from "./StatusTag";

type SelectedWorkCardProps = {
  project: Project;
};

export function SelectedWorkCard({ project }: SelectedWorkCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block border-b border-border py-10 transition-colors first:pt-0 last:border-b-0 sm:py-12"
    >
      <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-2">
        <span className="text-lg font-medium text-foreground group-hover:text-accent">
          {project.title}
        </span>
        <span className="text-sm text-muted">{project.year}</span>
        <StatusTag status={project.status} />
      </div>
      <p className="max-w-prose text-muted leading-relaxed">{project.oneLiner}</p>
    </Link>
  );
}
