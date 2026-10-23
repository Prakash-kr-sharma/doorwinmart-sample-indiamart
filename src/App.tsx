import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnnouncementBar } from './components/common/AnnouncementBar';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { WhatsAppFloating } from './components/common/WhatsAppFloating';
import { BackToTop } from './components/common/BackToTop';
import { QuickQuoteModal } from './components/common/QuickQuoteModal';
import { SearchModal } from './components/common/SearchModal';

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { QuotePage } from './pages/QuotePage';
import { NotFoundPage } from './pages/NotFoundPage';

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [quotePrefillProduct, setQuotePrefillProduct] = useState<string | undefined>();
  const [quotePrefillCategory, setQuotePrefillCategory] = useState<string | undefined>();

  const handleOpenQuote = (productName?: string, categorySlug?: string) => {
    setQuotePrefillProduct(productName);
    setQuotePrefillCategory(categorySlug);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
    setQuotePrefillProduct(undefined);
    setQuotePrefillCategory(undefined);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-warm-50 text-charcoal-900 selection:bg-brand-100 selection:text-navy">
        <AnnouncementBar />
        <Header
          onOpenQuote={handleOpenQuote}
          onOpenSearch={() => setIsSearchModalOpen(true)}
        />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenQuote={handleOpenQuote} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/category/:slug" element={<ProductsPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/product/:slug" element={<ProductDetailPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/services" element={<ServicesPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        <Footer />
        <WhatsAppFloating />
        <BackToTop />

        {/* Global Modals */}
        <QuickQuoteModal
          isOpen={isQuoteModalOpen}
          onClose={handleCloseQuote}
          prefilledProduct={quotePrefillProduct}
          prefilledCategory={quotePrefillCategory}
        />

        <SearchModal
          isOpen={isSearchModalOpen}
          onClose={() => setIsSearchModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
