import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  ShieldCheck, 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors">
      {/* Top Banner / Call to Action */}
      <div className="border-b border-slate-800 bg-gradient-to-r from-brand-950 via-slate-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Next-Generation Personalized Learning
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Empower your educational journey with AI
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Tailored pathways for children, high schoolers, college scholars, and professionals. 100% child-safe and COPPA compliant.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/register"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-semibold text-sm shadow-lg shadow-brand-500/20 hover:scale-105 active:scale-95 transition-all"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Info & Mission */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-500 to-accent-500 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                LearnSphere<span className="text-accent-400">.ai</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-sm">
              Learn Anything. Build Everything. Grow Everywhere. A unified educational platform merging cognitive science with safe, interactive AI tutoring.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-accent-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Child-Safe & Privacy-First Architecture</span>
            </div>
            <div className="mt-6 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-500" />
                <span>support@learnsphere.ai</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-500" />
                <span>+91 (0) 80-4920-1122 (Toll Free)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>LearnSphere Technologies Pvt. Ltd., Tech Corridor, Bengaluru, India</span>
              </div>
            </div>
          </div>

          {/* Column 1: Learning Paths */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Learning Domains</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/courses" className="hover:text-white transition-colors">Course Catalog</Link></li>
              <li><Link to="/science-projects" className="hover:text-white transition-colors">Science & STEM Lab</Link></li>
              <li><Link to="/programming" className="hover:text-white transition-colors">Coding & Software</Link></li>
              <li><Link to="/ai-technology" className="hover:text-white transition-colors">AI & Robotics</Link></li>
              <li><Link to="/career" className="hover:text-white transition-colors">Career Prep & Resumes</Link></li>
              <li><Link to="/explore" className="hover:text-white transition-colors">Interactive Hub</Link></li>
            </ul>
          </div>

          {/* Column 2: Target Learners */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Age & Personas</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/explore" className="hover:text-white transition-colors">Kids (Ages 5–12)</Link></li>
              <li><Link to="/explore" className="hover:text-white transition-colors">Teens (Ages 13–18)</Link></li>
              <li><Link to="/explore" className="hover:text-white transition-colors">College & Grads</Link></li>
              <li><Link to="/career" className="hover:text-white transition-colors">Job Seekers</Link></li>
              <li><Link to="/explore" className="hover:text-white transition-colors">Teachers & Schools</Link></li>
              <li><Link to="/explore" className="hover:text-white transition-colors">Parents & Guardians</Link></li>
            </ul>
          </div>

          {/* Column 3: Trust & Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Trust & Policies</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Our Mission</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">Help & FAQ</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy & Child Safety</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/login" className="hover:text-white transition-colors">Portal Login</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} LearnSphere AI Inc. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for curious minds worldwide.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
