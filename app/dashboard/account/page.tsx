import { Metadata } from 'next';
import { auth } from '@/auth';
import { lusitana } from "@/app/ui/fonts";
import { fetchBusinessById, formatDate } from '@/app/lib/data';
import Link from 'next/link';
import { CreditCardIcon } from '@heroicons/react/20/solid';
import { OfficeHoursTable } from '@/app/ui/company/office-hours-table';

export const metadata: Metadata = {
  title: 'Account',
};

export default async function AccountPage() {

    const session = await auth();
    const companyId = session?.user.company_id ?? '';
    const {name, industry, next_billing_date, availability} = await fetchBusinessById(companyId);
    const nextBillingDate = formatDate(next_billing_date);

  return (
    <main>
        <h1 className={`${lusitana.className} text-2xl mb-1`}>{name} Account Information</h1>
        <p className="mb-16"><em className='capitalize'>{industry}</em></p>

        <h2 className={`${lusitana.className} text-xl mb-1`}>Next Billing Date:</h2>
        <p className="mb-4">{nextBillingDate}</p>
        <p className="mb-6">Note: Please pay your bills on time to avoid inconvenience.</p>

        <Link
            href={`/payment/${companyId}`}
            className='flex h-[48px] w-fit grow items-center justify-center gap-2 rounded-md bg-blue-600 p-3 text-sm font-medium hover:bg-blue-400 text-white md:flex-none md:justify-start md:p-2 md:px-3'
          >
            <CreditCardIcon className="w-6" />
            <p className="hidden md:block">Make A Payment</p>
        </Link>

        <h2 className={`${lusitana.className} text-xl mt-16 mb-1`}>Office Hours</h2>
        <OfficeHoursTable schedule={availability} />
    </main>
  );
}
