import React from 'react';
import { MessageSquare, ArrowRight, Sparkles, Phone } from 'lucide-react';
import type { ProductItem } from '../../data/companyData';
import { getWhatsAppUrl } from '../../data/companyData';

interface ProductCardProps {
  product: ProductItem;
  onSelect?: (product: ProductItem) => void;
  onEnquire?: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect, onEnquire }) => {
  const whatsappLink = getWhatsAppUrl(product.name, product.category);

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-zinc-200/80 hover:border-amber-400/80 transition-all duration-300 hover:shadow-xl flex flex-col justify-between relative">
      {/* Category & Badge header */}
      <div className={`relative overflow-hidden bg-zinc-950 ${product.category === 'Attar' ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        
        {/* Subtle dark gradient overlay at top & bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-black/20" />

        {/* Origin / Type Pill */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/95 text-zinc-900 shadow-sm backdrop-blur-sm border border-amber-300/40">
            <Sparkles className="w-3 h-3 text-amber-600" />
            {product.originOrType}
          </span>
        </div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-amber-500 text-zinc-950 shadow-sm">
              {product.badge}
            </span>
          </div>
        )}

        {/* Category tag at bottom left of image */}
        <div className="absolute bottom-3 left-3">
          <span className="text-[10px] tracking-widest uppercase font-semibold text-amber-300">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-cinzel font-bold text-lg text-zinc-900 group-hover:text-amber-800 transition-colors">
            {product.name}
          </h3>
          
          <p className="mt-2 text-xs text-zinc-600 leading-relaxed line-clamp-3">
            {product.description}
          </p>

          {/* Available Formats / Options */}
          <div className="mt-4 pt-3 border-t border-zinc-100">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
              Available Formats
            </p>
            <div className="flex flex-wrap gap-1.5">
              {product.availableOptions.map((opt, idx) => (
                <span 
                  key={idx}
                  className="text-[11px] px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 font-medium"
                >
                  {opt}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Notice & Action Buttons */}
        <div className="mt-5 pt-4 border-t border-zinc-100 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-zinc-500 font-medium">Pricing:</span>
            <span className="font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/50">
              {product.priceNote}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onSelect ? onSelect(product) : onEnquire?.(product)}
              className="w-full py-2 px-3 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          <button
            onClick={() => onEnquire?.(product)}
            className="w-full py-2 px-3 border border-amber-500/60 hover:bg-amber-50 text-amber-900 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1"
          >
            <span>Request Wholesale Quote</span>
          </button>
        </div>
      </div>
    </div>
  );
};
