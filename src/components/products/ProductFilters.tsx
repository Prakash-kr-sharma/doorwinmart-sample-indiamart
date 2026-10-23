import React from 'react';
import { categories } from '../../data/categories';
import { Filter, X, RotateCcw } from 'lucide-react';

interface ProductFiltersProps {
  selectedCategorySlug: string;
  onSelectCategory: (slug: string) => void;
  selectedSubCategory: string;
  onSelectSubCategory: (sub: string) => void;
  selectedMaterial: string;
  onSelectMaterial: (material: string) => void;
  selectedApplication: string;
  onSelectApplication: (app: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  onResetFilters: () => void;
  totalCount: number;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  selectedCategorySlug,
  onSelectCategory,
  selectedSubCategory,
  onSelectSubCategory,
  selectedMaterial,
  onSelectMaterial,
  selectedApplication,
  onSelectApplication,
  sortBy,
  onSortChange,
  onResetFilters,
  totalCount,
}) => {
  const currentCategory = categories.find((c) => c.slug === selectedCategorySlug);

  const materials = ['UPVC', 'Aluminium', 'Wood', 'Glass', 'Brass / Steel'];
  const applications = ['Residential', 'Apartments', 'Commercial', 'Bathrooms'];

  const hasActiveFilters =
    selectedCategorySlug !== 'all' ||
    selectedSubCategory !== 'all' ||
    selectedMaterial !== 'all' ||
    selectedApplication !== 'all' ||
    sortBy !== 'featured';

  return (
    <div className="bg-white rounded-xl border border-charcoal-200/80 p-5 shadow-subtle space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-charcoal-100">
        <div className="flex items-center gap-2">
          <Filter size={16} className="text-navy" />
          <h3 className="font-display font-bold text-sm text-navy uppercase tracking-wider">
            Filters
          </h3>
          <span className="text-xs bg-warm-200 text-charcoal-700 px-2 py-0.5 rounded-full font-semibold">
            {totalCount}
          </span>
        </div>

        {hasActiveFilters && (
          <button
            onClick={onResetFilters}
            className="flex items-center gap-1 text-[11px] font-semibold text-bronze-600 hover:text-bronze-700 hover:underline transition-colors"
          >
            <RotateCcw size={12} />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Sort By Dropdown */}
      <div>
        <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-2">
          Sort By
        </label>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full text-xs py-2 px-3 rounded-lg border border-charcoal-200 focus:outline-none focus:border-navy bg-white"
        >
          <option value="featured">Featured First</option>
          <option value="name-asc">Alphabetical (A - Z)</option>
          <option value="name-desc">Alphabetical (Z - A)</option>
        </select>
      </div>

      {/* Category Selection */}
      <div>
        <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-2">
          Product Category
        </label>
        <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
          <button
            onClick={() => {
              onSelectCategory('all');
              onSelectSubCategory('all');
            }}
            className={`w-full text-left text-xs px-2.5 py-1.5 rounded-md transition-colors flex items-center justify-between ${
              selectedCategorySlug === 'all'
                ? 'bg-navy text-white font-semibold'
                : 'text-charcoal-700 hover:bg-warm-100'
            }`}
          >
            <span>All Categories</span>
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.slug);
                onSelectSubCategory('all');
              }}
              className={`w-full text-left text-xs px-2.5 py-1.5 rounded-md transition-colors flex items-center justify-between truncate ${
                selectedCategorySlug === cat.slug
                  ? 'bg-navy text-white font-semibold'
                  : 'text-charcoal-700 hover:bg-warm-100'
              }`}
              title={cat.name}
            >
              <span className="truncate">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Subcategory (shows if a specific category is selected) */}
      {currentCategory && currentCategory.subCategories.length > 0 && (
        <div className="pt-2 border-t border-charcoal-100">
          <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-2">
            Subcategory
          </label>
          <div className="space-y-1">
            <button
              onClick={() => onSelectSubCategory('all')}
              className={`w-full text-left text-xs px-2.5 py-1.5 rounded-md transition-colors ${
                selectedSubCategory === 'all'
                  ? 'bg-warm-200 text-navy font-semibold'
                  : 'text-charcoal-600 hover:bg-warm-50'
              }`}
            >
              All Subcategories
            </button>
            {currentCategory.subCategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => onSelectSubCategory(sub.name)}
                className={`w-full text-left text-xs px-2.5 py-1.5 rounded-md transition-colors truncate ${
                  selectedSubCategory === sub.name
                    ? 'bg-warm-200 text-navy font-semibold'
                    : 'text-charcoal-600 hover:bg-warm-50'
                }`}
                title={sub.name}
              >
                {sub.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Material Filter */}
      <div className="pt-2 border-t border-charcoal-100">
        <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-2">
          Material
        </label>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => onSelectMaterial('all')}
            className={`text-[11px] px-2.5 py-1 rounded-full border transition-colors ${
              selectedMaterial === 'all'
                ? 'bg-navy text-white border-navy font-medium'
                : 'bg-warm-50 text-charcoal-600 border-charcoal-200 hover:border-charcoal-400'
            }`}
          >
            All
          </button>
          {materials.map((m) => (
            <button
              key={m}
              onClick={() => onSelectMaterial(selectedMaterial === m ? 'all' : m)}
              className={`text-[11px] px-2.5 py-1 rounded-full border transition-colors ${
                selectedMaterial === m
                  ? 'bg-navy text-white border-navy font-medium'
                  : 'bg-warm-50 text-charcoal-600 border-charcoal-200 hover:border-charcoal-400'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Application Filter */}
      <div className="pt-2 border-t border-charcoal-100">
        <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-2">
          Application
        </label>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => onSelectApplication('all')}
            className={`text-[11px] px-2.5 py-1 rounded-full border transition-colors ${
              selectedApplication === 'all'
                ? 'bg-navy text-white border-navy font-medium'
                : 'bg-warm-50 text-charcoal-600 border-charcoal-200 hover:border-charcoal-400'
            }`}
          >
            All
          </button>
          {applications.map((app) => (
            <button
              key={app}
              onClick={() => onSelectApplication(selectedApplication === app ? 'all' : app)}
              className={`text-[11px] px-2.5 py-1 rounded-full border transition-colors ${
                selectedApplication === app
                  ? 'bg-navy text-white border-navy font-medium'
                  : 'bg-warm-50 text-charcoal-600 border-charcoal-200 hover:border-charcoal-400'
              }`}
            >
              {app}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
