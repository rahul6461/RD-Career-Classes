import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle, 
  Youtube, 
  MessageCircle, 
  Compass, 
  Trophy, 
  Star, 
  ArrowRight,
  Sparkles,
  BookOpen,
  Zap,
  Target,
  Shield
} from 'lucide-react';
import { FOUNDER_QUALIFICATIONS, INSTITUTE_DETAILS } from '../data/mockData';

interface FounderSectionProps {
  onOpenInquiry: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white text-[#0F172A] relative overflow-hidden border-b border-slate-200">
      {/* Subtle tricolor background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/40 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-[#FF9933]" />
            <span>Chief Educator & Visionary Mentor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight">
            About Mr. Ravi Pachori Sir
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            Agra's No. 1 Mathematics & Competitive Exam Specialist. Learn from a mentor who has personally cracked India’s premier defense and civil services examinations and worn the uniform.
          </p>
        </div>

        {/* Main Founder Card Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Visual Profile, Badges, Direct Connect */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl bg-[#F8FAFC] border-2 border-slate-200 p-6 sm:p-8 shadow-lg">
              {/* Top Indian Tricolor Strip */}
              <div className="absolute top-0 inset-x-0 h-1.5 rounded-t-3xl bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />

              <div className="flex flex-col items-center text-center space-y-4 pt-2">
                {/* Officer Emblem & Portrait Badge */}
                <div className="relative">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-white border-2 border-[#FF9933] p-1.5 shadow-md">
                    <div className="w-full h-full rounded-2xl bg-gradient-to-b from-amber-50 to-orange-50/40 flex flex-col items-center justify-center text-center p-3 relative overflow-hidden border border-amber-200">
                      <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-amber-300 flex items-center justify-center text-3xl mb-1.5">
                        🎖️
                      </div>
                      <span className="text-sm sm:text-base font-extrabold text-[#0F172A] font-heading tracking-wide">
                        MR. RAVI PACHORI SIR
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-[#138808] font-bold uppercase">
                        Ex-Assistant Commandant
                      </span>
                    </div>
                  </div>

                  {/* 11+ Years Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-[#FF9933] text-slate-950 px-3 py-1.5 rounded-xl shadow-md font-extrabold text-xs flex items-center gap-1 border border-amber-400">
                    <Star className="w-3.5 h-3.5 fill-current text-slate-950" />
                    <span>11+ Years Legacy</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-heading text-[#0F172A]">
                    Mr. Ravi Pachori Sir
                  </h3>
                  <p className="text-sm text-[#FF9933] font-bold">
                    Founder, R.D. Career Classes & Host of 'Selection Runway'
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    Diamond City, Gwalior Rd, Agra • Mentoring Since 2015
                  </p>
                </div>

                {/* Social Proof: YouTube Selection Runway */}
                <div className="w-full pt-1">
                  <a
                    href={INSTITUTE_DETAILS.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white hover:bg-red-50/50 border border-slate-200 hover:border-red-200 transition-all shadow-sm group"
                  >
                    <div className="flex items-center gap-3 text-left">
                      <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-sm">
                        <Youtube className="w-5 h-5 fill-current" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0F172A] group-hover:text-red-700">
                          Selection Runway
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Official Channel • Free Speed Tricks
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-extrabold text-red-700 bg-red-50 border border-red-200 px-2.5 py-1 rounded-lg">
                        1.7K+ Subs
                      </span>
                    </div>
                  </a>
                </div>

                {/* Direct Action */}
                <div className="w-full pt-1">
                  <a
                    href="https://wa.me/919808124401?text=Hi%20Ravi%20Sir,%20I%20want%20to%20discuss%20my%20preparation%20strategy%20with%20you%20directly."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20be5a] text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Talk Directly to Ravi Sir (+91 9808124401)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Rank-holding Achievements & Methodology */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF9933] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#FF9933]" />
                Personal Rank-Holding Achievements
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0F172A] mt-1">
                Cracked India’s Toughest Officer & Police Exams
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                When you prepare for defense and police examinations, learning from standard textbook teachers is not enough. You need competitive acumen from someone who has cleared the rigorous written, interview, and physical stages himself.
              </p>
            </div>

            {/* Qualifications Grid */}
            <div className="grid sm:grid-cols-2 gap-3.5">
              {FOUNDER_QUALIFICATIONS.map((q, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#FF9933] transition-colors flex items-start gap-3.5 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 text-[#FF9933] mt-0.5 shadow-xs">
                    {idx === 0 && <ShieldCheck className="w-5 h-5 text-[#FF9933]" />}
                    {idx === 1 && <Award className="w-5 h-5 text-[#138808]" />}
                    {idx === 2 && <Trophy className="w-5 h-5 text-amber-600" />}
                    {idx === 3 && <Star className="w-5 h-5 text-blue-600" />}
                    {idx === 4 && <Zap className="w-5 h-5 text-emerald-600" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A] font-heading">
                      {q.title}
                    </h4>
                    <p className="text-xs text-[#FF9933] font-semibold">
                      {q.dept}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5 font-medium">
                      {q.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Short-Trick Methodology & Dedication to Affordable Education */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50/70 via-white to-emerald-50/70 border border-amber-200">
                <div className="flex items-center gap-2 mb-1.5">
                  <Zap className="w-4 h-4 text-[#FF9933]" />
                  <h4 className="text-sm font-bold text-[#0F172A]">
                    Signature Short-Trick Methodology in Mathematics
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Ravi Sir pioneered specialized short-trick algorithms for Arithmetic, Algebra, Trigonometry, and Reasoning that eliminate long calculation steps. His students routinely complete 25 competitive math questions in <strong>under 15 minutes</strong> with 98%+ accuracy.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <BookOpen className="w-4 h-4 text-[#138808]" />
                  <h4 className="text-sm font-bold text-[#0F172A]">
                    Unwavering Dedication to Affordable Education in Agra
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Unlike commercial centers in Agra charging ₹20,000–₹35,000, Ravi Sir ensures that every comprehensive batch remains under ₹5,000 with flexible installment plans so that children from rural, farming, and defense families can wear the uniform without economic burdens.
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenInquiry}
                className="px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white font-bold text-sm flex items-center gap-2 shadow-sm transition-colors"
              >
                <span>Attend Free Demo by Ravi Sir</span>
                <ArrowRight className="w-4 h-4 text-[#FF9933]" />
              </button>
              <a
                href={INSTITUTE_DETAILS.youtubeFeaturedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-300 flex items-center gap-2 transition-colors shadow-xs"
              >
                <Youtube className="w-4 h-4 text-red-600" />
                <span>Watch Free Lectures on YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
