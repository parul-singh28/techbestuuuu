// Exact 90-Day Curriculum extracted from Parul Singh's Winter Arc Roadmap PDF (02 Oct 2026 - 30 Dec 2026)

export const WINTER_ARC_CONFIG = {
  name: "PARUL SINGH",
  subheading: "3RD-YEAR CSE | 90-DAY WINTER ARC",
  tagline: "BUILD. SOLVE. SHIP.",
  slogan: "A practical 90-day sprint for DSA, frontend/full-stack engineering, GitHub, interviews, paid internships, college life and the glow-up that comes from becoming more capable every day.",
  dates: "02 Oct 2026 - 30 Dec 2026",
  badges: ["C++ for DSA", "React + Vite + Tailwind", "SQL + Node/Express", "GitHub + Interviews"],
  northStar: "Be internship-ready, not certificate-collecting.",
  collegeContext: "Built around your 7:00 AM departure, 9:00 AM-4:00 PM college, two tuitions (Laksh & Prachi) and exam pressure.",
  ruleOfArc: "90 days. No zero identity days.",
  githubUsername: "parul-singh28",
  githubUrl: "https://github.com/parul-singh28",
  leetcodeUsername: "Parul-Singh",
  leetcodeUrl: "https://leetcode.com/u/Parul-Singh/"
};

export const PHASES = [
  { id: 1, name: "PHASE 1", title: "RESET + EXAM BUFFER", days: "Days 1-10", desc: "Clear your personal admin backlog, stabilize sleep and start DSA without sacrificing sessionals." },
  { id: 2, name: "PHASE 2", title: "FOUNDATION + REACT BASE", days: "Days 11-30", desc: "Arrays, two pointers, JS, GitHub, mini-project, React components, state and APIs." },
  { id: 3, name: "PHASE 3", title: "FRONTEND DEPTH + BACKEND START", days: "Days 31-60", desc: "Linked lists, Tailwind, Redux Toolkit, trees, engineering workflow, SQL and Node/Express." },
  { id: 4, name: "PHASE 4", title: "FULL-STACK + DP + POLISH", days: "Days 61-80", desc: "Graphs, CRUD, database integration, deployment, DP, accessibility, performance and release." },
  { id: 5, name: "PHASE 5", title: "INTERVIEW + APPLICATION SPRINT", days: "Days 81-90", desc: "Mocks, project storytelling, DBMS/OS/CN, resume/profile alignment and targeted paid-internship applications." }
];

