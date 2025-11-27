'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { HiArrowDown } from 'react-icons/hi';

export default function Hero() {
  const textContainerRef = useRef(null);
  const buttonContainerRef = useRef(null);
  const arrowDown = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      textContainerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.75 }
    );
    gsap.fromTo(
      buttonContainerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.75 }
    );
    gsap.fromTo(
      arrowDown.current,
      {
        y: 0,
      },
      { y: 10, repeat: -1, duration: 1, yoyo: true }
    );
  });
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center gap-8 md:gap-16 font-display z-40">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-foreground/75 z-40"></div>
        <Image
          src="/images/burger-500.webp"
          alt="burger hero"
          fill
          className="object-cover z-30"
        />
      </div>
      <div className="z-40 flex flex-col gap-4" ref={textContainerRef}>
        <h1 className="text-center block text-cta font-bold font-roboto tracking-widest uppercase md:text-xl w-[70%] self-center">
          Vida Burger - Il tuo angolo di America a Portici
        </h1>
        <h4 className="text-center text-5xl md:text-8xl font-display text-white uppercase leading-[3rem] md:leading-[6rem] font-black">
          Gusto Napoletano Stile
          <br /> <span className="text-cta">Americano</span>
        </h4>
        <p className="text-center text-muted md:text-xl max-w-[75%] mx-auto font-light font-roboto">
          Ingredienti freschi, passione pura e un'atmosfera unica. <br />
          Il tuo nuovo punto di riferimento in Corso Garibaldi.
        </p>
      </div>
      <div
        className="flex flex-col md:flex-row gap-4 justify-center z-40"
        ref={buttonContainerRef}>
        <Link
          href="#"
          className="font-roboto uppercase text-xl bg-cta text-secondary border-2 border-cta py-3 px-6 font-bold rounded-full self-center transition-all duration-300 hover:bg-cta-hover hover:border-cta-hover">
          Scopri il Menu
        </Link>
        <Link
          href="#"
          className="font-roboto uppercase text-xl bg-transparent text-secondary border-2 border-secondary py-3 px-6 font-bold rounded-full self-center transition-all duration-300 hover:bg-secondary hover:text-primary">
          Ordina Online
        </Link>
      </div>
      <div className="absolute bottom-12 z-40" ref={arrowDown}>
        <HiArrowDown className="text-3xl text-secondary" />
      </div>
    </section>
  );
}
