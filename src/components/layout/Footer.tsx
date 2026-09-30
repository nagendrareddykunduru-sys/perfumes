import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { BarshipLogo } from '../common/BarshipLogo';
import { COMPANY_DETAILS, getWhatsAppUrl } from '../../data/companyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-300 pt-16 pb-8 border-t-2 border-amber-500/40 relative">
      {/* Top subtle glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-amber-400/80 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800">
          
          {/* Column 1: BARSHIP FRAGRANCES */}
          <div className="space-y-4">
            <BarshipLogo variant="dark" size="md" showSubtitle={true} />
            <p className="text-zinc-400 text-xs leading-relaxed pt-2">
              Premier manufacturers, importers, exporters, wholesalers & retailers of artisanal OUD, fine attars, luxury perfumes, and turnkey custom fragrance solutions.
            </p>
            <div className="pt-2 text-xs text-zinc-400 space-y-1">
              <p className="text-amber-400/90 font-medium">Corporate Heritage:</p>
              <p>Baron Perfumes &bull; Zohran Perfumes</p>
              <p className="font-mono text-[11px] text-zinc-500">GSTIN: {COMPANY_DETAILS.gstin}</p>
            </div>
            <ul className="space-y-2 pt-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-xs text-zinc-300">
                  <ArrowUpRight className="w-3 h-3 text-amber-500" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/attar" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-xs text-zinc-300">
                  <ArrowUpRight className="w-3 h-3 text-amber-500" />
                  Attar & Perfume
                </Link>
              </li>
              <li>
                <Link to="/precious-bottles" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-xs text-zinc-300">
                  <ArrowUpRight className="w-3 h-3 text-amber-500" />
                  Precious Perfume Bottles
                </Link>
              </li>
              <li>
                <Link to="/others" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-xs text-zinc-300">
                  <ArrowUpRight className="w-3 h-3 text-amber-500" />
                  Bakhoor & Others
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-xs text-zinc-300">
                  <ArrowUpRight className="w-3 h-3 text-amber-500" />
                  Contact & Showroom
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: ATTAR & PERFUME */}
          <div>
            <h4 className="font-cinzel text-sm uppercase font-bold text-amber-400 tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
              ATTAR & PERFUME
            </h4>
            <ul className="space-y-3 text-xs text-zinc-300">
              <li>
                <Link to="/attar" className="hover:text-amber-400 transition-colors block">
                  Artisanal Attar (Pure Concentrates)
                </Link>
              </li>
              <li>
                <Link to="/attar" className="hover:text-amber-400 transition-colors block">
                  Single-Origin Dehn Al Oudh (10 Origins)
                </Link>
              </li>
              <li>
                <Link to="/perfume" className="hover:text-amber-400 transition-colors block">
                  Fine Perfumes (Extrait & EDP)
                </Link>
              </li>
              <li>
                <Link to="/precious-bottles" className="hover:text-amber-400 transition-colors block">
                  Precious Perfume Bottles & Crystal Tolas
                </Link>
              </li>
              <li>
                <Link to="/others" className="hover:text-amber-400 transition-colors block">
                  Royal Bakhoor & Incense Chips
                </Link>
              </li>
              <li>
                <Link to="/others" className="hover:text-amber-400 transition-colors block">
                  Luxury Air Fresheners & Mists
                </Link>
              </li>
              <li>
                <Link to="/others" className="hover:text-amber-400 transition-colors block">
                  Scented Skincare & Creams
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: BUSINESS NETWORK */}
          <div>
            <h4 className="font-cinzel text-sm uppercase font-bold text-amber-400 tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
              BUSINESS NETWORK
            </h4>
            <ul className="space-y-3 text-xs text-zinc-300">
              <li>
                <Link to="/retail" className="hover:text-amber-400 transition-colors block">
                  Retail Flagship Boutique (Hyderabad)
                </Link>
              </li>
              <li>
                <Link to="/importers-exporters" className="hover:text-amber-400 transition-colors block">
                  Direct Imports (10+ Sovereign Origins)
                </Link>
              </li>
              <li>
                <Link to="/importers-exporters" className="hover:text-amber-400 transition-colors block">
                  Global Exports Desk (UAE Hub)
                </Link>
              </li>
              <li>
                <Link to="/distributors" className="hover:text-amber-400 transition-colors block">
                  Regional Distribution Network
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors block">
                  Company Profile & Heritage
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors block">
                  Showroom & Corporate Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT */}
          <div>
            <h4 className="font-cinzel text-sm uppercase font-bold text-amber-400 tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
              CONTACT
            </h4>
            <div className="space-y-3 text-xs text-zinc-300">
              {/* Phone */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-zinc-400 text-[11px]">Direct / WhatsApp:</p>
                  <a href={`tel:${COMPANY_DETAILS.primaryPhone.replace(/\s+/g, '')}`} className="font-semibold text-white hover:text-amber-400 transition-colors">
                    {COMPANY_DETAILS.primaryPhone}
                  </a>
                  <p className="text-[11px] text-zinc-400">UAE Desk: +971 52 722 6677</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-zinc-400 text-[11px]">Official Email:</p>
                  <a href={`mailto:${COMPANY_DETAILS.primaryEmail}`} className="text-white hover:text-amber-400 transition-colors block">
                    {COMPANY_DETAILS.primaryEmail}
                  </a>
                  <a href={`mailto:${COMPANY_DETAILS.emails[1]}`} className="text-zinc-400 hover:text-amber-400 transition-colors block text-[11px]">
                    {COMPANY_DETAILS.emails[1]}
                  </a>
                </div>
              </div>

              {/* Addresses */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="text-[11px] text-zinc-400 leading-relaxed">
                  <p className="text-zinc-200 font-medium">Corporate Office:</p>
                  <p>{COMPANY_DETAILS.locations.corporate.address}</p>
                  <p className="text-zinc-200 font-medium pt-1">Showroom:</p>
                  <p>{COMPANY_DETAILS.locations.showroom.address}</p>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-center gap-2.5 pt-1">
                <Globe className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="font-mono text-zinc-200">{COMPANY_DETAILS.website}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            <p>&copy; {new Date().getFullYear()} <strong className="text-zinc-300 font-normal">BARSHIP Fragrances</strong>. All Rights Reserved.</p>
            <p className="text-[11px] text-zinc-600 mt-0.5">Baron Perfumes &bull; Hyderabad, Telangana, India</p>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="hover:text-amber-400 transition-colors">
              Terms & Conditions
            </Link>
            <a 
              href={getWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
            >
              <span>Instant WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
