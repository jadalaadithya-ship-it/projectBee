import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Clock, 
  ShieldCheck,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'student',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-700/50 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Support & Inquiries</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            We’re Here to Help You Learn & Grow
          </h1>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Have questions about student accounts, parental consent, institutional teacher access, or curriculum partnerships? Connect with our dedicated support team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-500">
                Reach out directly via phone or email for fast assistance.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <Mail className="w-5 h-5 text-brand-600 dark:text-brand-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">Email Support</span>
                  <a href="mailto:support@learnsphere.ai" className="text-brand-600 dark:text-brand-400 hover:underline">
                    support@learnsphere.ai
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">Average response: &lt; 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <Phone className="w-5 h-5 text-accent-600 dark:text-accent-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">Toll-Free Helpline</span>
                  <span className="text-slate-700 dark:text-slate-300 font-mono">+91 (0) 80-4920-1122</span>
                  <p className="text-[11px] text-slate-400 mt-0.5">Mon–Sat, 8:00 AM – 8:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <MapPin className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">Headquarters</span>
                  <p className="text-slate-600 dark:text-slate-400 text-xs">
                    LearnSphere AI Technologies Pvt. Ltd.<br />
                    Tower 4, Outer Ring Road, Bellandur,<br />
                    Bengaluru, Karnataka 560103, India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs text-accent-600 dark:text-accent-400 font-semibold mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Child Safety & Grievance Officer</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                For child data protection inquiries or grievance escalation under the DPDP Act, contact our appointed Data Protection Officer at: <strong className="text-slate-700 dark:text-slate-300">dpo@learnsphere.ai</strong>
              </p>
            </div>

            <div className="pt-1">
              <Link
                to="/faq"
                className="flex items-center justify-between p-3 rounded-xl bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 text-xs font-semibold hover:bg-brand-100 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  <span>Looking for instant answers? Check our FAQ</span>
                </div>
                <span>→</span>
              </Link>
            </div>

          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Message Dispatched Successfully!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                  Thank you, <span className="font-semibold">{formData.name}</span>. Our educational support desk has logged your request and will follow up at <span className="font-mono text-brand-600">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', category: 'student', subject: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Send Us an Inquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g., sarah@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Your Learner Role *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:outline-none"
                    >
                      <option value="student">Student / Learner</option>
                      <option value="parent">Parent / Guardian</option>
                      <option value="teacher">Teacher / School Educator</option>
                      <option value="professional">Working Professional / Job Seeker</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g., Course enrollment question"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Your Detailed Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can assist you..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 text-white font-bold text-xs shadow-md hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Transmitting Message...' : 'Submit Inquiry'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
