import React, { useState } from 'react';
import { products } from '../../data/products';
import { Product } from '../../types';
import { ProductCard } from '../products/ProductCard';
import { ProductQuickViewModal } from '../products/ProductQuickViewModal';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

interface FeaturedProductsSectionProps {
  onOpenQuote: (productName: string, categorySlug: string) => void;
}

export const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Featured' },
    { id: 'upvc-doors-windows', label: 'UPVC Systems' },
    { id: 'sliding-doors-windows', label: 'Sliding Systems' },
    { id: 'aluminium-products', label: 'Aluminium' },
    { id: 'glass-partitions', label: 'Glass Partitions' },
    { id: 'shower-partitions-cubicles', label: 'Shower Cubicles' },
    { id: 'blinds-shading-solutions', label: 'Blinds & Shading' },
  ];

  const featuredList = products.filter((p) => p.isFeatured || true);

  const displayedProducts = activeTab === 'all'
    ? featuredList.slice(0, 8)
    : featuredList.filter((p) => p.categorySlug === activeTab);

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-charcoal-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-bronze-600 bg-warm-100 px-3 py-1 rounded-full">
            <Sparkles size={13} />
            <span>Curated Architectural Range</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-navy tracking-tight">
            Featured Architectural Solutions
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            High-performance casements, large-format patio sliders, acoustic frameless office partitions, and custom shower cubicles.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-navy text-white shadow-sm'
                  : 'bg-warm-100 text-charcoal-700 hover:bg-warm-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenQuote={onOpenQuote}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>

        {/* Bottom CTA to all products */}
        <div className="mt-14 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-warm-100 hover:bg-warm-200 text-navy font-semibold text-sm transition-colors shadow-subtle hover:shadow"
          >
            <span>Explore All {products.length}+ Product Models</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Quick View Modal */}
      <ProductQuickViewModal
        isOpen={!!quickViewProduct}
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onOpenQuote={onOpenQuote}
      />
    </section>
  );
};
