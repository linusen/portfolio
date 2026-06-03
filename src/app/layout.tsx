import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { SiteLayout } from "@/components/SiteLayout";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Your Name",
    template: "%s · Your Name",
  },
  description: "Personal portfolio. Projects, writing, and ways to get in touch.",
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
      </body>
    </html>
  );
}
