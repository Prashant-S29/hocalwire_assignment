import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Layout';
import { Toaster } from 'react-hot-toast';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hocalwire | Assignment Solution',
  description: 'Assignment Solution for Frontend dev at Hocalwire',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <Toaster
        position='top-right'
          toastOptions={{
            style: {
              backgroundColor: 'black',
              color: 'white',
              fontSize: '14px',
            },
            
          }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
