import DigitizeBoxLogoLetters from '@/app/ui/digitizebox-logo-letters';
import CompanyRegistrationForm from '@/app/ui/company-registration-from';
import { Suspense } from 'react';

export default async function LoginPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  
  return (
    <main className="flex items-center justify-center">
      <div className="relative mx-auto flex w-full max-w-[800px] flex-col space-y-2.5 p-4">
        <div className="flex h-20 w-full items-start justify-end bg-blue-500 p-3 md:h-36">
          <div className="w-16 text-white md:w-18">
            <DigitizeBoxLogoLetters color='white' />
          </div>
        </div>
        <Suspense>
          <CompanyRegistrationForm />
        </Suspense>
      </div>
    </main>
  );
}