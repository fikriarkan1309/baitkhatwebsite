import React from 'react';
import { Award, Compass, Heart, ShieldCheck, HelpCircle } from 'lucide-react';
import { BRAND_COMPANY } from '../data';

export default function AboutSection() {
  return (
    <div id="about-section-wrapper" className="space-y-0 pt-20">
      
      {/* Mini Top Banner with warm tone */}
      <section className="bg-neutral-900 py-16 text-white text-center relative overflow-hidden">
        {/* Soft background watermark */}
        <span className="absolute -bottom-16 left-10 font-serif text-[12rem] text-white/5 select-none pointer-events-none">ت</span>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-[10px] uppercase font-bold text-brand-green bg-white/10 px-3 py-1 rounded-full tracking-wider">Mengenal Bait Khat</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold leading-tight">Company Profile & Visi Misi Kami</h2>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">Mendampingi setiap peminat seni hingga mampu menulis dengan kecerdasan rasa dan rasm klasik yang muqahhar.</p>
        </div>
      </section>

      {/* Main content body */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Visual asset frame left */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200">
              <img
                src="/src/assets/images/calligraphy_classroom_hands_1781882201288.jpg"
                alt="Sejarah Kalam di Bait Khat"
                referrerPolicy="no-referrer"
                className="w-full object-cover aspect-video sm:aspect-square"
              />
              {/* Overlapping badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur shadow p-4 rounded-xl border border-brand-green/20">
                <span className="block text-[10px] text-brand-green font-extrabold uppercase tracking-widest leading-none mb-1">Motto Lembaga</span>
                <span className="block font-serif text-neutral-800 text-sm font-bold italic">"Ash-Shabru miftahu kulli husn - Kesabaran adalah pemegang kunci seluruh keelokan seni."</span>
              </div>
            </div>

            {/* Historical narrative right */}
            <div className="space-y-5">
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-snug">
                {BRAND_COMPANY.aboutTitle}
              </h3>
              <p className="font-sans text-neutral-600 text-sm leading-relaxed">
                {BRAND_COMPANY.history}
              </p>

              {/* Dynamic stats tracker cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-neutral-100">
                {BRAND_COMPANY.stats.map((st, idx) => (
                  <div key={idx} className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 text-center">
                    <span className="block text-2xl font-serif font-extrabold text-brand-green leading-none">{st.value}</span>
                    <span className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider mt-1.5 leading-none">{st.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Vision & Mission values block */}
      <section className="py-16 bg-brand-light/50 border-t border-brand-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Vision pillar */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-200 flex flex-col space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                <Compass size={22} />
              </div>
              <h4 className="font-sans font-extrabold text-lg text-neutral-800">Visi Utama</h4>
              <p className="text-neutral-600 text-xs leading-relaxed">{BRAND_COMPANY.vision}</p>
            </div>

            {/* Mission steps (spans 2 columns) */}
            <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-neutral-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                    <ShieldCheck size={22} />
                  </div>
                  <h4 className="font-sans font-extrabold text-lg text-neutral-800">Misi Perjuangan</h4>
                </div>
                
                <div className="space-y-3.5 mt-5">
                  {BRAND_COMPANY.mission.map((ms, idx) => (
                    <div key={idx} className="flex space-x-3.5 items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-green text-white flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                        {idx + 1}
                      </div>
                      <p className="text-neutral-600 text-xs leading-relaxed">{ms}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-neutral-100 pt-4 mt-6 text-neutral-400 text-[10px] flex items-center space-x-1.5">
                <Heart size={12} className="text-red-500" />
                <span>Terakreditasi dan diakui secara nasional.</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
