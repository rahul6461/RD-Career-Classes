import React, { useState } from 'react';
import { 
  MessageCircle, 
  Check, 
  Clock, 
  Tag, 
  Sparkles, 
  ArrowRight,
  BookOpen,
  Calendar,
  Percent,
  Shield,
  Award
} from 'lucide-react';
import { COURSES, INSTITUTE_DETAILS } from '../data/mockData';
import { CourseItem } from '../types';

interface CoursesSectionProps {
  onSelectCourseForInquiry: (courseTitle: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onSelectCourseForInquiry }) => {
  const [filter, setFilter] = useState<'ALL' | 'DEFENSE' | 'SSC' | 'POLICE'>('ALL');

  const filteredCourses = COURSES.filter(c => {
    if (filter === 'ALL') return true;
    if (filter === 'DEFENSE') return c.id.includes('airforce') || c.id.includes('navy');
    if (filter === 'SSC') return c.id.includes('ssc');
    if (filter === 'POLICE') return c.id.includes('police');
    return true;
  });

  return (
    <section id="courses" className="py-16 sm:py-24 bg-[#F8FAFC] text-[#0F172A] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-[#138808] text-xs font-bold uppercase tracking-wider mb-3">
            <Tag className="w-3.5 h-3.5" />
            <span>Target Batches 2025 – 2026</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight">
            Courses Offered & Interactive WhatsApp Booking
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Taught directly by <strong>Mr. Ravi Pachori Sir</strong>. High-octane classroom training in Agra, formula shortcuts, daily DPPs, full-length test series, and special discounts for defense wards & girl candidates.
          </p>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setFilter('ALL')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === 'ALL'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Batches ({COURSES.length})
            </button>
            <button
              onClick={() => setFilter('DEFENSE')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === 'DEFENSE'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Airforce & Navy
            </button>
            <button
              onClick={() => setFilter('SSC')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === 'SSC'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              SSC Masterclass
            </button>
            <button
              onClick={() => setFilter('POLICE')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === 'POLICE'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              UP Police & SI Special
            </button>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-8">
          {filteredCourses.map((course) => {
            const waUrl = `https://wa.me/919808124401?text=${encodeURIComponent(course.whatsAppText)}`;

            return (
              <div
                key={course.id}
                className="relative rounded-3xl bg-white border-2 border-slate-200 hover:border-[#FF9933] transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl overflow-hidden group"
              >
                {/* Top Tricolor Accent Strip */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />

                <div className="p-6 sm:p-7 space-y-5 flex-1">
                  {/* Badge & Duration */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-300">
                      {course.badge}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1 font-semibold">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {course.duration}
                    </span>
                  </div>

                  {/* Course Title */}
                  <div>
                    <h3 className="text-2xl font-extrabold font-heading text-[#0F172A] group-hover:text-[#FF9933] transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      {course.batchType}
                    </p>
                  </div>

                  {/* Pricing Box with Special Discount Badge */}
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2">
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-2.5">
                        <span className="text-3xl font-extrabold font-heading text-[#0F172A]">
                          {course.discountedFee}
                        </span>
                        <span className="text-sm line-through text-slate-400 font-medium">
                          {course.originalFee}
                        </span>
                      </div>
                      <span className="text-[10px] uppercase font-bold text-slate-700 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-xs">
                        Agra Offline Batch
                      </span>
                    </div>

                    {/* Prominent Girls & Defense Personnel Concession Tag */}
                    <div className="flex items-center gap-1.5 text-xs text-[#138808] font-bold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                      <Percent className="w-3.5 h-3.5 text-[#138808] shrink-0" />
                      <span>Special Discounts for Girls & Army Wards</span>
                    </div>
                  </div>

                  {/* Syllabus / Subject Coverage Breakdown */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#FF9933]" />
                      Syllabus Breakdown:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {course.subjects.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-start gap-2 text-xs text-slate-700 bg-[#F8FAFC] p-2.5 rounded-xl border border-slate-200/80 font-medium"
                        >
                          <Check className="w-4 h-4 text-[#138808] shrink-0 mt-0.5" />
                          <span>{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#FF9933]" />
                      Batch Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
                      {course.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF9933] shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: WhatsApp Booking and Demo Trigger */}
                <div className="p-6 pt-0 space-y-2.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {/* Primary Interactive WhatsApp Button with EXACT requested format */}
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20be5a] text-slate-950 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Book on WhatsApp</span>
                    </a>

                    {/* Free Demo Class Trigger */}
                    <button
                      onClick={() => onSelectCourseForInquiry(course.title)}
                      className="py-3.5 px-4 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                    >
                      <span>Reserve Demo Seat</span>
                      <ArrowRight className="w-4 h-4 text-[#FF9933]" />
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-500 font-medium pt-1">
                    Direct confirmation to <strong className="text-[#0F172A]">+91 9808124401</strong> • Instant response from Ravi Sir
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Visit Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border-2 border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-13 h-13 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-2xl shrink-0 text-[#FF9933]">
              📍
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#0F172A] font-heading">
                Prefer to Visit Our Agra Classroom in Person?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                <strong>R.D. Career Classes:</strong> Diamond City, Gwalior Rd, Nagla Padma, Agra, Rohta, U.P. 282009. Meet Ravi Pachori Sir & take 2 days of free demo classes!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:9808124401"
              className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-200 transition-colors"
            >
              Call 9808124401
            </a>
            <a
              href="https://wa.me/919808124401?text=Hi%20Ravi%20Sir,%20I%20want%20to%20visit%20R.D.%20Career%20Classes%20Agra%20center%20at%20Diamond%20City,%20Gwalior%20Rd."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20be5a] text-slate-950 font-extrabold text-xs flex items-center gap-1.5 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Get Location Map</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
