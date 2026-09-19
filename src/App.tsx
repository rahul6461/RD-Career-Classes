import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FounderSection } from './components/FounderSection';
import { CoursesSection } from './components/CoursesSection';
import { DiscountsBanner } from './components/DiscountsBanner';
import { ShortcutsShowcase } from './components/ShortcutsShowcase';
import { FacilitiesSection } from './components/FacilitiesSection';
import { YouTubeShowcase } from './components/YouTubeShowcase';
import { HallOfFame } from './components/HallOfFame';
import { ContactSection } from './components/ContactSection';
import { QuickInquirySection } from './components/QuickInquirySection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { InquiryModal } from './components/InquiryModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>('Airforce X & Y Group / Agniveer');

  const handleOpenInquiry = (courseName?: string) => {
    if (courseName) {
      setSelectedCourse(courseName);
    }
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] flex flex-col font-sans selection:bg-[#FF9933] selection:text-white">
      {/* Top Header & Sticky Navigation Bar with WhatsApp CTA */}
      <Header onOpenInquiry={() => handleOpenInquiry()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section A: Hero Section with Officer Trust Badges & Authentic Armed Forces Imagery */}
        <Hero onOpenInquiry={() => handleOpenInquiry()} />

        {/* Section B: Founder Credentials & "Selection Runway" Pedagogy (Ravi Pachori Sir) */}
        <FounderSection onOpenInquiry={() => handleOpenInquiry()} />

        {/* Section C: Courses Offered & Fee Structure (Cards with direct WhatsApp booking & discount tags) */}
        <CoursesSection onSelectCourseForInquiry={(course) => handleOpenInquiry(course)} />

        {/* Section C (cont.): Dedicated Concession Banners for Girl Students & Defense Personnel Wards */}
        <DiscountsBanner onOpenInquiry={(course) => handleOpenInquiry(course)} />

        {/* Section: Signature Math Shortcuts ("Selection Runway" vs Traditional Method) */}
        <ShortcutsShowcase />

        {/* Section D: Key Facilities & Academic Infrastructure */}
        <FacilitiesSection />

        {/* Section: Official YouTube Channel "Selection Runway" (1.7K+ Subs) Showcase */}
        <YouTubeShowcase />

        {/* Section: Selections Hall of Fame & FAQs */}
        <HallOfFame onOpenInquiry={() => handleOpenInquiry()} />

        {/* Section F: Address & Contact / Map Integration (Diamond City, Gwalior Rd, Agra) */}
        <ContactSection />

        {/* Quick In-Page Admission Inquiry Desk */}
        <QuickInquirySection />
      </main>

      {/* Footer with Full Address, Founder Credentials & Quick Links */}
      <Footer />

      {/* Sticky Floating WhatsApp Quick-Chat Widget */}
      <FloatingWhatsApp />

      {/* Universal WhatsApp Inquiry Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCourse={selectedCourse}
      />
    </div>
  );
}
