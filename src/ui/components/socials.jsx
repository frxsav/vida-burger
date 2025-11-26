import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Socials() {
  return (
    <div className="flex flex-row gap-4">
      <Link
        href="https://facebook.com"
        className="text-2xl bg-primary-light rounded-full p-3 text-secondary hover:bg-cta transition-colors duration-300">
        <FaFacebook></FaFacebook>
      </Link>
      <Link
        href="https://instagram.com"
        className="text-2xl bg-primary-light rounded-full p-3 text-secondary hover:bg-cta transition-colors duration-300">
        <FaInstagram></FaInstagram>
      </Link>
      <Link
        href="https://tiktok.com"
        className="text-2xl bg-primary-light rounded-full p-3 text-secondary hover:bg-cta transition-colors duration-300">
        <FaTiktok></FaTiktok>
      </Link>
    </div>
  );
}
