import React from 'react';
import { Clock, ShieldCheck, Calendar, Sun, Moon, AlertTriangle, Coffee, Compass } from 'lucide-react';
import { WEEKDAY_TIMETABLE, WEEKEND_SYSTEM } from '../data/curriculumData';

export default function ScheduleRulesView() {
  return (
    <div className="space-y-6">
      
      {/* 1. Non-Negotiables & Rules of Arc */}
      <div className="hostinger-card p-6 sm:p-7 space-y-4">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-sky-500" />
          <h2 className="text-xl font-bold text-[var(--text-primary)] m-0">
            Winter Arc Non-Negotiables
          </h2>
          <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-500 font-bold">
            Page 2 Reference
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] space-y-1">
            <span className="text-xs font-mono font-bold text-sky-500 block">1. DSA Language: C++</span>
            <p className="text-xs font-mono text-[var(--text-secondary)] m-0">
              No language-hopping. Learn STL, pointers, memory model & speed.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] space-y-1">
            <span className="text-xs font-mono font-bold text-emerald-500 block">2. Learn &rarr; Code &rarr; Explain</span>
            <p className="text-xs font-mono text-[var(--text-secondary)] m-0">
              Do not binge tutorials. Solve problem, test complexity, explain aloud.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] space-y-1">
            <span className="text-xs font-mono font-bold text-indigo-500 block">3. Protect Sleep: 10:30 PM</span>
            <p className="text-xs font-mono text-[var(--text-secondary)] m-0">
              Sleep before midnight. Target 10:30 PM. No 2-hour late night panic sessions.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] space-y-1">
            <span className="text-xs font-mono font-bold text-amber-500 block">4. Exam Rule</span>
            <p className="text-xs font-mono text-[var(--text-secondary)] m-0">
              Exam within 24 hours? Academics win; keep only minimum DSA (20 mins).
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] space-y-1">
            <span className="text-xs font-mono font-bold text-purple-500 block">5. Single Flagship Project</span>
            <p className="text-xs font-mono text-[var(--text-secondary)] m-0">
              No new giant project unless it directly improves Culture Smart Traveller.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] space-y-1">
            <span className="text-xs font-mono font-bold text-rose-500 block">6. Apply Before Ready</span>
            <p className="text-xs font-mono text-[var(--text-secondary)] m-0">
              Apply to paid internships early. Don't wait for a "perfect" resume.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Minimum-Day Rule Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-amber-500/10 to-rose-500/10 border border-sky-500/20 space-y-2">
        <h3 className="text-sm font-bold font-mono text-[var(--text-primary)] m-0 flex items-center gap-2">
          <Clock className="w-4 h-4 text-sky-500" />
          The Minimum-Day Rule
        </h3>
        <p className="text-xs font-mono text-[var(--text-secondary)] leading-relaxed m-0">
          <strong className="text-emerald-500">Green Day:</strong> Full plan crushed. <br />
          <strong className="text-amber-500">Yellow Day:</strong> 20 min DSA + 20 min project + 5 min tracker. <br />
          <strong className="text-rose-500">Red Day:</strong> One easy problem re-solve + sleep. <br />
          <em className="text-rose-600 dark:text-rose-400 font-bold">Rule: Never make two red days in a row.</em>
        </p>
      </div>

      {/* 3. Actual Weekday Timetable */}
      <div className="hostinger-card p-6 sm:p-7 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)]">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-sky-500" />
            <h3 className="text-base font-bold text-[var(--text-primary)] m-0">
              Your Actual Weekday Blueprint
            </h3>
          </div>
          <span className="text-xs font-mono text-[var(--text-muted)]">
            Built around college + 2 tuitions
          </span>
        </div>

        <div className="space-y-2 font-mono text-xs">
          {WEEKDAY_TIMETABLE.map((item, idx) => (
            <div 
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] gap-2"
            >
              <div className="flex items-center gap-3">
                <span className="font-bold text-sky-500 w-32 flex-shrink-0">
                  {item.time}
                </span>
                <span className="text-[var(--text-primary)] font-medium">
                  {item.task}
                </span>
              </div>
              <span className="text-[11px] text-[var(--text-muted)] italic">
                {item.rule}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Weekend System */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Saturday Build Day */}
        <div className="hostinger-card p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)]">
            <div className="flex items-center gap-2">
              <Sun className="w-5 h-5 text-amber-500" />
              <h3 className="text-base font-bold text-[var(--text-primary)] m-0">
                Saturday = BUILD DAY
              </h3>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 font-bold">
              High Deep Work
            </span>
          </div>

          <div className="space-y-2 font-mono text-xs">
            {WEEKEND_SYSTEM.saturday.tasks.map((t, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)]">
                <span className="text-[var(--text-primary)] font-medium">{t.name}</span>
                <span className="text-amber-500 font-bold">{t.duration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sunday Reset & Career Day */}
        <div className="hostinger-card p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)]">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-indigo-500" />
              <h3 className="text-base font-bold text-[var(--text-primary)] m-0">
                Sunday = RESET + CAREER DAY
              </h3>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 font-bold">
              Career & Review
            </span>
          </div>

          <div className="space-y-2 font-mono text-xs">
            {WEEKEND_SYSTEM.sunday.tasks.map((t, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)]">
                <span className="text-[var(--text-primary)] font-medium">{t.name}</span>
                <span className="text-indigo-500 font-bold">{t.duration}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
