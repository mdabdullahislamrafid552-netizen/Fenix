import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, MessageSquare, Phone } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Full-Home Renovation',
    location: 'Doha, Qatar',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Fenix Renovations, I would like to get a quote for a ${formData.projectType} in ${formData.location}. My name is ${formData.name || 'a client'}.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs transition-all duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-black/10 overflow-hidden text-[#111111]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-black/5 bg-white">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#777777] font-medium block mb-1">
              Fenix Renovations · Doha
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#111111] font-normal">
              Get a Quote
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#777777] hover:text-[#111111] hover:bg-black/5 rounded-full transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-black/5 text-[#111111] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl text-[#111111]">Thank You, {formData.name || 'Valued Client'}</h4>
              <p className="text-[#666666] text-sm max-w-sm mx-auto font-light leading-relaxed">
                Your request has been received. Our team will review your project details and contact you shortly.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/97451828555?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full font-medium text-xs shadow-sm hover:bg-[#1EBE5D] transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat via WhatsApp (+974 518 28 555)
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-3 border border-black/15 rounded-full font-medium text-xs text-[#111111] hover:bg-black/5 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Project Type */}
              <div>
                <label className="block text-xs font-medium text-[#555555] mb-2">
                  Select Service
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Full-Home Renovation',
                    'Kitchen Upgrade',
                    'Majlis & Living Spaces',
                    'Bathroom & Master Suite',
                  ].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      className={`px-3 py-2 text-xs text-left rounded-xl border transition-all ${
                        formData.projectType === type
                          ? 'border-[#111111] bg-black text-white font-medium shadow-xs'
                          : 'border-black/10 bg-white text-[#555555] hover:border-black/30'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-[#555555] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-black/15 rounded-xl text-xs text-[#111111] focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#555555] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+974 518 28 555"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-black/15 rounded-xl text-xs text-[#111111] focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#555555] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-black/15 rounded-xl text-xs text-[#111111] focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#555555] mb-1">
                  Project Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your spaces, timeline, or location in Qatar..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-black/15 rounded-xl text-xs text-[#111111] focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-black/5">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs text-[#777777] hover:text-[#111111]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#332620] hover:bg-[#1F1714] text-white text-xs font-medium rounded-full transition-all shadow-sm"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
