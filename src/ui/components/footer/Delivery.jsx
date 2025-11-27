import Link from 'next/link';
import { SiJusteat, SiDeliveroo, SiGlovo } from 'react-icons/si';

export default function Delivery() {
  return (
    <div className="pt-4 pb-8">
      <h4 className="font-bold text-lg uppercase tracking-wider text-secondary">
        Ordina A Domicilio
      </h4>
      <p className="text-muted my-6 text-sm">
        Goditi Vida Burger comodamente a casa tua con i nostri partner.
      </p>
      <div className="flex md:flex-row gap-3">
        <Link
          href="#"
          className="flex items-center justify-between bg-secondary/50 duration-300 px-4 py-3 rounded-lg hover:bg-[#00CCBC] hover:text-secondary transition-colors group">
          {/* <span className="font-bold">Deliveroo</span> */}
          <SiDeliveroo className='text-xl'/>
        </Link>
        <Link
          href="#"
          className="flex items-center justify-between bg-secondary/50 duration-300 px-4 py-3 rounded-lg hover:bg-[#FFC244] hover:text-primary transition-colors group">
          {/* <span className="font-bold">Glovo</span> */}
          <SiGlovo className='text-xl'/>
        </Link>
        <Link
          href="#"
          className="flex items-center justify-between bg-secondary/50 duration-300 px-4 py-3 rounded-lg hover:bg-[#FF8000] hover:text-secondary transition-colors group">
          {/* <span className="font-bold">Just Eat</span> */}
          <SiJusteat className='text-xl'/>
        </Link>
      </div>
    </div>
  );
}
