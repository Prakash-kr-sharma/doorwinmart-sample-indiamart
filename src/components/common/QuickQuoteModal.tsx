import React, { useState, useEffect } from 'react';
import { categories } from '../../data/categories';
import { X, CheckCircle2, ShieldCheck, Send, Sparkles } from 'lucide-react';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledProduct?: string;
  prefilledCategory?: string;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({
  isOpen,
  onClose,
  prefilledProduct,
  prefilledCategory,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    projectType: 'residential',
    categorySlug: prefilledCategory || '',
    productName: prefilledProduct || '',
    approxQuantity: '1 - 5 units',
    approxDimensions: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        categorySlug: prefilledCategory || prev.categorySlug || categories[0].slug,
        productName: prefilledProduct || prev.productName || ''
      }));
      setIsSubmitted(false);
      setErrors({});
    }
  }, [isOpen, prefilledCategory, prefilledProduct]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid phone number is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.city.trim()) errs.city = 'Project city/location is required';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Success state in local prototype
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-charcoal-200 overflow-hidden z-50 animate-fadeIn">
        {/* Header */}
        <div className="px-6 py-5 bg-navy text-white flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-bronze-300 uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles size={13} />
              <span>DoorWinMart Direct Enquiry</span>
            </span>
            <h3 className="text-lg sm:text-xl font-display font-bold mt-0.5 text-white">
              {formData.productName ? `Quote for: ${formData.productName}` : 'Request a Free Project Quotation'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-warm-200 hover:text-white rounded-lg hover:bg-navy-light transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="text-xl font-display font-bold text-navy">
                Quotation Request Generated
              </h4>
              <p className="text-sm text-charcoal-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-navy">{formData.fullName}</span>. Your enquiry for{' '}
                <span className="font-medium text-navy">{formData.productName || 'selected systems'}</span> in{' '}
                <span className="font-medium text-navy">{formData.city}</span> has been simulated successfully.
              </p>

              {/* Prototype notice */}
              <div className="bg-warm-100 p-4 rounded-xl border border-charcoal-200 text-left text-xs text-charcoal-600 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-navy">
                  <ShieldCheck size={16} className="text-bronze-600" />
                  <span>Frontend Prototype Confirmation</span>
                </div>
                <p>
                  This form is currently running as a functional frontend prototype. Your submitted details have been captured in local state and validated. Once connected to a live CRM or email API, this triggers an automated quotation workflow.
                </p>
                <div className="pt-1 text-[11px] text-charcoal-500 font-mono">
                  Ref ID: DWM-{Math.floor(100000 + Math.random() * 900000)} | Generated: {new Date().toLocaleDateString()}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-navy text-white text-xs font-semibold rounded-lg hover:bg-navy-dark transition-colors"
                >
                  Close Window
                </button>
                <a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(
                    `Hi DoorWinMart, I submitted a quote request for ${formData.productName || 'architectural products'} in ${formData.city}. Name: ${formData.fullName}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>Continue on WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ar. Rajesh Sharma"
                    className={`w-full px-3.5 py-2.5 text-xs rounded-lg border ${
                      errors.fullName ? 'border-red-500 bg-red-50' : 'border-charcoal-200'
                    } focus:outline-none focus:border-navy`}
                  />
                  {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    Phone / WhatsApp <span className="text-red-500">*</span>
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
                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className={`w-full px-3.5 py-2.5 text-xs rounded-lg border ${
                      errors.email ? 'border-red-500 bg-red-50' : 'border-charcoal-200'
                    } focus:outline-none focus:border-navy`}
                  />
                  {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                </div>

                {/* City */}
                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    City / Project Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Gurugram, Mumbai, Delhi"
                    className={`w-full px-3.5 py-2.5 text-xs rounded-lg border ${
                      errors.city ? 'border-red-500 bg-red-50' : 'border-charcoal-200'
                    } focus:outline-none focus:border-navy`}
                  />
                  {errors.city && <p className="text-[11px] text-red-500 mt-1">{errors.city}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Category Selection */}
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

                {/* Project Type */}
                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-charcoal-200 focus:outline-none focus:border-navy bg-white"
                  >
                    <option value="residential">Residential Villa / Independent House</option>
                    <option value="apartment">Apartment / High-Rise Condominium</option>
                    <option value="commercial">Commercial Office / Workplace</option>
                    <option value="renovation">Renovation / Replacement</option>
                    <option value="hospitality">Hotel / Resort / Hospitality</option>
                  </select>
                </div>
              </div>

              {/* Product Name (if any) */}
              {formData.productName && (
                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    Selected Product Model
                  </label>
                  <input
                    type="text"
                    value={formData.productName}
                    readOnly
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-charcoal-200 bg-warm-100 font-medium text-navy cursor-not-allowed"
                  />
                </div>
              )}

              {/* Approximate Dimensions or Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    Approximate Quantity
                  </label>
                  <select
                    value={formData.approxQuantity}
                    onChange={(e) => setFormData({ ...formData, approxQuantity: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-charcoal-200 focus:outline-none focus:border-navy bg-white"
                  >
                    <option value="1 - 3 units">1 - 3 units (Single room)</option>
                    <option value="4 - 10 units">4 - 10 units (Apartment)</option>
                    <option value="11 - 25 units">11 - 25 units (Full Villa)</option>
                    <option value="25+ units">25+ units (Commercial / Project)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    Approx Dimensions (W x H) <span className="text-charcoal-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.approxDimensions}
                    onChange={(e) => setFormData({ ...formData, approxDimensions: e.target.value })}
                    placeholder="e.g. 8ft x 7ft or 2400 x 2100 mm"
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-charcoal-200 focus:outline-none focus:border-navy"
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                  Specific Requirements / Glass & Finish Preference
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention double glazing, acoustic requirements, preferred color (e.g. matte black), or site conditions..."
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-charcoal-200 focus:outline-none focus:border-navy resize-none"
                />
              </div>

              {/* Demo note */}
              <p className="text-[11px] text-charcoal-500 leading-snug">
                * Note: Submitting this form tests the frontend validation and triggers a mock quotation acknowledgement.
              </p>

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-navy hover:bg-navy-dark text-white text-xs font-semibold rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
                >
                  <Send size={15} />
                  <span>Submit Quotation Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
