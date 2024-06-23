import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Myndighetshandboken",
  description: "Myndighetshandboken - En informationssida över den svenska staten. Här hittar du information om myndigheter, departement, ambassader och mycket mer. Forska i statistik och hitta snabbfakta om politik och internationella relationer. Djupdyk i statsbudgeten eller statens bolagsportfölj. Myndighetshandboken är din guide till den svenska byråkratin.",
};

import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
        </body>
    </html>
  );
}
