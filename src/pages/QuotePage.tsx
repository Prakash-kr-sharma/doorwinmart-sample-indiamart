import React, { useState } from 'react';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import {
  FileText,
  Upload,
  CheckCircle2,
  ShieldCheck,
  Send,
  X,
  FileCheck,
  Sparkles,
  HelpCircle,
  MessageCircle
} from 'lucide-react';

export const QuotePage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    projectType: 'residential',
    categorySlug: 'upvc-doors-windows',
    productId: '',
    approxQuantity: '4 - 10 units',
    approxDimensions: '',
    preferredMaterial: 'UPVC Tropicalized',
    message: ''
  });

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteReferenceId, setQuoteReferenceId] = useState('');

  // Products filtered for the currently selected category in the form
  const categoryProducts = products.filter((p) => p.categorySlug === formData.categorySlug);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid phone number is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.city.trim()) errs.city = 'City or project location is required';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }
    setErrors({});
    const refId = `DWM-${Math.floor(100000 + Math.random() * 900000)}`;
    setQuoteReferenceId(refId);
    setIsSubmitted(true);
    window.scrollTo({ top: 150, behavior: 'smooth' });
  };

  const selectedCategoryObj = categories.find((c) => c.slug === formData.categorySlug);

  return (
    <div className="bg-warm-50 min-h-screen pb-24">
      {/* Banner */}
      <div className="relative bg-navy-dark text-white py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="Quotation Consultation"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/90 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Request a Quote' }]} />

          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-bronze-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={13} />
              <span>Project Estimation Desk</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Request a Custom Project Quotation
            </h1>
            <p className="text-sm sm:text-base text-warm-200 leading-relaxed max-w-2xl">
              Specify your project type, select from 12 architectural systems, and upload floorplans or opening schedules for an itemized estimate.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {isSubmitted ? (
          /* Confirmation Screen */
          <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-charcoal-200/80 p-8 sm:p-14 shadow-card text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 size={36} />
            </div>

            <div>
              <span className="px-3 py-1 rounded-full bg-navy/10 text-navy font-mono text-xs font-semibold">
                Reference ID: {quoteReferenceId}
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-navy mt-3">
                Quotation Request Generated
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 mt-2 max-w-lg mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-navy">{formData.fullName}</span>. Your request for{' '}
                <span className="font-semibold text-navy">{selectedCategoryObj?.name}</span> in{' '}
                <span className="font-semibold text-navy">{formData.city}</span> has been validated in local prototype state.
              </p>
            </div>

            {/* Summary Box */}
            <div className="p-6 rounded-2xl bg-warm-100 border border-charcoal-200 text-left space-y-3 text-xs">
              <h4 className="font-display font-bold text-sm text-navy pb-2 border-b border-charcoal-200">
                Summary of Submitted Specifications:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-charcoal-700">
                <div>
                  <span className="text-charcoal-500">Project Type:</span>{' '}
                  <span className="font-semibold capitalize">{formData.projectType}</span>
                </div>
                <div>
                  <span className="text-charcoal-500">Category:</span>{' '}
                  <span className="font-semibold">{selectedCategoryObj?.name}</span>
                </div>
                <div>
                  <span className="text-charcoal-500">Approx Quantity:</span>{' '}
                  <span className="font-semibold">{formData.approxQuantity}</span>
                </div>
                <div>
                  <span className="text-charcoal-500">Material Preferred:</span>{' '}
                  <span className="font-semibold">{formData.preferredMaterial}</span>
                </div>
                {formData.approxDimensions && (
                  <div>
                    <span className="text-charcoal-500">Dimensions:</span>{' '}
                    <span className="font-semibold">{formData.approxDimensions}</span>
                  </div>
                )}
                {uploadedFiles.length > 0 && (
                  <div>
                    <span className="text-charcoal-500">Attached Files:</span>{' '}
                    <span className="font-semibold">{uploadedFiles.length} file(s)</span>
                  </div>
                )}
              </div>
            </div>

            {/* Prototype notice */}
            <div className="p-4 rounded-xl bg-warm-50 border border-charcoal-200/80 text-left text-xs text-charcoal-600 flex items-start gap-3">
              <ShieldCheck size={18} className="text-bronze-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-navy">Frontend Prototype Confirmation: </span>
                This quotation interface functions using local browser state and frontend validation. No real email or server request has been transmitted. The code is ready for seamless backend or CRM integration.
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setUploadedFiles([]);
                }}
                className="px-6 py-3 bg-navy text-white text-xs font-semibold rounded-xl hover:bg-navy-dark transition-colors"
              >
                Submit Another Request
              </button>
              <a
                href={`https://wa.me/919876543210?text=${encodeURIComponent(
                  `Hi DoorWinMart, I just submitted Quotation Request ${quoteReferenceId} for ${selectedCategoryObj?.name} in ${formData.city}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={15} />
                <span>Continue on WhatsApp with Ref #{quoteReferenceId}</span>
              </a>
            </div>
          </div>
        ) : (
          /* Multi-Section Quotation Wizard Form */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Form (8 cols) */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-3xl border border-charcoal-200/80 shadow-subtle space-y-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Section 1: Project Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-charcoal-100">
                    <span className="w-6 h-6 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center">
                      1
                    </span>
                    <h3 className="font-display font-bold text-base text-navy">
                      Project Information & Location
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Full Name / Architectural Firm <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Ar. Kabir Anand"
                        className={`w-full px-3.5 py-2.5 text-xs rounded-lg border ${
                          errors.fullName ? 'border-red-500 bg-red-50' : 'border-charcoal-200'
                        } focus:outline-none focus:border-navy`}
                      />
                      {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
                    </div>

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
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="kabir@anandarchitects.com"
                        className={`w-full px-3.5 py-2.5 text-xs rounded-lg border ${
                          errors.email ? 'border-red-500 bg-red-50' : 'border-charcoal-200'
                        } focus:outline-none focus:border-navy`}
                      />
                      {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        City / Site Location <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Gurugram, Mumbai, Bengaluru"
                        className={`w-full px-3.5 py-2.5 text-xs rounded-lg border ${
                          errors.city ? 'border-red-500 bg-red-50' : 'border-charcoal-200'
                        } focus:outline-none focus:border-navy`}
                      />
                      {errors.city && <p className="text-[11px] text-red-500 mt-1">{errors.city}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Project Classification
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'residential', label: 'Residential Villa' },
                        { id: 'apartment', label: 'Apartment' },
                        { id: 'commercial', label: 'Office / Commercial' },
                        { id: 'renovation', label: 'Renovation' }
                      ].map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type.id })}
                          className={`py-2 px-3 text-xs rounded-lg border text-center transition-all ${
                            formData.projectType === type.id
                              ? 'bg-navy text-white border-navy font-semibold'
                              : 'bg-warm-50 text-charcoal-700 border-charcoal-200 hover:border-charcoal-400'
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 2: Product & Category Selection */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-charcoal-100">
                    <span className="w-6 h-6 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center">
                      2
                    </span>
                    <h3 className="font-display font-bold text-base text-navy">
                      System Selection & Preferences
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Target Category
                      </label>
                      <select
                        value={formData.categorySlug}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            categorySlug: e.target.value,
                            productId: ''
                          });
                        }}
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
                        Specific Model <span className="text-charcoal-400 font-normal">(Optional)</span>
                      </label>
                      <select
                        value={formData.productId}
                        onChange={(e) => setFormData({ ...formData, productId: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-charcoal-200 focus:outline-none focus:border-navy bg-white"
                      >
                        <option value="">General Category Consultation</option>
                        {categoryProducts.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Approximate Quantity
                      </label>
                      <select
                        value={formData.approxQuantity}
                        onChange={(e) => setFormData({ ...formData, approxQuantity: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-charcoal-200 focus:outline-none focus:border-navy bg-white"
                      >
                        <option value="1 - 3 units">1 - 3 units</option>
                        <option value="4 - 10 units">4 - 10 units</option>
                        <option value="11 - 25 units">11 - 25 units</option>
                        <option value="25+ units">25+ units</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Approx Dimensions (W x H)
                      </label>
                      <input
                        type="text"
                        value={formData.approxDimensions}
                        onChange={(e) => setFormData({ ...formData, approxDimensions: e.target.value })}
                        placeholder="e.g. 2400 x 2100 mm"
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-charcoal-200 focus:outline-none focus:border-navy"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Preferred Material
                      </label>
                      <select
                        value={formData.preferredMaterial}
                        onChange={(e) => setFormData({ ...formData, preferredMaterial: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-charcoal-200 focus:outline-none focus:border-navy bg-white"
                      >
                        <option value="UPVC Tropicalized">UPVC Tropicalized</option>
                        <option value="Aluminium Thermal Break">Aluminium Thermal Break</option>
                        <option value="Solid Hardwood / Timber">Solid Hardwood / Timber</option>
                        <option value="Frameless Safety Glass">Frameless Safety Glass</option>
                        <option value="Consultant Recommendation">Consultant Recommendation</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 3: Reference Blueprint / Photo Upload UI */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-charcoal-100">
                    <span className="w-6 h-6 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center">
                      3
                    </span>
                    <h3 className="font-display font-bold text-base text-navy">
                      Elevation Drawing / Site Photo Upload (Optional)
                    </h3>
                  </div>

                  <div className="border-2 border-dashed border-charcoal-200 hover:border-navy rounded-2xl p-6 text-center bg-warm-50/60 transition-colors relative cursor-pointer">
                    <input
                      type="file"
                      multiple
                      accept="image/*,.pdf,.dwg"
                      onChange={handleFileUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      title="Upload blueprints or reference images"
                    />
                    <div className="w-12 h-12 rounded-xl bg-warm-200 text-navy flex items-center justify-center mx-auto mb-3">
                      <Upload size={22} className="text-bronze-600" />
                    </div>
                    <p className="text-xs font-semibold text-charcoal-800">
                      Drag and drop blueprint, floorplan, or site photos here
                    </p>
                    <p className="text-[11px] text-charcoal-500 mt-1">
                      Supports PDF, DWG, PNG, JPG (Simulated upload UI)
                    </p>
                  </div>

                  {/* Uploaded File List */}
                  {uploadedFiles.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-semibold text-charcoal-700">
                        Selected Files ({uploadedFiles.length}):
                      </span>
                      <div className="space-y-1.5">
                        {uploadedFiles.map((file, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-2.5 rounded-lg bg-warm-100 border border-charcoal-200 text-xs text-charcoal-800"
                          >
                            <div className="flex items-center gap-2 truncate">
                              <FileCheck size={15} className="text-emerald-600 shrink-0" />
                              <span className="truncate">{file.name}</span>
                              <span className="text-[10px] text-charcoal-500">
                                ({(file.size / 1024).toFixed(1)} KB)
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(idx)}
                              className="text-charcoal-400 hover:text-red-500 p-1"
                              aria-label="Remove file"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Section 4: Additional Requirements */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-charcoal-100">
                    <span className="w-6 h-6 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center">
                      4
                    </span>
                    <h3 className="font-display font-bold text-base text-navy">
                      Additional Requirements & Glass Notes
                    </h3>
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify acoustic glass requirements, double glazed argon fill, preferred hardware finishes (e.g. brushed brass, matte black), or timeline..."
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-charcoal-200 focus:outline-none focus:border-navy resize-none"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-4 border-t border-charcoal-100">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-navy hover:bg-navy-dark text-white text-xs font-semibold rounded-xl shadow-card hover:shadow-card-hover transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    <span>Submit Complete Quotation Request</span>
                  </button>
                  <p className="text-[11px] text-charcoal-500 text-center mt-2">
                    * Submitting this form generates a sample quote confirmation in local state.
                  </p>
                </div>
              </form>
            </div>

            {/* Sidebar Summary & FAQ (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Estimation Process Card */}
              <div className="bg-white p-6 rounded-3xl border border-charcoal-200/80 shadow-subtle space-y-4">
                <span className="text-[10px] uppercase font-bold tracking-wider text-bronze-600 block">
                  Estimation Standards
                </span>
                <h4 className="font-display font-bold text-base text-navy">
                  What Happens After Submission?
                </h4>

                <div className="space-y-3 text-xs text-charcoal-600">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-navy text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <p>
                      <strong>Drawing Review:</strong> Our estimators analyze dimensions and elevation wind loads.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-navy text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <p>
                      <strong>Bill of Quantities (BOQ):</strong> You receive an itemized preliminary cost estimate.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-navy text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <p>
                      <strong>Physical Swatches:</strong> Inspect profile samples, glass thicknesses, and finishes.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-charcoal-100">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 bg-warm-100 hover:bg-warm-200 text-navy font-semibold text-xs rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle size={14} className="text-emerald-600" />
                    <span>WhatsApp Direct Line</span>
                  </a>
                </div>
              </div>

              {/* Quick FAQs */}
              <div className="bg-white p-6 rounded-3xl border border-charcoal-200/80 shadow-subtle space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy">
                  <HelpCircle size={15} className="text-bronze-600" />
                  <span>Quotation FAQ</span>
                </div>
                <div className="space-y-3 text-xs text-charcoal-600 pt-1">
                  <div>
                    <h5 className="font-semibold text-charcoal-900 mb-0.5">Are preliminary estimates free?</h5>
                    <p>Yes, all initial architectural BOQ estimates and product recommendations are complimentary.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-charcoal-900 mb-0.5">Can I request multiple materials?</h5>
                    <p>Yes, we can prepare comparative quotes contrasting UPVC versus thermal-break aluminium for the same openings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
