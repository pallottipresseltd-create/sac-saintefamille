"use client";

import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, MapPin, Images } from "lucide-react";
import { useLocale, useSiteContent } from "@/contexts/LocaleContext";

export default function PhotosClient() {
  const { t } = useLocale();
  const { photoAlbums } = useSiteContent();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#996600] bg-amber-100 px-3.5 py-1 rounded-full mb-3 inline-block">
              {t("photos.badge")}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#663300] tracking-tight mb-4">
              {t("photos.title")}
            </h1>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              {t("photos.desc")}
            </p>
          </div>

          <div className="space-y-16">
            {photoAlbums.map((album) => (
              <div
                key={album.id}
                className="rounded-3xl bg-white border border-amber-100 p-8 sm:p-10 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-amber-50">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-zinc-900 mb-1">
                      {album.title}
                    </h2>
                    <div className="flex items-center gap-4 text-xs text-zinc-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-amber-600" />
                        <span>{album.date}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-600" />
                        <span>{album.location}</span>
                      </span>
                    </div>
                  </div>

                  <span className="px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold flex items-center gap-1.5">
                    <Images className="w-4 h-4 text-[#996600]" />
                    <span>{album.photoCount} {t("photos.count")}</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {album.images.map((img, idx) => (
                    <div key={idx} className="group rounded-2xl overflow-hidden bg-amber-950 border border-amber-100/60 shadow-sm">
                      <div className="relative h-64 w-full">
                        <Image
                          src={img.url}
                          alt={img.caption}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <p className="absolute bottom-3 left-3 right-3 text-xs text-white font-medium line-clamp-2">
                          {img.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
