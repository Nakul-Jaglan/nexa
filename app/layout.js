import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nexa Foundation - Redefining Education, Reshaping Futures',
  description: 'Join Nexa Foundation in transforming education and empowering communities. Partner with us to create lasting impact through innovative educational initiatives.',
  keywords: 'education foundation, social impact, donations, educational charity, community development',
  authors: [{ name: 'Nexa Foundation' }],
  openGraph: {
    title: 'Nexa Foundation - Redefining Education, Reshaping Futures',
    description: 'Join Nexa Foundation in transforming education and empowering communities.',
    url: 'https://nexafoundation.org',
    siteName: 'Nexa Foundation',
    images: [
      {
        url: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg',
        width: 1200,
        height: 630,
        alt: 'Nexa Foundation - Education Impact',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexa Foundation - Redefining Education, Reshaping Futures',
    description: 'Join Nexa Foundation in transforming education and empowering communities.',
    images: ['https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="scroll-indicator" />
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}