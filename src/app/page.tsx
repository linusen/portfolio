import Link from "next/link";
import { Container } from "@/components/Container";
import { SelectedWorkCard } from "@/components/SelectedWorkCard";
import { getFeaturedProjects } from "@/lib/projects";

export default function HomePage() {
  const selected = getFeaturedProjects();

  return (
    <Container>
      <section className="mb-20 max-w-prose sm:mb-28">
        <p className="text-lg text-muted leading-relaxed">
          Copenhagen-based UX Designer. I find what frustrates people, then design it away.
        </p>
      </section>

      <section className="mb-20 sm:mb-28">
        <h2 className="mb-12 text-sm font-medium uppercase tracking-wide text-muted">
          Selected work
        </h2>
        <div>
          {selected.map((project) => (
            <SelectedWorkCard key={project.slug} project={project} />
          ))}
        </div>
        <p className="mt-12">
          <Link
            href="/projects"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            All projects
          </Link>
        </p>
      </section>

      <section className="max-w-prose pb-8">
        <p className="text-muted leading-relaxed">
          Questions, collaboration, or just hello?{" "}
          <Link href="/contact" className="text-muted transition-colors hover:text-accent">
            Get in touch
          </Link>
          .
        </p>
      </section>
    </Container>
  );
}
