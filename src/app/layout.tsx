import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontent Web Developer Aliaksandr Bandziuk",
  description:
    "I create websites and web applications with React, Next.js, and TypeScript. Also I have experience with Wordpress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics gaId="G-LXSBE4EEP9" />
        {children}
      </body>
    </html>
  );
}
