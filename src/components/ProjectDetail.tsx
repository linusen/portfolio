import Image from "next/image";
import type { Project } from "@/lib/types";
import { MarkdownContent } from "./MarkdownContent";
import { StatusTag } from "./StatusTag";

type ProjectDetailProps = {
  project: Project;
};

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-foreground">
      {children}
    </h2>
  );
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const hasMedia = Boolean(project.media?.length);
  const hasMetrics = Boolean(project.metrics?.length);
  const hasLinks = Boolean(project.links?.length);

  return (
    <article>
      <header className="border-b border-border pb-10">
        <h1 className="mb-3 text-3xl font-medium tracking-tight">{project.title}</h1>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
          <span>{project.year}</span>
          <StatusTag status={project.status} />
        </div>
        {project.role || project.tools || project.timeline ? (
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
            {project.role ? (
              <span>
                <span className="text-foreground">Role:</span> {project.role}
              </span>
            ) : null}
            {project.tools ? (
              <span>
                <span className="text-foreground">Tools:</span> {project.tools}
              </span>
            ) : null}
            {project.timeline ? (
              <span>
                <span className="text-foreground">Timeline:</span> {project.timeline}
              </span>
            ) : null}
          </div>
        ) : null}
      </header>

      <section className="border-b border-border py-10">
        <p className="max-w-prose text-lg text-muted leading-relaxed">{project.oneLiner}</p>
      </section>

      {project.context ? (
        <section className="border-b border-border py-10">
          <SectionHeading>Context</SectionHeading>
          <p className="max-w-prose text-muted leading-relaxed">{project.context}</p>
        </section>
      ) : null}

      {project.work ? (
        <section className="border-b border-border py-10">
          <SectionHeading>What I did</SectionHeading>
          <div className="max-w-prose">
            <MarkdownContent content={project.work} />
          </div>
        </section>
      ) : null}

      {hasMedia ? (
        <section className="border-b border-border py-10">
          <SectionHeading>Visual</SectionHeading>
          <div className="space-y-10">
            {project.media!.map((item) => (
              <figure key={item.src}>
               <div className="overflow-hidden rounded-lg border border-border bg-background">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1600}
                    height={900}
                    className="h-auto w-full"
                    sizes="(max-width: 672px) 100vw, 672px"
                  />
                </div>
                {item.caption ? (
                  <figcaption className="mt-3 text-sm text-muted leading-relaxed">
                    {item.caption}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {hasMetrics ? (
        <section className="border-b border-border py-10">
          <SectionHeading>Impact</SectionHeading>
          <dl className="flex flex-wrap gap-x-12 gap-y-8 sm:gap-x-16">
            {project.metrics!.map((metric) => (
              <div key={metric.label} className="min-w-[7rem] flex-1 basis-[7rem] sm:flex-none">
                <dt className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                  {metric.value}
                </dt>
                <dd className="mt-1 max-w-[12rem] text-sm leading-snug text-muted">
                  {metric.label}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      {project.reflection ? (
        <section className="border-b border-border py-10">
          <SectionHeading>Reflection</SectionHeading>
          <p className="max-w-prose text-muted leading-relaxed">{project.reflection}</p>
        </section>
      ) : null}

      {hasLinks ? (
        <section className="py-10">
          <SectionHeading>Links</SectionHeading>
          <ul className="space-y-2">
            {project.links!.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
