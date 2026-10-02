import React, { useState } from 'react';
import { 
  Code2, 
  ExternalLink, 
  Award, 
  TrendingUp, 
  RefreshCw, 
  CheckCircle2, 
  Percent, 
  Target 
} from 'lucide-react';

export default function LeetCodeWidget({ 
  leetcodeData, 
  onUpdateUsername, 
  isRefreshing, 
  onRefresh 
}) {
  const [usernameInput, setUsernameInput] = useState(leetcodeData?.username || '');
  const [isEditingUser, setIsEditingUser] = useState(false);

  const handleSaveUser = (e) => {
    e.preventDefault();
    if (usernameInput.trim()) {
      onUpdateUsername(usernameInput.trim());
      setIsEditingUser(false);
    }
  };

  const total = leetcodeData?.totalSolved || 247;
  const easy = leetcodeData?.easySolved || 112;
  const medium = leetcodeData?.mediumSolved || 114;
  const hard = leetcodeData?.hardSolved || 21;

  const totalQuestions = leetcodeData?.totalQuestions || 3320;
  const totalEasy = leetcodeData?.totalEasy || 840;
  const totalMedium = leetcodeData?.totalMedium || 1760;
  const totalHard = leetcodeData?.totalHard || 720;

  const easyPercent = Math.min(100, Math.round((easy / totalEasy) * 100));
  const mediumPercent = Math.min(100, Math.round((medium / totalMedium) * 100));
  const hardPercent = Math.min(100, Math.round((hard / totalHard) * 100));

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border-sky-900/50 relative overflow-hidden glow-navy">
      {/* Background Amber glow */}
      <div className="absolute top-0 right-1/4 -mt-16 w-80 h-40 bg-amber-500/10 blur-3xl pointer-events-none" />

      {/* Header & User Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sky-950/80 pb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#091528] border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-md">
            <Code2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white tracking-tight m-0 flex items-center gap-2">
                LeetCode Mastery
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-800/60 font-mono">
                  {leetcodeData?.isLive ? 'LIVE LEETCODE' : 'CONNECTED'}
                </span>
              </h2>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Algorithmic intuition builds day by day. Never miss the daily problem.
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
                placeholder="LeetCode username"
                className="px-3 py-1.5 rounded-lg bg-[#070e1b] border border-sky-800 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                autoFocus
              />
              <button
                type="submit"
                className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold"
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
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-xs font-mono text-slate-200 font-medium">
                  @{leetcodeData?.username || 'techbestuuuu'}
                </span>
                <button
                  onClick={() => setIsEditingUser(true)}
                  className="text-[11px] text-sky-400 hover:text-sky-300 underline underline-offset-2 ml-1"
                >
                  Change
                </button>
              </div>

              <a
                href={`https://leetcode.com/${leetcodeData?.username || ''}/`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-[#091528] hover:bg-sky-950 text-slate-400 hover:text-white border border-sky-950 transition-colors"
                title="Open LeetCode Profile"
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={onRefresh}
                disabled={isRefreshing}
                className="p-2 rounded-xl bg-[#091528] hover:bg-sky-950 text-slate-400 hover:text-white border border-sky-950 transition-colors"
                title="Sync now"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-amber-400' : ''}`} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        
        {/* Total Solved Ring / Card */}
        <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#071322] border border-sky-950/80 text-center">
          <div className="relative flex items-center justify-center w-36 h-36">
            {/* SVG Progress Circle */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                className="text-slate-800/80"
                fill="transparent"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="url(#leetcodeGradient)"
                strokeWidth="8"
                strokeDasharray={251.2}
                strokeDashoffset={251.2 - (251.2 * Math.min(100, (total / 500) * 100)) / 100}
                strokeLinecap="round"
                fill="transparent"
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="leetcodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-3xl font-extrabold text-white font-mono">{total}</span>
              <span className="text-[11px] text-slate-400 font-mono uppercase tracking-wider">Solved</span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-4 text-xs font-mono text-slate-400">
            <div>
              <span className="text-slate-500 block">Ranking</span>
              <span className="font-bold text-white">#{leetcodeData?.ranking || '128,490'}</span>
            </div>
            <div className="h-6 w-px bg-slate-800" />
            <div>
              <span className="text-slate-500 block">Acceptance</span>
              <span className="font-bold text-emerald-400">{leetcodeData?.acceptanceRate || '65.2'}%</span>
            </div>
          </div>
        </div>

        {/* Difficulty Breakdown Bars */}
        <div className="md:col-span-2 space-y-4">
          
          {/* Easy */}
          <div className="p-3.5 rounded-xl bg-[#081528] border border-sky-950 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="flex items-center gap-2 font-semibold text-emerald-400">
                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />
                Easy Questions
              </span>
              <span className="text-slate-300">
                <span className="font-bold text-white">{easy}</span> / {totalEasy} ({easyPercent}%)
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
              <div 
                className="h-full bg-emerald-500 rounded-full transition-all duration-700" 
                style={{ width: `${easyPercent}%` }}
              />
            </div>
          </div>

          {/* Medium */}
          <div className="p-3.5 rounded-xl bg-[#081528] border border-sky-950 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="flex items-center gap-2 font-semibold text-amber-400">
                <span className="w-2.5 h-2.5 rounded-sm bg-amber-500" />
                Medium Questions (The Core DSA)
              </span>
              <span className="text-slate-300">
                <span className="font-bold text-white">{medium}</span> / {totalMedium} ({mediumPercent}%)
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
              <div 
                className="h-full bg-amber-500 rounded-full transition-all duration-700" 
                style={{ width: `${mediumPercent}%` }}
              />
            </div>
          </div>

          {/* Hard */}
          <div className="p-3.5 rounded-xl bg-[#081528] border border-sky-950 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="flex items-center gap-2 font-semibold text-rose-400">
                <span className="w-2.5 h-2.5 rounded-sm bg-rose-500" />
                Hard Questions (Advanced)
              </span>
              <span className="text-slate-300">
                <span className="font-bold text-white">{hard}</span> / {totalHard} ({hardPercent}%)
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
              <div 
                className="h-full bg-rose-500 rounded-full transition-all duration-700" 
                style={{ width: `${hardPercent}%` }}
              />
            </div>
          </div>

          {/* Quick Tip / Goal */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-sky-950/40 border border-sky-900/40 text-xs font-mono text-sky-200">
            <span className="flex items-center gap-1.5">
              <Target className="w-4 h-4 text-sky-400" />
              Winter Arc Goal: 2 Problems Daily (1 Med + 1 Review)
            </span>
            <span className="text-slate-400 font-sans text-[11px]">Consistent &gt; Intense</span>
          </div>

        </div>

      </div>
    </div>
  );
}
