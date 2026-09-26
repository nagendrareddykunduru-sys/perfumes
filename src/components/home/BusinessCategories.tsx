import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Boxes, Ship, Globe2, Truck, Factory, ArrowRight } from 'lucide-react';
import { BUSINESS_PILLARS } from '../../data/companyData';

export const BusinessCategories: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6" />;
      case 'Boxes': return <Boxes className="w-6 h-6" />;
      case 'Ship': return <Ship className="w-6 h-6" />;
      case 'Globe2': return <Globe2 className="w-6 h-6" />;
      case 'Truck': return <Truck className="w-6 h-6" />;
      case 'Factory': return <Factory className="w-6 h-6" />;
      default: return <Boxes className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 bg-zinc-50/60 relative border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-amber-500" />
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-700">
              Integrated Fragrance Operations
            </span>
            <span className="h-[1px] w-8 bg-amber-500" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            OUR BUSINESS
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
            From direct sourcing of rare origin agarwood to flagship retail boutiques and international export channels.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="group bg-white rounded-2xl p-8 border border-zinc-200 hover:border-amber-400 transition-all duration-300 hover:shadow-xl flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Icon Container with Gold Accent */}
                <div className="w-14 h-14 rounded-xl bg-amber-50 text-amber-700 border border-amber-200/80 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-colors duration-300 shadow-xs">
                  {getIcon(pillar.icon)}
                </div>

                {/* Card Title */}
                <h3 className="font-cinzel text-xl font-bold text-zinc-950 mb-3 group-hover:text-amber-800 transition-colors">
                  {idx + 1}. {pillar.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                  {pillar.shortDesc}
                </p>

                {/* Highlights List */}
                <ul className="space-y-1.5 mb-6 text-xs text-zinc-500">
                  {pillar.highlights.slice(0, 3).map((item, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Explore Button */}
              <div className="pt-4 border-t border-zinc-100">
                <Link
                  to={pillar.route}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 group-hover:text-amber-600 transition-colors"
                >
                  <span>Explore {pillar.title}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
