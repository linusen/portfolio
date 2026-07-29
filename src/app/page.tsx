import Link from "next/link";
import Image from "next/image";
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
            className="font-bold text-sm text-muted transition-colors hover:text-accent"
          >
            All projects
          </Link>
        </p>
      </section>

      <section className="max-w-prose pb-8">
        <p className="text-muted leading-relaxed">
          Questions, collaboration, or just hello?{" "}
          <Link href="/contact" className="font-bold text-muted transition-colors hover:text-accent">
            Get in touch
          </Link>
          .
        </p>
      </section>

      <section className="relative z-10 flex justify-center pt-12 -mb-16 sm:pt-16">
        <Image
          src="/linus-headshot.png"
          alt="Linus Lindgren"
          width={480}
          height={480}
          className="h-auto w-full max-w-xs sm:max-w-sm"
        />
      </section>
    </Container>
  );
}