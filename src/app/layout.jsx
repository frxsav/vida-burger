import './globals.css';
import { DM_Serif_Display, Roboto_Mono } from 'next/font/google';

const display = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});
const roboto = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto',
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
