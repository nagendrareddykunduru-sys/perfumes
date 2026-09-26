import React, { useState } from 'react';
import { Calculator, Sparkles, MessageSquare, Check, ArrowRight, ShieldCheck, Clock, Layers } from 'lucide-react';
import { COMPANY_DETAILS } from '../../data/companyData';

export const QuoteEstimator: React.FC = () => {
  const [projectType, setProjectType] = useState<'Turnkey Perfume' | 'Custom Packaging' | 'Bottle Designing' | 'Pure Attar Oil'>('Turnkey Perfume');
  const [volume, setVolume] = useState<'500' | '1,000' | '2,500' | '5,000+'>('1,000');
  const [scentFamily, setScentFamily] = useState<'Oriental Royal OUD' | 'French Citrus Floral' | 'Spicy Amber & Musk' | 'Sweet Gourmand Leather'>('Oriental Royal OUD');
  const [packagingTier, setPackagingTier] = useState<'Rigid Book-Style Box + Gold Foil' | 'Velvet Inlay Drawer Box' | 'Classic Folding Carton'>('Rigid Book-Style Box + Gold Foil');

  const getEstimatedTimeline = () => {
    switch (volume) {
      case '500': return '2 – 3 Weeks';
      case '1,000': return '3 – 4 Weeks';
      case '2,500': return '4 – 5 Weeks';
      case '5,000+': return '5 – 7 Weeks';
    }
  };

  const getWhatsAppEstimateUrl = () => {
    const text = `Hello BARSHIP Fragrances,\nI generated a Custom Manufacturing Specification on your website:\n- Project: ${projectType}\n- Estimated Batch: ${volume} Units\n- Scent Family: ${scentFamily}\n- Packaging: ${packagingTier}\n- Timeline Target: ${getEstimatedTimeline()}\nPlease connect me with your Hyderabad formulation team for pricing and sample development.`;
    return `https://wa.me/${COMPANY_DETAILS.primaryWhatsAppRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white rounded-2xl border border-amber-300 shadow-xl p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center">
          <Calculator className="w-4 h-4" />
        </span>
        <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-700">
          Interactive B2B Tool
        </span>
      </div>

      <h3 className="font-cinzel text-2xl font-bold text-zinc-950">
        Custom Manufacturing Project Estimator
      </h3>
      <p className="mt-1 text-xs sm:text-sm text-zinc-600 mb-6">
        Configure your private label fragrance specifications to calculate timelines and generate a direct project brief.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left: Interactive Selectors */}
        <div className="space-y-5">
          {/* Step 1: Project Type */}
          <div>
            <label className="block text-xs font-bold uppercase text-zinc-800 tracking-wider mb-2">
              1. Project Focus
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(['Turnkey Perfume', 'Custom Packaging', 'Bottle Designing', 'Pure Attar Oil'] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setProjectType(t)}
                  className={`p-3 rounded-xl text-xs font-semibold text-left transition-all border ${
                    projectType === t
                      ? 'bg-zinc-950 text-amber-400 border-zinc-950 shadow-sm'
                      : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Batch Quantity */}
          <div>
            <label className="block text-xs font-bold uppercase text-zinc-800 tracking-wider mb-2">
              2. Target Batch Volume
            </label>
            <div className="grid grid-cols-4 gap-2">
              {(['500', '1,000', '2,500', '5,000+'] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVolume(v)}
                  className={`py-2.5 px-2 rounded-xl text-xs font-bold text-center transition-all border ${
                    volume === v
                      ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                      : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100'
                  }`}
                >
                  {v} pcs
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Scent Architecture */}
          <div>
            <label className="block text-xs font-bold uppercase text-zinc-800 tracking-wider mb-2">
              3. Desired Olfactory Direction
            </label>
            <select
              value={scentFamily}
              onChange={(e) => setScentFamily(e.target.value as any)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-xs sm:text-sm bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="Oriental Royal OUD">Oriental Royal OUD & Taif Rose</option>
              <option value="French Citrus Floral">French Bergamot & White Jasmine</option>
              <option value="Spicy Amber & Musk">Spicy Cinnamon, Cardamom & Soft Musk</option>
              <option value="Sweet Gourmand Leather">Rich Caramel, Vanilla & Smoked Leather</option>
            </select>
          </div>

          {/* Step 4: Packaging Type */}
          <div>
            <label className="block text-xs font-bold uppercase text-zinc-800 tracking-wider mb-2">
              4. Presentation Cartons
            </label>
            <select
              value={packagingTier}
              onChange={(e) => setPackagingTier(e.target.value as any)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-xs sm:text-sm bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="Rigid Book-Style Box + Gold Foil">Rigid Book-Style Box + Metallic Gold Foil Stamping</option>
              <option value="Velvet Inlay Drawer Box">Velvet Inlay Sliding Drawer Gift Box</option>
              <option value="Classic Folding Carton">Classic Luxury Embossed Folding Carton</option>
            </select>
          </div>
        </div>

        {/* Right: Live Summary Card */}
        <div className="bg-zinc-950 text-white rounded-xl p-6 sm:p-7 flex flex-col justify-between border border-amber-400/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
              <span className="font-cinzel text-xs font-bold uppercase text-amber-400 tracking-wider">
                Specification Summary
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">
                Ready to Quote
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between">
                <span className="text-zinc-400">Project Type:</span>
                <strong className="text-white">{projectType}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Volume Tier:</span>
                <strong className="text-amber-400 font-mono text-sm">{volume} Units</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Scent Accords:</span>
                <strong className="text-white">{scentFamily}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Packaging:</span>
                <strong className="text-white text-right max-w-[200px] truncate">{packagingTier}</strong>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-zinc-800/80 space-y-2">
              <div className="flex items-center gap-2 text-zinc-300 text-xs">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Estimated Turnaround: <strong className="text-white">{getEstimatedTimeline()}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300 text-xs">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Includes Prototype Sample Approval Before Mass Filling</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-800 space-y-2">
            <a
              href={getWhatsAppEstimateUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full gold-shimmer-btn text-zinc-950 font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageSquare className="w-4 h-4 text-zinc-950" />
              <span>Forward Specification on WhatsApp</span>
            </a>
            <p className="text-[10px] text-zinc-400 text-center">
              Direct connection with MM Hussain Al Najmi (+91 91332 33528)
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