// The 90 Days Schedule from Pages 7-36 of the PDF
export const SCHEDULE_DAYS = [
  // Days 1-3
  {
    day: 1, date: "Fri, 02 Oct", dateIso: "2026-10-02", type: "COLLEGE DAY", phase: "RESET + EXAM BUFFER",
    dsa: { title: "Contains Duplicate", topic: "Arrays + hashing", source: "LeetCode Top Interview 150; NeetCode Arrays & Hashing" },
    skill: { title: "Career setup + GitHub baseline", desc: "Create a one-page 90-day tracker; clean GitHub bio, avatar, pins and visible project names.", source: "GitHub Docs: Profile; GitHub Skills" },
    career: { title: "Personal backlog", desc: "Print the materials that must be pasted into your college file; label the file section and finish the physical pasting today." }
  },
  {
    day: 2, date: "Sat, 03 Oct", dateIso: "2026-10-03", type: "SATURDAY BUILD", phase: "RESET + EXAM BUFFER",
    dsa: { title: "Valid Anagram", topic: "Hash map / frequency counting", source: "LeetCode Top Interview 150; NeetCode Arrays & Hashing" },
    skill: { title: "C++ STL foundation", desc: "Practise vector, string, pair, set and unordered_set with 5 tiny snippets.", source: "takeUforward C++ for Beginners / your existing C++ notes" },
    career: { title: "Personal backlog", desc: "Take the printout of the Velocity Code event material and keep it with the college file materials." }
  },
  {
    day: 3, date: "Sun, 04 Oct", dateIso: "2026-10-04", type: "SUNDAY REVIEW", phase: "RESET + EXAM BUFFER",
    dsa: { title: "Two Sum", topic: "Hash map + complement", source: "LeetCode Top Interview 150; NeetCode Arrays & Hashing" },
    skill: { title: "Hashing in C++", desc: "Implement frequency map patterns from today's DSA problem in 3 variants.", source: "C++ reference + LeetCode editorials" },
    career: { title: "Personal backlog", desc: "Message/contact Brand Lifto and ask specifically about the pending certificate AND the pending money/payment; save reply screenshot." }
  },
  // Days 4-6
  {
    day: 4, date: "Mon, 05 Oct", dateIso: "2026-10-05", type: "COLLEGE DAY", phase: "RESET + EXAM BUFFER",
    dsa: { title: "Group Anagrams", topic: "Hashing / canonical keys", source: "LeetCode Top Interview 150; NeetCode Arrays & Hashing" },
    skill: { title: "JavaScript: arrays & objects", desc: "Rewrite 3 old JS snippets using map/filter/reduce and object/Map.", source: "MDN JavaScript Guide" },
    career: { title: "Personal backlog", desc: "Ask Raghav Bhaiya from CircuitCrate for the pending certificate; set a follow-up date if he says it will be sent later." }
  },
  {
    day: 5, date: "Tue, 06 Oct", dateIso: "2026-10-06", type: "COLLEGE DAY", phase: "RESET + EXAM BUFFER",
    dsa: { title: "Top K Frequent Elements", topic: "Hashing + heap/bucket idea", source: "NeetCode Arrays & Hashing" },
    skill: { title: "JavaScript: Map/Set", desc: "Build a 20-line frequency counter and dedupe utility.", source: "MDN: Keyed collections" },
    career: { title: "Personal backlog", desc: "Check ERP/meeting records and mark the attendance of the meeting that was not marked; screenshot the updated status." }
  },
  {
    day: 6, date: "Wed, 07 Oct", dateIso: "2026-10-07", type: "COLLEGE DAY", phase: "RESET + EXAM BUFFER",
    dsa: { title: "Product of Array Except Self", topic: "Prefix/suffix", source: "LeetCode Top Interview 150; NeetCode Arrays & Hashing" },
    skill: { title: "Complexity drill", desc: "For 5 solved DSA questions, write time + space complexity in one sentence each.", source: "NeetCode explanations + Interview Book" },
    career: { title: "Personal backlog", desc: "After your phone recharge, install/setup the new Cashback payment method; make one small test/check that it is active." }
  },
  // Days 7-9
  {
    day: 7, date: "Thu, 08 Oct", dateIso: "2026-10-08", type: "COLLEGE DAY", phase: "RESET + EXAM BUFFER",
    dsa: { title: "Valid Sudoku", topic: "Sets / validation", source: "LeetCode Top Interview 150; NeetCode Arrays & Hashing" },
    skill: { title: "Exam-first day", desc: "Use the main block for your upcoming sessional syllabus; keep DSA to 20 minutes only.", source: "Your syllabus/notes" },
    career: { title: "Personal backlog", desc: "Prepare and publish the LinkedIn post about Prashasti; add a clean photo/asset and proofread before posting." }
  },
  {
    day: 8, date: "Fri, 09 Oct", dateIso: "2026-10-09", type: "COLLEGE DAY", phase: "RESET + EXAM BUFFER",
    dsa: { title: "Longest Consecutive Sequence", topic: "Hash set + sequence start", source: "LeetCode Top Interview 150; NeetCode Arrays & Hashing" },
    skill: { title: "GitHub repository hygiene", desc: "Add README, screenshots, tech stack and run instructions to one project.", source: "GitHub Docs: Creating a repository" },
    career: { title: "Personal backlog", desc: "Open the current IEEE Student Ambassador task list and complete every assigned item. Tick each one and save proof." }
  },
  {
    day: 9, date: "Sat, 10 Oct", dateIso: "2026-10-10", type: "SATURDAY BUILD", phase: "RESET + EXAM BUFFER",
    dsa: { title: "Best Time to Buy and Sell Stock", topic: "One-pass tracking", source: "LeetCode Top Interview 150; NeetCode Arrays & Hashing" },
    skill: { title: "Git workflow", desc: "Practise branch -> commit -> push -> pull request on a practice repo.", source: "GitHub Skills: Introduction to Git" },
    career: { title: "Personal backlog", desc: "Visit/take books from the library; record the book names and return dates in your tracker." }
  },
  // Days 10-12
  {
    day: 10, date: "Sun, 11 Oct", dateIso: "2026-10-11", type: "SUNDAY REVIEW", phase: "RESET + EXAM BUFFER",
    dsa: { title: "Maximum Subarray", topic: "Kadane / DP intuition", source: "LeetCode Top Interview 150; NeetCode Arrays & Hashing" },
    skill: { title: "Weekly review system", desc: "Record: DSA solved, project hours, applications, workouts, sleep, weak topics.", source: "Your 90-day tracker" },
    career: { title: "Personal backlog", desc: "Update your portfolio links on LinkedIn and GitHub; upload the latest resume and update the resume map links." }
  },
  {
    day: 11, date: "Mon, 12 Oct", dateIso: "2026-10-12", type: "COLLEGE DAY", phase: "FOUNDATION BUILD",
    dsa: { title: "Move Zeroes", topic: "Two pointers", source: "LeetCode Top Interview 150; NeetCode Two Pointers" },
    skill: { title: "HTML semantics", desc: "Refactor one old page using header/nav/main/section/article/footer.", source: "MDN HTML docs" },
    career: { title: "Internship pipeline", desc: "Identify 3 internship keywords and save 3 suitable job links; no application pressure yet." }
  },
  {
    day: 12, date: "Tue, 13 Oct", dateIso: "2026-10-13", type: "COLLEGE DAY", phase: "FOUNDATION BUILD",
    dsa: { title: "Remove Duplicates from Sorted Array", topic: "Two pointers", source: "LeetCode Top Interview 150" },
    skill: { title: "CSS layout", desc: "Rebuild a responsive card section using Flexbox only.", source: "MDN CSS + Flexbox guide" },
    career: { title: "Internship pipeline", desc: "Identify 3 internship keywords and save 3 suitable job links; no application pressure yet." }
  },
  // Days 13-15
  {
    day: 13, date: "Wed, 14 Oct", dateIso: "2026-10-14", type: "COLLEGE DAY", phase: "FOUNDATION BUILD",
    dsa: { title: "Valid Palindrome", topic: "Two pointers", source: "LeetCode Top Interview 150; NeetCode Two Pointers" },
    skill: { title: "CSS Grid", desc: "Rebuild the same section using Grid and compare when each is easier.", source: "MDN CSS Grid" },
    career: { title: "Internship pipeline", desc: "Identify 3 internship keywords and save 3 suitable job links; no application pressure yet." }
  },
  {
    day: 14, date: "Thu, 15 Oct", dateIso: "2026-10-15", type: "COLLEGE DAY", phase: "FOUNDATION BUILD",
    dsa: { title: "Two Sum II - Input Array Is Sorted", topic: "Two pointers", source: "LeetCode Top Interview 150; NeetCode Two Pointers" },
    skill: { title: "Two-pointer dry run", desc: "On paper, dry-run 3 array/string cases before coding.", source: "NeetCode Two Pointers" },
    career: { title: "Internship pipeline", desc: "Identify 3 internship keywords and save 3 suitable job links; no application pressure yet." }
  },
  {
    day: 15, date: "Fri, 16 Oct", dateIso: "2026-10-16", type: "COLLEGE DAY", phase: "FOUNDATION BUILD",
    dsa: { title: "3Sum", topic: "Two pointers after sort", source: "LeetCode Top Interview 150; NeetCode Two Pointers" },
    skill: { title: "3Sum explanation", desc: "Record a 90-second voice note explaining sort + two pointers.", source: "LeetCode editorial" },
    career: { title: "Internship pipeline", desc: "Identify 3 internship keywords and save 3 suitable job links; no application pressure yet." }
  },
  // Days 16-18
  {
    day: 16, date: "Sat, 17 Oct", dateIso: "2026-10-17", type: "SATURDAY BUILD", phase: "FOUNDATION BUILD",
    dsa: { title: "Container With Most Water", topic: "Greedy + two pointers", source: "LeetCode Top Interview 150; NeetCode Two Pointers" },
    skill: { title: "Frontend mini-project kickoff", desc: "Create a vanilla JS Expense Tracker repo with issue list and README.", source: "MDN JS + GitHub Skills" },
    career: { title: "Internship pipeline", desc: "Identify 3 internship keywords and save 3 suitable job links; no application pressure yet." }
  },
  {
    day: 17, date: "Sun, 18 Oct", dateIso: "2026-10-18", type: "SUNDAY REVIEW", phase: "FOUNDATION BUILD",
    dsa: { title: "Trapping Rain Water", topic: "Two pointers / prefix max", source: "LeetCode Top Interview 150; NeetCode Two Pointers" },
    skill: { title: "Expense Tracker UI", desc: "Build add/delete transaction form and category field.", source: "MDN DOM + Events" },
    career: { title: "Internship pipeline", desc: "Identify 3 internship keywords and save 3 suitable job links; no application pressure yet." }
  },
  {
    day: 18, date: "Mon, 19 Oct", dateIso: "2026-10-19", type: "COLLEGE DAY", phase: "FOUNDATION BUILD",
    dsa: { title: "Longest Substring Without Repeating Characters", topic: "Sliding window", source: "LeetCode Top Interview 150; NeetCode Sliding Window" },
    skill: { title: "Expense Tracker logic", desc: "Add total, category totals and localStorage persistence.", source: "MDN Web Storage API" },
    career: { title: "Internship pipeline", desc: "Identify 3 internship keywords and save 3 suitable job links; no application pressure yet." }
  },
  // Days 19-21
  {
    day: 19, date: "Tue, 20 Oct", dateIso: "2026-10-20", type: "COLLEGE DAY", phase: "FOUNDATION BUILD",
    dsa: { title: "Longest Repeating Character Replacement", topic: "Sliding window + frequency", source: "NeetCode Sliding Window" },
    skill: { title: "Expense Tracker polish", desc: "Responsive layout, empty state, validation and clean README.", source: "MDN + GitHub Docs" },
    career: { title: "Internship pipeline", desc: "Identify 3 internship keywords and save 3 suitable job links; no application pressure yet." }
  },
  {
    day: 20, date: "Wed, 21 Oct", dateIso: "2026-10-21", type: "COLLEGE DAY", phase: "FOUNDATION BUILD",
    dsa: { title: "Permutation in String", topic: "Fixed-size sliding window", source: "NeetCode Sliding Window" },
    skill: { title: "Frontend checkpoint", desc: "Deploy the Expense Tracker; add live link to GitHub README.", source: "GitHub Pages / Vercel" },
    career: { title: "Internship pipeline", desc: "Identify 3 internship keywords and save 3 suitable job links; no application pressure yet." }
  },
  {
    day: 21, date: "Thu, 22 Oct", dateIso: "2026-10-22", type: "COLLEGE DAY", phase: "REACT BASE",
    dsa: { title: "Valid Parentheses", topic: "Stack", source: "LeetCode Top Interview 150; NeetCode Stack" },
    skill: { title: "React setup", desc: "Create a React app with Vite; understand src, components and dev script.", source: "React installation + Vite Getting Started" },
    career: { title: "Internship pipeline", desc: "Update resume project bullets using today's work; start with 2 targeted internship applications." }
  },
  // Days 22-24
  {
    day: 22, date: "Fri, 23 Oct", dateIso: "2026-10-23", type: "COLLEGE DAY", phase: "REACT BASE",
    dsa: { title: "Min Stack", topic: "Stack + auxiliary state", source: "LeetCode Top Interview 150; NeetCode Stack" },
    skill: { title: "React components", desc: "Split a page into Header, Card, List and Footer components.", source: "React Quick Start" },
    career: { title: "Internship pipeline", desc: "Update resume project bullets using today's work; start with 2 targeted internship applications." }
  },
  {
    day: 23, date: "Sat, 24 Oct", dateIso: "2026-10-24", type: "SATURDAY BUILD", phase: "REACT BASE",
    dsa: { title: "Evaluate Reverse Polish Notation", topic: "Stack", source: "NeetCode Stack" },
    skill: { title: "React props", desc: "Pass structured data into reusable destination cards.", source: "React Quick Start" },
    career: { title: "Internship pipeline", desc: "Update resume project bullets using today's work; start with 2 targeted internship applications." }
  },
  {
    day: 24, date: "Sun, 25 Oct", dateIso: "2026-10-25", type: "SUNDAY REVIEW", phase: "REACT BASE",
    dsa: { title: "Generate Parentheses", topic: "Backtracking", source: "LeetCode Top Interview 150; NeetCode Backtracking" },
    skill: { title: "React state/events", desc: "Build a search box and filter cards using useState.", source: "React Learn" },
    career: { title: "Internship pipeline", desc: "Update resume project bullets using today's work; start with 2 targeted internship applications." }
  },
  // Days 25-27
  {
    day: 25, date: "Mon, 26 Oct", dateIso: "2026-10-26", type: "COLLEGE DAY", phase: "REACT BASE",
    dsa: { title: "Daily Temperatures", topic: "Monotonic stack", source: "LeetCode Top Interview 150; NeetCode Stack" },
    skill: { title: "React forms", desc: "Build a controlled form with validation and submit handling.", source: "React Learn + MDN Forms" },
    career: { title: "Internship pipeline", desc: "Update resume project bullets using today's work; start with 2 targeted internship applications." }
  },
  {
    day: 26, date: "Tue, 27 Oct", dateIso: "2026-10-27", type: "COLLEGE DAY", phase: "REACT BASE",
    dsa: { title: "Car Fleet", topic: "Sorting + monotonic behavior", source: "NeetCode Stack" },
    skill: { title: "useEffect + API", desc: "Fetch a public API and display loading, success and error states.", source: "React Learn + Fetch/MDN" },
    career: { title: "Internship pipeline", desc: "Update resume project bullets using today's work; start with 2 targeted internship applications." }
  },
  {
    day: 27, date: "Wed, 28 Oct", dateIso: "2026-10-28", type: "COLLEGE DAY", phase: "REACT BASE",
    dsa: { title: "Largest Rectangle in Histogram", topic: "Monotonic stack", source: "LeetCode Top Interview 150; NeetCode Stack" },
    skill: { title: "React Router", desc: "Add Home, Explore, About and Contact routes.", source: "React Router docs" },
    career: { title: "Internship pipeline", desc: "Update resume project bullets using today's work; start with 2 targeted internship applications." }
  },
  // Days 28-30
  {
    day: 28, date: "Thu, 29 Oct", dateIso: "2026-10-29", type: "COLLEGE DAY", phase: "REACT BASE",
    dsa: { title: "Binary Search", topic: "Binary search template", source: "LeetCode Top Interview 150; NeetCode Binary Search" },
    skill: { title: "React project architecture", desc: "Create folders for components, pages, hooks, services and assets.", source: "React docs + your project" },
    career: { title: "Internship pipeline", desc: "Update resume project bullets using today's work; start with 2 targeted internship applications." }
  },
  {
    day: 29, date: "Fri, 30 Oct", dateIso: "2026-10-30", type: "COLLEGE DAY", phase: "REACT BASE",
    dsa: { title: "Search a 2D Matrix", topic: "Binary search", source: "LeetCode Top Interview 150; NeetCode Binary Search" },
    skill: { title: "Frontend code review", desc: "Review today's matrix-search DSA + React code; remove duplication.", source: "GitHub diff view" },
    career: { title: "Internship pipeline", desc: "Update resume project bullets using today's work; start with 2 targeted internship applications." }
  },
  {
    day: 30, date: "Sat, 31 Oct", dateIso: "2026-10-31", type: "SATURDAY BUILD", phase: "REACT BASE",
    dsa: { title: "Koko Eating Bananas", topic: "Binary search on answer", source: "LeetCode Top Interview 150; NeetCode Binary Search" },
    skill: { title: "React checkpoint", desc: "Ship one polished page of Culture Smart Traveller with responsive design.", source: "React + Tailwind docs" },
    career: { title: "Internship pipeline", desc: "Update resume project bullets using today's work; start with 2 targeted internship applications." }
  },
  // Days 31-40 (Phase 3: Frontend Depth)
  {
    day: 31, date: "Sun, 01 Nov", dateIso: "2026-11-01", type: "SUNDAY REVIEW", phase: "FRONTEND DEPTH",
    dsa: { title: "Reverse Linked List", topic: "Pointers", source: "LeetCode Top Interview 150; NeetCode Linked List" },
    skill: { title: "Linked list visualization", desc: "Draw node pointers and implement one list operation on paper.", source: "NeetCode Linked List" },
    career: { title: "Internship pipeline", desc: "Apply to 2 targeted frontend/software internships and send 1 genuine networking message." }
  },
  {
    day: 32, date: "Mon, 02 Nov", dateIso: "2026-11-02", type: "COLLEGE DAY", phase: "FRONTEND DEPTH",
    dsa: { title: "Merge Two Sorted Lists", topic: "Two-pointer linked lists", source: "LeetCode Top Interview 150; NeetCode Linked List" },
    skill: { title: "Pointer debugging", desc: "Use console logs or debugger to inspect next/current pointers.", source: "VS Code debugger docs" },
    career: { title: "Internship pipeline", desc: "Apply to 2 targeted frontend/software internships and send 1 genuine networking message." }
  },
  {
    day: 33, date: "Tue, 03 Nov", dateIso: "2026-11-03", type: "COLLEGE DAY", phase: "FRONTEND DEPTH",
    dsa: { title: "Linked List Cycle", topic: "Fast/slow pointers", source: "LeetCode Top Interview 150; NeetCode Linked List" },
    skill: { title: "React forms quality", desc: "Add client-side validation messages and disabled submit states.", source: "React Learn" },
    career: { title: "Internship pipeline", desc: "Apply to 2 targeted frontend/software internships and send 1 genuine networking message." }
  },
  {
    day: 34, date: "Wed, 04 Nov", dateIso: "2026-11-04", type: "COLLEGE DAY", phase: "FRONTEND DEPTH",
    dsa: { title: "Reorder List", topic: "Split + reverse + merge", source: "NeetCode Linked List" },
    skill: { title: "Tailwind setup", desc: "Install current Tailwind setup for your chosen Vite/React project.", source: "Tailwind official framework guide" },
    career: { title: "Internship pipeline", desc: "Apply to 2 targeted frontend/software internships and send 1 genuine networking message." }
  },
  {
    day: 35, date: "Thu, 05 Nov", dateIso: "2026-11-05", type: "COLLEGE DAY", phase: "FRONTEND DEPTH",
    dsa: { title: "Remove Nth Node From End of List", topic: "Two pointers", source: "LeetCode Top Interview 150; NeetCode Linked List" },
    skill: { title: "Tailwind responsive", desc: "Use mobile-first breakpoints on one Culture Smart Traveller page.", source: "Tailwind docs" },
    career: { title: "Internship pipeline", desc: "Apply to 2 targeted frontend/software internships and send 1 genuine networking message." }
  },
  {
    day: 36, date: "Fri, 06 Nov", dateIso: "2026-11-06", type: "COLLEGE DAY", phase: "FRONTEND DEPTH",
    dsa: { title: "Copy List with Random Pointer", topic: "Hash map / node cloning", source: "LeetCode Top Interview 150; NeetCode Linked List" },
    skill: { title: "Reusable UI system", desc: "Create Button, Input, Card, Badge, Modal components.", source: "React Quick Start + Tailwind" },
    career: { title: "Internship pipeline", desc: "Apply to 2 targeted frontend/software internships and send 1 genuine networking message." }
  },
  {
    day: 37, date: "Sat, 07 Nov", dateIso: "2026-11-07", type: "SATURDAY BUILD", phase: "FRONTEND DEPTH",
    dsa: { title: "Add Two Numbers", topic: "Linked-list arithmetic", source: "LeetCode Top Interview 150; NeetCode Linked List" },
    skill: { title: "Redux basics", desc: "Create store, slice, provider and one simple counter/saved-items flow.", source: "Redux Toolkit Usage Guide" },
    career: { title: "Internship pipeline", desc: "Apply to 2 targeted frontend/software internships and send 1 genuine networking message." }
  },
  {
    day: 38, date: "Sun, 08 Nov", dateIso: "2026-11-08", type: "SUNDAY REVIEW", phase: "FRONTEND DEPTH",
    dsa: { title: "Find the Duplicate Number", topic: "Cycle detection", source: "LeetCode Top Interview 150; NeetCode Linked List" },
    skill: { title: "Redux state design", desc: "Separate UI state from server data; document why.", source: "Redux Toolkit docs" },
    career: { title: "Internship pipeline", desc: "Apply to 2 targeted frontend/software internships and send 1 genuine networking message." }
  },
  {
    day: 39, date: "Mon, 09 Nov", dateIso: "2026-11-09", type: "COLLEGE DAY", phase: "FRONTEND DEPTH",
    dsa: { title: "Merge K Sorted Lists", topic: "Heap / divide & conquer", source: "LeetCode Top Interview 150; NeetCode Linked List" },
    skill: { title: "Routing + global state", desc: "Persist saved destinations across routes.", source: "Redux Toolkit + React Router" },
    career: { title: "Internship pipeline", desc: "Apply to 2 targeted frontend/software internships and send 1 genuine networking message." }
  },
  {
    day: 40, date: "Tue, 10 Nov", dateIso: "2026-11-10", type: "COLLEGE DAY", phase: "FRONTEND DEPTH",
    dsa: { title: "LRU Cache", topic: "Hash map + doubly linked list", source: "LeetCode Top Interview 150; NeetCode Linked List" },
    skill: { title: "Frontend checkpoint", desc: "Deploy the latest app and record a 60-second demo video.", source: "Vercel/Netlify + GitHub" },
    career: { title: "Internship pipeline", desc: "Apply to 2 targeted frontend/software internships and send 1 genuine networking message." }
  },
  // Days 41-50 (Engineering Habits & Trees)
  {
    day: 41, date: "Wed, 11 Nov", dateIso: "2026-11-11", type: "COLLEGE DAY", phase: "ENGINEERING HABITS",
    dsa: { title: "Invert Binary Tree", topic: "Tree recursion", source: "LeetCode Top Interview 150; NeetCode Trees" },
    skill: { title: "Trees fundamentals", desc: "Explain preorder/inorder/postorder and BFS on paper.", source: "NeetCode Trees" },
    career: { title: "Internship pipeline", desc: "Apply to 2 targeted roles; add today's project proof to LinkedIn/GitHub when meaningful." }
  },
  {
    day: 42, date: "Thu, 12 Nov", dateIso: "2026-11-12", type: "COLLEGE DAY", phase: "ENGINEERING HABITS",
    dsa: { title: "Maximum Depth of Binary Tree", topic: "DFS / recursion", source: "LeetCode Top Interview 150; NeetCode Trees" },
    skill: { title: "Recursion practice", desc: "Write 3 recursive functions and identify base case + recursive case.", source: "takeUforward / NeetCode" },
    career: { title: "Internship pipeline", desc: "Apply to 2 targeted roles; add today's project proof to LinkedIn/GitHub when meaningful." }
  },
  {
    day: 43, date: "Fri, 13 Nov", dateIso: "2026-11-13", type: "COLLEGE DAY", phase: "ENGINEERING HABITS",
    dsa: { title: "Diameter of Binary Tree", topic: "Tree DFS", source: "LeetCode Top Interview 150; NeetCode Trees" },
    skill: { title: "Tree interview explanation", desc: "Explain depth/diameter in under 2 minutes.", source: "LeetCode editorial" },
    career: { title: "Internship pipeline", desc: "Apply to 2 targeted roles; add today's project proof to LinkedIn/GitHub when meaningful." }
  },
  {
    day: 44, date: "Sat, 14 Nov", dateIso: "2026-11-14", type: "SATURDAY BUILD", phase: "ENGINEERING HABITS",
    dsa: { title: "Balanced Binary Tree", topic: "Postorder DFS", source: "LeetCode Top Interview 150; NeetCode Trees" },
    skill: { title: "Git branches in project", desc: "Use a feature branch for one project feature; merge cleanly.", source: "GitHub Skills" },
    career: { title: "Internship pipeline", desc: "Apply to 2 targeted roles; add today's project proof to LinkedIn/GitHub when meaningful." }
  },
  {
    day: 45, date: "Sun, 15 Nov", dateIso: "2026-11-15", type: "SUNDAY REVIEW", phase: "ENGINEERING HABITS",
    dsa: { title: "Subtree of Another Tree", topic: "Tree matching", source: "NeetCode Trees" },
    skill: { title: "Pull request habit", desc: "Open a PR on your own repo, review the diff, then merge.", source: "GitHub Docs" },
    career: { title: "Internship pipeline", desc: "Apply to 2 targeted roles; add today's project proof to LinkedIn/GitHub when meaningful." }
  },
  {
    day: 46, date: "Mon, 16 Nov", dateIso: "2026-11-16", type: "COLLEGE DAY", phase: "ENGINEERING HABITS",
    dsa: { title: "Lowest Common Ancestor of a BST", topic: "BST property", source: "LeetCode Top Interview 150; NeetCode Trees" },
    skill: { title: "Project issue board", desc: "Create GitHub Issues for 5 Culture Smart Traveller features and close 1.", source: "GitHub Issues docs" },
    career: { title: "Internship pipeline", desc: "Apply to 2 targeted roles; add today's project proof to LinkedIn/GitHub when meaningful." }
  },
  {
    day: 47, date: "Tue, 17 Nov", dateIso: "2026-11-17", type: "COLLEGE DAY", phase: "ENGINEERING HABITS",
    dsa: { title: "Binary Tree Level Order Traversal", topic: "BFS queue", source: "LeetCode Top Interview 150; NeetCode Trees" },
    skill: { title: "Deployment cleanup", desc: "Move secrets to environment variables; verify production build.", source: "Vite + Vercel docs" },
    career: { title: "Internship pipeline", desc: "Apply to 2 targeted roles; add today's project proof to LinkedIn/GitHub when meaningful." }
  },
  {
    day: 48, date: "Wed, 18 Nov", dateIso: "2026-11-18", type: "COLLEGE DAY", phase: "ENGINEERING HABITS",
    dsa: { title: "Binary Tree Right Side View", topic: "BFS/DFS levels", source: "NeetCode Trees" },
    skill: { title: "Project documentation", desc: "Add architecture diagram, API flow and feature list to README.", source: "GitHub Docs + Mermaid" },
    career: { title: "Internship pipeline", desc: "Apply to 2 targeted roles; add today's project proof to LinkedIn/GitHub when meaningful." }
  },
  {
    day: 49, date: "Thu, 19 Nov", dateIso: "2026-11-19", type: "COLLEGE DAY", phase: "ENGINEERING HABITS",
    dsa: { title: "Validate Binary Search Tree", topic: "Bounds / inorder", source: "LeetCode Top Interview 150; NeetCode Trees" },
    skill: { title: "Portfolio checkpoint", desc: "Update portfolio sections: About, Skills, Experience, Certifications, Education, Contact.", source: "Your portfolio codebase" },
    career: { title: "Internship pipeline", desc: "Apply to 2 targeted roles; add today's project proof to LinkedIn/GitHub when meaningful." }
  },
  {
    day: 50, date: "Fri, 20 Nov", dateIso: "2026-11-20", type: "COLLEGE DAY", phase: "ENGINEERING HABITS",
    dsa: { title: "Kth Largest Element in an Array", topic: "Heap / quickselect", source: "LeetCode Top Interview 150; NeetCode Heap/Priority Queue" },
    skill: { title: "Heaps + SQL start", desc: "Learn SELECT, WHERE, ORDER BY and LIMIT; solve 4 interactive SQLBolt lessons.", source: "SQLBolt" },
    career: { title: "Internship pipeline", desc: "Apply to 2 targeted roles; add today's project proof to LinkedIn/GitHub when meaningful." }
  },
  // Days 51-60 (SQL + Backend Start)
  {
    day: 51, date: "Sat, 21 Nov", dateIso: "2026-11-21", type: "SATURDAY BUILD", phase: "SQL + BACKEND",
    dsa: { title: "K Closest Points to Origin", topic: "Heap / distance", source: "NeetCode Heap/Priority Queue" },
    skill: { title: "SQL filtering", desc: "Solve 5 SQLBolt constraint/filter exercises and write answers from memory.", source: "SQLBolt" },
    career: { title: "Internship pipeline", desc: "Apply to 2-3 targeted paid internships; maintain an application tracker." }
  },
  {
    day: 52, date: "Sun, 22 Nov", dateIso: "2026-11-22", type: "SUNDAY REVIEW", phase: "SQL + BACKEND",
    dsa: { title: "Task Scheduler", topic: "Greedy + heap/counts", source: "LeetCode Top Interview 150; NeetCode Heap/Priority Queue" },
    skill: { title: "SQL GROUP BY", desc: "Practise GROUP BY + aggregate functions on a toy dataset.", source: "SQLBolt Lessons 10-12" },
    career: { title: "Internship pipeline", desc: "Apply to 2-3 targeted paid internships; maintain an application tracker." }
  },
  {
    day: 53, date: "Mon, 23 Nov", dateIso: "2026-11-23", type: "COLLEGE DAY", phase: "SQL + BACKEND",
    dsa: { title: "Find Median from Data Stream", topic: "Two heaps", source: "LeetCode Top Interview 150; NeetCode Heap/Priority Queue" },
    skill: { title: "SQL JOINs", desc: "Do INNER JOIN + LEFT JOIN exercises and draw the relationship diagram.", source: "SQLBolt Lessons 6-8" },
    career: { title: "Internship pipeline", desc: "Apply to 2-3 targeted paid internships; maintain an application tracker." }
  },
  {
    day: 54, date: "Tue, 24 Nov", dateIso: "2026-11-24", type: "COLLEGE DAY", phase: "SQL + BACKEND",
    dsa: { title: "Merge Intervals", topic: "Sorting + intervals", source: "LeetCode Top Interview 150; NeetCode Intervals" },
    skill: { title: "SQL HAVING/subqueries", desc: "Finish one HAVING query + 2 subquery problems.", source: "SQLBolt Intermediate" },
    career: { title: "Internship pipeline", desc: "Apply to 2-3 targeted paid internships; maintain an application tracker." }
  },
  {
    day: 55, date: "Wed, 25 Nov", dateIso: "2026-11-25", type: "COLLEGE DAY", phase: "SQL + BACKEND",
    dsa: { title: "Insert Interval", topic: "Intervals", source: "LeetCode Top Interview 150; NeetCode Intervals" },
    skill: { title: "Database schema", desc: "Design tables for users, destinations, itineraries and saved items.", source: "PostgreSQL/MongoDB docs" },
    career: { title: "Internship pipeline", desc: "Apply to 2-3 targeted paid internships; maintain an application tracker." }
  },
  {
    day: 56, date: "Thu, 26 Nov", dateIso: "2026-11-26", type: "COLLEGE DAY", phase: "SQL + BACKEND",
    dsa: { title: "Non-overlapping Intervals", topic: "Greedy intervals", source: "LeetCode Top Interview 150; NeetCode Intervals" },
    skill: { title: "REST API fundamentals", desc: "Write 10 endpoint examples using GET/POST/PUT/PATCH/DELETE.", source: "Express Hello World + REST notes" },
    career: { title: "Internship pipeline", desc: "Apply to 2-3 targeted paid internships; maintain an application tracker." }
  },
  {
    day: 57, date: "Fri, 27 Nov", dateIso: "2026-11-27", type: "COLLEGE DAY", phase: "SQL + BACKEND",
    dsa: { title: "Meeting Rooms II", topic: "Intervals + heap", source: "NeetCode Intervals" },
    skill: { title: "Node basics", desc: "Create a small Node script and explain the event loop at a high level.", source: "Node.js Learn" },
    career: { title: "Internship pipeline", desc: "Apply to 2-3 targeted paid internships; maintain an application tracker." }
  },
  {
    day: 58, date: "Sat, 28 Nov", dateIso: "2026-11-28", type: "SATURDAY BUILD", phase: "SQL + BACKEND",
    dsa: { title: "Jump Game", topic: "Greedy", source: "LeetCode Top Interview 150; NeetCode Greedy" },
    skill: { title: "Express API", desc: "Build GET /destinations and GET /destinations/:id.", source: "Express official docs" },
    career: { title: "Internship pipeline", desc: "Apply to 2-3 targeted paid internships; maintain an application tracker." }
  },
  {
    day: 59, date: "Sun, 29 Nov", dateIso: "2026-11-29", type: "SUNDAY REVIEW", phase: "SQL + BACKEND",
    dsa: { title: "Gas Station", topic: "Greedy", source: "LeetCode Top Interview 150; NeetCode Greedy" },
    skill: { title: "API error handling", desc: "Add 404 and 500 responses plus basic input validation.", source: "Express docs" },
    career: { title: "Internship pipeline", desc: "Apply to 2-3 targeted paid internships; maintain an application tracker." }
  },
  {
    day: 60, date: "Mon, 30 Nov", dateIso: "2026-11-30", type: "COLLEGE DAY", phase: "SQL + BACKEND",
    dsa: { title: "Subsets", topic: "Backtracking", source: "LeetCode Top Interview 150; NeetCode Backtracking" },
    skill: { title: "Full-stack integration", desc: "Connect React frontend to Express API; show loading/error states.", source: "React + Express" },
    career: { title: "Internship pipeline", desc: "Apply to 2-3 targeted paid internships; maintain an application tracker." }
  },
  // Days 61-80 (Phase 4: Full-Stack + DP + Polish)
  {
    day: 61, date: "Tue, 01 Dec", dateIso: "2026-12-01", type: "COLLEGE DAY", phase: "FULL-STACK",
    dsa: { title: "Combination Sum", topic: "Backtracking", source: "LeetCode Top Interview 150; NeetCode Backtracking" },
    skill: { title: "Graph fundamentals", desc: "Explain adjacency list, DFS, BFS and visited set.", source: "NeetCode Graphs" },
    career: { title: "Internship pipeline", desc: "Apply to 3 targeted roles; practise a 60-second self-introduction aloud." }
  },
  {
    day: 62, date: "Wed, 02 Dec", dateIso: "2026-12-02", type: "COLLEGE DAY", phase: "FULL-STACK",
    dsa: { title: "Permutations", topic: "Backtracking", source: "LeetCode Top Interview 150; NeetCode Backtracking" },
    skill: { title: "Graph coding workflow", desc: "Solve one grid problem with a hand-drawn traversal map before coding.", source: "NeetCode Graphs" },
    career: { title: "Internship pipeline", desc: "Apply to 3 targeted roles; practise a 60-second self-introduction aloud." }
  },
  {
    day: 63, date: "Thu, 03 Dec", dateIso: "2026-12-03", type: "COLLEGE DAY", phase: "FULL-STACK",
    dsa: { title: "Word Search", topic: "Backtracking + grid", source: "LeetCode Top Interview 150; NeetCode Backtracking" },
    skill: { title: "Auth concepts", desc: "Understand session vs token authentication; do not copy insecure auth code.", source: "MDN Web Security + OWASP basics" },
    career: { title: "Internship pipeline", desc: "Apply to 3 targeted roles; practise a 60-second self-introduction aloud." }
  },
  {
    day: 64, date: "Fri, 04 Dec", dateIso: "2026-12-04", type: "COLLEGE DAY", phase: "FULL-STACK",
    dsa: { title: "Number of Islands", topic: "Graph DFS/BFS", source: "LeetCode Top Interview 150; NeetCode Graphs" },
    skill: { title: "Database integration", desc: "Connect Express to your chosen DB and store destinations.", source: "PostgreSQL/Prisma or MongoDB" },
    career: { title: "Internship pipeline", desc: "Apply to 3 targeted roles; practise a 60-second self-introduction aloud." }
  },
  {
    day: 65, date: "Sat, 05 Dec", dateIso: "2026-12-05", type: "SATURDAY BUILD", phase: "FULL-STACK",
    dsa: { title: "Clone Graph", topic: "Graph traversal", source: "LeetCode Top Interview 150; NeetCode Graphs" },
    skill: { title: "CRUD", desc: "Implement create/read/update/delete for a non-sensitive project resource.", source: "Express + DB docs" },
    career: { title: "Internship pipeline", desc: "Apply to 3 targeted roles; practise a 60-second self-introduction aloud." }
  },
  {
    day: 66, date: "Sun, 06 Dec", dateIso: "2026-12-06", type: "SUNDAY REVIEW", phase: "FULL-STACK",
    dsa: { title: "Course Schedule", topic: "Topological sort / DFS", source: "LeetCode Top Interview 150; NeetCode Graphs" },
    skill: { title: "API testing", desc: "Test all endpoints in Postman/Thunder Client and save examples.", source: "Postman docs" },
    career: { title: "Internship pipeline", desc: "Apply to 3 targeted roles; practise a 60-second self-introduction aloud." }
  },
  {
    day: 67, date: "Mon, 07 Dec", dateIso: "2026-12-07", type: "COLLEGE DAY", phase: "FULL-STACK",
    dsa: { title: "Rotting Oranges", topic: "Multi-source BFS", source: "LeetCode Top Interview 150; NeetCode Graphs" },
    skill: { title: "Full-stack architecture", desc: "Draw browser -> API -> DB -> response flow and add it to README.", source: "Your project" },
    career: { title: "Internship pipeline", desc: "Apply to 3 targeted roles; practise a 60-second self-introduction aloud." }
  },
  {
    day: 68, date: "Tue, 08 Dec", dateIso: "2026-12-08", type: "COLLEGE DAY", phase: "FULL-STACK",
    dsa: { title: "Pacific Atlantic Water Flow", topic: "Reverse DFS/BFS", source: "LeetCode Top Interview 150; NeetCode Graphs" },
    skill: { title: "Full-stack checkpoint", desc: "Deploy frontend + API + database where practical; document limits.", source: "Vercel/Render/Railway" },
    career: { title: "Internship pipeline", desc: "Apply to 3 targeted roles; practise a 60-second self-introduction aloud." }
  },
  {
    day: 69, date: "Wed, 09 Dec", dateIso: "2026-12-09", type: "COLLEGE DAY", phase: "FULL-STACK",
    dsa: { title: "Graph Valid Tree", topic: "DFS/BFS + cycle detection", source: "NeetCode Graphs" },
    skill: { title: "DP fundamentals", desc: "Learn state, transition, base case; convert climbing stairs recursively -> DP.", source: "NeetCode 1-D DP" },
    career: { title: "Internship pipeline", desc: "Apply to 3 targeted roles; practise a 60-second self-introduction aloud." }
  },
  {
    day: 70, date: "Thu, 10 Dec", dateIso: "2026-12-10", type: "COLLEGE DAY", phase: "FULL-STACK",
    dsa: { title: "Climbing Stairs", topic: "1D DP", source: "LeetCode Top Interview 150; NeetCode 1-D DP" },
    skill: { title: "Memoization vs tabulation", desc: "Implement one problem both top-down and bottom-up.", source: "NeetCode 1-D DP" },
    career: { title: "Internship pipeline", desc: "Apply to 3 targeted roles; practise a 60-second self-introduction aloud." }
  },
  {
    day: 71, date: "Fri, 11 Dec", dateIso: "2026-12-11", type: "COLLEGE DAY", phase: "DP + POLISH",
    dsa: { title: "House Robber", topic: "1D DP", source: "LeetCode Top Interview 150; NeetCode 1-D DP" },
    skill: { title: "2D DP", desc: "Draw an LCS/unique paths table manually for a small input.", source: "NeetCode 2-D DP" },
    career: { title: "Internship pipeline", desc: "Apply to 3 targeted paid roles; practise explaining one project architecture without slides." }
  },
  {
    day: 72, date: "Sat, 12 Dec", dateIso: "2026-12-12", type: "SATURDAY BUILD", phase: "DP + POLISH",
    dsa: { title: "Coin Change", topic: "1D DP", source: "LeetCode Top Interview 150; NeetCode 1-D DP" },
    skill: { title: "DP interview notebook", desc: "Write 5 DP pattern triggers in your Interview Book.", source: "Interview Book" },
    career: { title: "Internship pipeline", desc: "Apply to 3 targeted paid roles; practise explaining one project architecture without slides." }
  },
  {
    day: 73, date: "Sun, 13 Dec", dateIso: "2026-12-13", type: "SUNDAY REVIEW", phase: "DP + POLISH",
    dsa: { title: "Longest Increasing Subsequence", topic: "DP / binary search idea", source: "LeetCode Top Interview 150; NeetCode 1-D DP" },
    skill: { title: "Project auth mockup", desc: "Design login/register/profile UX even if authentication is not production-grade yet.", source: "Figma or UI workflow" },
    career: { title: "Internship pipeline", desc: "Apply to 3 targeted paid roles; practise explaining one project architecture without slides." }
  },
  {
    day: 74, date: "Mon, 14 Dec", dateIso: "2026-12-14", type: "COLLEGE DAY", phase: "DP + POLISH",
    dsa: { title: "Longest Common Subsequence", topic: "2D DP", source: "LeetCode Top Interview 150; NeetCode 2-D DP" },
    skill: { title: "Project performance", desc: "Find 3 unnecessary renders/requests and reduce at least 1.", source: "React DevTools + browser DevTools" },
    career: { title: "Internship pipeline", desc: "Apply to 3 targeted paid roles; practise explaining one project architecture without slides." }
  },
  {
    day: 75, date: "Tue, 15 Dec", dateIso: "2026-12-15", type: "COLLEGE DAY", phase: "DP + POLISH",
    dsa: { title: "Partition Equal Subset Sum", topic: "0/1 knapsack DP", source: "LeetCode Top Interview 150; NeetCode 2-D DP" },
    skill: { title: "Project accessibility", desc: "Check keyboard navigation, labels, focus states and alt text.", source: "MDN accessibility guidance" },
    career: { title: "Internship pipeline", desc: "Apply to 3 targeted paid roles; practise explaining one project architecture without slides." }
  },
  {
    day: 76, date: "Wed, 16 Dec", dateIso: "2026-12-16", type: "COLLEGE DAY", phase: "DP + POLISH",
    dsa: { title: "Unique Paths", topic: "Grid DP", source: "LeetCode Top Interview 150; NeetCode 2-D DP" },
    skill: { title: "Project README final draft", desc: "Add screenshots, features, setup, API endpoints, architecture and future work.", source: "GitHub Docs" },
    career: { title: "Internship pipeline", desc: "Apply to 3 targeted paid roles; practise explaining one project architecture without slides." }
  },
  {
    day: 77, date: "Thu, 17 Dec", dateIso: "2026-12-17", type: "COLLEGE DAY", phase: "DP + POLISH",
    dsa: { title: "Decode Ways", topic: "1D DP", source: "LeetCode Top Interview 150; NeetCode 1-D DP" },
    skill: { title: "Project release", desc: "Create a release tag / final milestone and record a 2-minute demo.", source: "GitHub Docs" },
    career: { title: "Internship pipeline", desc: "Apply to 3 targeted paid roles; practise explaining one project architecture without slides." }
  },
  {
    day: 78, date: "Fri, 18 Dec", dateIso: "2026-12-18", type: "COLLEGE DAY", phase: "DP + POLISH",
    dsa: { title: "Word Break", topic: "DP + string dictionary", source: "LeetCode Top Interview 150; NeetCode 1-D DP" },
    skill: { title: "System design lite", desc: "Design Culture Smart Traveller on paper: client, API, DB, cache, auth, deployment.", source: "Your project + system design notes" },
    career: { title: "Internship pipeline", desc: "Apply to 3 targeted paid roles; practise explaining one project architecture without slides." }
  },
  {
    day: 79, date: "Sat, 19 Dec", dateIso: "2026-12-19", type: "SATURDAY BUILD", phase: "DP + POLISH",
    dsa: { title: "Edit Distance", topic: "2D DP", source: "LeetCode Top Interview 150; NeetCode 2-D DP" },
    skill: { title: "HTTP/REST interview drill", desc: "Answer 10 questions on HTTP methods, status codes, headers, REST, cookies and tokens.", source: "MDN HTTP + Express docs" },
    career: { title: "Internship pipeline", desc: "Apply to 3 targeted paid roles; practise explaining one project architecture without slides." }
  },
  {
    day: 80, date: "Sun, 20 Dec", dateIso: "2026-12-20", type: "SUNDAY REVIEW", phase: "DP + POLISH",
    dsa: { title: "Maximum Product Subarray", topic: "DP / min-max tracking", source: "LeetCode Top Interview 150; NeetCode 1-D DP" },
    skill: { title: "Resume v2", desc: "Rewrite project bullets as action + technology + outcome. Keep to one page.", source: "Your resume + job descriptions" },
    career: { title: "Internship pipeline", desc: "Apply to 3 targeted paid roles; practise explaining one project architecture without slides." }
  },
  // Days 81-90 (Phase 5: Interview + Application Sprint)
  {
    day: 81, date: "Mon, 21 Dec", dateIso: "2026-12-21", type: "COLLEGE DAY", phase: "INTERVIEW + APPLICATION",
    dsa: { title: "Longest Palindromic Substring", topic: "Expand around center", source: "LeetCode Top Interview 150; NeetCode 2-D DP" },
    skill: { title: "LinkedIn refresh", desc: "Headline, About, Featured, projects and GitHub links.", source: "LinkedIn profile" },
    career: { title: "Internship pipeline", desc: "Career: application sprint + interview prep; do not wait for the perfect profile before applying." }
  },
  {
    day: 82, date: "Tue, 22 Dec", dateIso: "2026-12-22", type: "COLLEGE DAY", phase: "INTERVIEW + APPLICATION",
    dsa: { title: "Palindromic Substrings", topic: "Expand around center", source: "LeetCode Top Interview 150; NeetCode 2-D DP" },
    skill: { title: "GitHub refresh", desc: "Pin strongest repos and make the profile README consistent with resume.", source: "GitHub Docs Profile" },
    career: { title: "Internship pipeline", desc: "Career: application sprint + interview prep; do not wait for the perfect profile before applying." }
  },
  {
    day: 83, date: "Wed, 23 Dec", dateIso: "2026-12-23", type: "COLLEGE DAY", phase: "INTERVIEW + APPLICATION",
    dsa: { title: "Network Delay Time", topic: "Dijkstra", source: "LeetCode Top Interview 150; NeetCode Graphs" },
    skill: { title: "Mock technical round", desc: "45 minutes: 1 DSA + project architecture + 5 CS fundamentals.", source: "Pramp / self-recording" },
    career: { title: "Internship pipeline", desc: "Career: application sprint + interview prep; do not wait for the perfect profile before applying." }
  },
  {
    day: 84, date: "Thu, 24 Dec", dateIso: "2026-12-24", type: "COLLEGE DAY", phase: "INTERVIEW + APPLICATION",
    dsa: { title: "Course Schedule II", topic: "Topological sort", source: "LeetCode Top Interview 150; NeetCode Graphs" },
    skill: { title: "Weak-topic repair", desc: "Review your 5 lowest-scoring DSA categories and re-solve 2.", source: "LeetCode + Interview Book" },
    career: { title: "Internship pipeline", desc: "Career: application sprint + interview prep; do not wait for the perfect profile before applying." }
  },
  {
    day: 85, date: "Fri, 25 Dec", dateIso: "2026-12-25", type: "COLLEGE DAY", phase: "INTERVIEW + APPLICATION",
    dsa: { title: "Min Cost Climbing Stairs", topic: "1D DP", source: "LeetCode Top Interview 150; NeetCode 1-D DP" },
    skill: { title: "HR answers", desc: "Prepare 6 stories: hackathon, leadership, failure, teamwork, learning, conflict.", source: "Your real experiences" },
    career: { title: "Internship pipeline", desc: "Career: application sprint + interview prep; do not wait for the perfect profile before applying." }
  },
  {
    day: 86, date: "Sat, 26 Dec", dateIso: "2026-12-26", type: "SATURDAY BUILD", phase: "INTERVIEW + APPLICATION",
    dsa: { title: "House Robber II", topic: "Circular DP", source: "LeetCode Top Interview 150; NeetCode 1-D DP" },
    skill: { title: "DBMS revision", desc: "Keys, normalization, joins, indexes, ACID, transactions; answer 15 questions.", source: "Neso Academy / GFG DBMS" },
    career: { title: "Internship pipeline", desc: "Career: application sprint + interview prep; do not wait for the perfect profile before applying." }
  },
  {
    day: 87, date: "Sun, 27 Dec", dateIso: "2026-12-27", type: "SUNDAY REVIEW", phase: "INTERVIEW + APPLICATION",
    dsa: { title: "Cheapest Flights Within K Stops", topic: "Shortest path / constrained BFS", source: "LeetCode Top Interview 150; NeetCode Graphs" },
    skill: { title: "OS + CN revision", desc: "Process/thread, deadlock, paging, TCP/UDP, HTTP/HTTPS, DNS.", source: "Neso Academy / GFG" },
    career: { title: "Internship pipeline", desc: "Career: application sprint + interview prep; do not wait for the perfect profile before applying." }
  },
  {
    day: 88, date: "Mon, 28 Dec", dateIso: "2026-12-28", type: "COLLEGE DAY", phase: "INTERVIEW + APPLICATION",
    dsa: { title: "Mixed DSA Mock #1", topic: "Pick 2 unseen medium problems; 60 mins total", source: "LeetCode timed mode; interview.io style" },
    skill: { title: "Final application sprint", desc: "Search 15 targeted roles; tailor resume to 5; apply to 10.", source: "LinkedIn, Unstop, Wellfound, Internshala" },
    career: { title: "Internship pipeline", desc: "Career: application sprint + interview prep; do not wait for the perfect profile before applying." }
  },
  {
    day: 89, date: "Tue, 29 Dec", dateIso: "2026-12-29", type: "COLLEGE DAY", phase: "INTERVIEW + APPLICATION",
    dsa: { title: "Mixed DSA Mock #2", topic: "Pick 2 unseen medium problems; 60 mins total", source: "LeetCode timed mode" },
    skill: { title: "Final profile audit", desc: "Open resume, LinkedIn, GitHub and portfolio side-by-side; fix every mismatch.", source: "All profiles" },
    career: { title: "Internship pipeline", desc: "Career: application sprint + interview prep; do not wait for the perfect profile before applying." }
  },
  {
    day: 90, date: "Wed, 30 Dec", dateIso: "2026-12-30", type: "COLLEGE DAY", phase: "INTERVIEW + APPLICATION",
    dsa: { title: "Final Weakness Set", topic: "Re-solve your 5 weakest problems without notes", source: "LeetCode submissions + Interview Book" },
    skill: { title: "90-day review", desc: "Count DSA, project hours, applications, posts, commits, interviews and lessons learned.", source: "90-day tracker" },
    career: { title: "Internship pipeline", desc: "Career: application sprint + interview prep; do not wait for the perfect profile before applying." }
  }
];

