import { Hero, Header, Footer, Info } from '@/ui';

export default function Home() {
  return (
    <div>
      <Header />
      <main className='font-roboto'>
        <Hero />
        <Info />
      </main>
      <Footer />
    </div>
  );
}
