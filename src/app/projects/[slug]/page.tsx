import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { ProjectDetail } from "@/components/ProjectDetail";
import { getAllProjectSlugs, getProjectBySlug, getAdjacentProjects } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.oneLiner,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <Container>
      <Link
        href="/projects"
        className="mb-8 inline-block text-sm text-muted transition-colors hover:text-accent"
      >
        Back to projects
      </Link>
      <ProjectDetail project={project} prev={prev} next={next} />
    </Container>
  );
}
