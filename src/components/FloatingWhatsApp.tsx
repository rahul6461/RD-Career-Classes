import React, { useState } from 'react';
import { MessageCircle, X, Send, PhoneCall, Sparkles, Shield, Percent } from 'lucide-react';
import { INSTITUTE_DETAILS } from '../data/mockData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('Airforce X & Y Group / Agniveer');
  const [category, setCategory] = useState<'General' | 'Girl Student' | 'Army Ward'>('General');
  const [timing, setTiming] = useState('Morning Batch (8:00 AM)');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      return;
    }

    const msg = `Hello Ravi Sir,%0A%0AAn inquiry has been submitted for *R.D. Career Classes* (Agra):%0A%0A👤 *Name:* ${encodeURIComponent(
      name
    )}%0A📞 *Phone:* ${encodeURIComponent(phone)}%0A🎯 *Target Exam:* ${encodeURIComponent(
      course
    )}%0A🎖️ *Category:* ${encodeURIComponent(
      category
    )}%0A⏰ *Timing:* ${encodeURIComponent(timing)}%0A%0APlease share batch schedule and concession details.`;

    window.open(`https://wa.me/919808124401?text=${msg}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Quick WhatsApp Popover Drawer */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-3xl bg-white border-2 border-slate-200 shadow-2xl overflow-hidden text-[#0F172A] animate-in slide-in-from-bottom-5 duration-200">
          {/* Top header with tricolor strip */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />
          <div className="p-4 bg-[#F8FAFC] border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-slate-950 flex items-center justify-center font-bold shadow-sm">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white"></span>
              </div>
              <div>
                <h4 className="text-sm font-extrabold font-heading text-[#0F172A]">
                  Mr. Ravi Pachori Sir
                </h4>
                <p className="text-[11px] text-[#138808] font-bold">
                  Online • R.D. Career Classes Desk
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <form onSubmit={handleQuickSubmit} className="p-4 space-y-3 text-xs">
            <div className="bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-200 text-slate-700">
              <span className="font-bold text-[#138808] block mb-0.5">
                Jai Hind! 🇮🇳 Admissions Helpline
              </span>
              Ask Ravi Sir directly about batch seats, special girl/army concessions, or 2-day free demo passes.
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Amit Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-[#FF9933] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                WhatsApp Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 9808124401"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-[#FF9933] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                Target Exam Batch
              </label>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:border-[#FF9933] focus:outline-none"
              >
                <option value="Airforce X & Y Group / Agniveer">Airforce X & Y Group (₹4,999)</option>
                <option value="SSC GD / CGL / CHSL / CPO">SSC Complete Masterclass (₹3,999)</option>
                <option value="Navy SSR / AA / MR">Navy SSR / AA (₹4,999)</option>
                <option value="UP Police SI / Constable">UP Police SI / Constable (₹3,499)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                Concession Category
              </label>
              <div className="grid grid-cols-3 gap-1.5 text-[11px]">
                <button
                  type="button"
                  onClick={() => setCategory('General')}
                  className={`py-1.5 rounded-lg border font-bold ${
                    category === 'General' ? 'bg-[#0F172A] text-white border-[#0F172A]' : 'bg-slate-50 text-slate-700 border-slate-300'
                  }`}
                >
                  General
                </button>
                <button
                  type="button"
                  onClick={() => setCategory('Girl Student')}
                  className={`py-1.5 rounded-lg border font-bold ${
                    category === 'Girl Student' ? 'bg-rose-600 text-white border-rose-600' : 'bg-slate-50 text-slate-700 border-slate-300'
                  }`}
                >
                  👧 Girl
                </button>
                <button
                  type="button"
                  onClick={() => setCategory('Army Ward')}
                  className={`py-1.5 rounded-lg border font-bold ${
                    category === 'Army Ward' ? 'bg-[#138808] text-white border-[#138808]' : 'bg-slate-50 text-slate-700 border-slate-300'
                  }`}
                >
                  🎖️ Army
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-3 rounded-xl bg-[#25D366] hover:bg-[#20be5a] text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all mt-1"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Start WhatsApp Chat (+91 9808124401)</span>
            </button>
          </form>
        </div>
      )}

      {/* Main Sticky Floating Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <span className="hidden sm:inline-block bg-white text-[#0F172A] border-2 border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-lg">
            Chat with Ravi Sir 👋
          </span>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 shadow-2xl transition-all transform hover:scale-105 active:scale-95 animate-pulse-wa cursor-pointer"
          aria-label="Direct WhatsApp Inquiry with Ravi Sir"
          title="Direct WhatsApp: 9808124401"
        >
          <MessageCircle className="w-8 h-8 fill-current" />
          
          {/* Glowing dot */}
          <span className="absolute top-1 right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white"></span>
          </span>
        </button>
      </div>
    </div>
  );
};