// PDF Page 3: Weekday Schedule
export const WEEKDAY_TIMETABLE = [
  { time: "6:05 AM", task: "Wake + 20-25 min workout/mobility", rule: "Short, repeatable, no perfection." },
  { time: "6:25-6:50 AM", task: "Bath, get ready, breakfast", rule: "Keep phone out of the routine." },
  { time: "7:00 AM", task: "Leave home", rule: "College commute = learning block." },
  { time: "Bus / Commute", task: "DSA concept / JS / CS / SQL rotation", rule: "Listen/read; save notes for later coding." },
  { time: "9:00 AM - 4:00 PM", task: "College classes", rule: "Classes first. Use 3:30-4:00 for DSA/coding when free." },
  { time: "4:00-5:00 PM", task: "Travel to tuition", rule: "Eat/snack, decompress." },
  { time: "5:00-6:30 PM", task: "Laksh tuition", rule: "Work block." },
  { time: "6:30-7:00 PM", task: "Travel", rule: "Reset, no guilt about not coding." },
  { time: "7:00-8:30 PM", task: "Prachi tuition", rule: "Work block." },
  { time: "~9:00 PM", task: "Home + dinner", rule: "Do not start a 2-hour night session." },
  { time: "9:30-10:05 PM", task: "Daily review + small shutdown task", rule: "Update tracker, pack bag, prepare tomorrow." },
  { time: "10:30 PM", task: "Sleep", rule: "Protect consistency." }
];

