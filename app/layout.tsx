import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Salah Legal Esq.',
  description: 'Legal solutions with expertise and trust at Salah Legal Esq.',
  icons: {
    icon: '/assets/legal1.png', // Ensure this file exists in the `public` folder
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/legal1.png' type='image/png' />
      </head>
      <body className='mx-auto'>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
