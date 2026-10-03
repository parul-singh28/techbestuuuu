import React, { useState, useEffect } from 'react';
import { BookOpen, Plus, Trash2, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

const INITIAL_ENTRIES = [
  {
    id: 1,
    problem: "Contains Duplicate (Day 1)",
    firstApproach: "Nested loops comparing every pair with O(N^2) time",
    whyFailed: "Timed out on large input array (10^5 elements)",
    correctPattern: "Unordered hash set / Frequency map",
    complexity: "O(N) time, O(N) space",
    reSolved: true
  },
  {
    id: 2,
    problem: "Valid Anagram (Day 2)",
    firstApproach: "Sorting both strings and checking equality with std::sort",
    whyFailed: "O(N log N) time; suboptimal compared to frequency counting",
    correctPattern: "Fixed 26-element integer frequency vector",
    complexity: "O(N) time, O(1) space",
    reSolved: true
  },
  {
    id: 3,
    problem: "Two Sum (Day 3)",
    firstApproach: "Two nested loops scanning for target - nums[i]",
    whyFailed: "O(N^2) time causes excessive operations",
    correctPattern: "Single pass hash map storing complement index",
    complexity: "O(N) time, O(N) space",
    reSolved: true
  },
  {
    id: 4,
    problem: "Trapping Rain Water (Day 17)",
    firstApproach: "Finding left and right maximum independently for every bar",
    whyFailed: "Redundant recalculations; hard to manage edge cases",
    correctPattern: "Two pointers with leftMax and rightMax tracking",
    complexity: "O(N) time, O(1) space",
    reSolved: false
  },
  {
    id: 5,
    problem: "LRU Cache (Day 40)",
    firstApproach: "Using simple std::vector or queue with linear lookup",
    whyFailed: "O(N) get/put exceeds O(1) interview requirement",
    correctPattern: "Hash map + Doubly Linked List (std::list)",
    complexity: "O(1) get & put",
    reSolved: false
  }
];

const STORAGE_KEY = 'techbestuuuu_interview_book';

export default function InterviewBook() {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return INITIAL_ENTRIES;
  });

  const [newProblem, setNewProblem] = useState('');
  const [newFirstApproach, setNewFirstApproach] = useState('');
  const [newWhyFailed, setNewWhyFailed] = useState('');
  const [newCorrectPattern, setNewCorrectPattern] = useState('');
  const [newComplexity, setNewComplexity] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const handleAddEntry = (e) => {
    e.preventDefault();
    if (!newProblem.trim()) return;

    const newEntry = {
      id: Date.now(),
      problem: newProblem.trim(),
      firstApproach: newFirstApproach.trim() || 'Brute force exploration',
      whyFailed: newWhyFailed.trim() || 'Suboptimal time complexity / edge cases',
      correctPattern: newCorrectPattern.trim() || 'Optimized algorithmic pattern',
      complexity: newComplexity.trim() || 'O(N)',
      reSolved: false
    };

    setEntries([newEntry, ...entries]);
    setNewProblem('');
    setNewFirstApproach('');
    setNewWhyFailed('');
    setNewCorrectPattern('');
    setNewComplexity('');
  };

  const handleToggleReSolved = (id) => {
    setEntries(entries.map(item => item.id === id ? { ...item, reSolved: !item.reSolved } : item));
  };

  const handleDelete = (id) => {
    setEntries(entries.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="hostinger-card p-6 space-y-2">
        <div className="flex items-center gap-2.5">
          <BookOpen className="w-5 h-5 text-sky-500" />
          <h2 className="text-xl font-bold text-[var(--text-primary)] m-0">
            Interview Book Log
          </h2>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-500 font-mono font-bold">
            Page 39 Reference
          </span>
        </div>
        <p className="text-xs text-[var(--text-secondary)] font-mono leading-relaxed">
          <strong>Mandatory Rule:</strong> For every coding question: <em>understand &rarr; brute force &rarr; optimize &rarr; code in C++ &rarr; test &rarr; complexity &rarr; 1-line takeaway &rarr; re-solve weak problems later.</em>
        </p>
      </div>

      {/* Add New Entry Form */}
      <div className="hostinger-card p-5 space-y-4">
        <h3 className="text-sm font-bold text-[var(--text-primary)] m-0 flex items-center gap-2">
          <Plus className="w-4 h-4 text-[#8c52ff]" />
          Log a Weak Problem / Concept Takeaway
        </h3>

        <form onSubmit={handleAddEntry} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <input
            type="text"
            placeholder="Problem / Concept (e.g. 3Sum, LRU Cache)"
            value={newProblem}
            onChange={(e) => setNewProblem(e.target.value)}
            className="px-3 py-2 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#673de6]"
            required
          />
          <input
            type="text"
            placeholder="My first approach"
            value={newFirstApproach}
            onChange={(e) => setNewFirstApproach(e.target.value)}
            className="px-3 py-2 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#673de6]"
          />
          <input
            type="text"
            placeholder="Why it failed / was weak"
            value={newWhyFailed}
            onChange={(e) => setNewWhyFailed(e.target.value)}
            className="px-3 py-2 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#673de6]"
          />
          <input
            type="text"
            placeholder="Correct pattern (e.g. Two Pointers, Monotonic Stack)"
            value={newCorrectPattern}
            onChange={(e) => setNewCorrectPattern(e.target.value)}
            className="px-3 py-2 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#673de6]"
          />
          <input
            type="text"
            placeholder="Complexity (e.g. O(N) time, O(1) space)"
            value={newComplexity}
            onChange={(e) => setNewComplexity(e.target.value)}
            className="px-3 py-2 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#673de6]"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-xl btn-hostinger font-mono text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            Add to Interview Book
          </button>
        </form>
      </div>

      {/* Table of Entries */}
      <div className="hostinger-card overflow-hidden border-[var(--border-color)]">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-[var(--bg-surface-elevated)] border-b border-[var(--border-color)] text-[var(--text-muted)] uppercase text-[10px]">
              <tr>
                <th className="p-3">Problem / Concept</th>
                <th className="p-3">First Approach</th>
                <th className="p-3">Why Failed / Weak</th>
                <th className="p-3">Correct Pattern</th>
                <th className="p-3">Complexity</th>
                <th className="p-3 text-center">Re-solved?</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {entries.map(item => (
                <tr key={item.id} className="hover:bg-[var(--bg-surface-elevated)]/50 transition-colors">
                  <td className="p-3 font-bold text-[var(--text-primary)]">
                    {item.problem}
                  </td>
                  <td className="p-3 text-[var(--text-secondary)]">
                    {item.firstApproach}
                  </td>
                  <td className="p-3 text-rose-500 dark:text-rose-400">
                    {item.whyFailed}
                  </td>
                  <td className="p-3 text-emerald-600 dark:text-emerald-400 font-semibold">
                    {item.correctPattern}
                  </td>
                  <td className="p-3 text-sky-500">
                    {item.complexity}
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleToggleReSolved(item.id)}
                      className={`px-2 py-1 rounded-md text-[10px] font-bold transition-colors ${
                        item.reSolved 
                          ? 'bg-emerald-500/20 text-emerald-500 border border-emerald-500/40' 
                          : 'bg-amber-500/10 text-amber-500 border border-amber-500/30'
                      }`}
                    >
                      {item.reSolved ? '✓ Re-solved' : 'Needs Review'}
                    </button>
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-1 rounded text-[var(--text-muted)] hover:text-rose-500 transition-colors"
                      title="Delete entry"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
