import type { Metadata } from "next";
import "./globals.css";

import { Space_Grotesk, Audiowide, Notable } from "next/font/google";
import Navbar from "./navbar";
import Footer from "./footer";

const space_grotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400"],
});

const notable = Notable({
  variable: "--font-notable",
  subsets: ["latin"],
  weight: ["400"],
});

const audio = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Erin Miller",
  description:
    "A computer scientist focused on creating an environmental and cultural impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body
        className={`${space_grotesk.variable} ${audio.variable} ${notable.variable} antialiased`}
      >
        <div className="flex flex-col bg-olive min-h-screen items-center p-4 font-[family-name:var(--font-space-grotesk)]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
