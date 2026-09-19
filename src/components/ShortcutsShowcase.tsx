import React, { useState } from 'react';
import { 
  Sparkles, 
  Zap, 
  Clock, 
  CheckCircle, 
  XCircle, 
  ArrowRight,
  Calculator,
  MessageCircle
} from 'lucide-react';
import { MATH_SHORTCUT_DEMOS, INSTITUTE_DETAILS } from '../data/mockData';

export const ShortcutsShowcase: React.FC = () => {
  const [selectedDemoId, setSelectedDemoId] = useState<string>(MATH_SHORTCUT_DEMOS[0].id);

  const activeDemo = MATH_SHORTCUT_DEMOS.find(d => d.id === selectedDemoId) || MATH_SHORTCUT_DEMOS[0];

  return (
    <section id="math-shortcuts" className="py-16 sm:py-20 bg-[#F8FAFC] text-[#0F172A] relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-[#FF9933]" />
            <span>Signature Pedagogy in Agra</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight">
            "Selection Runway Shortcuts" in Mathematics
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            See why Agra's defense aspirants choose Ravi Pachori Sir. Compare lengthy textbook calculations with Ravi Sir's rapid 5–10 second mental shortcuts.
          </p>

          {/* Shortcut Selector Tabs */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {MATH_SHORTCUT_DEMOS.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setSelectedDemoId(demo.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  selectedDemoId === demo.id
                    ? 'bg-[#0F172A] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Calculator className="w-3.5 h-3.5 text-[#FF9933]" />
                <span>{demo.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Board */}
        <div className="rounded-3xl bg-white border-2 border-slate-200 overflow-hidden shadow-lg">
          {/* Question Banner */}
          <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-extrabold text-[#FF9933] uppercase tracking-wider">
                Exam Problem ({activeDemo.category})
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] font-heading mt-1">
                "{activeDemo.problem}"
              </h3>
            </div>
            <div className="shrink-0 flex items-center gap-2">
              <span className="text-xs bg-white text-slate-700 font-bold px-3 py-1.5 rounded-full border border-slate-200 shadow-xs">
                Frequently Asked in SSC CGL / Airforce X
              </span>
            </div>
          </div>

          {/* 2-Column Comparison: Traditional vs Ravi Sir's Shortcut */}
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Left: Traditional Slow Method */}
            <div className="p-6 sm:p-7 space-y-4 bg-rose-50/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-rose-600" />
                  <h4 className="text-base font-bold text-slate-800 font-heading">
                    Traditional Textbook Method
                  </h4>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-100 px-3 py-1 rounded-full border border-rose-200 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {activeDemo.traditionalMethod.timeTaken}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-rose-200/80 space-y-2 font-mono text-xs text-slate-700 shadow-xs">
                {activeDemo.traditionalMethod.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-slate-400 select-none font-bold">{idx + 1}.</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-rose-700 font-medium italic">
                ⚠️ High risk of calculation errors under exam hall pressure; consumes precious minutes.
              </p>
            </div>

            {/* Right: Ravi Sir's "Selection Runway" Shortcut */}
            <div className="p-6 sm:p-7 space-y-4 bg-emerald-50/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#138808]" />
                  <h4 className="text-base font-bold text-[#0F172A] font-heading flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#FF9933]" /> Ravi Sir's Shortcut
                  </h4>
                </div>
                <span className="text-xs font-extrabold text-[#138808] bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" /> {activeDemo.raviSirShortcut.timeTaken}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white border-2 border-emerald-400 space-y-3 shadow-xs">
                <div className="text-sm font-bold text-[#0F172A] flex flex-wrap items-center gap-2">
                  <span className="text-[#FF9933] font-mono font-bold">Mental Shortcut:</span>
                  <span className="text-slate-800 font-extrabold">{activeDemo.raviSirShortcut.trick}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans bg-slate-50 p-3 rounded-xl border border-slate-200">
                  {activeDemo.raviSirShortcut.explanation}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-[#138808] font-bold pt-1">
                <span>⚡ Saves 80% Time in Actual Exam</span>
                <a
                  href={`https://wa.me/919808124401?text=Hi%20Ravi%20Sir,%20I%20loved%20the%20${encodeURIComponent(activeDemo.title)}%20trick!%20Want%20to%20learn%20more.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#0F172A] hover:text-[#FF9933] font-bold underline"
                >
                  Learn in Next Class <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
