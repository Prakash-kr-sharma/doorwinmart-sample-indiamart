import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';
import {
  ArrowRight,
  Sparkles,
  LayoutGrid,
  SlidersHorizontal,
  Trees,
  Columns3,
  Maximize2,
  SquareCode,
  Droplets,
  SunDim,
  MoveHorizontal,
  FolderGit2,
  PanelTop,
  Wrench,
  ChevronRight
} from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// Map category slug to Lucide icon
const getCategoryIcon = (slug: string) => {
  switch (slug) {
    case 'upvc-doors-windows':
      return LayoutGrid;
    case 'sliding-doors-windows':
      return SlidersHorizontal;
    case 'wooden-products':
      return Trees;
    case 'aluminium-products':
      return Columns3;
    case 'casement-upvc-windows':
      return Maximize2;
    case 'glass-partitions':
      return SquareCode;
    case 'shower-partitions-cubicles':
      return Droplets;
    case 'blinds-shading-solutions':
      return SunDim;
    case 'internal-sliding-systems':
      return MoveHorizontal;
    case 'folding-systems':
      return FolderGit2;
    case 'interior-bathroom-panels':
      return PanelTop;
    case 'glass-door-accessories':
      return Wrench;
    default:
      return LayoutGrid;
  }
};

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const fenestrationCats = categories.slice(0, 5); // UPVC, Sliding, Wood, Aluminium, Casement
  const glazingCats = categories.slice(5, 7);       // Glass, Shower
  const interiorCats = categories.slice(7, 12);     // Blinds, Internal Slide, Folding, Panels, Hardware

  return (
    <div
      className="absolute top-full left-0 right-0 w-full bg-white border-b border-charcoal-200 shadow-2xl z-50 animate-fadeIn"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-5 mb-6 border-b border-charcoal-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-bronze-500"></span>
              <h3 className="text-xs font-bold tracking-widest uppercase text-navy">
                Architectural Systems Catalog
              </h3>
            </div>
            <p className="text-xs text-charcoal-500 mt-0.5">
              Select a specialized category to explore engineered profiles, specifications, and sample finishes
            </p>
          </div>

          <Link
            to="/products"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-warm-100 hover:bg-navy hover:text-white text-navy text-xs font-semibold transition-all group"
          >
            <span>Browse All 12 Collections</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Structured Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Column 1: Exterior Doors & Windows */}
          <div className="space-y-4">
            <div className="border-b border-charcoal-100 pb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-bronze-600">
                Exterior Doors & Windows
              </span>
            </div>
            <div className="space-y-1.5">
              {fenestrationCats.map((cat) => {
                const Icon = getCategoryIcon(cat.slug);
                return (
                  <Link
                    key={cat.id}
                    to={`/category/${cat.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-warm-100/80 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-warm-200/80 group-hover:bg-navy group-hover:text-white text-navy flex items-center justify-center shrink-0 transition-colors">
                      <Icon size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-semibold text-xs text-charcoal-900 group-hover:text-navy truncate">
                        {cat.name}
                      </h4>
                      <p className="text-[10px] text-charcoal-500 truncate mt-0.5">
                        {cat.subCategories.length} profile variations
                      </p>
                    </div>
                    <ChevronRight size={14} className="text-charcoal-300 group-hover:text-navy group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Column 2: Architectural Glazing & Enclosures */}
          <div className="space-y-4">
            <div className="border-b border-charcoal-100 pb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-bronze-600">
                Glass Partitions & Showers
              </span>
            </div>
            <div className="space-y-1.5">
              {glazingCats.map((cat) => {
                const Icon = getCategoryIcon(cat.slug);
                return (
                  <Link
                    key={cat.id}
                    to={`/category/${cat.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-warm-100/80 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-warm-200/80 group-hover:bg-navy group-hover:text-white text-navy flex items-center justify-center shrink-0 transition-colors">
                      <Icon size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-semibold text-xs text-charcoal-900 group-hover:text-navy truncate">
                        {cat.name}
                      </h4>
                      <p className="text-[10px] text-charcoal-500 truncate mt-0.5">
                        {cat.subCategories.length} glass styles & screens
                      </p>
                    </div>
                    <ChevronRight size={14} className="text-charcoal-300 group-hover:text-navy group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                );
              })}

              {/* Folding systems placement */}
              {categories.filter(c => c.slug === 'folding-systems').map((cat) => {
                const Icon = getCategoryIcon(cat.slug);
                return (
                  <Link
                    key={cat.id}
                    to={`/category/${cat.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-warm-100/80 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-warm-200/80 group-hover:bg-navy group-hover:text-white text-navy flex items-center justify-center shrink-0 transition-colors">
                      <Icon size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-semibold text-xs text-charcoal-900 group-hover:text-navy truncate">
                        {cat.name}
                      </h4>
                      <p className="text-[10px] text-charcoal-500 truncate mt-0.5">
                        Concertina bi-folding systems
                      </p>
                    </div>
                    <ChevronRight size={14} className="text-charcoal-300 group-hover:text-navy group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Column 3: Interior, Shading & Fittings */}
          <div className="space-y-4">
            <div className="border-b border-charcoal-100 pb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-bronze-600">
                Interior & Hardware
              </span>
            </div>
            <div className="space-y-1.5">
              {interiorCats.filter(c => c.slug !== 'folding-systems').map((cat) => {
                const Icon = getCategoryIcon(cat.slug);
                return (
                  <Link
                    key={cat.id}
                    to={`/category/${cat.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-warm-100/80 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-warm-200/80 group-hover:bg-navy group-hover:text-white text-navy flex items-center justify-center shrink-0 transition-colors">
                      <Icon size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-semibold text-xs text-charcoal-900 group-hover:text-navy truncate">
                        {cat.name}
                      </h4>
                      <p className="text-[10px] text-charcoal-500 truncate mt-0.5">
                        {cat.subCategories.length} product options
                      </p>
                    </div>
                    <ChevronRight size={14} className="text-charcoal-300 group-hover:text-navy group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Column 4: Architectural Consultation Feature Card */}
          <div className="bg-gradient-to-br from-navy to-navy-dark p-6 rounded-2xl text-white flex flex-col justify-between shadow-card">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-bronze-300 text-[10px] font-bold tracking-wider uppercase mb-3">
                <Sparkles size={11} />
                <span>Custom Engineering</span>
              </div>
              <h4 className="font-display font-bold text-base text-white leading-snug">
                Bespoke Architectural Dimensions
              </h4>
              <p className="text-xs text-warm-200/80 mt-2 leading-relaxed">
                Need floor-to-ceiling pivot doors, acoustic office walls, or motorized sunscreen blinds?
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/15 space-y-2">
              <Link
                to="/quote"
                onClick={onClose}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-bronze-500 hover:bg-bronze-600 text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
              >
                <span>Request Custom Quote</span>
                <ArrowRight size={13} />
              </Link>
              <Link
                to="/products"
                onClick={onClose}
                className="w-full text-center block text-[11px] text-warm-300 hover:text-white transition-colors pt-1"
              >
                View Full Product Grid →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
