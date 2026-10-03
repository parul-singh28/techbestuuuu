import React, { useState, useEffect } from 'react';
import { Award, ExternalLink, Bookmark, CheckCircle2 } from 'lucide-react';
import { SCORECARD_TARGETS, SOURCE_LIBRARY } from '../data/curriculumData';

const STORAGE_KEY = 'techbestuuuu_scorecard_values';

export default function ScorecardView() {
  const [scorecardData, setScorecardData] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    const initial = {};
    SCORECARD_TARGETS.forEach(item => {
      initial[item.metric] = item.initialValue;
    });
    return initial;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scorecardData));
  }, [scorecardData]);

  const handleUpdateMetric = (metric, val) => {
    setScorecardData(prev => ({
      ...prev,
      [metric]: val
    }));
  };

  return (
    <div className="space-y-6">
      
      {/* 1. 90-Day Scorecard Table */}
      <div className="hostinger-card p-6 sm:p-7 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)]">
          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 text-sky-500" />
            <h2 className="text-xl font-bold text-[var(--text-primary)] m-0">
              90-Day Scorecard
            </h2>
          </div>
          <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-500 font-bold">
            Page 42 Reference
          </span>
        </div>
        <p className="text-xs text-[var(--text-muted)] font-mono">
          Track your real metrics against target outcomes for the 90-day arc. Click to edit your current values.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-[var(--bg-surface-elevated)] border-b border-[var(--border-color)] text-[var(--text-muted)] uppercase text-[10px]">
              <tr>
                <th className="p-3">Metric</th>
                <th className="p-3">Arc Target</th>
                <th className="p-3">My Current Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {SCORECARD_TARGETS.map(item => (
                <tr key={item.metric} className="hover:bg-[var(--bg-surface-elevated)]/50 transition-colors">
                  <td className="p-3 font-bold text-[var(--text-primary)]">
                    {item.metric}
                  </td>
                  <td className="p-3 text-sky-500 font-semibold">
                    {item.target}
                  </td>
                  <td className="p-3">
                    <input
                      type="text"
                      value={scorecardData[item.metric] || ''}
                      onChange={(e) => handleUpdateMetric(item.metric, e.target.value)}
                      placeholder="Enter status..."
                      className="w-full px-2.5 py-1 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-sky-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Source Library (Pages 43-44) */}
      <div className="hostinger-card p-6 sm:p-7 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)]">
          <div className="flex items-center gap-2.5">
            <Bookmark className="w-5 h-5 text-emerald-500" />
            <h2 className="text-xl font-bold text-[var(--text-primary)] m-0">
              Verified Source Library
            </h2>
          </div>
          <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-bold">
            Pages 43-44 Reference
          </span>
        </div>
        <p className="text-xs text-[var(--text-muted)] font-mono">
          Direct links to all official documentation, problem sheets, and internship portals specified in your roadmap.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
          {SOURCE_LIBRARY.map(lib => (
            <a
              key={lib.name}
              href={lib.url}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] hover:border-sky-500/50 group transition-all space-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-[var(--text-primary)] group-hover:text-sky-500 transition-colors m-0">
                    {lib.name}
                  </h4>
                  <ExternalLink className="w-3 h-3 text-[var(--text-muted)] group-hover:text-sky-500" />
                </div>
                <p className="text-[11px] text-[var(--text-secondary)] font-mono mt-1 m-0">
                  {lib.desc}
                </p>
              </div>

              <span className="text-[10px] text-sky-500 font-mono underline underline-offset-2">
                Open Resource &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}
