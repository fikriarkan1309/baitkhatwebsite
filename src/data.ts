import { CalligraphyProgram, Testimonial, CalligraphyArtwork, Achievement, PromoEvent } from './types';

export const calligraphicStylesDescription = {
  'Naskhi': 'Gaya tulisan yang paling populer dan banyak digunakan untuk teks mushaf Al-Qur\'an sehari-hari karena tingkat keterbacaan yang sangat tinggi.',
  'Tsuluts': 'Gaya kaligrafi agung dan dekoratif penanda kemegahan ornamen kubah masjid, bercirikan sapuan kuas yang melengkung dramatis, lentur, dan tumpang tindih.',
  'Diwani': 'Lahir dari kemuliaan istana Ottoman, dicirikan dengan bentuk hurufnya yang padat, miring anggun, tanpa harakat, dan mengalir seperti tarian.',
  'Riq\'ah': 'Gaya tulisan cepat untuk komunikasi harian di masa lalu. Sangat efisien, ringkas, bersudut tumpul mendatar, serta mudah dipelajari untuk pemula.',
  'Kufi': 'Gaya geometris tertua yang kokoh dan ikonik, tersusun atas garis-garis bersudut siku, ideal untuk hiasan dinding arsitektural kontemporer.',
  'Farisi': 'Gaya kaligrafi asal Persia yang berkarakteristik menggantung indah, tipis-tebal garis yang sangat kontras, serta anggun seperti karya lukis modern.'
};

