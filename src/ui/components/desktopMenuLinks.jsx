import Link from 'next/link';
import { navLinks } from '@/lib/data';

export default function DesktopMenuLinks(props) {
  return (
    <nav className="flex-row text-secondary gap-4 items-center hidden md:flex w-full justify-end">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`rounded-md font-medium transition-colors uppercase duration-300 hover:text-cta px-3 py-2
            ${props.scrolled ? 'text-primary' : 'text-secondary'}`}>
          {link.name}
        </Link>
      ))}
      <Link
        href="#"
        className="uppercase bg-cta text-secondary py-3 px-6 font-medium rounded-full self-center transition-all duration-300 hover:bg-cta-hover hover:shadow-cta/50 hover:shadow-md">
        Vedi il menu
      </Link>
    </nav>
  );
}
