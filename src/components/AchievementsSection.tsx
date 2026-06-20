import React from 'react';
import { Award, Trophy, Star, Quote, ChevronRight } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data';

interface AchievementsSectionProps {
  onOpenRegister: (programId?: string) => void;
}

export default function AchievementsSection({ onOpenRegister }: AchievementsSectionProps) {
  return (
    <div id="achievements-section-wrapper" className="space-y-0 pt-20">
      
      {/* Banner */}
      <section className="bg-neutral-900 py-16 text-white text-center relative overflow-hidden">
        <span className="absolute -bottom-16 right-12 font-serif text-[12rem] text-white/5 select-none pointer-events-none">خ</span>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-[10px] uppercase font-bold text-brand-green bg-white/10 px-3 py-1 rounded-full tracking-wider">Puncak Dedikasi</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold leading-tight">Lembar Kehormatan & Prestasi Siswa</h2>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Saksi kerja keras, ketelatenan jari jemari, dan kesabaran jiwa melahirkan juara-juara baru di tingkat regional maupun mancanegara.
          </p>
        </div>
      </section>

      {/* Main Core achievements lists */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Real student achievement tiles (spans 2 cols) */}
            <div className="lg:col-span-2 space-y-8">
              <span className="block text-xs font-bold text-neutral-400 uppercase tracking-widest leading-none mb-1">Daftar Prestasi Utama</span>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ACHIEVEMENTS_DATA.map((ach) => (
                  <div
                    key={ach.id}
                    className="bg-neutral-50 rounded-2xl border border-neutral-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition-all"
                  >
                    {/* Achievement badge/image */}
                    <div className="aspect-[16/10] bg-neutral-100 relative overflow-hidden">
                      <img
                        src={ach.image}
                        alt={ach.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover select-none"
                      />
                      <div className="absolute top-3 left-3 bg-brand-green/90 backdrop-blur text-white font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm flex items-center">
                        <Trophy size={11} className="mr-1 text-brand-accent h-4" />
                        <span>{ach.year}</span>
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-1.5">
                        <span className="text-brand-green text-[10px] font-extrabold uppercase tracking-widest block leading-none">
                          {ach.rank}
                        </span>
                        <h4 className="font-sans font-extrabold text-sm text-neutral-800 leading-snug">
                          {ach.title}
                        </h4>
                        <p className="text-neutral-500 text-xs leading-relaxed font-sans line-clamp-3">
                          {ach.description}
                        </p>
                      </div>

                      <div className="border-t border-neutral-200 pt-3 flex justify-between items-center text-[10px] text-neutral-400 font-sans">
                        <span>Penerima:</span>
                        <strong className="text-neutral-700">{ach.studentName}</strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar with quick stats summary of medals */}
            <div className="space-y-6">
              <span className="block text-xs font-bold text-neutral-400 uppercase tracking-widest leading-none mb-1">Rekap Medali & Prestasi</span>
              
              <div className="bg-brand-light/70 p-6 rounded-2xl border border-brand-green/20 space-y-6">
                <div className="flex items-center space-x-2">
                  <Award className="text-brand-green" size={24} />
                  <h4 className="font-sans font-bold text-base text-neutral-800">Total Kategori Menang</h4>
                </div>
                
                <div className="space-y-4">
                  
                  {/* Row 1 */}
                  <div className="bg-white p-3.5 rounded-xl border border-neutral-200 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded bg-amber-100 flex items-center justify-center text-amber-600 font-bold">1</div>
                      <span className="text-xs text-neutral-700 font-semibold">Juara 1 Tingkat Nasional</span>
                    </div>
                    <span className="text-brand-green font-mono font-black text-sm">8x</span>
                  </div>

                  {/* Row 2 */}
                  <div className="bg-white p-3.5 rounded-xl border border-neutral-200 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded bg-neutral-200 flex items-center justify-center text-neutral-600 font-bold">2</div>
                      <span className="text-xs text-neutral-700 font-semibold">Juara 2 Tingkat Nasional</span>
                    </div>
                    <span className="text-brand-green font-mono font-black text-sm">12x</span>
                  </div>

                  {/* Row 3 */}
                  <div className="bg-white p-3.5 rounded-xl border border-neutral-200 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded bg-amber-500/10 flex items-center justify-center text-amber-800 font-bold">3</div>
                      <span className="text-xs text-neutral-700 font-semibold">Pencapaian Internasional</span>
                    </div>
                    <span className="text-brand-green font-mono font-black text-sm">5x</span>
                  </div>

                </div>

                <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center space-y-2">
                  <span className="text-[10px] text-neutral-400 block font-bold uppercase tracking-wider">Ingin Mengukir Prestasi?</span>
                  <p className="text-[11px] text-neutral-500 leading-normal">Bimbingan intensif kami menyertakan strategi portofolio, keseimbangan rani (penilaian dewan), dan melukis tezhip klasik.</p>
                  <button
                    onClick={() => onOpenRegister()}
                    className="w-full py-2 bg-brand-green hover:bg-brand-green-hover text-white rounded text-xs font-bold transition-colors cursor-pointer"
                  >
                    Daftar Bimbingan Privat
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
