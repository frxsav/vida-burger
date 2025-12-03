'use client';
import * as React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { FaStar, FaQuoteRight } from 'react-icons/fa';

import { cn } from '@/lib/utils';

const CarouselContext = React.createContext(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

const Carousel = React.forwardRef(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      plugins
    );
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const onSelect = React.useCallback((api) => {
      if (!api) {
        return;
      }
      console.info(api.selectedScrollSnap());
      setSelectedIndex(api.selectedScrollSnap());
    }, []);

    const onDotButtonClick = React.useCallback(
      (index) => {
        if (!api) return;
        api.scrollTo(index);
      },
      [api]
    );

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on('reInit', onSelect);
      api.on('select', onSelect);

      return () => {
        api?.off('select', onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
          scrollPrev,
          scrollNext,
          onDotButtonClick,
          selectedIndex,
        }}>
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn('relative', className)}
          role="region"
          aria-roledescription="carousel"
          {...props}>
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = 'Carousel';

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation, onDotButtonClick, selectedIndex } =
    useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className
        )}
        {...props}
      />
      <div className="flex w-[30%] mx-auto gap-2 justify-center pt-4">
        {/* Prendo gli elementi dispari delle reviews per una navigazione coi punti migliore */}
        {props.children
          .filter((_, index) => index % 2 === 0)
          .map((item) => (
            <div
              key={item.key}
              onClick={() => onDotButtonClick(item.key)}
              className={`cursor-pointer bg-cta py-2 rounded-full text-secondary flex items-center justify-center transition-all duration-300 ${
                selectedIndex == item.key ? 'px-4' : 'px-2'
              }`}
            />
          ))}
      </div>
    </div>
  );
});
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        'relative flex flex-col justify-between gap-4 basis-1/3 bg-primary shadow-xl text-secondary p-8 shrink-0 rounded-2xl hover:cursor-grab select-none',
        className
      )}
      {...props}>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          {Array.from({ length: props.review.rating }, (_, index) => (
            <FaStar key={index} className="text-cta text-2xl" />
          ))}
        </div>
        <FaQuoteRight className="absolute top-5 right-5 text-5xl text-secondary/20" />
        <p className="italic w-[90%] text-muted min-h-[100px]">
          {props.review.text}
        </p>
      </div>

      <h5 className="uppercase font-display border-t-1 border-secondary/20 pt-2 text-2xl tracking-wider">
        {props.review.name}
      </h5>
    </div>
  );
});
CarouselItem.displayName = 'CarouselItem';
export { Carousel, CarouselContent, CarouselItem };
