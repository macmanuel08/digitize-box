import Header from '@/app/ui/haeader';
import Hero from '@/app/ui/homepage/hero';
import Welcome from '@/app/ui/homepage/welcome';
import Scheduling from '@/app/ui/homepage/scheduling';
import Features from '@/app/ui/homepage/features';
import More from '@/app/ui/homepage/more';

export default function Page() {
  return (
    <main className="min-h-screen relative bg-blue-300 to-blue-600 bg-opacity-20">
      <Header />
      <Hero />
      <Welcome />
      <Scheduling />
      <Features />
      <More />
    </main>
  );
}