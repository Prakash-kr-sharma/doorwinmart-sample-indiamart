import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../../data/products';
import { categories } from '../../data/categories';
import { Search, X, ArrowRight, Layers, Box } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled from parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredCategories = query.trim() === ''
    ? []
    : categories.filter(c =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
        c.subCategories.some(s => s.name.toLowerCase().includes(query.toLowerCase()))
      );

  const filteredProducts = query.trim() === ''
    ? []
    : products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
        p.subCategory.toLowerCase().includes(query.toLowerCase()) ||
        p.materials.some(m => m.toLowerCase().includes(query.toLowerCase())) ||
        p.categoryName.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelectProduct = (slug: string) => {
    onClose();
    navigate(`/product/${slug}`);
  };

  const handleSelectCategory = (slug: string) => {
    onClose();
    navigate(`/category/${slug}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-charcoal-200 overflow-hidden z-50 animate-fadeIn">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 sm:px-6 py-4 border-b border-charcoal-100 bg-warm-50">
          <Search size={20} className="text-navy shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search windows, doors, sliding systems, glass partitions..."
            className="w-full bg-transparent text-sm sm:text-base text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-charcoal-400 hover:text-charcoal-700 mr-2"
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-semibold text-charcoal-500 hover:text-navy border border-charcoal-200 rounded bg-white"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-6">
          {query.trim() === '' ? (
            <div className="text-center py-8">
              <p className="text-xs font-semibold text-charcoal-400 uppercase tracking-wider mb-3">
                Suggested Quick Searches
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['UPVC Windows', 'Sliding Doors', 'Office Glass Partition', 'Shower Cubicle', 'Bi-Fold Doors', 'Acoustic Glass', 'Door Handles'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 text-xs rounded-full bg-warm-100 hover:bg-warm-200 text-charcoal-700 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {filteredCategories.length === 0 && filteredProducts.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-sm font-semibold text-charcoal-700">No matching products or categories found</p>
                  <p className="text-xs text-charcoal-500 mt-1">Try searching for keywords like "UPVC", "Casement", "Shower", or "Aluminium".</p>
                </div>
              ) : (
                <>
                  {/* Matching Categories */}
                  {filteredCategories.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-bronze-600 mb-3">
                        <Layers size={14} />
                        <span>Categories ({filteredCategories.length})</span>
                      </div>
                      <div className="space-y-2">
                        {filteredCategories.map((cat) => (
                          <div
                            key={cat.id}
                            onClick={() => handleSelectCategory(cat.slug)}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-warm-100 cursor-pointer transition-colors group"
                          >
                            <div className="flex items-center gap-3">
                              <img
                                src={cat.heroImage}
                                alt={cat.name}
                                className="w-10 h-10 object-cover rounded-md"
                              />
                              <div>
                                <h4 className="text-sm font-semibold text-charcoal-900 group-hover:text-navy">
                                  {cat.name}
                                </h4>
                                <p className="text-xs text-charcoal-500 line-clamp-1">
                                  {cat.shortDescription}
                                </p>
                              </div>
                            </div>
                            <ArrowRight size={15} className="text-charcoal-400 group-hover:text-navy group-hover:translate-x-1 transition-all" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Matching Products */}
                  {filteredProducts.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy mb-3">
                        <Box size={14} />
                        <span>Products ({filteredProducts.length})</span>
                      </div>
                      <div className="space-y-2">
                        {filteredProducts.map((prod) => (
                          <div
                            key={prod.id}
                            onClick={() => handleSelectProduct(prod.slug)}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-warm-100 cursor-pointer transition-colors group"
                          >
                            <div className="flex items-center gap-3">
                              <img
                                src={prod.images[0]}
                                alt={prod.name}
                                className="w-12 h-12 object-cover rounded-md"
                              />
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-navy/10 text-navy px-1.5 py-0.5 rounded">
                                    {prod.categoryName}
                                  </span>
                                </div>
                                <h4 className="text-sm font-semibold text-charcoal-900 group-hover:text-navy">
                                  {prod.name}
                                </h4>
                                <p className="text-xs text-charcoal-500 line-clamp-1">
                                  {prod.shortDescription}
                                </p>
                              </div>
                            </div>
                            <ArrowRight size={15} className="text-charcoal-400 group-hover:text-navy group-hover:translate-x-1 transition-all" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-warm-100/60 border-t border-charcoal-100 flex items-center justify-between text-xs text-charcoal-500">
          <span>Navigate using search keywords</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
