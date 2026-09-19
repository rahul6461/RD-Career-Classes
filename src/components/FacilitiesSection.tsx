import React from 'react';
import { 
  Shield, 
  Sparkles, 
  FileText, 
  Activity, 
  Tv, 
  CheckCircle,
  MessageCircle,
  BookOpen,
  Clock,
  Dumbbell,
  Target,
  UserCheck,
  HeartHandshake
} from 'lucide-react';
import { INSTITUTE_DETAILS } from '../data/mockData';

export const FacilitiesSection: React.FC = () => {
  const facilitiesList = [
    {
      id: 'study-material',
      icon: <BookOpen className="w-6 h-6 text-[#FF9933]" />,
      emoji: '📚',
      title: 'Complete Printed Study Material & Formula Sheets',
      subtitle: 'Comprehensive Module Books & Shortcuts',
      description: 'Exclusive, chapter-wise printed theory notes, solved previous 10-year exam papers, and Ravi Sir’s signature Math Short-Trick Formula Booklet provided to every student.'
    },
    {
      id: 'omr-testing',
      icon: <Clock className="w-6 h-6 text-[#138808]" />,
      emoji: '⏱️',
      title: 'Speed & Accuracy Testing on OMR Sheets',
      subtitle: 'Real Exam Hall Simulation',
      description: 'Regular time-bound tests with standardized OMR sheets and negative marking algorithms to eliminate exam anxiety and maximize question completion speed.'
    },
    {
      id: 'physical-fitness',
      icon: <Dumbbell className="w-6 h-6 text-blue-600" />,
      emoji: '🏋️',
      title: 'Physical Fitness Mentorship for Defense & Police',
      subtitle: 'PST / PET Ground Training Guidelines',
      description: 'Direct guidance for 1.6km running, high jump, long jump, and chest measurement requirements from Ex-Assistant Commandant & Ex-SI Ravi Pachori Sir.'
    },
    {
      id: 'dpp-mock-tests',
      icon: <Target className="w-6 h-6 text-amber-600" />,
      emoji: '🎯',
      title: 'Daily Practice Problem (DPP) & Full Mock Tests',
      subtitle: 'Consistent Daily Practice Routine',
      description: 'Daily 25-question DPP sheets for homework along with comprehensive All-India pattern weekend mock tests analyzed question-by-question.'
    },
    {
      id: 'doubt-resolution',
      icon: <UserCheck className="w-6 h-6 text-indigo-600" />,
      emoji: '💬',
      title: '1-on-1 Doubt Resolution with Ravi Sir',
      subtitle: 'No Question Left Unanswered',
      description: 'Dedicated post-class doubt sessions where students sit directly with Ravi Sir to dissect weak concepts, arithmetic roadblocks, and personal exam fears.'
    },
    {
      id: 'concessions',
      icon: <HeartHandshake className="w-6 h-6 text-[#138808]" />,
      emoji: '🎖️',
      title: 'Special Concessions for Girls & Army Wards',
      subtitle: 'Affordable Education Commitment',
      description: 'Significant fee waivers for daughters aspiring for uniform services and children of Indian Armed Forces / Police personnel to honor national service.'
    }
  ];

  return (
    <section id="facilities" className="py-16 sm:py-24 bg-white text-[#0F172A] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5 text-[#FF9933]" />
            <span>Why Choose R.D. Career Classes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight">
            Facilities & Competitive Advantage
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            Everything an aspirant needs to crack defense, police, and staff selection examinations in their very first attempt in Agra.
          </p>
        </div>

        {/* 6 Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {facilitiesList.map((facility, idx) => (
            <div
              key={facility.id}
              className="rounded-3xl bg-white border-2 border-slate-200 hover:border-[#FF9933] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg group"
            >
              <div className="space-y-4">
                {/* Icon Box */}
                <div className="w-13 h-13 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform shadow-xs">
                  {facility.emoji}
                </div>

                <div>
                  <h3 className="text-lg font-bold font-heading text-[#0F172A] group-hover:text-[#FF9933] transition-colors leading-snug">
                    {facility.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#138808] mt-1">
                    {facility.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 text-[#138808] font-bold">
                  <CheckCircle className="w-3.5 h-3.5" /> Included in all Batches
                </span>
                <span className="font-mono text-[11px] text-slate-400 font-semibold">
                  0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Affirmation Banner */}
        <div className="mt-14 rounded-3xl p-6 sm:p-8 bg-[#F8FAFC] border-2 border-slate-200 text-center max-w-4xl mx-auto space-y-4 shadow-sm">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#138808] border border-emerald-200 text-xs font-bold">
            <span>🇮🇳 The Officer Mindset</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold font-heading text-[#0F172A]">
            "We Don't Just Teach For Written Exams, We Build Officers."
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            From initial mathematical concept mastery to physical ground test stamina and interview confidence, Ravi Pachori Sir mentors each student personally with military discipline.
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
            <a
              href="https://wa.me/919808124401?text=Hi%20Ravi%20Sir,%20I%20want%20to%20know%20more%20about%20the%20facilities%20and%20tests%20at%20R.D.%20Career%20Classes."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20be5a] text-slate-950 font-extrabold text-sm shadow-md shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Inquire on WhatsApp (+91 9808124401)</span>
            </a>
            <a
              href="tel:9808124401"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-300 transition-colors shadow-xs"
            >
              <span>Call Agra Campus Desk</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
