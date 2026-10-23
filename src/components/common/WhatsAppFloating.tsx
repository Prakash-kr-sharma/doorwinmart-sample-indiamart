import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloating: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2">
      {/* Interactive Tooltip Banner */}
      {showTooltip && (
        <div className="bg-white p-3 rounded-xl shadow-card border border-charcoal-200/80 max-w-xs text-xs animate-fadeIn relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-charcoal-400 hover:text-charcoal-700 p-0.5 rounded"
            aria-label="Dismiss chat tooltip"
          >
            <X size={13} />
          </button>
          <div className="font-semibold text-navy flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Need architectural advice?</span>
          </div>
          <p className="text-charcoal-600 text-[11px] leading-snug">
            Share your room measurements or blueprints directly on WhatsApp for quick guidance.
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href="https://wa.me/919876543210?text=Hi%20DoorWinMart%20team%2C%20I%20am%20interested%20in%20getting%20a%20quotation%20for%20doors%20and%20windows."
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 relative group"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="fill-current" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
          1
        </span>
      </a>
    </div>
  );
};
