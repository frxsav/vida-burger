import Image from 'next/image';
import { images } from '@/lib/data';

export default function Galleria() {
  return (
    <section className="grid grid-cols-4 grid-rows-3 min-h-[1000px] w-full gap-2 bg-primary pt-16">
      {images.map((image, index) => (
        <div
          key={index}
          className={`${image.colSpan} ${image.rowSpan} w-full h-full relative group overflow-hidden`}>
          <Image
            src={image.url}
            fill
            alt={'Immagine della galleria ' + (index + 1)}
            className="object-cover transition-all duration-600 group-hover:scale-105"
          />
          <div className="w-full h-full absolute top-0 left-0 bg-secondary/10 transition-all duration-300 group-hover:bg-transparent"></div>
        </div>
      ))}
    </section>
  );
}
