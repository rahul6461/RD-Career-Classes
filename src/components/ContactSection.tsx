import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Navigation, 
  ExternalLink, 
  Copy, 
  Check, 
  Bus, 
  Car, 
  Compass, 
  ShieldCheck 
} from 'lucide-react';
import { INSTITUTE_DETAILS } from '../data/mockData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const fullAddress = INSTITUTE_DETAILS.address;
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Diamond City, Gwalior Road, Nagla Padma, Agra, Rohta, Uttar Pradesh 282009'
  )}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white text-[#0F172A] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#FF9933]" />
            <span>Agra Classroom Center & Direct Helpline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight">
            Visit Our Agra Campus & Connect
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            Located conveniently on Gwalior Road, Agra. Walk in for counseling, inspect classroom batches, or meet Mr. Ravi Pachori Sir in person.
          </p>
        </div>

        {/* Contact Grid: Left details, Right Interactive Map */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address, Call, WhatsApp, Timings */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="rounded-3xl bg-[#F8FAFC] border-2 border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
              {/* Official Address Card */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF9933] flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#FF9933]" />
                    Official Physical Address
                  </span>
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-[#0F172A] bg-white border border-slate-200 px-2.5 py-1 rounded-lg shadow-2xs transition-colors"
                    title="Copy full address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#138808]" />
                        <span className="text-[#138808]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A] font-heading">
                    R.D. Career Classes
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {fullAddress}
                  </p>
                  <p className="text-[11px] text-slate-500 font-semibold pt-1">
                    Landmark: Rohta / Nagla Padma stretch, Gwalior Road Highway, Agra
                  </p>
                </div>
              </div>

              {/* Direct Helpline & WhatsApp Links */}
              <div className="space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
                  Direct Admission & Counseling Desks
                </span>

                <div className="grid sm:grid-cols-2 gap-3">
                  {/* Phone Call */}
                  <a
                    href="tel:9808124401"
                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#FF9933] transition-colors flex items-center gap-3 shadow-xs group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#FF9933] flex items-center justify-center font-bold shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 font-medium block">Phone Call</span>
                      <strong className="text-sm font-bold text-[#0F172A] group-hover:text-[#FF9933]">
                        9808124401
                      </strong>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919808124401?text=Hi%20Ravi%20Sir,%20I%20want%20to%20visit%20R.D.%20Career%20Classes%20Agra%20center%20at%20Diamond%20City,%20Gwalior%20Rd."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#138808] transition-colors flex items-center gap-3 shadow-xs group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#138808] flex items-center justify-center font-bold shrink-0">
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 font-medium block">WhatsApp Chat</span>
                      <strong className="text-sm font-bold text-[#138808]">
                        Instant Reply
                      </strong>
                    </div>
                  </a>
                </div>
              </div>

              {/* Working Hours & Batch Timings */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0F172A]">
                  <Clock className="w-4 h-4 text-[#FF9933]" />
                  <span>Center Working Hours:</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
                  <span>Monday – Saturday (Classes & Counseling)</span>
                  <strong className="text-[#0F172A]">07:30 AM – 08:30 PM</strong>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
                  <span>Sunday (Mock Test & Doubt Marathons)</span>
                  <strong className="text-[#138808]">08:00 AM – 02:00 PM</strong>
                </div>
              </div>

              {/* Get Directions Button */}
              <div>
                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-[#0F172A] hover:bg-slate-800 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <Navigation className="w-5 h-5 text-[#FF9933]" />
                  <span>Get Directions / Open Google Maps</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map Showcase Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="rounded-3xl bg-white border-2 border-slate-200 p-6 sm:p-7 shadow-sm flex flex-col justify-between h-full space-y-6">
              {/* Map Card Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-[#0F172A] font-heading">
                    Agra Center Location & Transit Route
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Diamond City, Gwalior Road, Nagla Padma, Rohta, Agra, UP 282009
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#138808] border border-emerald-200 text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Campus
                </span>
              </div>

              {/* Embedded Google Maps View or Interactive High-Fidelity Location Viewer */}
              <div className="relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden border-2 border-slate-200 shadow-inner bg-slate-100">
                <iframe
                  title="R.D. Career Classes Agra Location Map"
                  src="https://maps.google.com/maps?q=Diamond%20City,%20Gwalior%20Rd,%20Nagla%20Padma,%20Agra,%20Rohta,%20Uttar%20Pradesh%20282009&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Map Pin Callout Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-slate-200 flex items-center gap-2 text-xs font-bold text-[#0F172A]">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>R.D. Career Classes (Diamond City)</span>
                </div>
              </div>

              {/* Commute & Transit Assistance */}
              <div className="grid sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center gap-3 text-xs text-slate-700 font-medium">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#FF9933] flex items-center justify-center shrink-0">
                    <Bus className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#0F172A] block font-bold">By Auto & Bus:</strong>
                    Direct city autos available from Agra Cantt & Bhagwan Talkies to Rohta / Nagla Padma.
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center gap-3 text-xs text-slate-700 font-medium">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#138808] flex items-center justify-center shrink-0">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#0F172A] block font-bold">Ample Vehicle Parking:</strong>
                    Safe two-wheeler and bicycle parking space inside the Diamond City campus.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
