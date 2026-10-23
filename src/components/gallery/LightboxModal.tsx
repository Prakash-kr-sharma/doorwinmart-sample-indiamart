import React, { useEffect } from 'react';
import { ProjectItem } from '../../types';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectItem | null;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  project,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Dark backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-950/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-5 right-5 z-50 p-2 text-warm-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white bg-black/40 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all"
        aria-label="Previous project"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white bg-black/40 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all"
        aria-label="Next project"
      >
        <ChevronRight size={24} />
      </button>

      {/* Main Image Container */}
      <div className="relative max-w-5xl w-full max-h-[85vh] bg-navy-dark rounded-2xl overflow-hidden shadow-2xl z-50 flex flex-col md:flex-row border border-white/10 animate-fadeIn">
        {/* Large Image */}
        <div className="flex-1 bg-black flex items-center justify-center overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain max-h-[55vh] md:max-h-[85vh]"
          />
        </div>

        {/* Project Details Sidebar */}
        <div className="w-full md:w-80 p-6 bg-navy-dark text-white flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10">
          <div>
            <span className="px-2.5 py-1 rounded-full bg-bronze-500/20 text-bronze-300 text-[11px] font-semibold tracking-wider uppercase inline-block mb-3">
              {project.category}
            </span>
            <h3 className="font-display font-bold text-xl text-white">
              {project.title}
            </h3>
            <p className="text-xs text-warm-300 mt-3 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-6 space-y-2.5 text-xs text-warm-300 border-t border-white/10 pt-4">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-bronze-400" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-bronze-400" />
                <span>Year: {project.year}</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 mt-6">
            <p className="text-[10px] text-warm-300 italic mb-3">
              * Sample inspiration imagery for architectural visualization.
            </p>
            <a
              href={`https://wa.me/919876543210?text=Hi%20DoorWinMart%2C%20I%20am%20interested%20in%20a%20concept%20similar%20to%20${encodeURIComponent(
                project.title
              )}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-bronze-500 hover:bg-bronze-600 text-white text-xs font-semibold rounded-lg text-center block transition-colors"
            >
              Enquire About This Concept
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
