import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Check, ArrowRight, Droplets, Globe, Award } from 'lucide-react';
import { ProductCard } from '../components/products/ProductCard';
import { ProductModal } from '../components/products/ProductModal';
import { ContactForm } from '../components/common/ContactForm';
import { ATTAR_PRODUCTS, getWhatsAppUrl, COMPANY_DETAILS } from '../data/companyData';
import type { ProductItem } from '../data/companyData';

export const AttarPage: React.FC = () => {
  const [modalProduct, setModalProduct] = useState<ProductItem | null>(null);
  const [enquiryProduct, setEnquiryProduct] = useState<ProductItem | null>(null);
  const [filter, setFilter] = useState<'ALL' | 'Single-Origin OUD' | 'Sweet & Honeyed' | 'Smoky & Deep' | 'Connoisseur Concentrates'>('ALL');

  const filteredAttars = ATTAR_PRODUCTS.filter(item => {
    if (filter === 'ALL') return true;
    if (filter === 'Single-Origin OUD') {
      return item.id.includes('oud');
    }
    if (filter === 'Sweet & Honeyed') {
      return ['attar-cambodia-oud', 'attar-thailand-oud', 'attar-philippines-oud'].includes(item.id);
    }
    if (filter === 'Smoky & Deep') {
      return ['attar-indian-oud', 'attar-indonesian-oud', 'attar-malaysian-oud', 'attar-moroccan-oud'].includes(item.id);
    }
    if (filter === 'Connoisseur Concentrates') {
      return ['attar-fragrance-oil', 'attar-vietnamese-oud', 'attar-bhutan-oud', 'attar-srilankan-oud'].includes(item.id);
    }
    return true;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-zinc-950 text-white py-16 sm:py-24 relative border-b border-amber-500/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-800/25 via-zinc-950 to-zinc-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest font-cinzel mb-3">
            <Droplets className="w-3.5 h-3.5 text-amber-400" />
            <span>100% Non-Alcoholic Pure Concentrates</span>
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1">
            Artisanal Attar & Dehn Al Oudh
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
            Traditional Hydro-Distillations &bull; Single-Origin Agarwood Oils &bull; 10 Sovereign Origins &bull; Tolas, Bottles & Bulk Liters
          </p>
        </div>
      </section>

      {/* Intro Overview */}
      <section className="py-16 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest font-cinzel text-amber-700">
                Heritage Distillation Art
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-zinc-950">
                Pure Attars Extracted from Nature’s Rarest Botanicals
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                BARSHIP FRAGRANCES is celebrated in Hyderabad for offering authentic, unadulterated attar oils and pure Dehn Al Oudh. Hydro-distilled in traditional copper stills (deg & bhapka) as well as modern vacuum distillation units, our attars are completely free from carrier solvents, alcohol, or synthetic additives.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white rounded-lg border border-zinc-200 text-xs">
                  <strong className="text-zinc-900 block font-cinzel">Alcohol-Free</strong>
                  <span className="text-zinc-500">100% Pure oil extract</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-zinc-200 text-xs">
                  <strong className="text-zinc-900 block font-cinzel">48h+ Longevity</strong>
                  <span className="text-zinc-500">Unsurpassed sillage on skin & cloth</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-zinc-200 text-xs">
                  <strong className="text-zinc-900 block font-cinzel">Retail & Wholesale</strong>
                  <span className="text-zinc-500">3ml, 6ml, 12ml & Bulk kg drums</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-amber-300 shadow-xl aspect-[4/3] relative">
                <img
                  src="/images/attar_oil.jpg"
                  alt="Prestige crystal attar bottle with gold filigree and glass wand"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attar Catalogue Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-700">
              The Collection
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-zinc-950 mt-1">
              Explore Our Attar Lineup
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600">
              Filter by olfactory character or explore single-origin OUD attars from across the world.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {(['ALL', 'Single-Origin OUD', 'Sweet & Honeyed', 'Smoky & Deep', 'Connoisseur Concentrates'] as const).map(p => (
              <button
                key={p}
                onClick={() => setFilter(p)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition-all cursor-pointer ${
                  filter === p
                    ? 'bg-zinc-950 text-amber-300 shadow-sm'
                    : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-200'
                }`}
              >
                {p === 'ALL' ? 'All Attars & OUDs' : p}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAttars.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                onSelect={(p) => setModalProduct(p)}
                onEnquire={(p) => setEnquiryProduct(p)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Wholesale Banner */}
      <section className="py-16 bg-zinc-950 text-white border-t border-amber-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <h3 className="font-cinzel text-2xl font-bold text-white">
                Require Bulk Attar Liters or Custom Attar Flacons?
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm">
                We supply perfume brands, regional retailers, and exporters with certified pure attars in aluminum cannisters and bespoke crystal flacons.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl("Bulk Attar Inquiries", "Attar Wholesale")}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-shimmer-btn text-zinc-950 font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg"
              >
                Inquire on WhatsApp (+91 91332 33528)
              </a>
              <button
                onClick={() => setEnquiryProduct(ATTAR_PRODUCTS[0])}
                className="px-6 py-3.5 border border-zinc-700 hover:border-amber-400 text-zinc-200 hover:text-white rounded-xl text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                Request Attar Price List
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
              initialCategory="Attar"
              initialProduct={enquiryProduct.name}
              title={`Enquire for ${enquiryProduct.name}`}
              subtitle="Specify your requested quantity (Tolas, Milliliters, Liters) to receive current batch availability and wholesale pricing."
            />
          </div>
        </div>
      )}
    </div>
  );
};
