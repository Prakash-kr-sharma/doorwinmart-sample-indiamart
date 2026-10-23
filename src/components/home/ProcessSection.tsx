import React from 'react';
import { Search, FileSpreadsheet, Calculator, MessageSquare } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: Search,
      title: 'Explore Products',
      description: 'Browse our specialized door, window, glass partition, and interior panel collections to find systems suited to your style.'
    },
    {
      step: '02',
      icon: FileSpreadsheet,
      title: 'Share Requirements',
      description: 'Submit your room dimensions, architectural blueprints, or preferred materials via our quotation form or WhatsApp.'
    },
    {
      step: '03',
      icon: Calculator,
      title: 'Receive a Quote',
      description: 'Our technical estimation specialists prepare an itemized preliminary quote tailored to your requested profiles and glass.'
    },
    {
      step: '04',
      icon: MessageSquare,
      title: 'Discuss Your Project',
      description: 'Review hardware choices, acoustic options, and delivery timelines in detail with our dedicated architectural team.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-charcoal-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-bronze-600 bg-warm-100 px-3 py-1 rounded-full">
            Simple 4-Step Consultation
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-navy tracking-tight">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            From initial product discovery to personalized architectural quotation, our process is designed for clarity and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-warm-50 p-7 rounded-2xl border border-charcoal-200/70 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-extrabold text-3xl text-navy/20">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center shadow-sm">
                      <Icon size={20} className="text-bronze-300" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-charcoal-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {item.description}
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
