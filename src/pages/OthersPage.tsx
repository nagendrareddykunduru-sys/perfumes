import React, { useState } from 'react';
import { Flame, Wind, Heart, Gift, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { ProductCard } from '../components/products/ProductCard';
import { ProductModal } from '../components/products/ProductModal';
import { ContactForm } from '../components/common/ContactForm';
import { OTHERS_PRODUCTS, getWhatsAppUrl } from '../data/companyData';
import type { ProductItem } from '../data/companyData';

export const OthersPage: React.FC = () => {
  const [modalProduct, setModalProduct] = useState<ProductItem | null>(null);
  const [enquiryProduct, setEnquiryProduct] = useState<ProductItem | null>(null);

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-zinc-950 text-white py-16 sm:py-24 relative border-b border-amber-500/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-800/25 via-zinc-950 to-zinc-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest font-cinzel mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Fragrance Lifestyle & Ambient Collection</span>
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1">
            Others: Bakhoor, Ambient & Gift Collections
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
            Arabesque Bakhoor Incense &bull; Air Fresheners &bull; Scented Creams & Body Mists &bull; Raw Agarwood Chips &bull; VIP Gift Hampers
          </p>
        </div>
      </section>

      {/* Intro Overview */}
      <section className="py-16 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest font-cinzel text-amber-700">
                Opulent Hospitality & Lifestyle
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-zinc-950">
                Elevating Spaces & Special Occasions
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Beyond personal perfumes and attars, BARSHIP provides atmospheric hospitality solutions. From traditional charcoal bakhoor incense that perfumes living rooms, majlis spaces, and boutique hotels, to luxury room sprays, nourishing scented body creams, and curated royal wedding hampers.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 bg-white rounded-lg border border-zinc-200 text-xs text-center">
                  <Flame className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                  <strong className="text-zinc-900 block font-cinzel">Bakhoor</strong>
                  <span className="text-zinc-500">Natural wood base</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-zinc-200 text-xs text-center">
                  <Wind className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                  <strong className="text-zinc-900 block font-cinzel">Air Mists</strong>
                  <span className="text-zinc-500">Fabric safe</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-zinc-200 text-xs text-center">
                  <Heart className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                  <strong className="text-zinc-900 block font-cinzel">Lotions</strong>
                  <span className="text-zinc-500">Scented skincare</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-zinc-200 text-xs text-center">
                  <Gift className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                  <strong className="text-zinc-900 block font-cinzel">Gift Boxes</strong>
                  <span className="text-zinc-500">VIP presentation</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-amber-300 shadow-xl aspect-[4/3] relative">
                <img
                  src="/images/bakhoor_luxury.jpg"
                  alt="Gold Bakhoor burner with fragrant incense smoke on marble"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-700">
              The Collection
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-zinc-950 mt-1">
              Bakhoor, Skincare & Gifts
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600">
              Select any item to view fragrance specifications, wholesale quantities, or packaging sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {OTHERS_PRODUCTS.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onSelect={(p) => setModalProduct(p)}
                onEnquire={(p) => setEnquiryProduct(p)}
              />
            ))}
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
              initialCategory="Others"
              initialProduct={enquiryProduct.name}
              title={`Enquire for ${enquiryProduct.name}`}
              subtitle="Specify your requested quantity or packaging format for custom quotation."
            />
          </div>
        </div>
      )}
    </div>
  );
};
