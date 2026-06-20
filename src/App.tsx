import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import GallerySection from './components/GallerySection';
import AchievementsSection from './components/AchievementsSection';
import EventsSection from './components/EventsSection';
import BlueprintSection from './components/BlueprintSection';
import RegisterModal from './components/RegisterModal';
import LmsPortalModal from './components/LmsPortalModal';
import { ActiveSection } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedRegisterProgramId, setSelectedRegisterProgramId] = useState<string | undefined>(undefined);
  const [isLmsOpen, setIsLmsOpen] = useState(false);

  // Trigger registration flow with target program selection optionally
  const handleOpenRegister = (programId?: string) => {
    setSelectedRegisterProgramId(programId);
    setIsRegisterOpen(true);
  };

  const handleOpenLms = () => {
    setIsLmsOpen(true);
  };

  // Dedicated renderer for individual pages
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <HomeSection
            onOpenRegister={handleOpenRegister}
            setActiveSection={setActiveSection}
            onOpenLms={handleOpenLms}
          />
        );
      case 'about':
        return <AboutSection />;
      case 'programs':
        return (
          <ProgramsSection
            onOpenRegister={handleOpenRegister}
            onOpenLms={handleOpenLms}
          />
        );
      case 'gallery':
        return <GallerySection onOpenRegister={handleOpenRegister} />;
      case 'achievements':
        return <AchievementsSection onOpenRegister={handleOpenRegister} />;
      case 'events':
        return <EventsSection onOpenRegister={handleOpenRegister} />;
      case 'blueprint':
        return <BlueprintSection onBackToHome={() => setActiveSection('home')} />;
      default:
        return (
          <HomeSection
            onOpenRegister={handleOpenRegister}
            setActiveSection={setActiveSection}
            onOpenLms={handleOpenLms}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col justify-between selection:bg-brand-green selection:text-white" id="baitkhat-applet-root">
      
      {/* Floating navigation bar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenRegister={handleOpenRegister}
        onOpenLms={handleOpenLms}
      />

      {/* Main viewport area - Animated through key matching to force slide entry triggers */}
      <main className="flex-1" id="main-sections-viewport">
        <div key={activeSection} className="animate-fadeIn">
          {renderActiveSection()}
        </div>
      </main>

      {/* Interactivity elements: Modal components */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        selectedProgramId={selectedRegisterProgramId}
      />

      <LmsPortalModal
        isOpen={isLmsOpen}
        onClose={() => setIsLmsOpen(false)}
      />

    </div>
  );
}
