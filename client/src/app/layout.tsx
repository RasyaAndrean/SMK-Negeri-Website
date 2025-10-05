import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SMK Negeri - Vocational High School',
  description:
    'Official website of SMK Negeri, providing quality vocational education',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
