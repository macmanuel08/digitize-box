import DigitizeBoxLogoLetters from '@/app/ui/digitizebox-logo-letters';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';

export default async function PaymentThanksYouPage() {
  
  return (
    <main className="flex items-center justify-center py-14">
      <div className="relative mx-auto flex w-full max-w-[800px] flex-col space-y-2.5 p-4">
        <div className="flex h-20 w-full items-start justify-end bg-blue-500 p-3 md:h-36">
          <div className="w-16 text-white md:w-18">
            <DigitizeBoxLogoLetters color='white' />
          </div>
        </div>
        <div className='py-9'>
            <h2 className={`${lusitana.className} mb-3 text-xl`}>
                Beta Mode Subscription
            </h2>
            <p className='text-sm text-gray-600 mt-4'>We've received your payment submission. Our team will review and confirm your payment shortly. Once verified, you'll receive a confirmation email with your account activation details and full access instructions. </p>
            <p className='text-sm text-gray-600 mt-4'> Please allow up to <strong>24 hours</strong> for payment verification during our Beta Mode period. If you don't receive a confirmation email after that time, feel free to contact us for assistance. </p>
            <p className='text-sm text-gray-600 mt-4'> Thank you for being an early supporter! Your subscription price of <span className="text-blue-500 font-semibold">&#8369;399</span> will remain locked forever as we continue improving and expanding the app.</p>
            <Link href='/' className='btn btn-primary mt-9'>Back to Homepage</Link>
        </div>
      </div>
    </main>
  );
}