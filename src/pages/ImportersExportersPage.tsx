import React from 'react';
import { Ship, Globe2, ShieldCheck, FileCheck, ArrowRight, Plane, MapPin } from 'lucide-react';
import { ContactForm } from '../components/common/ContactForm';
import { COMPANY_DETAILS, getWhatsAppUrl } from '../data/companyData';

export const ImportersExportersPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-zinc-950 text-white py-16 sm:py-24 relative border-b border-amber-500/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-800/25 via-zinc-950 to-zinc-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-400">
            Global Trade & Logistics
          </span>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
            Importers & Exporters
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
            Direct Origin Sourcing Across 10 Sovereign Nations &bull; UAE Regional Hub &bull; Worldwide Air Cargo
          </p>
        </div>
      </section>

      {/* 2 Symmetrical Pillars: Imports vs Exports */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Import Operations */}
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-amber-100 text-amber-800 border border-amber-300 flex items-center justify-center mb-6">
                  <Ship className="w-7 h-7" />
                </div>
                <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-700">
                  Origin Procurement
                </span>
                <h2 className="font-cinzel text-2xl font-bold text-zinc-950 mt-1 mb-4">
                  Import Operations & Direct Sourcing
                </h2>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  BARSHIP FRAGRANCES eliminates intermediary traders by establishing direct procurement agreements with master distillers and sustainable agarwood plantation owners across Cambodia, Indonesia, Vietnam, Malaysia, Morocco, Sri Lanka, and Thailand.
                </p>

                <h4 className="font-cinzel text-xs uppercase font-bold text-zinc-900 tracking-wider mb-3">
                  Import Sourcing Highlights:
                </h4>
                <ul className="space-y-2 text-xs text-zinc-600 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5" />
                    <span><strong>10+ Direct Sourcing Origins:</strong> Rigorous field inspections of raw resinous heartwood.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5" />
                    <span><strong>CITES Certification:</strong> Full international wildlife and forestry compliance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5" />
                    <span><strong>Analytical Purity:</strong> GC-MS verification on every imported barrel and tureen.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-zinc-200">
                <a
                  href={getWhatsAppUrl("Import Sourcing Desk", "Imports")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 hover:text-amber-600"
                >
                  <span>Connect with Import Desk</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Export Operations */}
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-amber-100 text-amber-800 border border-amber-300 flex items-center justify-center mb-6">
                  <Globe2 className="w-7 h-7" />
                </div>
                <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-700">
                  Global Distribution
                </span>
                <h2 className="font-cinzel text-2xl font-bold text-zinc-950 mt-1 mb-4">
                  Export Operations & UAE Hub
                </h2>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  We export fine Indian attars, finished luxury perfumes, pure OUD oils, and customized contract packaging to international fragrance houses across the UAE, Saudi Arabia, Qatar, Europe, and North America.
                </p>

                <h4 className="font-cinzel text-xs uppercase font-bold text-zinc-900 tracking-wider mb-3">
                  Export Capabilities:
                </h4>
                <ul className="space-y-2 text-xs text-zinc-600 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5" />
                    <span><strong>UAE Regional Operations Desk:</strong> Direct liaison in Dubai (+971 52 722 6677).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5" />
                    <span><strong>Air Freight & Customs:</strong> Rapid transit via Hyderabad Rajiv Gandhi International Airport.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5" />
                    <span><strong>International Compliance:</strong> Full MSDS, IFRA conformity, and commercial invoices.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-zinc-200">
                <a
                  href={`tel:+971527226677`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 hover:text-amber-600"
                >
                  <span>Call UAE Export Desk (+971 52 722 6677)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trade Enquiry Form */}
      <section className="py-16 bg-white border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            initialCategory="Imports & Exports"
            title="International Trade & Export RFQ"
            subtitle="Submit your export destination, container requirements, or sourcing queries."
          />
        </div>
      </section>
    </div>
  );
};
