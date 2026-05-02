import type { Metadata } from "next";
import { Instrument_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: "--font-instrument",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Forsah Dev | Premium Software Agency",
  description: "Forsah Dev builds scalable, modern, and AI-powered software solutions that accelerate business growth.",
  keywords: ["Software Development", "AI Solutions", "Web Development", "SaaS", "Forsah Dev"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${instrumentSans.variable} ${cormorantGaramond.variable} font-sans`}>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
