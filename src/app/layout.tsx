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

export const metadata = {
  title: 'Chandan Thapa — Full-Stack Developer & Creative Technologist',
  description: 'Portfolio of Chandan Thapa, Full-Stack Developer, Designer & Creative Technologist building digital experiences where design meets technology.',
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
