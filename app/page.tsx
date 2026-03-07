import Header from '@/app/ui/header';
import Hero from '@/app/ui/homepage/hero';
import Welcome from '@/app/ui/homepage/welcome';
import Services from '@/app/ui/homepage/services';
import Scheduling from '@/app/ui/homepage/scheduling';
import FormFooter from '@/app/ui/formfooter';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Services />
        <Scheduling />
        <FormFooter />
      </main>
    </>
  );
}