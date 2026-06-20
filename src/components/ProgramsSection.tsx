import React, { useState } from 'react';
import { Calendar, Users, Briefcase, Star, Search, ShieldCheck, CheckCircle2, ChevronRight, Video, FileText } from 'lucide-react';
import { PROGRAMS_DATA } from '../data';

interface ProgramsSectionProps {
  onOpenRegister: (programId?: string) => void;
  onOpenLms: () => void;
}

export default function ProgramsSection({ onOpenRegister, onOpenLms }: ProgramsSectionProps) {
  const [typeFilter, setTypeFilter] = useState<'all' | 'offline' | 'online'>('all');
  const [levelFilter, setLevelFilter] = useState<'all' | 'Dasar' | 'Menengah' | 'Mahir'>('all');

  const filtered = PROGRAMS_DATA.filter((prog) => {
    const matchType = typeFilter === 'all' || prog.type === typeFilter;
    const matchLevel = levelFilter === 'all' || prog.level === levelFilter;
    return matchType && matchLevel;
  });

  return (
    <div id="programs-section-wrapper" className="space-y-0 pt-20">
      
      {/* Upper header */}
      <section className="bg-neutral-900 py-16 text-white text-center relative overflow-hidden">
        <span className="absolute -bottom-16 right-10 font-serif text-[12rem] text-white/5 select-none pointer-events-none">ق</span>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-[10px] uppercase font-bold text-brand-green bg-white/10 px-3 py-1 rounded-full tracking-wider">Investasi Masa Depan Mulia</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold leading-tight">Kurikulum Kelas & Program Belajar</h2>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Pilih tingkat kecakapan Anda. Dari nol dasar memegang pena khath hingga menyusun karya agung bersertifikat.
          </p>
        </div>
      </section>

      {/* Main Core Programs Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters Dashboard */}
          <div className="bg-neutral-50 px-5 py-4 rounded-2xl border border-neutral-200 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            {/* Filter by Study format */}
            <div>
              <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none mb-2">Metode Belajar</span>
              <div className="flex space-x-1">
                {(['all', 'offline', 'online'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setTypeFilter(mode)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      typeFilter === mode 
                        ? 'bg-brand-green text-white shadow-sm' 
                        : 'text-neutral-600 hover:bg-neutral-200 bg-white border border-neutral-300'
                    }`}
                  >
                    {mode === 'all' ? 'Semua Metode' : mode === 'offline' ? 'Tatap Muka' : 'Online LMS'}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by Difficulty level */}
            <div>
              <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none mb-2">Tingkat Kesulitan</span>
              <div className="flex space-x-1">
                {(['all', 'Dasar', 'Menengah', 'Mahir'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setLevelFilter(lvl)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      levelFilter === lvl
                        ? 'bg-brand-green text-white shadow-sm' 
                        : 'text-neutral-600 hover:bg-neutral-200 bg-white border border-neutral-300'
                    }`}
                  >
                    {lvl === 'all' ? 'Semua Tingkat' : lvl}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Search Match Counter stat block */}
            <div className="text-right flex-shrink-0 self-start md:self-auto">
              <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none mb-1">Hasil Pencarian</span>
              <span className="font-mono text-xs font-extrabold text-neutral-700 bg-neutral-200 px-2 py-1 rounded">
                {filtered.length} Kategori Ditemukan
              </span>
            </div>
          </div>

          {/* Empty search fallback */}
          {filtered.length === 0 && (
            <div className="text-center py-16 border rounded-2xl bg-neutral-50/50 border-neutral-200 max-w-xl mx-auto space-y-3">
              <span className="text-lg font-bold text-neutral-700 block">Maaf, Kelas Tidak Ditemukan</span>
              <p className="text-xs text-neutral-500 max-w-xs mx-auto">Kami terus memperluas kurikulum kelas lainnya. Silakan hubungi pusat informasi untuk usulan kelas khusus.</p>
              <button
                onClick={() => { setTypeFilter('all'); setLevelFilter('all'); }}
                className="px-4 py-2 bg-brand-green text-white font-bold rounded-lg text-xs cursor-pointer"
              >
                Reset Semua Filter
              </button>
            </div>
          )}

          {/* Grid listing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="programs-cards-flow">
            {filtered.map((prog) => (
              <div
                key={prog.id}
                className="bg-white border border-neutral-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Header card metadata */}
                <div className="bg-neutral-50 p-6 border-b border-neutral-100 flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-1.5 flex-wrap gap-y-1">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full text-white ${
                        prog.type === 'offline' ? 'bg-[#017B1D]' : 'bg-indigo-600'
                      }`}>
                        {prog.type === 'offline' ? 'Tatap Muka Studio' : 'Online LMS'}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 border border-amber-300 text-amber-800 px-2.5 py-0.5 rounded-full">
                        Level: {prog.level}
                      </span>
                    </div>
                    <h3 className="font-sans font-extrabold text-xl text-neutral-800 mt-2">{prog.title}</h3>
                  </div>
                  
                  {/* Circle pricing indicator */}
                  <div className="text-right">
                    <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none mb-1">Pendidikan</span>
                    <span className="text-brand-green font-black text-sm sm:text-base leading-none block">{prog.price}</span>
                    <span className="text-[10px] text-neutral-400 font-mono mt-0.5">/{prog.period}</span>
                  </div>
                </div>

                {/* Main details body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-xs text-neutral-600 leading-relaxed">{prog.description}</p>
                    
                    {/* Mentor profile */}
                    <div className="bg-brand-light/40 border border-brand-green/10 rounded-xl p-3 flex items-center space-x-3 text-xs">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center font-bold">ب</div>
                      </div>
                      <div>
                        <span className="block text-[9px] font-bold text-neutral-400 uppercase tracking-widest">Pengajar Pembimbing (Mu`allim):</span>
                        <span className="font-bold text-neutral-800">{prog.instructor}</span>
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2">
                      <span className="block text-[10px] uppercase tracking-widest font-bold text-neutral-400">Keuntungan Fasilitas Siswa:</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-600">
                        {prog.features.map((feat, index) => (
                          <div key={index} className="flex items-start space-x-1.5">
                            <CheckCircle2 size={13} className="text-brand-green mt-0.5 flex-shrink-0" />
                            <span className="leading-tight">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Program schedule card */}
                  <div className="border-t border-neutral-100 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-neutral-500">
                    <div className="flex items-center space-x-2">
                      <Calendar size={13} className="text-neutral-400" />
                      <span>Jadwal: <strong className="text-neutral-700">{prog.schedule}</strong></span>
                    </div>

                    <div className="flex items-center space-x-2 w-full sm:w-auto">
                      <button
                        onClick={() => onOpenRegister(prog.id)}
                        className="flex-1 sm:flex-none p-2 px-4 bg-brand-green hover:bg-brand-green-hover text-white text-xs font-bold rounded-xl shadow cursor-pointer transition-colors"
                      >
                        Pilih Program
                      </button>
                      {prog.type === 'online' && (
                        <button
                          onClick={onOpenLms}
                          className="p-2 bg-neutral-50 hover:bg-neutral-100 border border-neutral-300 text-neutral-700 text-xs font-bold rounded-xl cursor-pointer"
                        >
                          Masuk LMS
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
