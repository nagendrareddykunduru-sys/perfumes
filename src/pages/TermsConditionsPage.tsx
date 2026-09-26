import React from 'react';
import { COMPANY_DETAILS } from '../data/companyData';

export const TermsConditionsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-zinc-950 mb-4">
          Terms & Conditions
        </h1>
        <p className="text-xs text-zinc-500 mb-8">
          Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} &bull; BARSHIP Fragrances
        </p>

        <div className="prose prose-zinc max-w-none text-xs sm:text-sm text-zinc-700 space-y-6 leading-relaxed">
          <section>
            <h2 className="font-cinzel text-lg font-bold text-zinc-950">1. Commercial Representation</h2>
            <p>
              BARSHIP FRAGRANCES (incorporating Baron Perfumes and Zohran Perfumes) operates under GSTIN: <strong className="font-mono text-zinc-950">{COMPANY_DETAILS.gstin}</strong> with registered corporate operations in Hyderabad, Telangana, India. All website information, catalogues, and specifications are intended for retail buyers, wholesale clients, and contract manufacturing partners.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-zinc-950">2. Pricing & Quotations</h2>
            <p>
              Given market fluctuations in raw agarwood harvests, natural essential oils, and foreign exchange rates, published product cards state "Request Price" / "Get Wholesale Quote". Written proforma invoices issued by our commercial desk supersede all preliminary online estimates.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-zinc-950">3. Custom Manufacturing & Tooling</h2>
            <p>
              Turnkey private label contracts require physical prototype sign-off (Sample Approval) prior to mass commercial compounding and automated filling. Tooling and mold engineering for custom glass flacons remain subject to standard engineering tolerances.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-zinc-950">4. Jurisdiction</h2>
            <p>
              All domestic commercial contracts and disputes are subject to the exclusive jurisdiction of the competent courts in Hyderabad, Telangana, India. International export transactions comply with Incoterms 2020 agreed upon in specific commercial invoices.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
