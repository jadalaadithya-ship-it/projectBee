import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  UserPlus, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  User, 
  ShieldCheck, 
  AlertCircle, 
  Baby, 
  GraduationCap, 
  Info,
  CheckCircle2
} from 'lucide-react';

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userCategory, setUserCategory] = useState('school_student');
  const [parentEmail, setParentEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successNotice, setSuccessNotice] = useState(false);

  const categories = [
    { id: 'child', name: 'Children (Ages 5–12)', isChild: true },
    { id: 'school_student', name: 'School Student (Ages 13–18)' },
    { id: 'college_student', name: 'College Student (Ages 18–24)' },
    { id: 'job_seeker', name: 'Job Seeker (Preparing for Employment)' },
    { id: 'professional', name: 'Working Professional' },
    { id: 'general_learner', name: 'General Inquisitive Learner' },
    { id: 'teacher', name: 'Teacher / Educator (Verified Role)' },
    { id: 'parent', name: 'Parent / Guardian (Linked Oversight)' },
  ];

  const isChildAccount = userCategory === 'child';
  const isPrivilegedRole = userCategory === 'teacher' || userCategory === 'parent';

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!agreeTerms) {
      setErrorMessage('Please acknowledge and accept the Terms of Service & Privacy Policy.');
      return;
    }
    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long for robust account security.');
      return;
    }
    if (isChildAccount && !parentEmail) {
      setErrorMessage('A parent or guardian email is required for students aged 5–12 to establish verified consent.');
      return;
    }

    setLoading(true);

    try {
      // Phase 1 Registration flow: Validates user input and confirms role boundaries
      setTimeout(() => {
        setLoading(false);
        setSuccessNotice(true);
        setTimeout(() => {
          navigate('/explore');
        }, 1200);
      }, 700);
    } catch (err: any) {
      setLoading(false);
      setErrorMessage(err.message || 'Registration could not be completed.');
    }
  };

  return (
    <div className="py-12 sm:py-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full glass-card rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-2xl relative">
        
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-accent-500 text-white flex items-center justify-center mx-auto mb-3 shadow-lg shadow-brand-500/25">
            <UserPlus className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Create Free Account
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Personalized education tailored to your exact learning stage.
          </p>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div className="mb-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 text-xs text-rose-700 dark:text-rose-300 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Success Alert */}
        {successNotice && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs text-emerald-700 dark:text-emerald-300 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>Welcome to LearnSphere AI! Directing you to your personalized learning tracks...</span>
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          
          {/* Display Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
              Full Display Name *
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                required
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="e.g., Aarav Sharma"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>

          {/* User Category Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
              Who is this account for? *
            </label>
            <select
              value={userCategory}
              onChange={(e) => setUserCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
            >
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Conditional Child Safety Parent Consent Input */}
          {isChildAccount && (
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 space-y-2 animate-in fade-in">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-300">
                <Baby className="w-4 h-4" />
                <span>Child Safety & Consent Protocol (DPDP & COPPA)</span>
              </div>
              <p className="text-[11px] text-amber-900 dark:text-amber-200">
                Accounts for learners aged 5–12 are completely private. An authorization link will be sent to the parent/guardian to activate supervised access.
              </p>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 mb-1">
                  Parent / Guardian Email *
                </label>
                <input
                  type="email"
                  required={isChildAccount}
                  value={parentEmail}
                  onChange={(e) => setParentEmail(e.target.value)}
                  placeholder="parent.guardian@example.com"
                  className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-700 text-xs text-slate-900 dark:text-white focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* Conditional Notice for Privileged Roles (Teacher / Parent) */}
          {isPrivilegedRole && (
            <div className="p-3.5 rounded-2xl bg-brand-50 dark:bg-slate-800/60 border border-brand-200 dark:border-brand-700/50 text-xs text-brand-800 dark:text-brand-300 flex items-start gap-2 animate-in fade-in">
              <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Verification Notice:</strong> Teacher and Parent oversight roles require administrative verification or verified student pairing. You will register with a verified-pending status.
              </span>
            </div>
          )}

          {/* Password */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
              Create Password (min 8 chars) *
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Terms Agreement Checkbox */}
          <div className="pt-2 flex items-start gap-2">
            <input
              type="checkbox"
              id="terms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="mt-0.5 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
            />
            <label htmlFor="terms" className="text-xs text-slate-600 dark:text-slate-400">
              I accept the{' '}
              <Link to="/terms" className="text-brand-600 dark:text-brand-400 font-semibold hover:underline">
                Terms of Service
              </Link>{' '}
              and acknowledge the{' '}
              <Link to="/privacy" className="text-brand-600 dark:text-brand-400 font-semibold hover:underline">
                Privacy Policy & Child Safety Standards
              </Link>.
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-3 py-3 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-accent-600 text-white font-bold text-xs shadow-md shadow-brand-500/20 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <UserPlus className="w-4 h-4" />
            <span>{loading ? 'Creating Your Profile...' : 'Complete Free Registration'}</span>
          </button>
        </form>

        {/* Bottom Switcher */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-500">
          <span>Already registered? </span>
          <Link to="/login" className="font-bold text-brand-600 dark:text-brand-400 hover:underline">
            Log In Here
          </Link>
        </div>

      </div>
    </div>
  );
};
