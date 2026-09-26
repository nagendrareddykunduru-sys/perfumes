import React from 'react';
import { Phone, Mail, MapPin, Globe, MessageSquare, Building2, User, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ContactForm } from '../components/common/ContactForm';
import { COMPANY_DETAILS, getWhatsAppUrl } from '../data/companyData';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-zinc-950 text-white py-16 sm:py-24 relative border-b border-amber-500/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-800/25 via-zinc-950 to-zinc-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-400">
            Official Directory & Enquiries
          </span>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
            CONTACT US
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
            BARSHIP FRAGRANCES &bull; Baron Perfumes &bull; Zohran Perfumes &bull; Hyderabad, Telangana
          </p>
        </div>
      </section>

      {/* Quick Action Buttons Row */}
      <section className="py-6 bg-zinc-100 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${COMPANY_DETAILS.primaryPhone.replace(/\s+/g, '')}`}
              className="px-6 py-3 bg-zinc-950 hover:bg-zinc-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Now ({COMPANY_DETAILS.primaryPhone})</span>
            </a>

            <a
              href={`mailto:${COMPANY_DETAILS.primaryEmail}`}
              className="px-6 py-3 bg-white hover:bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-xs transition-all"
            >
              <Mail className="w-4 h-4 text-amber-600" />
              <span>Email Us ({COMPANY_DETAILS.primaryEmail})</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Grid: Detailed Contact Information + Interactive Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Official Contact Card Details */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Official Office Locations */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200 shadow-sm space-y-6">
                <div className="border-b border-zinc-100 pb-4">
                  <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-700">
                    Official Addresses
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-zinc-950 mt-1">
                    Offices & Showrooms
                  </h3>
                </div>

                {/* Corporate Office */}
                <div className="space-y-1">
                  <div className="flex items-start gap-2.5">
                    <Building2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-cinzel text-xs font-bold uppercase text-zinc-900">Corporate Office</h4>
                      <p className="text-xs text-zinc-600 leading-relaxed mt-1">
                        {COMPANY_DETAILS.locations.corporate.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Retail Showroom */}
                <div className="space-y-1 pt-4 border-t border-zinc-100">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-cinzel text-xs font-bold uppercase text-zinc-900">
                        Retail & Wholesale Showroom
                      </h4>
                      <p className="text-[11px] text-amber-800 font-semibold mt-0.5">
                        {COMPANY_DETAILS.locations.showroom.subtitle}
                      </p>
                      <p className="text-xs text-zinc-600 leading-relaxed mt-1">
                        {COMPANY_DETAILS.locations.showroom.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* International Desk */}
                <div className="space-y-1 pt-4 border-t border-zinc-100">
                  <div className="flex items-start gap-2.5">
                    <Globe className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-cinzel text-xs font-bold uppercase text-zinc-900">
                        International Export Desk
                      </h4>
                      <p className="text-xs text-zinc-600 leading-relaxed mt-1">
                        Dubai, United Arab Emirates &bull; Mobile: <strong className="text-zinc-950">+971 52 722 6677</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Personnel & Phone Directory */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200 shadow-sm space-y-6">
                <div className="border-b border-zinc-100 pb-4">
                  <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-700">
                    Personnel Directory
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-zinc-950 mt-1">
                    Direct Team Contacts
                  </h3>
                </div>

                <div className="space-y-4">
                  {COMPANY_DETAILS.phones.map((person, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-2 border-b border-zinc-50 last:border-none">
                      <div>
                        <strong className="text-zinc-900 block font-medium">{person.name}</strong>
                        <span className="text-[11px] text-zinc-500">{person.role}</span>
                      </div>
                      <a
                        href={`tel:${person.number.replace(/\s+/g, '')}`}
                        className="font-mono font-semibold text-amber-900 hover:text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200"
                      >
                        {person.number}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emails & Legal Info */}
              <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200 text-xs space-y-3">
                <div>
                  <span className="font-cinzel text-zinc-400 uppercase tracking-wider block font-bold text-[10px]">
                    Verified Emails
                  </span>
                  <div className="space-y-1 mt-1 font-mono text-zinc-700">
                    {COMPANY_DETAILS.emails.map((em, idx) => (
                      <a key={idx} href={`mailto:${em}`} className="block hover:text-amber-700">
                        {em}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-200">
                  <span className="font-cinzel text-zinc-400 uppercase tracking-wider block font-bold text-[10px]">
                    GSTIN Registration
                  </span>
                  <p className="font-mono text-zinc-900 font-bold mt-0.5">
                    {COMPANY_DETAILS.gstin}
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Enquiry Form */}
            <div className="lg:col-span-7">
              <ContactForm
                title="Send An Enquiry Directly"
                subtitle="Fill out your requirements below and our Hyderabad commercial desk will connect with you."
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
