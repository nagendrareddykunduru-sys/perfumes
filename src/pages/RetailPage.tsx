import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, MapPin, Clock, Phone, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS, getWhatsAppUrl } from '../data/companyData';

export const RetailPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-zinc-950 text-white py-16 sm:py-24 relative border-b border-amber-500/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-800/25 via-zinc-950 to-zinc-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-400">
            Sensory Showroom Experience
          </span>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
            Retail Perfumery & Boutique
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
            Experience authentic OUD testing, artisanal attars, and luxury French spray perfumes in Hyderabad.
          </p>
        </div>
      </section>

      {/* Showroom Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest font-cinzel text-amber-700">
                Flagship Destination
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-zinc-950">
                Zohran Perfumes by BARSHIP Fragrances
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Located in the historic heart of Hyderabad at Prestige Complex, Etebar Chowk, our flagship retail showroom welcomes perfume lovers, collectors, and wedding shoppers. Discover pure concentrated attars applied with crystal wands, explore agarwood chips on traditional charcoal burners, and sample bespoke extrait de parfum creations.
              </p>

              <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-200 space-y-3">
                <h4 className="font-cinzel text-xs uppercase font-bold text-zinc-950 tracking-wider">
                  Store Location & Timings
                </h4>
                <div className="space-y-2 text-xs text-zinc-700">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>{COMPANY_DETAILS.locations.showroom.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Monday to Saturday: 10:30 AM – 9:30 PM (Sunday Showroom Open)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>In-Store Enquiries: {COMPANY_DETAILS.primaryPhone}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`tel:${COMPANY_DETAILS.primaryPhone.replace(/\s+/g, '')}`}
                  className="gold-shimmer-btn text-zinc-950 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Store Manager</span>
                </a>
                <a
                  href={getWhatsAppUrl("Retail Showroom Visit", "Retail")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded-xl text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  Plan Showroom Visit on WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-amber-300 shadow-xl aspect-[4/3] relative">
                <img
                  src="/images/wholesale_distribution.jpg"
                  alt="BARSHIP Retail Showroom Interior"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retail Services */}
      <section className="py-16 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-xs">
              <Sparkles className="w-8 h-8 text-amber-600 mb-3" />
              <h3 className="font-cinzel text-sm font-bold text-zinc-950 mb-2">Personal Scent Consultations</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Consult with our experienced evaluators to find a fragrance accord that complements your body chemistry and personal style.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-xs">
              <ShoppingBag className="w-8 h-8 text-amber-600 mb-3" />
              <h3 className="font-cinzel text-sm font-bold text-zinc-950 mb-2">Wedding & VIP Gift Hampers</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Select custom velvet presentation boxes, crystal attar vials, and gold bakhoor burners customized for weddings and royal celebrations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-xs">
              <CheckCircle2 className="w-8 h-8 text-amber-600 mb-3" />
              <h3 className="font-cinzel text-sm font-bold text-zinc-950 mb-2">Direct Testing & Sampling</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Compare notes across 10 authentic OUD origins on skin and test strips before making your selection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
