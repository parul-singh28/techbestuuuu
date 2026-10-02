import React, { useState } from 'react';
import { 
  X, 
  Settings, 
  Code2, 
  Calendar, 
  Download, 
  Upload, 
  RotateCcw, 
  Check, 
  AlertTriangle 
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function SettingsModal({ 
  isOpen, 
  onClose, 
  githubUsername, 
  leetcodeUsername, 
  startDate, 
  onSaveProfiles, 
  onExportData, 
  onImportData, 
  onResetData 
}) {
  if (!isOpen) return null;

  const [ghUser, setGhUser] = useState(githubUsername || '');
  const [lcUser, setLcUser] = useState(leetcodeUsername || '');
  const [startD, setStartD] = useState(startDate || new Date().toISOString().split('T')[0]);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveProfiles({
      githubUsername: ghUser.trim(),
      leetcodeUsername: lcUser.trim(),
      startDate: startD
    });
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 800);
  };

  const handleFileImport = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        onImportData(parsed);
        alert('Data successfully imported!');
        onClose();
      } catch (err) {
        alert('Invalid JSON file format.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="glass-panel w-full max-w-lg rounded-2xl p-6 sm:p-8 space-y-6 border-sky-800/80 shadow-2xl relative glow-navy max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sky-950 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight m-0">
                Winter Arc Settings
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                Connect your platforms & manage challenge timeline
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-[#091528] text-slate-400 hover:text-white border border-sky-950 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Inputs Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* GitHub Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-mono text-slate-300 flex items-center gap-2">
              <GithubIcon className="w-4 h-4 text-emerald-400" />
              GitHub Username (Holy Green Dots)
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 font-mono text-xs">
                @
              </span>
              <input
                type="text"
                value={ghUser}
                onChange={(e) => setGhUser(e.target.value)}
                placeholder="e.g. torvalds, yourusername"
                className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-[#050b14] border border-sky-900 text-sm font-mono text-white placeholder-slate-600 focus:outline-none focus:border-sky-400"
              />
            </div>
            <p className="text-[11px] text-slate-500 font-mono">
              Fetches your real commit streak and active contribution graph.
            </p>
          </div>

          {/* LeetCode Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-mono text-slate-300 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-amber-400" />
              LeetCode Username (Problems & Ranking)
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 font-mono text-xs">
                @
              </span>
              <input
                type="text"
                value={lcUser}
                onChange={(e) => setLcUser(e.target.value)}
                placeholder="e.g. your_leetcode_handle"
                className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-[#050b14] border border-sky-900 text-sm font-mono text-white placeholder-slate-600 focus:outline-none focus:border-sky-400"
              />
            </div>
            <p className="text-[11px] text-slate-500 font-mono">
              Tracks Easy, Medium, Hard solves, acceptance rate, and rank.
            </p>
          </div>

          {/* Start Date */}
          <div className="space-y-1.5">
            <label className="text-xs font-mono text-slate-300 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-sky-400" />
              Winter Arc Start Date (Day 01)
            </label>
            <input
              type="date"
              value={startD}
              onChange={(e) => setStartD(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#050b14] border border-sky-900 text-sm font-mono text-white focus:outline-none focus:border-sky-400"
            />
            <p className="text-[11px] text-slate-500 font-mono">
              The current day (Day 01–90) automatically synchronizes from this date.
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors mt-2"
          >
            {saveSuccess ? (
              <>
                <Check className="w-4 h-4" /> Saved!
              </>
            ) : (
              'Save & Sync Profiles'
            )}
          </button>
        </form>

        {/* Data Persistence / Export / Import */}
        <div className="pt-4 border-t border-sky-950 space-y-3">
          <span className="text-xs font-mono text-slate-400 block font-semibold">
            Data Backup & Persistence (Local Storage)
          </span>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={onExportData}
              className="px-3 py-2 rounded-xl bg-[#091528] hover:bg-sky-950 text-slate-300 hover:text-white border border-sky-900/80 text-xs font-mono flex items-center justify-center gap-2 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              Export JSON
            </button>

            <label className="px-3 py-2 rounded-xl bg-[#091528] hover:bg-sky-950 text-slate-300 hover:text-white border border-sky-900/80 text-xs font-mono flex items-center justify-center gap-2 transition-colors cursor-pointer">
              <Upload className="w-3.5 h-3.5 text-emerald-400" />
              Import JSON
              <input
                type="file"
                accept=".json"
                onChange={handleFileImport}
                className="hidden"
              />
            </label>
          </div>

          {/* Reset Option */}
          <div className="pt-3">
            {showResetConfirm ? (
              <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-800 text-xs font-mono space-y-2">
                <span className="text-rose-200 block">
                  Are you sure? This will reset all tasks and 90-day progress to Day 1 defaults.
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      onResetData();
                      setShowResetConfirm(false);
                      onClose();
                    }}
                    className="px-3 py-1 bg-rose-600 hover:bg-rose-500 text-white rounded-lg font-bold"
                  >
                    Yes, Reset Everything
                  </button>
                  <button
                    onClick={() => setShowResetConfirm(false)}
                    className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowResetConfirm(true)}
                className="text-xs font-mono text-slate-500 hover:text-rose-400 flex items-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                Reset challenge to factory defaults
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
