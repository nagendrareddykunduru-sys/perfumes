import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, FlaskConical, Award, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ContactForm } from '../components/common/ContactForm';
import { QuoteEstimator } from '../components/manufacturing/QuoteEstimator';
import { COMPANY_DETAILS, getWhatsAppUrl } from '../data/companyData';

export const CustomPerfumesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-zinc-950 text-white py-16 sm:py-24 relative border-b border-amber-500/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-800/25 via-zinc-950 to-zinc-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-400">
            Haute Parfumerie & Bespoke Formulation
          </span>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
            Custom Perfumes Creation
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
            Bespoke Fragrance Development &bull; Private Label Lines &bull; Turnkey Olfactory Architecture in Hyderabad
          </p>
        </div>
      </section>

      {/* Narrative & Visual */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest font-cinzel text-amber-700">
                Tailored Olfactory Artistry
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-zinc-950">
                Your Signature Scent, Perfectly Engineered
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Whether launching a niche luxury perfume brand, crafting a signature ambient aroma for a 5-star hotel, or developing exclusive corporate and royal wedding favors, BARSHIP provides comprehensive olfactory design services.
              </p>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Our master perfumers balance top notes (sparkling bergamot, saffron, cardamom), rich heart notes (Taif rose, ambergris, orris, jasmine), and long-lasting base notes (pure aged oud, Mysore sandalwood, white musk, civet).
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-zinc-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Formulation Ownership:</strong> Full confidentiality and intellectual rights on exclusive formulas.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Concentration Freedom:</strong> Extrait de Parfum (30%+), Eau de Parfum (20-25%), or 100% pure attar oil.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Flexible Batch Sizes:</strong> Prototype sampling from 100 units up to commercial industrial runs.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-amber-300 shadow-xl aspect-[4/3] relative">
                <img
                  src="/images/custom_manufacturing.jpg"
                  alt="Custom perfume bottle and private collection box"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Project Estimator */}
      <section className="py-16 bg-white border-t border-zinc-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteEstimator />
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            initialCategory="Manufacturing"
            initialProduct="Custom Perfumes Formulation"
            title="Start Your Bespoke Perfume Brief"
            subtitle="Outline your scent profile, desired bottles, and target units."
          />
        </div>
      </section>
    </div>
  );
};
