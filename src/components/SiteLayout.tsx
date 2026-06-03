import { Footer } from "./Footer";
import { Header } from "./Header";

type SiteLayoutProps = {
  children: React.ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 sm:py-16">{children}</main>
      <Footer />
    </div>
  );
}
