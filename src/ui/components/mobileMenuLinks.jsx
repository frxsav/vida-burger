import Link from 'next/link';

export default function MobileMenuLinks(props) {
  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-secondary-100">
        <Link
          href="/"
          className="text-secondary hover:bg-secondary-100 block px-3 py-2 rounded-md font-medium transition-colors"
          onClick={() => props.setIsMenuOpen(false)}>
          Home
        </Link>
        <Link
          href="/about"
          className="text-secondary hover:bg-secondary-100 block px-3 py-2 rounded-md font-medium transition-colors"
          onClick={() => props.setIsMenuOpen(false)}>
          About
        </Link>
        <Link
          href="/services"
          className="text-secondary hover:bg-secondary-100 block px-3 py-2 rounded-md font-medium transition-colors"
          onClick={() => props.setIsMenuOpen(false)}>
          Services
        </Link>
        <Link
          href="/contact"
          className="text-secondary hover:bg-secondary-100 block px-3 py-2 rounded-md font-medium transition-colors"
          onClick={() => propssetIsMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </div>
  );
}
