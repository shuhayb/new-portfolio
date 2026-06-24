import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shuhayb.dev"),
  title: "Shuhayb Miah — Full Stack Developer & AI Engineer",
  description:
    "I'm a software engineer who builds full-stack products and AI-powered tools. From the web to AI agents — I ship things that work.",
  openGraph: {
    title: "Shuhayb Miah — Full Stack Developer & AI Engineer",
    description:
      "I'm a software engineer who builds full-stack products and AI-powered tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
