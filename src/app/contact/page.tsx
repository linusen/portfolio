import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <Container>
      <h1 className="mb-4 text-3xl font-medium tracking-tight">Contact</h1>
      <p className="mb-10 max-w-prose text-muted leading-relaxed">
        Want to talk about a project, a role, or something you built that I should see?
        Email works best. I read everything, even if I am slow to reply.
      </p>

      <div className="space-y-6 text-muted">
        <p>
          <span className="block text-sm text-foreground">Email</span>
          <a href="mailto:linus.c.lindgren@gmail.com" className="text-accent hover:underline">
            linus.c.lindgren@gmail.com
          </a>
        </p>
        <p>
          <span className="block text-sm text-foreground">GitHub</span>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            github.com/yourusername
          </a>
        </p>
        <p>
          <span className="block text-sm text-foreground">LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/linuslindgren/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            linkedin.com/in/linuslindgren
          </a>
        </p>
      </div>
    </Container>
  );
}
