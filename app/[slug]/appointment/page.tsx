import AppointmentForm from '@/app/ui/appointment/create-form';
import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import { notFound } from 'next/navigation';
import { fetchBusinessBySlug } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Make An Appointment',
};

export default async function AppointmentFormPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const company_slug: string = params.slug;

  const [company] = await Promise.all([
    fetchBusinessBySlug(company_slug),
  ]);

  if (company.length === 0) {
    notFound();
  }

  const {id, name} = company[0];

  return (
    <main className="flex items-center justify-center md:min-h-screen">
      <div className="relative mx-auto flex w-full max-w-[800px] flex-col space-y-2.5 p-4">
        <div className="text-white rounded-lg bg-blue-500 p-6 mb-1">
          <h1 className={`${lusitana.className} text-2xl`}>{name} Appointment Form</h1>
          <p className="text-sm">Please fill out the form to schedule and appointment.</p>
        </div>
        <AppointmentForm companyId={id} />
      </div>
    </main>
    
  );
}

