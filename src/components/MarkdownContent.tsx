import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ReactNode } from "react";

type MarkdownContentProps = {
  content: string;
};

/**
 * Inline images inside markdown content.
 *
 * Spacing system:
 * - my-10 / lg:my-14: images get more vertical air than paragraphs (mb-4),
 *   so they read as a distinct beat in the narrative, not a crammed insert.
 * - Breakout uses fixed negative margins per breakpoint, not percentage
 *   calc, so it can't misalign against other containers.
 * - Caption stays at the prose left edge (margins pulled back in), so it
 *   reads as text belonging to the column, while the image itself breaks out.
 */

function ImageRenderer({
  src,
  alt,
  title,
}: {
  src?: string;
  alt?: string;
  title?: string;
}) {
  return (
    <figure className="mt-10 mb-12 lg:mt-14 lg:mb-16 sm:-mx-10 lg:-mx-20 xl:-mx-28">
      <div className="overflow-hidden rounded-lg border border-border bg-background">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={typeof src === "string" ? src : ""}
          alt={alt ?? ""}
          className="h-auto w-full"
        />
      </div>
      {title ? (
        <figcaption className="mt-3 text-sm text-muted sm:mx-10 lg:mx-20 xl:mx-28">
          {title}
        </figcaption>
      ) : null}
    </figure>
  );
}

function hasOnlyImageChild(children: ReactNode): boolean {
  const childArray = Array.isArray(children) ? children : [children];
  const nonEmpty = childArray.filter(
    (child) => child !== null && child !== undefined && child !== ""
  );
  return (
    nonEmpty.length === 1 &&
    typeof nonEmpty[0] === "object" &&
    nonEmpty[0] !== null &&
    "type" in (nonEmpty[0] as { type?: unknown }) &&
    (nonEmpty[0] as { type?: unknown }).type === ImageRenderer
  );
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ children }) => {
          if (hasOnlyImageChild(children)) {
            return <>{children}</>;
          }
          return (
            <p className="mb-4 text-muted leading-relaxed last:mb-0">{children}</p>
          );
        },
        strong: ({ children }) => (
          <strong className="font-medium text-foreground">{children}</strong>
        ),
        ul: ({ children }) => (
          <ul className="mb-4 list-disc space-y-2 pl-5 text-muted last:mb-0">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-4 list-decimal space-y-2 pl-5 text-muted last:mb-0">{children}</ol>
        ),
        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
        pre: ({ children }) => (
          <pre className="mb-4 overflow-x-auto rounded-lg border border-border bg-background p-4 text-sm text-foreground last:mb-0">
            {children}
          </pre>
        ),
        code: ({ className, children }) => {
          const isBlock = className?.includes("language-");
          if (isBlock) {
            return <code className="font-mono text-sm">{children}</code>;
          }
          return (
            <code className="rounded bg-background px-1.5 py-0.5 font-mono text-sm text-foreground">
              {children}
            </code>
          );
        },
        img: ImageRenderer,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}