import React, { useState } from 'react';
import { MessageSquare, Phone, X } from 'lucide-react';
import { COMPANY_DETAILS, getWhatsAppUrl } from '../../data/companyData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Quick Contact Popover */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-amber-300/80 p-5 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
            <div>
              <p className="font-cinzel font-bold text-sm text-zinc-900">BARSHIP FRAGRANCES</p>
              <p className="text-[11px] text-zinc-500">Retail & Wholesale Desk</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-zinc-700 p-1"
              aria-label="Close contact window"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-zinc-600 leading-relaxed">
            Need pricing, bulk wholesale quotes, or custom manufacturing consultation? Connect directly with our Hyderabad desk.
          </div>

          <div className="space-y-2 pt-1">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp (+91 91332 33528)</span>
            </a>

            <a
              href={`tel:${COMPANY_DETAILS.primaryPhone.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl text-xs font-medium transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call MM Hussain: {COMPANY_DETAILS.primaryPhone}</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-amber-300"
        aria-label="Contact BARSHIP on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500"></span>
        </span>
        <MessageSquare className="w-7 h-7 fill-white/20" />
      </button>
    </div>
  );
};
