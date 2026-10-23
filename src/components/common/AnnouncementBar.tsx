import React from 'react';
import { Phone, Mail, MessageCircle, Clock } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-navy-dark text-warm-200 text-xs border-b border-navy-light/40 py-2 px-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-bronze-400 animate-pulse"></span>
            <span className="font-medium tracking-wide text-white">DoorWinMart</span>
            <span className="text-warm-300 hidden sm:inline">|</span>
            <span className="text-warm-300 hidden sm:inline">Premium Doors, Windows & Interior Solutions</span>
          </div>
        </div>

        <div className="flex items-center gap-5 flex-wrap justify-center">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 hover:text-bronze-300 transition-colors"
            title="Call Us (Placeholder)"
          >
            <Phone size={13} className="text-bronze-400" />
            <span>+91 98765 43210</span>
          </a>

          <a
            href="https://wa.me/919876543210?text=Hello%20DoorWinMart%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors text-warm-200"
            title="WhatsApp Enquiry"
          >
            <MessageCircle size={13} className="text-emerald-400" />
            <span>WhatsApp Enquiry</span>
          </a>

          <a
            href="mailto:contact@doorwinmart.com"
            className="hidden lg:flex items-center gap-1.5 hover:text-bronze-300 transition-colors"
          >
            <Mail size={13} className="text-bronze-400" />
            <span>contact@doorwinmart.com</span>
          </a>

          <div className="hidden xl:flex items-center gap-1.5 text-warm-300">
            <Clock size={13} className="text-bronze-400" />
            <span>Mon - Sat: 9:30 AM - 7:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};
