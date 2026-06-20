import React, { useState } from 'react';
import { X, CheckCircle2, Copy, Printer, HelpCircle } from 'lucide-react';
import { RegistrationForm } from '../types';
import { PROGRAMS_DATA } from '../data';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProgramId?: string;
}

export default function RegisterModal({ isOpen, onClose, selectedProgramId }: RegisterModalProps) {
  const [formData, setFormData] = useState<RegistrationForm>({
    fullName: '',
    email: '',
    phone: '',
    programId: selectedProgramId || PROGRAMS_DATA[0].id,
    classType: (PROGRAMS_DATA.find((p) => p.id === (selectedProgramId || PROGRAMS_DATA[0].id))?.type as 'offline' | 'online') || 'offline',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mockReceiptId, setMockReceiptId] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const currentProgram = PROGRAMS_DATA.find((p) => p.id === formData.programId) || PROGRAMS_DATA[0];

  const handleProgramChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    const prog = PROGRAMS_DATA.find((p) => p.id === selectedId);
    setFormData({
      ...formData,
      programId: selectedId,
      classType: (prog?.type as 'offline' | 'online') || 'offline',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Mohon lengkapi data Nama, Email dan No. WhatsApp Anda.');
      return;
    }
    // Generate simulated receipt
    const transactionId = 'BK-' + Math.floor(100000 + Math.random() * 900000);
    setMockReceiptId(transactionId);
    setIsSubmitted(true);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(mockReceiptId);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden border border-brand-green/10 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-brand-green px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center space-x-2">
            <span className="font-serif text-xl">ب</span>
            <h3 className="font-sans font-bold text-lg">Pendaftaran Bait Khat</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Box */}
        <div className="p-6 overflow-y-auto flex-1">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-sm text-neutral-600 bg-brand-light border border-brand-green/20 rounded-lg p-3 text-center">
                Silahkan isi formulir pendaftaran akademis secara singkat di bawah. Admin kami akan menghubungi Anda dalam waktu 1x24 jam kerja.
              </div>

              {/* Program selection */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  Pilih Program Studi
                </label>
                <select
                  value={formData.programId}
                  onChange={handleProgramChange}
                  className="w-full px-3 py-2 bg-neutral-50 text-neutral-800 border border-neutral-300 rounded-lg text-sm focus:ring-1 focus:ring-brand-green focus:border-brand-green outline-none"
                >
                  {PROGRAMS_DATA.map((prog) => (
                    <option key={prog.id} value={prog.id}>
                      [{prog.type.toUpperCase()}] {prog.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Dynamic Fee & Type info */}
              <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-lg flex justify-between items-center text-sm">
                <div>
                  <span className="block text-[11px] font-bold text-neutral-400 uppercase tracking-widest leading-none mb-1">Level Tingkat</span>
                  <span className="font-semibold text-neutral-800 bg-brand-green/10 text-brand-green px-2 py-0.5 rounded text-xs">
                    {currentProgram.level}
                  </span>
                </div>
                <div className="text-right">
                  <span className="block text-[11px] font-bold text-neutral-400 uppercase tracking-widest leading-none mb-1">Investasi Pendidikan</span>
                  <span className="font-extrabold text-brand-green text-base">
                    {currentProgram.price} <span className="text-xs font-normal text-neutral-500">/{currentProgram.period}</span>
                  </span>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  Nama Lengkap Calon Siswa *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Misal: Arkan Fikri"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-50 text-neutral-800 border border-neutral-300 rounded-lg text-sm focus:ring-1 focus:ring-brand-green focus:border-brand-green outline-none"
                />
              </div>

              {/* Contact information details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Alamat Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-50 text-neutral-800 border border-neutral-300 rounded-lg text-sm focus:ring-1 focus:ring-brand-green focus:border-brand-green outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    No. WhatsApp Aktif *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 08123456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-50 text-neutral-800 border border-neutral-300 rounded-lg text-sm focus:ring-1 focus:ring-brand-green focus:border-brand-green outline-none"
                  />
                </div>
              </div>

              {/* Mode of study */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  Pilihan Format Belajar
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className={`block border p-2.5 rounded-lg text-center cursor-pointer text-xs font-semibold ${
                    formData.classType === 'offline' 
                      ? 'border-brand-green bg-brand-green/5 text-brand-green' 
                      : 'border-neutral-200 hover:bg-neutral-50 text-neutral-600'
                  }`}>
                    <input
                      type="radio"
                      name="classType"
                      value="offline"
                      checked={formData.classType === 'offline'}
                      onChange={() => setFormData({ ...formData, classType: 'offline' })}
                      className="sr-only"
                    />
                    Tatap Muka di Studio
                  </label>
                  <label className={`block border p-2.5 rounded-lg text-center cursor-pointer text-xs font-semibold ${
                    formData.classType === 'online' 
                      ? 'border-brand-green bg-brand-green/5 text-brand-green' 
                      : 'border-neutral-200 hover:bg-neutral-50 text-neutral-600'
                  }`}>
                    <input
                      type="radio"
                      name="classType"
                      value="online"
                      checked={formData.classType === 'online'}
                      onChange={() => setFormData({ ...formData, classType: 'online' })}
                      className="sr-only"
                    />
                    Akses Online LMS
                  </label>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  Catatan Tambahan (Riwayat Belajar / Pertanyaan)
                </label>
                <textarea
                  rows={2}
                  placeholder="Sebutkan jika Anda sudah pernah berlatih sebelumnya atau jika ada pertanyaan khusus..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-50 text-neutral-800 border border-neutral-300 rounded-lg text-sm focus:ring-1 focus:ring-brand-green focus:border-brand-green outline-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full mt-2 py-3 bg-brand-green hover:bg-brand-green-hover text-white text-sm font-bold uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
              >
                Kirim Formulir Pendaftaran
              </button>
            </form>
          ) : (
            // Success state - Simulated invoice slip/receipt
            <div className="space-y-4 animate-scaleUp">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full mb-2">
                  <CheckCircle2 size={28} />
                </div>
                <h4 className="text-lg font-bold text-neutral-900 leading-tight">Pendaftaran Terkirim!</h4>
                <p className="text-xs text-neutral-500 mt-1">Sistem kami berhasil memverifikasi pengajuan Anda.</p>
              </div>

              {/* Decorative Invoice Receipt representation */}
              <div className="border border-dashed border-neutral-300 bg-neutral-50 rounded-xl p-5 font-mono text-xs text-neutral-700 space-y-3 relative overflow-hidden">
                {/* Simulated circle punches on left and right for realistic ticket design */}
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-r border-neutral-300" />
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-l border-neutral-300" />

                <div className="flex justify-between font-bold text-neutral-900 text-sm border-b border-neutral-200 pb-2">
                  <span>BUKTI DAFTAR</span>
                  <span className="text-brand-green font-mono">{mockReceiptId}</span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between">
                    <span className="text-neutral-400 font-sans">Siswa:</span>
                    <span className="font-sans font-bold text-neutral-800">{formData.fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400 font-sans">Email:</span>
                    <span className="font-sans text-neutral-800">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400 font-sans">No. HP WA:</span>
                    <span className="font-sans text-neutral-800">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400 font-sans">Program:</span>
                    <span className="font-sans font-semibold text-neutral-800 truncate max-w-[200px]" title={currentProgram.title}>
                      {currentProgram.title}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400 font-sans">Format:</span>
                    <span className="font-sans text-neutral-800 capitalize">{formData.classType} Class</span>
                  </div>
                  <div className="flex justify-between border-t border-neutral-200 pt-2 font-bold text-neutral-900">
                    <span className="font-sans">Biaya:</span>
                    <span className="font-sans text-brand-green">{currentProgram.price}</span>
                  </div>
                </div>

                <div className="bg-white/80 p-2.5 rounded border border-neutral-200 flex items-center justify-between mt-3">
                  <span className="text-[10px] text-neutral-500 font-sans uppercase font-bold tracking-wider leading-tight">Gunakan Kode Tagihan untuk konfirmasi:</span>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center space-x-1 py-1 px-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded text-[10px] font-sans font-semibold border border-neutral-300 transition-colors"
                  >
                    <Copy size={10} />
                    <span>{copiedCode ? 'Salin!' : 'Salin'}</span>
                  </button>
                </div>
              </div>

              {/* Payment Info */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800 space-y-1">
                <span className="font-bold block text-[11px] uppercase tracking-wider">Langkah Pembayaran & Konfirmasi:</span>
                <p>1. Simpan kode pendaftaran di atas.</p>
                <p>2. Transfer investasi pendidikan ke **Bank Syariah Indonesia (BSI) 7120-1919-13** a/n Yayasan Bait Khat.</p>
                <p>3. Konfirmasi bukti transfer ke nomor WhatsApp kami **0821-2234-9199** dengan menyertakan kode pendaftaran atau tunjukkan slip ini saat berkunjung langsung.</p>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="flex-1 py-2.5 border border-neutral-300 text-neutral-700 text-xs font-semibold hover:bg-neutral-50 rounded-xl"
                >
                  Selesai
                </button>
                <button
                  onClick={() => window.print()}
                  className="flex items-center justify-center space-x-1.5 px-4 py-2.5 bg-neutral-100 text-neutral-800 text-xs font-semibold hover:bg-neutral-200 rounded-xl border border-neutral-300"
                >
                  <Printer size={13} />
                  <span>Cetak Slip</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
