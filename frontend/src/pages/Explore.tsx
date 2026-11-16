import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  FlaskConical, 
  Code2, 
  Bot, 
  Cpu, 
  Zap, 
  Calculator, 
  Layers, 
  CheckCircle2, 
  Users,
  Compass
} from 'lucide-react';

export const Explore: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialGroup = searchParams.get('group') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAge, setSelectedAge] = useState<string>(initialGroup);
  const [selectedInterest, setSelectedInterest] = useState<string>('all');

  const ageCategories = [
    { id: 'all', label: 'All Age Groups' },
    { id: 'kids', label: 'Children (5–12)' },
    { id: 'school', label: 'School (13–18)' },
    { id: 'college', label: 'College (18–24)' },
    { id: 'jobseeker', label: 'Job Seekers' },
    { id: 'pro', label: 'Professionals' },
  ];

  const interestDomains = [
    'all',
    'Mathematics',
    'Science',
    'Computer Science',
    'Programming',
    'Artificial Intelligence',
    'Robotics',
    'Electronics',
    'Communication Skills',
    'Career Preparation',
  ];

  const tracks = [
    {
      id: 1,
      title: 'Little Botanist: Plant Life & Seeds',
      category: 'Science',
      ageGroup: 'kids',
      ageLabel: 'Kids (5–12)',
      difficulty: 'Beginner',
      lessons: '8 Interactive Stories',
      icon: FlaskConical,
      color: 'from-amber-400 to-emerald-500',
      description: 'Discover how tiny seeds drink water, reach for sunlight, and bloom into giant trees through joyful animations and mini backyard experiments.',
      link: '/science-projects?subject=biology'
    },
    {
      id: 2,
      title: 'Python for Young Creators: Game Craft',
      category: 'Programming',
      ageGroup: 'kids',
      ageLabel: 'Kids & Teens',
      difficulty: 'Beginner',
      lessons: '12 Step-by-Step Levels',
      icon: Code2,
      color: 'from-blue-500 to-indigo-600',
      description: 'Learn logic, variables, and loops by coding retro arcade games like Snake and Pong with child-friendly block-to-code progression.',
      link: '/programming?lang=python'
    },
    {
      id: 3,
      title: 'High School Physics: Laws of Motion & Energy',
      category: 'Science',
      ageGroup: 'school',
      ageLabel: 'School (13–18)',
      difficulty: 'Intermediate',
      lessons: '16 Lessons + Lab Tests',
      icon: Zap,
      color: 'from-sky-500 to-blue-700',
      description: 'Newton’s three laws, kinetic & potential energy calculus, projectile mechanics, and virtual pendulum experiments for board exams.',
      link: '/courses?subject=physics'
    },
    {
      id: 4,
      title: 'Algebra, Trigonometry & Coordinate Geometry',
      category: 'Mathematics',
      ageGroup: 'school',
      ageLabel: 'School (13–18)',
      difficulty: 'Intermediate',
      lessons: '20 Master Modules',
      icon: Calculator,
      color: 'from-violet-500 to-purple-700',
      description: 'Step-by-step proofs, visual graphs, quadratic equations, and automated practice drills with instant step-by-step solver hints.',
      link: '/courses?subject=math'
    },
    {
      id: 5,
      title: 'Data Structures & Algorithms in C++ & Java',
      category: 'Computer Science',
      ageGroup: 'college',
      ageLabel: 'College (18–24)',
      difficulty: 'Advanced',
      lessons: '32 Problem Sets',
      icon: Layers,
      color: 'from-emerald-500 to-teal-700',
      description: 'Big-O complexity, binary search trees, graph traversals (Dijkstra, DFS/BFS), dynamic programming, and competitive contest prep.',
      link: '/programming?track=dsa'
    },
    {
      id: 6,
      title: 'Deep Learning & Neural Networks from Scratch',
      category: 'Artificial Intelligence',
      ageGroup: 'college',
      ageLabel: 'College & Pros',
      difficulty: 'Advanced',
      lessons: '18 Applied Projects',
      icon: Bot,
      color: 'from-rose-500 to-pink-700',
      description: 'Backpropagation mathematics, CNN image classifiers, transformers, and building lightweight LLM inference pipelines in Python.',
      link: '/ai-technology'
    },
    {
      id: 7,
      title: 'Full-Stack Modern Web Engineering (React & FastAPI)',
      category: 'Programming',
      ageGroup: 'jobseeker',
      ageLabel: 'Job Seekers & Pros',
      difficulty: 'Intermediate-Advanced',
      lessons: '24 Modules + Capstone',
      icon: Code2,
      color: 'from-cyan-500 to-blue-600',
      description: 'End-to-end web apps: typed frontends with Tailwind, async APIs with FastAPI, database schema design, and production deployment.',
      link: '/programming?track=fullstack'
    },
    {
      id: 8,
      title: 'Robotics & Microcontrollers with Arduino & ESP32',
      category: 'Robotics',
      ageGroup: 'school',
      ageLabel: 'School & College',
      difficulty: 'Beginner-Intermediate',
      lessons: '14 Hardware Circuits',
      icon: Cpu,
      color: 'from-orange-500 to-amber-600',
      description: 'Wire sensors, breadboards, ultrasonic distance finders, and motor shields to create autonomous obstacle-avoiding rovers.',
      link: '/science-projects?subject=robotics'
    },
    {
      id: 9,
      title: 'Executive Communication & Technical Interview Mastery',
      category: 'Communication Skills',
      ageGroup: 'jobseeker',
      ageLabel: 'Job Seekers & Pros',
      difficulty: 'All Levels',
      lessons: '10 Interactive Drills',
      icon: Users,
      color: 'from-indigo-500 to-purple-600',
      description: 'Behavioral interview frameworks (STAR method), public speaking confidence, concise documentation, and mock interview practice.',
      link: '/career'
    }
  ];

  const filteredTracks = tracks.filter((track) => {
    const matchesSearch = track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          track.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          track.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAge = selectedAge === 'all' || track.ageGroup === selectedAge || (selectedAge === 'kids' && track.ageGroup === 'kids');
    const matchesInterest = selectedInterest === 'all' || track.category.toLowerCase() === selectedInterest.toLowerCase();
    return matchesSearch && matchesAge && matchesInterest;
  });

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-700/50 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Learning Directory</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Explore Personalized Paths
          </h1>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Find the exact course, experiment, or technical track suited to your age, current skill level, and personal aspirations.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="mt-10 glass-card rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-4">
          
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, e.g., 'Python', 'Physics', 'Neural Networks', 'Kids'..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>

          {/* Age Group Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1 min-w-[90px]">
              <Filter className="w-3.5 h-3.5" /> Age Group:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {ageCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedAge(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedAge === cat.id
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interest Domains */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-1 border-t border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 min-w-[90px]">
              Topic:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {interestDomains.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedInterest(topic)}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                    selectedInterest === topic
                      ? 'bg-accent-600 text-white shadow-sm font-semibold'
                      : 'bg-slate-100/70 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {topic === 'all' ? 'All Subjects' : topic}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Results Counter */}
        <div className="mt-8 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>Showing {filteredTracks.length} educational pathways</span>
          {(selectedAge !== 'all' || selectedInterest !== 'all' || searchQuery) && (
            <button
              onClick={() => { setSelectedAge('all'); setSelectedInterest('all'); setSearchQuery(''); }}
              className="text-brand-600 dark:text-brand-400 hover:underline font-semibold"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Tracks Grid */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTracks.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:shadow-xl hover:border-brand-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 flex items-center justify-center group-hover:scale-105 group-hover:bg-brand-500 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {item.ageLabel}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-accent-600 dark:text-accent-400">
                    {item.category} • {item.difficulty}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {item.lessons}
                  </span>
                  <Link
                    to={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 group-hover:gap-2.5 transition-all"
                  >
                    <span>Start Track</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredTracks.length === 0 && (
          <div className="glass-card rounded-2xl p-12 text-center max-w-md mx-auto my-12 border border-slate-200 dark:border-slate-800">
            <Search className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">No pathways match your search</h3>
            <p className="mt-1 text-sm text-slate-500">Try modifying your query or selecting "All Age Groups".</p>
            <button
              onClick={() => { setSelectedAge('all'); setSelectedInterest('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-xl bg-brand-600 text-white text-xs font-bold"
            >
              Clear All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
