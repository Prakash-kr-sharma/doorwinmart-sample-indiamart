import React, { useState } from 'react';
import { Product } from '../../types';
import { Link } from 'react-router-dom';
import {
  X,
  CheckCircle2,
  FileText,
  MessageCircle,
  ArrowRight,
  Shield,
  Layers,
  Sparkles
} from 'lucide-react';

interface ProductQuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: (productName: string, categorySlug: string) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
  onOpenQuote,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedFinish, setSelectedFinish] = useState<string>('');

  if (!isOpen || !product) return null;

  const currentFinish = selectedFinish || (product.finishOptions?.[0]?.name ?? '');

  const whatsappMessage = encodeURIComponent(
    `Hello DoorWinMart, I am viewing ${product.name} (Category: ${product.categoryName}). I would like a quotation.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-charcoal-200 overflow-hidden z-50 my-auto animate-fadeIn max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="px-5 py-3.5 bg-navy text-white flex items-center justify-between border-b border-navy-light shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-bronze-400"></span>
            <span className="text-xs font-semibold text-warm-200 uppercase tracking-wider">
              {product.categoryName} • Quick View
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-warm-200 hover:text-white rounded-lg hover:bg-navy-light transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-7 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
            {/* Gallery Column */}
            <div className="space-y-3">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-warm-100 border border-charcoal-200/80 shadow-subtle">
                <img
                  src={product.images[selectedImageIndex] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-navy/90 text-white text-[10px] font-semibold uppercase backdrop-blur-sm">
                  {product.subCategory}
                </span>
              </div>

              {/* Thumbnail Strip */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                        selectedImageIndex === idx
                          ? 'border-navy ring-1 ring-navy'
                          : 'border-charcoal-200 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Sample Specs Preview */}
              <div className="bg-warm-50 rounded-xl p-3.5 border border-charcoal-200/70 text-xs space-y-1.5">
                <div className="flex items-center justify-between text-charcoal-500 font-semibold text-[11px] uppercase tracking-wider border-b border-charcoal-200 pb-1">
                  <span>Key Specifications</span>
                  <span className="text-bronze-600">Sample Specs</span>
                </div>
                {product.specifications.slice(0, 3).map((spec, idx) => (
                  <div key={idx} className="flex items-center justify-between text-[11px]">
                    <span className="text-charcoal-500">{spec.label}</span>
                    <span className="font-semibold text-charcoal-800">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info & Actions Column */}
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-bold text-bronze-600 uppercase tracking-widest block mb-1">
                  {product.subCategory}
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-navy leading-snug">
                  {product.name}
                </h3>
                <p className="text-xs text-charcoal-600 mt-2 leading-relaxed line-clamp-3">
                  {product.shortDescription}
                </p>
              </div>

              {/* Pricing Pill */}
              <div className="p-3 rounded-xl bg-warm-100 border border-charcoal-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-charcoal-500 block uppercase tracking-wider">Pricing</span>
                  <span className="font-display font-bold text-base text-navy">
                    {product.samplePriceRange || 'Request Price'}
                  </span>
                </div>
                <span className="text-[11px] text-charcoal-500 text-right">
                  Customized to dimensions
                </span>
              </div>

              {/* Finish Options */}
              {product.finishOptions && product.finishOptions.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-charcoal-700">Available Finish:</span>
                    <span className="font-semibold text-navy">{currentFinish}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {product.finishOptions.map((f) => (
                      <button
                        key={f.name}
                        onClick={() => setSelectedFinish(f.name)}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] border transition-all ${
                          currentFinish === f.name
                            ? 'border-navy bg-warm-100 font-semibold text-navy ring-1 ring-navy'
                            : 'border-charcoal-200 hover:border-charcoal-400 text-charcoal-600'
                        }`}
                      >
                        <span
                          className="w-3 h-3 rounded-full border border-black/20 shrink-0"
                          style={{ backgroundColor: f.colorCode }}
                        />
                        <span>{f.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Top Features */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-bold text-charcoal-700 uppercase tracking-wider block">
                  Top Highlights:
                </span>
                <ul className="space-y-1 text-xs text-charcoal-600">
                  {product.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 space-y-2 border-t border-charcoal-100">
                <button
                  onClick={() => {
                    onClose();
                    onOpenQuote(product.name, product.categorySlug);
                  }}
                  className="w-full py-2.5 px-4 bg-navy hover:bg-navy-dark text-white text-xs font-semibold rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <FileText size={15} className="text-bronze-300" />
                  <span>Request Instant Quotation</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp</span>
                  </a>

                  <Link
                    to={`/product/${product.slug}`}
                    onClick={onClose}
                    className="py-2.5 px-3 bg-warm-200 hover:bg-warm-300 text-navy text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1 text-center"
                  >
                    <span>Full Details Page</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
