'use client';

import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { navLinks } from '@/lib/data';
import { HiMenuAlt1, HiX } from 'react-icons/hi';

export default function MobileMenuLinks(props) {
  const boxRef = useRef(null);
  useGSAP(() => {
    boxRef.current = gsap
      .timeline({ paused: true })
      .fromTo(
        '#container',
        { left: '100%', duration: 0.75 },
        { left: 0, duration: 0.75 }
      );
  });

  useEffect(() => {
    props.isMenuOpen ? boxRef.current.play() : boxRef.current.reverse();
  }, [props.isMenuOpen]);

  return (
    <div className="flex items-center space-x-4">
      <div className="md:hidden z-50">
        <button
          onClick={props.toggleMenu}
          className={`p-2 rounded-md focus:outline-none ${
            props.scrolled || props.isMenuOpen
              ? 'text-primary'
              : 'text-secondary'
          }`}
          aria-label="Toggle menu">
          {props.isMenuOpen ? (
            <HiX className="text-3xl" />
          ) : (
            <HiMenuAlt1 className="text-3xl rotate-180" />
          )}
        </button>
      </div>
      <div
        id="container"
        className="md:hidden bg-secondary min-h-[100vh] min-w-[100vw] fixed top-0 left-[100%] z-40 bg-linear-to-t from-cta/10 via-cta/5 via-10% to-secondary"
        ref={boxRef}>
        <div className="border-secondary-100 flex flex-col items-center gap-4 pt-[40%]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-primary text-4xl uppercase block px-3 py-2 rounded-md font-bold transition-colors"
              onClick={() => props.setIsMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
          <Link
            href="#"
            className="uppercase bg-cta text-secondary text-3xl mt-2 px-6 py-3 font-bold rounded-full">
            Vedi il menu
          </Link>
        </div>
      </div>
    </div>
  );
}
