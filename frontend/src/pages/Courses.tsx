import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Search, 
  Clock, 
  Award, 
  Star, 
  Layers, 
  ArrowRight, 
  PlayCircle, 
  CheckCircle,
  GraduationCap
} from 'lucide-react';

export const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'stem', name: 'STEM & Science' },
    { id: 'coding', name: 'Computer Science' },
    { id: 'ai', name: 'AI & Data Science' },
    { id: 'math', name: 'Mathematics' },
    { id: 'career', name: 'Career Prep' }
  ];

  const coursesList = [
    {
      id: 'cs101',
      title: 'Python for Beginners: From Syntax to Real Projects',
      category: 'coding',
      level: 'Beginner',
      rating: 4.9,
      reviews: 1420,
      duration: '14 Hours',
      modules: 8,
      lessons: 48,
      instructor: 'Dr. Sarah Lin (MIT CS Alum)',
      description: 'Master variables, data structures, object-oriented programming, and file handling through 5 real-world hands-on mini-apps.',
      tags: ['Python', 'Variables', 'OOP', 'Automation']
    },
    {
      id: 'phy201',
      title: 'Conceptual Physics: Classical Mechanics & Gravitation',
      category: 'stem',
      level: 'Intermediate',
      rating: 4.8,
      reviews: 890,
      duration: '18 Hours',
      modules: 10,
      lessons: 52,
      instructor: 'Prof. Rajesh Sharma (IIT Madras)',
      description: 'Understand kinematics, Newton’s laws, work-energy theorem, and planetary orbits with interactive visual laboratory simulations.',
      tags: ['Physics', 'Newton', 'Calculus', 'Simulations']
    },
    {
      id: 'ai301',
      title: 'Foundations of Modern AI & Machine Learning',
      category: 'ai',
      level: 'Advanced',
      rating: 4.95,
      reviews: 2100,
      duration: '22 Hours',
      modules: 12,
      lessons: 64,
      instructor: 'Elena Rostova (Senior ML Researcher)',
      description: 'Gradient descent, supervised learning algorithms, neural network math, evaluation metrics, and PyTorch model architectures.',
      tags: ['AI', 'PyTorch', 'Math', 'Neural Nets']
    },
    {
      id: 'math102',
      title: 'Calculus & Linear Algebra for Computer Scientists',
      category: 'math',
      level: 'Intermediate',
      rating: 4.75,
      reviews: 730,
      duration: '16 Hours',
      modules: 9,
      lessons: 42,
      instructor: 'Dr. Marcus Vance',
      description: 'Derivatives, integrals, matrix transformations, eigenvalues, and vectors tailored directly for game physics and machine learning.',
      tags: ['Linear Algebra', 'Calculus', 'Matrices']
    },
    {
      id: 'web202',
      title: 'Full-Stack Web Architecture: React, FastAPI & SQL',
      category: 'coding',
      level: 'Intermediate-Advanced',
      rating: 4.9,
      reviews: 1650,
      duration: '26 Hours',
      modules: 14,
      lessons: 82,
      instructor: 'Kiran Patel (Lead Platform Architect)',
      description: 'Build enterprise-ready web applications from scratch with typed React interfaces, secure FastAPI services, and PostgreSQL.',
      tags: ['React', 'FastAPI', 'PostgreSQL', 'Tailwind']
    },
    {
      id: 'car101',
      title: 'Technical Interview Mastery & Software Engineering Roadmaps',
      category: 'career',
      level: 'All Levels',
      rating: 4.85,
      reviews: 940,
      duration: '10 Hours',
      modules: 6,
      lessons: 30,
      instructor: 'Maya Chen (Ex-Google Tech Recruiter)',
      description: 'Resume optimization, behavioral STAR methods, coding challenge patterns, and negotiation strategies for landing high-impact tech roles.',
      tags: ['Interviews', 'Resume', 'Algorithms', 'Career']
    }
  ];

  const filteredCourses = coursesList.filter((course) => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-700/50 mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Structured Curriculums</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Course Catalog
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              In-depth, self-paced courses designed by leading educators and industry specialists.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-brand-400'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:shadow-xl hover:border-brand-500/40 transition-all group"
            >
              <div className="p-6">
                
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-semibold px-2.5 py-0.5 rounded-full bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400">
                    {course.level}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <span>{course.rating}</span>
                    <span className="text-slate-400 font-normal">({course.reviews})</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {course.title}
                </h3>

                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  By {course.instructor}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                  {course.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Footer specs */}
              <div className="px-6 py-4 bg-slate-50/80 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <PlayCircle className="w-3.5 h-3.5" />
                    {course.lessons} Lessons
                  </span>
                </div>

                <Link
                  to={`/register?redirect=course_${course.id}`}
                  className="inline-flex items-center gap-1 font-bold text-brand-600 dark:text-brand-400 hover:gap-2 transition-all"
                >
                  <span>Enroll Free</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
