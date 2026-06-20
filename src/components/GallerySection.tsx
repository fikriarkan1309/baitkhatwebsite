import React, { useState } from 'react';
import { Search, Eye, X, BookOpen, Clock, Award, MoveRight } from 'lucide-react';
import { ARTWORKS_DATA, calligraphicStylesDescription } from '../data';
import { CalligraphyArtwork } from '../types';

interface GallerySectionProps {
  onOpenRegister: (programId?: string) => void;
}

export default function GallerySection({ onOpenRegister }: GallerySectionProps) {
  const [activeStyleFilter, setActiveStyleFilter] = useState<'all' | 'Tsuluts' | 'Diwani' | 'Kufi' | 'Naskhi'>('all');
  const [selectedArtwork, setSelectedArtwork] = useState<CalligraphyArtwork | null>(null);

  const filteredArtworks = ARTWORKS_DATA.filter((art) => {
    return activeStyleFilter === 'all' || art.style === activeStyleFilter;
  });

  return (
    <div id="gallery-section-wrapper" className="space-y-0 pt-20">
      
      {/* Upper Title banner block */}
      <section className="bg-neutral-900 py-16 text-white text-center relative overflow-hidden">
        <span className="absolute -bottom-16 left-12 font-serif text-[12rem] text-white/5 select-none pointer-events-none">ص</span>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-[10px] uppercase font-bold text-brand-green bg-white/10 px-3 py-1 rounded-full tracking-wider">Etalase Karya Utama</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold leading-tight">Galeri Seni Kaligrafi Bait Khat</h2>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Apresiasi keindahan goresan pena tradisional milik mu'allim (ustadz) serta karya terbaik portofolio lulusan santri berprestasi kami.
          </p>
        </div>
      </section>

      {/* Style Educational Cards Guide Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 space-y-2">
            <span className="font-sans font-bold text-xs text-brand-green uppercase tracking-widest block">Mengenal Gaya Khat Klasi</span>
            <h3 className="font-serif text-2xl font-black text-neutral-800">Uraian 6 Karakter Gaya Tulis Utama</h3>
          </div>

          {/* Grid list descriptions card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(calligraphicStylesDescription).map(([styleName, desc]) => (
              <div
                key={styleName}
                onClick={() => {
                  const mappedFilter = styleName as any;
                  if (['Tsuluts', 'Diwani', 'Kufi', 'Naskhi'].includes(styleName)) {
                    setActiveStyleFilter(mappedFilter);
                  }
                }}
                className={`p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 ${
                  activeStyleFilter === styleName
                    ? 'border-brand-green bg-brand-green/5 shadow-md scale-102 ring-1 ring-brand-green/20'
                    : 'border-neutral-200 hover:border-brand-green/30 bg-[#fafafa] hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl font-bold text-brand-green">{styleName}</span>
                  <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest font-mono">
                    {['Tsuluts', 'Diwani', 'Kufi', 'Naskhi'].includes(styleName) ? 'Filter Galeri' : 'Ulasan Gaya'}
                  </span>
                </div>
                <p className="text-neutral-600 text-xs mt-2.5 leading-relaxed font-sans">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive actual gallery feed */}
      <section className="py-12 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Filter Pills */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="space-y-1">
              <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none">Filter Portofolio</span>
              <p className="text-xs text-neutral-500">Klik gaya di bawah untuk memilah goresan visual secara spesifik.</p>
            </div>

            <div className="flex flex-wrap gap-1.5 p-1 bg-white border border-neutral-200 rounded-xl shadow-sm self-start sm:self-auto">
              {(['all', 'Tsuluts', 'Diwani', 'Kufi', 'Naskhi'] as const).map((style) => (
                <button
                  key={style}
                  onClick={() => setActiveStyleFilter(style)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeStyleFilter === style
                      ? 'bg-brand-green text-white shadow-sm'
                      : 'text-neutral-600 hover:bg-neutral-100 bg-transparent'
                  }`}
                >
                  {style === 'all' ? 'Tampilkan Semua' : style}
                </button>
              ))}
            </div>
          </div>

          {/* Fallback frame */}
          {filteredArtworks.length === 0 && (
            <div className="text-center py-16 bg-white border rounded-xl max-w-sm mx-auto space-y-2">
              <span className="font-bold text-neutral-700 block">Karya Segera Hadir</span>
              <p className="text-xs text-neutral-500">Katalog karya gaya ini sedang dalam proses digitalisasi kurator.</p>
            </div>
          )}

          {/* Grid display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="gallery-mesh-canvas">
            {filteredArtworks.map((art) => (
              <div
                key={art.id}
                onClick={() => setSelectedArtwork(art)}
                className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {/* Image thumb */}
                <div className="aspect-square bg-neutral-100 relative overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                  />
                  {/* Hover icon inspect overlay */}
                  <div className="absolute inset-0 bg-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white text-brand-green flex items-center justify-center shadow-md">
                      <Eye size={18} />
                    </div>
                  </div>

                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-brand-green rounded px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest font-mono">
                    Gaya: {art.style}
                  </span>
                </div>

                {/* Info Text block */}
                <div className="p-4 space-y-1">
                  <h4 className="font-sans font-bold text-neutral-800 text-sm truncate">{art.title}</h4>
                  <div className="flex justify-between items-center text-[11px] text-neutral-400">
                    <span className="truncate max-w-[120px] font-semibold text-neutral-500">{art.artist}</span>
                    <span>Th {art.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. MAGNIFY ARTWORK DETAILED ZOOM MODAL */}
      {selectedArtwork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden border border-brand-green/15 flex flex-col md:flex-row h-[80vh] md:h-auto">
            
            {/* Visual Frame Left */}
            <div className="flex-1 bg-neutral-900 overflow-hidden relative flex items-center justify-center">
              <img
                src={selectedArtwork.image}
                alt={selectedArtwork.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover md:object-contain select-none max-h-[40vh] md:max-h-[70vh]"
              />
              <span className="absolute bottom-3 left-3 bg-black/60 text-white text-[10px] font-mono p-1 rounded px-2">
                HD Preview Inspect
              </span>
            </div>

            {/* Description Details Right */}
            <div className="w-full md:w-80 p-6 flex flex-col justify-between bg-neutral-50 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                  <div className="flex items-center space-x-1">
                    <span className="font-serif text-lg bg-brand-green/10 text-brand-green rounded px-2 py-0.5 font-bold">ب</span>
                    <span className="text-xs font-bold text-neutral-400">BAIT KHAT MUSEUM</span>
                  </div>
                  <button
                    onClick={() => setSelectedArtwork(null)}
                    className="p-1 rounded-full hover:bg-neutral-200 text-neutral-500 cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] bg-brand-green/10 text-brand-green border border-brand-green/20 rounded px-2.5 py-0.5 font-bold uppercase tracking-wider inline-block">
                    Khat {selectedArtwork.style}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-neutral-900 leading-tight">
                    {selectedArtwork.title}
                  </h3>
                </div>

                <div className="space-y-2.5 text-xs text-neutral-600 bg-white border border-neutral-200 p-3 rounded-xl shadow-inner">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Kaligrafer (Artist):</span>
                    <strong className="text-neutral-800">{selectedArtwork.artist}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Tahun Pembuatan:</span>
                    <strong className="text-neutral-800">{selectedArtwork.year} M</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Kertas Media:</span>
                    <strong className="text-neutral-800">Muqahhar sutra bambu</strong>
                  </div>
                </div>

                <p className="text-neutral-500 text-xs leading-relaxed italic">
                  "{selectedArtwork.description}"
                </p>
              </div>

              {/* CTAs */}
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setSelectedArtwork(null);
                    onOpenRegister();
                  }}
                  className="w-full py-2.5 bg-brand-green hover:bg-brand-green-hover text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center"
                >
                  Daftar Kelas Terkait
                </button>
                <button
                  onClick={() => setSelectedArtwork(null)}
                  className="w-full py-2 bg-neutral-200 hover:bg-neutral-300 text-neutral-700 rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Tutup Kamar Museum
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
