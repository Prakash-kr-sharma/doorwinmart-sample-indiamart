import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Shield, VolumeX, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-navy-dark overflow-hidden">
      {/* Background Architectural Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Modern Luxury Home with Architectural Glass Windows and Doors"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow opacity-55"
        />
        {/* Editorial Gradients for high contrast and luxury mood */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Editorial Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Subtle Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-warm-200 text-xs font-medium tracking-wide">
              <Sparkles size={14} className="text-bronze-400" />
              <span>Architectural Systems • Residential & Commercial Solutions</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12]">
              Elevate Your Space with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-100 via-bronze-200 to-bronze-400">
                Premium Doors, Windows & Glass Solutions.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-warm-200/90 max-w-2xl font-normal leading-relaxed">
              Discover thoughtfully designed architectural products that bring together style, functionality, and lasting quality. Engineered for acoustic comfort, weather integrity, and minimalist elegance.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-bronze-500 hover:bg-bronze-600 text-white font-semibold text-sm shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <span>Explore Products</span>
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md text-white font-semibold text-sm border border-white/20 transition-all duration-300"
              >
                <FileText size={17} className="text-bronze-300" />
                <span>Get a Free Quote</span>
              </button>
            </div>

            {/* Value Highlights */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10">
              <div className="flex items-center gap-2.5 text-xs text-warm-200">
                <Shield size={16} className="text-bronze-400 shrink-0" />
                <span>Precision Engineering</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-warm-200">
                <VolumeX size={16} className="text-bronze-400 shrink-0" />
                <span>Acoustic Isolation</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-warm-200">
                <CheckCircle2 size={16} className="text-bronze-400 shrink-0" />
                <span>Custom Fabrication</span>
              </div>
            </div>
          </div>

          {/* Right Floating Quick Card */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="bg-white/95 backdrop-blur-xl p-7 rounded-2xl border border-white/40 shadow-2xl text-charcoal-900 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-charcoal-100">
                <span className="text-xs font-bold uppercase tracking-wider text-bronze-600">
                  Featured Category Focus
                </span>
                <span className="text-[11px] font-semibold text-charcoal-500">Series 2024</span>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-navy">
                  Minimalist Slim Sliding & Pivot Systems
                </h3>
                <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">
                  Ultra-slim 20mm interlock sightlines allow uninterrupted floor-to-ceiling panoramic outdoor views while maintaining heavy acoustic resistance.
                </p>
              </div>

              <div className="space-y-2 text-xs text-charcoal-700">
                <div className="flex items-center justify-between py-1 border-b border-charcoal-100">
                  <span className="text-charcoal-500">Sightline Profile:</span>
                  <span className="font-semibold text-navy">20 mm - 25 mm</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-charcoal-100">
                  <span className="text-charcoal-500">Thermal Barrier:</span>
                  <span className="font-semibold text-navy">Polyamide Break</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-charcoal-500">Acoustic Reduction:</span>
                  <span className="font-semibold text-navy">Up to 42 dB</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/category/sliding-doors-windows"
                  className="w-full py-2.5 px-4 bg-navy hover:bg-navy-dark text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Explore Sliding Systems</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
