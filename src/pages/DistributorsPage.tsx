import React from 'react';
import { Truck, Award, ShieldCheck, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { ContactForm } from '../components/common/ContactForm';
import { COMPANY_DETAILS, getWhatsAppUrl } from '../data/companyData';

export const DistributorsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-zinc-950 text-white py-16 sm:py-24 relative border-b border-amber-500/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-800/25 via-zinc-950 to-zinc-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-400">
            Commercial Partnerships
          </span>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
            Distributors & Channel Partners
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
            Partner with BARSHIP Fragrances for Exclusive Regional and Territorial Distribution Rights.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-700">
              Channel Advantages
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-zinc-950 mt-1">
              Why Become an Authorized BARSHIP Distributor?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600">
              We empower our retail distribution partners with high margin structures and brand prestige.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
              <TrendingUp className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="font-cinzel text-base font-bold text-zinc-950 mb-2">High Profit Margins</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Attractive distributor pricing matrices engineered to ensure generous ROI on turnover and volume milestones.
              </p>
            </div>

            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
              <Award className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="font-cinzel text-base font-bold text-zinc-950 mb-2">Territorial Exclusivity</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Defined territorial boundaries to safeguard distributor sales rights and prevent channel conflict.
              </p>
            </div>

            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
              <Truck className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="font-cinzel text-base font-bold text-zinc-950 mb-2">Priority Stock Allocation</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Guaranteed inventory reservation and rapid replenishment from our central Hyderabad warehouse.
              </p>
            </div>

            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
              <ShieldCheck className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="font-cinzel text-base font-bold text-zinc-950 mb-2">Marketing & POS Support</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Branded luxury counter testers, sample discovery vials, acrylic displays, and marketing collateral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Distributor Application Form */}
      <section className="py-16 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            initialCategory="Distributors"
            title="Distributor Application & Inquiries"
            subtitle="Tell us about your distribution territory, retail reach, and commercial experience."
          />
        </div>
      </section>
    </div>
  );
};
