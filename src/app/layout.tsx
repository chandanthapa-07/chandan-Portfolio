import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chandan Thapa - Full-Stack Developer & Creative Technologist',
  description: 'Portfolio of Chandan Thapa, a full-stack developer and creative technologist building modern web applications.',
  keywords: ['developer', 'full-stack', 'web developer', 'portfolio', 'react', 'next.js'],
  authors: [{ name: 'Chandan Thapa' }],
  openGraph: {
    title: 'Chandan Thapa - Full-Stack Developer & Creative Technologist',
    description: 'Portfolio of Chandan Thapa, a full-stack developer and creative technologist building modern web applications.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chandan Thapa - Full-Stack Developer & Creative Technologist',
    description: 'Portfolio of Chandan Thapa, a full-stack developer and creative technologist building modern web applications.',
  },
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
