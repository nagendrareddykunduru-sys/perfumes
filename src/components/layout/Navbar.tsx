import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, ChevronDown, Droplet, Sparkles, Flame, ArrowRight, ChevronRight } from 'lucide-react';
import { BarshipLogo } from '../common/BarshipLogo';
import { COMPANY_DETAILS, getWhatsAppUrl } from '../../data/companyData';

interface DropdownItem {
  name: string;
  desc: string;
  path: string;
  badge?: string;
}

interface DropdownCategory {
  id: 'attar' | 'perfume' | 'others';
  title: string;
  path: string;
  subtitle: string;
  icon: React.ReactNode;
  items: DropdownItem[];
  footerNote: string;
}

const DROPDOWN_MENUS: Record<'attar' | 'perfume' | 'others', DropdownCategory> = {
  attar: {
    id: 'attar',
    title: 'Attar',
    path: '/attar',
    subtitle: 'Artisanal Perfume Oils & Pure OUD',
    icon: <Droplet className="w-4 h-4 text-amber-600" />,
    items: [
      {
        name: 'All Attar Offerings',
        desc: '100% non-alcoholic artisanal perfume oils & concentrates',
        path: '/attar'
      },
      {
        name: 'Single-Origin Dehn Al Oudh',
        desc: 'Cambodian, Assam, Moroccan, Indonesian & 10 global origins',
        path: '/attar',
        badge: '10 Origins'
      },
      {
        name: 'Sweet & Floral Accords',
        desc: 'Royal Taif Rose, White Musk, Amber & Jasmine Sambac',
        path: '/attar'
      },
      {
        name: 'Smoky & Connoisseur Distillates',
        desc: 'Aged vintage agarwood harvests, Trat, and rare mukhallats',
        path: '/attar'
      }
    ],
    footerNote: 'Hand-poured into 3ml, 6ml crystal tolas & bespoke gift boxes'
  },
  perfume: {
    id: 'perfume',
    title: 'Perfume',
    path: '/perfume',
    subtitle: 'Luxury Fine Spray Fragrances',
    icon: <Sparkles className="w-4 h-4 text-amber-600" />,
    items: [
      {
        name: 'All Spray Perfumes',
        desc: 'Extrait de Parfum (35%) and Eau de Parfum (25%) formulations',
        path: '/perfume'
      },
      {
        name: 'French & Oriental Scents',
        desc: 'Bergamot, French Taif, Amberwood, Vetiver & Royal Oud accords',
        path: '/perfume'
      },
      {
        name: 'Custom Glass Flacons',
        desc: 'French heavy glass bottles with magnetic gold zamac caps',
        path: '/perfume'
      },
      {
        name: 'Interactive Formulation Estimator',
        desc: 'Calculate fragrance notes, concentration strengths & flacon sizes',
        path: '/perfume',
        badge: 'Interactive'
      }
    ],
    footerNote: 'Equipped with Italian fine-mist pumps in 50ml and 100ml sizes'
  },
  others: {
    id: 'others',
    title: 'Others',
    path: '/others',
    subtitle: 'Bakhoor, Ambient & Gift Collections',
    icon: <Flame className="w-4 h-4 text-amber-600" />,
    items: [
      {
        name: 'All Lifestyle Collections',
        desc: 'Atmospheric scents, incense & curated presentation hampers',
        path: '/others'
      },
      {
        name: 'Arabesque Bakhoor',
        desc: 'Natural wood chips soaked in aromatic oils for burners',
        path: '/others'
      },
      {
        name: 'Luxury Air Fresheners',
        desc: 'Long-lasting fabric-safe home, office & car ambient mists',
        path: '/others'
      },
      {
        name: 'Scented Creams & Lotions',
        desc: 'Nourishing skincare formulated with concentrated essential oils',
        path: '/others'
      },
      {
        name: 'Raw Agarwood Chips',
        desc: 'Natural wild Aquilaria wood chips for charcoal heating',
        path: '/others'
      },
      {
        name: 'VIP Royal Gift Sets',
        desc: 'Velvet presentation boxes for corporate & royal wedding gifting',
        path: '/others',
        badge: 'VIP Gifting'
      }
    ],
    footerNote: 'Elevating living spaces, majlis hospitality, and special occasions'
  }
};

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'attar' | 'perfume' | 'others' | null>(null);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<'attar' | 'perfume' | 'others' | null>(null);
  const location = useLocation();
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile and desktop menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setExpandedMobileCategory(null);
  }, [location.pathname]);

  const handleMouseEnter = (key: 'attar' | 'perfume' | 'others') => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const toggleMobileCategory = (key: 'attar' | 'perfume' | 'others', e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedMobileCategory(prev => prev === key ? null : key);
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-zinc-950 text-zinc-300 text-xs py-2 px-4 border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="text-amber-400 font-semibold tracking-wider uppercase font-cinzel">Hyderabad &bull; UAE</span>
            <span className="hidden md:inline text-zinc-500">|</span>
            <span className="hidden md:inline text-zinc-300">Retail Boutique &bull; Direct Imports &bull; Global Exports &bull; Regional Distribution</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a 
              href={`tel:${COMPANY_DETAILS.primaryPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-500" />
              <span>{COMPANY_DETAILS.primaryPhone}</span>
            </a>
            <span className="text-zinc-600">|</span>
            <a 
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageSquare className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-amber-200/60' 
            : 'bg-white py-4 border-b border-zinc-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <div className="flex-shrink-0">
              <BarshipLogo variant="light" size="md" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {/* 1. Home */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors relative tracking-wide ${
                    isActive
                      ? 'text-amber-700 font-semibold'
                      : 'text-zinc-700 hover:text-amber-700'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    Home
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>

              {/* 2. About */}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors relative tracking-wide ${
                    isActive
                      ? 'text-amber-700 font-semibold'
                      : 'text-zinc-700 hover:text-amber-700'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    About
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>

              {/* 3. Attar with Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('attar')}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  to="/attar"
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium transition-colors relative tracking-wide inline-flex items-center gap-1.5 ${
                      isActive || activeDropdown === 'attar'
                        ? 'text-amber-700 font-semibold'
                        : 'text-zinc-700 hover:text-amber-700'
                    }`
                  }
                >
                  <span>Attar</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === 'attar' ? 'rotate-180 text-amber-600' : 'text-zinc-400'
                    }`}
                  />
                  {location.pathname === '/attar' && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 rounded-full" />
                  )}
                </NavLink>

                {/* Dropdown Panel */}
                {activeDropdown === 'attar' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[390px] z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="bg-white rounded-2xl shadow-2xl border border-amber-200/90 overflow-hidden">
                      {/* Top gold bar */}
                      <div className="h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500" />
                      
                      {/* Header */}
                      <div className="p-4 pb-3 bg-zinc-50/70 border-b border-zinc-100 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-amber-100/70 flex items-center justify-center border border-amber-200">
                            {DROPDOWN_MENUS.attar.icon}
                          </div>
                          <div>
                            <h4 className="font-cinzel text-xs font-bold text-zinc-950 uppercase tracking-wider">
                              Artisanal Attar Collection
                            </h4>
                            <p className="text-[11px] text-zinc-500">100% Non-Alcoholic Pure Concentrates</p>
                          </div>
                        </div>
                        <Link
                          to="/attar"
                          className="text-[11px] font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1"
                        >
                          <span>Explore</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      {/* Items */}
                      <div className="p-2 space-y-1">
                        {DROPDOWN_MENUS.attar.items.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            className="group flex items-start justify-between p-2.5 rounded-xl hover:bg-amber-50/70 border border-transparent hover:border-amber-200/60 transition-colors"
                          >
                            <div className="space-y-0.5 pr-2">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold text-zinc-900 group-hover:text-amber-800 transition-colors">
                                  {item.name}
                                </span>
                                {item.badge && (
                                  <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-zinc-500 line-clamp-1 leading-snug">
                                {item.desc}
                              </p>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
                          </Link>
                        ))}
                      </div>

                      {/* Footer Note */}
                      <div className="p-3 bg-amber-50/60 border-t border-amber-100 flex items-center justify-between text-[11px] text-zinc-600">
                        <span>{DROPDOWN_MENUS.attar.footerNote}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 4. Perfume with Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('perfume')}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  to="/perfume"
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium transition-colors relative tracking-wide inline-flex items-center gap-1.5 ${
                      isActive || activeDropdown === 'perfume'
                        ? 'text-amber-700 font-semibold'
                        : 'text-zinc-700 hover:text-amber-700'
                    }`
                  }
                >
                  <span>Perfume</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === 'perfume' ? 'rotate-180 text-amber-600' : 'text-zinc-400'
                    }`}
                  />
                  {location.pathname === '/perfume' && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 rounded-full" />
                  )}
                </NavLink>

                {/* Dropdown Panel */}
                {activeDropdown === 'perfume' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[390px] z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="bg-white rounded-2xl shadow-2xl border border-amber-200/90 overflow-hidden">
                      {/* Top gold bar */}
                      <div className="h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500" />
                      
                      {/* Header */}
                      <div className="p-4 pb-3 bg-zinc-50/70 border-b border-zinc-100 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-amber-100/70 flex items-center justify-center border border-amber-200">
                            {DROPDOWN_MENUS.perfume.icon}
                          </div>
                          <div>
                            <h4 className="font-cinzel text-xs font-bold text-zinc-950 uppercase tracking-wider">
                              Luxury Spray Perfumes
                            </h4>
                            <p className="text-[11px] text-zinc-500">Extrait (35%) & Eau de Parfum (25%)</p>
                          </div>
                        </div>
                        <Link
                          to="/perfume"
                          className="text-[11px] font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1"
                        >
                          <span>Explore</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      {/* Items */}
                      <div className="p-2 space-y-1">
                        {DROPDOWN_MENUS.perfume.items.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            className="group flex items-start justify-between p-2.5 rounded-xl hover:bg-amber-50/70 border border-transparent hover:border-amber-200/60 transition-colors"
                          >
                            <div className="space-y-0.5 pr-2">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold text-zinc-900 group-hover:text-amber-800 transition-colors">
                                  {item.name}
                                </span>
                                {item.badge && (
                                  <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-zinc-500 line-clamp-1 leading-snug">
                                {item.desc}
                              </p>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
                          </Link>
                        ))}
                      </div>

                      {/* Footer Note */}
                      <div className="p-3 bg-amber-50/60 border-t border-amber-100 flex items-center justify-between text-[11px] text-zinc-600">
                        <span>{DROPDOWN_MENUS.perfume.footerNote}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 5. Others with Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('others')}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  to="/others"
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium transition-colors relative tracking-wide inline-flex items-center gap-1.5 ${
                      isActive || activeDropdown === 'others'
                        ? 'text-amber-700 font-semibold'
                        : 'text-zinc-700 hover:text-amber-700'
                    }`
                  }
                >
                  <span>Others</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === 'others' ? 'rotate-180 text-amber-600' : 'text-zinc-400'
                    }`}
                  />
                  {location.pathname === '/others' && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 rounded-full" />
                  )}
                </NavLink>

                {/* Dropdown Panel */}
                {activeDropdown === 'others' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[420px] z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="bg-white rounded-2xl shadow-2xl border border-amber-200/90 overflow-hidden">
                      {/* Top gold bar */}
                      <div className="h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500" />
                      
                      {/* Header */}
                      <div className="p-4 pb-3 bg-zinc-50/70 border-b border-zinc-100 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-amber-100/70 flex items-center justify-center border border-amber-200">
                            {DROPDOWN_MENUS.others.icon}
                          </div>
                          <div>
                            <h4 className="font-cinzel text-xs font-bold text-zinc-950 uppercase tracking-wider">
                              Lifestyle & Ambient Line
                            </h4>
                            <p className="text-[11px] text-zinc-500">Bakhoor, Room Mists & Royal Gifting</p>
                          </div>
                        </div>
                        <Link
                          to="/others"
                          className="text-[11px] font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1"
                        >
                          <span>Explore</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      {/* Items (2-column grid for clean compact appearance) */}
                      <div className="p-2.5 grid grid-cols-1 sm:grid-cols-2 gap-1">
                        {DROPDOWN_MENUS.others.items.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            className="group p-2 rounded-xl hover:bg-amber-50/70 border border-transparent hover:border-amber-200/60 transition-colors flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <span className="text-xs font-semibold text-zinc-900 group-hover:text-amber-800 transition-colors">
                                  {item.name}
                                </span>
                                {item.badge && (
                                  <span className="text-[8px] uppercase font-bold tracking-wider px-1 rounded bg-amber-100 text-amber-900 border border-amber-200">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[10px] text-zinc-500 line-clamp-2 leading-tight">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Footer Note */}
                      <div className="p-3 bg-amber-50/60 border-t border-amber-100 flex items-center justify-between text-[11px] text-zinc-600">
                        <span>{DROPDOWN_MENUS.others.footerNote}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 6. Contact */}
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors relative tracking-wide ${
                    isActive
                      ? 'text-amber-700 font-semibold'
                      : 'text-zinc-700 hover:text-amber-700'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    Contact
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            </nav>

            {/* Header Right Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/contact"
                className="gold-shimmer-btn text-zinc-950 font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all border border-amber-400/50 flex items-center gap-2"
              >
                <span>Enquire Now</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                to="/contact"
                className="sm:hidden gold-shimmer-btn text-zinc-950 font-semibold text-[11px] tracking-wider uppercase px-3 py-1.5 rounded-full"
              >
                Enquire
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-md text-zinc-800 hover:text-amber-700 hover:bg-zinc-100 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[105px] bg-white border-b border-amber-200 shadow-2xl max-h-[calc(100vh-105px)] overflow-y-auto">
            <div className="px-5 pt-3 pb-6 space-y-1">
              {/* Home */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-3 py-2.5 text-base font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-amber-50 text-amber-800 font-semibold border-l-4 border-amber-600'
                      : 'text-zinc-800 hover:bg-zinc-50'
                  }`
                }
              >
                Home
              </NavLink>

              {/* About */}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block px-3 py-2.5 text-base font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-amber-50 text-amber-800 font-semibold border-l-4 border-amber-600'
                      : 'text-zinc-800 hover:bg-zinc-50'
                  }`
                }
              >
                About
              </NavLink>

              {/* Attar with Expandable Accordion */}
              <div>
                <div className="flex items-center justify-between rounded-md hover:bg-zinc-50">
                  <NavLink
                    to="/attar"
                    className={({ isActive }) =>
                      `flex-1 px-3 py-2.5 text-base font-medium transition-colors ${
                        isActive
                          ? 'text-amber-800 font-semibold border-l-4 border-amber-600'
                          : 'text-zinc-800'
                      }`
                    }
                  >
                    Attar
                  </NavLink>
                  <button
                    onClick={(e) => toggleMobileCategory('attar', e)}
                    className="p-2.5 text-zinc-500 hover:text-amber-700"
                    aria-label="Toggle Attar categories"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expandedMobileCategory === 'attar' ? 'rotate-180 text-amber-600' : ''
                      }`}
                    />
                  </button>
                </div>

                {expandedMobileCategory === 'attar' && (
                  <div className="pl-4 pr-2 py-2 ml-3 border-l-2 border-amber-300 space-y-1 bg-amber-50/40 rounded-r-lg">
                    {DROPDOWN_MENUS.attar.items.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className="block py-1.5 px-2 text-xs text-zinc-700 hover:text-amber-900 rounded font-medium"
                      >
                        &bull; {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Perfume with Expandable Accordion */}
              <div>
                <div className="flex items-center justify-between rounded-md hover:bg-zinc-50">
                  <NavLink
                    to="/perfume"
                    className={({ isActive }) =>
                      `flex-1 px-3 py-2.5 text-base font-medium transition-colors ${
                        isActive
                          ? 'text-amber-800 font-semibold border-l-4 border-amber-600'
                          : 'text-zinc-800'
                      }`
                    }
                  >
                    Perfume
                  </NavLink>
                  <button
                    onClick={(e) => toggleMobileCategory('perfume', e)}
                    className="p-2.5 text-zinc-500 hover:text-amber-700"
                    aria-label="Toggle Perfume categories"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expandedMobileCategory === 'perfume' ? 'rotate-180 text-amber-600' : ''
                      }`}
                    />
                  </button>
                </div>

                {expandedMobileCategory === 'perfume' && (
                  <div className="pl-4 pr-2 py-2 ml-3 border-l-2 border-amber-300 space-y-1 bg-amber-50/40 rounded-r-lg">
                    {DROPDOWN_MENUS.perfume.items.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className="block py-1.5 px-2 text-xs text-zinc-700 hover:text-amber-900 rounded font-medium"
                      >
                        &bull; {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Others with Expandable Accordion */}
              <div>
                <div className="flex items-center justify-between rounded-md hover:bg-zinc-50">
                  <NavLink
                    to="/others"
                    className={({ isActive }) =>
                      `flex-1 px-3 py-2.5 text-base font-medium transition-colors ${
                        isActive
                          ? 'text-amber-800 font-semibold border-l-4 border-amber-600'
                          : 'text-zinc-800'
                      }`
                    }
                  >
                    Others
                  </NavLink>
                  <button
                    onClick={(e) => toggleMobileCategory('others', e)}
                    className="p-2.5 text-zinc-500 hover:text-amber-700"
                    aria-label="Toggle Others categories"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expandedMobileCategory === 'others' ? 'rotate-180 text-amber-600' : ''
                      }`}
                    />
                  </button>
                </div>

                {expandedMobileCategory === 'others' && (
                  <div className="pl-4 pr-2 py-2 ml-3 border-l-2 border-amber-300 space-y-1 bg-amber-50/40 rounded-r-lg">
                    {DROPDOWN_MENUS.others.items.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className="block py-1.5 px-2 text-xs text-zinc-700 hover:text-amber-900 rounded font-medium"
                      >
                        &bull; {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact */}
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block px-3 py-2.5 text-base font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-amber-50 text-amber-800 font-semibold border-l-4 border-amber-600'
                      : 'text-zinc-800 hover:bg-zinc-50'
                  }`
                }
              >
                Contact
              </NavLink>

              {/* Action buttons inside drawer */}
              <div className="pt-4 border-t border-zinc-100 mt-4 space-y-3">
                <Link
                  to="/contact"
                  className="w-full gold-shimmer-btn text-zinc-950 font-bold text-center text-sm tracking-wider uppercase py-3 rounded-lg shadow block"
                >
                  Enquire Now
                </Link>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <a
                    href={`tel:${COMPANY_DETAILS.primaryPhone.replace(/\s+/g, '')}`}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 bg-zinc-900 text-white rounded-lg text-xs font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Call Desk</span>
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-700 text-white rounded-lg text-xs font-medium"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-200" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