// PDF Page 4: Weekend System
export const WEEKEND_SYSTEM = {
  saturday: {
    title: "BUILD DAY",
    tasks: [
      { name: "DSA", duration: "90 minutes" },
      { name: "Project", duration: "2 hours deep work" },
      { name: "SQL / CS", duration: "60 minutes" },
      { name: "GitHub / docs", duration: "30 minutes" },
      { name: "Workout + social / family time", duration: "Evening" }
    ]
  },
  sunday: {
    title: "RESET + CAREER DAY",
    tasks: [
      { name: "Workout / walk", duration: "Morning" },
      { name: "DSA", duration: "60-90 minutes" },
      { name: "Project", duration: "90-120 minutes" },
      { name: "Applications", duration: "60 minutes" },
      { name: "Resume / LinkedIn / GitHub", duration: "30-45 minutes" },
      { name: "Weekly review + plan next week", duration: "Shutdown block" }
    ]
  }
};

// PDF Page 37: Flagship Project
export const FLAGSHIP_PROJECT = {
  name: "Culture Smart Traveller",
  rule: "Do not start a shiny new project. Upgrade the project you already have. Make it look and behave like a real product.",
  frontendScope: [
    "React + Vite + Tailwind",
    "Reusable UI components",
    "Responsive design",
    "Search + filters",
    "Itinerary builder",
    "Saved destinations/trips",
    "Loading, empty and error states",
    "Accessible forms and navigation"
  ],
  engineeringScope: [
    "REST API with Node/Express",
    "Database for destinations/users/trips",
    "CRUD for a project resource",
    "Environment variables",
    "Deployment",
    "README + architecture diagram",
    "Demo video",
    "Clean Git history / PR workflow"
  ],
  intelligentFeature: "Culturally appropriate itinerary generation based on destination, trip length and interests (built as a real functional feature with clear inputs/outputs)."
};

