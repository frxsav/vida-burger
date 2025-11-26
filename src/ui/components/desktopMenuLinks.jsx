import Link from 'next/link';

export default function DesktopMenuLinks(props) {
  return (
    <div className={`${props.fromFooter ? 'block' : 'hidden md:block'}`}>
      <div
        className={`flex flex-${props.flexDirection} text-secondary ${
          props.fromFooter ? '' : 'gap-4'
        }`}>
        <p
          className={`font-bold pb-4 text-lg tracking-wider uppercase ${
            props.fromFooter ? 'block' : 'hidden'
          }`}>
          Navigazione
        </p>
        <Link
          href="/"
          className={`rounded-md font-medium transition-colors ${
            props.fromFooter
              ? 'hover:underline underline-offset-4 text-muted py-1'
              : 'hover:bg-secondary-100 px-3 text-primary py-2'
          }`}>
          Home
        </Link>
        <Link
          href="/about"
          className={`rounded-md font-medium transition-colors ${
            props.fromFooter
              ? 'hover:underline underline-offset-4 text-muted py-1'
              : 'hover:bg-secondary-100 px-3 text-primary py-2'
          }`}>
          About
        </Link>
        <Link
          href="/services"
          className={`rounded-md font-medium transition-colors ${
            props.fromFooter
              ? 'hover:underline underline-offset-4 text-muted py-1'
              : 'hover:bg-secondary-100 px-3 text-primary py-2'
          }`}>
          Services
        </Link>
        <Link
          href="/contact"
          className={`rounded-md font-medium transition-colors ${
            props.fromFooter
              ? 'hover:underline underline-offset-4 text-muted py-1'
              : 'hover:bg-secondary-100 px-3 text-primary py-2'
          }`}>
          Contact
        </Link>
      </div>
    </div>
  );
}
