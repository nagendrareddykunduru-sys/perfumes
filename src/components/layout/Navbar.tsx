import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, ChevronDown } from 'lucide-react';
import { BarshipLogo } from '../common/BarshipLogo';
import { COMPANY_DETAILS, getWhatsAppUrl } from '../../data/companyData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Attar', path: '/attar' },
    { name: 'Perfume', path: '/perfume' },
    { name: 'Others', path: '/others' },
    { name: 'Manufacturing', path: '/manufacturing' },
    { name: 'Wholesale', path: '/wholesale' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-zinc-950 text-zinc-300 text-xs py-2 px-4 border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="text-amber-400 font-semibold tracking-wider uppercase">Hyderabad &bull; UAE</span>
            <span className="hidden md:inline text-zinc-500">|</span>
            <span className="hidden md:inline text-zinc-300">Retail & Wholesale &bull; Imports & Exports &bull; Custom Manufacturing</span>
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
              <span>WhatsApp B2B</span>
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
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
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
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
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
              {navLinks.map((link) => (
                <div key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block px-3 py-2.5 text-base font-medium rounded-md transition-colors ${
                        isActive
                          ? 'bg-amber-50 text-amber-800 font-semibold border-l-4 border-amber-600'
                          : 'text-zinc-800 hover:bg-zinc-50'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </div>
              ))}

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
