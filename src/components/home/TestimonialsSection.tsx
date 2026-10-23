import React from 'react';
import { testimonials } from '../../data/testimonials';
import { Star, MessageSquareQuote, ShieldAlert } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-warm-100/70 border-b border-charcoal-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-bronze-600 bg-warm-200 px-3 py-1 rounded-full">
            Client Perspectives
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-navy tracking-tight">
            Architect & Homeowner Feedback
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            Sample architectural reviews showcasing design collaboration across residential and commercial spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-white p-8 rounded-2xl border border-charcoal-200/80 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-charcoal-700 italic leading-relaxed">
                  "{test.quote}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-charcoal-100 flex items-center gap-3">
                <img
                  src={test.avatar}
                  alt={test.author}
                  className="w-11 h-11 rounded-full object-cover border border-charcoal-200"
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-charcoal-900">
                    {test.author}
                  </h4>
                  <p className="text-xs text-charcoal-500">
                    {test.role} • {test.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Notice Label */}
        <div className="mt-10 max-w-2xl mx-auto p-3.5 rounded-xl bg-white border border-charcoal-200 text-center text-xs text-charcoal-500 flex items-center justify-center gap-2">
          <ShieldAlert size={15} className="text-bronze-600 shrink-0" />
          <span>Note: The testimonials above are sample placeholder feedback designed for prototype presentation.</span>
        </div>
      </div>
    </section>
  );
};
