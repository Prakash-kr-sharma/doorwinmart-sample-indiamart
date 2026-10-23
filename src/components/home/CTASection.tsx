import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, PhoneCall, Sparkles, MessageCircle } from 'lucide-react';

interface CTASectionProps {
  onOpenQuote: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative py-20 lg:py-28 bg-navy-dark overflow-hidden">
      {/* Decorative architectural background */}
      <div className="absolute inset-0 opacity-15">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80"
          alt="Architectural space"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Radial overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-navy-light/40 to-navy-dark"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-bronze-300 text-xs font-semibold uppercase tracking-wider">
          <Sparkles size={13} />
          <span>Architectural Consultation</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
          Planning Your Next Space? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-100 via-bronze-200 to-bronze-400">
            Let’s Find the Right Solution.
          </span>
        </h2>

        <p className="text-sm sm:text-base text-warm-200 max-w-2xl mx-auto leading-relaxed">
          Whether you require bespoke sliding glass doors for a new villa or demountable acoustic partitions for corporate offices, our architectural specialists are ready to guide you.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-bronze-500 hover:bg-bronze-600 text-white font-semibold text-sm shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            <FileText size={17} />
            <span>Request a Quote</span>
          </button>

          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all duration-300"
          >
            <PhoneCall size={17} className="text-bronze-300" />
            <span>Contact Our Team</span>
          </Link>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all duration-300"
          >
            <MessageCircle size={17} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
