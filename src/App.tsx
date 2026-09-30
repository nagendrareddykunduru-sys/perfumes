import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { ScrollToTop } from './components/common/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AttarPage } from './pages/AttarPage';
import { PerfumePage } from './pages/PerfumePage';
import { PreciousBottlesPage } from './pages/PreciousBottlesPage';
import { OthersPage } from './pages/OthersPage';
import { RetailPage } from './pages/RetailPage';
import { ImportersExportersPage } from './pages/ImportersExportersPage';
import { DistributorsPage } from './pages/DistributorsPage';
import { CustomPerfumesPage } from './pages/CustomPerfumesPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsConditionsPage } from './pages/TermsConditionsPage';
import { AdminPreviewPage } from './pages/AdminPreviewPage';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-zinc-900 selection:bg-amber-100 selection:text-amber-900 font-sans">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/attar" element={<AttarPage />} />
            <Route path="/perfume" element={<PerfumePage />} />
            <Route path="/precious-bottles" element={<PreciousBottlesPage />} />
            <Route path="/bottles" element={<PreciousBottlesPage />} />
            <Route path="/others" element={<OthersPage />} />
            <Route path="/retail" element={<RetailPage />} />
            <Route path="/importers-exporters" element={<ImportersExportersPage />} />
            <Route path="/distributors" element={<DistributorsPage />} />
            <Route path="/custom-perfumes" element={<CustomPerfumesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-conditions" element={<TermsConditionsPage />} />
            <Route path="/admin-preview" element={<AdminPreviewPage />} />
            {/* Fallbacks for previous paths */}
            <Route path="/manufacturing" element={<HomePage />} />
            <Route path="/wholesale" element={<HomePage />} />
            <Route path="/products" element={<AttarPage />} />
            <Route path="/oud" element={<AttarPage />} />
            <Route path="/cosmetics" element={<OthersPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
