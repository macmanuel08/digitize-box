import DigitizeBoxLogoLetters from '@/app/ui/digitizebox-logo-letters';
import LoginForm from '@/app/ui/login-form';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-start justify-end bg-blue-500 p-3 md:h-36">
          <div className="w-16 text-white md:w-18">
            <DigitizeBoxLogoLetters color='white' />
          </div>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
