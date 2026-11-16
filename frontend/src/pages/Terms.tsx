import React from 'react';
import { FileText, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Terms: React.FC = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pb-8 border-b border-slate-200 dark:border-slate-800">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-700/50 mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Platform Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Terms & Conditions of Service
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Last Updated: November 2026 • LearnSphere AI Universal Service Terms
          </p>
        </div>

        {/* Content Body */}
        <div className="mt-8 space-y-8 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          
          <section className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or creating an account on LearnSphere AI, you agree to comply with and be bound by these Terms and Conditions and our Privacy Policy. If you do not accept these terms, you must refrain from using the platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              2. Student & Account Responsibilities
            </h2>
            <p>
              When registering an account:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600 dark:text-slate-400">
              <li>You agree to provide accurate, truthful details regarding your role and learner category.</li>
              <li>You are solely responsible for safeguarding your login credentials.</li>
              <li>Accounts for learners under legal age of digital consent (under 18 in India) must be linked with a consenting parent or verified guardian.</li>
              <li>You agree not to share your individual login credentials with unverified third parties.</li>
            </ul>
          </section>

          <section className="glass-card rounded-2xl p-6 border border-rose-200 dark:border-rose-900/40 bg-rose-50/30 dark:bg-rose-950/20">
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold uppercase tracking-wider text-xs mb-2">
              <ShieldAlert className="w-4 h-4" />
              Prohibited Activities & Security Boundaries
            </div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              3. Strictly Forbidden Conduct
            </h2>
            <p className="mb-2">Users must never:</p>
            <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>• Attempt privilege escalation or modify server headers to claim unauthorized Teacher or Admin capabilities.</li>
              <li>• Probe, scan, or exploit security vulnerabilities or attempt to circumvent Row Level Security (RLS).</li>
              <li>• Use automated scrapers or bots to harvest educational content, quizzes, or user emails.</li>
              <li>• Abuse or prompt-inject the AI Learning Assistant to generate harmful, illegal, or unethical content.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              4. AI Output Disclaimer
            </h2>
            <p>
              The AI Learning Assistant is designed as an educational pedagogical guide. While tuned for accuracy, responses are generated algorithmically and should not be treated as infallibly certified legal, medical, or life-critical facts. LearnSphere AI continuously moderates and refines model outputs for safety.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              5. Intellectual Property
            </h2>
            <p>
              All curriculum modules, science experiment designs, quizzes, software playgrounds, and proprietary AI scaffolding algorithms are the intellectual property of LearnSphere AI Technologies Pvt. Ltd. Unauthorized distribution or commercial resale is prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              6. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any legal dispute or claim arising out of your usage shall be subject to the exclusive jurisdiction of the competent courts in Bengaluru, Karnataka, India.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
