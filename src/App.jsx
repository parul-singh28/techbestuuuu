import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SidebarHero from './components/SidebarHero';
import CurriculumActiveDay from './components/CurriculumActiveDay';
import ScheduleDaysMatrix from './components/ScheduleDaysMatrix';
import FlagshipProjectView from './components/FlagshipProjectView';
import ScheduleRulesView from './components/ScheduleRulesView';
import InterviewBook from './components/InterviewBook';
import ScorecardView from './components/ScorecardView';
import GitHubContributionGrid from './components/GitHubContributionGrid';
import LeetCodeProgressMatrix from './components/LeetCodeProgressMatrix';

import { build90DaysInitialState, WINTER_ARC_CONFIG } from './data/curriculumData';

const STORAGE_KEYS = {
  DAYS_CURRICULUM: 'techbestuuuu_curriculum_days_v3',
  THEME: 'techbestuuuu_theme_v3',
  ACTIVE_TAB: 'techbestuuuu_active_tab_v3',
  SELECTED_DAY: 'techbestuuuu_selected_day_v3'
};

export default function App() {
  // 1. Theme State
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME);
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem(STORAGE_KEYS.THEME, 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem(STORAGE_KEYS.THEME, 'light');
    }
  }, [isDarkMode]);

  // 2. Navigation Tab State
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'today';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, activeTab);
  }, [activeTab]);

  // 3. Brand / App Name State (with instant switcher)
  const [appName, setAppName] = useState(() => {
    return localStorage.getItem('techbestuuuu_app_name') || 'ArcForge.dev';
  });

  useEffect(() => {
    localStorage.setItem('techbestuuuu_app_name', appName);
  }, [appName]);

  // 4. Current Day and Selected Day (Winter arc started Oct 02 = Day 1, Oct 03 = Day 2)
  const [currentDayNum] = useState(2); 
  const [selectedDayNum, setSelectedDayNum] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SELECTED_DAY);
    return saved ? parseInt(saved, 10) : 2;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SELECTED_DAY, selectedDayNum.toString());
  }, [selectedDayNum]);

  // 5. Curriculum Days State
  const [daysData, setDaysData] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.DAYS_CURRICULUM);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse curriculum state:', e);
      }
    }
    return build90DaysInitialState();
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.DAYS_CURRICULUM, JSON.stringify(daysData));
  }, [daysData]);

  // Handler for Day Mutations
  const handleUpdateDayState = (dayNum, updatedState) => {
    setDaysData(prev => ({
      ...prev,
      [dayNum]: updatedState
    }));
  };

  // Reset to Factory Default
  const handleResetData = () => {
    if (window.confirm('Reset your 90-day roadmap state to default Day 1 fresh start?')) {
      const initial = build90DaysInitialState();
      setDaysData(initial);
      setSelectedDayNum(2);
      localStorage.setItem(STORAGE_KEYS.DAYS_CURRICULUM, JSON.stringify(initial));
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-300 flex flex-col font-sans">
      
      {/* 1. Top Global Navigation Header with Hostinger Vibe */}
      <Header
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        currentDayNum={currentDayNum}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        appName={appName}
        setAppName={setAppName}
        onResetData={handleResetData}
      />

      {/* 2. Main Workspace Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        
        {/* Split Container: Left Sidebar Profile & Context + Right Active Screen */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          
          {/* Left Sidebar Hero (Always Available) */}
          <SidebarHero
            currentDayNum={currentDayNum}
            daysData={daysData}
            selectedDayNum={selectedDayNum}
            onSelectDay={(d) => {
              setSelectedDayNum(d);
              setActiveTab('today');
            }}
            streak={14}
          />

          {/* Right Main Container Switching by Tab */}
          <div className="flex-1 w-full min-w-0 space-y-8">
            
            {/* Tab 1: Today's Arc Execution */}
            {activeTab === 'today' && (
              <div className="space-y-8">
                <CurriculumActiveDay
                  selectedDayNum={selectedDayNum}
                  setSelectedDayNum={setSelectedDayNum}
                  currentDayNum={currentDayNum}
                  daysData={daysData}
                  onUpdateDayState={handleUpdateDayState}
                  isDarkMode={isDarkMode}
                />

                {/* Inline Contribution Matrices Teaser */}
                <div className="space-y-4 pt-4 border-t border-[var(--border-color)]">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-[var(--text-primary)] m-0">
                      Live Developer Activity (CORS-Proof Simulators)
                    </h3>
                    <button
                      onClick={() => setActiveTab('integrations')}
                      className="text-xs font-mono text-sky-500 hover:underline"
                    >
                      View Full Heatmaps &rarr;
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <GitHubContributionGrid isDarkMode={isDarkMode} />
                    <LeetCodeProgressMatrix isDarkMode={isDarkMode} />
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Complete 90-Day Schedule Matrix */}
            {activeTab === 'schedule' && (
              <ScheduleDaysMatrix
                daysData={daysData}
                selectedDayNum={selectedDayNum}
                onSelectDay={(dayNum) => {
                  setSelectedDayNum(dayNum);
                  setActiveTab('today');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                currentDayNum={currentDayNum}
              />
            )}

            {/* Tab 3: Flagship Project & Interview Case Studies */}
            {activeTab === 'flagship' && (
              <FlagshipProjectView />
            )}

            {/* Tab 4: Weekday Timetable & Arc Rules */}
            {activeTab === 'rules' && (
              <ScheduleRulesView />
            )}

            {/* Tab 5: Interview Book (Page 39) */}
            {activeTab === 'interview_book' && (
              <InterviewBook />
            )}

            {/* Tab 6: 90-Day Scorecard & Source Library */}
            {activeTab === 'scorecard' && (
              <ScorecardView />
            )}

            {/* Tab 7: Holy Green Dots Simulators */}
            {activeTab === 'integrations' && (
              <div className="space-y-6">
                <div className="theme-panel rounded-2xl p-6 border-emerald-500/20 space-y-2">
                  <h2 className="text-xl font-bold text-[var(--text-primary)] m-0">
                    The Holy Green Dots & DSA Heatmaps
                  </h2>
                  <p className="text-xs font-mono text-[var(--text-secondary)]">
                    Native CORS-proof visual matrix simulators tracking daily commits for <strong>@{WINTER_ARC_CONFIG.githubUsername}</strong> and submissions for <strong>@{WINTER_ARC_CONFIG.leetcodeUsername}</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <GitHubContributionGrid isDarkMode={isDarkMode} />
                  <LeetCodeProgressMatrix isDarkMode={isDarkMode} />
                </div>
              </div>
            )}

          </div>

        </div>

      </main>

      {/* Footer with Hostinger Style */}
      <footer className="border-t border-[var(--border-color)] bg-[var(--bg-surface)] py-6 text-center text-xs font-mono text-[var(--text-muted)] mt-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-black text-[#8c52ff] text-sm">{appName}</span>
            <span>•</span>
            <span className="font-semibold text-[var(--text-primary)]">{WINTER_ARC_CONFIG.name}</span>
            <span>•</span>
            <span className="text-[#00e599] font-bold">Winter Arc Protocol</span>
          </div>

          <div className="flex items-center gap-3">
            <span>{WINTER_ARC_CONFIG.dates}</span>
            <span>•</span>
            <a href={WINTER_ARC_CONFIG.githubUrl} target="_blank" rel="noreferrer" className="hover:text-emerald-500">GitHub</a>
            <span>•</span>
            <a href={WINTER_ARC_CONFIG.leetcodeUrl} target="_blank" rel="noreferrer" className="hover:text-amber-500">LeetCode</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
