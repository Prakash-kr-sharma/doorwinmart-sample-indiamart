import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';
import { ArrowRight, Layers } from 'lucide-react';

export const CategorySection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-warm-100/70 border-b border-charcoal-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-bronze-600">
              <Layers size={14} />
              <span>Architectural Collections</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-navy tracking-tight">
              Shop by Product Category
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
              Explore our 12 specialized architectural systems designed for residences, corporate offices, and bespoke interiors.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-bronze-600 group transition-colors shrink-0"
          >
            <span>View Complete Catalog</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 12 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="group bg-white rounded-2xl border border-charcoal-200/80 shadow-subtle hover:shadow-card-hover hover:border-navy/40 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
            >
              {/* Image Frame with Aspect Ratio */}
              <div className="relative aspect-[16/10] bg-warm-200 overflow-hidden">
                <img
                  src={category.heroImage}
                  alt={category.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Subcategories count badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-navy uppercase shadow-sm">
                    {category.subCategories.length} Types
                  </span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-charcoal-900 group-hover:text-navy transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-charcoal-600 mt-2 line-clamp-2 leading-relaxed">
                    {category.shortDescription}
                  </p>
                </div>

                {/* Explore Link */}
                <div className="mt-4 pt-3 border-t border-charcoal-100 flex items-center justify-between text-xs font-semibold text-navy group-hover:text-bronze-600 transition-colors">
                  <span>Explore Category</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
