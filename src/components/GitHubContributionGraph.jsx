import React, { useState } from 'react';
import { 
  GitCommit, 
  ExternalLink, 
  Flame, 
  Trophy, 
  Calendar, 
  RefreshCw, 
  Check, 
  Zap, 
  Info 
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function GitHubContributionGraph({ 
  githubData, 
  onUpdateUsername, 
  isRefreshing,
  onRefresh 
}) {
  const [usernameInput, setUsernameInput] = useState(githubData?.username || '');
  const [isEditingUser, setIsEditingUser] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [viewMode, setViewMode] = useState('winterArc'); // 'winterArc' (90 days) or 'fullYear' (365 days)

  const handleSaveUser = (e) => {
    e.preventDefault();
    if (usernameInput.trim()) {
      onUpdateUsername(usernameInput.trim());
      setIsEditingUser(false);
    }
  };

  const contributions = githubData?.contributions || [];

  // Filter contributions based on view mode
  const displayedContributions = viewMode === 'winterArc' 
    ? contributions.slice(-91) // Last ~90 days
    : contributions.slice(-364); // Full year

  // Chunk contributions into weeks (7 days per column)
  const weeks = [];
  let currentWeek = [];
  
  displayedContributions.forEach((day, index) => {
    currentWeek.push(day);
    if (currentWeek.length === 7 || index === displayedContributions.length - 1) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  // Color mapper for intensity levels
  const getColorClass = (level) => {
    switch (level) {
      case 1:
        return 'bg-[#0e4429] hover:bg-[#14603a] border-[#1b5e39]';
      case 2:
        return 'bg-[#006d32] hover:bg-[#008a40] border-[#108c48]';
      case 3:
        return 'bg-[#26a641] hover:bg-[#34c452] border-[#39d353] shadow-[0_0_8px_rgba(38,166,65,0.4)]';
      case 4:
        return 'bg-[#39d353] hover:bg-[#4bf369] border-[#57f287] shadow-[0_0_12px_rgba(57,211,83,0.7)]';
      default:
        return 'bg-[#081528] hover:bg-[#0f2545] border-sky-950/60';
    }
  };

  // Calculate stats for the selected view
  const totalCommitsInView = displayedContributions.reduce((acc, curr) => acc + (curr.count || 0), 0);
  const activeDaysInView = displayedContributions.filter(d => d.count > 0).length;

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border-sky-900/50 relative overflow-hidden glow-navy">
      {/* Background neon green accent shimmer */}
      <div className="absolute top-0 right-1/4 -mt-16 w-80 h-40 bg-emerald-500/10 blur-3xl pointer-events-none" />

      {/* Header & User Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sky-950/80 pb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#091528] border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-md">
            <GithubIcon className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white tracking-tight m-0 flex items-center gap-2">
                Holy Green Dots
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 font-mono">
                  {githubData?.isLive ? 'LIVE GITHUB' : 'MOCK PREVIEW'}
                </span>
              </h2>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Never break the chain. Every single green square is proof of work.
            </p>
          </div>
        </div>

        {/* User Handle & Edit controls */}
        <div className="flex items-center gap-2">
          {isEditingUser ? (
            <form onSubmit={handleSaveUser} className="flex items-center gap-2">
              <input
                type="text"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                placeholder="GitHub username"
                className="px-3 py-1.5 rounded-lg bg-[#070e1b] border border-sky-800 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                autoFocus
              />
              <button
                type="submit"
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setIsEditingUser(false)}
                className="px-2 py-1.5 rounded-lg bg-slate-800 text-slate-400 text-xs"
              >
                Cancel
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#091528] border border-sky-900/80">
                <img 
                  src={githubData?.avatarUrl} 
                  alt={githubData?.username} 
                  className="w-5 h-5 rounded-full border border-sky-400/40 object-cover"
                />
                <span className="text-xs font-mono text-slate-200 font-medium">
                  @{githubData?.username || 'techbestuuuu'}
                </span>
                <button
                  onClick={() => setIsEditingUser(true)}
                  className="text-[11px] text-sky-400 hover:text-sky-300 underline underline-offset-2 ml-1"
                >
                  Change
                </button>
              </div>

              <a
                href={`https://github.com/${githubData?.username || ''}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-[#091528] hover:bg-sky-950 text-slate-400 hover:text-white border border-sky-950 transition-colors"
                title="Open GitHub Profile"
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={onRefresh}
                disabled={isRefreshing}
                className="p-2 rounded-xl bg-[#091528] hover:bg-sky-950 text-slate-400 hover:text-white border border-sky-950 transition-colors"
                title="Sync now"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-emerald-400' : ''}`} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-xl bg-[#081528]/80 border border-sky-950">
          <span className="text-[11px] text-slate-400 font-mono block">Total Commits</span>
          <span className="text-2xl font-bold font-mono text-white">
            {githubData?.totalContributions || 684}
          </span>
          <span className="text-[10px] text-emerald-400 font-mono block mt-0.5">Last 365 days</span>
        </div>

        <div className="p-3.5 rounded-xl bg-[#081528]/80 border border-sky-950">
          <span className="text-[11px] text-slate-400 font-mono block flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            Current Streak
          </span>
          <span className="text-2xl font-bold font-mono text-amber-300">
            {githubData?.currentStreak || 14} <span className="text-sm font-normal text-slate-400">days</span>
          </span>
          <span className="text-[10px] text-slate-400 font-mono block mt-0.5">Active streak</span>
        </div>

        <div className="p-3.5 rounded-xl bg-[#081528]/80 border border-sky-950">
          <span className="text-[11px] text-slate-400 font-mono block flex items-center gap-1">
            <Trophy className="w-3.5 h-3.5 text-yellow-400" />
            Longest Streak
          </span>
          <span className="text-2xl font-bold font-mono text-yellow-200">
            {githubData?.longestStreak || 38} <span className="text-sm font-normal text-slate-400">days</span>
          </span>
          <span className="text-[10px] text-slate-400 font-mono block mt-0.5">Personal record</span>
        </div>

        <div className="p-3.5 rounded-xl bg-[#081528]/80 border border-sky-950">
          <span className="text-[11px] text-slate-400 font-mono block">Public Repos</span>
          <span className="text-2xl font-bold font-mono text-sky-300">
            {githubData?.publicRepos ?? 24}
          </span>
          <span className="text-[10px] text-slate-400 font-mono block mt-0.5">
            {githubData?.followers ?? 84} followers
          </span>
        </div>
      </div>

      {/* Grid Controls (Winter Arc 90-day vs Full Year) */}
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('winterArc')}
            className={`px-3 py-1 rounded-lg font-mono text-xs transition-colors ${
              viewMode === 'winterArc'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                : 'text-slate-400 hover:text-white bg-[#081528]'
            }`}
          >
            Winter Arc Window (90 Days)
          </button>
          <button
            onClick={() => setViewMode('fullYear')}
            className={`px-3 py-1 rounded-lg font-mono text-xs transition-colors ${
              viewMode === 'fullYear'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                : 'text-slate-400 hover:text-white bg-[#081528]'
            }`}
          >
            Full Year (365 Days)
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-400 font-mono">
          <span>Less</span>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#081528] border border-sky-950/60" />
            <span className="w-2.5 h-2.5 rounded-sm bg-[#0e4429]" />
            <span className="w-2.5 h-2.5 rounded-sm bg-[#006d32]" />
            <span className="w-2.5 h-2.5 rounded-sm bg-[#26a641]" />
            <span className="w-2.5 h-2.5 rounded-sm bg-[#39d353]" />
          </div>
          <span>More</span>
        </div>
      </div>

      {/* The Holy Green Dots Matrix */}
      <div className="relative overflow-x-auto pb-2 scrollbar-thin">
        <div className="inline-flex gap-1 min-w-full p-2 rounded-xl bg-[#050d18] border border-sky-950/80">
          {weeks.map((week, wIndex) => (
            <div key={wIndex} className="flex flex-col gap-1">
              {week.map((day, dIndex) => {
                const isHovered = activeTooltip?.date === day.date;
                return (
                  <div
                    key={`${wIndex}-${dIndex}`}
                    onMouseEnter={() => setActiveTooltip(day)}
                    onMouseLeave={() => setActiveTooltip(null)}
                    className={`w-3.5 h-3.5 sm:w-3 sm:h-3 rounded-[3px] border transition-transform duration-150 cursor-pointer ${getColorClass(
                      day.level
                    )} ${isHovered ? 'scale-125 z-20 border-white' : ''}`}
                    title={`${day.count} commits on ${day.date}`}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Floating Tooltip Indicator */}
        {activeTooltip && (
          <div className="mt-2 text-xs font-mono text-center text-slate-300 py-1 bg-[#091528] rounded-lg border border-sky-900/60">
            <span className="font-bold text-emerald-400">
              {activeTooltip.count} {activeTooltip.count === 1 ? 'contribution' : 'contributions'}
            </span>{' '}
            on {new Date(activeTooltip.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 font-mono gap-2 pt-2">
        <div className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-sky-400" />
          <span>Showing {activeDaysInView} active coding days in this period ({totalCommitsInView} commits).</span>
        </div>
        <span className="text-slate-500">Live API updates automatically on commit</span>
      </div>
    </div>
  );
}
