import Link from 'next/link';
import Image from 'next/image';

export default function Logo(props) {
  return (
    <Link href="/" className={`${props.fromFooter ? 'z-40' : 'z-50'}`}>
      <Image src="/images/logo.png" width={100} height={100} alt="Logo" />
    </Link>
  );
}
