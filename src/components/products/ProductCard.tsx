import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Product } from '../../types';
import { ArrowRight, FileText, CheckCircle2, Eye, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenQuote: (productName: string, categorySlug: string) => void;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenQuote,
  onQuickView,
}) => {
  const navigate = useNavigate();

  const handleCardClick = (e: React.MouseEvent) => {
    // Only navigate if click wasn't on an interactive child button
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a')) {
      return;
    }
    navigate(`/product/${product.slug}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white rounded-2xl border border-charcoal-200/90 shadow-subtle hover:shadow-card-hover hover:border-navy/40 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer relative"
    >
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] bg-warm-100 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent opacity-30 group-hover:opacity-60 transition-opacity" />

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold text-navy uppercase tracking-wider shadow-sm">
            {product.subCategory}
          </span>
          {product.isFeatured && (
            <span className="px-2.5 py-1 rounded-full bg-bronze-500 text-white text-[10px] font-semibold tracking-wide uppercase shadow-sm">
              Featured
            </span>
          )}
        </div>

        {/* Price & Specification Pill */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="inline-block px-2.5 py-1 rounded-md bg-navy-dark/90 backdrop-blur-md text-warm-100 text-[11px] font-medium tracking-wide shadow-sm">
            {product.samplePriceRange || 'Request Price'}
          </span>
        </div>

        {/* Hover Quick View Trigger */}
        {onQuickView && (
          <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="p-2 rounded-full bg-white/95 hover:bg-white text-navy shadow-md hover:scale-105 transition-all"
              title="Quick Summary Preview"
              aria-label="Quick Summary Preview"
            >
              <Eye size={15} className="text-bronze-600" />
            </button>
          </div>
        )}
      </div>

      {/* Main Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Category Supertitle */}
          <span className="text-[11px] font-bold text-bronze-600 uppercase tracking-widest block mb-1">
            {product.categoryName}
          </span>

          {/* Clean Legible Title */}
          <Link
            to={`/product/${product.slug}`}
            className="block font-display font-bold text-base text-charcoal-900 group-hover:text-navy transition-colors line-clamp-1 leading-snug"
            title={product.name}
          >
            {product.name}
          </Link>

          {/* Concise 1-Line Architectural Summary */}
          <p className="text-xs text-charcoal-600 line-clamp-2 mt-1.5 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Key Architectural Spec Chips (Clear & Readable) */}
          <div className="mt-3 pt-3 border-t border-charcoal-100 flex items-center gap-1.5 flex-wrap">
            {product.materials.slice(0, 2).map((m, idx) => (
              <span
                key={idx}
                className="text-[10px] font-medium bg-warm-100 text-charcoal-700 px-2 py-0.5 rounded"
              >
                {m}
              </span>
            ))}
            {product.specifications?.[0]?.value && (
              <span className="text-[10px] font-semibold bg-navy/5 text-navy px-2 py-0.5 rounded">
                {product.specifications[0].value}
              </span>
            )}
          </div>
        </div>

        {/* Action Button Row */}
        <div className="pt-2 flex items-center gap-2">
          {onQuickView ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-warm-100 hover:bg-navy hover:text-white text-navy font-semibold text-xs transition-colors"
            >
              <Eye size={13} className="text-bronze-600 group-hover:text-white" />
              <span>Quick Summary</span>
            </button>
          ) : (
            <Link
              to={`/product/${product.slug}`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-warm-100 hover:bg-navy hover:text-white text-navy font-semibold text-xs transition-colors"
            >
              <span>View Details</span>
              <ArrowRight size={13} />
            </Link>
          )}

          <Link
            to={`/product/${product.slug}`}
            className="inline-flex items-center justify-center p-2 rounded-lg bg-warm-200/80 hover:bg-warm-300 text-navy font-semibold text-xs transition-colors"
            title="Full Page Details"
            aria-label="Full Page Details"
          >
            <ArrowRight size={14} />
          </Link>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenQuote(product.name, product.categorySlug);
            }}
            className="inline-flex items-center justify-center p-2 rounded-lg bg-navy hover:bg-navy-dark text-white text-xs font-semibold shadow-sm transition-colors"
            title="Request Quotation"
            aria-label={`Request Quote for ${product.name}`}
          >
            <FileText size={15} className="text-bronze-300" />
          </button>
        </div>
      </div>
    </div>
  );
};
