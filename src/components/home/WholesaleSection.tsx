import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Truck, Scale, ArrowRight } from 'lucide-react';
import { ContactForm } from '../common/ContactForm';
import { COMPANY_DETAILS } from '../../data/companyData';

export const WholesaleSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Information & Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-[1px] w-6 bg-amber-500" />
              <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-700">
                B2B Bulk Supply
              </span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
              Wholesale Fragrance Solutions
            </h2>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              BARSHIP Fragrances provides comprehensive fragrance products and solutions for wholesale and enterprise business requirements. We support fragrance retailers, indie brands, luxury salons, hospitality establishments, and regional distributors with authentic oils, custom formulations, and dependable volume replenishments.
            </p>

            {/* Wholesale Image Showcase */}
            <div className="rounded-xl overflow-hidden border border-amber-300 shadow-md aspect-[16/9] relative">
              <img 
                src="/images/wholesale_distribution.jpg" 
                alt="BARSHIP Wholesale Fragrance Solutions and Distribution"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <p className="text-white text-xs font-medium">
                  Direct Hyderabad Showroom & Warehousing Hub &bull; Export Dispatch to UAE & Worldwide
                </p>
              </div>
            </div>

            {/* Wholesale Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80">
                <div className="flex items-center gap-2 text-zinc-900 font-bold text-xs uppercase font-cinzel mb-1">
                  <Scale className="w-4 h-4 text-amber-600" />
                  <span>Flexible Tiers</span>
                </div>
                <p className="text-xs text-zinc-500">
                  Bulk order quantities from 100g, 500g, to multi-kilogram containers with tiered margin advantages.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80">
                <div className="flex items-center gap-2 text-zinc-900 font-bold text-xs uppercase font-cinzel mb-1">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>Purity Certification</span>
                </div>
                <p className="text-xs text-zinc-500">
                  Batch consistency guaranteed with Gas Chromatography purity records and IFRA conformity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80">
                <div className="flex items-center gap-2 text-zinc-900 font-bold text-xs uppercase font-cinzel mb-1">
                  <Truck className="w-4 h-4 text-amber-600" />
                  <span>Fast Logistics</span>
                </div>
                <p className="text-xs text-zinc-500">
                  Pan-India rapid transit and direct air cargo dispatches to Gulf countries via our UAE desk.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80">
                <div className="flex items-center gap-2 text-zinc-900 font-bold text-xs uppercase font-cinzel mb-1">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>Private Label Ready</span>
                </div>
                <p className="text-xs text-zinc-500">
                  Option to receive unbranded bulk concentrate or completely packaged retail units ready for sale.
                </p>
              </div>
            </div>

            {/* Direct Contact Notice */}
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-300 text-xs text-amber-900">
              <p className="font-semibold mb-1">Wholesale Enquiry Hotline:</p>
              <p className="text-zinc-700">
                Talk directly to MM Hussain Al Najmi at <a href={`tel:${COMPANY_DETAILS.primaryPhone.replace(/\s+/g, '')}`} className="font-bold text-zinc-950 underline">{COMPANY_DETAILS.primaryPhone}</a> or email <span className="font-bold text-zinc-950">{COMPANY_DETAILS.primaryEmail}</span>.
              </p>
            </div>
          </div>

          {/* Right Column: Wholesale Enquiry Form */}
          <div className="lg:col-span-6">
            <ContactForm
              initialCategory="Wholesale"
              title="Request Wholesale Quote"
              subtitle="Specify your volume, desired product category, or custom bulk specifications."
            />
          </div>

        </div>

      </div>
    </section>
  );
};
