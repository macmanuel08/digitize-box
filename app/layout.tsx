import '@/app/ui/global.css';
import { montserrat, roboto } from '@/app/ui/fonts';
import Header from '@/app/ui/header';
import FormFooter from '@/app/ui/formfooter';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        template: '%s | DigitizeBox',
        default: 'DigitizeBox',
    },
    description: 'We build custom healthcare software for clinics and doctors in the Philippines. We develop medical websites, patient scheduling systems, Electronic Health Records (EHR) systems, and clinic dashboards. Our solutions automate administrative tasks and help healthcare providers operate efficiently without needing multiple assistants.',
    metadataBase: new URL('https://digitizebox.com'),
    alternates: {
        canonical: '/',
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'DigitizeBox',
        description: 'We build custom healthcare software for clinics and doctors in the Philippines. We develop medical websites, patient scheduling systems, Electronic Health Records (EHR) systems, and clinic dashboards. Our solutions automate administrative tasks and help healthcare providers operate efficiently without needing multiple assistants.',
        url: 'https://digitizebox.com',
        siteName: 'DigitizeBox',
        locale: 'en_PH',
        alternateLocale: ["en_US", "fil_PH"],
        type: 'website',
    },
};
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`text-slate-800 bg-slate-50 antialiased`}>
                <Header />
                {children}
                <FormFooter />
            </body>
        </html>
    );
}
