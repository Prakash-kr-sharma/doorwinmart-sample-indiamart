import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { faqs } from '../data/faqs';
import { ProductCard } from '../components/products/ProductCard';
import { ProductQuickViewModal } from '../components/products/ProductQuickViewModal';
import { ProductFilters } from '../components/products/ProductFilters';
import { Product } from '../types';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Search, ChevronDown, Sparkles, HelpCircle, ArrowRight, FileText, Layers } from 'lucide-react';

interface ProductsPageProps {
  onOpenQuote: (productName?: string, categorySlug?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenQuote }) => {
  const { slug } = useParams<{ slug?: string }>();
  const [searchParams, setSearchParams] = useSearchParams();

  // Search Query
  const [searchQuery, setSearchQuery] = useState('');

  // Category & Subcategory selection
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>(slug || 'all');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>(
    searchParams.get('sub') || 'all'
  );

  // Filters
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [selectedApplication, setSelectedApplication] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  // Mobile Filter Drawer Toggle
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Active Category metadata
  const currentCategory = useMemo(() => {
    if (selectedCategorySlug === 'all') return null;
    return categories.find((c) => c.slug === selectedCategorySlug) || null;
  }, [selectedCategorySlug]);

  // Sync route param with state
  useEffect(() => {
    if (slug) {
      setSelectedCategorySlug(slug);
    } else {
      setSelectedCategorySlug('all');
    }
    const subParam = searchParams.get('sub');
    if (subParam) {
      setSelectedSubCategory(subParam);
    }
    window.scrollTo(0, 0);
  }, [slug, searchParams]);

  const handleSelectCategory = (newSlug: string) => {
    setSelectedCategorySlug(newSlug);
    setSelectedSubCategory('all');
    setSearchParams({});
  };

  const handleResetFilters = () => {
    setSelectedCategorySlug('all');
    setSelectedSubCategory('all');
    setSelectedMaterial('all');
    setSelectedApplication('all');
    setSearchQuery('');
    setSortBy('featured');
    setSearchParams({});
  };

  // Filtered & Sorted products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category match
      if (selectedCategorySlug !== 'all' && p.categorySlug !== selectedCategorySlug) {
        return false;
      }
      // SubCategory match
      if (selectedSubCategory !== 'all' && p.subCategory.toLowerCase() !== selectedSubCategory.toLowerCase()) {
        return false;
      }
      // Material match
      if (selectedMaterial !== 'all') {
        const hasMaterial = p.materials.some((m) =>
          m.toLowerCase().includes(selectedMaterial.toLowerCase())
        );
        if (!hasMaterial) return false;
      }
      // Application match
      if (selectedApplication !== 'all') {
        const hasApp = p.applications.some((app) =>
          app.toLowerCase().includes(selectedApplication.toLowerCase())
        );
        if (!hasApp) return false;
      }
      // Search Query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesDesc = p.shortDescription.toLowerCase().includes(q);
        const matchesSub = p.subCategory.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesSub) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'name-desc') {
        return b.name.localeCompare(a.name);
      }
      // Default: featured first
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategorySlug, selectedSubCategory, selectedMaterial, selectedApplication, searchQuery, sortBy]);

  // Related categories
  const relatedCategories = useMemo(() => {
    return categories
      .filter((c) => c.slug !== selectedCategorySlug)
      .slice(0, 4);
  }, [selectedCategorySlug]);

  return (
    <div className="bg-warm-50 min-h-screen pb-20">
      {/* Category Banner / Header */}
      <div className="relative bg-navy-dark text-white py-14 md:py-20 overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src={
              currentCategory?.heroImage ||
              'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'
            }
            alt={currentCategory?.name || 'Architectural Solutions'}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/90 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs
            items={[
              { label: 'Products', path: '/products' },
              ...(currentCategory
                ? [{ label: currentCategory.name, path: `/category/${currentCategory.slug}` }]
                : []),
              ...(selectedSubCategory !== 'all'
                ? [{ label: selectedSubCategory }]
                : []),
            ]}
          />

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-bronze-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={13} />
              <span>Architectural Fenestration & Interior Catalog</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              {currentCategory ? currentCategory.name : 'Architectural Products & Systems'}
            </h1>
            <p className="text-sm sm:text-base text-warm-200 leading-relaxed max-w-2xl">
              {currentCategory
                ? currentCategory.fullDescription
                : 'Browse our complete catalog of UPVC and aluminium windows, solid wooden doors, acoustic office partitions, shower enclosures, and smart motorized shading solutions.'}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">
            <ProductFilters
              selectedCategorySlug={selectedCategorySlug}
              onSelectCategory={handleSelectCategory}
              selectedSubCategory={selectedSubCategory}
              onSelectSubCategory={setSelectedSubCategory}
              selectedMaterial={selectedMaterial}
              onSelectMaterial={setSelectedMaterial}
              selectedApplication={selectedApplication}
              onSelectApplication={setSelectedApplication}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onResetFilters={handleResetFilters}
              totalCount={filteredProducts.length}
            />

            {/* Need Custom Quote Banner */}
            <div className="bg-gradient-to-br from-navy to-navy-dark p-5 rounded-xl text-white space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-bronze-300">
                Custom Blueprint Quotations
              </span>
              <h4 className="font-display font-bold text-base text-white">
                Have Architectural Elevation Drawings?
              </h4>
              <p className="text-xs text-warm-300 leading-relaxed">
                Upload your schedules or dimensions for an itemized estimate from our estimators.
              </p>
              <button
                onClick={() => onOpenQuote(undefined, selectedCategorySlug !== 'all' ? selectedCategorySlug : undefined)}
                className="w-full py-2.5 px-3 bg-bronze-500 hover:bg-bronze-600 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <FileText size={14} />
                <span>Submit Blueprint / Specs</span>
              </button>
            </div>
          </div>

          {/* Product Grid Area */}
          <div className="lg:col-span-9 space-y-6">
            {/* Top Toolbar: Search + Mobile Filter Trigger + Results Count */}
            <div className="bg-white p-4 rounded-xl border border-charcoal-200/80 shadow-subtle flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by keyword (e.g. casement, 3-track, pivot, acoustic)..."
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-charcoal-200 focus:outline-none focus:border-navy"
                />
              </div>

              {/* Status and Mobile Filter Button */}
              <div className="flex items-center justify-between sm:justify-end gap-3">
                <span className="text-xs text-charcoal-600 whitespace-nowrap">
                  Showing <strong className="text-navy">{filteredProducts.length}</strong> matching models
                </span>

                <button
                  onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                  className="lg:hidden px-3 py-2 bg-warm-100 hover:bg-warm-200 text-navy text-xs font-semibold rounded-lg border border-charcoal-200 transition-colors"
                >
                  Filters
                </button>
              </div>
            </div>

            {/* Mobile Filter Collapsible Area */}
            {isMobileFilterOpen && (
              <div className="lg:hidden animate-fadeIn">
                <ProductFilters
                  selectedCategorySlug={selectedCategorySlug}
                  onSelectCategory={handleSelectCategory}
                  selectedSubCategory={selectedSubCategory}
                  onSelectSubCategory={setSelectedSubCategory}
                  selectedMaterial={selectedMaterial}
                  onSelectMaterial={setSelectedMaterial}
                  selectedApplication={selectedApplication}
                  onSelectApplication={setSelectedApplication}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                  onResetFilters={handleResetFilters}
                  totalCount={filteredProducts.length}
                />
              </div>
            )}

            {/* Active Filters Badges */}
            {(selectedCategorySlug !== 'all' ||
              selectedSubCategory !== 'all' ||
              selectedMaterial !== 'all' ||
              selectedApplication !== 'all' ||
              searchQuery) && (
              <div className="flex items-center flex-wrap gap-2 pt-1">
                <span className="text-xs text-charcoal-500 font-medium">Active filters:</span>
                {selectedCategorySlug !== 'all' && (
                  <span className="px-2.5 py-1 rounded-full bg-navy/10 text-navy text-xs font-medium">
                    Category: {currentCategory?.name || selectedCategorySlug}
                  </span>
                )}
                {selectedSubCategory !== 'all' && (
                  <span className="px-2.5 py-1 rounded-full bg-navy/10 text-navy text-xs font-medium">
                    Sub: {selectedSubCategory}
                  </span>
                )}
                {selectedMaterial !== 'all' && (
                  <span className="px-2.5 py-1 rounded-full bg-navy/10 text-navy text-xs font-medium">
                    Material: {selectedMaterial}
                  </span>
                )}
                {selectedApplication !== 'all' && (
                  <span className="px-2.5 py-1 rounded-full bg-navy/10 text-navy text-xs font-medium">
                    App: {selectedApplication}
                  </span>
                )}
                {searchQuery && (
                  <span className="px-2.5 py-1 rounded-full bg-navy/10 text-navy text-xs font-medium">
                    Search: "{searchQuery}"
                  </span>
                )}
                <button
                  onClick={handleResetFilters}
                  className="text-xs text-bronze-600 hover:underline font-semibold ml-1"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Products Grid or Empty State */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onOpenQuote={onOpenQuote}
                    onQuickView={(p) => setQuickViewProduct(p)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-charcoal-200 space-y-4">
                <div className="w-14 h-14 rounded-full bg-warm-100 text-charcoal-400 flex items-center justify-center mx-auto">
                  <Search size={24} />
                </div>
                <h3 className="font-display font-bold text-lg text-charcoal-800">
                  No matching models found
                </h3>
                <p className="text-xs text-charcoal-500 max-w-md mx-auto">
                  We couldn't find any products matching your specific combination of filters. Try clearing your filters or exploring another category.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 bg-navy text-white text-xs font-semibold rounded-lg hover:bg-navy-dark transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* Related Categories Carousel / Cards */}
            <div className="mt-16 pt-12 border-t border-charcoal-200 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-navy">
                    Explore Related Categories
                  </h3>
                  <p className="text-xs text-charcoal-500">
                    Discover complementary door, window, glass and shading systems.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {relatedCategories.map((relCat) => (
                  <Link
                    key={relCat.id}
                    to={`/category/${relCat.slug}`}
                    className="group bg-white rounded-xl border border-charcoal-200 p-4 hover:shadow-card hover:border-navy/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <img
                        src={relCat.heroImage}
                        alt={relCat.name}
                        className="w-full h-28 object-cover rounded-lg mb-3 group-hover:scale-103 transition-transform"
                      />
                      <h4 className="font-display font-bold text-xs text-charcoal-900 group-hover:text-navy line-clamp-1">
                        {relCat.name}
                      </h4>
                      <p className="text-[11px] text-charcoal-500 line-clamp-2 mt-1">
                        {relCat.shortDescription}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-charcoal-100 flex items-center justify-between text-[11px] font-semibold text-navy group-hover:text-bronze-600">
                      <span>View Category</span>
                      <ArrowRight size={12} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Category FAQ Accordion */}
            <div className="mt-16 bg-white p-6 sm:p-8 rounded-2xl border border-charcoal-200/80 shadow-subtle space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-bronze-600">
                <HelpCircle size={15} />
                <span>Frequently Asked Questions</span>
              </div>
              <h3 className="font-display font-bold text-xl text-navy">
                Questions About Selecting Architectural Systems
              </h3>

              <div className="divide-y divide-charcoal-100 pt-2">
                {faqs.slice(0, 4).map((faq) => (
                  <details key={faq.id} className="group py-4 cursor-pointer">
                    <summary className="flex items-center justify-between font-display font-semibold text-sm text-charcoal-900 list-none group-hover:text-navy">
                      <span>{faq.question}</span>
                      <ChevronDown size={16} className="text-charcoal-400 group-open:rotate-180 transition-transform" />
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-charcoal-600 leading-relaxed pr-6">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <ProductQuickViewModal
        isOpen={!!quickViewProduct}
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onOpenQuote={onOpenQuote}
      />
    </div>
  );
};
