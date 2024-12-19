import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Roboto, Merriweather } from "next/font/google";
import Navbar from "./navbar";
import Footer from "./footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body
        className={`${roboto.variable} ${merriweather.variable} antialiased`}
      >
        <div className="flex flex-col bg-lightolive min-h-screen items-center p-4 font-[family-name:var(--font-roboto)]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
