import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MegaMenu } from './MegaMenu';
import { MobileMenu } from './MobileMenu';
import { Menu, ChevronDown, Search, FileText } from 'lucide-react';

interface HeaderProps {
  onOpenQuote: (productName?: string, categorySlug?: string) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote, onOpenSearch }) => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full relative transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white py-4 border-b border-charcoal-100'
      }`}
      onMouseLeave={() => setIsMegaMenuOpen(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center text-white shadow-subtle group-hover:bg-navy-dark transition-all duration-300 relative overflow-hidden border border-bronze-400/40">
              {/* Architectural Grid Icon */}
              <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
                <div className="border border-bronze-300 rounded-[1px]"></div>
                <div className="border border-bronze-300 rounded-[1px]"></div>
                <div className="border border-bronze-300 rounded-[1px]"></div>
                <div className="border border-bronze-300 rounded-[1px]"></div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-display font-bold text-xl md:text-2xl text-navy tracking-tight leading-none">
                  DoorWin<span className="text-bronze-600">Mart</span>
                </span>
              </div>
              <span className="text-[10px] tracking-wider uppercase text-charcoal-500 font-semibold block mt-0.5">
                Architectural Systems
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/') && location.pathname === '/'
                  ? 'text-navy font-semibold bg-warm-100'
                  : 'text-charcoal-700 hover:text-navy hover:bg-warm-50'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/about')
                  ? 'text-navy font-semibold bg-warm-100'
                  : 'text-charcoal-700 hover:text-navy hover:bg-warm-50'
              }`}
            >
              About Us
            </Link>

            {/* Products Dropdown Trigger */}
            <div
              onMouseEnter={() => setIsMegaMenuOpen(true)}
            >
              <button
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className={`px-3 py-2 text-sm font-medium rounded-md flex items-center gap-1 transition-colors ${
                  isActive('/products') || isActive('/category') || isMegaMenuOpen
                    ? 'text-navy font-semibold bg-warm-100'
                    : 'text-charcoal-700 hover:text-navy hover:bg-warm-50'
                }`}
                aria-expanded={isMegaMenuOpen}
              >
                <span>Products</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 text-charcoal-400 ${
                    isMegaMenuOpen ? 'rotate-180 text-navy' : ''
                  }`}
                />
              </button>
            </div>

            <Link
              to="/gallery"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/gallery')
                  ? 'text-navy font-semibold bg-warm-100'
                  : 'text-charcoal-700 hover:text-navy hover:bg-warm-50'
              }`}
            >
              Projects / Gallery
            </Link>

            <Link
              to="/services"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/services')
                  ? 'text-navy font-semibold bg-warm-100'
                  : 'text-charcoal-700 hover:text-navy hover:bg-warm-50'
              }`}
            >
              Services
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/contact')
                  ? 'text-navy font-semibold bg-warm-100'
                  : 'text-charcoal-700 hover:text-navy hover:bg-warm-50'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-charcoal-600 hover:text-navy hover:bg-warm-100 rounded-lg transition-colors flex items-center gap-1.5"
              title="Search products (Ctrl + K)"
              aria-label="Search Catalog"
            >
              <Search size={18} />
              <span className="hidden xl:inline text-xs font-medium text-charcoal-500 border border-charcoal-200 px-1.5 py-0.5 rounded bg-warm-50">
                ⌘K
              </span>
            </button>

            {/* Primary Get a Quote Button */}
            <button
              onClick={() => onOpenQuote()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-navy hover:bg-navy-dark text-white text-xs md:text-sm font-semibold shadow-sm hover:shadow transition-all duration-200 group/btn"
            >
              <FileText size={16} className="text-bronze-300 group-hover/btn:rotate-6 transition-transform" />
              <span>Get a Free Quote</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-charcoal-700 hover:text-navy rounded-lg hover:bg-warm-100 transition-colors"
              aria-label="Open mobile navigation"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Full-Width MegaMenu Anchored to Header */}
      <MegaMenu
        isOpen={isMegaMenuOpen}
        onClose={() => setIsMegaMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenQuote={() => onOpenQuote()}
      />
    </header>
  );
};
