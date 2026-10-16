import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { SiteLayout } from "@/components/SiteLayout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Linus Lindgren",
    template: "%s · Linus Lindgren",
  },
  description:
    "Copenhagen-based UX designer creating clearer digital experiences for complex products and services.",
  openGraph: {
    title: "Linus Lindgren",
    description:
      "Portfolio of UX design projects focused on clarity, decision support, and better user journeys.",
    type: "website",
    siteName: "Linus Lindgren",
  },
  twitter: {
    card: "summary_large_image",
    title: "Linus Lindgren",
    description:
      "Portfolio of UX design projects focused on clarity, decision support, and better user journeys.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>
        <SiteLayout>{children}</SiteLayout>
        <Analytics />
      </body>
    </html>
  );
}