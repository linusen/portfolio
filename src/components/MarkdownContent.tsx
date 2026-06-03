import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownContentProps = {
  content: string;
};

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ children }) => (
          <p className="mb-4 text-muted leading-relaxed last:mb-0">{children}</p>
        ),
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
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
