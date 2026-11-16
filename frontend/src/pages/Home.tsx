import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  FlaskConical, 
  Code2, 
  Bot, 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  Award, 
  Lightbulb, 
  Compass, 
  Laptop, 
  Baby, 
  Briefcase, 
  HeartHandshake,
  Play
} from 'lucide-react';

export const Home: React.FC = () => {
  const [selectedPersona, setSelectedPersona] = useState<number>(0);

  const personas = [
    {
      role: 'Children (Ages 5–12)',
      icon: Baby,
      badge: 'Gamified & Safe',
      color: 'from-amber-400 to-orange-500',
      title: 'Ignite Curiosity Through Playful Discovery',
      description: 'Animated visual stories, foundational math games, fun science experiments, and kid-safe AI companion that answers "Why is the sky blue?" in joyful language.',
      features: ['Picture-based interactive quizzes', 'Zero-risk, strictly moderated safe space', 'Parental progress sync & time limits'],
      ctaLink: '/explore?group=kids',
      ctaText: 'Explore Kids WonderLab'
    },
    {
      role: 'School Students (13–18)',
      icon: BookOpen,
      badge: 'Academic Excellence',
      color: 'from-blue-500 to-indigo-600',
      title: 'Master STEM & Ace School Curriculums',
      description: 'Comprehensive physics, chemistry, biology simulations, math derivations, and introductory coding with instant homework concept breakdowns.',
      features: ['Step-by-step viva & lab simulations', 'Board exam practice tests', 'AI concept explainer available 24/7'],
      ctaLink: '/courses?category=school',
      ctaText: 'View School Curriculum'
    },
    {
      role: 'College & Grads (18–24)',
      icon: Laptop,
      badge: 'Engineering & Tech',
      color: 'from-emerald-500 to-teal-600',
      title: 'Deep Engineering, ML & System Design',
      description: 'Hands-on full-stack development, algorithms, artificial intelligence architectures, database internals, and open-source project building.',
      features: ['In-browser code executions', 'Production-grade software projects', 'Verified skills credentials'],
      ctaLink: '/programming',
      ctaText: 'Enter Code Arena'
    },
    {
      role: 'Job Seekers & Pros',
      icon: Briefcase,
      badge: 'Career Acceleration',
      color: 'from-violet-500 to-purple-600',
      title: 'Bridge the Gap Between Knowledge & Employment',
      description: 'Automated AI resume evaluation, mock technical interviews, algorithmic aptitude drills, and industry-standard tech stack roadmaps.',
      features: ['Interactive resume builder', 'FAANG-style technical interview questions', 'Targeted career roadmaps'],
      ctaLink: '/career',
      ctaText: 'Boost My Career'
    },
    {
      role: 'Teachers & Parents',
      icon: HeartHandshake,
      badge: 'Nurture & Guide',
      color: 'from-rose-500 to-pink-600',
      title: 'Comprehensive Oversight & Class Orchestration',
      description: 'Teachers manage rosters, create quizzes, and monitor learning curves. Parents gain clear visibility into their child’s growth without invasion of privacy.',
      features: ['Classroom-wide analytics & quiz assigner', 'Child safety consent management', 'Verified RBAC authorization'],
      ctaLink: '/about',
      ctaText: 'Learn About Our Safeguards'
    }
  ];

  const highlights = [
    {
      icon: FlaskConical,
      title: 'Practical Science Lab',
      desc: 'Over 80+ physics, chemistry, and robotics experiments with step-by-step apparatus lists, safety precautions, and viva questions.',
      tag: 'Hands-on STEM',
      link: '/science-projects'
    },
    {
      icon: Code2,
      title: 'Multi-Language Code Arena',
      desc: 'Master Python, JavaScript, C++, Java, React, SQL, and AI development with real-world code walkthroughs and practice exercises.',
      tag: 'From Zero to Deploy',
      link: '/programming'
    },
    {
      icon: Bot,
      title: 'Secure AI Learning Tutor',
      desc: 'Get complex ideas broken down in plain English, debug confusing code errors, and generate tailored quizzes with backend safeguards.',
      tag: 'Safe AI Guidance',
      link: '/ai-technology'
    },
    {
      icon: Briefcase,
      title: 'Career & Resume Suite',
      desc: 'Industry roadmaps, technical interview question banks, aptitude trainers, and ATS-friendly resume generation.',
      tag: 'Career Ready',
      link: '/career'
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Decorative Mesh Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-tr from-brand-500/15 via-accent-500/10 to-transparent blur-3xl -z-10 pointer-events-none" />

      {/* Hero Section */}
      <section className="pt-12 sm:pt-20 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Top Pill Announcement */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-slate-800/80 border border-brand-200 dark:border-brand-700/50 text-brand-700 dark:text-brand-300 text-xs sm:text-sm font-semibold shadow-sm mb-6 animate-in fade-in duration-300">
            <Sparkles className="w-4 h-4 text-accent-500" />
            <span>Introducing LearnSphere AI — Universal Educational Ecosystem</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500"></span>
            <span className="text-slate-500 dark:text-slate-400 font-normal hidden sm:inline">Ages 5 to Adult</span>
          </div>

          {/* Main Title & Tagline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-5xl mx-auto leading-[1.15]">
            Learn Anything.{' '}
            <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 bg-clip-text text-transparent">
              Build Everything.
            </span>{' '}
            Grow Everywhere.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            The intelligent learning ecosystem tailored to your unique age, curiosity, and career ambition. From childhood science wonders to advanced software engineering and job-readiness.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 hover:opacity-95 shadow-xl shadow-brand-500/25 active:scale-95 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Start Learning Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/explore"
              className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <Compass className="w-5 h-5 text-brand-500" />
              <span>Explore All Tracks</span>
            </Link>
          </div>

          {/* Trust Highlights */}
          <div className="mt-10 pt-6 border-t border-slate-200/70 dark:border-slate-800/80 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent-500" />
              <span>100% Child-Safe Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-brand-500" />
              <span>Curated by Top Educators</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-500" />
              <span>Personalized for All 7 Learning Personas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Persona Showcase */}
      <section className="py-16 bg-slate-100/70 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-brand-600 dark:text-brand-400">
              Personalized for Every Stage of Life
            </h2>
            <p className="mt-2 text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Who is LearnSphere AI Built For?
            </p>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Select your learner category below to preview how our curriculum and AI adapts strictly to your educational level.
            </p>
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
            {personas.map((persona, idx) => {
              const Icon = persona.icon;
              const isSelected = selectedPersona === idx;
              return (
                <button
                  key={persona.role}
                  onClick={() => setSelectedPersona(idx)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isSelected
                      ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25 scale-105'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-brand-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{persona.role}</span>
                </button>
              );
            })}
          </div>

          {/* Active Persona Card Display */}
          <div className="glass-card rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 dark:border-slate-800 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${personas[selectedPersona].color}`}>
                  {personas[selectedPersona].badge}
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {personas[selectedPersona].title}
                </h3>
                
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {personas[selectedPersona].description}
                </p>

                <div className="pt-2 space-y-2.5">
                  {personas[selectedPersona].features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    to={personas[selectedPersona].ctaLink}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm hover:opacity-90 shadow-md transition-all"
                  >
                    <span>{personas[selectedPersona].ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Graphic / Interactive Preview Box */}
              <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-800 text-white shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-xs text-slate-400 font-mono ml-2">learnsphere-preview</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase text-accent-400 font-semibold bg-accent-950 px-2 py-0.5 rounded">
                    Interactive
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs">
                    <p className="text-slate-400 font-medium">Personalized Goal</p>
                    <p className="text-white font-bold mt-1 text-sm">{personas[selectedPersona].role}</p>
                  </div>
                  
                  <div className="p-3 rounded-xl bg-brand-950/60 border border-brand-800/40 text-xs flex items-center justify-between">
                    <div>
                      <p className="text-brand-300 font-semibold">Active Syllabus</p>
                      <p className="text-slate-300 text-[11px]">Dynamic Difficulty Auto-Tuning</p>
                    </div>
                    <span className="text-emerald-400 font-mono font-bold">100% Safe</span>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
                    <span>Adaptive AI Mode</span>
                    <span className="text-accent-400 font-semibold">Enabled</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Core Ecosystem Pillars */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-600 dark:text-brand-400">
              Complete Educational Spectrum
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Built for Depth, Practice, and Understanding
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              Not just video lectures. LearnSphere AI couples theoretical insights with functional hands-on labs, coding environments, and interactive assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="glass-card rounded-2xl p-6 flex flex-col justify-between border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:border-brand-500/50 transition-all group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-accent-600 dark:text-accent-400">
                      {item.tag}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <Link
                      to={item.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 hover:gap-2.5 transition-all"
                    >
                      <span>Explore Section</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Numerical Stats Banner */}
      <section className="py-12 bg-gradient-to-r from-brand-600 via-brand-700 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-5xl font-black tracking-tight">50+</div>
              <div className="mt-1 text-xs sm:text-sm text-brand-200 font-medium">Structured Courses</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-black tracking-tight">80+</div>
              <div className="mt-1 text-xs sm:text-sm text-brand-200 font-medium">Hands-on STEM Experiments</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-black tracking-tight">12+</div>
              <div className="mt-1 text-xs sm:text-sm text-brand-200 font-medium">Programming Languages</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-black tracking-tight">100%</div>
              <div className="mt-1 text-xs sm:text-sm text-accent-300 font-medium">Child-Safe & Verified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-slate-900 dark:bg-slate-900/90 text-white p-8 sm:p-14 overflow-hidden border border-slate-800 shadow-2xl text-center">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent-500/20 text-accent-400 border border-accent-500/30">
                <Lightbulb className="w-3.5 h-3.5" />
                No Credit Card Required
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Ready to Experience the Future of Learning?
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                Join thousands of students, teachers, and inquisitive minds on LearnSphere AI. Create your account in seconds.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/register"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-bold text-sm shadow-lg hover:scale-105 active:scale-95 transition-all"
                >
                  Create Your Free Account
                </Link>
                <Link
                  to="/courses"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-all"
                >
                  Browse Course Catalog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
