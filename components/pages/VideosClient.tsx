"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Calendar, Clock, Play, ExternalLink } from "lucide-react";
import { useLocale, useSiteContent } from "@/contexts/LocaleContext";

export default function VideosClient() {
  const { t } = useLocale();
  const { videoPlaylists } = useSiteContent();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#996600] bg-amber-100 px-3.5 py-1 rounded-full mb-3 inline-block">
              {t("videos.badge")}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#663300] tracking-tight mb-4">
              {t("videos.title")}
            </h1>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              {t("videos.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {videoPlaylists.map((vid) => (
              <div
                key={vid.id}
                className="rounded-3xl bg-white border border-amber-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-amber-950 group">
                    <Image
                      src={vid.thumbnailUrl}
                      alt={vid.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                      <div className="w-14 h-14 rounded-full bg-[#996600]/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 ml-1 fill-white" />
                      </div>
                    </div>

                    <span className="absolute bottom-3 right-3 text-[11px] font-bold text-white bg-black/70 px-2 py-0.5 rounded flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {vid.duration}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
                      <Calendar className="w-3.5 h-3.5 text-amber-600" />
                      <span>{vid.date}</span>
                    </div>

                    <h2 className="font-serif text-lg font-bold text-zinc-900 mb-2 line-clamp-2 leading-snug">
                      {vid.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed line-clamp-3">
                      {vid.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={vid.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-amber-50 hover:bg-[#996600] text-[#7a5200] hover:text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <span>{t("videos.watch")}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
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
