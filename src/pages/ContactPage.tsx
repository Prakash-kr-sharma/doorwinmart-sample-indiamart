import React, { useState } from 'react';
import { categories } from '../data/categories';
import { faqs } from '../data/faqs';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  ShieldAlert,
  ChevronDown,
  Sparkles
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    categorySlug: 'upvc-doors-windows',
    productName: '',
    projectType: 'residential',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid phone number is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email address is required';
    if (!formData.city.trim()) errs.city = 'City / Project location is required';
    if (!formData.message.trim()) errs.message = 'Please provide details about your project or requirement';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitted(true);
  };

  return (
    <div className="bg-warm-50 min-h-screen pb-24">
      {/* Banner */}
      <div className="relative bg-navy-dark text-white py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="DoorWinMart Showroom"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/90 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />

          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-bronze-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={13} />
              <span>Showroom & Project Enquiries</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Get in Touch with DoorWinMart
            </h1>
            <p className="text-sm sm:text-base text-warm-200 leading-relaxed max-w-2xl">
              We welcome homeowners, architects, and builders to discuss elevations, material finishes, and custom opening requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-charcoal-200/80 shadow-subtle">
            <h2 className="font-display font-bold text-2xl text-navy mb-2">
              Send an Architectural Enquiry
            </h2>
            <p className="text-xs text-charcoal-500 mb-8">
              Fill out the form below. For rapid responses regarding active floorplans, you may also message our team via WhatsApp.
            </p>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-display font-bold text-xl text-navy">
                  Enquiry Form Validated (Frontend Demo)
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-navy">{formData.fullName}</span>. Your enquiry for{' '}
                  <span className="font-semibold text-navy">{formData.city}</span> has been captured in local state.
                </p>
                <div className="p-3 bg-white rounded-xl text-xs text-charcoal-500 border border-emerald-100 text-left">
                  <span className="font-semibold text-navy block mb-1">Developer & Client Note:</span>
                  This form is operating in frontend prototype mode. In production, this connects to an email or CRM endpoint.
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        city: '',
                        categorySlug: 'upvc-doors-windows',
                        productName: '',
                        projectType: 'residential',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 bg-navy text-white text-xs font-semibold rounded-lg hover:bg-navy-dark transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ar. Siddharth Rao"
                      className={`w-full px-3.5 py-2.5 text-xs rounded-lg border ${
                        errors.fullName ? 'border-red-500 bg-red-50' : 'border-charcoal-200'
                      } focus:outline-none focus:border-navy`}
                    />
                    {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={`w-full px-3.5 py-2.5 text-xs rounded-lg border ${
                        errors.phone ? 'border-red-500 bg-red-50' : 'border-charcoal-200'
                      } focus:outline-none focus:border-navy`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="architect@domain.com"
                      className={`w-full px-3.5 py-2.5 text-xs rounded-lg border ${
                        errors.email ? 'border-red-500 bg-red-50' : 'border-charcoal-200'
                      } focus:outline-none focus:border-navy`}
                    />
                    {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      City / Project Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. New Delhi, Mumbai, Bengaluru"
                      className={`w-full px-3.5 py-2.5 text-xs rounded-lg border ${
                        errors.city ? 'border-red-500 bg-red-50' : 'border-charcoal-200'
                      } focus:outline-none focus:border-navy`}
                    />
                    {errors.city && <p className="text-[11px] text-red-500 mt-1">{errors.city}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Product Category
                    </label>
                    <select
                      value={formData.categorySlug}
                      onChange={(e) => setFormData({ ...formData, categorySlug: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-charcoal-200 focus:outline-none focus:border-navy bg-white"
                    >
                      {categories.map((c) => (
                        <option key={c.id} value={c.slug}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-charcoal-200 focus:outline-none focus:border-navy bg-white"
                    >
                      <option value="residential">Residential Villa / House</option>
                      <option value="apartment">High-Rise Apartment</option>
                      <option value="commercial">Commercial / Corporate Office</option>
                      <option value="renovation">Renovation & Glazing Replacement</option>
                      <option value="hospitality">Hotel / Resort / Hospitality</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    Product Model / Specific Title <span className="text-charcoal-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.productName}
                    onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                    placeholder="e.g. Series 70 UPVC Casement or 10mm Frameless Shower Screen"
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-charcoal-200 focus:outline-none focus:border-navy"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    Your Message / Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your opening dimensions, glass preference (e.g. double glazed acoustic), or site timeline..."
                    className={`w-full px-3.5 py-2.5 text-xs rounded-lg border ${
                      errors.message ? 'border-red-500 bg-red-50' : 'border-charcoal-200'
                    } focus:outline-none focus:border-navy resize-none`}
                  />
                  {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-navy hover:bg-navy-dark text-white text-xs font-semibold rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={15} />
                    <span>Submit Enquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details, Hours & Map Mockup */}
          <div className="lg:col-span-5 space-y-6">
            {/* Showroom & Contact info card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-charcoal-200/80 shadow-subtle space-y-6">
              <h3 className="font-display font-bold text-lg text-navy">
                Showroom & Office Information
              </h3>

              <div className="space-y-4 text-xs text-charcoal-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-warm-100 flex items-center justify-center text-navy shrink-0">
                    <MapPin size={16} className="text-bronze-600" />
                  </div>
                  <div>
                    <span className="font-bold text-charcoal-900 block mb-0.5">Physical Address (Placeholder)</span>
                    <p className="text-charcoal-600 leading-relaxed">
                      Ground & 1st Floor, Design Avenue, Architectural District, New Delhi - 110001, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-warm-100 flex items-center justify-center text-navy shrink-0">
                    <Phone size={16} className="text-bronze-600" />
                  </div>
                  <div>
                    <span className="font-bold text-charcoal-900 block mb-0.5">Telephone</span>
                    <p className="text-charcoal-600">
                      +91 98765 43210 / +91 98111 22334
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-warm-100 flex items-center justify-center text-navy shrink-0">
                    <Mail size={16} className="text-bronze-600" />
                  </div>
                  <div>
                    <span className="font-bold text-charcoal-900 block mb-0.5">Email</span>
                    <p className="text-charcoal-600">
                      contact@doorwinmart.com / info@doorwinmart.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-warm-100 flex items-center justify-center text-navy shrink-0">
                    <Clock size={16} className="text-bronze-600" />
                  </div>
                  <div>
                    <span className="font-bold text-charcoal-900 block mb-0.5">Consultation Hours</span>
                    <p className="text-charcoal-600">
                      Monday to Saturday: 9:30 AM – 7:00 PM<br />
                      Sunday: By Prior Appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4 border-t border-charcoal-100">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <MessageCircle size={16} />
                  <span>Start WhatsApp Consultation (+91 98765 43210)</span>
                </a>
              </div>
            </div>

            {/* Interactive Map Placeholder */}
            <div className="bg-white rounded-3xl border border-charcoal-200/80 overflow-hidden shadow-subtle">
              <div className="relative aspect-[16/9] bg-warm-200 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                  alt="City Map Location Placeholder"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-navy/20 flex flex-col items-center justify-center text-center p-4">
                  <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center shadow-lg mb-2">
                    <MapPin size={20} className="text-bronze-300" />
                  </div>
                  <span className="font-display font-bold text-sm text-navy bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                    DoorWinMart Experience Center
                  </span>
                  <span className="text-[11px] text-charcoal-700 mt-1 bg-white/80 px-2 py-0.5 rounded">
                    Architectural District, New Delhi
                  </span>
                </div>
              </div>
              <div className="p-4 bg-warm-50 text-[11px] text-charcoal-500 text-center border-t border-charcoal-100">
                Interactive GPS showroom directions can be integrated here.
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-20 bg-white p-8 sm:p-12 rounded-3xl border border-charcoal-200/80 shadow-subtle space-y-4">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-bronze-600">
              Assistance & Enquiries
            </span>
            <h3 className="font-display font-bold text-2xl text-navy mt-1">
              Common Questions Before Visiting or Enquiring
            </h3>
          </div>

          <div className="divide-y divide-charcoal-100 pt-4">
            {faqs.map((faq) => (
              <details key={faq.id} className="group py-4 cursor-pointer">
                <summary className="flex items-center justify-between font-display font-semibold text-sm text-charcoal-900 list-none group-hover:text-navy">
                  <span>{faq.question}</span>
                  <ChevronDown size={16} className="text-charcoal-400 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-2 text-xs sm:text-sm text-charcoal-600 leading-relaxed pr-6">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
