import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Target, 
  Lightbulb, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  BrainCircuit,
  Lock,
  Heart,
  Globe2,
  Users2
} from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Personalization for Every Age',
      desc: 'Education is never one-size-fits-all. From a 6-year-old child exploring animal habitats to a 22-year-old engineer mastering microservices, our platform customizes language, difficulty, and pacing.'
    },
    {
      icon: ShieldCheck,
      title: 'Zero-Compromise Child Safety',
      desc: 'We adhere strictly to global child protection standards and the Indian Digital Personal Data Protection (DPDP) Act. Children accounts are private, unindexed, and safely moderated.'
    },
    {
      icon: BrainCircuit,
      title: 'Responsible AI Tutoring',
      desc: 'Our AI is built on backend-guarded architectures. It scaffolds understanding, never gives flat cheat answers, and gracefully acknowledges its limitations.'
    },
    {
      icon: Lightbulb,
      title: 'Practical Hands-on STEM',
      desc: 'Learning by doing. We believe real learning happens when theories connect to physical science apparatus, working code lines, and measurable achievements.'
    }
  ];

  const safetyGuarantees = [
    'No public discovery or social indexing of minors’ accounts',
    'Parent/Guardian verified access for children under 13',
    'AI guardrails tuned to eliminate inappropriate or hallucinated content',
    'Strict Role-Based Access Control enforced at the database level',
    'Zero targeted advertisements or sale of user educational data',
    'Transparent consent records and instant account data erasure upon request'
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-700/50 mb-3">
            <Globe2 className="w-3.5 h-3.5" />
            Our Vision & Mission
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Democratizing Mastery with Empathy and Intelligence
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            LearnSphere AI was founded with a singular conviction: every human being, regardless of age or geographic background, possesses boundless curiosity when met with the right educational medium.
          </p>
        </div>

        {/* Tagline Feature Banner */}
        <div className="mt-12 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-600 via-brand-700 to-accent-600 text-white shadow-xl">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <p className="text-xs uppercase tracking-widest font-bold text-accent-200">Our Official Creed</p>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              "Learn Anything. Build Everything. Grow Everywhere."
            </h2>
            <p className="text-sm sm:text-base text-brand-100 max-w-2xl mx-auto pt-2">
              A commitment to holistic learning that transitions frictionlessly from early foundational curiosity to professional engineering and lifelong mastery.
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              The Principles That Guide Us
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              How we build technology that enriches minds without compromising wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div 
                  key={val.title}
                  className="glass-card rounded-2xl p-7 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-brand-500/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {val.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Safety & Compliance Card */}
        <div className="mt-20 glass-card rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-accent-600 dark:text-accent-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Lock className="w-4 h-4" />
              Institutional Security & Privacy Standard
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Child Protection & Trust by Architecture
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              We reject the premise of exploiting user attention. LearnSphere AI is engineered from the ground up to protect children, students, and educators with strict role isolation and server-side authorization.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {safetyGuarantees.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                to="/privacy"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 dark:text-brand-400 hover:underline"
              >
                <span>Read our Full Privacy & Safety Policy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm shadow-lg transition-all"
          >
            <span>Join LearnSphere Today</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
