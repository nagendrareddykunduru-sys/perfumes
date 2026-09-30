import React, { useState } from 'react';
import { Gem, Sparkles, ShieldCheck, Check, ArrowRight, Layers, Box, Globe, MessageSquare } from 'lucide-react';
import { ProductCard } from '../components/products/ProductCard';
import { ProductModal } from '../components/products/ProductModal';
import { ContactForm } from '../components/common/ContactForm';
import { BOTTLE_PRODUCTS, getWhatsAppUrl, COMPANY_DETAILS } from '../data/companyData';
import type { ProductItem } from '../data/companyData';

export const PreciousBottlesPage: React.FC = () => {
  const [modalProduct, setModalProduct] = useState<ProductItem | null>(null);
  const [enquiryProduct, setEnquiryProduct] = useState<ProductItem | null>(null);
  const [filter, setFilter] = useState<'ALL' | 'Gemstone & Crystal' | 'Artisanal & Vintage' | 'Designer Miniatures' | 'Aluminum Canisters' | 'Bakhoor & Jars'>('ALL');

  const filteredBottles = BOTTLE_PRODUCTS.filter(item => {
    if (filter === 'ALL') return true;
    if (filter === 'Gemstone & Crystal') {
      return item.id === 'bottle-gemstone-crystal-flacons';
    }
    if (filter === 'Artisanal & Vintage') {
      return item.id === 'bottle-vintage-butterfly-floral';
    }
    if (filter === 'Designer Miniatures') {
      return item.id === 'bottle-designer-miniature-pearl';
    }
    if (filter === 'Aluminum Canisters') {
      return item.id === 'bottle-wholesale-aluminum-canisters';
    }
    if (filter === 'Bakhoor & Jars') {
      return item.id === 'bottle-luxury-bakhoor-pomade-jars' || item.id === 'bottle-onyx-amber-bakhoor-jars';
    }
    return true;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-zinc-950 text-white py-16 sm:py-24 relative border-b border-amber-500/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700/25 via-zinc-950 to-zinc-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest font-cinzel mb-3">
            <Gem className="w-3.5 h-3.5 text-amber-400" />
            <span>Luxury Flacons & Vessels</span>
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1">
            Precious Perfume Bottles
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-3xl mx-auto">
            Gemstone Crystal Tolas &bull; Enamelled Butterfly Bottles &bull; Designer Miniatures &bull; Wholesale Export Aluminum Canisters &bull; Royal Bakhoor Jars
          </p>
        </div>
      </section>

      {/* Intro Overview & Craftsmanship */}
      <section className="py-16 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest font-cinzel text-amber-700">
                Artisanal Vessels For Rare Scents
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-zinc-950">
                Precious Perfume Bottles Designed for Connoisseurs
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                At BARSHIP FRAGRANCES, we believe extraordinary attars and pure Dehn Al Oudh deserve vessels of equal majesty. Our Precious Perfume Bottles collection brings together gemstone-crowned crystal tolas, artisan-crafted 24K gold filigree butterfly flacons, designer miniature vials, pure oil aluminum export canisters, and luxury bakhoor pomade jars.
              </p>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Whether you seek an heirloom tola flacon for rare agarwood distillations, bulk aluminum canisters for international freight, or royal wedding presentation sets, BARSHIP provides unrivaled quality, airtight preservation, and bespoke engraving.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 bg-white rounded-lg border border-zinc-200 text-xs">
                  <strong className="text-zinc-900 block font-cinzel">K9 Crystal</strong>
                  <span className="text-zinc-500">Optical diamond-cut brilliance</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-zinc-200 text-xs">
                  <strong className="text-zinc-900 block font-cinzel">Airtight Seal</strong>
                  <span className="text-zinc-500">Zero evaporation & leak-proof</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-zinc-200 text-xs">
                  <strong className="text-zinc-900 block font-cinzel">24K Gold Accent</strong>
                  <span className="text-zinc-500">Electroplated filigree cage</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-zinc-200 text-xs">
                  <strong className="text-zinc-900 block font-cinzel">OEM Branding</strong>
                  <span className="text-zinc-500">Custom logo & packaging</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl overflow-hidden border border-amber-300 shadow-xl aspect-square relative bg-zinc-950 group">
                  <img
                    src="/images/bottles/royal_gemstone_crystal_flacons.jpg"
                    alt="Royal Gemstone Crystal Attar Flacons"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent flex items-end p-2.5">
                    <span className="text-[11px] font-bold text-amber-300 font-cinzel leading-tight">Gemstone Crystal Tolas</span>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-amber-300 shadow-xl aspect-square relative bg-zinc-950 group">
                  <img
                    src="/images/bottles/vintage_butterfly_floral_flacons.jpg"
                    alt="Vintage Butterfly & Floral Flacons"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent flex items-end p-2.5">
                    <span className="text-[11px] font-bold text-amber-300 font-cinzel leading-tight">Enamelled Butterfly Flacons</span>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-amber-300 shadow-xl aspect-square relative bg-zinc-950 group">
                  <img
                    src="/images/bottles/designer_miniature_pearl_flacons.jpg"
                    alt="Designer Miniature & Pearl Flacons"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent flex items-end p-2.5">
                    <span className="text-[11px] font-bold text-amber-300 font-cinzel leading-tight">Pearl & Designer Miniatures</span>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-amber-300 shadow-xl aspect-square relative bg-zinc-950 group">
                  <img
                    src="/images/bottles/wholesale_aluminum_canisters.jpg"
                    alt="Wholesale Aluminum Canisters"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent flex items-end p-2.5">
                    <span className="text-[11px] font-bold text-amber-300 font-cinzel leading-tight">Wholesale Aluminum Bottles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precious Bottles Catalogue Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-700">
              The Prestige Collection
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-zinc-950 mt-1">
              Explore Precious Perfume Bottles
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600">
              From traditional 1-tola dipping wand vials to 100ml French diamond spray flacons and luxury velvet caskets.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {(['ALL', 'Gemstone & Crystal', 'Artisanal & Vintage', 'Designer Miniatures', 'Aluminum Canisters', 'Bakhoor & Jars'] as const).map(p => (
              <button
                key={p}
                onClick={() => setFilter(p)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition-all cursor-pointer ${
                  filter === p
                    ? 'bg-zinc-950 text-amber-300 shadow-sm'
                    : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-200'
                }`}
              >
                {p === 'ALL' ? 'All Precious Perfume Bottles' : p}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBottles.map((item) => (
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

      {/* OEM Custom Bottle Manufacturing Callout */}
      <section className="py-16 bg-zinc-950 text-white relative overflow-hidden border-y border-amber-500/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-amber-900/30 via-zinc-950 to-zinc-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest font-cinzel text-amber-400">
                Custom OEM & Private Label Packaging
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white">
                Require Custom Branded Bottles for Your Brand or Wedding?
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                BARSHIP FRAGRANCES delivers complete end-to-end bottle manufacturing solutions. We offer laser engraving, silk-screen brand printing, 24K gold foil stamping, custom zamac caps, and bespoke rigid boxes tailored to your exact specifications.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>Low Minimum Order Quantities</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>Worldwide Export Delivery (UAE & Global)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>Samples & Prototypes Available</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <a
                href={getWhatsAppUrl("Precious Perfume Bottles Wholesale & Custom OEM", "Precious Bottles")}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-shimmer-btn text-zinc-950 font-bold text-xs tracking-wider uppercase px-6 py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 text-center"
              >
                <MessageSquare className="w-4 h-4 text-zinc-950" />
                <span>WhatsApp Bottle Specialist</span>
              </a>
              <a
                href={`tel:${COMPANY_DETAILS.primaryPhone.replace(/\s+/g, '')}`}
                className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs tracking-wider uppercase px-6 py-4 rounded-xl border border-zinc-700 flex items-center justify-center gap-2 text-center transition-colors"
              >
                <span>Call {COMPANY_DETAILS.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-20 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-700">
              Wholesale & Retail Enquiries
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-zinc-950 mt-1">
              Request a Precious Bottle Quotation
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600">
              Fill out your requirements below and our Hyderabad packaging desk will respond within 24 hours.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-amber-200/80">
            <ContactForm initialProduct={enquiryProduct?.name || 'Precious Perfume Bottles'} />
          </div>
        </div>
      </section>

      {/* Modals */}
      {modalProduct && (
        <ProductModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
          onOpenEnquiryForm={(p: ProductItem) => {
            setModalProduct(null);
            setEnquiryProduct(p);
          }}
        />
      )}
    </div>
  );
};
export default PreciousBottlesPage;
