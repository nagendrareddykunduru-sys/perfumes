import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, AlertCircle, Building, User, Mail, Phone, Layers, Package, FileText } from 'lucide-react';
import { enquiryService } from '../../services/enquiryService';
import { COMPANY_DETAILS, getWhatsAppUrl } from '../../data/companyData';

interface ContactFormProps {
  initialCategory?: string;
  initialProduct?: string;
  title?: string;
  subtitle?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialCategory = 'Wholesale',
  initialProduct = '',
  title = 'Send Business Enquiry',
  subtitle = 'Submit your requirements for retail, wholesale supply, or turnkey contract manufacturing.'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    category: initialCategory,
    product: initialProduct,
    quantity: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedId, setSubmittedId] = useState<string>('');

  const categories = [
    'Attar',
    'Perfume',
    'Others',
    'Manufacturing',
    'Wholesale',
    'Retail',
    'Imports & Exports',
    'Distributors'
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s()]{7,20}$/.test(formData.phone)) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.category) errs.category = 'Please select a category';
    if (!formData.message.trim()) errs.message = 'Please provide details of your requirement';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const record = enquiryService.submitEnquiry({
        name: formData.name,
        company: formData.company || 'Individual / Retail Buyer',
        phone: formData.phone,
        email: formData.email,
        category: formData.category,
        product: formData.product || 'General Catalogue / Custom',
        quantity: formData.quantity || 'Standard Requirement',
        message: formData.message
      });

      setSubmittedId(record.id);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      category: 'Wholesale',
      product: '',
      quantity: '',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    const whatsappText = `Hello BARSHIP Fragrances,\nI just submitted enquiry [${submittedId}] for ${formData.category} (${formData.product || 'General'}).\nName: ${formData.name}\nCompany: ${formData.company || 'N/A'}\nQuantity: ${formData.quantity || 'Standard'}\nMessage: ${formData.message}`;
    const whatsappLink = `https://wa.me/${COMPANY_DETAILS.primaryWhatsAppRaw}?text=${encodeURIComponent(whatsappText)}`;

    return (
      <div className="bg-white rounded-2xl p-8 border border-amber-300 shadow-xl text-center animate-in fade-in duration-300">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="font-cinzel text-2xl font-bold text-zinc-950">Thank you. Your enquiry has been submitted.</h3>
        <p className="mt-2 text-sm text-zinc-600 max-w-md mx-auto">
          Reference Number: <strong className="text-amber-800 font-mono">{submittedId}</strong>. Our executive team will review your requirements and respond within 24 business hours.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold uppercase tracking-wider shadow-sm transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Forward to WhatsApp for Immediate Reply</span>
          </a>
          <button
            onClick={handleReset}
            className="w-full sm:w-auto px-6 py-3 border border-zinc-300 hover:bg-zinc-50 text-zinc-800 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200 shadow-xl relative">
      <div className="mb-6">
        <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-zinc-950">{title}</h3>
        <p className="mt-1 text-xs sm:text-sm text-zinc-600">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Row 1: Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-800 mb-1 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-amber-600" />
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. MM Hussain"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm bg-zinc-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
                errors.name ? 'border-red-400' : 'border-zinc-300'
              }`}
            />
            {errors.name && <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-800 mb-1 flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-amber-600" />
              Company / Brand Name
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g. Royal Fragrances LLC (Optional)"
              className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-xs sm:text-sm bg-zinc-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
            />
          </div>
        </div>

        {/* Row 2: Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-800 mb-1 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. +91 91332 33528"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm bg-zinc-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
                errors.phone ? 'border-red-400' : 'border-zinc-300'
              }`}
            />
            {errors.phone && <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-800 mb-1 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-amber-600" />
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. yourname@domain.com"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm bg-zinc-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
                errors.email ? 'border-red-400' : 'border-zinc-300'
              }`}
            />
            {errors.email && <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
          </div>
        </div>

        {/* Row 3: Interested Category & Specific Product */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-800 mb-1 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-amber-600" />
              Interested Category <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-xs sm:text-sm bg-zinc-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-800 mb-1 flex items-center gap-1.5">
              <Package className="w-3.5 h-3.5 text-amber-600" />
              Product / Service
            </label>
            <input
              type="text"
              value={formData.product}
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              placeholder="e.g. Cambodian OUD / Custom Flacon"
              className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-xs sm:text-sm bg-zinc-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
            />
          </div>
        </div>

        {/* Row 4: Quantity */}
        <div>
          <label className="block text-xs font-semibold text-zinc-800 mb-1">
            Estimated Quantity / Batch Size
          </label>
          <input
            type="text"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            placeholder="e.g. 5 Tolas, 25 Kilograms, or 1,000 Custom Bottles"
            className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-xs sm:text-sm bg-zinc-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
          />
        </div>

        {/* Row 5: Message */}
        <div>
          <label className="block text-xs font-semibold text-zinc-800 mb-1 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-amber-600" />
            Requirement Details / Specifications <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Please describe your requirements, specifications, target delivery timeline, or questions for our specialists..."
            className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm bg-zinc-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
              errors.message ? 'border-red-400' : 'border-zinc-300'
            }`}
          />
          {errors.message && <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full gold-shimmer-btn text-zinc-950 font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70 transition-all cursor-pointer"
          >
            {isSubmitting ? (
              <span className="inline-block animate-spin mr-2 border-2 border-zinc-950 border-t-transparent rounded-full w-4 h-4" />
            ) : (
              <Send className="w-4 h-4 text-zinc-950" />
            )}
            <span>{isSubmitting ? 'Processing Enquiry...' : 'Send Enquiry'}</span>
          </button>
        </div>

        <p className="text-[11px] text-zinc-400 text-center pt-2">
          Your information is protected under our confidentiality policy. You can also call us directly at <span className="text-zinc-700 font-semibold">{COMPANY_DETAILS.primaryPhone}</span>.
        </p>
      </form>
    </div>
  );
};
