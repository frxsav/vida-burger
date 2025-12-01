import {
  Hero,
  Header,
  Footer,
  Info,
  About,
  Menu,
  Galleria,
  Reviews,
} from '@/ui';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="font-roboto">
        <Hero />
        <Info />
        <About />
        <Menu />
        <Galleria />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
