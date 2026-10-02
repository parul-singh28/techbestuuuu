import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Calendar, 
  Lock, 
  Check, 
  Flame, 
  Layers,
  ChevronRight,
  Filter
} from 'lucide-react';

export default function WinterArcMatrix({ 
  daysData, 
  currentDayNum, 
  onSelectDay 
}) {
  const [phaseFilter, setPhaseFilter] = useState('all'); // 'all', 'phase1', 'phase2', 'phase3', 'completed'

  const allDays = Object.values(daysData);

  // Filter days
  const filteredDays = allDays.filter(day => {
    if (phaseFilter === 'phase1') return day.dayNumber <= 30;
    if (phaseFilter === 'phase2') return day.dayNumber > 30 && day.dayNumber <= 60;
    if (phaseFilter === 'phase3') return day.dayNumber > 60;
    if (phaseFilter === 'completed') {
      const tasks = day.tasks || [];
      return tasks.length > 0 && tasks.every(t => t.completed);
    }
    return true;
  });

  const getDayStatus = (day) => {
    const tasks = day.tasks || [];
    const completedTasks = tasks.filter(t => t.completed).length;
    const totalTasks = tasks.length;
    const isAllDone = totalTasks > 0 && completedTasks === totalTasks;
    const isCurrent = day.dayNumber === currentDayNum;
    const isPast = day.dayNumber < currentDayNum;

    return {
      completedTasks,
      totalTasks,
      percent: totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0,
      isAllDone,
      isCurrent,
      isPast
    };
  };

  const totalCompletedDays = allDays.filter(d => {
    const tasks = d.tasks || [];
    return tasks.length > 0 && tasks.every(t => t.completed);
  }).length;

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border-sky-900/50 glow-navy">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sky-950/80 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-white tracking-tight m-0">
              90-Day Winter Arc Matrix
            </h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-sky-950 text-sky-300 border border-sky-800/60 font-mono">
              {totalCompletedDays} / 90 Days Conquered
            </span>
          </div>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Click any day to inspect tasks, update logs, or view historical routines.
          </p>
        </div>

        {/* Phase Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setPhaseFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              phaseFilter === 'all'
                ? 'bg-sky-500 text-slate-950 font-bold'
                : 'bg-[#081528] text-slate-400 hover:text-white border border-sky-950'
            }`}
          >
            All 90
          </button>
          <button
            onClick={() => setPhaseFilter('phase1')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              phaseFilter === 'phase1'
                ? 'bg-sky-500 text-slate-950 font-bold'
                : 'bg-[#081528] text-slate-400 hover:text-white border border-sky-950'
            }`}
          >
            Phase 1 (1-30)
          </button>
          <button
            onClick={() => setPhaseFilter('phase2')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              phaseFilter === 'phase2'
                ? 'bg-sky-500 text-slate-950 font-bold'
                : 'bg-[#081528] text-slate-400 hover:text-white border border-sky-950'
            }`}
          >
            Phase 2 (31-60)
          </button>
          <button
            onClick={() => setPhaseFilter('phase3')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              phaseFilter === 'phase3'
                ? 'bg-sky-500 text-slate-950 font-bold'
                : 'bg-[#081528] text-slate-400 hover:text-white border border-sky-950'
            }`}
          >
            Phase 3 (61-90)
          </button>
          <button
            onClick={() => setPhaseFilter('completed')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              phaseFilter === 'completed'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'bg-[#081528] text-emerald-400 hover:text-white border border-emerald-950'
            }`}
          >
            Completed ★
          </button>
        </div>
      </div>

      {/* 90-Day Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-2.5">
        {filteredDays.map((day) => {
          const status = getDayStatus(day);
          const isToday = status.isCurrent;

          return (
            <div
              key={day.dayNumber}
              onClick={() => onSelectDay(day.dayNumber)}
              className={`relative flex flex-col justify-between p-3 rounded-xl border cursor-pointer transition-all duration-200 group ${
                isToday
                  ? 'bg-sky-950/80 border-sky-400 text-white ring-2 ring-sky-400/40 glow-ice'
                  : status.isAllDone
                  ? 'bg-emerald-950/30 border-emerald-700/60 text-emerald-100 hover:bg-emerald-900/40'
                  : status.percent > 0
                  ? 'bg-[#0b1b36] border-sky-800/50 text-white hover:border-sky-600'
                  : 'bg-[#060e1c] border-sky-950/80 text-slate-400 hover:border-sky-800 hover:text-white'
              }`}
            >
              {/* Top row: Day # and Status Dot */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold">
                  #{String(day.dayNumber).padStart(2, '0')}
                </span>

                {status.isAllDone ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : isToday ? (
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                ) : status.percent > 0 ? (
                  <span className="text-[10px] font-mono text-sky-400 font-semibold">
                    {status.percent}%
                  </span>
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                )}
              </div>

              {/* Progress Bar / Task Count */}
              <div className="mt-3">
                <div className="w-full h-1 rounded-full bg-slate-900 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      status.isAllDone 
                        ? 'bg-emerald-400' 
                        : isToday 
                        ? 'bg-sky-400' 
                        : 'bg-sky-600'
                    }`}
                    style={{ width: `${status.percent}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 mt-1">
                  <span>{status.completedTasks}/{status.totalTasks}</span>
                  {day.rating > 0 && <span className="text-amber-400">★{day.rating}</span>}
                </div>
              </div>

              {/* Current Day Label Overlay */}
              {isToday && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 px-1.5 py-0.2 rounded-full bg-sky-400 text-slate-950 text-[9px] font-mono font-black uppercase tracking-wider">
                  TODAY
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Grid Legend */}
      <div className="flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 pt-4 border-t border-sky-950/80 gap-3">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-sky-950 border border-sky-400 ring-1 ring-sky-400/40" />
            <span>Current Day</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-emerald-950/40 border border-emerald-600 text-emerald-400 flex items-center justify-center text-[9px]">
              ✓
            </span>
            <span>100% Completed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-[#0b1b36] border border-sky-800" />
            <span>In Progress</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-[#060e1c] border border-sky-950" />
            <span>Pending / Future</span>
          </div>
        </div>

        <span className="text-slate-500">Every day counts toward the 90-day transformation</span>
      </div>
    </div>
  );
}
