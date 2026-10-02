import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Plus, 
  Trash2, 
  Sparkles, 
  Code2, 
  Brain, 
  Dumbbell, 
  ChevronLeft, 
  ChevronRight,
  Flame,
  Award,
  Check,
  Calendar,
  PenTool
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DEFAULT_CATEGORIES } from '../data/initialData';

export default function TodayTasks({ 
  selectedDayNum, 
  setSelectedDayNum, 
  currentDayNum, 
  daysData, 
  onToggleTask, 
  onAddTask, 
  onDeleteTask, 
  onUpdateDayNotes,
  onUpdateDayRating 
}) {
  const [filterCategory, setFilterCategory] = useState('all');
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskCategory, setNewTaskCategory] = useState('tech');

  const dayInfo = daysData[selectedDayNum] || { tasks: [], notes: '', rating: 0, date: '' };
  const tasks = dayInfo.tasks || [];

  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // Filter tasks
  const filteredTasks = filterCategory === 'all' 
    ? tasks 
    : tasks.filter(t => t.category === filterCategory);

  const handleTaskToggle = (taskId) => {
    const isNowAllDone = (completedCount + 1 === totalCount);
    const task = tasks.find(t => t.id === taskId);
    
    // If checking it off and it completes everything, throw confetti!
    if (task && !task.completed && isNowAllDone) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#34d399', '#a78bfa', '#fbbf24']
      });
    }

    onToggleTask(selectedDayNum, taskId);
  };

  const handleCreateTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    onAddTask(selectedDayNum, {
      title: newTaskTitle.trim(),
      category: newTaskCategory,
      completed: false
    });

    setNewTaskTitle('');
  };

  const getCategoryDetails = (catId) => {
    return DEFAULT_CATEGORIES.find(c => c.id === catId) || {
      name: 'Custom',
      badgeBg: 'bg-slate-800 text-slate-300 border-slate-700',
      color: '#94a3b8'
    };
  };

  const formattedDate = dayInfo.date 
    ? new Date(dayInfo.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })
    : `Day ${selectedDayNum}`;

  return (
    <div className="space-y-6">
      
      {/* Day Navigation & Header Card */}
      <div className="glass-panel rounded-2xl p-6 sm:p-7 border-sky-900/50 glow-navy">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Day Stepper */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSelectedDayNum(Math.max(1, selectedDayNum - 1))}
              disabled={selectedDayNum <= 1}
              className="p-2 rounded-xl bg-[#081528] text-slate-300 hover:text-white disabled:opacity-30 border border-sky-950 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-black font-mono text-white m-0 tracking-tight">
                  DAY {String(selectedDayNum).padStart(2, '0')}
                </h2>
                {selectedDayNum === currentDayNum && (
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/40 font-mono font-semibold">
                    TODAY
                  </span>
                )}
                {progressPercent === 100 && (
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono font-semibold flex items-center gap-1">
                    <Check className="w-3 h-3" /> PERFECT DAY
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 font-mono mt-0.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                {formattedDate}
              </p>
            </div>

            <button
              onClick={() => setSelectedDayNum(Math.min(90, selectedDayNum + 1))}
              disabled={selectedDayNum >= 90}
              className="p-2 rounded-xl bg-[#081528] text-slate-300 hover:text-white disabled:opacity-30 border border-sky-950 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Jump to Today Button */}
          <div className="flex items-center gap-3">
            {selectedDayNum !== currentDayNum && (
              <button
                onClick={() => setSelectedDayNum(currentDayNum)}
                className="px-3 py-1.5 rounded-xl bg-sky-950/70 hover:bg-sky-900/60 border border-sky-800 text-sky-300 text-xs font-mono transition-colors"
              >
                Jump to Current Day ({currentDayNum})
              </button>
            )}

            {/* Daily completion badge */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[#081528] border border-sky-950 font-mono text-xs">
              <div className="text-right">
                <span className="text-slate-400 text-[10px] uppercase block">Completion</span>
                <span className="font-bold text-white">{completedCount}/{totalCount} Tasks</span>
              </div>
              <div className="relative flex items-center justify-center w-10 h-10">
                <svg className="w-10 h-10 transform -rotate-90">
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    stroke="#1e293b"
                    strokeWidth="3.5"
                    fill="transparent"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    stroke={progressPercent === 100 ? '#10b981' : '#38bdf8'}
                    strokeWidth="3.5"
                    strokeDasharray={100}
                    strokeDashoffset={100 - progressPercent}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-500"
                  />
                </svg>
                <span className="absolute text-[11px] font-bold text-white font-mono">
                  {progressPercent}%
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-colors ${
              filterCategory === 'all'
                ? 'bg-white text-slate-950 font-bold'
                : 'bg-[#081528] text-slate-400 hover:text-white border border-sky-950'
            }`}
          >
            All Tasks ({tasks.length})
          </button>

          {DEFAULT_CATEGORIES.map(cat => {
            const count = tasks.filter(t => t.category === cat.id).length;
            const isSelected = filterCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap flex items-center gap-1.5 transition-colors ${
                  isSelected
                    ? 'bg-sky-500 text-slate-950 font-bold'
                    : 'bg-[#081528] text-slate-400 hover:text-white border border-sky-950'
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-[10px] opacity-75">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Task List & Quick Add */}
      <div className="glass-panel rounded-2xl p-6 sm:p-7 border-sky-900/50 space-y-4 glow-navy">
        <div className="flex items-center justify-between border-b border-sky-950/80 pb-3">
          <h3 className="text-base font-bold text-white tracking-tight m-0 flex items-center gap-2">
            <span>Daily Protocol Tasks</span>
            <span className="text-xs font-mono text-slate-400">
              ({filteredTasks.length} {filterCategory === 'all' ? 'total' : 'in section'})
            </span>
          </h3>
          <span className="text-xs font-mono text-slate-400">
            Click checkbox to mark done
          </span>
        </div>

        {/* Task Items */}
        <div className="space-y-2.5">
          {filteredTasks.length === 0 ? (
            <div className="text-center py-8 text-slate-500 font-mono text-xs">
              No tasks found in this section. Add one below!
            </div>
          ) : (
            filteredTasks.map((task) => {
              const cat = getCategoryDetails(task.category);
              return (
                <div
                  key={task.id}
                  className={`group flex items-center justify-between p-3.5 rounded-xl border transition-all duration-200 ${
                    task.completed 
                      ? 'bg-emerald-950/20 border-emerald-900/40 text-slate-300' 
                      : 'bg-[#081528]/80 hover:bg-[#0c1f3a] border-sky-950 text-white'
                  }`}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <button
                      onClick={() => handleTaskToggle(task.id)}
                      className={`flex-shrink-0 transition-transform active:scale-90 ${
                        task.completed ? 'text-emerald-400' : 'text-slate-500 hover:text-sky-400'
                      }`}
                    >
                      {task.completed ? (
                        <CheckCircle2 className="w-5 h-5 fill-emerald-500/20" />
                      ) : (
                        <Circle className="w-5 h-5" />
                      )}
                    </button>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 flex-1 min-w-0">
                      <span className={`text-sm ${task.completed ? 'line-through text-slate-400' : 'font-medium'}`}>
                        {task.title}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border w-fit ${cat.badgeBg}`}>
                        {cat.name}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onDeleteTask(selectedDayNum, task.id)}
                    className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-950/30 transition-all ml-2"
                    title="Delete task"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Add Custom Task Form */}
        <form onSubmit={handleCreateTask} className="mt-4 pt-4 border-t border-sky-950 flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Add new task (e.g., LeetCode 3Sum, Retinol 0.1%, Read 20 mins)..."
            className="flex-1 px-4 py-2.5 rounded-xl bg-[#050b14] border border-sky-900/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
          />

          <select
            value={newTaskCategory}
            onChange={(e) => setNewTaskCategory(e.target.value)}
            className="px-3 py-2.5 rounded-xl bg-[#050b14] border border-sky-900/80 text-xs font-mono text-slate-300 focus:outline-none focus:border-sky-400"
          >
            {DEFAULT_CATEGORIES.map(c => (
              <option key={c.id} value={c.id} className="bg-[#0a1527]">
                {c.name}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Task
          </button>
        </form>
      </div>

      {/* Daily Reflection Journal & Mindset Notes */}
      <div className="glass-panel rounded-2xl p-6 sm:p-7 border-sky-900/50 space-y-4 glow-navy">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PenTool className="w-4 h-4 text-sky-400" />
            <h3 className="text-base font-bold text-white tracking-tight m-0">
              Day {selectedDayNum} Reflection Logbook
            </h3>
          </div>
          
          {/* Energy Rating Bolts */}
          <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
            <span>Energy / Focus:</span>
            {[1, 2, 3, 4, 5].map(star => (
              <button
                key={star}
                type="button"
                onClick={() => onUpdateDayRating(selectedDayNum, star)}
                className={`transition-transform hover:scale-125 ${
                  (dayInfo.rating || 0) >= star ? 'text-amber-400' : 'text-slate-700'
                }`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <textarea
          rows="3"
          value={dayInfo.notes || ''}
          onChange={(e) => onUpdateDayNotes(selectedDayNum, e.target.value)}
          placeholder="Log your daily wins, code breakthrough, skin condition, mindset, or workout intensity here..."
          className="w-full px-4 py-3 rounded-xl bg-[#050b14] border border-sky-900/80 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-400 resize-none font-sans"
        />
        <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>Auto-saved to your local storage</span>
          <span>Winter Arc Day {selectedDayNum} / 90</span>
        </div>
      </div>

    </div>
  );
}
