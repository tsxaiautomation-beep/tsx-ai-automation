import React, { useState } from 'react';
import SparklingStarsCanvas from './components/SparklingStarsCanvas';
import { AnnouncementBar, Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ToolsStrip, NumbersBand, HubDiagram } from './components/ToolsStrip';
import { BeforeAfter, ServicesSection } from './components/ServicesSection';
import { ProcessSection, WhySection, FaqSection } from './components/ProcessSection';
import { ContactSection, FooterSection } from './components/ContactSection';
import { ConsultationModal, MobileBottomBar } from './components/ConsultationModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      background: '#07050F',
      color: '#F5F3FF',
      fontFamily: "'Inter', system-ui, sans-serif",
      boxSizing: 'border-box',
      overflowX: 'hidden',
      paddingBottom: '60px',
      position: 'relative',
    }}>
      {/* Dynamic Sparkling Stars Cosmic Background */}
      <SparklingStarsCanvas />

      {/* 1. ANNOUNCEMENT BAR */}
      <AnnouncementBar onOpenModal={handleOpenModal} />

      {/* 2. NAV */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* 3. HERO (with Responsive Dashboard Mockup) */}
      <Hero onOpenModal={handleOpenModal} />

      {/* 4. TOOLS STRIP (Marquee) */}
      <ToolsStrip />

      {/* 5. NUMBERS BAND */}
      <NumbersBand />

      {/* 6. HUB DIAGRAM (One AI Brain SVG) */}
      <HubDiagram />

      {/* 7. BEFORE / AFTER (Why Automate) */}
      <BeforeAfter />

      {/* 8. SERVICES (What We Build - 6 Automations) */}
      <ServicesSection />

      {/* 9. PROCESS (How It Works - 4 Steps) */}
      <ProcessSection />

      {/* 10. WHO + WHY (Why TSX) */}
      <WhySection />

      {/* 11. FAQ */}
      <FaqSection />

      {/* 12. FINAL CTA + CONTACT FORM */}
      <ContactSection onOpenModal={handleOpenModal} />

      {/* 13. FOOTER */}
      <FooterSection />

      {/* 14. MOBILE BOTTOM ACTION BAR */}
      <MobileBottomBar onOpenModal={handleOpenModal} />

      {/* 15. CONSULTATION MODAL */}
      <ConsultationModal isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  );
}
