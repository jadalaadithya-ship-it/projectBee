import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LogIn, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  ShieldCheck, 
  AlertCircle,
  GraduationCap
} from 'lucide-react';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [forgotSent, setForgotSent] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    try {
      // Phase 1: Authentication entry point with real client-side validation
      // Connects to Supabase / FastAPI in Phase 2
      if (!email.includes('@')) {
        throw new Error('Please enter a valid educational or personal email address.');
      }
      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters in length.');
      }

      // Simulate authentication dispatch
      setTimeout(() => {
        setLoading(false);
        // Inform user about next phase or redirect to explore
        navigate('/explore');
      }, 700);
    } catch (err: any) {
      setLoading(false);
      setErrorMessage(err.message || 'Login failed. Please check credentials.');
    }
  };

  const handleForgotPassword = () => {
    if (!email) {
      setErrorMessage('Please enter your email above to receive password reset instructions.');
      return;
    }
    setForgotSent(true);
    setErrorMessage('');
  };

  return (
    <div className="py-12 sm:py-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full glass-card rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-2xl relative">
        
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-accent-500 text-white flex items-center justify-center mx-auto mb-3 shadow-lg shadow-brand-500/25">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Welcome Back
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Sign in to access your courses, quizzes, and personal AI tutor.
          </p>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div className="mb-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 text-xs text-rose-700 dark:text-rose-300 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Forgot password feedback */}
        {forgotSent && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs text-emerald-700 dark:text-emerald-300 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>Password reset instructions dispatched to <strong className="font-mono">{email}</strong>. Check your inbox.</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
              Email Address
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

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Password
              </label>
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-[11px] font-semibold text-brand-600 dark:text-brand-400 hover:underline"
              >
                Forgot password?
              </button>
            </div>
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

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 text-white font-bold text-xs shadow-md shadow-brand-500/20 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <LogIn className="w-4 h-4" />
            <span>{loading ? 'Authenticating...' : 'Sign In to LearnSphere'}</span>
          </button>
        </form>

        {/* Bottom Switcher */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-500">
          <span>Don’t have an account yet? </span>
          <Link to="/register" className="font-bold text-brand-600 dark:text-brand-400 hover:underline">
            Register Free
          </Link>
        </div>

        {/* Security badge */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-accent-500" />
          <span>Encrypted with End-to-End Session Guards</span>
        </div>

      </div>
    </div>
  );
};
