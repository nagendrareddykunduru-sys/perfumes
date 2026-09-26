import React from 'react';
import { WholesaleSection } from '../components/home/WholesaleSection';
import { ShieldCheck, Truck, Scale, Boxes, FileText, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS, getWhatsAppUrl } from '../data/companyData';

export const WholesalePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-zinc-950 text-white py-16 sm:py-24 relative border-b border-amber-500/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-800/25 via-zinc-950 to-zinc-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-400">
            B2B & Bulk Fragrance Supply
          </span>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
            Wholesale Fragrance Solutions
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
            Supplying Bulk OUD Oils, Fragrance Concentrates, Attars, Bakhoor, and Retail-Ready Inventories Across India & the Middle East.
          </p>
        </div>
      </section>

      {/* Main Wholesale Component */}
      <WholesaleSection />

      {/* Commercial Terms & Tiered Pricing Explanation */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-700">
              Commercial Advantages
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-zinc-950 mt-1">
              Why Wholesalers & Retailers Partner with BARSHIP
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600">
              Clear, dependable commercial framework built for long-term supply relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-base font-bold text-zinc-950">Volume-Tiered Pricing</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Aggressive volume discounting structured across entry-level trial consignments up to full metric-scale wholesale procurements.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1 pt-2">
                <li>&bull; Tier 1: 500g – 2kg (Trial batches)</li>
                <li>&bull; Tier 2: 5kg – 25kg (Standard B2B)</li>
                <li>&bull; Tier 3: 50kg+ (Contract enterprise)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-base font-bold text-zinc-950">Batch Chemistry Consistency</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Every dispatch matches your approved reference scent profile. Gas Chromatography and sensory verification ensure zero drift between batches.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1 pt-2">
                <li>&bull; Gas Chromatography Certificates</li>
                <li>&bull; Material Safety Data Sheets (MSDS)</li>
                <li>&bull; Strict IFRA compliance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-base font-bold text-zinc-950">Reliable Logistics Hub</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Strategically positioned in Hyderabad with fast pan-India air cargo links, alongside an international operations desk in Dubai for UAE & GCC customs clearing.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1 pt-2">
                <li>&bull; Hyderabad Domestic Air & Road Cargo</li>
                <li>&bull; UAE Regional Operations: +971 52 722 6677</li>
                <li>&bull; Insured transit packaging</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
