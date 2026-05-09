import type { Metadata } from 'next';
import { Poppins, Playfair_Display } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'A Coleção Estratégica | Poder & Persuasão',
  description: 'Tenha acesso imediato às leituras mais comentadas sobre persuasão, comportamento humano e desenvolvimento estratégico.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${playfair.variable} dark scroll-smooth`}>
      <body className="bg-black text-zinc-300 antialiased font-sans flex flex-col min-h-screen selection:bg-yellow-500/30">
        {children}
      </body>
    </html>
  );
}
