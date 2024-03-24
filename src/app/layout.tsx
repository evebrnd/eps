import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EPS",
  description: "Website of the Spring 2024 EPS project regarding",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <head><link rel="icon" href="favicon.ico" sizes="any" /></head>
      <body className={inter.className}>
        <Navbar />
        <div className="top-50 min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
