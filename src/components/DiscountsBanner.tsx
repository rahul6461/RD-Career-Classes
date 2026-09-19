import React from 'react';
import { Award, Heart, Shield, CheckCircle2, MessageCircle, Sparkles, UserCheck } from 'lucide-react';
import { INSTITUTE_DETAILS } from '../data/mockData';

interface DiscountsBannerProps {
  onOpenInquiry?: (course?: string) => void;
}

export const DiscountsBanner: React.FC<DiscountsBannerProps> = ({ onOpenInquiry }) => {
  return (
    <section id="discounts" className="py-12 sm:py-16 bg-[#F8FAFC] border-y border-slate-200 relative overflow-hidden">
      {/* Tricolor subtle top accent line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner Container */}
        <div className="rounded-3xl bg-white border-2 border-emerald-500/30 p-6 sm:p-10 lg:p-12 shadow-lg relative overflow-hidden">
          {/* Saffron & Emerald badge header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-8 border-b border-slate-100">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-[#138808] text-xs font-extrabold uppercase tracking-wide">
                <Sparkles className="w-4 h-4 text-[#138808]" />
                <span>Special Concession Policy 2025</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#0F172A] tracking-tight leading-snug">
                Honoring Our Soldiers & Empowering Women: <span className="text-[#FF9933]">Special Concessions</span> Available for Girl Students & Children of Defense Personnel!
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At <strong>R.D. Career Classes</strong>, Mr. Ravi Pachori Sir believes that financial constraints must never stand in the way of dedicated youth who aspire to serve the nation. We proudly provide special tuition fee waivers upon document verification.
              </p>
            </div>

            {/* Direct WhatsApp trigger */}
            <div className="shrink-0 flex flex-col items-start lg:items-end gap-2">
              <a
                href="https://wa.me/919808124401?text=Hi%20Ravi%20Sir,%20I%20want%20to%20check%20my%20eligibility%20for%20Girl%20Student%20/%20Army%20Ward%20concession%20at%20R.D.%20Career%20Classes."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20be5a] text-slate-950 font-extrabold text-sm shadow-md shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Claim Discount on WhatsApp</span>
              </a>
              <span className="text-xs text-slate-500 font-medium">
                Instant confirmation from Ravi Sir (+91 9808124401)
              </span>
            </div>
          </div>

          {/* Two Specific Concession Cards */}
          <div className="grid md:grid-cols-2 gap-6 pt-8">
            {/* Card 1: Girl Students */}
            <div className="rounded-2xl bg-gradient-to-br from-rose-50/50 via-white to-orange-50/30 border border-rose-200/80 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold shrink-0 border border-rose-200">
                  <span className="text-2xl">👧</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[11px] font-bold">
                      Women in Uniform
                    </span>
                    <span className="text-xs text-slate-500 font-medium">Beti Bachao, Beti Padhao</span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0F172A]">
                    Special Scholarship for Girl Students
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Exclusive tuition fee reduction across Airforce, UP Police SI / Constable, and SSC GD batches to foster higher female participation in armed and paramilitary forces.
                  </p>
                  <ul className="space-y-1.5 pt-2 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#138808] shrink-0" />
                      <span>Dedicated female mentor guidance for physical sprint and high jump</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#138808] shrink-0" />
                      <span>Safe, disciplined campus environment with CCTV surveillance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#138808] shrink-0" />
                      <span>Special installment payment support for rural candidates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2: Children of Army & Defense Personnel */}
            <div className="rounded-2xl bg-gradient-to-br from-emerald-50/50 via-white to-blue-50/30 border border-emerald-200/80 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0 border border-emerald-200">
                  <span className="text-2xl">🎖️</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#138808] text-[11px] font-bold">
                      Veer Parivar Honor
                    </span>
                    <span className="text-xs text-slate-500 font-medium">Jai Jawan, Jai Hind</span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0F172A]">
                    Special Concession for Children of Army & Defense Personnel
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Honoring the selfless service of our soldiers. Wards of Indian Army, Navy, Air Force, CAPF (CRPF, BSF, CISF, ITBP) & State Police enjoy special admission waivers.
                  </p>
                  <ul className="space-y-1.5 pt-2 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#138808] shrink-0" />
                      <span>Valid upon showing Service ID Card or Discharge Book copy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#138808] shrink-0" />
                      <span>Free comprehensive DPP sets, formula sheets & mock test series</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#138808] shrink-0" />
                      <span>1-on-1 officer mentorship by Ex-Assistant Commandant Ravi Sir</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
