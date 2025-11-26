import { Hero, Header, Footer } from '@/ui';

export default function Home() {
  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50">
        <Header />
      </header>
      <main>
        <Hero />
      </main>
      <footer className="bottom-0 w-full">
        <Footer />
      </footer>
    </div>
  );
}
