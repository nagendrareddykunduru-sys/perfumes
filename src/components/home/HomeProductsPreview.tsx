import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ProductCard } from '../products/ProductCard';
import { ProductModal } from '../products/ProductModal';
import { ATTAR_PRODUCTS, PERFUME_PRODUCTS, OTHERS_PRODUCTS } from '../../data/companyData';
import type { ProductItem } from '../../data/companyData';

interface HomeProductsPreviewProps {
  onOpenEnquiryModal: (product?: ProductItem) => void;
}

export const HomeProductsPreview: React.FC<HomeProductsPreviewProps> = ({ onOpenEnquiryModal }) => {
  const [activeTab, setActiveTab] = useState<'Attar' | 'Perfume' | 'Others'>('Attar');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const getFilteredProducts = () => {
    switch (activeTab) {
      case 'Attar':
        return ATTAR_PRODUCTS.slice(0, 4);
      case 'Perfume':
        return PERFUME_PRODUCTS.slice(0, 4);
      case 'Others':
        return OTHERS_PRODUCTS.slice(0, 4);
      default:
        return ATTAR_PRODUCTS.slice(0, 4);
    }
  };

  const getCategoryLink = () => {
    switch (activeTab) {
      case 'Attar': return '/attar';
      case 'Perfume': return '/perfume';
      case 'Others': return '/others';
    }
  };

  return (
    <section className="py-20 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-[1px] w-6 bg-amber-500" />
              <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-700">
                Signature Portfolio
              </span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Featured Attar, Perfume & Collections
            </h2>
            <p className="mt-2 text-sm text-zinc-600 max-w-xl">
              Select a category to preview our pure artisanal attars, luxury spray perfumes, and bakhoor & ambient lines.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-zinc-100 p-1.5 rounded-xl border border-zinc-200 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('Attar')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'Attar'
                  ? 'bg-zinc-950 text-amber-300 shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              Attar
            </button>
            <button
              onClick={() => setActiveTab('Perfume')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'Perfume'
                  ? 'bg-zinc-950 text-amber-300 shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              Perfume
            </button>
            <button
              onClick={() => setActiveTab('Others')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'Others'
                  ? 'bg-zinc-950 text-amber-300 shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              Others (Bakhoor & Mists)
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {getFilteredProducts().map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onSelect={(p) => setSelectedProduct(p)}
              onEnquire={(p) => onOpenEnquiryModal(p)}
            />
          ))}
        </div>

        {/* Bottom CTA to dedicated category page */}
        <div className="mt-12 text-center">
          <Link
            to={getCategoryLink()}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-900 hover:text-amber-700 bg-amber-50 hover:bg-amber-100/80 px-8 py-3.5 rounded-xl border border-amber-300 transition-colors"
          >
            <span>View All {activeTab} Offerings</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onOpenEnquiryForm={(p) => onOpenEnquiryModal(p)}
        />
      )}
    </section>
  );
};