// PDF Page 38: Supporting Project Stories
export const SUPPORTING_PROJECTS = [
  {
    name: "MediMap",
    story: "Health-tech problem solving + OCR / prescription flow + pharmacy search / price comparison + filters + product thinking.",
    proof: "Working demo, architecture diagram, screenshots, trade-offs, what changed after mentor feedback."
  },
  {
    name: "SAMPRAAN",
    story: "Identity + RBAC + asset management + blockchain/security concepts.",
    proof: "Role-based access, provenance, identity flow, security choices and the real-world problem solved."
  },
  {
    name: "CircuitCrate + Hackathons",
    story: "Robotics / Arduino teaching work, hackathons, coordination and leadership as evidence of teamwork, ownership, communication, building under pressure.",
    proof: "Strengthens your engineering story without replacing technical proof."
  }
];

// PDF Page 42: Scorecard Targets
export const SCORECARD_TARGETS = [
  { metric: "DSA problems understood", target: "~75 + weak-problem re-solves", initialValue: "14 solved" },
  { metric: "Flagship project shipped", target: "1 full-stack Culture Smart Traveller", initialValue: "In Progress" },
  { metric: "MediMap polished", target: "Yes + demo / README", initialValue: "Case study ready" },
  { metric: "SAMPRAAN story ready", target: "Yes", initialValue: "Ready" },
  { metric: "SQL practice", target: "20-30 solid queries", initialValue: "8 queries" },
  { metric: "Meaningful GitHub commits", target: "4-5 / week when building", initialValue: "18 commits/wk" },
  { metric: "LinkedIn posts", target: "~1 / week", initialValue: "2 posts published" },
  { metric: "Targeted internship applications", target: "Consistent pipeline from Week 4", initialValue: "Pipeline initiated" },
  { metric: "Mock interviews", target: "4+", initialValue: "1 scheduled" },
  { metric: "Sleep consistency", target: "Most nights near 10:30 PM", initialValue: "Active" }
];

