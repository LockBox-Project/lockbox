import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//export default function TestLayout({ children }: { children: React.ReactNode }) {
//  return (
//    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//      {children}
//    </div>
//  );
//}

export const metadata = {
  title: "My App",
  description: "A Next.js application with Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
