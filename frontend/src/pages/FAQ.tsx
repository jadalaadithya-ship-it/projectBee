import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  ShieldCheck, 
  BookOpen, 
  Bot, 
  Users 
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  q: string;
  a: string;
  category: 'general' | 'safety' | 'courses' | 'ai' | 'roles';
}

export const FAQ: React.FC = () => {
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const faqs: FAQItem[] = [
    {
      category: 'general',
      q: 'What is LearnSphere AI and what makes it unique?',
      a: 'LearnSphere AI is a unified, full-stack educational ecosystem created to serve learners of all age brackets (ages 5 through working adults). Unlike static platforms with generic videos, LearnSphere adapts its visual design, vocabulary, and difficulty to each learner’s verified role and age group while providing hands-on lab experiments and interactive coding playgrounds.'
    },
    {
      category: 'safety',
      q: 'How does LearnSphere AI protect young children (ages 5–12)?',
      a: 'Child safety is integrated into the core architecture: student profiles are private and never indexed publicly. Accounts for children under 13 require parental link verification and verifiable consent records under the DPDP Act and COPPA. Our AI Tutor is constrained by backend system prompts to deliver safe, educational, and nurturing answers with zero inappropriate content.'
    },
    {
      category: 'roles',
      q: 'Can students upgrade themselves to Teacher or Admin accounts?',
      a: 'Never. Security and Role-Based Access Control (RBAC) are strictly enforced on our backend database with PostgreSQL Row Level Security (RLS) policies. Role escalations can only be approved by verified administrators through cryptographically secured audit-logged administrative endpoints.'
    },
    {
      category: 'ai',
      q: 'How does the AI Learning Assistant work? Does it do homework for students?',
      a: 'No. The AI Assistant follows the Socratic pedagogical method: it simplifies challenging concepts, provides analogies, identifies bugs in code, and offers conceptual hints. It is deliberately prompted not to output flat assignment answers, but rather to teach students the foundational principles required to solve problems independently.'
    },
    {
      category: 'courses',
      q: 'Are the science experiments safe to perform at home?',
      a: 'Every science project in our library includes a clear difficulty rating, required household or lab materials, and explicit safety instructions. Beginner and intermediate experiments use non-hazardous items (e.g., vinegar, baking soda, red cabbage, batteries). Advanced experiments specify adult supervision requirements.'
    },
    {
      category: 'roles',
      q: 'What can Parents see on their dashboard?',
      a: 'Once an account relationship is linked and verified, parents can review only their own child’s learning time, course completions, quiz performance metrics, and consent parameters. Parents cannot view other students’ data or private communications.'
    },
    {
      category: 'roles',
      q: 'How do Teachers manage their classrooms on LearnSphere?',
      a: 'Teachers receive specialized dashboards allowing them to create quizzes, assign homework modules, view class-wide performance graphs, and track completion milestones for students enrolled in their assigned classes.'
    },
    {
      category: 'courses',
      q: 'Is there a cost to explore LearnSphere AI?',
      a: 'Public exploration of courses, practical science experiment protocols, code previews, and platform documentation is completely free. Basic student accounts also include full access to foundational tracks and quizzes.'
    }
  ];

  const filtered = faqs.filter((item) => {
    const matchesCat = selectedCat === 'all' || item.category === selectedCat;
    const matchesSearch = item.q.toLowerCase().includes(search.toLowerCase()) ||
                          item.a.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-700/50 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Knowledge Base & Support</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Answers to common questions regarding learning tracks, child safety, role permissions, and platform features.
          </p>
        </div>

        {/* Search */}
        <div className="mt-8 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions by keyword, e.g., 'safety', 'parents', 'AI'..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm"
          />
        </div>

        {/* Category Pills */}
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'general', label: 'General' },
            { id: 'safety', label: 'Child Safety & Privacy' },
            { id: 'ai', label: 'AI Tutor' },
            { id: 'roles', label: 'Roles & Access' },
            { id: 'courses', label: 'Courses & STEM' },
          ].map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCat(c.id)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                selectedCat === c.id
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="mt-8 space-y-3">
          {filtered.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-brand-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 glass-card rounded-2xl p-6 text-center border border-slate-200 dark:border-slate-800">
          <h3 className="font-bold text-slate-900 dark:text-white text-base">
            Still have an unanswered inquiry?
          </h3>
          <p className="mt-1 text-xs text-slate-500">
            Our educational coordinators and child safety officers are available to assist you.
          </p>
          <div className="mt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-sm transition-all"
            >
              <span>Contact Support Desk</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
