import React, { useState } from 'react';
import { Award, Feather, BookOpen, Users, ChevronLeft, ChevronRight, ArrowRight, CheckCircle2, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { PROGRAMS_DATA, TESTIMONIALS_DATA, CORE_ADVANTAGES, calligraphicStylesDescription } from '../data';
import { ActiveSection } from '../types';

interface HomeSectionProps {
  onOpenRegister: (programId?: string) => void;
  setActiveSection: (section: ActiveSection) => void;
  onOpenLms: () => void;
}

export default function HomeSection({ onOpenRegister, setActiveSection, onOpenLms }: HomeSectionProps) {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [programFilter, setProgramFilter] = useState<'all' | 'offline' | 'online'>('all');

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const filteredPrograms = PROGRAMS_DATA.filter((p) => {
    if (programFilter === 'all') return true;
    return p.type === programFilter;
  });

  // Helper to map text icons to Lucide components
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-8 h-8 text-brand-green" />;
      case 'Feather': return <Feather className="w-8 h-8 text-brand-green" />;
      case 'BookOpen': return <BookOpen className="w-8 h-8 text-brand-green" />;
      case 'Users': return <Users className="w-8 h-8 text-brand-green" />;
      default: return <Award className="w-8 h-8 text-brand-green" />;
    }
  };

  return (
    <div id="home-view-wrapper" className="space-y-0">
      
      {/* 1. HERO SECTION (Full-bleed / Lebar Penuh) */}
      <section 
        id="hero-section" 
        className="relative min-h-[92vh] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-neutral-950"
      >
        {/* Background Image with Dark Green Overlay */}
        <div className="absolute inset-0 z-0 select-none">
          <img
            src="/src/assets/images/calligraphy_hero_banner_1781882184826.jpg"
            alt="Bait Khat Calligraphy Banner background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-40 scale-105 filter brightness-90 saturate-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950 via-neutral-900/90 to-brand-green/45 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/40" />
        </div>

        {/* Decorative subtle floating calligraphic background pattern */}
        <div className="absolute inset-0 calligraphy-bg-pattern opacity-30 select-none pointer-events-none" />

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-6 px-2 mt-12 sm:mt-16">
          <span className="inline-flex items-center space-x-1 px-3.5 py-1.5 rounded-full bg-brand-green/20 border border-brand-green/45 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm animate-pulse-slow">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping mr-1.5" />
            Akademi Seni Kaligrafi Terdepan & Bersanad
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Kuasai Seni Khat Arab dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-emerald-400">Panduan Ahli</span>
          </h1>

          <p className="font-sans text-neutral-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Menghubungkan ketelitian goresan pena tradisional bersertifikat Sanad Internasional Turkiye dengan kenyamanan pembelajaran modern berbasis LMS digital interaktif.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenRegister()}
              className="w-full sm:w-auto px-8 py-4 bg-brand-green hover:bg-brand-green-hover text-white text-sm font-bold tracking-wider rounded-xl shadow-lg glow-btn sm:transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              Mulai Daftar Kelas
            </button>
            <button
              onClick={() => setActiveSection('programs')}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white text-sm font-bold tracking-wider rounded-xl border border-white-30 hover:border-white transition-all duration-300 cursor-pointer flex items-center justify-center space-x-1.5"
            >
              <span>Lihat Pilihan Program</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Quick stats tags row in hero footer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-10 text-white/80 border-t border-white/10">
            <div className="text-center">
              <span className="font-serif text-2xl font-bold block text-brand-accent">1.500+</span>
              <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Alumni Aktif</span>
            </div>
            <div className="text-center">
              <span className="font-serif text-2xl font-bold block text-brand-accent">4.9/5</span>
              <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Kepuasan Siswa</span>
            </div>
            <div className="text-center">
              <span className="font-serif text-2xl font-bold block text-brand-accent">25+</span>
              <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Prestasi Lomba</span>
            </div>
            <div className="text-center">
              <span className="font-serif text-2xl font-bold block text-brand-accent">100%</span>
              <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Garansi Tashhih</span>
            </div>
          </div>
        </div>
      </section>


      {/* 2. SECTION KEUNGGULAN */}
      <section id="features-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="block text-brand-green font-bold text-xs uppercase tracking-widest leading-none">Keunggulan Utama</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-neutral-900 leading-tight">
              Mengapa Memilih Belajar di BAIT KHAT?
            </h2>
            <div className="w-16 h-1 bg-brand-green mx-auto rounded-full" />
            <p className="font-sans text-neutral-500 text-sm leading-relaxed max-w-2xl mx-auto">
              Kami tidak sekedar mengajarkan menulis indah, kami membimbing pembentukan karakter presisi tinggi, warisan sejarah luhur, dan sertifikasi keahlian terstandar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_ADVANTAGES.map((adv, index) => (
              <div 
                key={index} 
                className="group relative bg-neutral-50 hover:bg-brand-green/5 p-6 rounded-2xl border border-neutral-200 hover:border-brand-green/30 transition-all duration-300 flex flex-col space-y-4 hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                  {renderIcon(adv.icon)}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-base text-neutral-800 transition-colors group-hover:text-brand-green mb-1">{adv.title}</h4>
                  <p className="font-sans text-neutral-500 text-xs leading-relaxed">{adv.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 3. SECTION PILIHAN PROGRAM & KELAS (Cards Interaktif) */}
      <section id="programs-section" className="py-20 bg-brand-light/40 border-y border-brand-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row items-end justify-between mb-12">
            <div className="space-y-2 text-left max-w-2xl">
              <span className="block text-brand-green font-bold text-xs uppercase tracking-widest leading-none">Pilihan Program Terbaik</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-neutral-900 leading-tight">
                Pilih Program Belajar Sesuai Kebutuhanmu
              </h2>
              <p className="font-sans text-neutral-500 text-sm leading-relaxed">
                Dari bimbingan intensif langsung di studio hingga kebebasan akses video modul LMS kapan saja. Mulai langkah awalmu hari ini.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center space-x-1.5 p-1 bg-white border border-neutral-300 rounded-xl shadow-sm mt-6 md:mt-0 flex-shrink-0 self-start md:self-auto">
              <button
                onClick={() => setProgramFilter('all')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  programFilter === 'all' ? 'bg-brand-green text-white shadow-sm' : 'text-neutral-600 hover:bg-neutral-50'
                }`}
              >
                Semua Kelas
              </button>
              <button
                onClick={() => setProgramFilter('offline')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  programFilter === 'offline' ? 'bg-brand-green text-white shadow-sm' : 'text-neutral-600 hover:bg-neutral-50'
                }`}
              >
                Reguler Offline
              </button>
              <button
                onClick={() => setProgramFilter('online')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  programFilter === 'online' ? 'bg-brand-green text-white shadow-sm' : 'text-neutral-600 hover:bg-neutral-50'
                }`}
              >
                Online LMS
              </button>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPrograms.map((prog) => (
              <div 
                key={prog.id} 
                className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                {/* Thumbnail Image Box */}
                <div className="relative aspect-[21/9] bg-neutral-100 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none"
                  />
                  <div className="absolute top-3 left-3 flex space-x-1.5">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white shadow-sm ${
                      prog.type === 'offline' ? 'bg-[#017B1D]' : 'bg-indigo-650 bg-indigo-600'
                    }`}>
                      {prog.type === 'offline' ? 'Studio Offline' : 'LMS Online'}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white shadow-sm bg-brand-accent">
                      Level: {prog.level}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-sans font-extrabold text-lg text-neutral-800 leading-tight">
                      {prog.title}
                    </h3>
                    <p className="font-sans text-neutral-500 text-xs leading-relaxed">
                      {prog.description}
                    </p>

                    <div className="border-t border-neutral-100 pt-3 text-xs text-neutral-500 space-y-1.5">
                      <span className="block font-bold text-[10px] text-neutral-400 uppercase tracking-widest mb-1">Materi Utama Kelas:</span>
                      {prog.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 size={13} className="text-brand-green mt-0.5 flex-shrink-0" />
                          <span className="leading-tight">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Foot metadata & CTAs */}
                  <div className="border-t border-neutral-200 pt-4 flex items-center justify-between">
                    <div>
                      <span className="block text-[9px] font-bold text-neutral-400 uppercase tracking-widest leading-none mb-1">Investasi</span>
                      <span className="font-sans font-black text-brand-green text-lg leading-none">
                        {prog.price} <span className="font-normal text-xs text-neutral-500">/{prog.period}</span>
                      </span>
                    </div>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => onOpenRegister(prog.id)}
                        className="p-2 px-3.5 bg-brand-green hover:bg-brand-green-hover text-white text-xs font-bold rounded-xl transition-all shadow cursor-pointer"
                      >
                        Daftar Kursus
                      </button>
                      {prog.type === 'online' && (
                        <button
                          onClick={onOpenLms}
                          className="p-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-bold rounded-xl transition-all border border-neutral-300 cursor-pointer"
                        >
                          Trial LMS
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setActiveSection('programs')}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-green hover:text-brand-green-hover transition-colors font-sans cursor-pointer uppercase tracking-widest pb-1 border-b border-brand-green"
            >
              <span>Eksplorasi Seluruh Program & Detail Kurikulum</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>
      </section>


      {/* 4. SECTION TESTIMONI (Slider Ulasan) */}
      <section id="testimonials-section" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="block text-brand-green font-bold text-xs uppercase tracking-widest leading-none">Ulasan Siswa & Orang Tua</span>
            <h2 className="font-serif text-3xl font-extrabold text-neutral-900 leading-tight">
              Testimoni Syukur Alumni & Wali Kelas
            </h2>
          </div>

          <div className="relative bg-neutral-50 border border-neutral-200 rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
            {/* Calligraphic background layout watermark */}
            <span className="absolute -top-10 -right-5 font-serif text-9xl text-neutral-100 scale-110 pointer-events-none select-none">ب</span>
            
            {/* Active Testimonial contents */}
            <div className="relative z-10 text-center space-y-6">
              
              {/* Rating stars */}
              <div className="flex items-center justify-center space-x-1.5">
                {[...Array(TESTIMONIALS_DATA[currentTestimonialIndex].rating)].map((_, i) => (
                  <span key={i} className="text-brand-accent text-lg">★</span>
                ))}
              </div>

              <p className="font-sans text-neutral-700 text-sm sm:text-base leading-relaxed italic">
                "{TESTIMONIALS_DATA[currentTestimonialIndex].content}"
              </p>

              {/* Separator line */}
              <div className="w-12 h-0.5 bg-neutral-200 mx-auto" />

              {/* Author details */}
              <div className="flex flex-col items-center">
                <img
                  src={TESTIMONIALS_DATA[currentTestimonialIndex].avatar}
                  alt={TESTIMONIALS_DATA[currentTestimonialIndex].name}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-green p-0.5 mb-2 shadow"
                />
                <span className="font-sans font-bold text-sm text-neutral-800 leading-none">
                  {TESTIMONIALS_DATA[currentTestimonialIndex].name}
                </span>
                <span className="text-[11px] text-neutral-400 mt-1 font-semibold">
                  {TESTIMONIALS_DATA[currentTestimonialIndex].role}
                </span>
                <span className="text-[10px] text-brand-green mt-1 bg-brand-green/10 px-2 py-0.5 rounded font-bold">
                  Siswa: {TESTIMONIALS_DATA[currentTestimonialIndex].program}
                </span>
              </div>
            </div>

            {/* Selector Arrows */}
            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center">
              <button
                onClick={prevTestimonial}
                className="p-1 px-1.5 bg-white hover:bg-neutral-100 border border-neutral-300 text-neutral-600 rounded-lg cursor-pointer transition-colors shadow-sm"
              >
                <ChevronLeft size={18} />
              </button>
            </div>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
              <button
                onClick={nextTestimonial}
                className="p-1 px-1.5 bg-white hover:bg-neutral-100 border border-neutral-300 text-neutral-600 rounded-lg cursor-pointer transition-colors shadow-sm"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Micro Dot progress indicator */}
            <div className="flex items-center justify-center space-x-1.5 mt-8">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonialIndex(idx)}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                    currentTestimonialIndex === idx ? 'bg-brand-green w-4' : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* 5. CONTACT & INTERACTIVE CONTACT FORM FOOTER (Section khusus marketing) */}
      <section id="footer-contact-info" className="py-16 bg-neutral-900 text-white border-t border-neutral-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-b border-neutral-800 pb-12">
            
            {/* Contact cards info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="font-serif text-xl text-brand-green bg-white/10 rounded-lg w-8 h-8 flex items-center justify-center font-bold">ب</span>
                <span className="font-serif text-lg font-bold tracking-tight">BAIT KHAT ACADEMY</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
                Lembaga pendidikan rujukan utama pembelajaran kaligrafi murni (Khat) bersertifikat Sanad di Indonesia. Melestarikan khazanah peradaban Islam secara mulia.
              </p>
              
              <div className="space-y-2.5 text-xs text-neutral-300 pt-2">
                <div className="flex items-start space-x-3">
                  <MapPin size={15} className="text-brand-green mt-0.5 shrink-0" />
                  <span>Jl. Kaligrafi Raya No. 4B, Blok M, Kebayoran Baru, Jakarta Selatan, 12130 (Studio Utama)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={15} className="text-brand-green shrink-0" />
                  <span>+62 821-2234-9199 (CS Bait Khat)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={15} className="text-brand-green shrink-0" />
                  <span>pendaftaran@baitkhat.com</span>
                </div>
              </div>
            </div>

            {/* Quick newsletter/inquiry form */}
            <div className="space-y-4 bg-white/5 p-5 rounded-xl border border-white/10">
              <span className="block text-xs uppercase tracking-wider font-bold text-neutral-300">Hubungi CS Cepat</span>
              <p className="text-[11px] text-neutral-400 leading-relaxed">Punya pertanyaan mengenai kelompok umur, diskon khusus sekolah, atau kuota santri? Tinggalkan pesan, kami siap jawab.</p>
              <form onSubmit={(e) => { e.preventDefault(); alert('Pertanyaan Anda terkirim. CS Bait Khat akan menghubungi Anda lewat WA!'); }} className="space-y-2.5">
                <input
                  type="text"
                  required
                  placeholder="Nama Lengkap"
                  className="w-full px-3 py-1.5 bg-neutral-800 text-xs border border-neutral-700 text-white rounded outline-none focus:border-brand-green"
                />
                <input
                  type="tel"
                  required
                  placeholder="No. WhatsApp Aktif"
                  className="w-full px-3 py-1.5 bg-neutral-800 text-xs border border-neutral-700 text-white rounded outline-none focus:border-brand-green"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-brand-green hover:bg-brand-green-hover text-white rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Kirim Pesan CS
                </button>
              </form>
            </div>

            {/* Calligraphy sample of styles navigation */}
            <div className="space-y-4">
              <span className="block text-xs uppercase tracking-wider font-bold text-neutral-300">Cabang & Studio Belajar</span>
              <p className="text-xs text-neutral-400">Kami menyelenggarakan pelatihan offline di beberapa titik rujukan mitra:</p>
              <ul className="text-xs text-neutral-300 space-y-2">
                <li><span className="font-bold text-brand-green">✓ Jakarta Selatan</span> - Studio Utama Bait Khat</li>
                <li><span className="font-bold text-brand-green">✓ Bandung Jawa Barat</span> - Pesantren Bahasa & Seni</li>
                <li><span className="font-bold text-brand-green">✓ Jombang Jawa Timur</span> - Pusat Kajian Arab Klasik</li>
                <li><span className="font-bold text-brand-green">✓ Medan Sumatra Utara</span> - Rumah Kaligrafi Syiar</li>
              </ul>
            </div>

          </div>

          <div className="pt-8 text-center text-xs text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span>© 1448 Hijriah / 2026 Masehi Bait Khat Academy. Seluruh Hak Cipta Dilindungi Undang-Undang.</span>
            <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-4">
              <button
                onClick={() => setActiveSection('blueprint')}
                className="text-brand-green hover:text-brand-green-hover font-bold transition-colors cursor-pointer flex items-center justify-center gap-1 bg-brand-green/10 px-2.5 py-1.5 rounded-lg border border-brand-green/20"
              >
                <span>📄 Ekspor PDF Copydeck & Blueprint</span>
              </button>
              <span className="hidden sm:inline text-neutral-700 select-none">|</span>
              <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-white transition-colors cursor-pointer mt-1.5 sm:mt-0">Kembali Ke Atas</button>
              <span className="text-neutral-700 select-none">•</span>
              <button onClick={() => setActiveSection('about')} className="hover:text-white transition-colors cursor-pointer">Tentang Kami</button>
              <span className="text-neutral-700 select-none">•</span>
              <button onClick={() => setActiveSection('programs')} className="hover:text-white transition-colors cursor-pointer">Program &amp; Kelas</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
