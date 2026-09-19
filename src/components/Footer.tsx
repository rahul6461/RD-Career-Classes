import React from 'react';
import { 
  Shield, 
  Phone, 
  MapPin, 
  Youtube, 
  MessageCircle, 
  Award, 
  Clock, 
  Heart,
  Percent,
  CheckCircle2
} from 'lucide-react';
import { INSTITUTE_DETAILS } from '../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F172A] text-white relative overflow-hidden border-t-4 border-[#FF9933]">
      {/* Indian Tricolor Stripe Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Founder */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white border-2 border-[#FF9933] flex items-center justify-center text-[#FF9933] font-bold shadow-md">
                <Shield className="w-7 h-7 text-[#FF9933] fill-amber-100" />
              </div>
              <div>
                <span className="text-xl font-extrabold font-heading tracking-tight text-white block">
                  R.D. CAREER <span className="text-[#FF9933]">CLASSES</span>
                </span>
                <span className="text-xs text-emerald-400 font-semibold">
                  Estd. 2015 • Agra, Uttar Pradesh
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Agra's premier competitive exam academy mentored by <strong>Mr. Ravi Pachori Sir</strong> (Ex-Assistant Commandant, Ex-SI). 11+ years of academic rigor preparing youth for Indian Armed Forces, Staff Selection Commission, and State Police.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={INSTITUTE_DETAILS.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 flex items-center justify-center text-red-400 transition-colors"
                title="Selection Runway YouTube Channel"
              >
                <Youtube className="w-5 h-5 fill-current" />
              </a>
              <a
                href="https://wa.me/919808124401"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] transition-colors"
                title="WhatsApp Ravi Sir"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </a>
              <a
                href="tel:9808124401"
                className="w-10 h-10 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 flex items-center justify-center text-amber-300 transition-colors"
                title="Call 9808124401"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#FF9933] font-heading">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Ravi Sir</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">Courses & Fees</a>
              </li>
              <li>
                <a href="#discounts" className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors flex items-center gap-1">
                  <Percent className="w-3 h-3" /> Special Discounts
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">Facilities</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact & Map</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Founder Credentials & Batches */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#FF9933] font-heading">
              Ravi Sir Credentials
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <span>🎖️</span>
                <span>Ex-Assistant Commandant</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🚔</span>
                <span>Ex-Sub Inspector (SI)</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🏅</span>
                <span>SSC CPO Qualified</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🏆</span>
                <span>SSC CGL Qualified</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📐</span>
                <span>Agra's No. 1 Math Specialist</span>
              </li>
              <li className="flex items-center gap-2 text-red-400 font-semibold pt-1">
                <span>▶️</span>
                <span>Selection Runway (1.7K+ Subs)</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Address & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#FF9933] font-heading">
              Agra Classroom Center
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF9933] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  {INSTITUTE_DETAILS.address}
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:9808124401" className="text-white hover:text-emerald-400 font-bold">
                  +91 9808124401
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Mon – Sat: 7:30 AM – 8:30 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/919808124401?text=Hi%20Ravi%20Sir,%20I%20want%20to%20inquire%20about%20admissions%20at%20R.D.%20Career%20Classes%20Agra."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20be5a] text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 shadow"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp (+91 9808124401)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Indian Flag Motto */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} R.D. Career Classes, Agra. All rights reserved. Founded by Ravi Pachori Sir.
          </div>
          <div className="flex items-center gap-2 font-semibold text-slate-300">
            <span>🇮🇳 Jai Hind • Jai Jawan • Jai Bharat</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
