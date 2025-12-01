import { Hero, Header, Footer, Info, About, Menu } from '@/ui';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="font-roboto">
        <Hero />
        <Info />
        <About />
        <Menu />
      </main>
      <Footer />
    </div>
  );
}
