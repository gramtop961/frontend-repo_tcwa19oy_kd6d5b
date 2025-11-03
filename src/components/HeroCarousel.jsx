import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slidesData = [
  {
    title: 'Photography',
    subtitle: 'Candid • Pre-wedding • Reels • Studio',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Videography',
    subtitle: 'Cinematic • Live Event • Reels',
    img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'DJ',
    subtitle: 'Weddings • Corporate • Parties',
    img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Stage Decoration',
    subtitle: 'Themes • Lighting • Backdrops',
    img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Gift Packing',
    subtitle: 'Custom Boxes • Themed Wrapping',
    img: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Catering',
    subtitle: 'Vegetarian • Non-vegetarian • Desserts',
    img: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Editing',
    subtitle: 'Video • Photo • Color Grading',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop',
  },
];

const HeroCarousel = ({ onPrimaryAction }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const slides = useMemo(() => slidesData, []);

  useEffect(() => {
    const next = () => setIndex((i) => (i + 1) % slides.length);
    timeoutRef.current = setTimeout(next, 4500);
    return () => clearTimeout(timeoutRef.current);
  }, [index, slides.length]);

  const goTo = (i) => setIndex((i + slides.length) % slides.length);

  return (
    <section id="home" className="relative pt-16">
      <div className="relative h-[72vh] md:h-[80vh] w-full overflow-hidden rounded-b-3xl">
        {slides.map((s, i) => (
          <div
            key={s.title}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
            aria-hidden={i !== index}
          >
            <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-16 md:translate-x-0 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">{s.title}</h1>
              <p className="mt-2 text-white/90 md:text-lg">{s.subtitle}</p>
              <button
                onClick={onPrimaryAction}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-2.5 text-sm font-medium shadow hover:shadow-lg active:scale-[.98]"
              >
                Explore & Book
              </button>
            </div>
          </div>
        ))}

        <button
          aria-label="Previous"
          onClick={() => goTo(index - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white shadow p-2"
        >
          <ChevronLeft />
        </button>
        <button
          aria-label="Next"
          onClick={() => goTo(index + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white shadow p-2"
        >
          <ChevronRight />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 w-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
