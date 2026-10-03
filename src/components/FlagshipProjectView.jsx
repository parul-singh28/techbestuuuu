import React, { useState, useEffect } from 'react';
import { Compass, CheckSquare, Square, Sparkles, FolderGit2, Shield, HeartPulse, Cpu, ExternalLink } from 'lucide-react';
import { FLAGSHIP_PROJECT, SUPPORTING_PROJECTS } from '../data/curriculumData';

const STORAGE_KEY = 'techbestuuuu_flagship_tasks';

export default function FlagshipProjectView() {
  const [checkedTasks, setCheckedTasks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    // Default checked items
    return {
      "React + Vite + Tailwind": true,
      "Reusable UI components": true,
      "Responsive design": true,
      "REST API with Node/Express": false,
      "Database for destinations/users/trips": false
    };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedTasks));
  }, [checkedTasks]);

  const toggleTask = (task) => {
    setCheckedTasks(prev => ({
      ...prev,
      [task]: !prev[task]
    }));
  };

  const frontendDone = FLAGSHIP_PROJECT.frontendScope.filter(t => checkedTasks[t]).length;
  const engineeringDone = FLAGSHIP_PROJECT.engineeringScope.filter(t => checkedTasks[t]).length;

  return (
    <div className="space-y-6">
      
      {/* 1. Flagship Project Banner */}
      <div className="hostinger-card p-6 sm:p-7 border-[#673de6]/30 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-500 shadow-sm">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-500 font-bold border border-sky-500/30">
                FLAGSHIP FULL-STACK PROJECT
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] m-0 mt-1">
                {FLAGSHIP_PROJECT.name}
              </h2>
            </div>
          </div>

          <div className="text-right font-mono text-xs text-[var(--text-muted)]">
            <span>Overall Scope: </span>
            <span className="font-bold text-sky-500">
              {frontendDone + engineeringDone} / {FLAGSHIP_PROJECT.frontendScope.length + FLAGSHIP_PROJECT.engineeringScope.length} Shipped
            </span>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-600 dark:text-amber-400">
          <strong>Non-Negotiable Strategy:</strong> {FLAGSHIP_PROJECT.rule}
        </div>

        {/* Intelligent Feature Card */}
        <div className="p-4 rounded-xl bg-sky-500/5 border border-sky-500/20 space-y-1">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-500 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            The One Intelligent Feature
          </span>
          <p className="text-xs text-[var(--text-secondary)] font-mono leading-relaxed m-0">
            {FLAGSHIP_PROJECT.intelligentFeature}
          </p>
        </div>
      </div>

      {/* 2. Frontend vs Engineering Scope Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Frontend Scope */}
        <div className="hostinger-card p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)]">
            <h3 className="text-base font-bold text-[var(--text-primary)] m-0">
              Frontend Scope
            </h3>
            <span className="text-xs font-mono text-[#8c52ff] font-bold">
              {frontendDone}/{FLAGSHIP_PROJECT.frontendScope.length} Complete
            </span>
          </div>

          <div className="space-y-2">
            {FLAGSHIP_PROJECT.frontendScope.map((task) => {
              const isChecked = !!checkedTasks[task];
              return (
                <div
                  key={task}
                  onClick={() => toggleTask(task)}
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    isChecked
                      ? 'bg-[#673de6]/10 border-[#673de6]/30 text-[var(--text-primary)] font-semibold'
                      : 'bg-[var(--bg-surface-elevated)] border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[#673de6]/40'
                  }`}
                >
                  <button className="text-[#673de6]">
                    {isChecked ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4 text-[var(--text-muted)]" />}
                  </button>
                  <span className={`text-xs font-mono ${isChecked ? '' : ''}`}>{task}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Engineering Scope */}
        <div className="hostinger-card p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)]">
            <h3 className="text-base font-bold text-[var(--text-primary)] m-0">
              Engineering Scope
            </h3>
            <span className="text-xs font-mono text-emerald-500 font-bold">
              {engineeringDone}/{FLAGSHIP_PROJECT.engineeringScope.length} Complete
            </span>
          </div>

          <div className="space-y-2">
            {FLAGSHIP_PROJECT.engineeringScope.map((task) => {
              const isChecked = !!checkedTasks[task];
              return (
                <div
                  key={task}
                  onClick={() => toggleTask(task)}
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    isChecked
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-[var(--text-primary)] font-semibold'
                      : 'bg-[var(--bg-surface-elevated)] border-[var(--border-color)] text-[var(--text-secondary)] hover:border-emerald-500/40'
                  }`}
                >
                  <button className="text-emerald-500">
                    {isChecked ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4 text-[var(--text-muted)]" />}
                  </button>
                  <span className={`text-xs font-mono ${isChecked ? '' : ''}`}>{task}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* 3. Supporting Projects (Interview Case Studies) */}
      <div className="hostinger-card p-6 sm:p-7 space-y-4">
        <h3 className="text-lg font-bold text-[var(--text-primary)] m-0">
          Supporting Project Stories (Interview Proof)
        </h3>
        <p className="text-xs text-[var(--text-muted)] font-mono">
          From Page 38 of Winter Arc Roadmap: turn your existing hackathons and projects into sharp, interview-ready case studies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {SUPPORTING_PROJECTS.map((proj, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] space-y-3">
              <div className="flex items-center gap-2">
                {idx === 0 && <HeartPulse className="w-5 h-5 text-rose-500" />}
                {idx === 1 && <Shield className="w-5 h-5 text-indigo-500" />}
                {idx === 2 && <Cpu className="w-5 h-5 text-amber-500" />}
                <h4 className="text-sm font-bold text-[var(--text-primary)] m-0">
                  {proj.name}
                </h4>
              </div>

              <div className="space-y-1 text-xs font-mono">
                <span className="text-[var(--text-muted)] text-[10px] uppercase font-bold block">The Story:</span>
                <p className="text-[var(--text-secondary)] m-0">{proj.story}</p>
              </div>

              <div className="space-y-1 text-xs font-mono pt-2 border-t border-[var(--border-color)]">
                <span className="text-sky-500 text-[10px] uppercase font-bold block">Engineering Proof:</span>
                <p className="text-[var(--text-primary)] font-medium m-0">{proj.proof}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
