import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Send, CheckCircle2, Shield, Sparkles } from 'lucide-react';
import { COURSES, INSTITUTE_DETAILS } from '../data/mockData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultCourse = 'Airforce X & Y Group / Agniveer'
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState(defaultCourse);
  const [preferredTiming, setPreferredTiming] = useState('Morning Batch (8:00 AM - 11:30 AM)');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultCourse) {
      setCourse(defaultCourse);
    }
  }, [defaultCourse]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      return;
    }

    const msg = `Hello Ravi Sir,%0A%0AAn inquiry has been submitted for *R.D. Career Classes*:%0A%0A👤 *Name:* ${encodeURIComponent(
      name
    )}%0A📞 *Phone:* ${encodeURIComponent(phone)}%0A🎯 *Target Exam:* ${encodeURIComponent(
      course
    )}%0A⏰ *Preferred Timing:* ${encodeURIComponent(
      preferredTiming
    )}%0A%0APlease share batch timings and demo class details.`;

    const targetUrl = `https://wa.me/919808124401?text=${msg}`;
    window.open(targetUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-white border-2 border-slate-200 shadow-2xl overflow-hidden text-[#0F172A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tricolor Top Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />

        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#FF9933] font-bold">
              <Shield className="w-6 h-6 text-[#FF9933]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold font-heading text-[#0F172A]">
                Book Free Demo Class
              </h3>
              <p className="text-xs text-[#138808] font-bold">
                R.D. Career Classes, Agra • Direct WhatsApp Inquiry
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 space-y-4">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#138808] border border-emerald-300 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold font-heading text-[#0F172A]">
                Inquiry Dispatched to WhatsApp!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xs mx-auto font-medium">
                WhatsApp is opening with Ravi Pachori Sir (+91 9808124401). If it did not open automatically, click the button below.
              </p>
              <div className="pt-2">
                <a
                  href={`https://wa.me/919808124401?text=Hi%20Ravi%20Sir,%20I%20am%20${encodeURIComponent(name)},%20inquiring%20about%20${encodeURIComponent(course)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-slate-950 font-extrabold text-xs shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Open WhatsApp Directly</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-600 font-medium">
                Fill the details below to receive batch timings, fee discounts, and 2-day free trial passes directly on WhatsApp from Ravi Sir.
              </p>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="modal-name">
                  Student Name *
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#FF9933] focus:outline-none placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="modal-phone">
                  WhatsApp Contact Number *
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  required
                  placeholder="e.g. 9808124401"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#FF9933] focus:outline-none placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="modal-course">
                  Target Exam Batch *
                </label>
                <select
                  id="modal-course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#FF9933] focus:outline-none"
                >
                  {COURSES.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title} ({c.discountedFee})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="modal-timing">
                  Preferred Batch Timing
                </label>
                <select
                  id="modal-timing"
                  value={preferredTiming}
                  onChange={(e) => setPreferredTiming(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#FF9933] focus:outline-none"
                >
                  <option value="Morning Batch (8:00 AM - 11:30 AM)">Morning Batch (8:00 AM - 11:30 AM)</option>
                  <option value="Afternoon Batch (12:00 PM - 3:30 PM)">Afternoon Batch (12:00 PM - 3:30 PM)</option>
                  <option value="Evening Batch (4:00 PM - 7:30 PM)">Evening Batch (4:00 PM - 7:30 PM)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20be5a] text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Reserve Demo Seat on WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500 font-medium">
                🔒 Your number is strictly confidential and used solely for admission communication by Ravi Sir.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
