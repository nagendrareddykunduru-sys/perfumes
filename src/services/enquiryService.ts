export interface EnquiryRecord {
  id: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  category: string;
  product: string;
  quantity: string;
  message: string;
  createdAt: string;
  status: 'New' | 'Contacted' | 'Quoted' | 'Closed';
}

const STORAGE_KEY = 'barship_enquiries_v1';

export const enquiryService = {
  getEnquiries: (): EnquiryRecord[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        // Initial sample inquiries for demonstration
        const samples: EnquiryRecord[] = [
          {
            id: 'ENQ-1001',
            name: 'Mohammed Al Hashmi',
            company: 'Al Khaleej Fragrance Trading LLC',
            phone: '+971 50 123 4567',
            email: 'alhashmi@alkhaleejtrading.ae',
            category: 'Attar',
            product: 'Cambodia OUD Attar',
            quantity: '5 Kilograms',
            message: 'Looking for continuous monthly supply of Cambodian wild agarwood distillation for UAE luxury distribution.',
            createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
            status: 'Contacted'
          },
          {
            id: 'ENQ-1002',
            name: 'Vikram Singhania',
            company: 'Royal Aura Perfumery Ltd',
            phone: '+91 98201 54321',
            email: 'vikram@royalaura.in',
            category: 'Perfume',
            product: 'French Royal Extrait',
            quantity: '100 Bottles (50ml)',
            message: 'Inquiring about availability and delivery for a boutique luxury perfume collection in Hyderabad.',
            createdAt: new Date(Date.now() - 86400000).toISOString(),
            status: 'New'
          }
        ];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(samples));
        return samples;
      }
      return JSON.parse(data);
    } catch {
      return [];
    }
  },

  submitEnquiry: (data: Omit<EnquiryRecord, 'id' | 'createdAt' | 'status'>): EnquiryRecord => {
    const records = enquiryService.getEnquiries();
    const newRecord: EnquiryRecord = {
      ...data,
      id: `ENQ-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString(),
      status: 'New'
    };
    records.unshift(newRecord);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    } catch (e) {
      console.error('Error saving enquiry to localStorage:', e);
    }
    return newRecord;
  },

  updateStatus: (id: string, status: EnquiryRecord['status']) => {
    const records = enquiryService.getEnquiries();
    const updated = records.map(r => r.id === id ? { ...r, status } : r);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  }
};
