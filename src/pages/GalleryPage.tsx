import React, { useState } from 'react';
import { projects } from '../data/projects';
import { ProjectItem } from '../types';
import { LightboxModal } from '../components/gallery/LightboxModal';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Sparkles, Eye, MapPin, Calendar, Info } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const categories = [
    { id: 'all', label: 'All Inspirations' },
    { id: 'modern-homes', label: 'Modern Homes' },
    { id: 'doors-windows', label: 'Doors & Windows' },
    { id: 'glass-partitions', label: 'Glass Partitions' },
    { id: 'shower-partitions-cubicles', label: 'Shower Cubicles' },
    { id: 'aluminium-systems', label: 'Aluminium Systems' },
    { id: 'blinds-interiors', label: 'Blinds & Interiors' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(
        (p) =>
          p.categorySlug === activeCategory ||
          (activeCategory === 'shower-partitions-cubicles' && p.categorySlug === 'shower-cubicles')
      );

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setSelectedProject(filteredProjects[index]);
  };

  const handleNext = () => {
    const nextIdx = (selectedIndex + 1) % filteredProjects.length;
    setSelectedIndex(nextIdx);
    setSelectedProject(filteredProjects[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (selectedIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedIndex(prevIdx);
    setSelectedProject(filteredProjects[prevIdx]);
  };

  return (
    <div className="bg-warm-50 min-h-screen pb-24">
      {/* Banner */}
      <div className="relative bg-navy-dark text-white py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
            alt="Architectural Gallery"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/90 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Inspiration Gallery' }]} />

          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-bronze-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={13} />
              <span>Architectural Lookbook & Concepts</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Inspiration & Project Gallery
            </h1>
            <p className="text-sm sm:text-base text-warm-200 leading-relaxed max-w-2xl">
              Explore contemporary architectural facades, panoramic sliding door installations, acoustic office walls, and spa shower spaces.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Placeholder disclaimer banner */}
        <div className="bg-warm-100 p-4 rounded-xl border border-charcoal-200 text-xs text-charcoal-600 flex items-start gap-2.5">
          <Info size={16} className="text-bronze-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-navy">Sample Inspiration Notice: </span>
            The imagery shown in this gallery represents conceptual architectural inspirations and sample fenestration setups. They illustrate opening styles, profiles, and finishes available for custom quotation.
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center flex-wrap gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-navy text-white shadow-sm'
                  : 'bg-white text-charcoal-700 border border-charcoal-200 hover:bg-warm-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => openLightbox(index)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-charcoal-200/80 shadow-subtle hover:shadow-card-hover transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-warm-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-navy-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                    <Eye size={20} />
                  </div>
                </div>

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-navy/80 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-charcoal-900 group-hover:text-navy transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 mt-1.5 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-charcoal-100 flex items-center justify-between text-xs text-charcoal-500">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-bronze-600" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={13} />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};
