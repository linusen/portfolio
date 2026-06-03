import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Container>
      <h1 className="mb-8 text-3xl font-medium tracking-tight">About</h1>
      <div className="max-w-prose space-y-5 text-muted leading-relaxed">
        <p>
          I am a developer based in [your city]. I have spent the last few years
          building interfaces for startups and side projects that matter to me.
        </p>
        <p>
          I care about readable code, fast pages, and copy that sounds like a person
          wrote it. I would rather ship something small and real than wait for the
          perfect portfolio piece.
        </p>
        <p>
          Outside of work I walk a lot, cook badly on purpose, and keep a list of
          bugs I want to fix in open source tools I use every day.
        </p>
        <p>
          If something here resonates, the contact page is the easiest way to reach me.
        </p>
      </div>
    </Container>
  );
}
