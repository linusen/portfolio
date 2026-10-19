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
          I&apos;m a Copenhagen-based UX designer and product thinker who likes working in the
          messy middle between research, strategy, and interface design.
        </p>
        <p>
          My best work starts with a frustrating user moment: a step that feels unclear,
          a decision that stalls, or a system that asks too much of the person using it.
          I look for the pattern behind that friction and turn it into something simpler,
          calmer, and easier to trust.
        </p>
        <p>
          I care about clear communication, good structure, and digital experiences that
          respect people&apos;s time. I like designing systems that are useful in the real world,
          not just polished in a prototype.
        </p>
        <p>
          Outside work, I walk a lot, cook inelegantly, and keep notes on the small digital
          problems that keep nagging at me until I have a better way to solve them.
        </p>
        <p>
          Questions, collaboration, or just hello?{" "}
          <a
            href="/contact"
            className="font-bold text-muted transition-colors hover:text-accent"
          >
            Get in touch
          </a>
          .
        </p>
      </div>
    </Container>
  );
}
