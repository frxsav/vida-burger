import { reviewsData } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export default function Reviews() {
  return (
    <section className="bg-secondary py-16 px-[10%]">
      <div className="text-center">
        <h2 className="font-display text-4xl md:text-5xl text-primary uppercase pb-16">
          Dicono di noi
        </h2>
      </div>
      <Carousel>
        <CarouselContent className="gap-4 px-8">
          {reviewsData.map((review, index) => (
            <CarouselItem review={review} key={index}></CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
