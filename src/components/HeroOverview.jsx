import React from 'react';
import { 
  Flame, 
  GitCommit, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  ShieldCheck, 
  Clock,
  TrendingUp,
  Brain
} from 'lucide-react';
import { WINTER_ARC_QUOTES } from '../data/initialData';

export default function HeroOverview({ 
  currentDayNum, 
  daysData, 
  githubData, 
  leetcodeData, 
  onJumpToTab 
}) {
  // Compute overall stats
  const totalDays = 90;
  const completedDaysCount = Object.values(daysData).filter(d => d.completed).length;
  const arcPercentage = Math.min(100, Math.round((currentDayNum / totalDays) * 100));
  const daysRemaining = Math.max(0, totalDays - currentDayNum);

  // Today's tasks completion
  const todayTasks = daysData[currentDayNum]?.tasks || [];
  const todayDone = todayTasks.filter(t => t.completed).length;
  const todayTotal = todayTasks.length;
  const todayPercent = todayTotal > 0 ? Math.round((todayDone / todayTotal) * 100) : 0;

  // Random / rotating quote based on currentDayNum
  const quote = WINTER_ARC_QUOTES[(currentDayNum - 1) % WINTER_ARC_QUOTES.length];

  return (
    <div className="space-y-6">
      {/* Hero Banner with Navy Gradient */}
      <div className="relative overflow-hidden rounded-2xl border border-sky-900/40 bg-gradient-to-br from-[#0c1e3a] via-[#091528] to-[#050b14] p-6 sm:p-8 glow-navy">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-72 h-72 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-8 w-60 h-60 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/50 text-sky-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              WINTER ARC IN SESSION • DAY {currentDayNum} OF 90
            </div>
            
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white m-0">
              Forged in Silence, <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-slate-200">
                Revealed in Mastery.
              </span>
            </h1>

            <p className="text-sm text-slate-300 italic border-l-2 border-sky-500/50 pl-3">
              "{quote.text}" — <span className="text-slate-400 not-italic font-mono text-xs">{quote.author}</span>
            </p>
          </div>

          {/* Quick Focus Pill / Today Call-to-action */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 min-w-[240px]">
            <div className="bg-[#0b172a]/90 border border-sky-900/60 rounded-xl p-4 shadow-lg">
              <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
                <span>Today's Execution</span>
                <span className="font-mono font-bold text-sky-400">{todayDone}/{todayTotal} Done</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 transition-all duration-500 rounded-full"
                  style={{ width: `${todayPercent}%` }}
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-300">
                  {todayPercent === 100 ? '🔥 Perfection achieved!' : `${100 - todayPercent}% remaining`}
                </span>
                <button
                  onClick={() => onJumpToTab('today')}
                  className="inline-flex items-center gap-1 text-xs font-medium text-sky-400 hover:text-sky-300 transition-colors"
                >
                  Check tasks <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 90-Day Arc Progress Timeline Bar */}
        <div className="mt-8 pt-6 border-t border-sky-950/80">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
            <span className="flex items-center gap-1.5 text-sky-300 font-semibold">
              <TrendingUp className="w-4 h-4 text-sky-400" />
              90-DAY WINTER ARC MILESTONE
            </span>
            <span className="text-white font-bold">{arcPercentage}% Complete ({daysRemaining} days left)</span>
          </div>

          <div className="relative w-full h-3 bg-slate-900/90 rounded-full overflow-hidden p-0.5 border border-sky-950">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-teal-300 rounded-full transition-all duration-700 glow-ice"
              style={{ width: `${arcPercentage}%` }}
            />
          </div>

          {/* Phase Indicators */}
          <div className="grid grid-cols-3 gap-2 mt-3 text-[11px] font-mono text-slate-400 text-center">
            <div className={`p-1.5 rounded-lg border ${currentDayNum <= 30 ? 'bg-sky-950/60 border-sky-800 text-sky-200' : 'bg-slate-950/40 border-slate-900 text-slate-500'}`}>
              <span className="font-bold block text-slate-300">Phase I (1-30)</span>
              <span>Foundation & Silence</span>
            </div>
            <div className={`p-1.5 rounded-lg border ${currentDayNum > 30 && currentDayNum <= 60 ? 'bg-sky-950/60 border-sky-800 text-sky-200' : 'bg-slate-950/40 border-slate-900 text-slate-500'}`}>
              <span className="font-bold block text-slate-300">Phase II (31-60)</span>
              <span>Acceleration & Depth</span>
            </div>
            <div className={`p-1.5 rounded-lg border ${currentDayNum > 60 ? 'bg-sky-950/60 border-sky-800 text-sky-200' : 'bg-slate-950/40 border-slate-900 text-slate-500'}`}>
              <span className="font-bold block text-slate-300">Phase III (61-90)</span>
              <span>Transformation & Peak</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Core Metric Glass Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: 90 Days Arc Status */}
        <div 
          onClick={() => onJumpToTab('matrix')}
          className="glass-panel glass-panel-hover rounded-xl p-5 cursor-pointer relative group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
              Winter Arc Grid
            </span>
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-white font-mono">Day {currentDayNum}</span>
            <span className="text-xs text-slate-400 font-mono">/ 90</span>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-sky-950/60">
            <span>{completedDaysCount} Days fully logged</span>
            <span className="text-sky-400 group-hover:translate-x-0.5 transition-transform">View &rarr;</span>
          </div>
        </div>

        {/* Card 2: GitHub Green Dots */}
        <div 
          onClick={() => onJumpToTab('integrations')}
          className="glass-panel glass-panel-hover rounded-xl p-5 cursor-pointer relative group border-l-2 border-l-emerald-500"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping"></span>
              Holy Green Dots
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <GitCommit className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-white font-mono">
              {githubData?.totalContributions || 684}
            </span>
            <span className="text-xs text-slate-400 font-mono">commits</span>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-sky-950/60">
            <span className="text-emerald-300 font-mono">🔥 {githubData?.currentStreak || 12}d active streak</span>
            <span className="text-emerald-400 group-hover:translate-x-0.5 transition-transform">Graph &rarr;</span>
          </div>
        </div>

        {/* Card 3: LeetCode Grind */}
        <div 
          onClick={() => onJumpToTab('integrations')}
          className="glass-panel glass-panel-hover rounded-xl p-5 cursor-pointer relative group border-l-2 border-l-amber-500"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-medium text-amber-400 uppercase tracking-wider">
              LeetCode DSA
            </span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Code2 className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-white font-mono">
              {leetcodeData?.totalSolved || 247}
            </span>
            <span className="text-xs text-slate-400 font-mono">solved</span>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-sky-950/60">
            <span className="font-mono text-amber-300/90">
              <span className="text-emerald-400">{leetcodeData?.easySolved || 112}E</span> / 
              <span className="text-amber-400 mx-1">{leetcodeData?.mediumSolved || 114}M</span> / 
              <span className="text-rose-400">{leetcodeData?.hardSolved || 21}H</span>
            </span>
            <span className="text-amber-400 group-hover:translate-x-0.5 transition-transform">Stats &rarr;</span>
          </div>
        </div>

        {/* Card 4: Skincare & Discipline */}
        <div 
          onClick={() => onJumpToTab('today')}
          className="glass-panel glass-panel-hover rounded-xl p-5 cursor-pointer relative group border-l-2 border-l-purple-500"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-medium text-purple-400 uppercase tracking-wider">
              Skincare & Habits
            </span>
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-white font-mono">
              {todayPercent}%
            </span>
            <span className="text-xs text-slate-400 font-mono">done today</span>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-sky-950/60">
            <span className="text-purple-300 font-mono">AM + PM Glow locked</span>
            <span className="text-purple-400 group-hover:translate-x-0.5 transition-transform">Today &rarr;</span>
          </div>
        </div>

      </div>
    </div>
  );
}
