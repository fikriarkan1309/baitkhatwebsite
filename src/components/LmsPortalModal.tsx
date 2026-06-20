import React, { useState, useRef, useEffect } from 'react';
import { X, BookOpen, Video, FileText, ChevronRight, Download, RefreshCw, PenTool, CheckCircle, Trash2, Award } from 'lucide-react';

interface LmsPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'pdf';
  unlocked: boolean;
  videoUrl?: string;
  description: string;
}

const DEMO_CURRICULUM: Lesson[] = [
  {
    id: 'l1',
    title: 'Pengantar Kalam Bambu & Mengatur Serat Tinta',
    duration: '14 Menit',
    type: 'video',
    unlocked: true,
    description: 'Panduan lengkap meramu serat kain sutra di dalam tempat tinta (lika) dan menyayat ujung penamu agar miring 45 derajat.',
  },
  {
    id: 'l2',
    title: 'Goresan Dasar Alif & Segitiga Titik Riq\'ah',
    duration: '22 Menit',
    type: 'video',
    unlocked: true,
    description: 'Membahas ukuran mutlak ketebalan titik huruf rasm riq\'ah sebagai sandaran ukuran tinggi alif tegak lurus.',
  },
  {
    id: 'l3',
    title: 'Mengaitkan Jarak Kepala Huruf Mim dan Nun',
    duration: '18 Menit',
    type: 'video',
    unlocked: false,
    description: 'Seni mengaitkan ekor nun menggantung dengan kepala mim tanpa mematahkan aliran air tinta dari kalam.',
  },
  {
    id: 'l4',
    title: 'Buku Kurs Panduan Riq\'ah Lengkap (Ijazah Kurikulum)',
    duration: '48 Lembar PDF',
    type: 'pdf',
    unlocked: true,
    description: 'Lembar garis-grid pencontohan huruf berlisensi resmi hasil tashhih ustadz pendiri yang bisa dicetak dan ditiru.',
  },
];

