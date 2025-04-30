import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/auth-provider"
import Navbar from "@/components/navbar";
import UserButton from "@/components/user-button";
//import Chatbot from "@/components/chatbot/chatbot";
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
    icons: [
        {
        rel: "icon",
        url: "/favicon.svg",
        },
    ]
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
                <AuthProvider>
                    <div className="min-h-screen flex flex-col">
                        <nav className="bg-white border-b">
                            <div className="container mx-auto px-4">
                                <div className="flex h-16 items-center justify-between">
                                    <Navbar />
                                    <UserButton />
                                </div>
                            </div>
                        </nav>
                        <main className="flex-1 container mx-auto p-4">{children}</main>
                    </div>
                </AuthProvider>
                
            </body>
        </html>
    );
}
