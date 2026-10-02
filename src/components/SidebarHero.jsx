import React from 'react';
import { 
  Flame, 
  Award, 
  Code2, 
  Sparkles, 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  BookOpen, 
  Compass,
  AlertCircle
} from 'lucide-react';
import { WINTER_ARC_CONFIG, PHASES } from '../data/curriculumData';
import { GithubIcon } from './Icons';

export default function SidebarHero({ 
  currentDayNum, 
  daysData, 
  selectedDayNum,
  onSelectDay,
  streak 
}) {
  // Compute overall stats
  const allDays = Object.values(daysData);
  const totalDays = 90;
  
  // Total completed days (DSA + Skill)
  const completedDaysCount = allDays.filter(d => d.dsaCompleted && d.skillCompleted).length;
  const totalPercent = Math.round((completedDaysCount / totalDays) * 100);

  // Active Phase
  const currentPhase = currentDayNum <= 10 ? 1 : (currentDayNum <= 30 ? 2 : (currentDayNum <= 60 ? 3 : (currentDayNum <= 80 ? 4 : 5)));

  return (
    <aside className="w-full lg:w-80 flex-shrink-0 space-y-6">
      
      {/* 1. Identity & Profile Card */}
      <div className="theme-panel rounded-2xl p-5 sm:p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-600 via-blue-700 to-indigo-800 p-0.5 shadow-md flex items-center justify-center text-white font-mono font-bold text-xl">
              PS
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[var(--bg-surface)]" title="Locked In" />
          </div>

          <div>
            <h2 className="text-base font-bold text-[var(--text-primary)] m-0 leading-tight">
              {WINTER_ARC_CONFIG.name}
            </h2>
            <p className="text-xs font-mono text-[var(--text-secondary)] mt-0.5">
              3rd-Year CSE • Student Engineer
            </p>
            <div className="flex items-center gap-2 mt-1.5">
              <a
                href={WINTER_ARC_CONFIG.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-mono text-[var(--text-muted)] hover:text-emerald-500 inline-flex items-center gap-1 transition-colors"
              >
                <GithubIcon className="w-3 h-3" />
                @{WINTER_ARC_CONFIG.githubUsername}
              </a>
              <span className="text-[var(--text-muted)]">•</span>
              <a
                href={WINTER_ARC_CONFIG.leetcodeUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-mono text-[var(--text-muted)] hover:text-amber-500 inline-flex items-center gap-1 transition-colors"
              >
                <Code2 className="w-3 h-3" />
                LeetCode
              </a>
            </div>
          </div>
        </div>

        {/* Stack Badges */}
        <div className="flex flex-wrap gap-1.5">
          {WINTER_ARC_CONFIG.badges.map(b => (
            <span key={b} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)]">
              {b}
            </span>
          ))}
        </div>

        {/* North Star */}
        <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 text-xs font-mono">
          <span className="text-sky-500 font-bold block uppercase text-[10px]">North Star:</span>
          <span className="text-[var(--text-primary)] font-semibold">{WINTER_ARC_CONFIG.northStar}</span>
        </div>

        {/* Winter Arc Streak */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)]">
          <div className="flex items-center gap-2 font-mono">
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-xs text-[var(--text-secondary)]">Winter Arc Streak:</span>
          </div>
          <span className="font-mono text-sm font-bold text-amber-500">
            {streak} Days Locked In
          </span>
        </div>
      </div>

      {/* 2. Master Overall 90-Day Progress */}
      <div className="theme-panel rounded-2xl p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
            <Award className="w-4 h-4 text-sky-500" />
            90-Day Arc Progress
          </span>
          <span className="text-xs font-mono font-bold text-sky-500">
            {totalPercent}%
          </span>
        </div>

        {/* Master Radial / Bar Indicator */}
        <div className="flex items-center gap-4">
          <div className="relative flex items-center justify-center w-20 h-20 flex-shrink-0">
            <svg className="w-20 h-20 transform -rotate-90">
              <circle
                cx="40"
                cy="40"
                r="32"
                stroke="currentColor"
                strokeWidth="7"
                className="text-slate-200 dark:text-slate-800"
                fill="transparent"
              />
              <circle
                cx="40"
                cy="40"
                r="32"
                stroke="url(#masterProgressGrad)"
                strokeWidth="7"
                strokeDasharray={201}
                strokeDashoffset={201 - (201 * totalPercent) / 100}
                strokeLinecap="round"
                fill="transparent"
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="masterProgressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
            <span className="absolute font-mono font-extrabold text-sm text-[var(--text-primary)]">
              {totalPercent}%
            </span>
          </div>

          <div className="space-y-1 font-mono text-xs text-[var(--text-secondary)]">
            <div className="text-[var(--text-primary)] font-bold text-sm">
              Day {currentDayNum} of 90
            </div>
            <div>{completedDaysCount} days crushed</div>
            <div className="text-[var(--text-muted)] text-[11px]">
              {90 - currentDayNum} days left until Dec 30
            </div>
          </div>
        </div>

        <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-sky-500 via-blue-500 to-emerald-500 transition-all duration-700 rounded-full"
            style={{ width: `${totalPercent}%` }}
          />
        </div>
      </div>

      {/* 3. The 5 Phases from PDF Page 5 */}
      <div className="theme-panel rounded-2xl p-5 sm:p-6 space-y-3">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] block flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-sky-500" />
          The 5 Arc Phases
        </span>

        <div className="space-y-2 text-xs font-mono">
          {PHASES.map((phase) => {
            const isActive = currentPhase === phase.id;
            const isCompleted = currentPhase > phase.id;

            return (
              <div 
                key={phase.id}
                className={`p-2.5 rounded-xl border transition-all ${
                  isActive 
                    ? 'bg-sky-500/10 border-sky-500/40 text-[var(--text-primary)]' 
                    : isCompleted
                    ? 'bg-emerald-500/5 border-emerald-500/30 text-[var(--text-muted)]'
                    : 'bg-transparent border-[var(--border-color)] text-[var(--text-muted)] opacity-60'
                }`}
              >
                <div className="flex items-center justify-between font-bold">
                  <span>{phase.name}: {phase.title}</span>
                  <span className="text-[10px]">{phase.days}</span>
                </div>
                <p className="text-[11px] text-[var(--text-secondary)] mt-0.5 font-sans leading-normal m-0">
                  {phase.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. College Context Alert */}
      <div className="p-3.5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-secondary)] space-y-1">
        <span className="text-[10px] text-amber-500 font-bold uppercase block">Reality Check:</span>
        <p className="m-0 leading-relaxed">
          {WINTER_ARC_CONFIG.collegeContext}
        </p>
        <span className="text-sky-500 font-semibold block pt-1">
          &bull; {WINTER_ARC_CONFIG.ruleOfArc}
        </span>
      </div>

    </aside>
  );
}
