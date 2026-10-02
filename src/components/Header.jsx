import React from 'react';
import { Sun, Moon, Calendar, Flame, RotateCcw, BookOpen, Compass, Clock, Award, GitCommit } from 'lucide-react';
import { WINTER_ARC_CONFIG } from '../data/curriculumData';

export default function Header({ 
  isDarkMode, 
  onToggleTheme, 
  currentDayNum, 
  activeTab, 
  setActiveTab, 
  onResetData 
}) {
  const tabs = [
    { id: 'today', label: "Today's Arc", icon: Calendar },
    { id: 'schedule', label: "90-Day Schedule", icon: Calendar },
    { id: 'flagship', label: "Flagship Project", icon: Compass },
    { id: 'rules', label: "Timetable & Rules", icon: Clock },
    { id: 'interview_book', label: "Interview Book", icon: BookOpen },
    { id: 'scorecard', label: "Scorecard & Sources", icon: Award },
    { id: 'integrations', label: "Holy Green Dots", icon: GitCommit },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-color)] bg-[var(--bg-main)]/95 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row */}
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Brand / Title */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 text-white shadow-md">
              <span className="font-mono font-black text-lg tracking-tighter">TB</span>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-400"></span>
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold tracking-tight text-lg text-[var(--text-primary)]">
                  {WINTER_ARC_CONFIG.name}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-500 border border-sky-500/30 font-bold">
                  {WINTER_ARC_CONFIG.subheading}
                </span>
              </div>
              <p className="text-[11px] text-[var(--text-muted)] font-mono hidden sm:block">
                {WINTER_ARC_CONFIG.tagline} • {WINTER_ARC_CONFIG.dates}
              </p>
            </div>
          </div>

          {/* Right: Current Day, Theme Toggle, Reset */}
          <div className="flex items-center gap-3">
            
            {/* Current Day Badge */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] font-mono text-xs shadow-sm">
              <span className="text-[var(--text-muted)]">ACTIVE:</span>
              <span className="font-black text-[var(--text-primary)]">DAY {String(currentDayNum).padStart(2, '0')}</span>
              <span className="text-[var(--text-muted)]">/ 90</span>
              <span className="text-amber-500 font-bold flex items-center gap-0.5">
                <Flame className="w-3.5 h-3.5 fill-amber-500" />
                14d
              </span>
            </div>

            {/* Reset to Default */}
            <button
              onClick={onResetData}
              title="Reset progress to default"
              className="p-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-rose-500 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="relative flex items-center p-1 rounded-full w-14 h-8 bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] transition-colors duration-300 focus:outline-none"
            >
              <div 
                className={`flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r ${
                  isDarkMode 
                    ? 'from-sky-500 to-blue-600 text-white translate-x-6' 
                    : 'from-amber-400 to-amber-500 text-slate-900 translate-x-0'
                } transition-transform duration-300 shadow-md`}
              >
                {isDarkMode ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
              </div>
            </button>

          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-2 border-t border-[var(--border-color)] scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium whitespace-nowrap flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'bg-sky-500 text-white font-bold shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </header>
  );
}
