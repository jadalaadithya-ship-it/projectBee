import React from 'react';
import { ShieldCheck, Lock, UserCheck, EyeOff, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Privacy: React.FC = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pb-8 border-b border-slate-200 dark:border-slate-800">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent-50 dark:bg-slate-800 text-accent-700 dark:text-accent-400 border border-accent-200 dark:border-accent-700/50 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Privacy Standard</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Privacy Policy & Child Safety Standards
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Effective Date: November 2026 • Compliant with Indian DPDP Act 2023 & COPPA
          </p>
        </div>

        {/* Content Body */}
        <div className="mt-8 space-y-8 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          
          {/* Executive Commitment */}
          <section className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              1. Our Core Commitment to Privacy
            </h2>
            <p>
              LearnSphere AI ("we", "our", or "the Platform") exists to facilitate education, not to monetize personal attention or sell user data. We collect solely the minimum required information necessary to provide tailored educational curricula, track academic mastery, and ensure verified safeguarding across all user tiers.
            </p>
          </section>

          {/* Child Safety & Minors */}
          <section className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 text-accent-600 dark:text-accent-400 font-bold uppercase tracking-wider text-xs mb-2">
              <Lock className="w-4 h-4" />
              Special Protection for Children (Ages 5–12)
            </div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              2. Child Safety, Parental Consent & Verification
            </h2>
            <p className="mb-3">
              Because children utilize LearnSphere AI for STEM wonders and foundational courses, we implement strict safeguarding:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                <span><strong>No Public Indexing:</strong> Profiles of children and minors are never visible on public search engines, public rosters, or leaderboards.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                <span><strong>Parental Consent:</strong> Consistent with Section 9 of India's Digital Personal Data Protection Act, verifiable consent from a parent or legal guardian is mandatory before processing personal data of children under age 18.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                <span><strong>No Behavioral Advertising:</strong> We never display commercial advertisements or track behavioral browsing habits for ad targeting.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                <span><strong>AI Safety Filtering:</strong> All AI interactions for minors pass through backend safety sanitizers that suppress violent, adult, non-educational, or predatory content.</span>
              </li>
            </ul>
          </section>

          {/* Data Collected */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              3. Information We Collect
            </h2>
            <p>During account registration and course usage, we collect only:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400 pl-2">
              <li>Account Credentials: Name, email address, password hash (salted using bcrypt; plain passwords are never stored).</li>
              <li>Learner Demographic: Age group bracket (e.g. 5–12, 13–18, 18–24, adult) to determine pedagogical UI suitability.</li>
              <li>Learning Preferences: Self-selected subjects (e.g. Mathematics, Robotics, Web Development).</li>
              <li>Academic Activity: Enrolled courses, quiz attempts, timestamps, and lesson completion status.</li>
            </ul>
          </section>

          {/* Role-Based Isolation */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              4. Role-Based Access Control (RBAC) & Data Isolation
            </h2>
            <p>
              Access to educational data is protected using PostgreSQL Row Level Security (RLS) policies:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400 pl-2">
              <li>Students can read and update only their own profile and academic records.</li>
              <li>Teachers can view only student records for classes to which they have been authorized.</li>
              <li>Parents can review only linked child accounts after verified parental authorization.</li>
              <li>Visitors and public endpoints have zero access to private user records.</li>
            </ul>
          </section>

          {/* Data Rights & Erasure */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              5. Your Rights: Correction, Export & Erasure
            </h2>
            <p>
              Users and parents have the right to inspect all personal data maintained on our servers, correct inaccuracies, download an export of academic progress, or request immediate permanent deletion ("Right to be Forgotten") by emailing <strong className="text-slate-900 dark:text-white">dpo@learnsphere.ai</strong>.
            </p>
          </section>

          {/* Grievance Officer */}
          <section className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
              Grievance Officer Contact Details
            </h3>
            <p className="text-xs text-slate-500">
              In accordance with the Information Technology Act 2000 and DPDP Act 2023:<br />
              Name: Legal & Grievance Redressal Team<br />
              Email: grievance@learnsphere.ai | Phone: +91 (0) 80-4920-1122<br />
              LearnSphere Technologies Pvt. Ltd., Bengaluru, Karnataka, India
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
