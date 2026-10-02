import React from 'react';
import { Sparkles, Flame, Settings, Calendar, RefreshCw } from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  currentDayNum, 
  streak, 
  openSettings,
  onRefreshStats,
  isRefreshing
}) {
  const navTabs = [
    { id: 'today', label: 'Today Focus' },
    { id: 'matrix', label: '90-Day Matrix' },
    { id: 'integrations', label: 'GitHub & LeetCode' },
    { id: 'stats', label: 'Overview' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-sky-950/60 bg-[#050b14]/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-900/40 border border-sky-500/30 text-sky-400 shadow-inner">
              <span className="font-mono font-black text-lg tracking-tighter text-sky-300">tb</span>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-400"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold tracking-tight text-white text-lg">
                  techbestuuuu
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded-full bg-sky-950 text-sky-300 border border-sky-800/60 font-semibold">
                  Winter Arc
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono tracking-wide hidden sm:block">
                90 Days of Silence, Code & Transformation
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#091528] p-1 rounded-xl border border-sky-950/80">
            {navTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-sky-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-sky-900/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Right Metrics & Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Day Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-950/70 border border-sky-800/40 text-sky-200 text-xs font-mono">
              <Calendar className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-bold">DAY {String(currentDayNum).padStart(2, '0')}</span>
              <span className="text-slate-500">/ 90</span>
            </div>

            {/* Streak Counter */}
            <div className="flex items-center gap-1 px-3 py-1 rounded-lg bg-amber-950/40 border border-amber-800/40 text-amber-300 text-xs font-mono font-semibold">
              <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400/30" />
              <span>{streak}d</span>
            </div>

            {/* Refresh Stats */}
            <button
              onClick={onRefreshStats}
              title="Refresh GitHub & LeetCode Stats"
              className="p-2 rounded-lg bg-[#091528] text-slate-300 hover:text-white hover:bg-sky-900/30 border border-sky-950 transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-sky-400' : ''}`} />
            </button>

            {/* Settings */}
            <button
              onClick={openSettings}
              title="Settings & Accounts"
              className="p-2 rounded-lg bg-[#091528] text-slate-300 hover:text-white hover:bg-sky-900/30 border border-sky-950 transition-colors"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="flex md:hidden items-center justify-around py-2 border-t border-sky-950/40 overflow-x-auto gap-2">
          {navTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 rounded-lg text-xs whitespace-nowrap font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-sky-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

      </div>
    </header>
  );
}
