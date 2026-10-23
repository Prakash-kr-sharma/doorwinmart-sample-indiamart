import React from 'react';
import { Palette, Shield, Building2, Sliders, Headset, MessageSquareQuote } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const points = [
    {
      icon: Palette,
      title: 'Modern Designs',
      description: 'Clean architectural geometries, ultra-slim profile sightlines, and contemporary finishes that complement modern interiors.'
    },
    {
      icon: Shield,
      title: 'Quality-Focused Products',
      description: 'Rigorous selection of materials, heavy-duty hardware components, and precision sealing systems built for longevity.'
    },
    {
      icon: Building2,
      title: 'Solutions for Different Spaces',
      description: 'Versatile product lines optimized for villas, high-rise apartments, executive offices, hospitality, and residential retreats.'
    },
    {
      icon: Sliders,
      title: 'Customization Options',
      description: 'Tailored dimensions, diverse glass specifications, specialized acoustic interlayers, and distinct finish palettes.'
    },
    {
      icon: Headset,
      title: 'Professional Assistance',
      description: 'Collaborative technical guidance to review floor plans, evaluate opening requirements, and recommend suitable systems.'
    },
    {
      icon: MessageSquareQuote,
      title: 'Convenient Enquiry Process',
      description: 'Streamlined online quotation requests and fast direct WhatsApp consultations to discuss project timelines and estimates.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-warm-50 border-b border-charcoal-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-bronze-600 bg-warm-200/80 px-3 py-1 rounded-full">
            Our Architectural Approach
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-navy tracking-tight">
            Why Choose DoorWinMart?
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            We focus on thoughtful engineering, refined aesthetic details, and seamless consultation to bring architectural visions to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-charcoal-200/80 shadow-subtle hover:shadow-card hover:border-navy/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-warm-100 text-navy flex items-center justify-center mb-6 border border-charcoal-200/60">
                    <Icon size={24} className="text-bronze-600" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-charcoal-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
