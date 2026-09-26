import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, MapPin, Building, Globe, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../../data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual & Verification */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-amber-300 shadow-xl aspect-[4/3]">
              <img
                src="/images/luxury_cosmetics.jpg"
                alt="BARSHIP Fragrances Corporate Heritage and Fine Perfumery"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="font-cinzel text-amber-300 text-xs font-semibold uppercase tracking-wider">
                  Hyderabad &bull; UAE
                </span>
                <h4 className="font-cinzel text-xl font-bold text-white">
                  BARSHIP FRAGRANCES
                </h4>
                <p className="text-zinc-300 text-xs mt-1">
                  Baron Perfumes &bull; Zohran Perfumes
                </p>
              </div>
            </div>

            {/* Corporate Address Snapshot */}
            <div className="bg-zinc-50 p-5 rounded-xl border border-zinc-200 text-xs text-zinc-700 space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-950 block">Corporate Office:</strong>
                  <span>{COMPANY_DETAILS.locations.corporate.address}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-2 border-t border-zinc-200/80">
                <Building className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-950 block">Showroom:</strong>
                  <span>{COMPANY_DETAILS.locations.showroom.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Factual & Professional Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-[1px] w-6 bg-amber-500" />
              <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-700">
                About BARSHIP Fragrances
              </span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
              A Premier Perfumery & Fragrance Enterprise
            </h2>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Based in Hyderabad, Telangana, <strong>BARSHIP FRAGRANCES</strong> (associated with Baron Perfumes and Zohran Perfumes) operates across the complete value chain of fine perfumery. Our core operations span <strong>Retail, Wholesale, Imports, Exports, Distribution, and Turnkey Custom Manufacturing</strong>.
            </p>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              We specialize in pure concentrated <strong>Attar Oils</strong> (including single-origin Dehn Al Oudh across 10 sovereign origins), luxury fine <strong>Spray Perfumes</strong> (Extrait & Eau de Parfum), and ambient fragrance lines like <strong>Bakhoor, Home Fresheners & Curated Gift Sets</strong>, alongside turnkey private label contract manufacturing.
            </p>

            {/* Core Competencies Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2 text-xs text-zinc-700">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span><strong>Retail Boutique:</strong> Individual customer consultations & attar testing.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-zinc-700">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span><strong>Wholesale Supply:</strong> Reliable bulk liters and tiered business pricing.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-zinc-700">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span><strong>Direct Sourcing:</strong> Genuine agarwood from 10+ global origins.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-zinc-700">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span><strong>Contract Manufacturing:</strong> Formulation, bottle engineering & rigid box packaging.</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="gold-shimmer-btn text-zinc-950 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-sm"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4 text-zinc-950" />
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 border border-zinc-300 hover:border-amber-600 text-zinc-800 hover:text-amber-800 rounded-xl text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <span>View Locations & Team</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
