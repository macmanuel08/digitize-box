import Form from '@/app/ui/appointment/craete-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Make An Appointment',
};

export default async function Page() {

  return (
    <main>
      <Form />
    </main>
  );
}