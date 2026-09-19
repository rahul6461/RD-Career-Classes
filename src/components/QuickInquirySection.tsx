import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, Shield, Sparkles, MapPin, Phone, Clock, Percent } from 'lucide-react';
import { INSTITUTE_DETAILS } from '../data/mockData';

export const QuickInquirySection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('Airforce X & Y Group / Agniveer');
  const [category, setCategory] = useState<'General' | 'Girl Student' | 'Defense Personnel Ward'>('General');
  const [timing, setTiming] = useState('Morning Batch (8:00 AM - 11:30 AM)');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      return;
    }

    // Direct WhatsApp message formatting
    const msg = `Hello Ravi Sir,%0A%0AI want to inquire about admissions at *R.D. Career Classes* (Agra):%0A%0A👤 *Name:* ${encodeURIComponent(
      name
    )}%0A📞 *Phone:* ${encodeURIComponent(phone)}%0A🎯 *Target Course:* ${encodeURIComponent(
      course
    )}%0A🎖️ *Special Category:* ${encodeURIComponent(
      category
    )}%0A⏰ *Preferred Time:* ${encodeURIComponent(
      timing
    )}%0A%0APlease send batch schedule and concession details.`;

    const waLink = `https://wa.me/919808124401?text=${msg}`;
    window.open(waLink, '_blank');
    setIsSuccess(true);
  };

  return (
    <section id="inquiry" className="py-16 sm:py-20 bg-[#F8FAFC] text-[#0F172A] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border-2 border-slate-200 p-6 sm:p-10 lg:p-12 shadow-lg relative overflow-hidden">
          {/* Tricolor Accent Top */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#138808] border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant Admission Desk</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0F172A] tracking-tight leading-tight">
                Ready to Wear The Uniform? Reserve Your 2-Day Free Trial!
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                Take the decisive step toward Indian Armed Forces, SSC, or Police services. Fill out this quick inquiry form and Mr. Ravi Pachori Sir's desk will connect directly on WhatsApp.
              </p>

              {/* Direct Info List */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#FF9933] shrink-0 font-bold">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-medium">Helpline / WhatsApp</span>
                    <strong className="text-[#0F172A]">+91 9808124401</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#138808] shrink-0 font-bold">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-medium">Agra Campus Location</span>
                    <span className="text-[#0F172A] font-semibold">
                      Diamond City, Gwalior Rd, Nagla Padma, Rohta, Agra 282009
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 font-bold">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-medium">Counseling Desk Hours</span>
                    <span className="text-[#0F172A] font-semibold">Monday to Saturday: 7:30 AM – 8:30 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-[#F8FAFC] border-2 border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-[#0F172A]">
                      Quick Admission Form
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Direct notification sent to Ravi Sir's WhatsApp
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#138808] border border-emerald-200 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                </div>

                {isSuccess ? (
                  <div className="py-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#138808] border border-emerald-300 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-[#0F172A]">
                      Message Formatted for WhatsApp!
                    </h4>
                    <p className="text-xs text-slate-600">
                      Your inquiry has been opened on WhatsApp with Ravi Pachori Sir (+91 9808124401).
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="text-xs text-[#FF9933] underline font-bold mt-2"
                    >
                      Send another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="quick-name">
                        Student Full Name *
                      </label>
                      <input
                        id="quick-name"
                        type="text"
                        required
                        placeholder="e.g. Vikas Sharma"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:border-[#FF9933] focus:outline-none placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="quick-phone">
                        WhatsApp Contact Number *
                      </label>
                      <input
                        id="quick-phone"
                        type="tel"
                        required
                        placeholder="e.g. 9808124401"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:border-[#FF9933] focus:outline-none placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="quick-course">
                        Target Exam Batch *
                      </label>
                      <select
                        id="quick-course"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:border-[#FF9933] focus:outline-none"
                      >
                        <option value="Airforce X & Y Group / Agniveer">Airforce X & Y Group / Agniveer (₹4,999)</option>
                        <option value="SSC GD / CGL / CHSL / CPO Masterclass">SSC GD / CGL / CHSL / CPO (₹3,999)</option>
                        <option value="Navy SSR / AA / MR Foundation">Navy SSR / AA / MR Foundation (₹4,999)</option>
                        <option value="UP Police SI / Constable / UPSSSC PET">UP Police SI / Constable Special (₹3,499)</option>
                      </select>
                    </div>

                    {/* Special Category for Concessions */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Fee Concession Category
                      </label>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <button
                          type="button"
                          onClick={() => setCategory('General')}
                          className={`py-2 px-2 rounded-lg border text-center font-bold transition-all ${
                            category === 'General'
                              ? 'bg-[#0F172A] text-white border-[#0F172A]'
                              : 'bg-white text-slate-700 border-slate-300'
                          }`}
                        >
                          General
                        </button>
                        <button
                          type="button"
                          onClick={() => setCategory('Girl Student')}
                          className={`py-2 px-2 rounded-lg border text-center font-bold transition-all ${
                            category === 'Girl Student'
                              ? 'bg-rose-600 text-white border-rose-600'
                              : 'bg-white text-slate-700 border-slate-300'
                          }`}
                        >
                          👧 Girl Student
                        </button>
                        <button
                          type="button"
                          onClick={() => setCategory('Defense Personnel Ward')}
                          className={`py-2 px-2 rounded-lg border text-center font-bold transition-all ${
                            category === 'Defense Personnel Ward'
                              ? 'bg-[#138808] text-white border-[#138808]'
                              : 'bg-white text-slate-700 border-slate-300'
                          }`}
                        >
                          🎖️ Army Ward
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20be5a] text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 mt-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Submit & Inquire on WhatsApp</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
