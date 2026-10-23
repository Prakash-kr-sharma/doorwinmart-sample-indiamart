import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ShieldCheck, Compass, Sparkles, Building2, Sliders, ArrowRight, MessageCircle } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-warm-50 min-h-screen pb-24">
      {/* Hero Banner */}
      <div className="relative bg-navy-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="DoorWinMart Architectural Philosophy"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/90 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'About Us' }]} />

          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-bronze-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={13} />
              <span>About DoorWinMart</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Crafting Thoughtful Fenestration & Interior Solutions
            </h1>
            <p className="text-sm sm:text-base text-warm-200 leading-relaxed max-w-2xl">
              DoorWinMart provides premium doors, windows, glass partitions, shower cubicles, and blinds engineered for durability, acoustic privacy, and architectural harmony.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Core Vision & Business Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-bronze-600">
              Our Purpose & Identity
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-navy tracking-tight">
              Where Engineering Meets Architectural Aesthetics
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              Doors and windows are more than building enclosures — they frame natural vistas, control sunlight, protect interior thermal climate, and create seamless transitions between living spaces and the outdoors.
            </p>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              At DoorWinMart, we partner with homeowners, architects, and interior designers to deliver curated fenestration systems. By uniting UPVC thermal performance, architectural aluminium rigidity, timeless timber warmth, and frameless acoustic glass, we ensure every installation performs reliably for decades.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-charcoal-200/80 shadow-subtle space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-warm-100 flex items-center justify-center text-navy font-bold text-xs">
                  01
                </div>
                <h4 className="font-display font-bold text-sm text-navy">
                  Holistic Architectural Focus
                </h4>
                <p className="text-xs text-charcoal-500">
                  Offering a full continuum from grand exterior pivot doors to interior shower cubicles and acoustic office partitions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-charcoal-200/80 shadow-subtle space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-warm-100 flex items-center justify-center text-navy font-bold text-xs">
                  02
                </div>
                <h4 className="font-display font-bold text-sm text-navy">
                  Custom Site Adaptation
                </h4>
                <p className="text-xs text-charcoal-500">
                  Every project is calibrated to specific wind load pressures, solar orientations, and opening dimensions.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-charcoal-200 aspect-[4/5] bg-warm-200">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
                alt="Architectural space details"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Quality Philosophy Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-charcoal-200/80 shadow-subtle">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-bronze-600 bg-warm-100 px-3 py-1 rounded-full">
              Quality Commitment
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-navy">
              Our Design & Manufacturing Philosophy
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              We focus on measurable architectural criteria rather than unsubstantiated claims.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3 text-center sm:text-left">
              <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center mx-auto sm:mx-0 shadow-sm">
                <ShieldCheck size={22} className="text-bronze-300" />
              </div>
              <h3 className="font-display font-bold text-base text-navy">
                Weather Sealing & Acoustic Comfort
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Utilizing multi-chambered UPVC profiles, continuous EPDM co-extruded gaskets, and precision acoustic laminated glass to block torrential rain and intrusive urban noise.
              </p>
            </div>

            <div className="space-y-3 text-center sm:text-left">
              <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center mx-auto sm:mx-0 shadow-sm">
                <Sliders size={22} className="text-bronze-300" />
              </div>
              <h3 className="font-display font-bold text-base text-navy">
                Smooth Glide Hardware
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Heavy-duty tandem nylon and stainless steel rollers, multi-point euro locks, and solid brass pivot systems tested for smooth, effortless operation.
              </p>
            </div>

            <div className="space-y-3 text-center sm:text-left">
              <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center mx-auto sm:mx-0 shadow-sm">
                <Compass size={22} className="text-bronze-300" />
              </div>
              <h3 className="font-display font-bold text-base text-navy">
                Consultative Support
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                From initial blueprint review to sample finish evaluations, our specialists ensure clear communication and transparent estimation without hidden surprises.
              </p>
            </div>
          </div>
        </div>

        {/* 12 Categories Overview */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-bronze-600">
                Product Spectrum
              </span>
              <h3 className="font-display font-extrabold text-2xl text-navy mt-1">
                Explore All 12 Architectural Product Lines
              </h3>
            </div>
            <Link
              to="/products"
              className="text-xs font-semibold text-navy hover:text-bronze-600 flex items-center gap-1"
            >
              <span>Explore Products Grid</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((c) => (
              <Link
                key={c.id}
                to={`/category/${c.slug}`}
                className="p-4 rounded-xl bg-white border border-charcoal-200/80 hover:border-navy/30 hover:shadow-card transition-all flex flex-col justify-between group"
              >
                <div>
                  <h4 className="font-display font-bold text-xs text-charcoal-900 group-hover:text-navy">
                    {c.name}
                  </h4>
                  <p className="text-[11px] text-charcoal-500 line-clamp-2 mt-1">
                    {c.shortDescription}
                  </p>
                </div>
                <span className="text-[11px] text-bronze-600 font-semibold mt-3 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Systems <ArrowRight size={11} />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-navy-dark to-navy text-white p-8 sm:p-12 rounded-3xl text-center space-y-6">
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
            Have an Upcoming Architecture or Interior Project?
          </h3>
          <p className="text-xs sm:text-sm text-warm-200 max-w-xl mx-auto leading-relaxed">
            Connect with our team to discuss your drawings, request sample finishes, or receive a preliminary project estimate.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/quote"
              className="px-6 py-3 bg-bronze-500 hover:bg-bronze-600 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl border border-white/20 transition-colors"
            >
              Contact Showroom
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl transition-colors flex items-center gap-1.5"
            >
              <MessageCircle size={15} />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
