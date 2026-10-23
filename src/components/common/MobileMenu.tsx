import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';
import { X, ChevronDown, ChevronRight, Phone, MessageCircle, FileText, ArrowRight } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onOpenQuote }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleCategory = (slug: string) => {
    setExpandedCategory(expandedCategory === slug ? null : slug);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl flex flex-col z-50 overflow-y-auto">
        {/* Header */}
        <div className="p-4 border-b border-charcoal-100 flex items-center justify-between bg-warm-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-navy flex items-center justify-center text-bronze-300 font-bold text-sm">
              D
            </div>
            <span className="font-display font-bold text-navy text-base tracking-tight">DoorWinMart</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-charcoal-500 hover:text-navy rounded-lg hover:bg-charcoal-200/50 transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Primary CTA */}
        <div className="p-4 bg-warm-50 border-b border-charcoal-100">
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-navy text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-navy-dark transition-colors"
          >
            <FileText size={16} />
            <span>Get a Free Quote</span>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="py-2 flex-1">
          <Link
            to="/"
            onClick={onClose}
            className="block px-6 py-3 text-sm font-medium text-charcoal-800 hover:text-navy hover:bg-warm-100 transition-colors"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={onClose}
            className="block px-6 py-3 text-sm font-medium text-charcoal-800 hover:text-navy hover:bg-warm-100 transition-colors"
          >
            About Us
          </Link>

          {/* Products Accordion */}
          <div className="border-y border-charcoal-100 my-1">
            <div className="px-6 py-2.5 bg-warm-100/60 flex items-center justify-between">
              <Link
                to="/products"
                onClick={onClose}
                className="text-xs font-bold uppercase tracking-wider text-navy hover:text-bronze-600 transition-colors"
              >
                All Products Catalog
              </Link>
              <Link
                to="/products"
                onClick={onClose}
                className="text-xs text-bronze-600 font-semibold flex items-center"
              >
                View All <ArrowRight size={12} className="ml-1" />
              </Link>
            </div>

            <div className="divide-y divide-charcoal-50">
              {categories.map((cat) => {
                const isExpanded = expandedCategory === cat.slug;
                return (
                  <div key={cat.id} className="text-sm">
                    <div className="flex items-center justify-between px-6 py-2.5 hover:bg-warm-50">
                      <Link
                        to={`/category/${cat.slug}`}
                        onClick={onClose}
                        className="text-charcoal-800 hover:text-navy font-medium flex-1 text-xs"
                      >
                        {cat.name}
                      </Link>
                      <button
                        onClick={() => toggleCategory(cat.slug)}
                        className="p-1 text-charcoal-400 hover:text-navy"
                        aria-label={`Toggle ${cat.name}`}
                      >
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-navy' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {isExpanded && (
                      <div className="bg-warm-100/50 py-2 px-8 space-y-2 border-t border-charcoal-100/50">
                        {cat.subCategories.map((sub) => (
                          <Link
                            key={sub.id}
                            to={`/category/${cat.slug}?sub=${encodeURIComponent(sub.name)}`}
                            onClick={onClose}
                            className="block text-xs text-charcoal-600 hover:text-navy hover:translate-x-1 transition-all py-1"
                          >
                            • {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <Link
            to="/gallery"
            onClick={onClose}
            className="block px-6 py-3 text-sm font-medium text-charcoal-800 hover:text-navy hover:bg-warm-100 transition-colors"
          >
            Projects / Gallery
          </Link>

          <Link
            to="/services"
            onClick={onClose}
            className="block px-6 py-3 text-sm font-medium text-charcoal-800 hover:text-navy hover:bg-warm-100 transition-colors"
          >
            Services
          </Link>

          <Link
            to="/contact"
            onClick={onClose}
            className="block px-6 py-3 text-sm font-medium text-charcoal-800 hover:text-navy hover:bg-warm-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Footer Contact */}
        <div className="p-5 border-t border-charcoal-100 bg-warm-100 space-y-3">
          <div className="text-xs text-charcoal-500 font-medium">Quick Support:</div>
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 text-xs font-semibold text-charcoal-800 hover:text-navy"
          >
            <Phone size={14} className="text-bronze-600" />
            <span>+91 98765 43210</span>
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-emerald-600 hover:text-emerald-700"
          >
            <MessageCircle size={14} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
