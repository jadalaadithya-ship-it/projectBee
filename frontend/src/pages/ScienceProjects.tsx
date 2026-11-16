import React, { useState } from 'react';
import { 
  FlaskConical, 
  Search, 
  Filter, 
  ShieldAlert, 
  HelpCircle, 
  CheckCircle, 
  ArrowRight, 
  Layers, 
  Wrench, 
  Eye, 
  X,
  Compass
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'Physics' | 'Chemistry' | 'Biology' | 'Robotics' | 'Electronics' | 'Environmental Science';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  timeEstimate: string;
  summary: string;
  workingPrinciple: string;
  materials: string[];
  procedure: string[];
  expectedResult: string;
  safetyInstructions: string[];
  vivaQuestions: { question: string; answer: string }[];
}

export const ScienceProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    'all',
    'Physics',
    'Chemistry',
    'Biology',
    'Robotics',
    'Electronics',
    'Environmental Science'
  ];

  const projects: Project[] = [
    {
      id: 'sci-01',
      title: 'Electromagnetic Train: Magnetic Levitation & Induction',
      category: 'Physics',
      difficulty: 'Intermediate',
      timeEstimate: '45 mins',
      summary: 'Construct a frictionless electromagnetic sliding train through copper coil spirals using neodymium magnets and a single battery.',
      workingPrinciple: 'Lenz’s Law and Lorentz Force. The current flowing through the copper wire produces a localized magnetic field that repels the rear neodymium magnet and attracts the front magnet, propelling the cell continuously forward.',
      materials: [
        '10 meters of 18-gauge uninsulated solid copper wire',
        '4 strong cylindrical Neodymium (NdFeB) disc magnets',
        '1 fresh 1.5V AAA alkaline battery',
        'Long cylindrical wooden dowel / marker (for uniform coil winding)'
      ],
      procedure: [
        'Tightly and evenly wind the copper wire around the marker to create a smooth, continuous spiral coil tunnel of ~30-50 cm.',
        'Remove the marker, ensuring turns of the coil are uniform and do not overlap.',
        'Attach two neodymium magnets to the negative terminal and two to the positive terminal of the battery.',
        'Ensure identical magnetic poles face each other outwards so the magnetic flux vector directs axially.',
        'Insert the battery magnet assembly into one end of the copper tunnel and observe continuous self-propulsion.'
      ],
      expectedResult: 'The battery and magnet train will slide autonomously through the copper tunnel at high velocity until the electrical charge depletes.',
      safetyInstructions: [
        'Neodymium magnets exert extreme pinch force; handle with care to avoid skin pinching.',
        'The copper wire and battery terminals may warm up during prolonged runs; disconnect when idle.'
      ],
      vivaQuestions: [
        {
          question: 'What creates the propelling magnetic force inside the coil?',
          answer: 'The battery contacts complete a closed circuit with the bare copper turns, generating an electromotive force (Lorentz Force) that propels the magnet-battery assembly.'
        },
        {
          question: 'Why does insulated copper wire fail in this experiment?',
          answer: 'Insulation prevents electrical contact between the neodymium magnets and the wire turns, preventing the closed circuit from establishing.'
        }
      ]
    },
    {
      id: 'sci-02',
      title: 'Red Cabbage Anthocyanin Natural pH Indicator',
      category: 'Chemistry',
      difficulty: 'Beginner',
      timeEstimate: '30 mins',
      summary: 'Extract water-soluble pigments to formulate a vivid universal pH chemical indicator that shifts from bright red to deep purple, green, and yellow.',
      workingPrinciple: 'Anthocyanins belong to the flavonoid group of pigments. In acidic environments (low pH), the flavylium cation predominates (red), whereas increasing alkalinity abstracts protons, modifying conjugated double bonds and shifting light absorption to green/yellow.',
      materials: [
        '1/2 head of fresh Red Cabbage',
        'Boiling distilled water',
        'Fine mesh strainer & clear glass beakers',
        'Household test samples: Lemon juice (acid), Vinegar (acid), Distilled water (neutral), Baking soda solution (base), Milk of Magnesia (strong base)'
      ],
      procedure: [
        'Chop red cabbage finely and place into a heat-resistant bowl.',
        'Pour boiling water over the cabbage and let steep for 15 minutes until a deep purple solution emerges.',
        'Filter the purple liquid into a storage jar through the strainer and let cool.',
        'Fill 5 transparent glasses with 50ml of water and add 20ml of the indicator.',
        'Add test substances dropwise into individual glasses and record color shifts.'
      ],
      expectedResult: 'Lemon juice turns bright red (pH 2), vinegar turns pink (pH 3), water stays violet (pH 7), baking soda turns cyan/blue (pH 8-9), and strong base turns green-yellow (pH 12).',
      safetyInstructions: [
        'Care must be exercised while pouring boiling water.',
        'Do not ingest any laboratory chemicals or household cleaning agents tested.'
      ],
      vivaQuestions: [
        {
          question: 'What is the chemical pigment responsible for the color change in red cabbage?',
          answer: 'Anthocyanin, a water-soluble vacuolar pigment whose molecular conformation changes across hydronium ion concentrations.'
        },
        {
          question: 'What is the color of the indicator at exact neutrality (pH 7)?',
          answer: 'Deep violet / purple.'
        }
      ]
    },
    {
      id: 'sci-03',
      title: 'Autonomous Obstacle Avoiding Rover (Arduino UNO)',
      category: 'Robotics',
      difficulty: 'Advanced',
      timeEstimate: '2 Hours',
      summary: 'Engineer an autonomous two-wheeled robot vehicle featuring an HC-SR04 ultrasonic sonar sensor and L298N motor driver.',
      workingPrinciple: 'Time-of-Flight (ToF) acoustic echolocation. The ultrasonic sensor emits high-frequency 40kHz sound waves. By measuring the echo return delay, the microcontroller calculates obstacle distance using sound velocity and maneuvers motor steering.',
      materials: [
        'Arduino UNO R3 / Nano board',
        'HC-SR04 Ultrasonic Sensor Module',
        'L298N Dual H-Bridge Motor Driver',
        '2x DC Gear Motors with rubber wheels',
        '2-wheel chassis frame with ball caster',
        'SG90 Micro Servo Motor',
        '2x 18650 Li-ion batteries with battery holder',
        'Jumper wires & breadboard'
      ],
      procedure: [
        'Assemble the motors and ball caster to the acrylic chassis base.',
        'Mount the HC-SR04 ultrasonic sensor onto the SG90 servo at the front bumper.',
        'Connect the motor control wires to outputs OUT1-OUT4 of the L298N board.',
        'Wire Arduino digital pins (Trigger -> Pin 9, Echo -> Pin 10, Motor inputs -> Pins 4,5,6,7).',
        'Flash the obstacle avoidance logic sketch to Arduino with safety threshold of 25cm.',
        'Power on the rover on an open floor with cartons or obstacles.'
      ],
      expectedResult: 'The rover moves forward until an obstacle is detected within 25cm, pauses, sweeps the servo left and right, picks the clearest path, and pivots.',
      safetyInstructions: [
        'Ensure correct polarity on the 18650 lithium-ion cells to avoid short-circuits.',
        'Keep fingers clear of wheel gearboxes during powered testing.'
      ],
      vivaQuestions: [
        {
          question: 'How is distance derived from the HC-SR04 sensor readings?',
          answer: 'Distance = (Duration of Echo Pulse * Speed of Sound [343 m/s]) / 2 (accounting for the round trip).'
        },
        {
          question: 'What role does the L298N motor driver play?',
          answer: 'Microcontrollers cannot output enough current to drive motors directly; the L298N provides high-current switching and H-bridge directional control.'
        }
      ]
    },
    {
      id: 'sci-04',
      title: 'Solar Water Desalination & Purification Still',
      category: 'Environmental Science',
      difficulty: 'Beginner',
      timeEstimate: '40 mins',
      summary: 'Construct a passive, zero-energy solar distillation apparatus that transforms saline ocean water into fresh drinkable water using the hydrological cycle.',
      workingPrinciple: 'Evaporation and condensation phase changes driven by solar thermal greenhouse trapping. As sunlight heats the saline pool, pure H2O vapor rises, condenses against the cooler angled plastic canopy, and trickles down into a collection vessel, leaving salts and impurities behind.',
      materials: [
        'Large wide-mouthed plastic basin',
        'Clean small drinking cup (collection cup)',
        'Clear plastic wrap (cling film)',
        'Small clean pebble / weight',
        'Saline water (water mixed with 3 tablespoons of table salt and food coloring)',
        'Elastic rubber band or twine'
      ],
      procedure: [
        'Pour 2-3 cm of colored salt water into the large basin.',
        'Place the empty drinking cup upright in the center of the basin (ensuring no salt water splashes inside).',
        'Cover the basin tightly with transparent plastic wrap and secure with the rubber band.',
        'Place a small pebble on the center of the plastic wrap directly above the collection cup to form an inverted cone slope.',
        'Place the apparatus under direct hot sunlight for 3-4 hours.'
      ],
      expectedResult: 'Clear, colorless, completely fresh non-salty drinking water collects inside the central cup.',
      safetyInstructions: [
        'Do not drink water if testing with non-food grade basin materials.',
        'Use sunscreen and avoid prolonged sunburn while managing outdoor solar setups.'
      ],
      vivaQuestions: [
        {
          question: 'Why doesn’t salt evaporate along with the water vapor?',
          answer: 'Sodium chloride has a vastly higher boiling point (1,465°C) than water (100°C), so it remains in the liquid residue during solar thermal evaporation.'
        },
        {
          question: 'What environmental role does this technology play today?',
          answer: 'Provides low-cost, decentralized freshwater access in arid coastal zones facing acute groundwater depletion.'
        }
      ]
    }
  ];

  const filtered = projects.filter((p) => {
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-700/50 mb-3">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Practical STEM Laboratory</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Science & Engineering Projects
          </h1>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Real, functional experiments across Physics, Chemistry, Biology, Robotics, and Environmental Science with complete apparatus lists, procedures, safety instructions, and viva questions.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                  selectedCategory === c
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-brand-400'
                }`}
              >
                {c === 'all' ? 'All Disciplines' : c}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search experiments..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:shadow-xl hover:border-brand-500/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-bold text-accent-600 dark:text-accent-400 uppercase tracking-wider text-[11px]">
                    {proj.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-semibold">
                      {proj.difficulty}
                    </span>
                    <span className="text-slate-400 text-[11px]">{proj.timeEstimate}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {proj.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {proj.summary}
                </p>

                {/* Materials preview */}
                <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                    <Wrench className="w-3.5 h-3.5" /> Apparatus & Components ({proj.materials.length}):
                  </span>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                    {proj.materials.join(' • ')}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5" />
                  {proj.vivaQuestions.length} Viva Questions included
                </span>
                <button
                  onClick={() => setActiveModalProject(proj)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-sm transition-all"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Full Procedure</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Experiment Modal */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="glass-card bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl relative">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute right-5 top-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                    {activeModalProject.category} • {activeModalProject.difficulty}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                    {activeModalProject.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {activeModalProject.summary}
                  </p>
                </div>

                {/* Working Principle */}
                <div className="p-4 rounded-2xl bg-brand-50 dark:bg-slate-800/70 border border-brand-200 dark:border-brand-700/50">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300 flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-brand-500" />
                    Working Principle & Scientific Theory
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-serif">
                    {activeModalProject.workingPrinciple}
                  </p>
                </div>

                {/* Materials Required */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-2">
                    <Wrench className="w-4 h-4 text-slate-500" />
                    Required Materials & Apparatus
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                    {activeModalProject.materials.map((mat, i) => (
                      <li key={i} className="flex items-start gap-2 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg">
                        <CheckCircle className="w-3.5 h-3.5 text-accent-500 flex-shrink-0 mt-0.5" />
                        <span>{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step-by-Step Procedure */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-2">
                    <Layers className="w-4 h-4 text-slate-500" />
                    Step-by-Step Experimental Procedure
                  </h4>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {activeModalProject.procedure.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50">
                        <span className="w-5 h-5 rounded-full bg-brand-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expected Result */}
                <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 text-xs">
                  <span className="font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider text-[11px] block mb-1">
                    Expected Empirical Result:
                  </span>
                  <p className="text-emerald-900 dark:text-emerald-200">
                    {activeModalProject.expectedResult}
                  </p>
                </div>

                {/* Safety Warnings */}
                <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 text-xs">
                  <span className="font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider text-[11px] flex items-center gap-1 mb-1">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    Safety Precautions & Handling:
                  </span>
                  <ul className="list-disc list-inside space-y-1 text-amber-900 dark:text-amber-200">
                    {activeModalProject.safetyInstructions.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                </div>

                {/* Viva Voce Questions */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-2">
                    <HelpCircle className="w-4 h-4 text-brand-500" />
                    Curated Viva Voce Examination Questions
                  </h4>
                  <div className="space-y-2 text-xs">
                    {activeModalProject.vivaQuestions.map((viva, vIdx) => (
                      <div key={vIdx} className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                        <p className="font-semibold text-slate-900 dark:text-white">Q: {viva.question}</p>
                        <p className="mt-1 text-slate-600 dark:text-slate-300">A: {viva.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-6 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white text-xs font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                  Close Laboratory Card
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
