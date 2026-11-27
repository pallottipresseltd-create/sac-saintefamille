"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteContent } from "@/data/site-content";
import { useLocale, heroSlideKeyMap } from "@/contexts/LocaleContext";

export default function HeroSlider() {
  const slides = siteContent.heroSlides;
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section 
      className="relative w-full h-[480px] sm:h-[560px] lg:h-[620px] bg-zinc-950 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Carrousel d'accueil de la Province Sainte Famille"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="relative w-full h-full">
            <Image
              src={slide.imageUrl}
              alt={slide.title}
              fill
              className="object-cover object-center scale-105 transition-transform duration-10000 ease-out"
              priority={index === 0}
              sizes="100vw"
            />
            {/* Dégradé sacré protecteur de texte */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30" />
            <div className="absolute inset-0 bg-[#4a2e00]/25 mix-blend-multiply" />
          </div>

          {/* Caption Content */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-5 sm:px-12 text-center text-white">
              <span className="inline-block px-3.5 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-[#996600]/90 text-amber-100 rounded-full border border-amber-400/30 backdrop-blur-sm">
                {t("hero.sac")}
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 drop-shadow-md leading-tight">
                {heroSlideKeyMap[slide.id] ? t(heroSlideKeyMap[slide.id].title) : slide.title}
              </h1>
              <p className="text-base sm:text-xl lg:text-2xl text-amber-100/90 font-light max-w-2xl mx-auto mb-8 drop-shadow">
                {heroSlideKeyMap[slide.id] ? t(heroSlideKeyMap[slide.id].subtitle) : slide.subtitle}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/communautes-et-oeuvres"
                  className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#996600] hover:bg-[#b37700] text-white shadow-lg hover:shadow-xl transition-all"
                >
                  {t("hero.discover")}
                </Link>
                <Link
                  href="/identite/charisme"
                  className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm transition-all"
                >
                  {t("hero.charism")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Flèches de navigation */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all border border-white/10 items-center justify-center"
        aria-label={t("hero.prev")}
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all border border-white/10 items-center justify-center"
        aria-label={t("hero.next")}
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Indicateurs / Puces */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 transition-all rounded-full ${
              idx === current ? "w-8 bg-amber-400" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`${t("hero.goto")} ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
