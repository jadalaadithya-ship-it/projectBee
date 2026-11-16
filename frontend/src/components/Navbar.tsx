import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sparkles, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  BookOpen, 
  FlaskConical, 
  Code2, 
  Bot, 
  Briefcase, 
  Compass, 
  ChevronDown,
  LogIn,
  UserPlus,
  GraduationCap
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exploreDropdownOpen, setExploreDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Science Projects', path: '/science-projects' },
    { name: 'Programming', path: '/programming' },
    { name: 'AI & Tech', path: '/ai-technology' },
    { name: 'Careers', path: '/career' },
  ];

  const exploreItems = [
    { name: 'Explore Hub', path: '/explore', icon: Compass, desc: 'Personalized paths by age & interest' },
    { name: 'All Courses', path: '/courses', icon: BookOpen, desc: 'Structured self-paced video lessons' },
    { name: 'Science Lab', path: '/science-projects', icon: FlaskConical, desc: 'Hands-on practical experiments' },
    { name: 'Code Arena', path: '/programming', icon: Code2, desc: 'Python, Web, C++, Java, & ML' },
    { name: 'AI & Robotics', path: '/ai-technology', icon: Bot, desc: 'Intelligent systems & automation' },
    { name: 'Career Prep', path: '/career', icon: Briefcase, desc: 'Resumes, interviews & roadmaps' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg p-1">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-brand-500 to-accent-500 flex items-center justify-center shadow-md shadow-brand-500/25 group-hover:scale-105 transition-transform duration-200">
              <GraduationCap className="w-5 h-5 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-400 rounded-full border-2 border-white dark:border-slate-900 animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 bg-clip-text text-transparent">
                LearnSphere<span className="text-slate-900 dark:text-white font-black">.ai</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 -mt-1 hidden sm:block">
                Learn • Build • Grow
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Explore Mega Dropdown Trigger */}
            <div className="relative">
              <button 
                onClick={() => setExploreDropdownOpen(!exploreDropdownOpen)}
                onBlur={() => setTimeout(() => setExploreDropdownOpen(false), 200)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  exploreDropdownOpen || location.pathname.startsWith('/explore')
                    ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-slate-800'
                    : 'text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
                aria-expanded={exploreDropdownOpen}
              >
                <Sparkles className="w-4 h-4 text-brand-500" />
                <span>Explore</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${exploreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {exploreDropdownOpen && (
                <div className="absolute left-0 mt-2 w-80 rounded-2xl glass-card shadow-2xl p-3 border border-slate-200 dark:border-slate-800 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 py-1">
                    Learning Domains
                  </div>
                  <div className="grid gap-1 mt-1">
                    {exploreItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setExploreDropdownOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-50/80 dark:hover:bg-slate-800/80 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 dark:group-hover:text-brand-400">
                              {item.name}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-slate-800 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/about"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/about')
                  ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-slate-800 font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              About
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Auth Buttons */}
            <Link
              to="/login"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <LogIn className="w-4 h-4" />
              <span>Log In</span>
            </Link>

            <Link
              to="/register"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 shadow-md shadow-brand-500/20 hover:shadow-lg hover:shadow-brand-500/30 active:scale-95 transition-all"
            >
              <UserPlus className="w-4 h-4" />
              <span>Join Free</span>
            </Link>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-xl text-base font-medium ${
                isActive('/') ? 'bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 font-semibold' : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              Home
            </Link>
            <Link
              to="/explore"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-xl text-base font-medium ${
                isActive('/explore') ? 'bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 font-semibold' : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              Explore Hub
            </Link>
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-xl text-base font-medium ${
                  isActive(link.path) ? 'bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 font-semibold' : 'text-slate-700 dark:text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-xl text-base font-medium ${
                isActive('/about') ? 'bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 font-semibold' : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              About Us
            </Link>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <LogIn className="w-4 h-4" />
              <span>Log In</span>
            </Link>
            <Link
              to="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 text-white font-semibold text-sm shadow-md"
            >
              <UserPlus className="w-4 h-4" />
              <span>Register Free Account</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
