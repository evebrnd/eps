import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "EPS",
  description: "Website of the Spring 2024 EPS project regarding",
};

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children
}: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-primary-foreground font-sans antialiased",
            fontSans.variable
          )}>
          <Navbar />
          {children}

          <Footer /> 
        </body>
      </html>
    </>
  )
}