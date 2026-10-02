import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  CheckCircle2, 
  Circle, 
  Plus, 
  Trash2, 
  Check, 
  Flame, 
  PenLine, 
  Sparkles, 
  Layers, 
  Grid 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CATEGORIES } from '../data/initialData';

export default function ActiveDayWorkspace({ 
  selectedDayNum, 
  setSelectedDayNum, 
  currentDayNum, 
  daysData, 
  onToggleTask, 
  onAddTask, 
  onDeleteTask, 
  onUpdateNotes,
  isDarkMode 
}) {
  const [showMatrixGrid, setShowMatrixGrid] = useState(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskCategory, setNewTaskCategory] = useState('skincare');

  const currentDay = daysData[selectedDayNum] || { tasks: [], notes: '', date: '' };
  const tasks = currentDay.tasks || [];

  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;
  const dayPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const isAllCompleted = totalCount > 0 && completedCount === totalCount;

  const handleToggle = (taskId) => {
    const task = tasks.find(t => t.id === taskId);
    const willCompleteAll = !task?.completed && (completedCount + 1 === totalCount);

    if (willCompleteAll) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#10b981', '#a855f7', '#f59e0b']
      });
    }

    onToggleTask(selectedDayNum, taskId);
  };

  const handleCreateTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    onAddTask(selectedDayNum, {
      title: newTaskTitle.trim(),
      categoryId: newTaskCategory,
      completed: false
    });

    setNewTaskTitle('');
  };

  const formattedDate = currentDay.date 
    ? new Date(currentDay.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })
    : `Day ${selectedDayNum}`;

  return (
    <div className="flex-1 space-y-6">
      
      {/* 1. Day Navigation Bar & Header */}
      <div className="theme-panel rounded-2xl p-5 sm:p-6 space-y-5 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Day Stepper */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSelectedDayNum(Math.max(1, selectedDayNum - 1))}
              disabled={selectedDayNum <= 1}
              className="p-2 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] disabled:opacity-30 transition-colors"
              title="Previous Day"
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
                {isAllCompleted && (
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 flex items-center gap-1">
                    <Check className="w-3 h-3" /> CRUSHED
                  </span>
                )}
              </div>
              <p className="text-xs text-[var(--text-muted)] font-mono flex items-center gap-1.5 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-sky-500" />
                {formattedDate}
              </p>
            </div>

            <button
              onClick={() => setSelectedDayNum(Math.min(90, selectedDayNum + 1))}
              disabled={selectedDayNum >= 90}
              className="p-2 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] disabled:opacity-30 transition-colors"
              title="Next Day"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Controls: Jump to Today & Toggle 90-Day Grid */}
          <div className="flex items-center gap-2 sm:gap-3">
            {selectedDayNum !== currentDayNum && (
              <button
                onClick={() => setSelectedDayNum(currentDayNum)}
                className="px-3 py-1.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-500 border border-sky-500/30 text-xs font-mono font-bold transition-colors"
              >
                Jump to Today (Day {currentDayNum})
              </button>
            )}

            <button
              onClick={() => setShowMatrixGrid(!showMatrixGrid)}
              className={`px-3 py-1.5 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-colors ${
                showMatrixGrid 
                  ? 'bg-sky-500 text-white font-bold border-sky-500' 
                  : 'bg-[var(--bg-surface-elevated)] border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              {showMatrixGrid ? 'Hide 90-Day Grid' : 'View 90-Day Grid'}
            </button>

            {/* Daily completion circle */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] font-mono text-xs">
              <span className="text-[var(--text-primary)] font-bold">{completedCount}/{totalCount}</span>
              <div className="relative flex items-center justify-center w-7 h-7">
                <svg className="w-7 h-7 transform -rotate-90">
                  <circle
                    cx="14"
                    cy="14"
                    r="11"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="text-slate-200 dark:text-slate-800"
                    fill="transparent"
                  />
                  <circle
                    cx="14"
                    cy="14"
                    r="11"
                    stroke={isAllCompleted ? '#10b981' : '#0284c7'}
                    strokeWidth="2.5"
                    strokeDasharray={69}
                    strokeDashoffset={69 - (69 * dayPercent) / 100}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-500"
                  />
                </svg>
                <span className="absolute text-[8px] font-bold text-[var(--text-primary)]">
                  {dayPercent}%
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Collapsible 90-Day Visual Timeline Matrix */}
        {showMatrixGrid && (
          <div className="pt-4 border-t border-[var(--border-color)] space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
              <span>90-Day Timeline Matrix (Click any day to load)</span>
              <span>Day {selectedDayNum} selected</span>
            </div>

            <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-15 gap-1.5 max-h-48 overflow-y-auto p-2 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] scrollbar-thin">
              {Object.values(daysData).map(day => {
                const dayTasks = day.tasks || [];
                const dayDone = dayTasks.filter(t => t.completed).length;
                const isDay100 = dayTasks.length > 0 && dayDone === dayTasks.length;
                const isSelected = day.dayNumber === selectedDayNum;
                const isCurrent = day.dayNumber === currentDayNum;

                return (
                  <button
                    key={day.dayNumber}
                    onClick={() => {
                      setSelectedDayNum(day.dayNumber);
                      setShowMatrixGrid(false);
                    }}
                    className={`h-9 rounded-lg font-mono text-xs flex flex-col items-center justify-center border transition-all ${
                      isSelected
                        ? 'bg-sky-500 text-white font-bold border-sky-400 ring-2 ring-sky-500/40 shadow-sm'
                        : isDay100
                        ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-600 dark:text-emerald-400 font-semibold'
                        : isCurrent
                        ? 'bg-sky-500/10 border-sky-500/40 text-sky-500 font-bold'
                        : 'bg-[var(--bg-surface)] border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    <span>#{day.dayNumber}</span>
                    <span className="text-[8px] opacity-75">
                      {isDay100 ? '✓' : `${dayDone}/${dayTasks.length}`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* 2. Multi-Section Categorized Checklists */}
      <div className="space-y-5">
        {CATEGORIES.map(category => {
          const categoryTasks = tasks.filter(t => t.categoryId === category.id);
          const catDone = categoryTasks.filter(t => t.completed).length;
          const catPercent = categoryTasks.length > 0 
            ? Math.round((catDone / categoryTasks.length) * 100) 
            : 0;

          return (
            <div 
              key={category.id} 
              className="theme-panel rounded-2xl p-5 sm:p-6 space-y-4 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)]">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">{category.emoji}</span>
                  <div>
                    <h3 className="text-base font-bold tracking-tight text-[var(--text-primary)] m-0">
                      {category.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="text-[var(--text-muted)]">
                    {catDone} / {categoryTasks.length} Completed
                  </span>
                  <span className={`px-2 py-0.5 rounded-full border text-[11px] font-bold ${
                    isDarkMode ? category.darkBadge : category.lightBadge
                  }`}>
                    {catPercent}%
                  </span>
                </div>
              </div>

              {/* Task Items in Category */}
              <div className="space-y-2">
                {categoryTasks.map(task => (
                  <div
                    key={task.id}
                    className={`group flex items-center justify-between p-3.5 rounded-xl border transition-all duration-200 ${
                      task.completed
                        ? 'bg-emerald-500/5 border-emerald-500/30 text-[var(--text-muted)]'
                        : 'bg-[var(--bg-surface-elevated)] border-[var(--border-color)] text-[var(--text-primary)] hover:border-sky-500/50'
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <button
                        onClick={() => handleToggle(task.id)}
                        className={`flex-shrink-0 transition-transform active:scale-90 ${
                          task.completed ? 'text-emerald-500' : 'text-[var(--text-muted)] hover:text-sky-500'
                        }`}
                      >
                        {task.completed ? (
                          <CheckCircle2 className="w-5 h-5 fill-emerald-500/20" />
                        ) : (
                          <Circle className="w-5 h-5" />
                        )}
                      </button>

                      <span className={`text-sm ${task.completed ? 'line-through opacity-60' : 'font-medium'}`}>
                        {task.title}
                      </span>
                    </div>

                    <button
                      onClick={() => onDeleteTask(selectedDayNum, task.id)}
                      className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-[var(--text-muted)] hover:text-rose-500 hover:bg-rose-500/10 transition-all ml-2"
                      title="Delete task"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Add Custom Task Engine */}
      <div className="theme-panel rounded-2xl p-5 sm:p-6 transition-all duration-300">
        <h4 className="text-sm font-bold text-[var(--text-primary)] m-0 mb-3 flex items-center gap-1.5">
          <Plus className="w-4 h-4 text-sky-500" />
          Add Custom Task for Day {selectedDayNum}
        </h4>

        <form onSubmit={handleCreateTask} className="flex flex-col sm:flex-row gap-2.5">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="e.g. Build PWA Service Worker, Cold Shower 3 mins, Retinol 0.05%..."
            className="flex-1 px-4 py-2.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-sky-500 transition-colors"
          />

          <select
            value={newTaskCategory}
            onChange={(e) => setNewTaskCategory(e.target.value)}
            className="px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-sky-500 transition-colors"
          >
            {CATEGORIES.map(cat => (
              <option key={cat.id} value={cat.id} className="bg-[var(--bg-surface)]">
                {cat.emoji} {cat.name}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            Add Task
          </button>
        </form>
      </div>

      {/* 4. Day Reflection Logbook */}
      <div className="theme-panel rounded-2xl p-5 sm:p-6 space-y-3 transition-all duration-300">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold text-[var(--text-primary)] m-0 flex items-center gap-2">
            <PenLine className="w-4 h-4 text-sky-500" />
            Day {selectedDayNum} Reflection Logbook
          </h4>
          <span className="text-xs font-mono text-[var(--text-muted)]">
            Auto-saved to localStorage
          </span>
        </div>

        <textarea
          rows="3"
          value={currentDay.notes || ''}
          onChange={(e) => onUpdateNotes(selectedDayNum, e.target.value)}
          placeholder="Log your mental focus, code shipped, skin clarity, workouts, and key wins for this day..."
          className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-sky-500 resize-none transition-colors"
        />
      </div>

    </div>
  );
}