// PDF Page 43-44: Source Library
export const SOURCE_LIBRARY = [
  { name: "LeetCode Top Interview 150", url: "https://leetcode.com/studyplan/top-interview-150/", desc: "Primary DSA question set; use LeetCode for submissions and editorials." },
  { name: "NeetCode Roadmap", url: "https://neetcode.io/roadmap", desc: "Topic explanations and visual patterns when stuck." },
  { name: "Striver A2Z DSA", url: "https://takeuforward.org/prep-hub/strivers-a2z-dsa-sheet", desc: "Alternate explanation path; do not run multiple sheets in parallel." },
  { name: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/", desc: "JavaScript language fundamentals and browser concepts." },
  { name: "React Learn", url: "https://react.dev/learn", desc: "Components, state, events, forms, and data flow." },
  { name: "Tailwind CSS", url: "https://tailwindcss.com/docs/", desc: "Utility-first CSS framework for modern web UIs." },
  { name: "Redux Toolkit Usage Guide", url: "https://redux-toolkit.js.org/usage/usage-guide/", desc: "Store, slices, and global state patterns." },
  { name: "SQLBolt", url: "https://sqlbolt.com/", desc: "Interactive SQL lessons and exercises." },
  { name: "Unstop Internships", url: "https://unstop.com/", desc: "Student internships and hiring challenges." },
  { name: "Wellfound Jobs", url: "https://wellfound.com/jobs", desc: "Startup software roles and paid internship listings." },
  { name: "Neso Academy", url: "https://www.youtube.com/@nesoacademy", desc: "CS fundamentals: OS, DBMS, Computer Networks." }
];

// Initial state builder for all 90 days
export function build90DaysInitialState() {
  const days = {};
  
  SCHEDULE_DAYS.forEach((item) => {
    const isPast = item.day < 14;
    const isToday = item.day === 14;

    days[item.day] = {
      day: item.day,
      date: item.date,
      dateIso: item.dateIso,
      type: item.type,
      phase: item.phase,
      // Status: 'green', 'yellow', 'red'
      status: isPast ? 'green' : (isToday ? 'green' : 'pending'),
      examOverrideActive: false,
      proofText: isPast ? "Pushed to GitHub & logged takeaway in notes" : "",
      timeSpent: isPast ? "75 mins" : "",
      // Core Checklist from PDF
      dsaCompleted: isPast,
      skillCompleted: isPast,
      careerCompleted: isPast,
      // Glow-up / Skincare Checklist
      hydrationCompleted: isPast || isToday,
      amSkincareCompleted: isPast || isToday,
      pmSkincareCompleted: isPast,
      workoutCompleted: isPast,
      sleepBefore1030: isPast,
      notes: isPast ? `Day ${item.day} takeaways logged. C++ solution optimized.` : ""
    };
  });

  return days;
}
