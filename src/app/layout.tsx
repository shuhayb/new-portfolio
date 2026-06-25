import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ProviderTheme } from "@/app/providers/themeprovider";
import { LenisProvider } from "@/app/providers/lenisprovider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shuhayb Miah | portfolio",
  description:
    "Shuhayb Miah — full-stack developer & AI engineer. Building intelligent, production-grade products for the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${robotoMono.variable}`}>
      <body>
        <ProviderTheme>
          <LenisProvider>
            <Header />
            {children}
            <Footer />
          </LenisProvider>
        </ProviderTheme>
      </body>
    </html>
  );
}
