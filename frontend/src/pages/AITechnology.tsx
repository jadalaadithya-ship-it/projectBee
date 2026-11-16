import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  BrainCircuit, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Send, 
  Lightbulb,
  Lock,
  Layers
} from 'lucide-react';

export const AITechnology: React.FC = () => {
  const [selectedPrompt, setSelectedPrompt] = useState<number>(0);

  const sampleConversations = [
    {
      ageGroup: 'Kids (Ages 5–12)',
      question: 'Why do stars twinkle in the night sky?',
      answer: 'Great question, curious explorer! 🌟 Stars are super far away, so their light reaches Earth as tiny, sharp beams. When that light enters our atmosphere, warm and cold air pockets bend the light rays slightly. By the time it hits your eyes, it looks like a dancing twinkle! Think of it like looking at a coin at the bottom of a gentle swimming pool.'
    },
    {
      ageGroup: 'High School (Ages 13–18)',
      question: 'Can you explain the difference between Mitochondria and Chloroplasts?',
      answer: 'Certainly! Both are double-membraned energy organelles, but with opposite metabolic functions:\n\n1. Mitochondria: Found in almost all eukaryotic cells (plants and animals). They perform Cellular Respiration, breaking down glucose in the presence of oxygen to produce ATP (adenosine triphosphate) energy.\n2. Chloroplasts: Found only in plants and algae. They perform Photosynthesis, using sunlight, chlorophyll pigments, and carbon dioxide to synthesize glucose.\n\nSummary mnemonic: Mitochondria release energy; Chloroplasts capture and store energy.'
    },
    {
      ageGroup: 'College & Engineering (18+)',
      question: 'Why does my Python recursive DFS function throw RecursionError?',
      answer: 'A `RecursionError: maximum recursion depth exceeded` occurs when a function calls itself too many times without hitting a valid terminating base case, or when a graph contains cycles without a `visited` set.\n\nQuick checklist to fix it:\n1. Ensure you have an explicit base case at the top of the function.\n2. If traversing a graph, maintain a `visited = set()` to avoid infinite cyclic loops.\n3. If your input is genuinely massive (e.g. 5,000+ nodes in a skewed tree), convert your algorithm to an iterative approach using an explicit `stack = []` instead of relying on the call stack.'
    }
  ];

  const aiFeatures = [
    {
      icon: Lightbulb,
      title: 'Simple Concept Explainer',
      desc: 'Transforms complex academic jargon into crystal-clear, relatable analogies tailored to the student’s exact age bracket.'
    },
    {
      icon: BrainCircuit,
      title: 'Interactive Code Debugger',
      desc: 'Detects semantic errors, syntax flaws, and memory leaks in student code while guiding them to discover the fix themselves.'
    },
    {
      icon: HelpCircle,
      title: 'Dynamic Practice Generator',
      desc: 'Creates unlimited unique quiz questions and viva drills tailored to weak areas detected in previous assessments.'
    },
    {
      icon: ShieldCheck,
      title: 'Strict Age Guardrails',
      desc: 'Backed by server-side system prompts that enforce absolute child safety, educational integrity, and zero adult or unsafe content.'
    }
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-700/50 mb-3">
            <Bot className="w-3.5 h-3.5" />
            <span>AI Learning Assistant & Frontier Technologies</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Safe, Intelligent, Empowering AI
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Discover how LearnSphere AI leverages state-of-the-art neural intelligence to mentor, scaffold, and inspire learners from their very first question to advanced technological mastery.
          </p>
        </div>

        {/* Live Interactive Assistant Simulation */}
        <div className="mt-12 glass-card rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl max-w-4xl mx-auto">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-accent-500 flex items-center justify-center text-white shadow-md">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                  LearnSphere AI Tutor Demo
                </h3>
                <span className="text-xs text-accent-600 dark:text-accent-400 flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse"></span>
                  Safe Pedagogical Filter Active
                </span>
              </div>
            </div>

            <span className="text-[11px] font-mono uppercase bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-slate-500">
              Interactive Preview
            </span>
          </div>

          {/* Persona Prompt Selector */}
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Select Sample Inquiry by Student Level:
            </span>
            <div className="flex flex-wrap gap-2">
              {sampleConversations.map((conv, idx) => (
                <button
                  key={conv.ageGroup}
                  onClick={() => setSelectedPrompt(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedPrompt === idx
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {conv.ageGroup}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Bubble Interface */}
          <div className="space-y-4">
            {/* Student Bubble */}
            <div className="flex items-start gap-3 justify-end">
              <div className="bg-brand-600 text-white rounded-2xl rounded-tr-none px-4 py-3 text-sm max-w-lg shadow-sm">
                <p className="font-medium">{sampleConversations[selectedPrompt].question}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-brand-200 dark:bg-brand-900 flex items-center justify-center text-brand-700 dark:text-brand-300 font-bold text-xs">
                You
              </div>
            </div>

            {/* AI Assistant Bubble */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-600 to-accent-500 flex items-center justify-center text-white text-xs shadow-sm flex-shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="glass-card bg-slate-50 dark:bg-slate-800/80 rounded-2xl rounded-tl-none p-4 text-xs sm:text-sm text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 max-w-2xl leading-relaxed whitespace-pre-wrap">
                {sampleConversations[selectedPrompt].answer}
              </div>
            </div>
          </div>

          {/* Interactive Chat Input Teaser */}
          <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
            <input
              type="text"
              readOnly
              value="Sign in to ask your own custom educational questions..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 text-xs cursor-pointer"
            />
            <Link
              to="/register"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm"
            >
              <span>Unlock AI Tutor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* AI Capabilities Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-brand-500/40 transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