export const PROGRAMS_DATA: CalligraphyProgram[] = [
  {
    id: 'prog-offline-dasar',
    title: 'Kelas Reguler Offline (Hidayatun Riq\'ah)',
    description: 'Bimbingan tatap muka intensif mempelajari tata cara dasar memegang Kalam (pena bambu), mencampur tinta organik, dan menguasai proporsi huruf dasar Riq\'ah & Naskhi.',
    type: 'offline',
    level: 'Dasar',
    price: 'Rp 450.000',
    period: 'Bulan',
    features: [
      'Tatap muka langsung 4x sebulan (Sabtu / Minggu)',
      'Kit Starter Kit Lengkap (Kalam bambu, Tinta celup, Kertas muqahhar)',
      'Sertifikasi Kelulusan Ujian Level Dasar',
      'Masuk ke Komunitas WhatsApp Eksklusif Bait Khat',
      'Maksimal 12 Siswa per Angkatan (Semi-privat)'
    ],
    instructor: 'Ustadz Fathurrahman Al-Khattat',
    schedule: 'Setiap Sabtu, 09.00 - 11.30 WIB di Studio Bait Khat',
    image: '/src/assets/images/calligraphy_classroom_hands_1781882201288.jpg'
  },
  {
    id: 'prog-offline-lanjutan',
    title: 'Masterclass Tatap Muka (Tsuluts Al-Ghorib)',
    description: 'Spesialisasi khusus bagi yang telah menguasai kaidah dasar, mendalami komposisi kalimat besar untuk dekorasi arsitektur, pameran internasional, atau kubah masjid.',
    type: 'offline',
    level: 'Mahir',
    price: 'Rp 650.000',
    period: 'Bulan',
    features: [
      'Tatap muka langsung 4x sebulan (Minggu sore)',
      'Penyediaan Kertas Muqahhar Impor Turkiye',
      'Koreksi detail (tashhih) langsung oleh Ahli Khat bersertifikat nasional',
      'Bimbingan portofolio pameran dan sayembara (Lomba Khat)',
      'Sesi magang proyek restorasi ornamen kaligrafi masjid'
    ],
    instructor: 'Ustadz Muhammad Syakir, M.Ag',
    schedule: 'Setiap Minggu, 13.30 - 16.00 WIB',
    image: '/src/assets/images/calligraphy_classroom_hands_1781882201288.jpg'
  },
  {
    id: 'prog-online-dasar',
    title: 'Khat Mastery Online LMS - Pemula',
    description: 'Transformasi digital pembelajaran seni tulis indah melalui portal e-learning (LMS). Akses video modul HD interaktif, lembar kerja digital (kros), serta bimbingan koreksi berkala.',
    type: 'online',
    level: 'Dasar',
    price: 'Rp 199.000',
    period: 'Sekali Bayar',
    features: [
      'Akses Selamanya ke 24 Video Modul HD Step-by-Step',
      'File Downloadable Latihan Proporsi Huruf (PDF)',
      'Koreksi Digital Portofolio oleh Mentor (4x Feedbacks)',
      'Akses Forum Diskusi Nasional via LMS Portal',
      'Diskon Khusus 15% untuk pembelian alat/kertas resmi'
    ],
    instructor: 'Ustadz Fathurrahman Al-Khattat',
    schedule: 'Mandiri / Fleksibel (Kapan saja dan di mana saja)',
    image: '/src/assets/images/calligraphy_hero_banner_1781882184826.jpg'
  },
  {
    id: 'prog-online-diwani',
    title: 'Estetika Diwani Modern - Online LMS',
    description: 'Eksplorasi gaya estetika lengkung anggun Diwani dan Diwani Jali secara digital maupun manual. Sangat pas untuk desainer grafis, pelukis, dan penggiat hobi ornamen.',
    type: 'online',
    level: 'Menengah',
    price: 'Rp 275.000',
    period: 'Sekali Bayar',
    features: [
      'Akses 18 Video Modul Teori & Praktik Penerapan Desain',
      'E-Book Eksklusif "Menggali Keindahan Khat Diwani"',
      'Materi integrasi Kaligrafi ke Media Digital (Vectorize)',
      'Uji Kompetensi Portofolio bersertifikat digital',
      'Sesi webinar eksklusif bulanan bersama Kaligrafer Tamu'
    ],
    instructor: 'Ustadzah Sarah Zakirah, Lc',
    schedule: 'Fleksibel dengan Sesi Webinar Live Bulanan',
    image: '/src/assets/images/calligraphy_hero_banner_1781882184826.jpg'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Ahmad Fauzi',
    role: 'Orang Tua dari Yusuf (12 th)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    content: 'Sejak Yusuf bergabung dengan Kelas Reguler Offline di Bait Khat, fokus belajarnya meningkat drastis. Seni kaligrafi melatih kesabarannya, dan dia baru saja meraih juara 3 di tingkat kabupaten. Pengajarnya sangat penyabar!',
    program: 'Kelas Reguler Offline (Hidayatun Riq\'ah)'
  },
  {
    id: 't2',
    name: 'Linda Kusuma',
    role: 'Desainer Grafis Profesional',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    content: 'Materi LMS Online Bait Khat sangat memuaskan! Videonya sangat jernih dan penjelasan mengenai sudut kelenturan pena sangat mudah dipahami. Saya sering memadukan gaya Khat Diwani ini ke proyek desain brand bernuansa Timur Tengah.',
    program: 'Estetika Diwani Modern - Online LMS'
  },
  {
    id: 't3',
    name: 'Umar Faruq',
    role: 'Mahasiswa Sastra Arab',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    content: 'Metode tashhih (koreksi detail) langsung oleh Ustadz di Bait Khat mendidik mental kami untuk teliti dan rendah hati. Bait Khat benar-benar menjaga kemurnian seni sejarah penulisan klasik.',
    program: 'Masterclass Tatap Muka (Tsuluts Al-Ghorib)'
  }
];

