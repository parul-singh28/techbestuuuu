import React, { useState, useMemo } from 'react';
import { ExternalLink, Code2, Award, Zap, CheckCircle, Plus } from 'lucide-react';

export default function LeetCodeProgressMatrix({ isDarkMode }) {
  const targetUsername = 'Parul-Singh';
  const targetUrl = 'https://leetcode.com/u/Parul-Singh/';

  const [extraSolved, setExtraSolved] = useState(0);
  const [hoveredCell, setHoveredCell] = useState(null);

  const baseStats = {
    totalSolved: 284,
    easy: 124,
    medium: 134,
    hard: 26,
    totalEasy: 850,
    totalMedium: 1750,
    totalHard: 720,
    acceptanceRate: '68.4%',
    ranking: '118,420'
  };

  const currentTotal = baseStats.totalSolved + extraSolved;
  const currentMedium = baseStats.medium + extraSolved;

  // Generate 26 weeks (half year) of LeetCode submission squares
  const submissionMatrix = useMemo(() => {
    const weeks = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - (26 * 7 + today.getDay()));

    for (let w = 0; w < 26; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + (w * 7 + d));
        
        const isFuture = date > today;
        const isToday = date.toDateString() === today.toDateString();
        const daysFromToday = Math.floor((today - date) / (1000 * 60 * 60 * 24));

        let count = 0;
        let intensity = 0;

        if (!isFuture) {
          if (daysFromToday <= 14) {
            // Winter arc daily grind
            count = Math.floor(Math.random() * 4) + 2;
          } else if (daysFromToday <= 90) {
            count = Math.random() < 0.8 ? Math.floor(Math.random() * 5) + 1 : 0;
          } else {
            count = Math.random() < 0.5 ? Math.floor(Math.random() * 3) : 0;
          }

          if (isToday) {
            count += extraSolved;
          }

          if (count === 0) intensity = 0;
          else if (count === 1) intensity = 1;
          else if (count <= 3) intensity = 2;
          else intensity = 3;
        }

        days.push({
          date: date.toISOString().split('T')[0],
          dateFormatted: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          count,
          intensity,
          isFuture
        });
      }
      weeks.push(days);
    }
    return weeks;
  }, [extraSolved]);

  const getIntensityColor = (intensity, isDarkMode) => {
    if (intensity === 0) return isDarkMode ? 'bg-[#161b22]' : 'bg-[#ebedf0]';
    if (isDarkMode) {
      switch (intensity) {
        case 1: return 'bg-[#00474f]';
        case 2: return 'bg-[#08979c]';
        case 3: return 'bg-[#13c2c2] shadow-[0_0_8px_rgba(19,194,194,0.6)]';
        default: return 'bg-[#161b22]';
      }
    } else {
      switch (intensity) {
        case 1: return 'bg-[#bae7ff]';
        case 2: return 'bg-[#4096ff]';
        case 3: return 'bg-[#0958d9]';
        default: return 'bg-[#ebedf0]';
      }
    }
  };

  const handleSimulateSolve = () => {
    setExtraSolved(prev => prev + 1);
  };

  return (
    <div className="hostinger-card p-5 sm:p-6 space-y-5 relative overflow-hidden">
      
      {/* Header & Target Link */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[var(--border-color)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold m-0 tracking-tight text-[var(--text-primary)]">
                LeetCode Progress Matrix
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30 font-semibold">
                CORS-PROOF SIMULATOR
              </span>
            </div>
            <a 
              href={targetUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-[var(--text-muted)] hover:text-amber-500 inline-flex items-center gap-1 transition-colors"
            >
              @{targetUsername} <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Quick Action: Log Solved Problem */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleSimulateSolve}
            className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-mono text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
            title="Log a solved LeetCode problem in real-time"
          >
            <Plus className="w-3.5 h-3.5" />
            Solve Problem (+1)
          </button>
          
          <a
            href={targetUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            title="Open LeetCode Profile"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Difficulty Chips Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Easy */}
        <div className="p-3 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] space-y-1.5">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-emerald-500 font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Easy
            </span>
            <span className="text-[var(--text-primary)] font-semibold">
              {baseStats.easy} <span className="text-[var(--text-muted)] text-[10px]">/ {baseStats.totalEasy}</span>
            </span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <div 
              className="h-full bg-emerald-500 rounded-full"
              style={{ width: `${(baseStats.easy / baseStats.totalEasy) * 100}%` }}
            />
          </div>
        </div>

        {/* Medium */}
        <div className="p-3 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] space-y-1.5">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-amber-500 font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Medium
            </span>
            <span className="text-[var(--text-primary)] font-semibold">
              {currentMedium} <span className="text-[var(--text-muted)] text-[10px]">/ {baseStats.totalMedium}</span>
            </span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <div 
              className="h-full bg-amber-500 rounded-full"
              style={{ width: `${(currentMedium / baseStats.totalMedium) * 100}%` }}
            />
          </div>
        </div>

        {/* Hard */}
        <div className="p-3 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] space-y-1.5">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-rose-500 font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              Hard
            </span>
            <span className="text-[var(--text-primary)] font-semibold">
              {baseStats.hard} <span className="text-[var(--text-muted)] text-[10px]">/ {baseStats.totalHard}</span>
            </span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <div 
              className="h-full bg-rose-500 rounded-full"
              style={{ width: `${(baseStats.hard / baseStats.totalHard) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Global Meta Metrics */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[var(--text-secondary)] px-1">
        <div className="flex items-center gap-4">
          <div>
            <span className="text-[var(--text-muted)] text-[10px] block uppercase">Total Solved</span>
            <span className="text-base font-bold text-[var(--text-primary)]">{currentTotal}</span>
          </div>
          <div className="h-6 w-px bg-[var(--border-color)]" />
          <div>
            <span className="text-[var(--text-muted)] text-[10px] block uppercase">Acceptance</span>
            <span className="text-base font-bold text-emerald-500">{baseStats.acceptanceRate}</span>
          </div>
          <div className="h-6 w-px bg-[var(--border-color)]" />
          <div>
            <span className="text-[var(--text-muted)] text-[10px] block uppercase">Global Rank</span>
            <span className="text-base font-bold text-[var(--text-primary)]">#{baseStats.ranking}</span>
          </div>
        </div>

        <span className="text-[10px] text-[var(--text-muted)]">DSA Daily Target: 2 Problems / day</span>
      </div>

      {/* 26-Week Submission Heat Map */}
      <div className="space-y-2">
        <div className="relative overflow-x-auto pb-2 scrollbar-thin">
          <div className="inline-flex gap-[3px] p-2.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] min-w-full">
            {submissionMatrix.map((week, wIndex) => (
              <div key={wIndex} className="flex flex-col gap-[3px]">
                {week.map((day, dIndex) => {
                  if (day.isFuture) {
                    return (
                      <div 
                        key={dIndex}
                        className="w-[11px] h-[11px] rounded-[2px] opacity-10 bg-slate-500"
                      />
                    );
                  }

                  const isHovered = hoveredCell?.date === day.date;

                  return (
                    <div
                      key={dIndex}
                      onMouseEnter={() => setHoveredCell(day)}
                      onMouseLeave={() => setHoveredCell(null)}
                      className={`w-[11px] h-[11px] rounded-[2px] cursor-pointer transition-transform duration-100 ${getIntensityColor(
                        day.intensity,
                        isDarkMode
                      )} ${isHovered ? 'scale-150 z-20 ring-1 ring-[var(--text-primary)]' : ''}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Hover Tooltip / Status Display */}
        <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] px-1">
          <div>
            {hoveredCell ? (
              <span className="text-[var(--text-primary)] font-semibold">
                {hoveredCell.count} submissions on {hoveredCell.dateFormatted}
              </span>
            ) : (
              <span>Hover over heatmap squares to inspect submissions</span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <span>Less</span>
            <div className="flex gap-[2px]">
              <span className={`w-2.5 h-2.5 rounded-[1px] ${getIntensityColor(0, isDarkMode)}`} />
              <span className={`w-2.5 h-2.5 rounded-[1px] ${getIntensityColor(1, isDarkMode)}`} />
              <span className={`w-2.5 h-2.5 rounded-[1px] ${getIntensityColor(2, isDarkMode)}`} />
              <span className={`w-2.5 h-2.5 rounded-[1px] ${getIntensityColor(3, isDarkMode)}`} />
            </div>
            <span>More</span>
          </div>
        </div>
      </div>

    </div>
  );
}
