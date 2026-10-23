import React from 'react';
import { services } from '../data/services';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Sparkles, CheckCircle2, FileText, ArrowRight, Compass, ShieldCheck } from 'lucide-react';

interface ServicesPageProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuote }) => {
  return (
    <div className="bg-warm-50 min-h-screen pb-24">
      {/* Banner */}
      <div className="relative bg-navy-dark text-white py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="DoorWinMart Services"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/90 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Services' }]} />

          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-bronze-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={13} />
              <span>Architectural Offerings</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Fenestration & Architectural Services
            </h1>
            <p className="text-sm sm:text-base text-warm-200 leading-relaxed max-w-2xl">
              From blueprint review and acoustic glazing specifications to bespoke dimensional quotations, explore our specialized service offerings.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-charcoal-200/80 shadow-subtle hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Service image */}
                <div className="relative aspect-[16/10] bg-warm-200 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 right-4 font-display font-bold text-lg text-white">
                    {service.title}
                  </h3>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  <div className="pt-2 border-t border-charcoal-100 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-bronze-600 block">
                      Scope & Deliverables:
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-charcoal-700">
                          <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenQuote(service.title)}
                  className="w-full py-2.5 px-4 bg-navy hover:bg-navy-dark text-white text-xs font-semibold rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <FileText size={14} className="text-bronze-300" />
                  <span>Enquire for this Service</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Verification disclaimer banner */}
        <div className="p-5 rounded-2xl bg-warm-100 border border-charcoal-200 flex items-start gap-3 text-xs text-charcoal-600 leading-relaxed">
          <ShieldCheck size={18} className="text-bronze-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-navy">Service Scope Disclaimer: </span>
            The services outlined above represent DoorWinMart's consultative and product supply assistance offerings. On-site delivery, structural civil works, and installation schedules are arranged subject to regional location and commercial contractor agreements.
          </div>
        </div>
      </div>
    </div>
  );
};
