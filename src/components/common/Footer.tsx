import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';
import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-dark text-warm-200 border-t border-navy-light/40">
      {/* Top Banner / Newsletter / Consultation Teaser */}
      <div className="border-b border-navy-light/30 py-10 bg-navy/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-bronze-400 font-semibold text-xs tracking-widest uppercase">
                Architectural Partnerships
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                Collaborating with Architects, Builders & Homeowners
              </h3>
              <p className="text-warm-300 text-sm mt-1 max-w-xl">
                Looking for technical data sheets, CAD profile sections, or custom dimension consultations? Our technical representatives are here to assist.
              </p>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Link
                to="/quote"
                className="w-full sm:w-auto px-6 py-3 bg-bronze-500 hover:bg-bronze-600 text-white font-semibold text-sm rounded-lg shadow-sm transition-all text-center"
              >
                Request Consultation
              </Link>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-lg border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} className="text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-navy-light border border-bronze-400/50 flex items-center justify-center text-white">
                <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                  <div className="border border-bronze-300 rounded-[1px]"></div>
                  <div className="border border-bronze-300 rounded-[1px]"></div>
                  <div className="border border-bronze-300 rounded-[1px]"></div>
                  <div className="border border-bronze-300 rounded-[1px]"></div>
                </div>
              </div>
              <span className="font-display font-bold text-2xl text-white tracking-tight">
                DoorWin<span className="text-bronze-400">Mart</span>
              </span>
            </Link>

            <p className="text-sm text-warm-300 leading-relaxed max-w-sm">
              DoorWinMart curates premium doors, windows, glass partitions, shower enclosures, and shading systems crafted for durability, acoustic privacy, and architectural distinction.
            </p>

            <div className="space-y-3 pt-2 text-xs text-warm-300">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-bronze-400 shrink-0 mt-0.5" />
                <span>Ground & 1st Floor, Design Avenue, Architectural District, New Delhi - 110001 (Placeholder Showroom)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-bronze-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210 / +91 98111 22334
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-bronze-400 shrink-0" />
                <a href="mailto:contact@doorwinmart.com" className="hover:text-white transition-colors">
                  contact@doorwinmart.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-navy-light/40 pb-2">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-warm-300">
              <li>
                <Link to="/" className="hover:text-bronze-400 transition-colors flex items-center justify-between">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-bronze-400 transition-colors flex items-center justify-between">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-bronze-400 transition-colors flex items-center justify-between">
                  <span>Product Catalog</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-bronze-400 transition-colors flex items-center justify-between">
                  <span>Inspiration Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-bronze-400 transition-colors flex items-center justify-between">
                  <span>Services Overview</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-bronze-400 transition-colors flex items-center justify-between">
                  <span>Contact Showroom</span>
                </Link>
              </li>
              <li>
                <Link to="/quote" className="hover:text-bronze-400 transition-colors flex items-center justify-between font-semibold text-bronze-300">
                  <span>Get a Free Quote</span>
                  <ArrowUpRight size={13} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories Part 1 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-navy-light/40 pb-2">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-warm-300">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/category/${cat.slug}`}
                    className="hover:text-bronze-400 transition-colors block truncate"
                    title={cat.name}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories Part 2 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-navy-light/40 pb-2">
              Interior & Hardware
            </h4>
            <ul className="space-y-2.5 text-xs text-warm-300">
              {categories.slice(6, 12).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/category/${cat.slug}`}
                    className="hover:text-bronze-400 transition-colors block truncate"
                    title={cat.name}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer Callout Box */}
        <div className="mt-12 p-4 rounded-xl bg-navy-light/30 border border-navy-light/40 text-[11px] text-warm-300 leading-relaxed flex items-start gap-3">
          <ShieldCheck size={18} className="text-bronze-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white">Notice & Sample Content Disclaimer: </span>
            This website serves as a modernized architectural frontend prototype for DoorWinMart. All product specifications, photographs, sample testimonials, and company details are realistic placeholders for demonstration and quotation inquiries. Please consult our official sales representatives for certified technical data and finalized commercial quotations.
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-10 pt-6 border-t border-navy-light/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm-300">
          <div>
            © {new Date().getFullYear()} DoorWinMart. All rights reserved. Premium Doors, Windows & Glass Solutions.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
