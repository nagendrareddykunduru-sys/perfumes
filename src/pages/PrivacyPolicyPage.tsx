import React from 'react';
import { COMPANY_DETAILS } from '../data/companyData';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-zinc-950 mb-4">
          Privacy Policy
        </h1>
        <p className="text-xs text-zinc-500 mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} &bull; BARSHIP Fragrances
        </p>

        <div className="prose prose-zinc max-w-none text-xs sm:text-sm text-zinc-700 space-y-6 leading-relaxed">
          <section>
            <h2 className="font-cinzel text-lg font-bold text-zinc-950">1. Overview</h2>
            <p>
              BARSHIP FRAGRANCES (Baron Perfumes / Zohran Perfumes, Hyderabad, Telangana) respects your privacy regarding any information collected across our website ({COMPANY_DETAILS.website}) and operational communications.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-zinc-950">2. Information Collection & Usage</h2>
            <p>
              We collect information provided directly through business inquiry forms, wholesale request submissions, email correspondences, and WhatsApp communications. This data (including name, company entity, phone number, email address, and order requirements) is used solely to evaluate fragrance quotes, prepare manufacturing specifications, and coordinate commercial deliveries.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-zinc-950">3. Non-Disclosure & B2B Confidentiality</h2>
            <p>
              For clients engaging in custom formulation and contract manufacturing, all custom scent accords, packaging blueprints, and company details are safeguarded under strict trade confidentiality protocols. We never sell, lease, or monetize your corporate contact details to external third parties.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-zinc-950">4. Contacting Data Officer</h2>
            <p>
              For any inquiries regarding personal or company information held by our enterprise, please contact our administrative desk at <strong className="text-zinc-950">{COMPANY_DETAILS.primaryEmail}</strong> or our corporate office at {COMPANY_DETAILS.locations.corporate.address}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
