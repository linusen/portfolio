import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProjectList } from "@/components/ProjectList";
import { getAllProjectTags, getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  const tags = getAllProjectTags();

  return (
    <Container>
      <header className="mb-12 sm:mb-16">
        <h1 className="mb-4 text-3xl font-medium tracking-tight">Projects</h1>
        <p className="max-w-prose text-muted leading-relaxed">
          Everything I have shipped, paused, or am still wiring up. Sorted by year,
          newest first.
        </p>
      </header>

      <ProjectList projects={projects} tags={tags} />
    </Container>
  );
}
