import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Building, Briefcase, Hotel, Store, Bath } from 'lucide-react';

export const ApplicationsSection: React.FC = () => {
  const applications = [
    {
      title: 'Residential Homes',
      subtitle: 'Luxury Villas & Independent Houses',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      description: 'Grand pivot entrance doors, floor-to-ceiling panoramic sliding glass systems, and thermally insulated casement windows.',
      linkCategory: 'upvc-doors-windows'
    },
    {
      title: 'Apartments & Condominiums',
      subtitle: 'High-Rise Living with Acoustic Comfort',
      icon: Building,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      description: 'Wind-resistant 3-track sliding balcony doors with integrated mosquito mesh and sound-dampening double glazing.',
      linkCategory: 'sliding-doors-windows'
    },
    {
      title: 'Offices & Workspaces',
      subtitle: 'Corporate Acoustic Partitions',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      description: 'Acoustic double-glazed demountable glass partition systems, switchable smart glass, and frameless pivot meeting room doors.',
      linkCategory: 'glass-partitions'
    },
    {
      title: 'Hotels & Hospitality',
      subtitle: 'Resorts, Lounges & Guest Suites',
      icon: Hotel,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      description: 'Concertina bi-fold patio doors opening to landscaped gardens, motorized shading systems, and luxury spa shower cubicles.',
      linkCategory: 'shower-partitions-cubicles'
    },
    {
      title: 'Commercial & Retail',
      subtitle: 'Showrooms & Storefront Facades',
      icon: Store,
      image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80',
      description: 'High-clarity structural glass facades, heavy-duty floor spring glass entry doors, and architectural hardware fittings.',
      linkCategory: 'folding-systems'
    },
    {
      title: 'Bathrooms & Interiors',
      subtitle: 'En-Suites, Dressing & Room Dividers',
      icon: Bath,
      image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
      description: 'Frameless 10mm glass shower enclosures, space-saving pocket cavity sliding doors, and fluted decorative acoustic wall panels.',
      linkCategory: 'interior-bathroom-panels'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-charcoal-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-bronze-600 bg-warm-100 px-3 py-1 rounded-full">
            Tailored Applications
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-navy tracking-tight">
            Solutions Engineered for Every Space
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            From private sanctuaries to dynamic corporate environments, discover configurations tailored to your project type.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-subtle border border-charcoal-200 flex flex-col justify-end min-h-[380px]"
              >
                {/* Background Image */}
                <img
                  src={app.image}
                  alt={app.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Rich Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-black/20 group-hover:via-navy-dark/80 transition-colors" />

                {/* Content */}
                <div className="relative z-10 p-7 text-white space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-bronze-300">
                    <Icon size={20} />
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold text-bronze-300 uppercase tracking-wider block">
                      {app.subtitle}
                    </span>
                    <h3 className="font-display font-bold text-xl text-white mt-0.5">
                      {app.title}
                    </h3>
                  </div>

                  <p className="text-xs text-warm-200/90 leading-relaxed line-clamp-3">
                    {app.description}
                  </p>

                  <div className="pt-2">
                    <Link
                      to={`/category/${app.linkCategory}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-bronze-300 hover:text-white transition-colors"
                    >
                      <span>Explore Systems</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