export const ARTWORKS_DATA: CalligraphyArtwork[] = [
  {
    id: 'art-1',
    title: 'Surah Al-Fatihah Ring Tsuluts',
    style: 'Tsuluts',
    artist: 'Ustadz Muhammad Syakir',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=600&q=80',
    description: 'Karya berorientasi sirkular megah dari QS Al-Fatihah. Menggunakan tinta hitam pekat buatan tangan di atas kertas muqahhar berwarna teh gandum, dihiasi tinta emas murni Turkiye di sekeliling bingkainya.',
    year: '2025'
  },
  {
    id: 'art-2',
    title: 'Ar-Rahman Cosmic Flow',
    style: 'Diwani',
    artist: 'Ustadzah Sarah Zakirah',
    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=600&q=80',
    description: 'Semburan ayat "Fabiayyi ala\'i Rabbikuma" yang mengalir anggun merepresentasikan nikmat yang terus-menerus turun tiada henti. Kombinasi warna pirus dalam kanvas kontemporer hijau.',
    year: '2025'
  },
  {
    id: 'art-3',
    title: 'Basmalah Kufi Murabba Minimalis',
    style: 'Kufi',
    artist: 'Hadi Prasetyo (Siswa Mahir)',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80',
    description: 'Penerapan Kufi Murabba berbentuk persegi sempurna dengan presisi grid geometris tinggi. Sentuhan warna kontras hijau lumut dan putih sangat ideal untuk tata ruang interior modern.',
    year: '2026'
  },
  {
    id: 'art-4',
    title: 'Asmaul Husna Al-Karim',
    style: 'Naskhi',
    artist: 'Ustadz Fathurrahman Al-Khattat',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=600&q=80',
    description: 'Hiasan khat mushaf dengan ketipisan pena rasm 1mm yang luar biasa anggun. Dikerjakan selama 3 minggu berturut-turut demi mencapai kestabilan lengkung lingkar huruf yang mutlak.',
    year: '2024'
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Juara 1 Kaligrafi Mushaf Tingkat Nasional',
    studentName: 'Farhan Az-Zuhri',
    rank: 'Juara Utama 1',
    competition: 'Olimpiade Seni Islami Nasional (OSIN) 2025',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=500&q=80',
    description: 'Ananda Farhan merupakan siswa kelas bimbingan intensif offline tingkat mahir. Menuliskan lembar mushaf QS Ibrahim dengan ornamen tezhip klasik Turkiye.'
  },
  {
    id: 'ach-2',
    title: 'Penerima Sertifikasi Sanad Internasional Turkiye',
    studentName: 'Ustadzah Sarah Zakirah',
    rank: 'Sertifikasi Ijazah Shahihah',
    competition: 'Pemberian Sanad di IRCICA Istanbul',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80',
    description: 'Pengajar utama kelas online Bait Khat resmi menerima ijazah kelayakan mengajar Khat Diwani dari lembaga kaligrafi tertinggi dunia di Istanbul.'
  },
  {
    id: 'ach-3',
    title: 'Juara Harapan 1 Desain kaligrafi Kontemporer',
    studentName: 'Nadia Salsabila',
    rank: 'Juara Harapan 1',
    competition: 'MTQ Nasional Cabang Kontemporer',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80',
    description: 'Nadia mengintegrasikan seni lukis kanvas abstrak dengan kaligrafi gaya Tsuluts Jali yang kuat, mengantarkannya pada posisi teratas di kompetisi bergengsi MTQ.'
  }
];

export const EVENTS_DATA: PromoEvent[] = [
  {
    id: 'evt-1',
    title: 'Olimpiade Kaligrafi Anak Nusantara (OKAN) 2026',
    date: '12-15 Juli 2026',
    location: 'Gedung Pusat Seni Bait Khat & Zoom Cloud Meetings',
    description: 'Ajang kompetisi kaligrafi berskala nasional khusus kategori SD & SMP sederajat. Menghadirkan dewan juri kaligrafer bersertifikat internasional dengan hadiah total puluhan juta rupiah dan beasiswa penuh belajar di Bait Khat.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80',
    badge: 'Olimpiade',
    registrationOpen: true,
    ctaText: 'Daftar Kompetisi'
  },
  {
    id: 'promo-back-to-school',
    title: 'Promo Semarak Hijriah: Diskon 25% Semua Paket LMS',
    date: 'Hingga 1 Muharram 1448 H',
    location: 'Portal LMS Online Bait Khat',
    description: 'Sambut tahun baru hijriah dengan keterampilan baru yang mulia. Gunakan kode promo untuk mendapatkan potongan langsung sebesar 25% untuk kelas online Dasar & Diwani. Dapatkan gratis starter PDF eksklusif latihan harian.',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80',
    badge: 'Promo',
    discountCode: 'MUHARRAM25',
    registrationOpen: true,
    ctaText: 'Klaim Promo Sekarang'
  },
  {
    id: 'evt-workshop-ramadhan',
    title: 'Workshop Seni Menghias Mushaf (Tezhip) Klasik',
    date: '28 Juni 2026',
    location: 'Offline Studio Bait Khat Lantai 2',
    description: 'Belajar membuat ragam hias keemasan di sekeliling kaligrafi menggunakan kuas mikro dan pewarna pigmentasi khusus. Cocok untuk semua kalangan yang ingin mendalami keindahan detail seni hias lembar Al-Qur\'an.',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=600&q=80',
    badge: 'Event',
    registrationOpen: true,
    ctaText: 'Pesan Kursi Workshop'
  }
];

