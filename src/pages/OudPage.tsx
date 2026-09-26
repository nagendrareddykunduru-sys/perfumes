import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Check, ArrowRight, Globe, Layers, Award } from 'lucide-react';
import { ProductCard } from '../components/products/ProductCard';
import { ProductModal } from '../components/products/ProductModal';
import { ContactForm } from '../components/common/ContactForm';
import { OUD_PRODUCTS, getWhatsAppUrl } from '../data/companyData';
import type { ProductItem } from '../data/companyData';

export const OudPage: React.FC = () => {
  const [modalProduct, setModalProduct] = useState<ProductItem | null>(null);
  const [enquiryProduct, setEnquiryProduct] = useState<ProductItem | null>(null);
  const [profileFilter, setProfileFilter] = useState<'ALL' | 'Sweet & Honeyed' | 'Smoky & Deep' | 'Heritage Leathery' | 'Fresh & Coniferous'>('ALL');

  const filteredOud = OUD_PRODUCTS.filter(item => {
    if (profileFilter === 'ALL') return true;
    if (profileFilter === 'Sweet & Honeyed') {
      return ['oud-cambodia', 'oud-thailand', 'oud-philippines'].includes(item.id);
    }
    if (profileFilter === 'Smoky & Deep') {
      return ['oud-indonesian', 'oud-malaysian', 'oud-moroccan'].includes(item.id);
    }
    if (profileFilter === 'Heritage Leathery') {
      return ['oud-indian'].includes(item.id);
    }
    if (profileFilter === 'Fresh & Coniferous') {
      return ['oud-bhutan', 'oud-vietnamese', 'oud-srilankan'].includes(item.id);
    }
    return true;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-zinc-950 text-white py-16 sm:py-24 relative border-b border-amber-500/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-800/25 via-zinc-950 to-zinc-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-400">
            Heritage Distillations
          </span>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
            The Pure OUD Collection
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
            10 Sovereign Origins &bull; Artisanal Hydro-Distillations &bull; Wild Agarwood Chips &bull; Wholesale & Retail
          </p>
        </div>
      </section>

      {/* Intro Overview & Origin Map Highlights */}
      <section className="py-16 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest font-cinzel text-amber-700">
                Ethical Sourcing & Distinction
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-zinc-950">
                Directly Sourced Across 10 Agarwood Regions
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                BARSHIP FRAGRANCES procures genuine agarwood (Aquilaria) and hydro-distilled Dehn Al Oudh directly from veteran distillers across Southeast Asia, the Indian subcontinent, and North Africa. Each terroir yields a signature aromatic fingerprint—ranging from sweet Cambodian dried fruit to deep Assam leather and ethereal Vietnamese incense smoke.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white rounded-lg border border-zinc-200 text-xs">
                  <strong className="text-zinc-900 block font-cinzel">100% Pure</strong>
                  <span className="text-zinc-500">Unadulterated resin</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-zinc-200 text-xs">
                  <strong className="text-zinc-900 block font-cinzel">CITES Compliant</strong>
                  <span className="text-zinc-500">Legal forestry documentation</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-zinc-200 text-xs">
                  <strong className="text-zinc-900 block font-cinzel">Retail & Wholesale</strong>
                  <span className="text-zinc-500">Tolas, Liters, & Bulk Chips</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-amber-300 shadow-xl aspect-[4/3] relative">
                <img
                  src="/images/luxury_oud.jpg"
                  alt="Pure Agarwood chips and crystal dropper of OUD oil"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 OUD Origins Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-700">
              Complete Global Lineup
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-zinc-950 mt-1">
              All 10 OUD Origin Varieties
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600">
              Click any variety to view olfactory characteristics, available bottle options, or request direct wholesale and retail price quotes.
            </p>
          </div>

          {/* Scent Profile Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {(['ALL', 'Sweet & Honeyed', 'Smoky & Deep', 'Heritage Leathery', 'Fresh & Coniferous'] as const).map(p => (
              <button
                key={p}
                onClick={() => setProfileFilter(p)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition-all cursor-pointer ${
                  profileFilter === p
                    ? 'bg-zinc-950 text-amber-300 shadow-sm'
                    : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-200'
                }`}
              >
                {p === 'ALL' ? 'All 10 Origins' : p}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {filteredOud.map((oud) => (
              <ProductCard
                key={oud.id}
                product={oud}
                onSelect={(p) => setModalProduct(p)}
                onEnquire={(p) => setEnquiryProduct(p)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* B2B Agarwood Bulk Consultation Banner */}
      <section className="py-16 bg-zinc-950 text-white border-t border-amber-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <h3 className="font-cinzel text-2xl font-bold text-white">
                Looking for Bulk Agarwood Consignments or Liters?
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm">
                We supply international fragrance houses, perfumers, and retail shops with sealed kilogram containers and analytical documentation.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl("Bulk OUD Consignment", "Wholesale OUD")}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-shimmer-btn text-zinc-950 font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg"
              >
                Inquire for Bulk OUD on WhatsApp
              </a>
              <button
                onClick={() => setEnquiryProduct(OUD_PRODUCTS[3])} // Default Indian OUD
                className="px-6 py-3.5 border border-zinc-700 hover:border-amber-400 text-zinc-200 hover:text-white rounded-xl text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                Submit Custom OUD RFQ
              </button>
            </div>
          </div>
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
              initialCategory="OUD"
              initialProduct={enquiryProduct.name}
              title={`Enquire for ${enquiryProduct.name}`}
              subtitle="Specify your requested quantity (Tolas, Grams, Liters) to receive current batch availability and wholesale pricing."
            />
          </div>
        </div>
      )}
    </div>
  );
};
