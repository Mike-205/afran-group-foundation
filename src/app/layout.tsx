import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import React from "react";
import Emergency from "@/components/layout/Emergency";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/RootNavbar";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "AFRAN Group Foundation",
  description: "Empowering Communities, Transforming Lives",
  icons: {
    icon: "/icons/logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins bg-gray-white antialiased`}
        suppressHydrationWarning
      >
        <Emergency />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
