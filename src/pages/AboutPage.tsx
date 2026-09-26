import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, MapPin, Building, Globe, Mail, Phone, Users, CheckCircle } from 'lucide-react';
import { COMPANY_DETAILS, BUSINESS_PILLARS, getWhatsAppUrl } from '../data/companyData';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header Banner */}
      <section className="bg-zinc-950 text-white py-16 sm:py-20 relative border-b border-amber-500/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-zinc-950 to-zinc-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-400">
            Heritage & Enterprise Profile
          </span>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
            About BARSHIP FRAGRANCES
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
            Baron Perfumes &bull; Hyderabad, Telangana, India
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest font-cinzel text-amber-700">
                Foundational Principles
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-zinc-950">
                Pioneering Attar, Perfume & Bespoke Manufacturing
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                <strong>BARSHIP FRAGRANCES</strong> operates as an integrated perfumery house in Hyderabad, Telangana, serving both individual connoisseurs and commercial business enterprises. Operating alongside our associated brands <strong>Baron Perfumes</strong> and <strong>Zohran Perfumes</strong>, our enterprise bridges centuries-old oriental distillation traditions with modern cosmetic science.
              </p>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Our operations encompass six foundational verticals: <strong>Retail, Wholesale, Imports, Exports, Distribution, and Turnkey Custom Manufacturing</strong>. From sourcing rare agarwood harvests across Southeast Asia to custom tooling luxury crystal perfume flacons, we maintain uncompromising quality standards across every tier of our supply chain.
              </p>

              {/* Factual Information Callout */}
              <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-300 space-y-2">
                <h4 className="font-cinzel text-xs uppercase font-bold text-amber-900 tracking-wider">
                  Corporate Registration & Tax Details
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-700">
                  <div>
                    <span className="text-zinc-500 block">Registered Entity:</span>
                    <strong className="text-zinc-950">BARSHIP / BARON PERFUMES</strong>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">GSTIN:</span>
                    <strong className="font-mono text-zinc-950">{COMPANY_DETAILS.gstin}</strong>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">Headquarters:</span>
                    <span className="text-zinc-950">Hyderabad, Telangana (India)</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">International Desk:</span>
                    <span className="text-zinc-950">Dubai, United Arab Emirates</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-amber-300 aspect-[4/3]">
                <img
                  src="/images/wholesale_distribution.jpg"
                  alt="BARSHIP Fragrances Corporate Headquarters and Showroom"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Business Areas Checklist */}
      <section className="py-16 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-700">
              Core Operations
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-zinc-950 mt-1">
              Our 8 Operational Business Areas
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600">
              Factual overview of the sectors BARSHIP manages domestically and internationally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "1. Retail", desc: "Showroom consultations, direct fragrance sampling, and retail sales of attars and luxury perfumes at our Hyderabad boutique." },
              { title: "2. Wholesale", desc: "Bulk fragrance oils, concentrates, pure distillates, and packaged stock for retailers and regional perfume merchants." },
              { title: "3. Import", desc: "Direct origin procurement of genuine agarwood chips, resins, and essences across 10+ producing nations." },
              { title: "4. Export", desc: "International air and sea freight distribution servicing Middle Eastern, European, and Asian fragrance markets." },
              { title: "5. Distribution", desc: "Organized wholesale distributor partnerships providing regional territorial sales and retailer replenishment." },
              { title: "6. Attar", desc: "Pure, certified single-origin Dehn Al Oudh and non-alcoholic concentrated perfume oils spanning Cambodian, Indian, Moroccan, and other varieties." },
              { title: "7. Perfume & Others", desc: "Handcrafted spray perfumes (Extrait & EDP), traditional bakhoor incense, ambient air sprays, and scented body creams." },
              { title: "8. Custom Manufacturing", desc: "Turnkey formulation, bespoke bottle engineering, rigid box packaging, and private label compounding." },
            ].map((area, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 border border-zinc-200/80 shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="font-cinzel text-sm font-bold text-zinc-950 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>{area.title}</span>
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Contact Persons (From Business Card) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-700">
              Management & Key Contacts
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-zinc-950 mt-1">
              The Leadership Team
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600">
              Direct contacts from the verified company registry and official business documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPANY_DETAILS.phones.slice(0, 3).map((person, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm text-center">
                <div className="w-14 h-14 rounded-full bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center mx-auto mb-4 font-cinzel font-bold text-lg">
                  {person.name.charAt(0)}
                </div>
                <h4 className="font-cinzel text-base font-bold text-zinc-950">{person.name}</h4>
                <p className="text-xs text-amber-700 font-medium mt-0.5">{person.role}</p>
                <div className="mt-4 pt-4 border-t border-zinc-100 space-y-2">
                  <a
                    href={`tel:${person.number.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-800 hover:text-amber-700"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>{person.number}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Sourcing & Quality Ethics */}
          <div className="mt-16 bg-zinc-900 text-white rounded-2xl p-8 sm:p-12 border border-amber-400/40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="font-cinzel text-xs uppercase tracking-widest text-amber-400 font-bold">
                  Authenticity Commitment
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold mt-2">
                  Ethical Sourcing & Analytical Purity
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mt-4">
                  Every batch of agarwood and natural perfume oil is procured through verified distillers and sustainable plantations compliant with international CITES forestry regulations. We subject our raw distillations to rigorous olfactory and safety evaluations before dispatch.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Link
                  to="/attar"
                  className="gold-shimmer-btn text-zinc-950 font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider text-center"
                >
                  Explore Attars & Perfumes
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs uppercase tracking-wider font-semibold text-center border border-zinc-700 transition-colors"
                >
                  Contact Management
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
