import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { ProjectItem } from '../../types';
import { LightboxModal } from '../gallery/LightboxModal';
import { ArrowRight, Image as ImageIcon, Eye, MapPin } from 'lucide-react';

export const GalleryPreviewSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const previewProjects = projects.slice(0, 6);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setSelectedProject(previewProjects[index]);
  };

  const handleNext = () => {
    const nextIdx = (selectedIndex + 1) % previewProjects.length;
    setSelectedIndex(nextIdx);
    setSelectedProject(previewProjects[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (selectedIndex - 1 + previewProjects.length) % previewProjects.length;
    setSelectedIndex(prevIdx);
    setSelectedProject(previewProjects[prevIdx]);
  };

  return (
    <section className="py-20 lg:py-28 bg-warm-100/60 border-b border-charcoal-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-bronze-600">
              <ImageIcon size={14} />
              <span>Visual Inspiration</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-navy tracking-tight">
              Featured Projects & Gallery
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
              Explore how architectural doors, windows, glass partitions, and shower enclosures elevate spaces with light and precision.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-bronze-600 group transition-colors shrink-0"
          >
            <span>View Full Gallery ({projects.length}+ Concepts)</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-warm-200 aspect-[4/3] cursor-pointer shadow-subtle hover:shadow-card-hover transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Eye size={16} />
                  </div>
                </div>

                <div className="text-white space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-bronze-300 bg-white/10 px-2.5 py-0.5 rounded-full inline-block">
                    {project.category}
                  </span>
                  <h3 className="font-display font-bold text-base text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-warm-200">
                    <MapPin size={12} className="text-bronze-400" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sample Disclaimer Note */}
        <div className="mt-8 text-center text-xs text-charcoal-500">
          * Gallery images represent conceptual architectural inspirations and sample installations.
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
    </section>
  );
};
