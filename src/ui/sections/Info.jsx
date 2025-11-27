import { orari } from '@/lib/data';
import Link from 'next/link';
import { FaMapMarkerAlt, FaRegClock, FaMapMarkedAlt } from 'react-icons/fa';

export default function Info() {
  return (
    <section className="bg-background relative overflow-hidden">
      {/* Background puntini */}
      <div className="absolute inset-0 z-30 h-full w-full bg-[radial-gradient(#c8babb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_55%_55%_at_50%_50%,#000_50%,transparent_100%)]"></div>
      {/* Pallini decorativi */}
      <div className="absolute z-30 top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/10 translate-x-[250px] -translate-y-[250px] md:translate-x-[100px] md:-translate-y-[100px]"></div>
      <div className="absolute z-30 bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 translate-x-[-200px] -translate-y-[-200px] md:translate-x-[-150px] md:-translate-y-[-150px]"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-32 justify-between px-[10%] z-40 py-32">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden group z-40">
          <FaMapMarkerAlt className="text-primary opacity-10 text-[100px] md:text-[150px] absolute top-0 right-0 p-0 md:p-4 pt-2 transition-all duration-600 group-hover:opacity-20 group-hover:scale-105" />
          <h3 className="font-display text-4xl md:text-5xl text-primary mb-6 uppercase">
            Dove Siamo
          </h3>
          <p className="text-xl text-primary-light font-light mb-2 flex items-center gap-3">
            Corso Garibaldi 80
          </p>
          <p className="text-2xl font-bold text-primary mb-8">Portici (NA)</p>
          <Link
            href="https://maps.google.com/?q=Corso+Garibaldi+80,Portici"
            target="_blank"
            className="flex w-fit items-center gap-3 text-secondary bg-cta px-6 py-3 rounded-full font-bold uppercase hover:bg-cta-hover transition-colors shadow-lg">
            Apri su Maps <FaMapMarkedAlt className="text-3xl" />
          </Link>
        </div>
        <div className="bg-primary rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden text-secondary z-40 group">
          <FaRegClock className="text-secondary opacity-10 text-[100px] md:text-[150px] absolute top-0 left-0 p-0 md:p-4 pt-2 transition-all duration-600 group-hover:opacity-15 group-hover:scale-105" />
          <h3 className="font-display text-5xl mb-8 uppercase text-right">
            Orari
          </h3>
          <div className="space-y-4">
            {orari.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center text-muted border-b border-secondary/75 pb-2 last:border-0">
                <span className="font-bold flex items-center gap-2">
                  {item.day}
                </span>
                <span
                  className={`${
                    item.closed
                      ? 'text-cta font-bold uppercase'
                      : 'text-secondary'
                  }`}>
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
