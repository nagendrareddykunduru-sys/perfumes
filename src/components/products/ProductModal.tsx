import React, { useState } from 'react';
import { X, Check, MessageSquare, Phone, Mail, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import type { ProductItem } from '../../data/companyData';
import { getWhatsAppUrl, COMPANY_DETAILS } from '../../data/companyData';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenEnquiryForm: (product: ProductItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onOpenEnquiryForm,
}) => {
  if (!product) return null;

  const whatsappUrl = getWhatsAppUrl(product.name, product.category);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-amber-300 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-zinc-700 hover:text-zinc-950 shadow-md transition-colors"
          aria-label="Close product details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Media Column */}
          <div className="relative aspect-[4/5] md:aspect-auto h-full min-h-[340px] bg-zinc-950 flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-full ${product.category === 'Attar' ? 'object-contain p-2' : 'object-cover'} object-center`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
            <div className="absolute bottom-4 left-4 text-white md:hidden">
              <span className="text-[11px] uppercase tracking-widest text-amber-300 font-semibold">
                {product.category}
              </span>
              <h3 className="font-cinzel text-xl font-bold">{product.name}</h3>
            </div>
          </div>

          {/* Product Info Column */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="hidden md:flex items-center gap-2 mb-2">
                <span className="text-xs uppercase tracking-widest text-amber-700 font-semibold bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200/60">
                  {product.category}
                </span>
                <span className="text-xs text-zinc-500 font-medium">
                  {product.originOrType}
                </span>
              </div>

              <h2 className="hidden md:block font-cinzel text-2xl font-bold text-zinc-950">
                {product.name}
              </h2>

              <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                {product.description}
              </p>

              {/* Key Features / Details */}
              <div className="mt-5 space-y-2">
                <h4 className="text-xs uppercase font-bold tracking-wider text-zinc-900">
                  Specifications & Highlights:
                </h4>
                <ul className="space-y-1.5">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-zinc-600">
                      <Check className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Available Formats */}
              <div className="mt-5 pt-4 border-t border-zinc-100">
                <h4 className="text-xs uppercase font-bold tracking-wider text-zinc-900 mb-2">
                  Available Formats & Packaging:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.availableOptions.map((opt, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 font-medium border border-zinc-200"
                    >
                      {opt}
                    </span>
                  ))}
                </div>
              </div>

              {/* Transparent pricing policy note */}
              <div className="mt-5 p-3 rounded-lg bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Direct Business Pricing:</span> Volume-tiered quotes available for retail purchases, wholesale consignments, and export shipping.
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 pt-5 border-t border-zinc-100 space-y-2.5">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenEnquiryForm(product);
                  }}
                  className="w-full py-2.5 px-4 bg-zinc-950 hover:bg-zinc-800 text-white rounded-xl text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-sm transition-all"
                >
                  <Building2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Request Price</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-sm transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-1">
                <span>Immediate Assistance:</span>
                <a 
                  href={`tel:${COMPANY_DETAILS.primaryPhone.replace(/\s+/g, '')}`} 
                  className="text-zinc-900 font-semibold hover:text-amber-700 flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-amber-600" />
                  {COMPANY_DETAILS.primaryPhone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
