import React, { useState, useEffect } from 'react';
import { Download, Plus, Database, Search, Filter, MessageSquare, Phone, Mail, Building, CheckCircle, Clock, Trash2, X } from 'lucide-react';
import { enquiryService } from '../services/enquiryService';
import type { EnquiryRecord } from '../services/enquiryService';
import { ALL_PRODUCTS } from '../data/companyData';
import type { ProductItem } from '../data/companyData';

export const AdminPreviewPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'enquiries' | 'products'>('enquiries');
  const [enquiries, setEnquiries] = useState<EnquiryRecord[]>([]);
  const [products, setProducts] = useState<ProductItem[]>(ALL_PRODUCTS);
  const [enquiryFilter, setEnquiryFilter] = useState<string>('ALL');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'Attar' as const,
    originOrType: '',
    description: '',
    availableOptions: '1 Tola, 50g Chips, Wholesale'
  });

  // Load enquiries
  useEffect(() => {
    setEnquiries(enquiryService.getEnquiries());
  }, []);

  const handleStatusChange = (id: string, status: EnquiryRecord['status']) => {
    const updated = enquiryService.updateStatus(id, status);
    setEnquiries([...updated]);
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.name) return;
    const created: ProductItem = {
      id: `custom-sku-${Date.now()}`,
      name: newProduct.name,
      category: newProduct.category,
      originOrType: newProduct.originOrType || 'Hyderabad Facility',
      description: newProduct.description || 'Prestige fragrance item configured via Admin portal.',
      details: ['Newly added SKU', 'Batch verification ready'],
      image: '/images/hero_fragrance.jpg',
      availableOptions: newProduct.availableOptions.split(',').map((s: string) => s.trim()),
      priceNote: 'Request Price / Get Wholesale Quote'
    };
    setProducts([created, ...products]);
    setIsAddModalOpen(false);
    setNewProduct({
      name: '',
      category: 'Attar',
      originOrType: '',
      description: '',
      availableOptions: '1 Tola, 50g Chips, Wholesale'
    });
  };

  const exportToCSV = () => {
    const headers = ["ID", "Name", "Company", "Phone", "Email", "Category", "Product", "Quantity", "Message", "Date", "Status"];
    const rows = enquiries.map((e: EnquiryRecord) => [
      e.id,
      `"${e.name.replace(/"/g, '""')}"`,
      `"${(e.company || '').replace(/"/g, '""')}"`,
      `"${e.phone}"`,
      `"${e.email}"`,
      `"${e.category}"`,
      `"${e.product}"`,
      `"${e.quantity}"`,
      `"${e.message.replace(/"/g, '""')}"`,
      `"${new Date(e.createdAt).toLocaleString()}"`,
      `"${e.status}"`
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map((r: string[]) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `barship_enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredEnquiries = enquiries.filter((enq: EnquiryRecord) => {
    if (enquiryFilter === 'ALL') return true;
    return enq.category === enquiryFilter || enq.status === enquiryFilter;
  });

  return (
    <div className="bg-zinc-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200 shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-700 font-cinzel text-xs font-bold uppercase tracking-wider">
              <Database className="w-4 h-4 text-amber-600" />
              <span>Enterprise Architecture Preview</span>
            </div>
            <h1 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-zinc-950 mt-1">
              BARSHIP Operations & Catalogue Management
            </h1>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1">
              Frontend data architecture ready for backend API / PostgreSQL / Supabase integration.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-zinc-100 p-1 rounded-xl self-start md:self-auto border border-zinc-200">
            <button
              onClick={() => setActiveTab('enquiries')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'enquiries'
                  ? 'bg-zinc-950 text-amber-300 shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              Enquiry Inquiries ({enquiries.length})
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'products'
                  ? 'bg-zinc-950 text-amber-300 shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              Catalogue ({products.length} Items)
            </button>
          </div>
        </div>

        {/* Tab 1: Enquiries Management */}
        {activeTab === 'enquiries' && (
          <div className="space-y-6">
            {/* Filter Bar */}
            <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-zinc-500 mr-2">Filter by:</span>
                {['ALL', 'New', 'Contacted', 'Attar', 'Perfume', 'Others'].map(f => (
                  <button
                    key={f}
                    onClick={() => setEnquiryFilter(f)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      enquiryFilter === f
                        ? 'bg-amber-600 text-white'
                        : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-zinc-500 font-medium">
                  {filteredEnquiries.length} enquiries displayed
                </span>
                <button
                  onClick={exportToCSV}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Export to CSV</span>
                </button>
              </div>
            </div>

            {/* Enquiries List */}
            {filteredEnquiries.length === 0 ? (
              <div className="bg-white p-12 rounded-2xl border border-zinc-200 text-center text-zinc-500 text-sm">
                No inquiries matching filter criteria. Submit an enquiry from the website to see it appear here!
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {filteredEnquiries.map((enq: EnquiryRecord) => (
                  <div key={enq.id} className="bg-white rounded-xl p-6 border border-zinc-200 shadow-xs space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                          {enq.id}
                        </span>
                        <h3 className="font-cinzel text-base font-bold text-zinc-950">
                          {enq.name}
                        </h3>
                        <span className="text-xs text-zinc-500">
                          ({enq.company || 'Individual'})
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full ${
                          enq.status === 'New' ? 'bg-emerald-100 text-emerald-800' :
                          enq.status === 'Contacted' ? 'bg-blue-100 text-blue-800' :
                          'bg-zinc-100 text-zinc-800'
                        }`}>
                          {enq.status}
                        </span>

                        <select
                          value={enq.status}
                          onChange={(e) => handleStatusChange(enq.id, e.target.value as any)}
                          className="text-xs border border-zinc-300 rounded px-2 py-1 bg-zinc-50"
                        >
                          <option value="New">Mark New</option>
                          <option value="Contacted">Mark Contacted</option>
                          <option value="Quoted">Mark Quoted</option>
                          <option value="Closed">Mark Closed</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs text-zinc-600">
                      <div>
                        <span className="text-zinc-400 block font-semibold text-[10px] uppercase">Phone:</span>
                        <a href={`tel:${enq.phone}`} className="font-mono font-medium text-zinc-900 hover:text-amber-700">
                          {enq.phone}
                        </a>
                      </div>
                      <div>
                        <span className="text-zinc-400 block font-semibold text-[10px] uppercase">Email:</span>
                        <a href={`mailto:${enq.email}`} className="text-zinc-900 hover:text-amber-700">
                          {enq.email}
                        </a>
                      </div>
                      <div>
                        <span className="text-zinc-400 block font-semibold text-[10px] uppercase">Category & Product:</span>
                        <span className="font-medium text-zinc-900">{enq.category} &bull; {enq.product}</span>
                      </div>
                      <div>
                        <span className="text-zinc-400 block font-semibold text-[10px] uppercase">Quantity:</span>
                        <span className="font-medium text-zinc-900">{enq.quantity}</span>
                      </div>
                    </div>

                    <div className="p-3 bg-zinc-50 rounded-lg text-xs text-zinc-700 border border-zinc-100">
                      <strong className="text-zinc-900 block mb-1">Requirement Note:</strong>
                      {enq.message}
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-1">
                      <span>Submitted: {new Date(enq.createdAt).toLocaleString()}</span>
                      <a 
                        href={`https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-1"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        Reply to Customer on WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Product Catalogue Architecture */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs font-semibold text-zinc-700">
                Database Schema: <code className="bg-zinc-100 px-2 py-0.5 rounded text-[11px] text-amber-800">id, name, category, originOrType, description, image, availability, createdAt</code>
              </span>
              <div className="flex items-center gap-3">
                <span className="text-xs text-zinc-500">
                  {products.length} live SKU records
                </span>
                <button
                  onClick={() => setIsAddModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Product SKU</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-zinc-700">
                  <thead className="bg-zinc-100 text-zinc-900 font-cinzel font-bold text-[11px] uppercase border-b border-zinc-200">
                    <tr>
                      <th className="p-4">SKU / ID</th>
                      <th className="p-4">Name</th>
                      <th className="p-4">Category</th>
                      <th className="p-4">Origin / Type</th>
                      <th className="p-4">Pricing Status</th>
                      <th className="p-4">Packaging Options</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    {products.map((p: ProductItem) => (
                      <tr key={p.id} className="hover:bg-zinc-50">
                        <td className="p-4 font-mono font-semibold text-amber-800">{p.id}</td>
                        <td className="p-4 font-medium text-zinc-950">{p.name}</td>
                        <td className="p-4">
                          <span className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-800 font-semibold text-[10px] uppercase">
                            {p.category}
                          </span>
                        </td>
                        <td className="p-4 text-zinc-500">{p.originOrType}</td>
                        <td className="p-4 text-amber-700 font-medium">{p.priceNote}</td>
                        <td className="p-4 text-zinc-500">{p.availableOptions.join(', ')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Add Product Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-zinc-200 relative animate-in fade-in">
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-cinzel text-xl font-bold text-zinc-950 mb-1">
              Add New Product SKU
            </h3>
            <p className="text-xs text-zinc-500 mb-6">
              Create a new entry in the local catalogue state.
            </p>

            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-800 mb-1">Product Name</label>
                <input
                  type="text"
                  required
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  placeholder="e.g. Royal Taif Rose Extrait"
                  className="w-full px-3 py-2 border border-zinc-300 rounded-lg text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-800 mb-1">Category</label>
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value as any })}
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg text-xs bg-white"
                  >
                    <option value="Attar">Attar</option>
                    <option value="Perfume">Perfume</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-800 mb-1">Origin / Subtype</label>
                  <input
                    type="text"
                    value={newProduct.originOrType}
                    onChange={(e) => setNewProduct({ ...newProduct, originOrType: e.target.value })}
                    placeholder="e.g. Saudi Taif / French"
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-800 mb-1">Description</label>
                <textarea
                  rows={3}
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  placeholder="Product fragrance profile and packaging details..."
                  className="w-full px-3 py-2 border border-zinc-300 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-800 mb-1">Available Formats (comma-separated)</label>
                <input
                  type="text"
                  value={newProduct.availableOptions}
                  onChange={(e) => setNewProduct({ ...newProduct, availableOptions: e.target.value })}
                  placeholder="e.g. 50ml, 100ml, Wholesale Bulk"
                  className="w-full px-3 py-2 border border-zinc-300 rounded-lg text-xs"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 border border-zinc-300 text-zinc-700 rounded-lg text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-semibold"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
