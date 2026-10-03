import React, { useState } from 'react';
import { 
  Sun, 
  Moon, 
  Calendar, 
  Flame, 
  RotateCcw, 
  BookOpen, 
  Compass, 
  Clock, 
  Award, 
  GitCommit, 
  ChevronDown, 
  Check, 
  Sparkles,
  Zap,
  Edit2
} from 'lucide-react';
import { WINTER_ARC_CONFIG } from '../data/curriculumData';

export const NAME_SUGGESTIONS = [
  { id: 'arcforge', name: 'ArcForge.dev', tag: 'Hostinger Tech Vibe • Top Pick' },
  { id: 'devarc', name: 'DevArc 90', tag: 'Clean Engineering Protocol' },
  { id: 'frostbyte', name: 'FrostByte 90', tag: 'Winter Arc + Hot Code' },
  { id: 'ascend', name: 'Ascend90', tag: '90-Day Peak Transformation' },
  { id: 'lockedin', name: 'LockedIn.dev', tag: 'Stealth Execution Creed' },
  { id: 'codeglow', name: 'CodeGlow.io', tag: 'DSA Mastery + Skincare Glow' },
  { id: 'techbestuuuu', name: 'TechBestuuuu', tag: 'Original Monogram' }
];

export default function Header({ 
  isDarkMode, 
  onToggleTheme, 
  currentDayNum, 
  activeTab, 
  setActiveTab, 
  appName, 
  setAppName, 
  onResetData 
}) {
  const [showNameMenu, setShowNameMenu] = useState(false);
  const [customInput, setCustomInput] = useState('');
  const [isEditingCustom, setIsEditingCustom] = useState(false);

  const tabs = [
    { id: 'today', label: "Day Execution", icon: Zap },
    { id: 'schedule', label: "90-Day Roadmap", icon: Calendar },
    { id: 'flagship', label: "Culture Smart Traveller", icon: Compass },
    { id: 'rules', label: "Timetable & Rules", icon: Clock },
    { id: 'interview_book', label: "Interview Book", icon: BookOpen },
    { id: 'scorecard', label: "Scorecard & Sources", icon: Award },
    { id: 'integrations', label: "Holy Green Dots", icon: GitCommit },
  ];

  const handleSelectName = (name) => {
    setAppName(name);
    setShowNameMenu(false);
    setIsEditingCustom(false);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (customInput.trim()) {
      setAppName(customInput.trim());
      setIsEditingCustom(false);
      setShowNameMenu(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border-color)] bg-[var(--bg-main)]/95 backdrop-blur-md transition-colors duration-300">
      
      {/* Hostinger-Style Live Winter Arc Alert Bar */}
      <div className="bg-gradient-to-r from-[#5025d1] via-[#673de6] to-[#8c52ff] text-white text-[11px] font-mono py-1 px-4 text-center font-bold tracking-wide flex items-center justify-center gap-2 shadow-inner">
        <span className="w-2 h-2 rounded-full bg-[#00e599] animate-pulse" />
        <span>⚡ WINTER ARC HAS OFFICIALLY BEGUN!</span>
        <span className="hidden sm:inline opacity-80">|</span>
        <span className="hidden sm:inline">DAY 02 IN SESSION</span>
        <span className="hidden sm:inline opacity-80">|</span>
        <span className="text-[#00e599] font-extrabold uppercase">88 DAYS REMAINING • NO ZERO IDENTITY DAYS</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header Row */}
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Hostinger-Style Logo + Brand Name Dropdown */}
          <div className="flex items-center gap-3 relative">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-[#673de6] to-[#8c52ff] text-white shadow-[0_4px_16px_rgba(103,61,230,0.4)]">
              <span className="font-mono font-black text-lg tracking-tighter">AF</span>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e599] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00e599]"></span>
              </span>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setShowNameMenu(!showNameMenu)}
                  className="flex items-center gap-1.5 text-base sm:text-lg font-black tracking-tight text-[var(--text-primary)] hover:text-[#673de6] transition-colors font-mono focus:outline-none"
                  title="Click to change website name"
                >
                  <span>{appName}</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </button>

                <span className="text-[9px] uppercase font-mono tracking-widest px-2 py-0.5 rounded-full badge-purple font-bold">
                  Hostinger Edition
                </span>
              </div>

              <p className="text-[11px] text-[var(--text-muted)] font-mono hidden sm:block">
                Parul Singh • 3rd-Year CSE • Build. Solve. Ship.
              </p>
            </div>

            {/* Brand Name Selection Dropdown */}
            {showNameMenu && (
              <div 
                className="absolute top-14 left-0 w-72 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-2xl p-3 space-y-2 z-50 animate-in fade-in zoom-in-95 duration-150"
              >
                <div className="text-[10px] uppercase font-mono font-bold text-[var(--text-muted)] px-2 pb-1 border-b border-[var(--border-color)]">
                  Select Website Name:
                </div>

                <div className="space-y-1 max-h-60 overflow-y-auto scrollbar-thin">
                  {NAME_SUGGESTIONS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSelectName(item.name)}
                      className={`w-full text-left p-2 rounded-xl text-xs font-mono flex items-center justify-between transition-colors ${
                        appName === item.name
                          ? 'bg-[#673de6]/15 text-[#673de6] dark:text-[#8c52ff] font-bold'
                          : 'text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)]'
                      }`}
                    >
                      <div>
                        <span className="block font-semibold">{item.name}</span>
                        <span className="text-[10px] text-[var(--text-muted)] block">{item.tag}</span>
                      </div>
                      {appName === item.name && <Check className="w-4 h-4 text-[#673de6]" />}
                    </button>
                  ))}
                </div>

                {/* Custom Name Input */}
                <div className="pt-2 border-t border-[var(--border-color)]">
                  {isEditingCustom ? (
                    <form onSubmit={handleCustomSubmit} className="flex gap-1.5">
                      <input
                        type="text"
                        placeholder="Type custom name..."
                        value={customInput}
                        onChange={(e) => setCustomInput(e.target.value)}
                        className="flex-1 px-2.5 py-1.5 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#673de6]"
                        autoFocus
                      />
                      <button
                        type="submit"
                        className="px-2.5 py-1.5 rounded-lg bg-[#673de6] text-white text-xs font-bold font-mono"
                      >
                        Set
                      </button>
                    </form>
                  ) : (
                    <button
                      onClick={() => setIsEditingCustom(true)}
                      className="w-full text-center py-1.5 rounded-lg text-xs font-mono text-sky-500 hover:bg-sky-500/10 flex items-center justify-center gap-1"
                    >
                      <Edit2 className="w-3 h-3" />
                      Type Custom Name
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right: Hostinger Actions */}
          <div className="flex items-center gap-2.5">
            
            {/* Live Day Badge */}
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] font-mono text-xs">
              <span className="text-[var(--text-muted)]">TODAY:</span>
              <span className="font-extrabold text-[var(--text-primary)]">DAY 02</span>
              <span className="text-[var(--text-muted)]">/ 90</span>
              <span className="text-[#00e599] font-bold flex items-center gap-0.5">
                <Flame className="w-3.5 h-3.5 fill-[#00e599]" />
                Active
              </span>
            </div>

            {/* Reset Data */}
            <button
              onClick={onResetData}
              title="Reset progress to fresh Day 1 start"
              className="p-2 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-rose-500 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Dark / Light Mode Switch */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="relative flex items-center p-1 rounded-full w-14 h-8 bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] transition-colors duration-300 focus:outline-none"
            >
              <div 
                className={`flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r ${
                  isDarkMode 
                    ? 'from-[#673de6] to-[#8c52ff] text-white translate-x-6' 
                    : 'from-amber-400 to-amber-500 text-slate-900 translate-x-0'
                } transition-transform duration-300 shadow-md`}
              >
                {isDarkMode ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
              </div>
            </button>

          </div>
        </div>

        {/* Hostinger-Style Navigation Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-2.5 border-t border-[var(--border-color)] scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium whitespace-nowrap flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-[#673de6] to-[#8c52ff] text-white font-bold shadow-[0_2px_12px_rgba(103,61,230,0.4)]'
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
