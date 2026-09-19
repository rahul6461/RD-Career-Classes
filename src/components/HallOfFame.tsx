import React from 'react';
import { Trophy, Star, ShieldCheck, Quote, CheckCircle2, MessageCircle } from 'lucide-react';
import { STUDENT_TESTIMONIALS, FAQS } from '../data/mockData';

interface HallOfFameProps {
  onOpenInquiry: () => void;
}

export const HallOfFame: React.FC<HallOfFameProps> = ({ onOpenInquiry }) => {
  return (
    <section id="hall-of-fame" className="py-16 sm:py-24 bg-[#F8FAFC] text-[#0F172A] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-[#FF9933]" />
            <span>Hall of Fame & Selections</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight">
            Our Selected Officers & Uniform Achievers
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            Real students from Agra and nearby districts who transformed their lives and secured their dream uniform under Ravi Pachori Sir's mentorship.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {STUDENT_TESTIMONIALS.map((student, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border-2 border-slate-200 hover:border-[#FF9933] p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md relative overflow-hidden transition-all group"
            >
              {/* Quote Icon watermark */}
              <div className="absolute top-4 right-4 text-slate-100 pointer-events-none">
                <Quote className="w-16 h-16 opacity-40" />
              </div>

              <div className="space-y-4 relative">
                {/* Header with Candidate badge */}
                <div className="flex items-center gap-3.5">
                  <div className={`w-12 h-12 rounded-2xl ${student.badgeColor} flex items-center justify-center text-white font-extrabold text-lg shadow-sm`}>
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-[#0F172A] group-hover:text-[#FF9933] transition-colors">
                      {student.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold text-[#138808]">
                        {student.exam}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-500 font-medium">{student.location}</span>
                    </div>
                  </div>
                </div>

                {/* Rank / Post Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF9933]" />
                  <span>{student.rankOrPost} ({student.year})</span>
                </div>

                {/* Quote Content */}
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed pt-1 font-medium">
                  "{student.quote}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span className="flex items-center gap-1.5 text-[#138808] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Selection
                </span>
                <span className="text-slate-400 font-mono">Agra Center Alumnus</span>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Section */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0F172A]">
              Frequently Asked Questions by Parents & Students
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
              Have doubts regarding batch timings, fee concessions, or hostel assistance in Agra?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {FAQS.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 space-y-2 hover:border-[#FF9933] transition-colors shadow-xs"
              >
                <h4 className="text-sm sm:text-base font-bold text-[#0F172A] font-heading">
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Still have questions? Call Ravi Sir directly at{' '}
              <a href="tel:9808124401" className="text-[#FF9933] font-bold underline hover:text-amber-600">
                +91 9808124401
              </a>{' '}
              or{' '}
              <button
                onClick={onOpenInquiry}
                className="text-[#138808] font-bold underline hover:text-emerald-700"
              >
                Book a Free Demo Class
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
