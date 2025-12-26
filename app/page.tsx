import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Header from '@/app/ui/haeader';
import Hero from '@/app/ui/homepage/hero';

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
    </main>
  );
}
