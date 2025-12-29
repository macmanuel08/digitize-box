import '@/app/ui/global.css';
import { montserrat, roboto } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | DigitizeBox',
    default: 'DigitizeBox',
  },
  description: 'Streamline medical practices by reducing administrative tasks, allowing doctors to focus more on patient care. Our solution helps healthcare providers operate efficiently without the need for multiple assistants or secretaries.',
  metadataBase: new URL('https://digitizebox.com'),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}
