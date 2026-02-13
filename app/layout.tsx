import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mikhail Joseph Agudo - AI Automation Engineer Portfolio',
  description: 'AI Automation Engineer specializing in Oracle HCM Cloud, integrations, and workflow optimization with LLMs.',
  keywords: ['AI Automation Engineer', 'Oracle HCM Cloud', 'Integration Cloud', 'Full Stack Developer', 'Enterprise SaaS', 'Workflow Automation'],
  authors: [{ name: 'Mikhail Joseph Agudo' }],
  openGraph: {
    title: 'Mikhail Joseph Agudo - AI Automation Engineer Portfolio',
    description: 'AI Automation Engineer specializing in Oracle HCM Cloud, integrations, and workflow optimization with LLMs.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mikhail Joseph Agudo - AI Automation Engineer Portfolio',
    description: 'AI Automation Engineer specializing in Oracle HCM Cloud, integrations, and workflow optimization with LLMs.',
    images: [
      {
        url: '/og-image.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
