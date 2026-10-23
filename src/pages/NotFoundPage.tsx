import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-warm-50 px-4 py-20 text-center">
      <div className="max-w-md space-y-5">
        <span className="font-display font-extrabold text-7xl text-navy/20">404</span>
        <h1 className="font-display font-extrabold text-3xl text-navy">Page Not Found</h1>
        <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
          The architectural page you were searching for cannot be found or may have been moved.
        </p>
        <div className="pt-2 flex items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white text-xs font-semibold rounded-xl hover:bg-navy-dark transition-colors"
          >
            <Home size={14} />
            <span>Return Home</span>
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-warm-200 text-navy text-xs font-semibold rounded-xl hover:bg-warm-300 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Browse Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
