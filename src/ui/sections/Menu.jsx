import { MdMenuBook } from 'react-icons/md';
import Link from 'next/link';

export default function Menu() {
  return (
    <section className="bg-primary px-[10%] py-16">
      <div className="bg-radial from-secondary to-secondary/80 flex flex-col items-center gap-4 rounded-3xl py-16 border-1 border-secondary relative overflow-hidden text-primary">
        <div className="absolute z-30 top-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/10 translate-x-[200px] -translate-y-[200px] md:translate-x-[-150px] md:-translate-y-[150px]"></div>
        <div className="absolute z-30 bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-cta/10 translate-x-[-200px] -translate-y-[-200px] md:translate-x-[150px] md:-translate-y-[-150px]"></div>

        <div className="rounded-full p-4 bg-primary">
          <MdMenuBook className="text-3xl text-secondary" />
        </div>
        <h3 className="text-5xl tracking-wider font-bold font-display uppercase text-center">
          Il nostro menu
        </h3>
        <p className="text-primary-light text-center w-full md:w-[50%] text-xl">
          Esplora la nostra selezione di Hamburger gourmet, sfizi e bevande
        </p>
        <Link
          href="/menu"
          className="uppercase font-bold bg-cta px-6 py-3 rounded-full text-xl text-secondary mt-4 transition-color duration-300 hover:bg-cta-hover">
          Vai al menu
        </Link>
      </div>
    </section>
  );
}
