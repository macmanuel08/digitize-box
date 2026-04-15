//import SideNav from '@/app/ui/dashboard/sidenav';
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
    <div className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden scroll-mt-20"> {//className="flex h-screen flex-col md:flex-row md:overflow-hidden"
    }
      {/* <div className="w-full flex-none md:w-64">
        <SideNav />
      </div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">{children}</div>
    </div>
  );
}
