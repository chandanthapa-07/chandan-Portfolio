import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Chandan Thapa | Full-Stack Developer",
  description:
    "Chandan Thapa — Full-Stack Developer, Backend Developer, MERN Stack Developer and UI/UX enthusiast.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-inter antialiased bg-[#08090B] text-white overflow-x-hidden selection:bg-cyan-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
