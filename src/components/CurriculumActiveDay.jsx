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
  Check,
  Zap,
  ArrowRight,
  ShieldCheck
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
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#673de6', '#8c52ff', '#00e599', '#00f0ff']
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
      
      {/* 1. Hostinger-Style Day Header Banner */}
      <div className="hostinger-card p-6 sm:p-7 space-y-5 border-l-4 border-l-[#673de6] relative overflow-hidden">
        
        {/* Background glow element */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#673de6]/10 blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Day Stepper */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSelectedDayNum(Math.max(1, selectedDayNum - 1))}
              disabled={selectedDayNum <= 1}
              className="p-2.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[#673de6] disabled:opacity-30 transition-colors"
              title="Previous Day"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-[var(--text-primary)] m-0">
                  DAY {String(selectedDayNum).padStart(2, '0')}
                </h2>

                {selectedDayNum === currentDayNum && (
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full badge-mint flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e599] animate-pulse" />
                    TODAY LIVE
                  </span>
                )}

                <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                  daySchedule.type === 'COLLEGE DAY'
                    ? 'badge-purple'
                    : daySchedule.type === 'SATURDAY BUILD'
                    ? 'bg-amber-500/10 text-amber-500 border-amber-500/30'
                    : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30'
                }`}>
                  {daySchedule.type}
                </span>

                {isAllDone && (
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full badge-mint flex items-center gap-1">
                    <Check className="w-3 h-3" /> CRUSHED
                  </span>
                )}
              </div>

              <p className="text-xs text-[var(--text-muted)] font-mono flex items-center gap-2 mt-1">
                <Calendar className="w-3.5 h-3.5 text-[#673de6]" />
                <span className="text-[var(--text-primary)] font-semibold">{daySchedule.date}</span>
                <span>•</span>
                <span className="text-[#8c52ff] dark:text-[#a782ff] font-bold">{daySchedule.phase}</span>
              </p>
            </div>

            <button
              onClick={() => setSelectedDayNum(Math.min(90, selectedDayNum + 1))}
              disabled={selectedDayNum >= 90}
              className="p-2.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[#673de6] disabled:opacity-30 transition-colors"
              title="Next Day"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Jump Buttons: Day 1 & Day 2 */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedDayNum(1)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border transition-all ${
                selectedDayNum === 1
                  ? 'btn-hostinger'
                  : 'bg-[var(--bg-surface-elevated)] border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Day 01
            </button>

            <button
              onClick={() => setSelectedDayNum(2)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border transition-all ${
                selectedDayNum === 2
                  ? 'btn-hostinger'
                  : 'bg-[var(--bg-surface-elevated)] border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Day 02 (Today)
            </button>
          </div>

        </div>

        {/* Minimum-Day Rule Selector (Hostinger Pill Style) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-[var(--border-color)]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[var(--text-muted)] font-semibold">
              Execution Tier:
            </span>
            <div className="inline-flex p-1 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs font-mono">
              <button
                onClick={() => setMinimumDayStatus('green')}
                className={`px-3 py-1 rounded-lg font-bold transition-all ${
                  userDayState.status === 'green'
                    ? 'bg-[#00e599] text-slate-950 shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-[#00e599]'
                }`}
                title="Green Day: Full Plan Crushed"
              >
                🟢 Green (Full Plan)
              </button>
              <button
                onClick={() => setMinimumDayStatus('yellow')}
                className={`px-3 py-1 rounded-lg font-bold transition-all ${
                  userDayState.status === 'yellow'
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-amber-400'
                }`}
                title="Yellow Day: 20m DSA + 20m Project + 5m Tracker"
              >
                🟡 Yellow (Minimum)
              </button>
              <button
                onClick={() => setMinimumDayStatus('red')}
                className={`px-3 py-1 rounded-lg font-bold transition-all ${
                  userDayState.status === 'red'
                    ? 'bg-rose-500 text-white shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-rose-500'
                }`}
                title="Red Day: 1 Easy/Re-solve + Sleep (Never 2 in a row!)"
              >
                🔴 Red (Recovery)
              </button>
            </div>
          </div>

          {/* Daily Progress Gauge */}
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-muted)]">
            <span>Tasks Done:</span>
            <span className="font-extrabold text-[var(--text-primary)]">{tasksCompleted}/8</span>
            <div className="w-24 h-2 rounded-full bg-slate-200 dark:bg-[#1c1342] overflow-hidden ml-1">
              <div 
                className="h-full bg-gradient-to-r from-[#673de6] to-[#00e599] rounded-full transition-all duration-500"
                style={{ width: `${percent}%` }}
              />
            </div>
            <span className="font-bold text-[#00e599]">{percent}%</span>
          </div>
        </div>

        {/* Exam Override Switch */}
        <div className={`p-3.5 rounded-xl border transition-all ${
          userDayState.examOverrideActive
            ? 'bg-rose-500/10 border-rose-500/40 text-rose-500'
            : 'bg-amber-500/5 border-amber-500/20 text-amber-600 dark:text-amber-300'
        }`}>
          <div className="flex items-center justify-between gap-3">
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
                  : 'bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-amber-500'
              }`}
            >
              {userDayState.examOverrideActive ? 'Exam Mode Active' : 'Activate Exam Mode'}
            </button>
          </div>
        </div>

      </div>

      {/* 2. The 3 Primary Syllabus Targets from PDF */}
      <div className="space-y-4">
        
        {/* Target 1: DSA Target (C++) */}
        <div className={`hostinger-card p-5 sm:p-6 space-y-3 border-l-4 ${
          userDayState.dsaCompleted ? 'border-l-[#00e599]' : 'border-l-[#673de6]'
        }`}>
          <div className="flex items-center justify-between pb-2 border-b border-[var(--border-color)]">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#8c52ff] dark:text-[#a782ff]">
              <Code2 className="w-4 h-4" />
              <span>1. DSA TARGET (C++)</span>
            </div>

            <a
              href={`https://leetcode.com/problemset/?search=${encodeURIComponent(daySchedule.dsa.title)}`}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono font-bold text-[#673de6] hover:text-[#8c52ff] dark:text-[#a782ff] inline-flex items-center gap-1.5 transition-colors"
            >
              Solve on LeetCode <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="flex items-start gap-3">
            <button
              onClick={() => toggleField('dsaCompleted')}
              className={`mt-1 flex-shrink-0 transition-transform active:scale-90 ${
                userDayState.dsaCompleted ? 'text-[#00e599]' : 'text-[var(--text-muted)] hover:text-[#673de6]'
              }`}
            >
              {userDayState.dsaCompleted ? (
                <CheckCircle2 className="w-6 h-6 fill-[#00e599]/20" />
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
              <p className="text-xs font-mono text-[#8c52ff] dark:text-[#a782ff] font-semibold m-0">
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

        {/* Target 2: Skill / Build Target */}
        <div className={`hostinger-card p-5 sm:p-6 space-y-3 border-l-4 ${
          userDayState.skillCompleted ? 'border-l-[#00e599]' : 'border-l-[#8c52ff]'
        }`}>
          <div className="flex items-center justify-between pb-2 border-b border-[var(--border-color)]">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#8c52ff]">
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
                userDayState.skillCompleted ? 'text-[#00e599]' : 'text-[var(--text-muted)] hover:text-[#8c52ff]'
              }`}
            >
              {userDayState.skillCompleted ? (
                <CheckCircle2 className="w-6 h-6 fill-[#00e599]/20" />
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

        {/* Target 3: Career / Personal Backlog */}
        <div className={`hostinger-card p-5 sm:p-6 space-y-3 border-l-4 ${
          userDayState.careerCompleted ? 'border-l-[#00e599]' : 'border-l-indigo-500'
        }`}>
          <div className="flex items-center justify-between pb-2 border-b border-[var(--border-color)]">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-indigo-400">
              <Briefcase className="w-4 h-4" />
              <span>3. CAREER / PERSONAL BACKLOG</span>
            </div>
            <span className="text-[11px] font-mono text-[var(--text-muted)]">
              Real-Life Execution Task
            </span>
          </div>

          <div className="flex items-start gap-3">
            <button
              onClick={() => toggleField('careerCompleted')}
              className={`mt-1 flex-shrink-0 transition-transform active:scale-90 ${
                userDayState.careerCompleted ? 'text-[#00e599]' : 'text-[var(--text-muted)] hover:text-indigo-400'
              }`}
            >
              {userDayState.careerCompleted ? (
                <CheckCircle2 className="w-6 h-6 fill-[#00e599]/20" />
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

      {/* 3. Skincare & Identity Glow-Up Routine */}
      <div className="hostinger-card p-5 sm:p-6 space-y-4">
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
            className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center gap-2.5 ${
              userDayState.hydrationCompleted 
                ? 'bg-[#00e599]/10 border-[#00e599]/40 text-[var(--text-primary)] font-semibold' 
                : 'bg-[var(--bg-surface-elevated)] border-[var(--border-color)] text-[var(--text-muted)] hover:border-[#673de6]/40'
            }`}
          >
            <button className="text-[#00e599]">
              {userDayState.hydrationCompleted ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
            </button>
            <div className="text-xs font-mono">
              <span className="font-bold block text-sky-400">Hydration Target</span>
              <span>3.5L Water Logged</span>
            </div>
          </div>

          {/* AM Skincare */}
          <div 
            onClick={() => toggleField('amSkincareCompleted')}
            className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center gap-2.5 ${
              userDayState.amSkincareCompleted 
                ? 'bg-[#673de6]/15 border-[#673de6]/40 text-[var(--text-primary)] font-semibold' 
                : 'bg-[var(--bg-surface-elevated)] border-[var(--border-color)] text-[var(--text-muted)] hover:border-[#673de6]/40'
            }`}
          >
            <button className="text-[#8c52ff]">
              {userDayState.amSkincareCompleted ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
            </button>
            <div className="text-xs font-mono">
              <span className="font-bold block text-[#8c52ff]">AM Protocol</span>
              <span>Cleanse + Vit C + SPF 50</span>
            </div>
          </div>

          {/* PM Skincare */}
          <div 
            onClick={() => toggleField('pmSkincareCompleted')}
            className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center gap-2.5 ${
              userDayState.pmSkincareCompleted 
                ? 'bg-[#673de6]/15 border-[#673de6]/40 text-[var(--text-primary)] font-semibold' 
                : 'bg-[var(--bg-surface-elevated)] border-[var(--border-color)] text-[var(--text-muted)] hover:border-[#673de6]/40'
            }`}
          >
            <button className="text-[#8c52ff]">
              {userDayState.pmSkincareCompleted ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
            </button>
            <div className="text-xs font-mono">
              <span className="font-bold block text-[#8c52ff]">PM Protocol</span>
              <span>Double Cleanse + Retinol</span>
            </div>
          </div>

          {/* Morning Workout */}
          <div 
            onClick={() => toggleField('workoutCompleted')}
            className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center gap-2.5 ${
              userDayState.workoutCompleted 
                ? 'bg-amber-500/10 border-amber-500/40 text-[var(--text-primary)] font-semibold' 
                : 'bg-[var(--bg-surface-elevated)] border-[var(--border-color)] text-[var(--text-muted)] hover:border-amber-500/40'
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
            className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center gap-2.5 sm:col-span-2 ${
              userDayState.sleepBefore1030 
                ? 'bg-indigo-500/15 border-indigo-500/40 text-[var(--text-primary)] font-semibold' 
                : 'bg-[var(--bg-surface-elevated)] border-[var(--border-color)] text-[var(--text-muted)] hover:border-indigo-500/40'
            }`}
          >
            <button className="text-indigo-400">
              {userDayState.sleepBefore1030 ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
            </button>
            <div className="text-xs font-mono">
              <span className="font-bold block text-indigo-400">10:30 PM Sleep Target</span>
              <span>Protect consistency • No screens after 9:45 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Proof, Time Spent & Takeaway Log */}
      <div className="hostinger-card p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)]">
          <h4 className="text-sm font-bold text-[var(--text-primary)] m-0">
            Day {selectedDayNum} Proof & Shutdown Log
          </h4>
          <span className="text-xs font-mono text-[#00e599] font-bold">
            Auto-saved to localStorage
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-mono text-[var(--text-muted)] block mb-1">
              Proof (Commit hash, takeaway note, or screenshot reference):
            </label>
            <input
              type="text"
              value={userDayState.proofText || ''}
              onChange={(e) => updateText('proofText', e.target.value)}
              placeholder="e.g. Commit 7a3bf2, LeetCode 1-line takeaway..."
              className="w-full px-3.5 py-2 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-[#673de6]"
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
              placeholder="e.g. 60 mins (DSA: 25m, Project: 35m)"
              className="w-full px-3.5 py-2 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-[#673de6]"
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
            className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-[#673de6] resize-none"
          />
        </div>
      </div>

    </div>
  );
}
