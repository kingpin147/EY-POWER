import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { FloatingCTA } from "@/components/layout/FloatingCTA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EY Power | Premium Lithium Batteries & ESS Solutions",
  description: "Engineering-driven Lithium Batteries and Industrial Energy Storage Systems (ESS/BESS) in Pakistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}
      >
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
