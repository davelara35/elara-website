
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  fullName: string;
  practiceName: string;
  email: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  practiceName?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    practiceName: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.practiceName.trim()) {
      newErrors.practiceName = 'Practice name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us how we can help';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Form submitted:', formData);

      setSubmitStatus('success');
      setFormData({ fullName: '', practiceName: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto rounded-[40px] glass border overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 p-10 md:p-16 bg-indigo-600">
              <h2 className="text-4xl font-bold mb-6">Let's build your AI Receptionist</h2>
              <p className="text-indigo-100 text-lg mb-12">
                We're here to help you transform your practice. Reach out anytime.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-indigo-200 uppercase tracking-widest font-bold">Location</div>
                    <div className="font-medium text-white">Nashville, Tennessee</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-indigo-200 uppercase tracking-widest font-bold">Email</div>
                    <a href="mailto:david@tryelara.org" className="font-medium text-white hover:underline">
                      david@tryelara.org
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-indigo-200 uppercase tracking-widest font-bold">Phone</div>
                    <a href="tel:+19199990603" className="font-medium text-white hover:underline">
                      +1 (919)-999-0603
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 p-10 md:p-16 bg-black/20">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      className={`w-full bg-white/5 border rounded-xl px-4 py-4 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-indigo-500'
                      }`}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="text-red-400 text-sm flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="practiceName" className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Practice Name *
                    </label>
                    <input
                      id="practiceName"
                      name="practiceName"
                      type="text"
                      placeholder="Wellness Clinic"
                      value={formData.practiceName}
                      onChange={handleChange}
                      aria-invalid={!!errors.practiceName}
                      aria-describedby={errors.practiceName ? "practiceName-error" : undefined}
                      className={`w-full bg-white/5 border rounded-xl px-4 py-4 focus:outline-none transition-colors ${
                        errors.practiceName ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-indigo-500'
                      }`}
                    />
                    {errors.practiceName && (
                      <p id="practiceName-error" className="text-red-400 text-sm flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.practiceName}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Work Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-4 focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-indigo-500'
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    How can we help? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your practice needs..."
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-4 focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-indigo-500'
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <p className="text-green-500 font-medium">
                      Thank you! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <p className="text-red-500 font-medium">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-indigo-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;