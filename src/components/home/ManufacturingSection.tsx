import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Box, FlaskConical, Gift, Layers, CheckCircle } from 'lucide-react';
import { MANUFACTURING_STEPS, MANUFACTURING_SERVICES } from '../../data/companyData';

export const ManufacturingSection: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background glow and subtle gold line accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-amber-400" />
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-400">
              Private Label & Contract Formulation
            </span>
            <span className="h-[1px] w-8 bg-amber-400" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            CUSTOM FRAGRANCE <span className="gold-gradient-text">MANUFACTURING</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
            From initial scent conception to custom bottle molds and gold-embossed presentation boxes, BARSHIP delivers comprehensive turnkey private label perfumery services.
          </p>
        </div>

        {/* 5 Custom Manufacturing Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {MANUFACTURING_SERVICES.map((srv, idx) => (
            <div 
              key={srv.id}
              className="bg-zinc-900/90 rounded-xl p-6 border border-zinc-800 hover:border-amber-400/80 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-zinc-800 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-colors">
                  {idx === 0 && <FlaskConical className="w-5 h-5" />}
                  {idx === 1 && <Sparkles className="w-5 h-5" />}
                  {idx === 2 && <Box className="w-5 h-5" />}
                  {idx === 3 && <Layers className="w-5 h-5" />}
                  {idx === 4 && <Gift className="w-5 h-5" />}
                </div>

                <h3 className="font-cinzel text-base font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                  {srv.name}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {srv.description}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/80">
                <span className="text-[10px] font-semibold tracking-wider uppercase text-amber-400/90 block">
                  {srv.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Manufacturing Visual Banner */}
        <div className="rounded-2xl overflow-hidden border border-amber-500/30 mb-20 relative bg-zinc-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 p-8 sm:p-10 space-y-4">
              <span className="text-xs uppercase tracking-widest font-cinzel text-amber-400 font-semibold">
                Engineering & Design Excellence
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                Bespoke Flacons & Presentation Cartons
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                We engineer customized crystal bottles, weighted zamac magnetic caps, and rigid handcrafted boxes with hot foil stamping. Every component is rigorously tested for leak-proof endurance and atomizer spray perfection.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="gold-shimmer-btn text-zinc-950 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-lg"
                >
                  <span>Start Your Custom Project</span>
                  <ArrowRight className="w-4 h-4 text-zinc-950" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 aspect-[16/10] overflow-hidden">
              <img
                src="/images/custom_manufacturing.jpg"
                alt="Bespoke perfume bottle design and luxury box packaging"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* 7-Step Process Timeline */}
        <div className="mt-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
              Our 7-Step Production Roadmap
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              A transparent, streamlined workflow ensuring absolute precision at every milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {MANUFACTURING_STEPS.map((st) => (
              <div 
                key={st.step}
                className="bg-zinc-900/60 rounded-xl p-4 border border-zinc-800/80 hover:border-amber-400/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="font-cinzel text-xl font-extrabold text-amber-400 mb-2">
                    {st.step}
                  </div>
                  <h4 className="font-cinzel text-xs font-bold text-white mb-1.5 leading-snug">
                    {st.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Button */}
          <div className="mt-12 text-center">
            <Link
              to="/manufacturing"
              className="gold-shimmer-btn text-zinc-950 font-bold px-8 py-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider inline-flex items-center gap-2 shadow-xl hover:shadow-2xl border border-amber-300"
            >
              <span>Explore Custom Manufacturing In Detail</span>
              <ArrowRight className="w-4 h-4 text-zinc-950" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
