import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  CheckCircle2, 
  Circle, 
  AlertTriangle, 
  Sparkles, 
  Code2, 
  Briefcase, 
  Droplet, 
  Moon, 
  Sun, 
  Clock, 
  ExternalLink,
  Flame,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SCHEDULE_DAYS } from '../data/curriculumData';

export default function CurriculumActiveDay({ 
  selectedDayNum, 
  setSelectedDayNum, 
  currentDayNum, 
  daysData, 
  onUpdateDayState,
  isDarkMode 
}) {
  const daySchedule = SCHEDULE_DAYS.find(d => d.day === selectedDayNum) || SCHEDULE_DAYS[0];
  const userDayState = daysData[selectedDayNum] || {
    status: 'green',
    examOverrideActive: false,
    proofText: '',
    timeSpent: '',
    dsaCompleted: false,
    skillCompleted: false,
    careerCompleted: false,
    hydrationCompleted: false,
    amSkincareCompleted: false,
    pmSkincareCompleted: false,
    workoutCompleted: false,
    sleepBefore1030: false,
    notes: ''
  };

  const tasksTotal = 9;
  const tasksCompleted = [
    userDayState.dsaCompleted,
    userDayState.skillCompleted,
    userDayState.careerCompleted,
    userDayState.hydrationCompleted,
    userDayState.amSkincareCompleted,
    userDayState.pmSkincareCompleted,
    userDayState.workoutCompleted,
    userDayState.sleepBefore1030
  ].filter(Boolean).length;

  const percent = Math.round((tasksCompleted / 8) * 100);
  const isAllDone = tasksCompleted === 8;

  const toggleField = (field) => {
    const nextVal = !userDayState[field];
    if (nextVal && tasksCompleted + 1 === 8) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#10b981', '#a855f7', '#f59e0b']
      });
    }
    onUpdateDayState(selectedDayNum, {
      ...userDayState,
      [field]: nextVal
    });
  };

  const updateText = (field, val) => {
    onUpdateDayState(selectedDayNum, {
      ...userDayState,
      [field]: val
    });
  };

  const setMinimumDayStatus = (status) => {
    onUpdateDayState(selectedDayNum, {
      ...userDayState,
      status
    });
  };

  const toggleExamOverride = () => {
    onUpdateDayState(selectedDayNum, {
      ...userDayState,
      examOverrideActive: !userDayState.examOverrideActive
    });
  };

  return (
    <div className="space-y-6">
      
      {/* 1. Day Stepper & Status Banner */}
      <div className="theme-panel rounded-2xl p-5 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Day Stepper */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSelectedDayNum(Math.max(1, selectedDayNum - 1))}
              disabled={selectedDayNum <= 1}
              className="p-2 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] disabled:opacity-30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-black font-mono tracking-tight text-[var(--text-primary)] m-0">
                  DAY {String(selectedDayNum).padStart(2, '0')}
                </h2>
                {selectedDayNum === currentDayNum && (
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-500 border border-sky-500/30">
                    TODAY
                  </span>
                )}
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                  daySchedule.type === 'COLLEGE DAY'
                    ? 'bg-sky-500/10 text-sky-500 border-sky-500/20'
                    : daySchedule.type === 'SATURDAY BUILD'
                    ? 'bg-amber-500/10 text-amber-500 border-amber-500/20'
                    : 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20'
                }`}>
                  {daySchedule.type}
                </span>
              </div>
              <p className="text-xs text-[var(--text-muted)] font-mono flex items-center gap-2 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-sky-500" />
                <span>{daySchedule.date}</span>
                <span>•</span>
                <span className="text-sky-500 font-semibold">{daySchedule.phase}</span>
              </p>
            </div>

            <button
              onClick={() => setSelectedDayNum(Math.min(90, selectedDayNum + 1))}
              disabled={selectedDayNum >= 90}
              className="p-2 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] disabled:opacity-30 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right: Minimum-Day Rule Selector & Progress */}
          <div className="flex items-center gap-3">
            {selectedDayNum !== currentDayNum && (
              <button
                onClick={() => setSelectedDayNum(currentDayNum)}
                className="px-3 py-1.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-500 border border-sky-500/30 text-xs font-mono font-bold transition-colors"
              >
                Jump to Today (Day {currentDayNum})
              </button>
            )}

            {/* Minimum-Day Rule Pills */}
            <div className="flex items-center p-1 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[10px] font-mono font-bold">
              <button
                onClick={() => setMinimumDayStatus('green')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  userDayState.status === 'green'
                    ? 'bg-emerald-500 text-white shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-emerald-500'
                }`}
                title="Full Plan"
              >
                🟢 Green Day
              </button>
              <button
                onClick={() => setMinimumDayStatus('yellow')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  userDayState.status === 'yellow'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-amber-500'
                }`}
                title="20m DSA + 20m Project + 5m Tracker"
              >
                🟡 Yellow Day
              </button>
              <button
                onClick={() => setMinimumDayStatus('red')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  userDayState.status === 'red'
                    ? 'bg-rose-500 text-white shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-rose-500'
                }`}
                title="1 Easy / Re-solve + Sleep"
              >
                🔴 Red Day
              </button>
            </div>

            {/* Completion Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] font-mono text-xs">
              <span className="font-bold text-[var(--text-primary)]">{tasksCompleted}/8</span>
              <span className="text-sky-500 font-bold">{percent}%</span>
            </div>
          </div>

        </div>

        {/* 2. Exam Override Banner (from PDF) */}
        <div className={`p-3.5 rounded-xl border transition-all ${
          userDayState.examOverrideActive
            ? 'bg-rose-500/10 border-rose-500/40 text-rose-600 dark:text-rose-400'
            : 'bg-amber-500/5 border-amber-500/20 text-amber-700 dark:text-amber-300'
        }`}>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-mono">
              <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span>
                <strong>EXAM OVERRIDE:</strong> use the 60-minute main block for your actual sessional syllabus; do only the minimum DSA + admin.
              </span>
            </div>
            <button
              onClick={toggleExamOverride}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-colors whitespace-nowrap ${
                userDayState.examOverrideActive
                  ? 'bg-rose-500 text-white'
                  : 'bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)]'
              }`}
            >
              {userDayState.examOverrideActive ? 'Exam Mode Active' : 'Activate Exam Mode'}
            </button>
          </div>
        </div>
      </div>

      {/* 3. The 3 Primary PDF Targets for Today */}
      <div className="space-y-4">
        
        {/* Task 1: DSA Question Target */}
        <div className={`theme-panel rounded-2xl p-5 sm:p-6 space-y-3 border-l-4 ${
          userDayState.dsaCompleted ? 'border-l-emerald-500' : 'border-l-sky-500'
        }`}>
          <div className="flex items-center justify-between pb-2 border-b border-[var(--border-color)]">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-sky-500">
              <Code2 className="w-4 h-4" />
              <span>1. DSA TARGET (C++)</span>
            </div>
            <a
              href={`https://leetcode.com/problemset/?search=${encodeURIComponent(daySchedule.dsa.title)}`}
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-mono text-sky-500 hover:underline inline-flex items-center gap-1"
            >
              Solve on LeetCode <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="flex items-start gap-3">
            <button
              onClick={() => toggleField('dsaCompleted')}
              className={`mt-1 flex-shrink-0 transition-transform active:scale-90 ${
                userDayState.dsaCompleted ? 'text-emerald-500' : 'text-[var(--text-muted)] hover:text-sky-500'
              }`}
            >
              {userDayState.dsaCompleted ? (
                <CheckCircle2 className="w-6 h-6 fill-emerald-500/20" />
              ) : (
                <Circle className="w-6 h-6" />
              )}
            </button>

            <div className="space-y-1.5 flex-1 min-w-0">
              <h3 className={`text-base font-bold m-0 text-[var(--text-primary)] ${
                userDayState.dsaCompleted ? 'line-through opacity-70' : ''
              }`}>
                {daySchedule.dsa.title}
              </h3>
              <p className="text-xs font-mono text-sky-600 dark:text-sky-400 font-semibold m-0">
                Topic: {daySchedule.dsa.topic}
              </p>
              <p className="text-[11px] font-mono text-[var(--text-muted)] m-0">
                Source: {daySchedule.dsa.source}
              </p>
              <div className="p-2.5 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[11px] font-mono text-[var(--text-secondary)] italic">
                Rule: attempt 20-25 min &rarr; brute force &rarr; optimize &rarr; code in C++ &rarr; complexity &rarr; write 1-line takeaway.
              </div>
            </div>
          </div>
        </div>

        {/* Task 2: Skill / Build Target */}
        <div className={`theme-panel rounded-2xl p-5 sm:p-6 space-y-3 border-l-4 ${
          userDayState.skillCompleted ? 'border-l-emerald-500' : 'border-l-emerald-400'
        }`}>
          <div className="flex items-center justify-between pb-2 border-b border-[var(--border-color)]">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-500">
              <Sparkles className="w-4 h-4" />
              <span>2. SKILL / BUILD TARGET</span>
            </div>
            <span className="text-[11px] font-mono text-[var(--text-muted)]">
              Source: {daySchedule.skill.source}
            </span>
          </div>

          <div className="flex items-start gap-3">
            <button
              onClick={() => toggleField('skillCompleted')}
              className={`mt-1 flex-shrink-0 transition-transform active:scale-90 ${
                userDayState.skillCompleted ? 'text-emerald-500' : 'text-[var(--text-muted)] hover:text-emerald-500'
              }`}
            >
              {userDayState.skillCompleted ? (
                <CheckCircle2 className="w-6 h-6 fill-emerald-500/20" />
              ) : (
                <Circle className="w-6 h-6" />
              )}
            </button>

            <div className="space-y-1 flex-1 min-w-0">
              <h3 className={`text-base font-bold m-0 text-[var(--text-primary)] ${
                userDayState.skillCompleted ? 'line-through opacity-70' : ''
              }`}>
                {daySchedule.skill.title}
              </h3>
              <p className="text-xs font-mono text-[var(--text-secondary)] m-0 leading-relaxed">
                {daySchedule.skill.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Task 3: Career / Life / Personal Backlog */}
        <div className={`theme-panel rounded-2xl p-5 sm:p-6 space-y-3 border-l-4 ${
          userDayState.careerCompleted ? 'border-l-emerald-500' : 'border-l-purple-500'
        }`}>
          <div className="flex items-center justify-between pb-2 border-b border-[var(--border-color)]">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-500">
              <Briefcase className="w-4 h-4" />
              <span>3. CAREER / LIFE / PERSONAL BACKLOG</span>
            </div>
            <span className="text-[11px] font-mono text-[var(--text-muted)]">
              Execution Sprint
            </span>
          </div>

          <div className="flex items-start gap-3">
            <button
              onClick={() => toggleField('careerCompleted')}
              className={`mt-1 flex-shrink-0 transition-transform active:scale-90 ${
                userDayState.careerCompleted ? 'text-emerald-500' : 'text-[var(--text-muted)] hover:text-purple-500'
              }`}
            >
              {userDayState.careerCompleted ? (
                <CheckCircle2 className="w-6 h-6 fill-emerald-500/20" />
              ) : (
                <Circle className="w-6 h-6" />
              )}
            </button>

            <div className="space-y-1 flex-1 min-w-0">
              <h3 className={`text-base font-bold m-0 text-[var(--text-primary)] ${
                userDayState.careerCompleted ? 'line-through opacity-70' : ''
              }`}>
                {daySchedule.career.title}
              </h3>
              <p className="text-xs font-mono text-[var(--text-secondary)] m-0 leading-relaxed">
                {daySchedule.career.desc}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* 4. Skincare & Daily Glow-Up Protocol */}
      <div className="theme-panel rounded-2xl p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)]">
          <div className="flex items-center gap-2">
            <span className="text-xl">💆‍♂️</span>
            <h3 className="text-base font-bold text-[var(--text-primary)] m-0">
              Skincare & Identity Glow-Up Routine
            </h3>
          </div>
          <span className="text-xs font-mono text-[var(--text-muted)]">
            "The glow-up comes from becoming more capable every day"
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Hydration */}
          <div 
            onClick={() => toggleField('hydrationCompleted')}
            className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center gap-2.5 ${
              userDayState.hydrationCompleted 
                ? 'bg-sky-500/10 border-sky-500/40 text-[var(--text-primary)] font-semibold' 
                : 'bg-[var(--bg-surface-elevated)] border-[var(--border-color)] text-[var(--text-muted)] hover:border-sky-500/30'
            }`}
          >
            <button className="text-sky-500">
              {userDayState.hydrationCompleted ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
            </button>
            <div className="text-xs font-mono">
              <span className="font-bold block text-sky-500">Hydration Target</span>
              <span>3.5L Water Logged</span>
            </div>
          </div>

          {/* AM Skincare */}
          <div 
            onClick={() => toggleField('amSkincareCompleted')}
            className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center gap-2.5 ${
              userDayState.amSkincareCompleted 
                ? 'bg-purple-500/10 border-purple-500/40 text-[var(--text-primary)] font-semibold' 
                : 'bg-[var(--bg-surface-elevated)] border-[var(--border-color)] text-[var(--text-muted)] hover:border-purple-500/30'
            }`}
          >
            <button className="text-purple-500">
              {userDayState.amSkincareCompleted ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
            </button>
            <div className="text-xs font-mono">
              <span className="font-bold block text-purple-500">AM Protocol</span>
              <span>Cleanse + Vit C + SPF 50</span>
            </div>
          </div>

          {/* PM Skincare */}
          <div 
            onClick={() => toggleField('pmSkincareCompleted')}
            className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center gap-2.5 ${
              userDayState.pmSkincareCompleted 
                ? 'bg-purple-500/10 border-purple-500/40 text-[var(--text-primary)] font-semibold' 
                : 'bg-[var(--bg-surface-elevated)] border-[var(--border-color)] text-[var(--text-muted)] hover:border-purple-500/30'
            }`}
          >
            <button className="text-purple-500">
              {userDayState.pmSkincareCompleted ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
            </button>
            <div className="text-xs font-mono">
              <span className="font-bold block text-purple-500">PM Protocol</span>
              <span>Double Cleanse + Retinol</span>
            </div>
          </div>

          {/* Morning Workout */}
          <div 
            onClick={() => toggleField('workoutCompleted')}
            className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center gap-2.5 ${
              userDayState.workoutCompleted 
                ? 'bg-amber-500/10 border-amber-500/40 text-[var(--text-primary)] font-semibold' 
                : 'bg-[var(--bg-surface-elevated)] border-[var(--border-color)] text-[var(--text-muted)] hover:border-amber-500/30'
            }`}
          >
            <button className="text-amber-500">
              {userDayState.workoutCompleted ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
            </button>
            <div className="text-xs font-mono">
              <span className="font-bold block text-amber-500">6:05 AM Workout</span>
              <span>20-25m Mobility / Strength</span>
            </div>
          </div>

          {/* Sleep Target */}
          <div 
            onClick={() => toggleField('sleepBefore1030')}
            className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center gap-2.5 sm:col-span-2 ${
              userDayState.sleepBefore1030 
                ? 'bg-indigo-500/10 border-indigo-500/40 text-[var(--text-primary)] font-semibold' 
                : 'bg-[var(--bg-surface-elevated)] border-[var(--border-color)] text-[var(--text-muted)] hover:border-indigo-500/30'
            }`}
          >
            <button className="text-indigo-500">
              {userDayState.sleepBefore1030 ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
            </button>
            <div className="text-xs font-mono">
              <span className="font-bold block text-indigo-500">10:30 PM Sleep Target</span>
              <span>Screens off by 9:45 PM • Protect consistency</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Proof, Time Spent & Takeaway Log (from bottom of page in PDF) */}
      <div className="theme-panel rounded-2xl p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)]">
          <h4 className="text-sm font-bold text-[var(--text-primary)] m-0">
            Day {selectedDayNum} Proof & Shutdown Log
          </h4>
          <span className="text-xs font-mono text-[var(--text-muted)]">
            Auto-saved to localStorage
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-mono text-[var(--text-muted)] block mb-1">
              Proof (Takeaway, Commit link, or demo reference):
            </label>
            <input
              type="text"
              value={userDayState.proofText || ''}
              onChange={(e) => updateText('proofText', e.target.value)}
              placeholder="e.g. Commit 7a3bf2, LeetCode 1-line takeaway..."
              className="w-full px-3.5 py-2 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-sky-500"
            />
          </div>

          <div>
            <label className="text-xs font-mono text-[var(--text-muted)] block mb-1">
              Total Time Spent:
            </label>
            <input
              type="text"
              value={userDayState.timeSpent || ''}
              onChange={(e) => updateText('timeSpent', e.target.value)}
              placeholder="e.g. 75 mins (DSA: 30m, Project: 45m)"
              className="w-full px-3.5 py-2 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-sky-500"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-mono text-[var(--text-muted)] block mb-1">
            Personal Reflection & 1-Line DSA Takeaway:
          </label>
          <textarea
            rows="3"
            value={userDayState.notes || ''}
            onChange={(e) => updateText('notes', e.target.value)}
            placeholder="Write your 1-line DSA takeaway, sessional exam prep notes, or code breakthrough..."
            className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-sky-500 resize-none"
          />
        </div>
      </div>

    </div>
  );
}
