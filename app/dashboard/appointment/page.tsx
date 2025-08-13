import Form from '@/app/ui/appointment/create-form';
import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'Make An Appointment',
};

export default async function Page() {

  return (
    <main>
      <div className="mb-9">
        <h1 className={`${lusitana.className} text-2xl`}>Appointment Form</h1>
        <p className="text-sm">Please fill out the form to schedule and appointment.</p>
      </div>
      <Form />
    </main>
  );
}