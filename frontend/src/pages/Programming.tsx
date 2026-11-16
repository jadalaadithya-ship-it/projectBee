import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Terminal, 
  Play, 
  Copy, 
  Check, 
  Sparkles, 
  BookOpen, 
  ArrowRight, 
  Laptop, 
  Cpu, 
  Database, 
  Globe 
} from 'lucide-react';

interface CodeTrack {
  id: string;
  name: string;
  level: string;
  icon: string;
  topics: string[];
  description: string;
  sampleCode: string;
  expectedOutput: string;
}

export const Programming: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('python');
  const [outputVisible, setOutputVisible] = useState<boolean>(true);

  const tracks: Record<string, CodeTrack> = {
    python: {
      id: 'python',
      name: 'Python',
      level: 'Beginner to Advanced',
      icon: '🐍',
      topics: ['Variables & Types', 'Loops & Functions', 'Object-Oriented Programming', 'List Comprehensions', 'Asyncio & FastAPIs'],
      description: 'The world’s most versatile language for automation, backend web services, data science, and artificial intelligence.',
      sampleCode: `# LearnSphere AI — Interactive Python Demo
def calculate_learning_velocity(courses_completed: int, days_active: int) -> float:
    """Calculates weekly learning velocity rate."""
    if days_active <= 0:
        return 0.0
    velocity = (courses_completed / days_active) * 7.0
    return round(velocity, 2)

student = "Aarav Sharma"
completed = 6
days = 14

rate = calculate_learning_velocity(completed, days)
print(f"Learner: {student}")
print(f"Weekly Velocity: {rate} courses/week")
print("Status: Top 5% of Accelerating Scholars! 🚀")`,
      expectedOutput: `Learner: Aarav Sharma
Weekly Velocity: 3.0 courses/week
Status: Top 5% of Accelerating Scholars! 🚀`
    },
    javascript: {
      id: 'javascript',
      name: 'JavaScript & TypeScript',
      level: 'All Levels',
      icon: '⚡',
      topics: ['ES6+ Syntaxes', 'Promises & Async/Await', 'DOM Manipulation', 'TypeScript Generics', 'React 18 Hooks'],
      description: 'The foundation of the interactive web, power tools, and full-stack cloud ecosystems.',
      sampleCode: `// LearnSphere AI — TypeScript Async Fetch Simulation
interface UserProgress {
  id: string;
  streakDays: number;
  badges: string[];
}

const fetchProgress = async (studentId: string): Promise<UserProgress> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: studentId,
        streakDays: 24,
        badges: ['Python Master', 'Quiz Champion', 'Bug Hunter']
      });
    }, 100);
  });
};

const data = await fetchProgress("learn_9082");
console.log(\`Streak: \${data.streakDays} Consecutive Days!\`);
console.log(\`Badges Earned: \${data.badges.join(', ')}\`);`,
      expectedOutput: `Streak: 24 Consecutive Days!
Badges Earned: Python Master, Quiz Champion, Bug Hunter`
    },
    cpp: {
      id: 'cpp',
      name: 'C & C++',
      level: 'Intermediate to Systems',
      icon: '⚙️',
      topics: ['Pointers & Memory Layout', 'STL Containers', 'Templates', 'Dynamic Memory Management', 'Competitive DSA'],
      description: 'High-performance computing, systems programming, game engines, and low-latency algorithmic trading.',
      sampleCode: `// LearnSphere AI — C++ Fast I/O & Dynamic Vector Demo
#include <iostream>
#include <vector>
#include <numeric>

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(NULL);

    std::vector<int> quizScores = {95, 88, 100, 92, 96};
    double total = std::accumulate(quizScores.begin(), quizScores.end(), 0.0);
    double average = total / quizScores.size();

    std::cout << "Assessed Quizzes: " << quizScores.size() << "\\n";
    std::cout << "Mean Academic Score: " << average << "%\\n";
    std::cout << "Evaluation: Distinction Honors\\n";
    return 0;
}`,
      expectedOutput: `Assessed Quizzes: 5
Mean Academic Score: 94.2%
Evaluation: Distinction Honors`
    },
    sql: {
      id: 'sql',
      name: 'SQL & Database Architecture',
      level: 'Beginner to Advanced',
      icon: '🗄️',
      topics: ['Relational Schemas', 'INNER/LEFT JOINs', 'Window Functions', 'Row Level Security', 'Index Tuning'],
      description: 'The lingua franca of data manipulation, transactional ACID guarantees, and database engineering.',
      sampleCode: `-- LearnSphere AI — Ranked Student Quiz Aggregation Query
SELECT 
    p.full_name,
    COUNT(qa.id) AS total_quizzes,
    ROUND(AVG(qa.score), 1) AS avg_score,
    DENSE_RANK() OVER (ORDER BY AVG(qa.score) DESC) AS cohort_rank
FROM profiles p
JOIN quiz_attempts qa ON p.id = qa.user_id
WHERE p.user_category = 'school_student'
GROUP BY p.id, p.full_name
HAVING COUNT(qa.id) >= 3
ORDER BY cohort_rank ASC
LIMIT 3;`,
      expectedOutput: `full_name       | total_quizzes | avg_score | cohort_rank
----------------+---------------+-----------+------------
Priya Nambiar   | 8             | 98.5      | 1
Devansh Verma   | 6             | 96.0      | 2
Rohan Gupta     | 9             | 94.5      | 3`
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(tracks[activeTab].sampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const allLanguages = [
    { name: 'Python', key: 'python', desc: 'AI, Data Science, Web & Automation' },
    { name: 'JavaScript / TS', key: 'javascript', desc: 'Full-Stack Web, React, Node' },
    { name: 'C / C++', key: 'cpp', desc: 'High Performance, DSA, OS Internals' },
    { name: 'Java', key: 'java', desc: 'Enterprise Systems, Android & Spring' },
    { name: 'SQL & Postgres', key: 'sql', desc: 'Relational Design & Analytics' },
    { name: 'React & Frontend', key: 'react', desc: 'Modern UI & Interactive State' },
    { name: 'AI & ML Ops', key: 'ai', desc: 'PyTorch, Transformers, LLMs' },
    { name: 'HTML5 & CSS3', key: 'htmlcss', desc: 'Semantic Layouts & Tailwind CSS' }
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-700/50 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Software Engineering Arena</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Code, Debug, and Ship Production Software
          </h1>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Beginner-to-advanced learning tracks covering Python, C++, JavaScript, Java, React, SQL, and Machine Learning with clear syntax breakdowns and project-based milestones.
          </p>
        </div>

        {/* Interactive Code Playground Showcase */}
        <div className="mt-10 glass-card rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
          
          {/* Top Language Tabs Bar */}
          <div className="bg-slate-100 dark:bg-slate-900 px-4 py-3 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              {['python', 'javascript', 'cpp', 'sql'].map((langKey) => (
                <button
                  key={langKey}
                  onClick={() => setActiveTab(langKey)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeTab === langKey
                      ? 'bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span>{tracks[langKey].icon}</span>
                  <span>{tracks[langKey].name}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                title="Copy code snippet"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-accent-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Code'}</span>
              </button>
              <button
                onClick={() => setOutputVisible(!outputVisible)}
                className="flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold bg-accent-600 hover:bg-accent-500 text-white shadow-sm transition-all"
              >
                <Play className="w-3 h-3 fill-white" />
                <span>Run Interactive Demo</span>
              </button>
            </div>
          </div>

          {/* Code Body & Execution Terminal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-slate-950 text-slate-200 font-mono text-xs">
            {/* Code Editor Panel */}
            <div className="lg:col-span-7 p-6 overflow-x-auto border-b lg:border-b-0 lg:border-r border-slate-800 leading-relaxed">
              <div className="flex items-center justify-between text-slate-500 pb-3 mb-2 border-b border-slate-800/80">
                <span>// {tracks[activeTab].name} Source Code</span>
                <span className="text-[10px] text-brand-400 uppercase font-bold">{tracks[activeTab].level}</span>
              </div>
              <pre className="text-slate-200 font-mono whitespace-pre-wrap">
                <code>{tracks[activeTab].sampleCode}</code>
              </pre>
            </div>

            {/* Output & Topics Panel */}
            <div className="lg:col-span-5 p-6 bg-slate-900/90 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-400 mb-2">
                  <Terminal className="w-4 h-4" />
                  <span>Standard Output Terminal</span>
                </div>

                {outputVisible ? (
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 font-mono text-xs whitespace-pre-wrap animate-in fade-in">
                    {tracks[activeTab].expectedOutput}
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-500 text-xs italic">
                    Click "Run Interactive Demo" to simulate execution output.
                  </div>
                )}

                <div className="mt-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Core Curriculum Concepts Covered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {tracks[activeTab].topics.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Ready to master {tracks[activeTab].name}?</span>
                <Link
                  to="/register"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-400 hover:text-accent-300"
                >
                  <span>Start Coding Free</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Available Programming Disciplines Grid */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Explore All 8 Core Technology Disciplines
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Each discipline provides curated exercises, automated syntax diagnostics, and real projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allLanguages.map((item) => (
              <div
                key={item.key}
                className="glass-card rounded-xl p-5 border border-slate-200 dark:border-slate-800 hover:border-brand-500/40 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {item.desc}
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-accent-600 dark:text-accent-400 font-semibold">Active Track</span>
                  <Link
                    to="/register"
                    className="font-bold text-brand-600 dark:text-brand-400 hover:underline"
                  >
                    Enroll
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