export const CORE_ADVANTAGES = [
  {
    title: 'Kurikulum Bersanad',
    description: 'Metode pengajaran merujuk pada standar ijazah kaligrafi Istanbul, Turkiye & Mesir secara turun-temurun.',
    icon: 'Award'
  },
  {
    title: 'Tashhih Duo Metode',
    description: 'Tatap muka langsung atau digital via LMS dengan umpan balik visual tepat piksel untuk menyempurnakan bentuk huruf.',
    icon: 'Feather'
  },
  {
    title: 'Alat & Bahan Terbaik',
    description: 'Setiap siswa offline mendapatkan starter kit premium siap pakai: tinta khusus, pena bambu pilihan, dan kertas sutra licin muqahhar.',
    icon: 'BookOpen'
  },
  {
    title: 'Komunitas Penggiat Seni',
    description: 'Tergabung dalam ikatan keluarga besar Bait Khat dengan akses pameran, workshop berkala, dan wadah jual-beli karya seni kelas atas.',
    icon: 'Users'
  }
];

export const BRAND_COMPANY = {
  aboutTitle: 'Memelihara Kemurnian Warisan Seni Tulis Indah (Khat) Arab',
  history: 'BAIT KHAT didirikan pada tahun 2018 di bawah asuhan para kaligrafer bersertifikat internasional dengan tujuan menjadi pusat mercusuar pembelajaran, pelestarian, dan pengembangan Seni Kaligrafi Islam di Asia Tenggara. Berawal dari kajian kecil tatap muka di serambi ruang, Bait Khat kini telah berkembang menjadi lembaga formal terkemuka yang menjembatani metode pembelajaran tradisional yang penuh ketelitian (Ijazah-Sanad) dengan kemudahan teknologi digital modern (Laning Management System / LMS). Kami percaya bahwa di balik setiap lengkungan goresan kalam, tersimpan latihan kesabaran jiwa, ketekunan emosi, dan ibadah estetika yang luhur.',
  vision: 'Menjadi lembaga pendidikan seni kaligrafi Islam terunggul di tingkat dunia yang melahirkan master-master khattat baru pelestari budaya tulis yang kompeten, berakhlak mulia, serta mandiri secara kreatif.',
  mission: [
    'Mendidik siswa untuk menguasai ilmu teori dan praktik penulisan kaligrafi Arab yang orisinal sesuai kaidah para maestro dunia.',
    'Menyelenggarakan sistem pengajaran hibrida offline-online yang berkualitas tinggi, dinamis, dan terjangkau untuk seluruh ranting nusantara.',
    'Mengaktifkan wadah pameran, lomba, dan apresiasi karya kaligrafi baik skala nasional maupun global sebagai kebanggaan syiar kebudayaan.'
  ],
  stats: [
    { value: '1,500+', label: 'Alumni Aktif' },
    { value: '4.9/5', label: 'Rating Kepuasan' },
    { value: '25+', label: 'Prestasi Juara' },
    { value: '6+', label: 'Jenis Khat Diajarkan' }
  ]
};
