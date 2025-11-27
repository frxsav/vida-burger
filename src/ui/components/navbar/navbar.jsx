'use client';

import { useState, useEffect } from 'react';
import { BurgerMenu, DesktopMenuLinks, MobileMenuLinks, Logo } from '..';

export default function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 0 ? true : false);
    });
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`fixed z-50 w-full transition-all duration-300 px-8 md:px-[10%] ${
        scrolled ? 'bg-secondary py-2 shadow-md' : 'bg-transparent py-4'
      }`}>
      <div className="w-full flex flex-row justify-between items-center h-16 font-roboto">
        {/* Logo */}
        <Logo />
        {/* Desktop Menu */}
        <DesktopMenuLinks scrolled={scrolled} />
        {/* Mobile Menu */}
        <MobileMenuLinks
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          scrolled={scrolled}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
    </div>
  );
}
