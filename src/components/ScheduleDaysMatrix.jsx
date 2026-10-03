import React, { useState } from 'react';
import { Calendar, Filter, CheckCircle2, Circle, ArrowRight, ExternalLink } from 'lucide-react';
import { SCHEDULE_DAYS, PHASES } from '../data/curriculumData';

export default function ScheduleDaysMatrix({ 
  daysData, 
  selectedDayNum, 
  onSelectDay, 
  currentDayNum 
}) {
  const [selectedPhase, setSelectedPhase] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const filteredDays = SCHEDULE_DAYS.filter(d => {
    if (selectedPhase !== 'all' && d.phase !== selectedPhase) return false;
    if (selectedType !== 'all' && d.type !== selectedType) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      
      {/* Header & Filter Controls */}
      <div className="hostinger-card p-6 sm:p-7 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-[var(--text-primary)] m-0">
              Complete 90-Day Schedule Matrix
            </h2>
            <p className="text-xs text-[var(--text-muted)] font-mono mt-0.5">
              Extracted directly from Parul Singh's Winter Arc Roadmap (Pages 7-36)
            </p>
          </div>

          <span className="text-xs font-mono text-[#00e599] font-bold">
            Showing {filteredDays.length} / 90 Days
          </span>
        </div>

        {/* Phase Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedPhase('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-colors ${
              selectedPhase === 'all'
                ? 'btn-hostinger text-white'
                : 'bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            All Phases
          </button>
          {PHASES.map(p => (
            <button
              key={p.id}
              onClick={() => setSelectedPhase(p.title)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-colors ${
                selectedPhase === p.title
                  ? 'btn-hostinger text-white'
                  : 'bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {p.name}: {p.title}
            </button>
          ))}
        </div>

        {/* Day Type Filter */}
        <div className="flex items-center gap-2 pt-2 border-t border-[var(--border-color)] text-xs font-mono">
          <span className="text-[var(--text-muted)]">Day Type:</span>
          {['all', 'COLLEGE DAY', 'SATURDAY BUILD', 'SUNDAY REVIEW'].map(t => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              className={`px-2.5 py-1 rounded-lg transition-colors ${
                selectedType === t 
                  ? 'bg-emerald-500/20 text-emerald-500 font-bold border border-emerald-500/40' 
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {t === 'all' ? 'All Days' : t}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Day Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDays.map(item => {
          const userDay = daysData[item.day] || {};
          const isDone = userDay.dsaCompleted && userDay.skillCompleted;
          const isSelected = item.day === selectedDayNum;
          const isCurrent = item.day === currentDayNum;

          return (
            <div
              key={item.day}
              onClick={() => onSelectDay(item.day)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between space-y-3 ${
                isSelected
                  ? 'bg-sky-500/10 border-sky-500 ring-2 ring-sky-500/40'
                  : isDone
                  ? 'bg-emerald-500/5 border-emerald-500/30'
                  : isCurrent
                  ? 'bg-sky-500/5 border-sky-500/30'
                  : 'bg-[var(--bg-surface)] border-[var(--border-color)] hover:border-sky-500/40'
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-black text-sm text-[var(--text-primary)]">
                    DAY {String(item.day).padStart(2, '0')}
                  </span>
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    {item.date}
                  </span>
                </div>

                <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                  item.type === 'COLLEGE DAY'
                    ? 'bg-sky-500/10 text-sky-500 border-sky-500/20'
                    : item.type === 'SATURDAY BUILD'
                    ? 'bg-amber-500/10 text-amber-500 border-amber-500/20'
                    : 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20'
                }`}>
                  {item.type}
                </span>
              </div>

              {/* Tasks Summary */}
              <div className="space-y-2 text-xs font-mono">
                {/* DSA */}
                <div className="p-2 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-color)]">
                  <span className="text-[10px] text-sky-500 font-bold block uppercase">DSA Target</span>
                  <span className="font-semibold text-[var(--text-primary)] block truncate">
                    {item.dsa.title}
                  </span>
                  <span className="text-[10px] text-[var(--text-muted)] block truncate">
                    {item.dsa.topic}
                  </span>
                </div>

                {/* Skill / Build */}
                <div className="p-2 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-color)]">
                  <span className="text-[10px] text-emerald-500 font-bold block uppercase">Skill / Build</span>
                  <span className="font-semibold text-[var(--text-primary)] block truncate">
                    {item.skill.title}
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-[var(--border-color)] text-[11px] font-mono">
                <span className={isDone ? 'text-emerald-500 font-bold' : 'text-[var(--text-muted)]'}>
                  {isDone ? '✓ Completed' : 'Pending Action'}
                </span>
                <span className="text-sky-500 flex items-center gap-1 font-semibold">
                  Open Day &rarr;
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
