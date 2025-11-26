import Link from 'next/link';

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <span className="text-3xl font-bold text-cta">Logo</span>
      </Link>
    </div>
  );
}
