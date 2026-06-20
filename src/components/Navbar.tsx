import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, LogIn } from 'lucide-react';
import { ActiveSection } from '../types';

interface NavbarProps {
  activeSection: ActiveSection;
  setActiveSection: (section: ActiveSection) => void;
  onOpenRegister: (programId?: string) => void;
  onOpenLms: () => void;
}

export default function Navbar({ activeSection, setActiveSection, onOpenRegister, onOpenLms }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: ActiveSection; label: string }[] = [
    { id: 'home', label: 'Beranda' },
    { id: 'about', label: 'Tentang Kami' },
    { id: 'programs', label: 'Program & Kelas' },
    { id: 'gallery', label: 'Galeri Karya' },
    { id: 'achievements', label: 'Prestasi' },
    { id: 'events', label: 'Event & Promo' },
  ];

  const handleNavClick = (section: ActiveSection) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 text-neutral-800 border-b border-brand-green/10'
          : 'bg-gradient-to-b from-neutral-900/80 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div
            id="nav-brand-logo"
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-brand-green text-white shadow-md transition-transform duration-300 group-hover:scale-105">
              {/* Islamic Star Pattern geometry inside rounded square */}
              <span className="font-serif text-lg font-bold">ب</span>
              <div className="absolute inset-0 border border-brand-accent/30 rounded-xl rotate-45 scale-90 pointer-events-none"></div>
            </div>
            <div>
              <span className={`block font-serif text-xl font-bold tracking-tight leading-none ${isScrolled ? 'text-brand-green' : 'text-white'}`}>
                BAIT KHAT
              </span>
              <span className={`block font-sans text-[10px] tracking-widest font-semibold uppercase ${isScrolled ? 'text-neutral-500' : 'text-neutral-300'}`}>
                Lembaga Seni Kaligrafi
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1" id="nav-desktop-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg cursor-pointer ${
                  activeSection === item.id
                    ? isScrolled
                      ? 'text-brand-green bg-brand-green/10 font-semibold'
                      : 'text-white bg-white/20 font-semibold'
                    : isScrolled
                    ? 'text-neutral-600 hover:text-brand-green hover:bg-neutral-50'
                    : 'text-neutral-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full ${isScrolled ? 'bg-brand-green' : 'bg-brand-accent'}`} />
                )}
              </button>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center space-x-3" id="nav-desktop-ctas">
            <button
              onClick={() => onOpenRegister()}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                isScrolled
                  ? 'border border-brand-green text-brand-green hover:bg-brand-green hover:text-white'
                  : 'border border-white/40 text-white hover:bg-white/20'
              }`}
            >
              Daftar Sekarang
            </button>
            <button
              onClick={onOpenLms}
              className="flex items-center space-x-1 px-4 py-2 text-xs font-semibold bg-brand-green hover:bg-brand-green-hover text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group"
            >
              <LogIn size={14} className="group-hover:translate-x-0.5 transition-transform" />
              <span>Masuk LMS</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2" id="nav-mobile-controls">
            <button
              onClick={onOpenLms}
              className="flex items-center space-x-1 px-3 py-1.5 text-xs font-semibold bg-brand-green hover:bg-brand-green-hover text-white rounded-lg shadow-sm"
            >
              <LogIn size={12} />
              <span>LMS</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg cursor-pointer transition-colors ${
                isScrolled ? 'text-neutral-800 hover:bg-neutral-100' : 'text-white hover:bg-white/15'
              }`}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div id="nav-mobile-drawer" className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-neutral-200 shadow-xl overflow-hidden py-4 px-4 flex flex-col space-y-2 animate-fadeIn">
          <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest pb-1 border-b border-neutral-100">Sitemap Navigasi</div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex items-center justify-between w-full px-4 py-3 text-left text-sm rounded-lg cursor-pointer font-medium ${
                activeSection === item.id
                  ? 'bg-brand-green/10 text-brand-green font-bold'
                  : 'text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              <span>{item.label}</span>
              {activeSection === item.id && <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />}
            </button>
          ))}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-neutral-100">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full text-center py-2.5 text-xs font-semibold border border-neutral-300 text-neutral-700 hover:bg-neutral-50 rounded-lg cursor-pointer"
            >
              Daftar Kelas
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenLms();
              }}
              className="w-full text-center py-2.5 text-xs font-semibold bg-brand-green hover:bg-brand-green-hover text-white rounded-lg cursor-pointer"
            >
              Buka LMS
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
