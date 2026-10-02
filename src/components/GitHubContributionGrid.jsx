import React, { useState, useMemo } from 'react';
import { ExternalLink, Flame, Trophy, GitCommit, Plus, Check } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function GitHubContributionGrid({ isDarkMode }) {
  const targetUsername = 'parul-singh28';
  const targetUrl = 'https://github.com/parul-singh28';

  // State to simulate commits live without CORS error
  const [extraCommitsToday, setExtraCommitsToday] = useState(0);
  const [hoveredCell, setHoveredCell] = useState(null);

  // Generate 53 weeks (371 days) seeded realistically
  const gridData = useMemo(() => {
    const weeks = [];
    const today = new Date();
    // Start from 52 weeks ago
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - (52 * 7 + today.getDay()));

    let totalCommits = 724;

    for (let w = 0; w < 53; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + (w * 7 + d));
        
        const isFuture = date > today;
        const isToday = date.toDateString() === today.toDateString();

        // High frequency for winter arc (recent 90 days)
        const daysFromToday = Math.floor((today - date) / (1000 * 60 * 60 * 24));
        let count = 0;
        let level = 0;

        if (!isFuture) {
          if (daysFromToday <= 14) {
            // Active streak in winter arc
            count = Math.floor(Math.random() * 5) + 3; // 3 to 7 commits
          } else if (daysFromToday <= 90) {
            // Winter arc period
            count = Math.random() < 0.85 ? Math.floor(Math.random() * 6) + 1 : 0;
          } else {
            // General coding
            count = Math.random() < 0.65 ? Math.floor(Math.random() * 5) : 0;
          }

          if (isToday) {
            count += extraCommitsToday;
          }

          if (count === 0) level = 0;
          else if (count <= 2) level = 1;
          else if (count <= 4) level = 2;
          else if (count <= 6) level = 3;
          else level = 4;
        }

        days.push({
          date: date.toISOString().split('T')[0],
          dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
          dateFormatted: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          count,
          level,
          isFuture,
          isToday
        });
      }
      weeks.push(days);
    }
    return { weeks, totalCommits: totalCommits + extraCommitsToday };
  }, [extraCommitsToday]);

  const getColorClass = (level, isDarkMode) => {
    if (level === 0) {
      return isDarkMode ? 'bg-[#161b22]' : 'bg-[#ebedf0]';
    }
    if (isDarkMode) {
      switch (level) {
        case 1: return 'bg-[#0e4429]';
        case 2: return 'bg-[#006d32]';
        case 3: return 'bg-[#26a641]';
        case 4: return 'bg-[#39d353] shadow-[0_0_8px_rgba(57,211,83,0.6)]';
        default: return 'bg-[#161b22]';
      }
    } else {
      switch (level) {
        case 1: return 'bg-[#9be9a8]';
        case 2: return 'bg-[#40c463]';
        case 3: return 'bg-[#30a14e]';
        case 4: return 'bg-[#216e39]';
        default: return 'bg-[#ebedf0]';
      }
    }
  };

  const handleSimulateCommit = () => {
    setExtraCommitsToday(prev => prev + 1);
  };

  return (
    <div className="theme-panel rounded-2xl p-5 sm:p-6 space-y-5 relative overflow-hidden transition-all duration-300">
      
      {/* Header & Target Link */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[var(--border-color)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
            <GithubIcon className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold m-0 tracking-tight text-[var(--text-primary)]">
                GitHub Activity Grid
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 font-semibold">
                CORS-PROOF SIMULATOR
              </span>
            </div>
            <a 
              href={targetUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-[var(--text-muted)] hover:text-emerald-500 inline-flex items-center gap-1 transition-colors"
            >
              @{targetUsername} <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Quick Action: Log Commit */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleSimulateCommit}
            className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-mono text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
            title="Log a commit for today to watch the green dots update in real-time"
          >
            <Plus className="w-3.5 h-3.5" />
            Log Commit (+1)
          </button>
          
          <a
            href={targetUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            title="Open GitHub Profile"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
        <div className="p-2.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)]">
          <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">Total Commits</span>
          <span className="text-lg sm:text-xl font-bold font-mono text-[var(--text-primary)]">
            {gridData.totalCommits}
          </span>
        </div>

        <div className="p-2.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)]">
          <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block flex items-center justify-center gap-1">
            <Flame className="w-3 h-3 text-amber-500 fill-amber-500" />
            Active Streak
          </span>
          <span className="text-lg sm:text-xl font-bold font-mono text-amber-500">
            14 Days
          </span>
        </div>

        <div className="p-2.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)]">
          <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block flex items-center justify-center gap-1">
            <Trophy className="w-3 h-3 text-emerald-500" />
            Max Streak
          </span>
          <span className="text-lg sm:text-xl font-bold font-mono text-emerald-500">
            42 Days
          </span>
        </div>
      </div>

      {/* The 53-Week Green Dot Matrix */}
      <div className="space-y-2">
        <div className="relative overflow-x-auto pb-2 scrollbar-thin">
          <div className="inline-flex gap-[3px] p-2.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] min-w-full">
            {gridData.weeks.map((week, wIndex) => (
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
                      className={`w-[11px] h-[11px] rounded-[2px] cursor-pointer transition-transform duration-100 ${getColorClass(
                        day.level,
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
                {hoveredCell.count} commits on {hoveredCell.dateFormatted}
              </span>
            ) : (
              <span>Hover over squares to inspect daily commit density</span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <span>Less</span>
            <div className="flex gap-[2px]">
              <span className={`w-2.5 h-2.5 rounded-[1px] ${getColorClass(0, isDarkMode)}`} />
              <span className={`w-2.5 h-2.5 rounded-[1px] ${getColorClass(1, isDarkMode)}`} />
              <span className={`w-2.5 h-2.5 rounded-[1px] ${getColorClass(2, isDarkMode)}`} />
              <span className={`w-2.5 h-2.5 rounded-[1px] ${getColorClass(3, isDarkMode)}`} />
              <span className={`w-2.5 h-2.5 rounded-[1px] ${getColorClass(4, isDarkMode)}`} />
            </div>
            <span>More</span>
          </div>
        </div>
      </div>

    </div>
  );
}
