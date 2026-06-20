import React, { useState } from 'react';
import { Calendar, MapPin, Gift, Tag, CheckCircle2, Ticket, Copy } from 'lucide-react';
import { EVENTS_DATA } from '../data';

interface EventsSectionProps {
  onOpenRegister: (programId?: string) => void;
}

export default function EventsSection({ onOpenRegister }: EventsSectionProps) {
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  return (
    <div id="events-section-wrapper" className="space-y-0 pt-20">
      
      {/* Banner */}
      <section className="bg-neutral-900 py-16 text-white text-center relative overflow-hidden">
        <span className="absolute -bottom-16 left-12 font-serif text-[12rem] text-white/5 select-none pointer-events-none">%</span>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-[10px] uppercase font-bold text-brand-green bg-white/10 px-3 py-1 rounded-full tracking-wider">Halaman Dinamis</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold leading-tight">Olimpiade, Event & Promo Menarik</h2>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Ikuti berbagai kegiatan seru perlombaan kaligrafi tingkat nasional, lokakarya khusus hiasan tezhip, dan promo beasiswa belajar di Bait Khat.
          </p>
        </div>
      </section>

      {/* Core events grids */}
      <section className="py-16 bg-white animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENTS_DATA.map((evt) => (
              <div
                key={evt.id}
                className="bg-[#fafafa] rounded-2xl border border-neutral-200 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-lg transition-all"
              >
                {/* Visual cover box */}
                <div className="aspect-[16/9] bg-neutral-100 relative overflow-hidden">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none"
                  />
                  <span className={`absolute top-3 left-3 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full text-white ${
                    evt.badge === 'Olimpiade' ? 'bg-[#017B1D]' : evt.badge === 'Promo' ? 'bg-amber-500' : 'bg-indigo-600'
                  }`}>
                    {evt.badge}
                  </span>

                  {evt.badge === 'Promo' && evt.discountCode && (
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur px-2.5 py-1.5 rounded-lg border border-neutral-200 flex items-center space-x-1.5 text-xs text-neutral-800 shadow">
                      <Tag size={12} className="text-brand-green" />
                      <span className="font-bold font-mono text-brand-green">{evt.discountCode}</span>
                    </div>
                  )}
                </div>

                {/* Content info */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    {/* Date and Location metadata */}
                    <div className="flex flex-col sm:flex-row gap-2 text-[10px] font-semibold text-neutral-400 uppercase tracking-wider pb-1 border-b border-neutral-200/60 leading-none">
                      <span className="flex items-center">
                        <Calendar size={11} className="mr-1 h-3 shrink-0" />
                        {evt.date}
                      </span>
                      <span className="hidden sm:inline">•</span>
                      <span className="flex items-center max-w-[150px] truncate" title={evt.location}>
                        <MapPin size={11} className="mr-0.5 h-3 shrink-0" />
                        {evt.location}
                      </span>
                    </div>

                    <h4 className="font-sans font-extrabold text-base text-neutral-800 leading-snug">
                      {evt.title}
                    </h4>

                    <p className="text-neutral-500 text-xs leading-relaxed">
                      {evt.description}
                    </p>
                  </div>

                  {/* Actions bottom */}
                  <div className="border-t border-neutral-200 pt-4 flex items-center justify-between">
                    <div>
                      {evt.badge === 'Promo' ? (
                        <span className="text-[10px] text-amber-600 font-bold bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                          Potongan Spesial!
                        </span>
                      ) : (
                        <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                          Terbuka Umum
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-1.5">
                      {evt.badge === 'Promo' && evt.discountCode ? (
                        <button
                          onClick={() => handleCopyCode(evt.discountCode!, evt.id)}
                          className="p-2 bg-neutral-100 hover:bg-neutral-250 border border-neutral-300 rounded-xl text-neutral-700 text-xs font-bold flex items-center space-x-1 transition-colors cursor-pointer"
                        >
                          <Copy size={12} />
                          <span>{copiedCodeId === evt.id ? 'Salin!' : 'Salin Voucher'}</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => onOpenRegister()}
                          className="p-2 px-3.5 bg-brand-green hover:bg-brand-green-hover text-white text-xs font-bold rounded-xl shadow cursor-pointer transition-colors"
                        >
                          {evt.ctaText}
                        </button>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
