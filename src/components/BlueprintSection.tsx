import React, { useState } from 'react';
import { FileText, Printer, Copy, Check, ArrowLeft, Image as ImageIcon } from 'lucide-react';

interface BlueprintSectionProps {
  onBackToHome: () => void;
}

export default function BlueprintSection({ onBackToHome }: BlueprintSectionProps) {
  const [copied, setCopied] = useState(false);

  const rawTextContent = `Akademi Seni Kaligrafi Terdepan & Bersanad - BAIT KHAT
  
1. STRUKTUR UTAMA & NAVIGASI
- Beranda (Home): Landing page konversi, pencapaian, ringkasan program, dan testimoni.
- Tentang Kami: Company profile, sejarah luhur Bait Khat, visi, misi, dan statistik pencapaian.
- Program & Kelas: Detail kurikulum kelas Reguler Offline & Kelas Online LMS.
- Galeri Karya: Etalase karya utama beserta penjelasannya.
- Prestasi: Lembar kehormatan juara-juara nasional dan sertifikasi sanad internasional.
- Event & Promo: Halaman dinamis perlombaan, potongan diskon, dan workshop.

2. HERO SECTION
- Sub-Headline: "Akademi Seni Kaligrafi Terdepan & Bersanad"
- Headline Utama: "Kuasai Seni Khat Arab dengan Panduan Ahli"
- Deskripsi Pengantar: "Menghubungkan ketelitian goresan pena tradisional bersertifikat Sanad Internasional Turkiye dengan kenyamanan pembelajaran modern berbasis LMS digital interaktif."
- Tombol CTA: "Mulai Daftar Kelas" & "Lihat Pilihan Program"
- Acuan Gambar: /src/assets/images/calligraphy_hero_banner_1781882184826.jpg (Meja studio kaligrafi modern dengan pena bambu, tinta hitam, kertas serat organik, dan goresan tebal hijau).

3. KEUNGGULAN UTAMA
- Poin 1: Kurikulum Bersanad (merujuk pada standar ijazah kaligrafi Istanbul, Turkiye & Mesir secara turun-temurun).
- Poin 2: Tashhih Duo Metode (Tatap muka langsung atau digital via LMS dengan umpan balik visual tepat).
- Poin 3: Alat & Bahan Terbaik (satu set starter kit premium siap pakai: tinta khusus, pena bambu pilihan, dan kertas sutra licin muqahhar).
- Poin 4: Komunitas Penggiat Seni (pameran, workshop, wadah jual-beli karya seni kelas atas).

4. TENTANG KAMI
- Motto: "Ash-Shabru miftahu kulli husn - Kesabaran adalah pemegang kunci seluruh keelokan seni."
- Sejarah: "BAIT KHAT didirikan pada tahun 2018 di bawah asuhan para kaligrafer bersertifikat internasional... mengembangkan Seni Kaligrafi Islam di Asia Tenggara."
- Visi: "Menjadi lembaga pendidikan seni kaligrafi Islam terunggul di tingkat dunia yang melahirkan master khattat baru..."
- Misi: Mendidik penguasaan ilmu teori/praktik, hibrida offline-online berkualitas, mengaktifkan pameran/apresiasi global.

5. PROGRAM KELAS & LMS
- Kelas Reguler Offline: Rp 450.000/Bulan, tatap muka, alat starter kit lengkap, maksimal 12 siswa per angkatan.
- Masterclass Tatap Muka: Rp 650.000/Bulan, komposisi kalimat besar dekorasi kubah masjid & pameran, kertas impor Turkiye.
- Online LMS Pemula: Rp 199.000/Sekali Bayar, 24 video HD sepanjang hayat, download lembar kerja PDF, koreksi mentor berkala.
- Estetika Diwani Modern: Rp 275.000/Sekali Bayar, eksplorasi gaya Diwani Jali, digital vektor, webinar bulanan.

6. GALERI & GAYA KHAT
- Naskhi: Gaya terpopuler untuk Al-Qur'an karena tingkat keterbacaan tinggi.
- Tsuluts: Gaya agung melengkung dramatis untuk ornamen kubah masjid & arsitektur.
- Diwani: Gaya Ottoman padat mengalir tanpa harakat.
- Riq'ah: Gaya cepat praktis, ringkas bersudut tumpul untuk pemula.
- Kufi: Gaya geometris kokoh bersiku-siku minimalis.
- Farisi: Gaya Persia menggantung anggun kontras tipis-tebal.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(rawTextContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="blueprint-pdf-container" className="pt-24 pb-16 bg-neutral-100 min-h-screen">
      {/* Floating Action Controller Panel (Hidden on print) */}
      <div className="max-w-4xl mx-auto mb-6 px-4 no-print" id="blueprint-actions-panel">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white shadow-md rounded-2xl border border-neutral-200">
          <div className="flex items-center space-x-3">
            <button
              onClick={onBackToHome}
              className="p-2 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer text-neutral-600"
              title="Kembali ke Beranda"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-sm font-bold text-neutral-800 flex items-center gap-1.5">
                <FileText size={16} className="text-brand-green" />
                Salin & Ekspor PDF Blueprint
              </h1>
              <p className="text-[11px] text-neutral-500">
                Ekspor seluruh teks website ke PDF & salin isi teks untuk diedit.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <button
              onClick={handleCopy}
              className="flex-1 sm:flex-none flex items-center justify-center space-x-1 px-4 py-2 text-xs font-semibold bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-600 animate-scaleIn" />
                  <span className="text-emerald-700">Teks Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Salin Semua Teks</span>
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none flex items-center justify-center space-x-1 px-4 py-2 text-xs font-semibold bg-brand-green hover:bg-brand-green-hover text-white rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <Printer size={14} />
              <span>Cetak / Ekspor PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Actual Blueprint Page Styling (Optimized for both screen study & high-contrast clean A4 Printing) */}
      <div 
        id="printable-copydeck-content" 
        className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-lg border border-neutral-200 rounded-3xl print:shadow-none print:border-none print:p-0 print:m-0"
      >
        {/* Document Header */}
        <div className="border-b-2 border-brand-green/30 pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="text-[10px] font-bold text-brand-green tracking-widest uppercase">
              EXCLUSIVELY PREPARED FOR THE CLIENT
            </div>
            <h2 className="text-2xl font-serif font-extrabold text-neutral-900 tracking-tight">
              BAIT KHAT — BLUEPRINT & COPYDECK
            </h2>
            <p className="text-xs text-neutral-500 font-mono mt-1">
              Dokumen Spesifikasi Visual, Letak Gambar & Salinan Teks (Versi 1.0)
            </p>
          </div>
          <div className="text-right flex flex-col items-start md:items-end font-mono text-[10px] text-neutral-400">
            <span>Tanggal Rilis: {new Date().toLocaleDateString('id-ID')}</span>
            <span>Status Konten: Draft Siap Edit</span>
          </div>
        </div>

        {/* Instructions Alert for the USER */}
        <div className="mb-8 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl no-print text-xs text-amber-900">
          <p className="font-semibold mb-1">💡 Cara Ekspor ke PDF:</p>
          <p>
            Klik tombol <strong>Cetak / Ekspor PDF</strong> di atas, lalu pada pilihan printer di browser Anda, pilih 
            <strong> "Save as PDF"</strong> (Simpan sebagai PDF). Dokumen ini sudah dioptimalkan agar rapi tanpa tombol menu navbar/footer demi tampilan PDF yang sangat prestisius.
          </p>
        </div>

        {/* Sections Content */}
        <div className="space-y-8 font-sans text-neutral-800 text-sm leading-relaxed" id="sitemap-and-navigation">
          
          {/* Section 1 */}
          <section className="space-y-3 pb-6 border-b border-neutral-100">
            <h3 className="text-base font-bold text-brand-green flex items-center justify-between">
              <span>1. STRUKTUR UTAMA & NAVIGASI WEBSITE (SITEMAP)</span>
              <span className="text-[10px] bg-neutral-100 px-2 py-0.5 rounded font-mono text-neutral-500 font-normal">Navbar & Sitemap</span>
            </h3>
            <p className="text-neutral-600">Representasi menu utama tempat pengunjung berselancar mencari informasi belajar:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-neutral-700">
              <li><strong>Beranda (Home)</strong>: Landing page utama penarik minat calon santri, menampung keunggulan, ulasan singkat karya, dan penawaran langsung.</li>
              <li><strong>Tentang Kami</strong>: Menerangkan rekam jejak, sejarah, asuhan ustadz, dan visi misi luhur mencerdaskan kalam.</li>
              <li><strong>Program & Kelas</strong>: Menu pendaftaran kelas reguler tatap muka maupun modul e-learning LMS mandiri.</li>
              <li><strong>Galeri Karya</strong>: Showroom pameran interaktif goresan emas dari para pengajar dan santri.</li>
              <li><strong>Prestasi</strong>: Portofolio medali nasional dan bukti legalitas ijazah sanad resmi internasional.</li>
              <li><strong>Event & Promo</strong>: Hub wadah silaturahmi olimpiade, beasiswa, dan workshop musiman.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pb-6 border-b border-neutral-100">
            <h3 className="text-base font-bold text-brand-green flex items-center justify-between">
              <span>2. TEKS & ACUAN GAMBAR: HERO SECTION (BERANDA)</span>
              <span className="text-[10px] bg-neutral-100 px-2 py-0.5 rounded font-mono text-neutral-500 font-normal">Beranda</span>
            </h3>
            <div className="bg-neutral-50 p-4 rounded-xl space-y-3 border border-neutral-200">
              <div>
                <span className="block text-[10px] font-mono text-neutral-400 font-semibold">TAGLINE / SUB-HEADLINE</span>
                <p className="font-semibold text-neutral-900 font-serif">"Akademi Seni Kaligrafi Terdepan & Bersanad"</p>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-neutral-400 font-semibold">HEADLINE UTAMA</span>
                <p className="font-extrabold text-neutral-900 text-lg font-serif">"Kuasai Seni Khat Arab dengan Panduan Ahli"</p>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-neutral-400 font-semibold">DESKRIPSI PARAGRAF</span>
                <p className="text-neutral-700">
                  "Menghubungkan ketelitian goresan pena tradisional bersertifikat Sanad Internasional Turkiye dengan kenyamanan pembelajaran modern berbasis LMS digital interaktif."
                </p>
              </div>
              <div className="pt-2 border-t border-neutral-200 flex flex-wrap gap-4 text-xs">
                <div>
                  <span className="block text-[10px] font-mono text-neutral-400">TOMBOL UTAMA (CTA)</span>
                  <span className="font-semibold text-brand-green">1. Mulai Daftar Kelas</span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-neutral-400">TOMBOL KEDUA (CTA)</span>
                  <span className="font-semibold text-neutral-700">2. Lihat Pilihan Program</span>
                </div>
              </div>
            </div>

            {/* Image Placeholder Spec Box */}
            <div className="flex items-start space-x-3 p-3 bg-brand-green/5 border border-brand-green/20 rounded-xl">
              <div className="p-2 bg-brand-green text-white rounded-lg">
                <ImageIcon size={18} />
              </div>
              <div>
                <span className="block text-[10px] font-mono text-brand-green font-bold">DESKRIPSI ACUAN VISUAL GAMBAR</span>
                <p className="font-semibold text-xs text-neutral-800">Visual Banner Banner Utama (Latar Belakang Hero)</p>
                <p className="text-xs text-neutral-600 mt-1">
                  Menampilkan meja kayu jati bertabur sisa debu rautan kalam bambu, segelas kecil tinta hitam pekat, tumpukan kertas sutra muqahhar yang melambai halus. Cahaya matahari masuk miring dengan gradasi sejuk kehijauan yang menenangkan hati.
                </p>
                <code className="block mt-1.5 text-[10px] font-mono text-neutral-500 bg-neutral-100 px-1.5 py-0.5 rounded w-fit">
                  Path referensi: /src/assets/images/calligraphy_hero_banner_1781882184826.jpg
                </code>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pb-6 border-b border-neutral-100">
            <h3 className="text-base font-bold text-brand-green flex items-center justify-between">
              <span>3. VALUE PROPOSITION: KEUNGGULAN UTAMA</span>
              <span className="text-[10px] bg-neutral-100 px-2 py-0.5 rounded font-mono text-neutral-500 font-normal">Keunggulan</span>
            </h3>
            <p className="text-neutral-600 mb-2">Empat pilar utama yang meyakinkan calon murid untuk melangkah mendaftar:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 border border-neutral-150 rounded-xl space-y-1">
                <h4 className="font-bold text-neutral-900 font-serif">1. Kurikulum Bersanad</h4>
                <p className="text-xs text-neutral-600">Silsilah sanad keilmuan yang dipelajari merujuk langsung ke pusat kaligrafi di Istanbul, Turkiye dan Mesir, tersambung hingga para khattat kekhalifahan.</p>
              </div>
              <div className="p-3 border border-neutral-150 rounded-xl space-y-1">
                <h4 className="font-bold text-neutral-900 font-serif">2. Tashhih Duo Metode</h4>
                <p className="text-xs text-neutral-600">Penggabungan presisi tatap muka langsung di studio dengan kenyamanan portal belajar online yang menyajikan asisten penilaian piksel demi piksel.</p>
              </div>
              <div className="p-3 border border-neutral-150 rounded-xl space-y-1">
                <h4 className="font-bold text-neutral-900 font-serif">3. Alat &amp; Bahan Premium</h4>
                <p className="text-xs text-neutral-600">Siswa tidak perlu pusing mencari kuas atau tinta sendiri. Setiap paket pendaftaran menyertakan starter kit resmi berkualitas siap latih.</p>
              </div>
              <div className="p-3 border border-neutral-150 rounded-xl space-y-1">
                <h4 className="font-bold text-neutral-900 font-serif">4. Jaringan Komunitas Elit</h4>
                <p className="text-xs text-neutral-600">Menghubungkan Anda langsung ke kolektor karya seni kelas tinggi, peluang ekshibisi pameran internasional, dan kurasi lelang karya seni islami.</p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pb-6 border-b border-neutral-100">
            <h3 className="text-base font-bold text-brand-green flex items-center justify-between">
              <span>4. PROFIL PERUSAHAAN (ABOUT US PAGE)</span>
              <span className="text-[10px] bg-neutral-100 px-2 py-0.5 rounded font-mono text-neutral-500 font-normal">Tentang Kami</span>
            </h3>
            <div className="space-y-3">
              <div className="italic text-center text-neutral-600 border-l-4 border-neutral-350 pl-4 py-1 text-sm my-2 font-serif">
                "Ash-Shabru miftahu kulli husn - Kesabaran adalah pemegang kunci seluruh keelokan seni."
              </div>
              <div>
                <span className="block text-[10px] font-mono text-neutral-400 font-semibold uppercase">Narasi Sejarah Singkat</span>
                <p className="text-xs text-neutral-700 text-justify">
                  BAIT KHAT didirikan pada tahun 2018 di bawah asuhan para kaligrafer bersertifikat internasional dengan tujuan menjadi pusat mercusuar pembelajaran, pelestarian, dan pengembangan Seni Kaligrafi Islam di Asia Tenggara. Berawal dari kajian kecil tatap muka di serambi ruang, Bait Khat kini telah berkembang menjadi lembaga formal terkemuka yang menjembatani metode pembelajaran tradisional yang penuh ketelitian (Ijazah-Sanad) dengan kemudahan teknologi digital modern (Laning Management System / LMS). Kami percaya bahwa di balik setiap lengkungan goresan kalam, tersimpan latihan kesabaran jiwa, ketekunan emosi, dan ibadah estetika yang luhur.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-150">
                  <span className="block text-[10px] font-mono text-brand-green font-bold uppercase">VISI</span>
                  <p className="text-xs text-neutral-700">
                    Menjadi lembaga pendidikan seni kaligrafi Islam terunggul di tingkat dunia yang melahirkan master-master khattat baru pelestari budaya tulis yang kompeten, berakhlak mulia, serta mandiri secara kreatif.
                  </p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-150">
                  <span className="block text-[10px] font-mono text-brand-green font-bold uppercase">MISI UTAMA</span>
                  <ul className="list-decimal list-inside text-xs text-neutral-700 space-y-1">
                    <li>Mendidik siswa menguasai ilmu teori &amp; praktik luhur berdasarkan kaidah maestro dunia.</li>
                    <li>Sistem pengajaran hibrida offline-online terintegrasi bermerk tinggi.</li>
                    <li>Mengaktifkan syiar lewat pameran seni, galeri, dan olimpiade berskala internasional.</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-neutral-50 border border-neutral-200 rounded-xl">
                <div className="p-2 bg-neutral-800 text-white rounded-lg">
                  <span className="font-serif font-bold text-xs">IMG</span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-neutral-500">GAMBAR ACUAN TENTANG KAMI (ABOUT IMAGE)</span>
                  <p className="text-xs text-neutral-700 font-semibold">Tangan Mentor Memegang Kalam di Kertas Kram</p>
                  <code className="block mt-1 text-[10px] font-mono text-neutral-500">
                    Path referensi: /src/assets/images/calligraphy_classroom_hands_1781882201288.jpg
                  </code>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pb-6 border-b border-neutral-100">
            <h3 className="text-base font-bold text-brand-green flex items-center justify-between">
              <span>5. PROGRAM KELAS &amp; PAKET BIAYA</span>
              <span className="text-[10px] bg-neutral-100 px-2 py-0.5 rounded font-mono text-neutral-500 font-normal">Program</span>
            </h3>
            <p className="text-neutral-600">Empat pilihan kelas yang dirancang sesuai fleksibilitas belajar santri:</p>
            <div className="space-y-4">
              {/* Prog 1 */}
              <div className="border-l-4 border-brand-green pl-4 space-y-1 py-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-neutral-900 font-serif">1. Kelas Reguler Offline (Hidayatun Riq'ah)</h4>
                  <span className="text-xs font-mono font-bold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded">Rp 450.000 / bln</span>
                </div>
                <p className="text-xs text-neutral-700">Tatap muka privat berkelompok maks 12 orang di studio utama. Mempelajari pengenalan pena, komposisi gaya Riq'ah pemula.</p>
                <p className="text-[10px] text-neutral-500 font-mono">Mentor: Ustadz Fathurrahman Al-Khattat | Studio Utama Sabtu Pagi</p>
              </div>
              {/* Prog 2 */}
              <div className="border-l-4 border-brand-green pl-4 space-y-1 py-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-neutral-900 font-serif">2. Masterclass Tatap Muka (Tsuluts Al-Ghorib)</h4>
                  <span className="text-xs font-mono font-bold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded">Rp 650.000 / bln</span>
                </div>
                <p className="text-xs text-neutral-700">Pendidikan mahir penulisan ornamen masjid, restorasi kaligrafi kubah, naskah pameran internasional di atas kertas sutra Turkiye.</p>
                <p className="text-[10px] text-neutral-500 font-mono">Mentor: Ustadz Muhammad Syakir, M.Ag | Studio Utama Minggu Sore</p>
              </div>
              {/* Prog 3 */}
              <div className="border-l-4 border-brand-green pl-4 space-y-1 py-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-neutral-900 font-serif">3. Khat Mastery Online LMS - Pemula</h4>
                  <span className="text-xs font-mono font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded">Rp 199.000 (Sekali bayar!)</span>
                </div>
                <p className="text-xs text-neutral-700">Portal belajar e-learning interaktif 24 video pembelajaran HD, lembar cetak latihan mandiri PDF, koreksi mingguan via chat digital.</p>
                <p className="text-[10px] text-neutral-500 font-mono">Mentor: Ustadz Fathurrahman Al-Khattat | Portal LMS Mandiri</p>
              </div>
              {/* Prog 4 */}
              <div className="border-l-4 border-brand-green pl-4 space-y-1 py-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-neutral-900 font-serif">4. Estetika Diwani Modern - Online LMS</h4>
                  <span className="text-xs font-mono font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded">Rp 275.000 (Sekali bayar!)</span>
                </div>
                <p className="text-xs text-neutral-700">Belajar menggabungkan kesakralan seni tulis murni dengan konversi vektor digital Corel/Illustrator untuk profesional industri kreatif.</p>
                <p className="text-[10px] text-neutral-500 font-mono">Mentor: Ustadzah Sarah Zakirah, Lc | Portal LMS Mandiri</p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 pb-6 border-b border-neutral-100">
            <h3 className="text-base font-bold text-brand-green flex items-center justify-between">
              <span>6. GALERI SENI &amp; GAYA KHAT YANG DIAJARKAN</span>
              <span className="text-[10px] bg-neutral-100 px-2 py-0.5 rounded font-mono text-neutral-500 font-normal">Galeri</span>
            </h3>
            <p className="text-neutral-600">Rumusan edukatif singkat mengenai 6 gaya khat warisan kekhalifahan islam:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-2.5 bg-neutral-50 rounded-lg">
                <span className="font-bold text-neutral-900 font-serif">Naskhi</span>
                <p className="text-neutral-600 mt-0.5">Sangat populer &amp; utama dalam standard mushaf Al-Qur'an.</p>
              </div>
              <div className="p-2.5 bg-neutral-50 rounded-lg">
                <span className="font-bold text-neutral-900 font-serif">Tsuluts</span>
                <p className="text-neutral-600 mt-0.5">Sangat megah, melengkung tumpang-tindih untuk arsitektur kubah.</p>
              </div>
              <div className="p-2.5 bg-neutral-50 rounded-lg">
                <span className="font-bold text-neutral-900 font-serif">Diwani</span>
                <p className="text-neutral-600 mt-0.5">Padat elastis meliuk seperti tarian istana Ottoman.</p>
              </div>
              <div className="p-2.5 bg-neutral-50 rounded-lg">
                <span className="font-bold text-neutral-900 font-serif">Riq'ah</span>
                <p className="text-neutral-600 mt-0.5 font-sans">Langkah pijakan awal tercepat, bersudut tumpul tanpa harakat.</p>
              </div>
              <div className="p-2.5 bg-neutral-50 rounded-lg">
                <span className="font-bold text-neutral-900 font-serif">Kufi</span>
                <p className="text-neutral-600 mt-0.5">Geometris tegas berunsur garis siku, pas untuk dekor minimalis.</p>
              </div>
              <div className="p-2.5 bg-neutral-50 rounded-lg">
                <span className="font-bold text-neutral-900 font-serif">Farisi</span>
                <p className="text-neutral-600 mt-0.5">Seni lukis gantung khas Persia dengan kontras ketebalan ekstrim.</p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 pb-6">
            <h3 className="text-base font-bold text-brand-green flex items-center justify-between">
              <span>7. PRESTASI &amp; SISTEM TIKET PENDAFTARAN</span>
              <span className="text-[10px] bg-neutral-100 px-2 py-0.5 rounded font-mono text-neutral-500 font-normal">Sertifikasi &amp; Tiket</span>
            </h3>
            <p className="text-neutral-600">Integrasi tanda kepatuhan dan jaminan kredibilitas lembaga pendidikan kaligrafi:</p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-xs text-neutral-700">
              <li>Penyandingan penghargaan juara olimpiade nasional sebagai bentuk jaminan efektivitas kurikulum belajar tatap muka.</li>
              <li>Penyematan sertifikat ijazah sanad langsung dari maestro Turki demi kredibilitas mutu pengajaran tingkat dunia.</li>
              <li><strong>Sistem Cetak Tiket Otomatis</strong>: Setiap ada siswa yang mengirim formulir pendaftaran, sistem web secara real-time menerbitkan slip bukti transfer resmi dengan kode tiket `BK-XXXXXX` yang bisa langsung dicetak / disimpan PDF.</li>
            </ul>
          </section>

        </div>

        {/* Closing Print Note */}
        <div className="mt-12 pt-6 border-t border-neutral-200 text-center font-mono text-[10px] text-neutral-400">
          <p>© 2026 BAIT KHAT. Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="mt-1">Dicetak melingkar dari sistem web orisinal Bait Khat (Development Sandbox Environment)</p>
        </div>
      </div>
    </div>
  );
}
