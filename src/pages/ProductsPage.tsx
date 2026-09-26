import React, { useState } from 'react';
import { Search, Filter, Sparkles } from 'lucide-react';
import { ProductCard } from '../components/products/ProductCard';
import { ProductModal } from '../components/products/ProductModal';
import { ContactForm } from '../components/common/ContactForm';
import { ALL_PRODUCTS } from '../data/companyData';
import type { ProductItem } from '../data/companyData';

export const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'OUD' | 'Cosmetics' | 'Manufacturing'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalProduct, setModalProduct] = useState<ProductItem | null>(null);
  const [enquiryModalProduct, setEnquiryModalProduct] = useState<ProductItem | null>(null);

  const filteredProducts = ALL_PRODUCTS.filter(prod => {
    const matchesCat = selectedCategory === 'ALL' || prod.category === selectedCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.originOrType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-zinc-950 text-white py-16 sm:py-20 relative border-b border-amber-500/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-zinc-950 to-zinc-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-400">
            Official Catalogue
          </span>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
            Products & Custom Solutions
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
            Explore authentic OUD varieties, fine cosmetics & attars, and turnkey contract manufacturing solutions.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-zinc-50 border-b border-zinc-200 sticky top-[73px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {(['ALL', 'OUD', 'Cosmetics', 'Manufacturing'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-zinc-950 text-amber-300 shadow-sm'
                      : 'bg-white text-zinc-700 hover:bg-zinc-200/70 border border-zinc-300'
                  }`}
                >
                  {cat === 'ALL' ? 'All Products' : cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search origins, oils, bottles..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-zinc-300 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-600"
                >
                  Clear
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs sm:text-sm text-zinc-500 font-medium">
              Showing <strong className="text-zinc-900">{filteredProducts.length}</strong> items in <span className="text-amber-800 font-semibold">{selectedCategory}</span>
            </p>
            <span className="text-xs text-amber-700 font-semibold">
              * Wholesale quotes & retail consultations available on request
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-zinc-50 rounded-2xl border border-zinc-200">
              <p className="font-cinzel text-lg font-bold text-zinc-800">No products found matching your search</p>
              <p className="text-xs text-zinc-500 mt-1">Try resetting the search bar or choosing another category.</p>
              <button
                onClick={() => { setSelectedCategory('ALL'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 bg-zinc-900 text-white text-xs font-semibold rounded-lg"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  onSelect={(p) => setModalProduct(p)}
                  onEnquire={(p) => setEnquiryModalProduct(p)}
                />
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Product Detail Modal */}
      {modalProduct && (
        <ProductModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
          onOpenEnquiryForm={(p) => setEnquiryModalProduct(p)}
        />
      )}

      {/* Enquiry Form Modal */}
      {enquiryModalProduct && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
          <div className="relative max-w-2xl w-full my-8">
            <button
              onClick={() => setEnquiryModalProduct(null)}
              className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full bg-white text-zinc-800 shadow-lg flex items-center justify-center font-bold text-sm hover:bg-zinc-100"
            >
              ✕
            </button>
            <ContactForm
              initialCategory={enquiryModalProduct.category}
              initialProduct={enquiryModalProduct.name}
              title={`Enquire for ${enquiryModalProduct.name}`}
              subtitle="Specify your requested quantity or custom instructions to receive an instant price quotation."
            />
          </div>
        </div>
      )}
    </div>
  );
};
