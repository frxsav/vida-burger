'use client';

import { useState, useEffect } from 'react';
import { BurgerMenu, DesktopMenuLinks, MobileMenuLinks, Logo } from '..';

export default function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setHasScrolled(window.scrollY > 0 ? true : false);
    });
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="mx-auto mt-8 rounded-3xl px-8 w-[80%] backdrop-blur-sm bg-secondary-light/20">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo />
          {/* Desktop Menu */}
          <DesktopMenuLinks />
          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <MobileMenuLinks setIsMenuOpen={setIsMenuOpen} />}
      </div>
    </nav>
  );
}
