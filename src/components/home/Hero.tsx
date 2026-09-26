import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, Award, Globe, PhoneCall } from 'lucide-react';
import { COMPANY_DETAILS } from '../../data/companyData';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:py-24 border-b border-zinc-100">
      {/* Subtle luxury background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-50/50 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Prestige Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50/80 border border-amber-300/80 text-amber-900 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-xs font-semibold uppercase tracking-widest font-cinzel">
                Baron Perfumes &bull; Hyderabad &bull; Since Legacy
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.1]">
                BARSHIP <span className="gold-gradient-text block sm:inline">FRAGRANCES</span>
              </h1>
              
              {/* Subheading */}
              <p className="font-cinzel text-sm sm:text-base md:text-lg font-semibold text-amber-700 tracking-wider">
                Retail & Wholesale | Imports | Exports | Distribution | Custom Manufacturing
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl font-sans font-normal">
              Premium fragrances, OUD, cosmetics and customized fragrance solutions for retail, wholesale and business requirements.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/products"
                className="gold-shimmer-btn text-zinc-950 font-bold px-8 py-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 border border-amber-400"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 text-zinc-950" />
              </Link>

              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider font-bold text-zinc-900 bg-white hover:bg-zinc-50 border-2 border-zinc-900 hover:border-amber-600 hover:text-amber-800 transition-all flex items-center justify-center gap-2"
              >
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-6 border-t border-zinc-200/80 grid grid-cols-3 gap-4 text-zinc-700">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-700 border border-amber-200 flex-shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-900">10+ Origins</p>
                  <p className="text-[11px] text-zinc-500">Pure Global OUD</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-700 border border-amber-200 flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-900">100% Purity</p>
                  <p className="text-[11px] text-zinc-500">Certified Distillates</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-700 border border-amber-200 flex-shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-900">UAE & Global</p>
                  <p className="text-[11px] text-zinc-500">Export Network</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Luxury Perfume Visual with Elegant Gold Accents */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Thin gold decorative framing */}
              <div className="absolute -inset-3 rounded-2xl border border-amber-300/70 -rotate-1 pointer-events-none transition-transform duration-500 hover:rotate-0" />
              <div className="absolute -inset-1 rounded-2xl border border-amber-400/40 rotate-1 pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-zinc-950 aspect-[4/3] sm:aspect-[1/1] border border-amber-400/50">
                <img
                  src="/images/hero_fragrance.jpg"
                  alt="BARSHIP Fragrances - Luxury Perfumery Collection"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Overlaid Gold Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-amber-300 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-amber-700">Flagship Boutique & Factory</p>
                    <p className="font-cinzel text-xs sm:text-sm font-bold text-zinc-900">Etebar Chowk & Himayath Nagar</p>
                  </div>
                  <a
                    href={`tel:${COMPANY_DETAILS.primaryPhone.replace(/\s+/g, '')}`}
                    className="p-2.5 bg-zinc-950 text-amber-400 hover:text-white rounded-lg transition-colors flex items-center justify-center"
                    aria-label="Direct Phone Call"
                  >
                    <PhoneCall className="w-4 h-4" />
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
