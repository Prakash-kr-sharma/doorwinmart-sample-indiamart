import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { faqs } from '../data/faqs';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ProductCard } from '../components/products/ProductCard';
import {
  CheckCircle2,
  FileText,
  MessageCircle,
  Layers,
  Sparkles,
  ArrowRight,
  Send,
  CheckCircle,
  Maximize2,
  X,
  ChevronRight,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

interface ProductDetailPageProps {
  onOpenQuote: (productName: string, categorySlug: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onOpenQuote }) => {
  const { slug } = useParams<{ slug: string }>();

  const product = products.find((p) => p.slug === slug);

  // Gallery state
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  // Active Tab: 'overview' | 'specs' | 'inquiry' | 'faqs'
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'inquiry' | 'faqs'>('overview');

  // Selected Finish Swatch
  const [selectedFinish, setSelectedFinish] = useState<string>('');

  // Inline Quick Enquiry Form State
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryCity, setInquiryCity] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImageIndex(0);
    setActiveTab('overview');
    if (product && product.finishOptions && product.finishOptions.length > 0) {
      setSelectedFinish(product.finishOptions[0].name);
    }
  }, [slug, product]);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold text-navy mb-4">Product Not Found</h2>
        <p className="text-charcoal-600 mb-6">The architectural model you requested does not exist in our catalog.</p>
        <Link to="/products" className="px-6 py-2.5 bg-navy text-white text-xs font-semibold rounded-lg">
          Return to Catalog
        </Link>
      </div>
    );
  }

  // Related products from same category
  const relatedProducts = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  const handleInlineInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryPhone.trim()) return;
    setInquirySubmitted(true);
  };

  const currentFinishName = selectedFinish || product.finishOptions?.[0]?.name || '';

  const whatsappMessage = encodeURIComponent(
    `Hello DoorWinMart, I would like to enquire about the ${product.name} (Category: ${product.categoryName}). Please share details.`
  );

  return (
    <div className="bg-warm-50 min-h-screen pb-28 lg:pb-24">
      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-charcoal-200/80 py-3.5 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products', path: '/products' },
              { label: product.categoryName, path: `/category/${product.categorySlug}` },
              { label: product.name },
            ]}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {/* Mobile Header: Visible only on small/medium screens to give immediate context */}
        <div className="lg:hidden mb-6 space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-full bg-bronze-500/15 text-bronze-700 text-[11px] font-bold uppercase tracking-wider">
              {product.subCategory}
            </span>
            <span className="text-xs text-charcoal-400">•</span>
            <span className="text-xs text-charcoal-600 font-medium">
              {product.categoryName}
            </span>
          </div>

          <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-navy tracking-tight leading-tight">
            {product.name}
          </h1>

          <div className="flex items-center justify-between pt-1">
            <span className="text-xs font-semibold text-charcoal-500">
              Pricing: <strong className="text-navy text-sm font-bold">{product.samplePriceRange || 'Request Price'}</strong>
            </span>
            <span className="text-[11px] text-charcoal-500 bg-warm-200/60 px-2 py-0.5 rounded">
              Custom Dimensions
            </span>
          </div>
        </div>

        {/* Main Product Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Image Gallery & Content Tabs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Gallery Stage */}
            <div className="space-y-3">
              <div
                onClick={() => setIsZoomOpen(true)}
                className="relative aspect-[4/3] bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-charcoal-200/80 shadow-subtle group cursor-pointer"
                title="Click to zoom image"
              >
                <img
                  src={product.images[selectedImageIndex] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                />

                {/* Overlay Tags */}
                <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-navy uppercase shadow-sm">
                    {product.subCategory}
                  </span>
                  {product.isFeatured && (
                    <span className="px-3 py-1 rounded-full bg-bronze-500 text-white text-[11px] font-semibold uppercase shadow-sm">
                      Featured Model
                    </span>
                  )}
                </div>

                {/* Zoom Trigger Button */}
                <div className="absolute bottom-3.5 right-3.5">
                  <button
                    type="button"
                    className="p-2.5 rounded-xl bg-white/90 hover:bg-white text-navy shadow-md backdrop-blur-sm transition-transform active:scale-95 flex items-center gap-1.5 text-xs font-semibold"
                  >
                    <Maximize2 size={14} className="text-bronze-600" />
                    <span className="hidden sm:inline">Zoom</span>
                  </button>
                </div>

                {/* Image Index Indicator */}
                <div className="absolute bottom-3.5 left-3.5">
                  <span className="px-2.5 py-1 rounded-lg bg-navy-dark/80 backdrop-blur-sm text-white text-[11px] font-medium tracking-wide">
                    {selectedImageIndex + 1} / {product.images.length}
                  </span>
                </div>
              </div>

              {/* Thumbnails Row */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-2.5 overflow-x-auto pb-1 pt-0.5">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-20 h-20 sm:w-24 sm:h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                        selectedImageIndex === idx
                          ? 'border-navy ring-2 ring-navy/20 shadow-md'
                          : 'border-charcoal-200/90 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Actions: Buttons displayed right under images on mobile for fast response */}
            <div className="lg:hidden bg-white p-5 rounded-2xl border border-charcoal-200/80 shadow-subtle space-y-3">
              <button
                onClick={() => onOpenQuote(product.name, product.categorySlug)}
                className="w-full py-3.5 px-4 bg-navy hover:bg-navy-dark text-white text-xs font-semibold rounded-xl shadow-card transition-all flex items-center justify-center gap-2"
              >
                <FileText size={16} className="text-bronze-300" />
                <span>Request an Itemized Quote</span>
              </button>

              <a
                href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                <span>Enquire on WhatsApp Instantly</span>
              </a>
            </div>

            {/* Content Tabs Navigation */}
            <div className="bg-white rounded-2xl border border-charcoal-200/80 shadow-subtle overflow-hidden">
              <div className="flex items-center border-b border-charcoal-100 overflow-x-auto bg-warm-100/60 p-1.5 gap-1">
                {[
                  { id: 'overview', label: 'Overview & Features' },
                  { id: 'specs', label: 'Technical Specifications' },
                  { id: 'inquiry', label: 'Quick Inquiry' },
                  { id: 'faqs', label: 'System FAQs' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                      activeTab === tab.id
                        ? 'bg-white text-navy shadow-sm font-bold'
                        : 'text-charcoal-600 hover:text-navy hover:bg-white/50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Contents */}
              <div className="p-6 sm:p-8">
                {/* Tab 1: Overview & Features */}
                {activeTab === 'overview' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div>
                      <h3 className="font-display font-bold text-lg text-navy mb-2">
                        Architectural Overview
                      </h3>
                      <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                        {product.fullDescription}
                      </p>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-charcoal-100">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-800">
                        Performance Highlights
                      </h4>
                      <ul className="grid grid-cols-1 gap-2.5">
                        {product.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                            <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-charcoal-100">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-2">
                          Materials & Construction
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {product.materials.map((m, idx) => (
                            <span key={idx} className="px-2.5 py-1 rounded bg-warm-100 text-charcoal-700 text-xs font-medium">
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-2">
                          Suitable Spaces
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {product.applications.map((app, idx) => (
                            <span key={idx} className="px-2.5 py-1 rounded-full bg-navy/5 text-navy text-xs font-medium border border-navy/10">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Technical Specifications */}
                {activeTab === 'specs' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between pb-2 border-b border-charcoal-100">
                      <div className="flex items-center gap-2">
                        <Layers size={16} className="text-navy" />
                        <h3 className="font-display font-bold text-base text-navy">
                          Technical Engineering Parameters
                        </h3>
                      </div>
                      <span className="text-[10px] font-semibold text-bronze-600 uppercase bg-warm-100 px-2.5 py-0.5 rounded-full">
                        Sample Data
                      </span>
                    </div>

                    <p className="text-xs text-charcoal-500 leading-relaxed">
                      * Tolerances and ratings are configured according to custom site elevations, structural wind pressures, and acoustic glass schedules.
                    </p>

                    <div className="divide-y divide-charcoal-100 border border-charcoal-100 rounded-xl overflow-hidden mt-3">
                      {product.specifications.map((spec, index) => (
                        <div
                          key={index}
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 text-xs hover:bg-warm-50 transition-colors gap-1 sm:gap-4"
                        >
                          <span className="text-charcoal-500 font-medium sm:w-1/2">{spec.label}</span>
                          <span className="font-semibold text-charcoal-900 sm:w-1/2 sm:text-right">{spec.value}</span>
                        </div>
                      ))}
                      {product.openingStyle && (
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 text-xs hover:bg-warm-50 transition-colors gap-1 sm:gap-4">
                          <span className="text-charcoal-500 font-medium sm:w-1/2">Opening Style</span>
                          <span className="font-semibold text-charcoal-900 sm:w-1/2 sm:text-right">{product.openingStyle}</span>
                        </div>
                      )}
                      {product.dimensionsSample && (
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 text-xs hover:bg-warm-50 transition-colors gap-1 sm:gap-4">
                          <span className="text-charcoal-500 font-medium sm:w-1/2">Sizing Parameters</span>
                          <span className="font-semibold text-charcoal-900 sm:w-1/2 sm:text-right">{product.dimensionsSample}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Tab 3: Quick Inquiry Form */}
                {activeTab === 'inquiry' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center gap-2">
                      <Sparkles size={16} className="text-bronze-600" />
                      <h3 className="font-display font-bold text-base text-navy">
                        Inquire About {product.name}
                      </h3>
                    </div>

                    {inquirySubmitted ? (
                      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-3">
                        <CheckCircle size={32} className="text-emerald-600 mx-auto" />
                        <h4 className="font-display font-bold text-base">Inquiry Logged (Frontend Demo)</h4>
                        <p className="text-xs text-emerald-700 max-w-sm mx-auto leading-relaxed">
                          Thank you, {inquiryName}. Your details for {product.name} have been simulated. In production, this directly notifies our architectural sales desk.
                        </p>
                        <button
                          onClick={() => setInquirySubmitted(false)}
                          className="px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
                        >
                          Send Another Note
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleInlineInquiry} className="space-y-3.5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          <div>
                            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                              Your Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Ar. Sunita Varma"
                              value={inquiryName}
                              onChange={(e) => setInquiryName(e.target.value)}
                              className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-charcoal-200 focus:outline-none focus:border-navy"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                              Phone / WhatsApp <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder="+91 98765 43210"
                              value={inquiryPhone}
                              onChange={(e) => setInquiryPhone(e.target.value)}
                              className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-charcoal-200 focus:outline-none focus:border-navy"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                            City / Project Location
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Gurugram, Mumbai, Delhi"
                            value={inquiryCity}
                            onChange={(e) => setInquiryCity(e.target.value)}
                            className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-charcoal-200 focus:outline-none focus:border-navy"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                            Dimensions & Glass Preferences
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Mention opening width x height, double glazing, or finish requirements..."
                            value={inquiryMessage}
                            onChange={(e) => setInquiryMessage(e.target.value)}
                            className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-charcoal-200 focus:outline-none focus:border-navy resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3 px-4 bg-navy hover:bg-navy-dark text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                        >
                          <Send size={14} />
                          <span>Submit Model Inquiry</span>
                        </button>
                      </form>
                    )}
                  </div>
                )}

                {/* Tab 4: FAQs */}
                {activeTab === 'faqs' && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="font-display font-bold text-base text-navy">
                      Frequently Asked Questions
                    </h3>
                    <div className="divide-y divide-charcoal-100">
                      {faqs.map((faq) => (
                        <details key={faq.id} className="group py-3 cursor-pointer">
                          <summary className="flex items-center justify-between text-xs sm:text-sm font-semibold text-charcoal-900 list-none group-hover:text-navy">
                            <span>{faq.question}</span>
                            <ChevronDown size={14} className="text-charcoal-400 group-open:rotate-180 transition-transform" />
                          </summary>
                          <p className="mt-2 text-xs text-charcoal-600 leading-relaxed pr-4">
                            {faq.answer}
                          </p>
                        </details>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Consultation & Quotation Sidebar (Desktop 5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <div className="bg-white rounded-3xl border border-charcoal-200/80 p-6 sm:p-8 shadow-subtle space-y-6">
              {/* Desktop Header Info */}
              <div className="hidden lg:block">
                <span className="text-[11px] font-bold uppercase tracking-wider text-bronze-600 block mb-1">
                  {product.categoryName} • {product.subCategory}
                </span>
                <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-navy tracking-tight leading-snug">
                  {product.name}
                </h1>
                <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              {/* Price Consultation Pill */}
              <div className="p-4 rounded-2xl bg-warm-100 border border-charcoal-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-charcoal-500 uppercase tracking-wider block">Commercial Pricing:</span>
                  <span className="font-display font-bold text-lg text-navy">
                    {product.samplePriceRange || 'Request Price'}
                  </span>
                </div>
                <span className="text-[11px] text-charcoal-600 text-right max-w-[150px]">
                  Configured to site dimensions
                </span>
              </div>

              {/* Finish & Color Swatches Selector */}
              {product.finishOptions && product.finishOptions.length > 0 && (
                <div className="space-y-3 pt-2 border-t border-charcoal-100">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800">
                      Sample Finish:
                    </label>
                    <span className="text-xs font-bold text-navy">
                      {currentFinishName}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    {product.finishOptions.map((finish) => (
                      <button
                        key={finish.name}
                        onClick={() => setSelectedFinish(finish.name)}
                        className={`group flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs transition-all ${
                          currentFinishName === finish.name
                            ? 'border-navy bg-warm-100 font-bold text-navy ring-1 ring-navy'
                            : 'border-charcoal-200 hover:border-charcoal-400 text-charcoal-700'
                        }`}
                        title={finish.name}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/20 shrink-0"
                          style={{ backgroundColor: finish.colorCode }}
                        />
                        <span className="text-[11px]">{finish.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Primary Call to Action Buttons */}
              <div className="pt-3 space-y-3 border-t border-charcoal-100">
                <button
                  onClick={() => onOpenQuote(product.name, product.categorySlug)}
                  className="w-full py-4 px-4 bg-navy hover:bg-navy-dark text-white text-xs font-semibold rounded-xl shadow-card hover:shadow-card-hover transition-all flex items-center justify-center gap-2 group"
                >
                  <FileText size={16} className="text-bronze-300 group-hover:rotate-6 transition-transform" />
                  <span>Request an Itemized Quote for this Model</span>
                </button>

                <a
                  href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} />
                  <span>Enquire on WhatsApp Instantly</span>
                </a>
              </div>

              {/* Architectural Confidence Points */}
              <div className="pt-4 border-t border-charcoal-100 space-y-2 text-xs text-charcoal-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-bronze-600 shrink-0" />
                  <span>Precision Engineered Multi-Point Locking</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-bronze-600 shrink-0" />
                  <span>Acoustic Double & Triple Glazing Options</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-bronze-600 shrink-0" />
                  <span>Custom Sizing to Exact Millimeter Tolerances</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Recommendations Grid */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-charcoal-200 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-bronze-600">
                  Related Recommendations
                </span>
                <h3 className="font-display font-extrabold text-2xl text-navy mt-1">
                  More from {product.categoryName}
                </h3>
              </div>
              <Link
                to={`/category/${product.categorySlug}`}
                className="text-xs font-semibold text-navy hover:text-bronze-600 flex items-center gap-1"
              >
                <span>View Full Category</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProd) => (
                <ProductCard
                  key={relProd.id}
                  product={relProd}
                  onOpenQuote={onOpenQuote}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Image Lightbox Modal */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
            onClick={() => setIsZoomOpen(false)}
          />
          <button
            onClick={() => setIsZoomOpen(false)}
            className="fixed top-5 right-5 z-50 p-2 rounded-full bg-white/20 text-white hover:bg-white/30"
          >
            <X size={24} />
          </button>
          <div className="relative z-50 max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl">
            <img
              src={product.images[selectedImageIndex] || product.images[0]}
              alt={product.name}
              className="max-w-full max-h-[85vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}

      {/* Mobile Sticky Bottom Floating Action Bar: Guaranteed response on any screen size */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-charcoal-200 p-3 sm:p-4 lg:hidden shadow-elevated">
        <div className="max-w-md mx-auto flex items-center justify-between gap-3">
          <div className="truncate">
            <div className="text-[10px] text-charcoal-500 uppercase tracking-wider truncate">
              {product.name}
            </div>
            <div className="text-xs font-bold text-navy truncate">
              {product.samplePriceRange || 'Request Price'}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`https://wa.me/919876543210?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
              title="WhatsApp"
            >
              <MessageCircle size={16} />
            </a>

            <button
              onClick={() => onOpenQuote(product.name, product.categorySlug)}
              className="px-4 py-2.5 rounded-lg bg-navy hover:bg-navy-dark text-white text-xs font-semibold shadow-sm transition-colors flex items-center gap-1.5"
            >
              <FileText size={14} className="text-bronze-300" />
              <span>Quote</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
