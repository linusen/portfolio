import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border py-10">
      <Container>
        <p className="text-sm text-muted">
          Linus Lindgren {year}.
        </p>
      </Container>
    </footer>
  );
}
