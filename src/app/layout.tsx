import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/

export const metadata: Metadata = {
  title: "Ki Kim's Portfolio",
  description: "Ki Kim's personal website to showcase skills and demo apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body
            //className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1 container mx-auto p-4">{children}</main>
            </div>
        </body>
    </html>
  );
}
