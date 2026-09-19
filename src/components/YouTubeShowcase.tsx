import React from 'react';
import { 
  Youtube, 
  ExternalLink, 
  Play, 
  Users, 
  CheckCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { INSTITUTE_DETAILS } from '../data/mockData';

export const YouTubeShowcase: React.FC = () => {
  return (
    <section id="selection-runway" className="py-16 sm:py-20 bg-white text-[#0F172A] relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="rounded-3xl bg-[#F8FAFC] border-2 border-slate-200 p-6 sm:p-10 lg:p-12 shadow-lg relative overflow-hidden">
          {/* Subtle Tricolor border accent at top */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider border border-red-200">
                  <Youtube className="w-4 h-4 fill-current text-red-600" />
                  Free Video Learning Hub
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white text-slate-700 text-xs font-semibold border border-slate-200 shadow-xs">
                  <Users className="w-3.5 h-3.5 text-[#FF9933]" /> {INSTITUTE_DETAILS.youtubeSubscribers} Subscribers
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight">
                Learn Anytime on YouTube: <span className="text-red-600">"Selection Runway"</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                Want to sample Ravi Sir’s teaching style from home? Ravi Pachori Sir regularly uploads comprehensive arithmetic playlists, previous year paper discussions, and short trick marathons absolutely free on his channel!
              </p>

              {/* Channel Highlights List */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-semibold">
                  <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>5-Second Math Short Tricks</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-semibold">
                  <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>UPSI & SSC CGL TCS PYQ Series</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-semibold">
                  <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Airforce Group X/Y Marathon</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-semibold">
                  <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Physical Test Preparation Guidance</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={INSTITUTE_DETAILS.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base shadow-md shadow-red-600/20 transition-all transform hover:-translate-y-0.5"
                >
                  <Youtube className="w-5 h-5 fill-current" />
                  <span>Subscribe to Selection Runway (1.7K+)</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={INSTITUTE_DETAILS.youtubeFeaturedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-300 transition-colors shadow-xs"
                >
                  <Play className="w-4 h-4 text-red-600 fill-current" />
                  <span>Watch Free Demo Lectures</span>
                </a>
              </div>
            </div>

            {/* Right Visual: YouTube Channel Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white border-2 border-slate-200 p-5 sm:p-6 space-y-4 shadow-md">
                {/* Channel Header Banner */}
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-red-50 to-orange-50 p-4 border border-red-200">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white text-2xl font-bold border-2 border-white shadow-md shrink-0">
                      SR
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-base font-bold text-[#0F172A] font-heading">
                          Selection Runway
                        </h4>
                        <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                      </div>
                      <p className="text-xs text-slate-600 font-medium">
                        @selectionrunway • By Ravi Pachori Sir
                      </p>
                      <p className="text-[11px] text-[#FF9933] font-bold mt-0.5">
                        1.7K+ Active Aspirants Community
                      </p>
                    </div>
                  </div>
                </div>

                {/* Popular Playlist Previews */}
                <div className="space-y-2 text-xs">
                  <a
                    href={INSTITUTE_DETAILS.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-[#F8FAFC] hover:bg-red-50/50 border border-slate-200 flex items-center justify-between transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold">
                        ▶
                      </div>
                      <span className="font-bold text-[#0F172A] group-hover:text-red-700">
                        Ravi Sir Special Math Masterclass
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                      Free Access
                    </span>
                  </a>

                  <a
                    href={INSTITUTE_DETAILS.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-[#F8FAFC] hover:bg-red-50/50 border border-slate-200 flex items-center justify-between transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold">
                        ▶
                      </div>
                      <span className="font-bold text-[#0F172A] group-hover:text-red-700">
                        Airforce Group X / Y Technical Math
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                      Free Access
                    </span>
                  </a>

                  <a
                    href={INSTITUTE_DETAILS.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-[#F8FAFC] hover:bg-red-50/50 border border-slate-200 flex items-center justify-between transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold">
                        ▶
                      </div>
                      <span className="font-bold text-[#0F172A] group-hover:text-red-700">
                        UP Police SI & Constable Special Series
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                      Free Access
                    </span>
                  </a>
                </div>

                <div className="pt-1 text-center">
                  <a
                    href={INSTITUTE_DETAILS.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center justify-center gap-1"
                  >
                    <span>Visit YouTube Channel</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
