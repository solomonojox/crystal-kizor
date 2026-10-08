import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crystal Kizor - Architect, Designer, Entrepreneur",
  description:
    "Architect, designer, entrepreneur, speaker, and creator building across Studio COKA, ELEvated, The Effective Architect, AKO Alliance, and Alive and Free.",
  openGraph: {
    title: "Crystal Kizor - Architect, Designer, Entrepreneur",
    description:
      "Building across architecture, design, education, and impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}