export default function LmsPortalModal({ isOpen, onClose }: LmsPortalModalProps) {
  const [selectedLesson, setSelectedLesson] = useState<Lesson>(DEMO_CURRICULUM[0]);
  const [activeTab, setActiveTab] = useState<'modules' | 'sandbox'>('modules');
  
  // Canvas states
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState('#017B1D'); // Default brand green
  const [brushSize, setBrushSize] = useState(8);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    if (activeTab === 'sandbox' && canvasRef.current) {
      initCanvas();
    }
  }, [activeTab, isOpen]);

  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set high-res scaling
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    // Initial white slate
    ctx.fillStyle = '#faf8f5'; // Warm parchment color
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Draw guidelines for traditional calligraphy feel
    ctx.strokeStyle = 'rgba(1, 123, 29, 0.08)';
    ctx.lineWidth = 1;
    // Horizontal guidelines
    for (let i = 40; i < rect.height; i += 40) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(rect.width, i);
      ctx.stroke();
    }
    
    // Draw background placeholder calligraphy outline
    ctx.font = '70px Amiri, Georgia, serif';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.textAlign = 'center';
    ctx.fillText('أ ب ت ث', rect.width / 2, rect.height / 2 + 10);
  };

  const handleClearCanvas = () => {
    initCanvas();
    setFeedback(null);
  };

  // Modern calligraphic brush line drawing logic
  // Thinner when drawn fast, thicker when drawn slow (simulating pen incline)
  let lastX = 0;
  let lastY = 0;
  let lastTime = 0;

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setIsDrawing(true);

    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    lastX = clientX - rect.left;
    lastY = clientY - rect.top;
    lastTime = Date.now();
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const currentX = clientX - rect.left;
    const currentY = clientY - rect.top;
    const currentTime = Date.now();

    // Calculate speed to vary brush width slightly like a reed pen
    const dist = Math.sqrt(Math.pow(currentX - lastX, 2) + Math.pow(currentY - lastY, 2));
    const timeDelta = currentTime - lastTime || 1;
    const speed = dist / timeDelta;

    // Calligraphy kalam effect: miring/slanted and responsive to velocity
    // Slow speed = thick deliberate stroke, high speed = thin elegant tails
    const dynamicWidth = Math.max(2, Math.min(brushSize, brushSize - speed * 1.5));

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(currentX, currentY);
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = dynamicWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();

    lastX = currentX;
    lastY = currentY;
    lastTime = currentTime;
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const handleMockTashhih = () => {
    setIsAnalyzing(true);
    setFeedback(null);
    setTimeout(() => {
      setIsAnalyzing(false);
      const feedbacks = [
        "Masha Allah! Goresan lengkung Anda sangat bertekstur indah. Jaga kemiringan ujung kalam Anda tetap 45 derajat agar ujung ekor alif meruncing tajam.",
        "Kerja bagus! Proporsi tinggi tiang alif sudah stabil sesuai kaidah 5 titik rasm. Teruskan melatih tekanan tarikan tinta ke arah bawah.",
        "Sangat anggun! Namun perhatikan penghubung sambungan huruf nun Anda, pastikan sedikit lebih lentur agar tidak tersendat basah.",
        "Goresan yang mantap! Sifat geometri Kufi Anda presisi. Terus latih konsistensi ketebalan di setiap sudut belok."
      ];
      setFeedback(feedbacks[Math.floor(Math.random() * feedbacks.length)]);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-neutral-950/75 backdrop-blur-md animate-fadeIn">
      <div className="bg-neutral-50 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden border border-brand-green/20 flex flex-col h-[90vh]">
        
        {/* Top Header Grid */}
        <div className="bg-neutral-900 px-6 py-4 flex items-center justify-between text-white border-b border-white-10">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-brand-green flex items-center justify-center font-serif text-base text-white">
              ب
            </div>
            <div>
              <h3 className="font-sans font-bold text-base leading-tight">Student LMS Portal Simulator</h3>
              <p className="text-[10px] text-brand-green uppercase font-semibold tracking-widest block mt-0.5">Ujicoba Demo Interaktif</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-1 py-1 px-2.5 bg-neutral-800 rounded-full border border-neutral-700 text-xs text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1" />
              <span>Sesi Demo Tamu</span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="bg-white border-b border-neutral-200 px-6 py-2 flex items-center justify-between">
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab('modules')}
              className={`flex items-center space-x-2 px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === 'modules'
                  ? 'bg-brand-green/10 text-brand-green shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              <BookOpen size={14} />
              <span>Daftar Video & Modul Siswa</span>
            </button>
            <button
              onClick={() => setActiveTab('sandbox')}
              className={`flex items-center space-x-2 px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === 'sandbox'
                  ? 'bg-brand-green/10 text-brand-green shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              <PenTool size={14} />
              <span>Studio Goresan (Sandbox)</span>
            </button>
          </div>
          <span className="hidden sm:inline font-mono text-[11px] text-neutral-400">Akademi Bait Khat</span>
        </div>

        {/* Modal Main Core Body Scrollable */}
        <div className="flex-1 overflow-y-auto min-h-0 flex flex-col md:flex-row">
          
          {activeTab === 'modules' ? (
            // MODULES TAB
            <>
              {/* Left Panel: Lessons List */}
              <div className="w-full md:w-2/5 border-b md:border-b-0 md:border-r border-neutral-200 bg-white p-4 space-y-3 overflow-y-auto">
                <span className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2">Kurikulum Tingkat Riq\'ah Dasar</span>
                <div className="space-y-2">
                  {DEMO_CURRICULUM.map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => lesson.unlocked && setSelectedLesson(lesson)}
                      className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-start space-x-3 relative ${
                        !lesson.unlocked 
                          ? 'opacity-40 cursor-not-allowed bg-neutral-50/50 border-neutral-100' 
                          : selectedLesson.id === lesson.id
                          ? 'border-brand-green bg-brand-light ring-1 ring-brand-green/20'
                          : 'border-neutral-200 hover:bg-neutral-50 bg-white cursor-pointer'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${selectedLesson.id === lesson.id ? 'bg-brand-green text-white' : 'bg-neutral-100 text-neutral-500'}`}>
                        {lesson.type === 'video' ? <Video size={16} /> : <FileText size={16} />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-neutral-800 tracking-tight truncate pr-1">{lesson.title}</span>
                          {!lesson.unlocked && <span className="text-[9px] bg-neutral-200 px-1 py-0.5 rounded text-neutral-600 font-bold">Kunci</span>}
                        </div>
                        <p className="text-[10px] text-neutral-400 mt-0.5">{lesson.duration}</p>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="p-3 bg-brand-light/70 border border-brand-green/10 rounded-xl mt-4">
                  <div className="flex items-center space-x-1 text-xs font-bold text-brand-green">
                    <Award size={14} />
                    <span>Lembaga Seni Klasik</span>
                  </div>
                  <p className="text-[10px] text-neutral-500 mt-1 leading-relaxed">
                    Setiap modul memiliki lembar panduan latihan khusus yang dikoreksi langsung oleh asatidzah setiap pekan demi kemajuan presisi goresan tangan Anda.
                  </p>
                </div>
              </div>

              {/* Right Panel: Player / Preview Simulator */}
              <div className="w-full md:w-3/5 p-6 flex flex-col bg-neutral-100/50 justify-between">
                <div>
                  {/* Fake Videoplayer frame wrapper */}
                  <div className="relative aspect-video bg-neutral-900 rounded-xl overflow-hidden shadow-lg border border-neutral-800 flex items-center justify-center text-white">
                    <div className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-30" style={{ backgroundImage: `url('https://picsum.photos/seed/kaligrafi/500/300')` }} />
                    
                    {selectedLesson.type === 'video' ? (
                      <div className="z-10 text-center p-4">
                        <div className="inline-flex w-16 h-16 items-center justify-center bg-brand-green hover:bg-brand-green-hover text-white rounded-full shadow-lg cursor-pointer transform hover:scale-105 transition-all mx-auto">
                          <Video size={28} className="translate-x-0.5" />
                        </div>
                        <h5 className="font-bold text-sm mt-3 text-white max-w-sm">{selectedLesson.title}</h5>
                        <div className="mt-1 flex items-center justify-center space-x-2 text-[10px] text-neutral-300">
                          <span>Ustadz Fathurrahman Al-Khattat</span>
                          <span>•</span>
                          <span>{selectedLesson.duration}</span>
                        </div>
                        <span className="inline-block mt-4 text-[10px] bg-black/60 text-emerald-400 border border-emerald-400/20 px-2 py-0.5 rounded font-mono uppercase tracking-widest">Akses Video Modul Demo</span>
                      </div>
                    ) : (
                      <div className="z-10 text-center p-4">
                        <div className="inline-flex w-16 h-16 items-center justify-center bg-indigo-600 text-white rounded-xl shadow-lg cursor-pointer mx-auto">
                          <FileText size={28} />
                        </div>
                        <h5 className="font-bold text-sm mt-3 text-white max-w-sm">{selectedLesson.title}</h5>
                        <p className="text-neutral-300 text-[11px] mt-1">Format: Dokumen Latihan PDF Resmi (Ready Print)</p>
                        <button
                          onClick={() => alert('Download simulasi dokumen latihan Bait Khat berhasil.')}
                          className="mt-4 inline-flex items-center space-x-1 px-4 py-1.5 bg-brand-green hover:bg-brand-green-hover text-white text-xs font-bold rounded-lg shadow cursor-pointer transition-colors"
                        >
                          <Download size={12} />
                          <span>Mulai Download PDF</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Title & Description under Player */}
                  <div className="mt-5 space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest bg-brand-green/10 px-2.5 py-0.5 rounded-full">Kaidah Dasar</span>
                      <span className="text-xs text-neutral-500 font-medium">Bait Khat Digital LMS</span>
                    </div>
                    <h4 className="text-lg font-extrabold text-neutral-800 leading-snug">{selectedLesson.title}</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">{selectedLesson.description}</p>
                  </div>
                </div>

                {/* Simulated Mentor Feed */}
                <div className="mt-6 border-t border-neutral-200 pt-4 flex items-center space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                    alt="LMS Mentor"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-neutral-300 shadow-sm"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="block text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Tashhih Mentor Tersemat</span>
                    <p className="text-xs italic text-neutral-600 truncate">"Silahkan cetak buku kurs lalu unggah goresan Anda di tab Sandbox sebagai bahan evaluasi pekanan..."</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('sandbox')}
                    className="p-1 px-3 bg-white border border-neutral-300 hover:bg-neutral-50 rounded-lg text-xs font-bold text-neutral-700 font-sans cursor-pointer flex items-center space-x-0.5"
                  >
                    <span>Latihan</span>
                    <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            </>
          ) : (
            // SANDBOX PAINT TAB
            <div className="w-full p-4 sm:p-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5 bg-white">
              
              {/* Drawing Stage Canvas */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="block text-[11px] font-bold text-neutral-400 uppercase tracking-widest leading-none">Studio Gores Kalam</span>
                    <span className="text-xs text-neutral-600 mt-1 block">Silahkan gores pena di papan berikut menggunakan tetikus (mouse) atau jari sentuh Anda.</span>
                  </div>
                </div>

                {/* Canvas Area Container */}
                <div className="border-2 border-dashed border-neutral-200 rounded-xl overflow-hidden aspect-video relative shadow-inner bg-[#faf8f5]">
                  <canvas
                    ref={canvasRef}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                    className="absolute inset-0 w-full h-full cursor-crosshair touch-none"
                  />
                </div>

                {/* Canvas Controls */}
                <div className="bg-neutral-50 px-4 py-3 rounded-xl border border-neutral-200 mt-3 flex flex-wrap items-center justify-between gap-3">
                  {/* Colors */}
                  <div className="flex items-center space-x-1.5">
                    <span className="text-xs font-bold text-neutral-500 mr-2">Tinta:</span>
                    <button
                      onClick={() => setBrushColor('#017B1D')}
                      className={`w-6 h-6 rounded-full border-2 transition-all ${brushColor === '#017B1D' ? 'border-neutral-800 scale-110' : 'border-transparent'}`}
                      style={{ backgroundColor: '#017B1D' }}
                      title="Smaragdine Green"
                    />
                    <button
                      onClick={() => setBrushColor('#171717')}
                      className={`w-6 h-6 rounded-full border-2 transition-all ${brushColor === '#171717' ? 'border-neutral-800 scale-110' : 'border-transparent'}`}
                      style={{ backgroundColor: '#171717' }}
                      title="Black Calligraphy Ink"
                    />
                    <button
                      onClick={() => setBrushColor('#D4AF37')}
                      className={`w-6 h-6 rounded-full border-2 transition-all ${brushColor === '#D4AF37' ? 'border-neutral-800 scale-110' : 'border-transparent'}`}
                      style={{ backgroundColor: '#D4AF37' }}
                      title="Gold Tezhip Finish"
                    />
                  </div>

                  {/* Weight Slide */}
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-neutral-500">Ukuran Kalam:</span>
                    <input
                      type="range"
                      min={3}
                      max={20}
                      value={brushSize}
                      onChange={(e) => setBrushSize(Number(e.target.value))}
                      className="w-24 h-1 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-brand-green"
                    />
                    <span className="text-xs font-mono font-bold text-neutral-700 w-6">{brushSize}px</span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={handleClearCanvas}
                      className="p-1 px-2 text-neutral-600 hover:text-red-600 hover:bg-neutral-100 transition-colors rounded text-xs font-bold flex items-center space-x-1 cursor-pointer"
                    >
                      <Trash2 size={13} />
                      <span>Bersihkan</span>
                    </button>
                    <button
                      onClick={handleMockTashhih}
                      disabled={isAnalyzing}
                      className="p-1.5 px-3 bg-brand-green hover:bg-brand-green-hover disabled:bg-neutral-300 text-white rounded-lg text-xs font-bold flex items-center space-x-1.5 cursor-pointer shadow"
                    >
                      {isAnalyzing ? (
                        <>
                          <RefreshCw size={13} className="animate-spin" />
                          <span>Dianalisis...</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle size={13} />
                          <span>Ajukan Tashhih AI</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Sidebar feedbacks */}
              <div className="w-full md:w-64 flex flex-col justify-between bg-neutral-50 p-4 rounded-xl border border-neutral-200">
                <div className="space-y-3">
                  <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Tashhih Koreksi Langsung</span>
                  
                  {isAnalyzing ? (
                    <div className="space-y-2 py-4 text-center">
                      <RefreshCw size={24} className="animate-spin text-brand-green mx-auto" />
                      <p className="text-xs text-neutral-500 italic">Menganalisis kemiringan tarikan (tashhih) tulisan tangan Anda...</p>
                    </div>
                  ) : feedback ? (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-xs text-emerald-800 space-y-1 relative animate-fadeIn">
                      <span className="font-bold block text-[11px] uppercase tracking-wider text-emerald-900 flex items-center">
                        <CheckCircle size={12} className="mr-1" />
                        Tashhih Berhasil:
                      </span>
                      <p className="italic leading-relaxed">"{feedback}"</p>
                    </div>
                  ) : (
                    <div className="p-4 border border-neutral-200 rounded-lg text-center bg-white space-y-2 text-neutral-500">
                      <PenTool size={20} className="mx-auto text-neutral-400" />
                      <p className="text-xs leading-normal">Tuliskan beberapa goresan huruf lalu serahkan kepada asisten AI untuk menerima koreksi estetika instan!</p>
                    </div>
                  )}
                </div>

                <div className="border-t border-neutral-200 pt-3 mt-4 text-[10px] text-neutral-400 leading-normal">
                  <p>Model ini mensimulasikan sistem evaluasi visual digital (tashhih digital) yang digunakan di platform portal LMS resmi siswa Bait Khat.</p>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
