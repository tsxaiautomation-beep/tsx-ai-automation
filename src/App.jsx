import React, { useState, useEffect } from 'react';
import SparklingStarsCanvas from './components/SparklingStarsCanvas';
import { AnnouncementBar, Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ToolsStrip, NumbersBand, IndustriesBand, HubDiagram } from './components/ToolsStrip';
import { BeforeAfter, ServicesSection } from './components/ServicesSection';
import { ProcessSection, WhySection, FaqSection } from './components/ProcessSection';
import { ContactSection, FooterSection } from './components/ContactSection';
import { ConsultationModal, MobileBottomBar } from './components/ConsultationModal';
import AiChatWidget from './components/AiChatWidget';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      background: '#050508',
      color: '#FFFFFF',
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      boxSizing: 'border-box',
      overflowX: 'clip',
      paddingBottom: '60px',
      position: 'relative',
    }}>
      {/* Dynamic Sparkling Stars Cosmic Background */}
      <SparklingStarsCanvas />

      {/* STICKY HEADER */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <AnnouncementBar onOpenModal={handleOpenModal} />
        <Navbar onOpenModal={handleOpenModal} />
      </header>

      <Hero onOpenModal={handleOpenModal} />
      <ToolsStrip />
      <NumbersBand />
      <IndustriesBand />
      <HubDiagram />
      <BeforeAfter />
      <ServicesSection />
      <ProcessSection />
      <WhySection />
      <FaqSection />
      <ContactSection onOpenModal={handleOpenModal} />
      <FooterSection />

      {/* MOBILE BOTTOM ACTION BAR */}
      <MobileBottomBar onOpenModal={handleOpenModal} />

      {/* LIVE AI AGENT CHATBOT WIDGET */}
      <AiChatWidget onOpenModal={handleOpenModal} />

      {/* CONSULTATION MODAL */}
      <ConsultationModal isOpen={modalOpen} onClose={handleCloseModal} />

      {/* SCROLL TO TOP BUTTON */}
      <button
        className={`scroll-top-btn${showScrollTop ? ' visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </div>
  );
}
