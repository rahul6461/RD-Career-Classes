import React from 'react';
import { 
  Shield, 
  Award, 
  Users, 
  Youtube, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Star,
  Compass,
  Check
} from 'lucide-react';
import { INSTITUTE_DETAILS } from '../data/mockData';

interface HeroProps {
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-white pt-8 pb-16 lg:pt-14 lg:pb-20 text-[#0F172A] border-b border-slate-200/80">
      {/* Subtle Indian Tricolor background glow accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-amber-200/40 blur-[100px]" />
        <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-emerald-100/50 blur-[90px]" />
      </div>

      {/* Ashoka Chakra subtle watermark */}
      <div className="absolute top-4 right-6 lg:right-20 pointer-events-none opacity-[0.035] select-none">
        <svg className="w-80 h-80 lg:w-[480px] lg:h-[480px]" viewBox="0 0 100 100" fill="none" stroke="#0F172A">
          <circle cx="50" cy="50" r="46" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="50" cy="50" r="36" strokeWidth="1" />
          <circle cx="50" cy="50" r="10" strokeWidth="2" />
          {[...Array(24)].map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={50 + 36 * Math.cos((i * 15 * Math.PI) / 180)}
              y2={50 + 36 * Math.sin((i * 15 * Math.PI) / 180)}
              strokeWidth="0.8"
            />
          ))}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges Bar */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#FF9933] animate-pulse" />
            <span>🇮🇳 Agra's No. 1 Defense & Competitive Exam Specialist</span>
          </div>

          <a 
            href={INSTITUTE_DETAILS.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 hover:bg-red-100 transition-colors text-xs font-semibold"
          >
            <Youtube className="w-4 h-4 text-red-600" />
            <span>YouTube: Selection Runway • <strong>1.7K+ Subscribers</strong></span>
          </a>
        </div>

        {/* Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headlines, Sub-headline, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-[1.12] text-[#0F172A]">
                Achieve Your Dream Uniform with{' '}
                <span className="text-[#FF9933] underline decoration-[#138808]/40 decoration-4 underline-offset-8">
                  R.D. Career Classes
                </span>
                , Agra!
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-medium pt-1">
                Learn Math Short Tricks directly from <strong className="text-[#0F172A] font-bold">Ravi Pachori Sir</strong> — Ex-Assistant Commandant, Ex-SI, SSC CGL & CPO Qualified.
              </p>
            </div>

            {/* Authentic Indian Armed Forces Targets */}
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-700">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#138808]" />
                <span>Indian Airforce (Agniveer X / Y)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#138808]" />
                <span>SSC GD / CGL / CHSL / CPO</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#138808]" />
                <span>Indian Navy (SSR / AA / MR)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#138808]" />
                <span>UP Police SI (Daroga) & Constable</span>
              </span>
            </div>

            {/* Specific Required CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Button 1: Inquire on WhatsApp */}
              <a
                href="https://wa.me/919808124401?text=Hi%20Ravi%20Sir,%20I%20want%20to%20inquire%20about%20admissions%20and%20discounts%20at%20R.D.%20Career%20Classes%20Agra."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#20be5a] text-slate-950 font-extrabold text-base shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Inquire on WhatsApp (9808124401)</span>
              </a>

              {/* Button 2: Explore Courses & Discounts */}
              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#0F172A] font-bold text-base border-2 border-slate-300 hover:border-[#FF9933] shadow-sm transition-all text-center"
              >
                <span>Explore Courses & Discounts</span>
                <ArrowRight className="w-4 h-4 text-[#FF9933]" />
              </a>
            </div>

            {/* Helpline micro-note */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 font-medium pt-1">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#138808]" />
                Direct Helpline: <strong className="text-[#0F172A]">+91 9808124401</strong>
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-amber-800 font-semibold">
                📍 Diamond City, Gwalior Rd, Agra
              </span>
            </div>
          </div>

          {/* Right Column: Authentic Indian Officer & Armed Forces Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-white border-2 border-slate-200 p-6 sm:p-7 shadow-xl">
              {/* Indian Tricolor Top Ribbon */}
              <div className="absolute top-0 inset-x-0 h-1.5 rounded-t-3xl bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />

              {/* Officer Profile Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-13 h-13 rounded-2xl bg-amber-50 border-2 border-[#FF9933] flex items-center justify-center text-[#FF9933] font-bold shadow-sm">
                    <Shield className="w-7 h-7 text-[#FF9933] fill-amber-100" />
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-[#0F172A] font-heading tracking-wide">
                      MR. RAVI PACHORI SIR
                    </h2>
                    <p className="text-xs text-[#138808] font-bold flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" /> Ex-Assistant Commandant & Ex-SI
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-[#138808] border border-emerald-200">
                    Verified Officer
                  </span>
                </div>
              </div>

              {/* Armed Forces Service Grid (Indian Armed Forces & Police) */}
              <div className="grid grid-cols-3 gap-2.5 my-4">
                <div className="rounded-xl bg-sky-50 border border-sky-200 p-3 text-center flex flex-col items-center justify-center">
                  <span className="text-2xl mb-1">✈️</span>
                  <span className="text-xs font-bold text-sky-900">Bhartiya Vayu Sena</span>
                  <span className="text-[10px] text-sky-700 font-medium">Airforce X & Y</span>
                </div>
                <div className="rounded-xl bg-blue-50 border border-blue-200 p-3 text-center flex flex-col items-center justify-center">
                  <span className="text-2xl mb-1">⚓</span>
                  <span className="text-xs font-bold text-blue-950">Indian Navy</span>
                  <span className="text-[10px] text-blue-700 font-medium">SSR / AA / MR</span>
                </div>
                <div className="rounded-xl bg-amber-50 border border-amber-200 p-3 text-center flex flex-col items-center justify-center">
                  <span className="text-2xl mb-1">🚔</span>
                  <span className="text-xs font-bold text-amber-950">Police & SSC</span>
                  <span className="text-[10px] text-amber-700 font-medium">UPSI & SSC CGL</span>
                </div>
              </div>

              {/* Ravi Sir's Special Math Speed Method Callout */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#FF9933]" /> "Selection Runway Shortcuts"
                  </span>
                  <span className="text-[11px] font-bold text-[#138808] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    5–10 Sec / Question
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  "Competitive exams are won by speed and accuracy. Throw away lengthy traditional formulas and crack complex questions mentally."
                </p>
                <p className="text-[11px] text-[#FF9933] font-bold text-right">
                  — Ravi Pachori Sir
                </p>
              </div>

              {/* Batch Admission Alert & Concessions Callout */}
              <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-orange-50 to-emerald-50 border border-amber-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#FF9933] block uppercase tracking-wider">
                    🎖️ Special Concessions
                  </span>
                  <span className="text-xs font-bold text-slate-800">
                    Available for Girls & Defense Wards
                  </span>
                </div>
                <a
                  href="#discounts"
                  className="px-3.5 py-1.5 rounded-lg bg-[#0F172A] hover:bg-slate-800 text-white font-bold text-xs transition-colors shrink-0"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Required Trust Badges Grid (Clean Light Themed) */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {/* Badge 1: 11+ Years Legacy (Est. 2015) */}
            <div className="bg-white border border-slate-200 hover:border-[#FF9933] transition-colors p-4 sm:p-5 rounded-2xl flex items-center gap-3.5 shadow-sm">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-2xl shadow-sm">
                🇮🇳
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-heading text-[#0F172A]">
                  11+ Years
                </div>
                <div className="text-xs text-slate-600 font-semibold">
                  Legacy (Est. 2015)
                </div>
              </div>
            </div>

            {/* Badge 2: Taught by Ex-Assistant Commandant & Ex-SI */}
            <div className="bg-white border border-slate-200 hover:border-[#138808] transition-colors p-4 sm:p-5 rounded-2xl flex items-center gap-3.5 shadow-sm">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-2xl shadow-sm">
                🎖️
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-heading text-[#0F172A]">
                  Ex-Officer
                </div>
                <div className="text-xs text-slate-600 font-semibold">
                  Asst. Commandant & SI
                </div>
              </div>
            </div>

            {/* Badge 3: 20,000+ Students Mentored */}
            <div className="bg-white border border-slate-200 hover:border-blue-400 transition-colors p-4 sm:p-5 rounded-2xl flex items-center gap-3.5 shadow-sm">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-2xl shadow-sm">
                🎓
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-heading text-[#0F172A]">
                  20,000+
                </div>
                <div className="text-xs text-slate-600 font-semibold">
                  Students Mentored
                </div>
              </div>
            </div>

            {/* Badge 4: 1.7K+ Subscribers on 'Selection Runway' */}
            <a
              href={INSTITUTE_DETAILS.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-slate-200 hover:border-red-400 transition-colors p-4 sm:p-5 rounded-2xl flex items-center gap-3.5 shadow-sm group"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-2xl shadow-sm group-hover:scale-105 transition-transform">
                ▶️
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-heading text-[#0F172A] group-hover:text-red-600 transition-colors">
                  1.7K+ Subs
                </div>
                <div className="text-xs text-slate-600 font-semibold flex items-center gap-1">
                  <span>'Selection Runway'</span>
                  <ArrowRight className="w-3 h-3 text-red-600" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
