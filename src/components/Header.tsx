import React, { useState } from 'react';
import { Phone, MapPin, Youtube, MessageCircle, Menu, X, Shield, Sparkles, HeartHandshake, Percent, Radio, Zap } from 'lucide-react';
import { INSTITUTE_DETAILS } from '../data/mockData';

interface HeaderProps {
  onOpenInquiry: (courseTitle?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Ravi Sir', href: '#about' },
    { name: 'Courses & Fees', href: '#courses' },
    { name: 'Special Discounts', href: '#discounts', highlight: true },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Contact & Address', href: '#contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm transition-all">
      {/* Top Announcement Bar & Continuous News Channel Sliding Ticker */}
      <div className="bg-[#0F172A] text-white py-2 px-2 sm:px-4 text-xs sm:text-sm font-medium border-b-2 border-[#FF9933] overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          {/* Authentic TV News Channel Flash Badge */}
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-red-600 via-red-600 to-[#FF9933] text-white font-extrabold px-2.5 py-1 rounded-md text-[11px] sm:text-xs uppercase tracking-wider shrink-0 shadow-sm select-none border border-red-400/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-90"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="font-heading tracking-wide">NEWS FLASH</span>
          </div>

          {/* Sliding Ticker Window */}
          <div className="flex-1 overflow-hidden relative" title="Hover to pause ticker">
            {/* Edge fade gradients for polished broadcasting feel */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#0F172A] to-transparent z-10 hidden sm:block" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#0F172A] to-transparent z-10 hidden sm:block" />

            <div className="animate-news-ticker flex items-center whitespace-nowrap text-slate-200 text-xs sm:text-[13px] font-medium py-0.5">
              {/* Sliding Track 1 */}
              <div className="flex items-center gap-6 px-4">
                <span className="text-white font-bold">
                  🎉 New Batches Open for Airforce X/Y, SSC GD, Navy SSR & UPSI
                </span>
                <span className="text-[#FF9933] font-black">★</span>
                <span className="text-emerald-400 font-bold">
                  🎖️ Special Discounts for Defense Wards & Female Candidates!
                </span>
                <span className="text-[#FF9933] font-black">★</span>
                <span className="text-slate-100">
                  Call Ravi Sir:{' '}
                  <a href="tel:9808124401" className="text-[#FF9933] font-extrabold underline hover:text-amber-300 ml-1">
                    +91 9808124401
                  </a>
                </span>
                <span className="text-[#FF9933] font-black">★</span>
                <span className="text-amber-300 font-semibold">
                  📐 Learn Rapid 5-Second Math Short Tricks by Ex-Assistant Commandant Ravi Pachori Sir
                </span>
                <span className="text-[#FF9933] font-black">★</span>
                <span className="text-slate-200">
                  📍 Campus: Diamond City, Gwalior Rd, Nagla Padma, Agra
                </span>
                <span className="text-[#FF9933] font-black">★</span>
                <span className="text-red-400 font-bold">
                  📺 YouTube: Selection Runway (1.7K+ Subscribers)
                </span>
              </div>

              {/* Sliding Track 2 (Exact Duplicate for 100% Seamless Infinite Loop) */}
              <div className="flex items-center gap-6 px-4" aria-hidden="true">
                <span className="text-white font-bold">
                  🎉 New Batches Open for Airforce X/Y, SSC GD, Navy SSR & UPSI
                </span>
                <span className="text-[#FF9933] font-black">★</span>
                <span className="text-emerald-400 font-bold">
                  🎖️ Special Discounts for Defense Wards & Female Candidates!
                </span>
                <span className="text-[#FF9933] font-black">★</span>
                <span className="text-slate-100">
                  Call Ravi Sir:{' '}
                  <a href="tel:9808124401" className="text-[#FF9933] font-extrabold underline hover:text-amber-300 ml-1">
                    +91 9808124401
                  </a>
                </span>
                <span className="text-[#FF9933] font-black">★</span>
                <span className="text-amber-300 font-semibold">
                  📐 Learn Rapid 5-Second Math Short Tricks by Ex-Assistant Commandant Ravi Pachori Sir
                </span>
                <span className="text-[#FF9933] font-black">★</span>
                <span className="text-slate-200">
                  📍 Campus: Diamond City, Gwalior Rd, Nagla Padma, Agra
                </span>
                <span className="text-[#FF9933] font-black">★</span>
                <span className="text-red-400 font-bold">
                  📺 YouTube: Selection Runway (1.7K+ Subscribers)
                </span>
              </div>
            </div>
          </div>

          {/* Quick Right Action for Desktop */}
          <div className="hidden xl:flex items-center gap-3 shrink-0 text-xs font-semibold pl-2 border-l border-slate-700">
            <a
              href={INSTITUTE_DETAILS.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors bg-slate-800/90 px-2.5 py-1 rounded border border-slate-700 shadow-2xs"
            >
              <Youtube className="w-3.5 h-3.5 text-red-500" />
              <span>Selection Runway</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Left: Brand Logo & Badge with Indian Flag Motif */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-white border-2 border-slate-200 shadow-md group-hover:border-[#FF9933] transition-all overflow-hidden">
              {/* Indian Tricolor Stripe Accent on Left Edge */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 flex flex-col">
                <span className="h-1/3 bg-[#FF9933]" />
                <span className="h-1/3 bg-white" />
                <span className="h-1/3 bg-[#138808]" />
              </div>
              
              {/* Shield & Ashoka Chakra stylized emblem */}
              <div className="flex flex-col items-center justify-center pl-1">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-amber-500/40 bg-amber-50/70 flex items-center justify-center text-[#FF9933]">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF9933] fill-amber-50" />
                </div>
              </div>

              {/* Pulsing indicator */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#138808]"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0F172A] font-heading">
                  R.D. CAREER <span className="text-[#FF9933]">CLASSES</span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 bg-emerald-50 text-[#138808] border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#138808]" />
                  ESTD. 2015
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 font-medium">
                Mentored by <span className="text-[#0F172A] font-bold">Ravi Pachori Sir</span> (Ex-Asst. Commandant, Ex-SI)
              </p>
            </div>
          </a>

          {/* Center / Nav Tabs */}
          <nav className="hidden xl:flex items-center gap-6 text-[14px] font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors py-1 ${
                  link.highlight
                    ? 'text-[#138808] font-bold flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 hover:bg-emerald-100'
                    : 'hover:text-[#FF9933]'
                }`}
              >
                {link.highlight && <Percent className="w-3.5 h-3.5 text-[#138808]" />}
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Right CTA Button: Chat on WhatsApp */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:9808124401"
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 transition-colors"
              title="Call Helpline Directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF9933]" />
              <span className="font-bold">9808124401</span>
            </a>

            <a
              href="https://wa.me/919808124401?text=Hi%20Ravi%20Sir,%20I%20want%20to%20inquire%20about%20admissions%20at%20R.D.%20Career%20Classes%20Agra."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20be5a] text-slate-950 shadow-md shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href="https://wa.me/919808124401?text=Hi%20Ravi%20Sir,%20I%20want%20to%20inquire%20about%20admissions%20at%20R.D.%20Career%20Classes%20Agra."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl bg-[#25D366] text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-sm"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-200 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className={`px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                  link.highlight
                    ? 'bg-emerald-50 text-[#138808] border border-emerald-200'
                    : 'text-[#0F172A] hover:bg-slate-100'
                }`}
              >
                <span>{link.name}</span>
                {link.highlight && (
                  <span className="text-[11px] bg-[#138808] text-white px-2 py-0.5 rounded-full font-bold">
                    Special Concessions
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-200 space-y-2">
            <a
              href="https://wa.me/919808124401?text=Hi%20Ravi%20Sir,%20I%20want%20to%20inquire%20about%20admissions%20at%20R.D.%20Career%20Classes%20Agra."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#25D366] text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp (+91 9808124401)</span>
            </a>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-1 px-1">
              <a href="tel:9808124401" className="flex items-center gap-1 hover:text-[#0F172A] font-semibold">
                <Phone className="w-3.5 h-3.5 text-[#FF9933]" />
                <span>Call: 9808124401</span>
              </a>
              <a
                href={INSTITUTE_DETAILS.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-red-600 font-semibold"
              >
                <Youtube className="w-3.5 h-3.5" />
                <span>YouTube: Selection Runway</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
