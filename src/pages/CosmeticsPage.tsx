import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { ProductCard } from '../components/products/ProductCard';
import { ProductModal } from '../components/products/ProductModal';
import { ContactForm } from '../components/common/ContactForm';
import { COSMETICS_PRODUCTS } from '../data/companyData';
import type { ProductItem } from '../data/companyData';

export const CosmeticsPage: React.FC = () => {
  const [modalProduct, setModalProduct] = useState<ProductItem | null>(null);
  const [enquiryProduct, setEnquiryProduct] = useState<ProductItem | null>(null);

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-zinc-950 text-white py-16 sm:py-24 relative border-b border-amber-500/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-800/25 via-zinc-950 to-zinc-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-400">
            Beauty & Fine Fragrances
          </span>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
            Cosmetics, Attars & Perfumes
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
            Fragrances Oil &bull; Luxury Perfumes &bull; Bakhoor &bull; Air Freshener &bull; Scented Lotion & Cream
          </p>
        </div>
      </section>

      {/* Hero Intro */}
      <section className="py-16 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest font-cinzel text-amber-700">
                Crafted for Radiance & Sillage
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-zinc-950">
                French Elegance Meets Traditional Oriental Perfumery
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Our cosmetics division blends concentrated attar oils, fine French spray perfumes, majestic incense bakhoor, room ambiance mists, and luxury skincare lotions. Every cosmetic formulation adheres to rigorous dermatological safety parameters, utilizing pure botanicals and premium aromatics.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white rounded-lg border border-zinc-200 text-xs">
                  <strong className="text-zinc-900 block font-cinzel">Alcohol-Free Attars</strong>
                  <span className="text-zinc-500">100% oil concentrates</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-zinc-200 text-xs">
                  <strong className="text-zinc-900 block font-cinzel">Extrait & EDP</strong>
                  <span className="text-zinc-500">High scent concentration</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-zinc-200 text-xs">
                  <strong className="text-zinc-900 block font-cinzel">Skin-Safe Skincare</strong>
                  <span className="text-zinc-500">Paraben-free lotions & creams</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-amber-300 shadow-xl aspect-[4/3]">
                <img
                  src="/images/luxury_cosmetics.jpg"
                  alt="Fine perfumes, attar oil bottles, and luxury cosmetics jars"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Cosmetics Categories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-700">
              Cosmetic Verticals
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-zinc-950 mt-1">
              Explore Our Cosmetics Portfolio
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600">
              Available for direct showroom purchase, salon supply, boutique retail, or bulk wholesale packaging.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {COSMETICS_PRODUCTS.map((prod) => (
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
              initialCategory="Cosmetics"
              initialProduct={enquiryProduct.name}
              title={`Enquire for ${enquiryProduct.name}`}
              subtitle="Specify your requested packaging size or wholesale volume for custom quotes."
            />
          </div>
        </div>
      )}
    </div>
  );
};
