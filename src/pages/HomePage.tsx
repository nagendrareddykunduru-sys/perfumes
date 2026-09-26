import React, { useState } from 'react';
import { Hero } from '../components/home/Hero';
import { BusinessCategories } from '../components/home/BusinessCategories';
import { HomeProductsPreview } from '../components/home/HomeProductsPreview';
import { ManufacturingSection } from '../components/home/ManufacturingSection';
import { WholesaleSection } from '../components/home/WholesaleSection';
import { AboutSection } from '../components/home/AboutSection';
import { ContactForm } from '../components/common/ContactForm';
import { MapPin, Phone, Clock } from 'lucide-react';
import type { ProductItem } from '../data/companyData';
import { COMPANY_DETAILS } from '../data/companyData';

export const HomePage: React.FC = () => {
  const [modalEnquiryProduct, setModalEnquiryProduct] = useState<ProductItem | null>(null);

  const handleOpenEnquiry = (prod?: ProductItem) => {
    if (prod) {
      setModalEnquiryProduct(prod);
    }
    // Scroll smoothly to contact section if general
    const contactElem = document.getElementById('contact-form-section');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Business Categories Section (6 Pillars) */}
      <BusinessCategories />

      {/* 3. Featured Showcase (Tabs for Attar, Perfume, Others, Manufacturing) */}
      <HomeProductsPreview onOpenEnquiryModal={handleOpenEnquiry} />

      {/* 4. Custom Manufacturing Section with Process Roadmap */}
      <ManufacturingSection />

      {/* 5. Wholesale Solutions Section */}
      <WholesaleSection />

      {/* 6. About Section */}
      <AboutSection />

      {/* 7. Quick Visit & Contact Info Banner */}
      <section className="py-16 bg-zinc-900 text-white relative border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 rounded-xl bg-zinc-950/60 border border-zinc-800">
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0 border border-amber-500/20">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-cinzel text-sm font-bold text-white mb-1">Showroom & Store</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {COMPANY_DETAILS.locations.showroom.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl bg-zinc-950/60 border border-zinc-800">
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0 border border-amber-500/20">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-cinzel text-sm font-bold text-white mb-1">Direct Communication</h4>
                <p className="text-xs text-zinc-300 font-semibold">
                  {COMPANY_DETAILS.primaryPhone}
                </p>
                <p className="text-[11px] text-zinc-400 mt-0.5">
                  UAE Operations: +971 52 722 6677
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl bg-zinc-950/60 border border-zinc-800">
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0 border border-amber-500/20">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-cinzel text-sm font-bold text-white mb-1">Business Hours</h4>
                <p className="text-xs text-zinc-400">
                  Monday – Saturday: 10:30 AM – 9:30 PM
                </p>
                <p className="text-[11px] text-amber-400 mt-1">
                  Sunday: Showroom Open for Visitors
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Full Interactive Contact & Inquiry Section */}
      <section id="contact-form-section" className="py-20 bg-zinc-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-700">
              Connect With Us
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight mt-1">
              Start Your Fragrance Consultation
            </h2>
            <p className="mt-3 text-sm text-zinc-600">
              Whether you are an individual perfume enthusiast, a wholesale buyer, or an entrepreneur planning a private label fragrance line, our team in Hyderabad is ready to assist.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactForm
              initialCategory={modalEnquiryProduct ? modalEnquiryProduct.category : 'Wholesale'}
              initialProduct={modalEnquiryProduct ? modalEnquiryProduct.name : ''}
              title="Direct Business Enquiry"
              subtitle="Specify your details below to receive product catalogues and volume price quotes."
            />
          </div>
        </div>
      </section>
    </div>
  );
};
