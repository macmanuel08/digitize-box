import SideNav from '@/app/ui/dashboard/sidenav';
import { Metadata } from 'next';

const metadata: Metadata = {
    title: {
        template: '%s | DigitizeBox',
        default: 'DigitizeBox',
    },
    description: 'Features of the DigitizeBox Web App',
    metadataBase: new URL('https://digitizebox.com'),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
