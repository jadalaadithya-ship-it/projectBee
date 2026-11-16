import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  FileText, 
  UserCheck, 
  Map, 
  Target, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  HelpCircle, 
  TrendingUp,
  Award
} from 'lucide-react';

export const Career: React.FC = () => {
  const [activeRoadmap, setActiveRoadmap] = useState<string>('swe');

  const roadmaps: Record<string, { title: string; steps: { phase: string; skills: string[]; duration: string }[] }> = {
    swe: {
      title: 'Software Engineer (Full-Stack & Backend)',
      steps: [
        { phase: 'Phase 1: Foundations', skills: ['Data Structures & Algorithms', 'C++ or Python', 'Git & GitHub', 'Clean Code Principles'], duration: 'Months 1–2' },
        { phase: 'Phase 2: Modern Systems', skills: ['FastAPI / Node Services', 'React & TypeScript', 'PostgreSQL & RLS', 'Docker Containerization'], duration: 'Months 3–4' },
        { phase: 'Phase 3: Production & Architecture', skills: ['System Design (Load Balancers, Caching)', 'CI/CD Pipelines', 'Cloud Deployment (AWS/Vercel)'], duration: 'Months 5–6' },
      ]
    },
    ai: {
      title: 'Machine Learning & AI Engineer',
      steps: [
        { phase: 'Phase 1: Mathematics & Data', skills: ['Multivariable Calculus & Linear Algebra', 'Probability & Statistics', 'NumPy, Pandas, Matplotlib'], duration: 'Months 1–2' },
        { phase: 'Phase 2: Core ML & Deep Learning', skills: ['Scikit-Learn Regression & Trees', 'PyTorch / TensorFlow', 'CNNs & Sequence Models'], duration: 'Months 3–4' },
        { phase: 'Phase 3: LLMs & Production AI', skills: ['Hugging Face Transformers', 'RAG Pipelines & Vector DBs', 'FastAPI AI Microservices'], duration: 'Months 5–6' },
      ]
    },
    data: {
      title: 'Data Analyst & Business Intelligence',
      steps: [
        { phase: 'Phase 1: Querying & Excel', skills: ['Advanced Excel & PowerPivot', 'SQL Joins & Aggregations', 'Data Cleaning with Python'], duration: 'Months 1–2' },
        { phase: 'Phase 2: Visualization & Storytelling', skills: ['Tableau / PowerBI Dashboards', 'Exploratory Data Analysis (EDA)', 'Statistical Testing'], duration: 'Months 3–4' },
        { phase: 'Phase 3: Strategic Metrics', skills: ['Product Metrics (Churn, Retention, LTV)', 'A/B Testing Methodologies', 'Executive Presentations'], duration: 'Months 5–6' },
      ]
    }
  };

  const interviewQuestions = [
    {
      q: 'How do you explain the ACID properties of relational databases to a junior developer?',
      domain: 'Backend & Systems',
      hint: 'Atomicity (all-or-nothing), Consistency (schema rules), Isolation (concurrency control), Durability (persisted on disk).'
    },
    {
      q: 'Explain the difference between optimistic and pessimistic locking in concurrent transactions.',
      domain: 'Database Engineering',
      hint: 'Optimistic checks version columns at commit time; pessimistic locks the row upfront preventing concurrent reads/writes.'
    },
    {
      q: 'Walk me through a situation where a production bug crashed your system. How did you diagnose it?',
      domain: 'Behavioral & STAR Method',
      hint: 'Situation, Task, Action (metrics, logs, hotfix, rollback), Result (lessons learned, post-mortem, zero data loss).'
    }
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-700/50 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Employment & Professional Acceleration</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Launch Your High-Impact Career
          </h1>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            From algorithmic technical interviews and ATS-optimized resume building to structured, milestone-driven career roadmaps for top technology and engineering positions.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-brand-500/40 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Intelligent Resume Builder
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Generate clean, ATS-compliant resumes with quantified bullet point suggestions and tailored keyword targeting for tech and engineering roles.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              <Link to="/register" className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 dark:text-brand-400">
                <span>Try Resume Builder</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-brand-500/40 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-accent-50 dark:bg-slate-800 text-accent-600 dark:text-accent-400 flex items-center justify-center mb-4">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Mock Interview Drills
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Practice behavioral, architectural, and coding questions under realistic time constraints with automated AI evaluation and feedback.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              <Link to="/register" className="inline-flex items-center gap-1 text-xs font-bold text-accent-600 dark:text-accent-400">
                <span>Start Mock Session</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-brand-500/40 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-slate-800 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Aptitude & Cognitive Drills
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Sharpen quantitative math, logical deduction, and verbal reasoning skills essential for campus recruitment and competitive tests.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              <Link to="/register" className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400">
                <span>Practice Aptitude</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Interactive Career Roadmaps */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Verified Career Roadmaps
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Clear milestones designed with engineering hiring managers.
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setActiveRoadmap('swe')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeRoadmap === 'swe' ? 'bg-brand-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                Software Engineer
              </button>
              <button
                onClick={() => setActiveRoadmap('ai')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeRoadmap === 'ai' ? 'bg-brand-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                AI & ML Engineer
              </button>
              <button
                onClick={() => setActiveRoadmap('data')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeRoadmap === 'data' ? 'bg-brand-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                Data Analyst
              </button>
            </div>
          </div>

          {/* Roadmap Timeline Display */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
              {roadmaps[activeRoadmap].title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roadmaps[activeRoadmap].steps.map((st, i) => (
                <div key={i} className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-bold text-brand-600 dark:text-brand-400">{st.phase}</span>
                      <span className="text-slate-400 font-mono text-[11px]">{st.duration}</span>
                    </div>
                    <ul className="mt-3 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                      {st.skills.map((skill, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-accent-500 flex-shrink-0 mt-0.5" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sample Technical Interview Questions */}
        <div className="mt-16">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-6">
            Featured Technical Interview Inquiries
          </h2>
          <div className="space-y-3">
            {interviewQuestions.map((q, qIdx) => (
              <div key={qIdx} className="glass-card rounded-xl p-5 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-[11px] font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">{q.domain}</span>
                  <span className="text-slate-400">Question #{qIdx + 1}</span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{q.q}</h4>
                <div className="mt-2.5 p-3 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Recommended Talking Points: </span>
                  {q.hint}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
