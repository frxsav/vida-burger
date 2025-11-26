import Link from 'next/link';

export default function Delivery() {
  return (
    <div className="pt-4 pb-8">
      <h4 className="font-bold text-lg uppercase tracking-wider text-secondary">
        Ordina A Domicilio
      </h4>
      <p className="text-muted mb-6 text-sm">
        Goditi Vida Burger comodamente a casa tua con i nostri partner.
      </p>
      <div className="flex flex-col md:flex-row gap-3">
        <Link
          href="#"
          className="flex items-center justify-between bg-secondary/50 flex-1 duration-300 px-4 py-3 rounded-lg hover:bg-[#00CCBC] hover:text-white transition-colors group">
          <span className="font-bold">Deliveroo</span>
        </Link>
        <Link
          href="#"
          className="flex items-center justify-between bg-secondary/50 flex-1 duration-300 px-4 py-3 rounded-lg hover:bg-[#FFC244] hover:text-black transition-colors group">
          <span className="font-bold">Glovo</span>
        </Link>
        <Link
          href="#"
          className="flex items-center justify-between bg-secondary/50 flex-1 duration-300 px-4 py-3 rounded-lg hover:bg-[#FF8000] hover:text-white transition-colors group">
          <span className="font-bold">Just Eat</span>
        </Link>
      </div>
    </div>
  );
}
