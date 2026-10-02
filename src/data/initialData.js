// TechBestuuuu - 90-Day Winter Arc Challenge Data Architecture

export const CATEGORIES = [
  {
    id: 'skincare',
    name: 'Skincare Routine',
    emoji: '💆‍♂️',
    iconName: 'Sparkles',
    accentColor: '#a855f7', // Purple
    lightBadge: 'bg-purple-100 text-purple-800 border-purple-200',
    darkBadge: 'bg-purple-950/60 text-purple-300 border-purple-800/40',
    tasks: [
      { id: 'skin-1', title: 'Morning Hydration: Drink 500ml water immediately on waking', defaultCompleted: true },
      { id: 'skin-2', title: 'AM Routine: Gentle Cleanser + Vitamin C / Niacinamide Serum', defaultCompleted: true },
      { id: 'skin-3', title: 'Sun Shield: Broad Spectrum SPF 50+ Sunscreen', defaultCompleted: true },
      { id: 'skin-4', title: 'PM Routine: Double Cleanse + Retinol / Barrier Repair Night Cream', defaultCompleted: false },
      { id: 'skin-5', title: 'Total Hydration Target: 3.5 Liters of water logged', defaultCompleted: false },
    ]
  },
  {
    id: 'tech',
    name: 'Tech & Engineering',
    emoji: '💻',
    iconName: 'Code2',
    accentColor: '#38bdf8', // Ice / Sky blue
    lightBadge: 'bg-sky-100 text-sky-800 border-sky-200',
    darkBadge: 'bg-sky-950/60 text-sky-300 border-sky-800/40',
    tasks: [
      { id: 'tech-1', title: 'Solve 2 LeetCode problems (1 Medium + 1 Daily Challenge)', defaultCompleted: true },
      { id: 'tech-2', title: 'Push 3+ meaningful Git commits to GitHub (@parul-singh28)', defaultCompleted: true },
      { id: 'tech-3', title: '1.5 Hours uninterrupted Deep Work on Next.js/React architecture', defaultCompleted: false },
      { id: 'tech-4', title: 'Review open-source code / Web performance optimizations', defaultCompleted: false },
    ]
  },
  {
    id: 'skills',
    name: 'Skills & Growth',
    emoji: '📚',
    iconName: 'Brain',
    accentColor: '#10b981', // Emerald
    lightBadge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    darkBadge: 'bg-emerald-950/60 text-emerald-300 border-emerald-800/40',
    tasks: [
      { id: 'skill-1', title: 'Read 20 pages of System Design / Distributed Systems book', defaultCompleted: true },
      { id: 'skill-2', title: 'Hands-on practice: PWA building & Service Worker caching', defaultCompleted: false },
      { id: 'skill-3', title: '15 mins technical articulation & speech clarity practice', defaultCompleted: true },
    ]
  },
  {
    id: 'core_goals',
    name: 'Core Daily Goals',
    emoji: '🎯',
    iconName: 'Target',
    accentColor: '#f59e0b', // Amber
    lightBadge: 'bg-amber-100 text-amber-800 border-amber-200',
    darkBadge: 'bg-amber-950/60 text-amber-300 border-amber-800/40',
    tasks: [
      { id: 'core-1', title: '1 Hour intense physical training (Strength / Hypertrophy / Cardio)', defaultCompleted: true },
      { id: 'core-2', title: '100% Clean nutrition (High protein, zero junk, zero processed sugar)', defaultCompleted: true },
      { id: 'core-3', title: '7.5+ Hours deep sleep (No screens 45 mins before bed)', defaultCompleted: false },
    ]
  }
];

export const PROFILE_INFO = {
  name: 'Parul Singh',
  role: 'Frontend & Full-Stack Developer',
  githubUsername: 'parul-singh28',
  githubUrl: 'https://github.com/parul-singh28',
  leetcodeUsername: 'Parul-Singh',
  leetcodeUrl: 'https://leetcode.com/u/Parul-Singh/',
  bio: 'Executing the 90-Day Winter Arc: Relentless code, algorithmic mastery, skincare glow, and peak physical conditioning.'
};

export const WINTER_ARC_PHASES = [
  { id: 'phase1', name: 'Phase I: The Foundation & Silence', range: 'Days 1–30', quote: 'Discipline in the dark creates victory in the light.' },
  { id: 'phase2', name: 'Phase II: Acceleration & Deep Work', range: 'Days 31–60', quote: 'Intensity becomes natural when consistency is non-negotiable.' },
  { id: 'phase3', name: 'Phase III: Transformation & Peak', range: 'Days 61–90', quote: 'The winter arc concludes. The new standard begins.' },
];

// Helper to generate full 90 days data
export function initialize90DaysData(startDateString) {
  const startDate = startDateString ? new Date(startDateString) : new Date();
  const days = {};

  for (let dayNum = 1; dayNum <= 90; dayNum++) {
    const dayDate = new Date(startDate);
    dayDate.setDate(startDate.getDate() + (dayNum - 1));

    const dayTasks = [];
    CATEGORIES.forEach(category => {
      category.tasks.forEach(task => {
        // Pre-fill days 1-13 as completed to showcase realistic ongoing challenge
        const isPastDay = dayNum < 14;
        dayTasks.push({
          id: `day-${dayNum}-${task.id}`,
          categoryId: category.id,
          title: task.title,
          completed: isPastDay ? true : (dayNum === 14 ? task.defaultCompleted : false)
        });
      });
    });

    days[dayNum] = {
      dayNumber: dayNum,
      date: dayDate.toISOString().split('T')[0],
      tasks: dayTasks,
      notes: dayNum < 14 
        ? `Day ${dayNum} crushed. Routine locked in, skincare on point, pushed code commits and solved daily DSA.` 
        : (dayNum === 14 ? 'Day 14 in progress. Maintaining high intensity and focus.' : ''),
      rating: dayNum <= 14 ? 5 : 0
    };
  }

  return days;
}
