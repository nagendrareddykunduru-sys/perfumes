import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Box, FlaskConical, Layers, Gift, ShieldCheck } from 'lucide-react';
import { ProductCard } from '../components/products/ProductCard';
import { ProductModal } from '../components/products/ProductModal';
import { ContactForm } from '../components/common/ContactForm';
import { QuoteEstimator } from '../components/manufacturing/QuoteEstimator';
import { MANUFACTURING_SERVICES, MANUFACTURING_STEPS } from '../data/companyData';
import type { ProductItem } from '../data/companyData';

export const ManufacturingPage: React.FC = () => {
  const [modalProduct, setModalProduct] = useState<ProductItem | null>(null);
  const [enquiryProduct, setEnquiryProduct] = useState<ProductItem | null>(null);

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-zinc-950 text-white py-16 sm:py-24 relative border-b border-amber-500/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-800/25 via-zinc-950 to-zinc-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-400">
            Contract & Turnkey OEM / ODM
          </span>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
            Custom Fragrance Manufacturing
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
            From Olfactory Formulation to Bespoke Glass Flacons and Gold-Foil Rigid Packaging.
          </p>
        </div>
      </section>

      {/* Intro Overview */}
      <section className="py-16 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest font-cinzel text-amber-700">
                End-to-End Capabilities
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-zinc-950">
                Complete Concept-to-Shelf Production in Hyderabad
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                BARSHIP FRAGRANCES delivers integrated contract manufacturing for emerging perfume brands, hospitality corporations, retail department chains, and celebrity private labels. Our facilities coordinate scent formulation, bottle engineering, luxury packaging, and automated cleanroom bottling under one unified team.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2 text-xs text-zinc-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Custom Flacon molds, collars & magnetic zamac caps.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-zinc-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Rigid presentation boxes with hot foil stamping & velvet die-cuts.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-zinc-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Cold maceration, filtration & automated filling lines.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-zinc-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Regulatory safety sheets (MSDS) and batch quality assurance.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-amber-300 shadow-xl aspect-[4/3]">
                <img
                  src="/images/custom_manufacturing.jpg"
                  alt="Custom perfume bottle design and blueprint packaging"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Manufacturing Services Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-700">
              Manufacturing Services
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-zinc-950 mt-1">
              Our 5 Bespoke Services
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600">
              Click each service to review turnkey specifications, available volumes, or request an initial consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {MANUFACTURING_SERVICES.map((srv) => (
              <ProductCard
                key={srv.id}
                product={srv}
                onSelect={(p) => setModalProduct(p)}
                onEnquire={(p) => setEnquiryProduct(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7-Step Process Timeline */}
      <section className="py-20 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-400">
              Execution Roadmap
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white mt-1">
              The 7-Step Turnkey Process
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-300">
              From the initial creative brief to international delivery at your warehouse door.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {MANUFACTURING_STEPS.map((st) => (
              <div 
                key={st.step}
                className="bg-zinc-900 rounded-xl p-5 border border-zinc-800 hover:border-amber-400 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="font-cinzel text-2xl font-black text-amber-400 mb-2">
                    {st.step}
                  </div>
                  <h3 className="font-cinzel text-sm font-bold text-white mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => setEnquiryProduct(MANUFACTURING_SERVICES[0])}
              className="gold-shimmer-btn text-zinc-950 font-bold px-8 py-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider inline-flex items-center gap-2 shadow-2xl"
            >
              <span>Start Your Custom Project</span>
              <ArrowRight className="w-4 h-4 text-zinc-950" />
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Project Estimator Section */}
      <section className="py-20 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteEstimator />
        </div>
      </section>

      {/* Product Detail Modal */}
      {modalProduct && (
        <ProductModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
          onOpenEnquiryForm={(p) => setEnquiryProduct(p)}
        />
      )}

      {/* Enquiry Form Modal */}
      {enquiryProduct && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
          <div className="relative max-w-2xl w-full my-8">
            <button
              onClick={() => setEnquiryProduct(null)}
              className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full bg-white text-zinc-800 shadow-lg flex items-center justify-center font-bold text-sm hover:bg-zinc-100"
            >
              ✕
            </button>
            <ContactForm
              initialCategory="Manufacturing"
              initialProduct={enquiryProduct.name}
              title={`Manufacturing Enquiry: ${enquiryProduct.name}`}
              subtitle="Describe your target quantity, bottle preference, and launch timeline for a detailed project estimate."
            />
          </div>
        </div>
      )}
    </div>
  );
};
