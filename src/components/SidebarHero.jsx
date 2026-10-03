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
  Zap,
  Check,
  ShieldCheck,
  TrendingUp
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
  const allDays = Object.values(daysData);
  const totalDays = 90;
  
  // Calculate completed tasks & days
  const completedDaysCount = allDays.filter(d => d.dsaCompleted && d.skillCompleted).length;
  const totalPercent = Math.min(100, Math.round((completedDaysCount / totalDays) * 100));

  const currentPhase = currentDayNum <= 10 ? 1 : (currentDayNum <= 30 ? 2 : (currentDayNum <= 60 ? 3 : (currentDayNum <= 80 ? 4 : 5)));

  return (
    <aside className="w-full lg:w-80 flex-shrink-0 space-y-6">
      
      {/* 1. Hostinger-Style Identity Card */}
      <div className="hostinger-card p-5 sm:p-6 space-y-4 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#673de6]/15 blur-2xl pointer-events-none" />

        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#5025d1] via-[#673de6] to-[#8c52ff] p-0.5 shadow-[0_4px_16px_rgba(103,61,230,0.4)] flex items-center justify-center text-white font-mono font-black text-xl">
              PS
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#00e599] border-2 border-[var(--bg-surface)]" title="Winter Arc Active" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h2 className="text-base font-bold text-[var(--text-primary)] m-0 leading-tight">
                {WINTER_ARC_CONFIG.name}
              </h2>
            </div>
            <p className="text-xs font-mono text-[#8c52ff] dark:text-[#a782ff] font-semibold mt-0.5">
              3rd-Year CSE • Student Engineer
            </p>
            <div className="flex items-center gap-2 mt-1.5">
              <a
                href={WINTER_ARC_CONFIG.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-mono text-[var(--text-muted)] hover:text-[#00e599] inline-flex items-center gap-1 transition-colors"
              >
                <GithubIcon className="w-3 h-3" />
                @{WINTER_ARC_CONFIG.githubUsername}
              </a>
              <span className="text-[var(--text-muted)]">•</span>
              <a
                href={WINTER_ARC_CONFIG.leetcodeUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-mono text-[var(--text-muted)] hover:text-amber-400 inline-flex items-center gap-1 transition-colors"
              >
                <Code2 className="w-3 h-3" />
                LeetCode
              </a>
            </div>
          </div>
        </div>

        {/* Hostinger-Style North Star Guarantee */}
        <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#673de6]/15 via-[#8c52ff]/10 to-transparent border border-[#673de6]/30 text-xs font-mono space-y-1">
          <span className="text-[#8c52ff] dark:text-[#a782ff] font-extrabold uppercase text-[10px] tracking-wider flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 fill-[#8c52ff]" />
            North Star Mission
          </span>
          <span className="text-[var(--text-primary)] font-bold block">
            {WINTER_ARC_CONFIG.northStar}
          </span>
        </div>

        {/* Quick Days Jump: Day 1 & Day 2 */}
        <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-xs">
          <button
            onClick={() => onSelectDay(1)}
            className={`p-2 rounded-xl border text-center transition-all ${
              selectedDayNum === 1
                ? 'bg-[#673de6] text-white font-bold border-[#673de6] shadow-sm'
                : 'bg-[var(--bg-surface-elevated)] border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <span className="text-[10px] text-[var(--text-muted)] block">Oct 02</span>
            <span>Day 01 Plan</span>
          </button>

          <button
            onClick={() => onSelectDay(2)}
            className={`p-2 rounded-xl border text-center transition-all ${
              selectedDayNum === 2
                ? 'bg-[#673de6] text-white font-bold border-[#673de6] shadow-sm'
                : 'bg-[var(--bg-surface-elevated)] border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <span className="text-[10px] text-[#00e599] font-bold block">Today • Oct 03</span>
            <span>Day 02 Live 🔥</span>
          </button>
        </div>
      </div>

      {/* 2. Hostinger Pro Progress Card */}
      <div className="hostinger-card p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#673de6]" />
            90-Day Arc Progress
          </span>
          <span className="text-xs font-mono font-extrabold text-[#00e599]">
            {totalPercent}% Crushed
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
                className="text-slate-200 dark:text-[#231754]"
                fill="transparent"
              />
              <circle
                cx="40"
                cy="40"
                r="32"
                stroke="url(#hostingerProgressGrad)"
                strokeWidth="7"
                strokeDasharray={201}
                strokeDashoffset={201 - (201 * Math.max(2, totalPercent)) / 100}
                strokeLinecap="round"
                fill="transparent"
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="hostingerProgressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#673de6" />
                  <stop offset="100%" stopColor="#00e599" />
                </linearGradient>
              </defs>
            </svg>
            <span className="absolute font-mono font-black text-sm text-[var(--text-primary)]">
              {totalPercent}%
            </span>
          </div>

          <div className="space-y-1 font-mono text-xs text-[var(--text-secondary)]">
            <div className="text-[var(--text-primary)] font-bold text-sm">
              Day {currentDayNum} of 90 Live
            </div>
            <div>{completedDaysCount} days complete</div>
            <div className="text-[var(--text-muted)] text-[11px]">
              {90 - currentDayNum} days left until Dec 30
            </div>
          </div>
        </div>

        <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-[#1f1347] overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#673de6] via-[#8c52ff] to-[#00e599] transition-all duration-700 rounded-full"
            style={{ width: `${Math.max(2, totalPercent)}%` }}
          />
        </div>
      </div>

      {/* 3. 4 Core Outcomes from Page 2 */}
      <div className="hostinger-card p-5 sm:p-6 space-y-3">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] block flex items-center gap-1.5">
          <TrendingUp className="w-3.5 h-3.5 text-[#673de6]" />
          Guaranteed Arc Outcomes
        </span>

        <div className="space-y-2 font-mono text-xs">
          <div className="p-2.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] flex items-center justify-between">
            <span className="text-[var(--text-primary)]">~75 Understood DSA (C++)</span>
            <span className="text-[#00e599] font-bold">Target</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] flex items-center justify-between">
            <span className="text-[var(--text-primary)]">Culture Smart Traveller</span>
            <span className="text-[#8c52ff] font-bold">Flagship</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] flex items-center justify-between">
            <span className="text-[var(--text-primary)]">MediMap + SAMPRAAN</span>
            <span className="text-sky-400 font-bold">2 Stories</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] flex items-center justify-between">
            <span className="text-[var(--text-primary)]">10-15 Applications/Week</span>
            <span className="text-amber-400 font-bold">Late Arc</span>
          </div>
        </div>
      </div>

      {/* 4. The 5 Phases (Hostinger Tier Plan Style) */}
      <div className="hostinger-card p-5 sm:p-6 space-y-3">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] block flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-[#673de6]" />
          5 Arc Phases
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
                    ? 'bg-[#673de6]/15 border-[#673de6]/50 text-[var(--text-primary)] ring-1 ring-[#673de6]/30' 
                    : isCompleted
                    ? 'bg-[#00e599]/10 border-[#00e599]/30 text-[var(--text-muted)]'
                    : 'bg-transparent border-[var(--border-color)] text-[var(--text-muted)] opacity-60'
                }`}
              >
                <div className="flex items-center justify-between font-bold">
                  <span className={isActive ? 'text-[#8c52ff] dark:text-[#a782ff]' : ''}>
                    {phase.name}: {phase.title}
                  </span>
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

    </aside>
  );
}
