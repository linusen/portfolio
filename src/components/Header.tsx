import Link from "next/link";
import { Container } from "./Container";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
];

export function Header() {
  return (
    <header className="border-b border-border py-6">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
        <Link href="/" className="text-lg font-medium tracking-tight text-foreground">
          Your Name
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
