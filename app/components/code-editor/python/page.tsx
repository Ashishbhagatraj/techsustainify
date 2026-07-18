"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// ====================== TYPES ======================

type OutputLine = {
  type: "stdout" | "stderr" | "info";
  text: string;
};

// ====================== PYODIDE TYPES ======================

declare global {
  interface Window {
    loadPyodide: (config: { indexURL: string }) => Promise<PyodideInstance>;
    pyodide: PyodideInstance | null;
  }
}

interface PyodideInstance {
  runPythonAsync: (code: string) => Promise<unknown>;
  setStdout: (config: { batched: (text: string) => void }) => void;
  setStderr: (config: { batched: (text: string) => void }) => void;
}

// ====================== DEFAULT CODE SNIPPETS ======================

const EXAMPLES: { label: string; code: string }[] = [
  {
    label: "Hello World",
    code: `# Python Hello World
print("Hello, World!")
print("Welcome to Python Live Editor")`,
  },
  {
    label: "Loops",
    code: `# For loop example
fruits = ["apple", "banana", "cherry", "mango"]

for i, fruit in enumerate(fruits, 1):
    print(f"{i}. {fruit.capitalize()}")

print("\\nTotal fruits:", len(fruits))`,
  },
  {
    label: "Functions",
    code: `# Functions in Python
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

for num in range(1, 8):
    print(f"{num}! = {factorial(num)}")`,
  },
  {
    label: "List Comprehension",
    code: `# List Comprehension
squares   = [x**2 for x in range(1, 11)]
evens     = [x for x in range(1, 21) if x % 2 == 0]
words     = ["python", "java", "rust", "go"]
upper     = [w.upper() for w in words]

print("Squares:", squares)
print("Evens  :", evens)
print("Upper  :", upper)`,
  },
  {
    label: "Classes",
    code: `# Object-Oriented Programming
class Animal:
    def __init__(self, name, sound):
        self.name  = name
        self.sound = sound

    def speak(self):
        return f"{self.name} says {self.sound}!"

    def __repr__(self):
        return f"Animal(name={self.name!r})"

dog = Animal("Dog", "Woof")
cat = Animal("Cat", "Meow")

for animal in [dog, cat]:
    print(animal.speak())`,
  },
];

// ====================== STYLES ======================

const css = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap');

  .py-editor-root {
    --bg:          #0d1117;
    --surface:     #161b22;
    --surface2:    #1c2333;
    --border:      #30363d;
    --accent:      #3b82f6;
    --accent2:     #fbbf24;
    --green:       #22c55e;
    --red:         #ef4444;
    --text:        #e6edf3;
    --text-dim:    #8b949e;
    --text-dimmer: #484f58;
    --font-mono:   'JetBrains Mono', monospace;
    --font-ui:     'Outfit', sans-serif;
    --radius:      10px;
    font-family: var(--font-ui);
    background: var(--bg);
    color: var(--text);
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid var(--border);
    box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(59,130,246,0.08);
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }

  /* ── Top bar ── */
  .py-topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1.1rem;
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  .py-topbar-left {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
  .py-dot { width:12px; height:12px; border-radius:50%; }
  .py-dot-r { background:#ff5f57; }
  .py-dot-y { background:#febc2e; }
  .py-dot-g { background:#28c840; }

  .py-lang-badge {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background: rgba(59,130,246,0.12);
    border: 1px solid rgba(59,130,246,0.25);
    color: #60a5fa;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 20px;
    letter-spacing: 0.03em;
  }
  .py-lang-badge svg { width:14px; height:14px; }

  .py-topbar-right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  /* Examples dropdown */
  .py-examples-select {
    background: var(--surface2);
    color: var(--text-dim);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 4px 8px;
    font-family: var(--font-ui);
    font-size: 0.78rem;
    cursor: pointer;
    outline: none;
    transition: border-color 0.2s;
  }
  .py-examples-select:focus { border-color: var(--accent); }

  /* ── Run button ── */
  .py-run-btn {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 5px 14px;
    border-radius: 7px;
    border: none;
    font-family: var(--font-ui);
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.18s;
    background: var(--accent);
    color: #fff;
    letter-spacing: 0.02em;
  }
  .py-run-btn:hover:not(:disabled) {
    background: #2563eb;
    transform: translateY(-1px);
    box-shadow: 0 4px 14px rgba(59,130,246,0.4);
  }
  .py-run-btn:disabled { opacity: 0.55; cursor: not-allowed; transform: none; }
  .py-run-btn.running { background: #d97706; }

  /* Clear button */
  .py-clear-btn {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 5px 10px;
    border-radius: 7px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--text-dim);
    font-family: var(--font-ui);
    font-size: 0.78rem;
    cursor: pointer;
    transition: all 0.18s;
  }
  .py-clear-btn:hover { border-color: var(--red); color: var(--red); }

  /* ── Panes ── */
 .py-panes {
  display: flex;
  flex-direction: column;
  min-height: 360px;
}
  @media (max-width: 640px) {
    .py-panes { grid-template-columns: 1fr; }
  }

  /* ── Editor pane ── */
  .py-editor-pane {
    border-right: 1px solid var(--border);
    display: flex;
    flex-direction: column;
      border-right: none;
  border-bottom: 1px solid var(--border);
  }
  .py-pane-label {
    padding: 0.45rem 1rem;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-dimmer);
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .py-editor-wrap {
    display: flex;
    flex: 1;
    overflow: hidden;
    position: relative;
  }

  /* Line numbers */
  .py-line-nums {
    padding: 1rem 0;
    background: var(--surface);
    border-right: 1px solid var(--border);
    user-select: none;
    min-width: 42px;
    text-align: right;
  }
  .py-line-num {
    display: block;
    padding: 0 10px 0 8px;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    line-height: 1.6;
    color: var(--text-dimmer);
  }
  .py-line-num.active { color: var(--text-dim); }

  /* Textarea */
  .py-textarea {
    flex: 1;
    padding: 1rem;
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-mono);
    font-size: 0.82rem;
    line-height: 1.6;
    border: none;
    outline: none;
    resize: none;
    tab-size: 4;
    caret-color: var(--accent);
    overflow-y: auto;
    white-space: pre;
    overflow-x: auto;
  }
  .py-textarea::selection { background: rgba(59,130,246,0.25); }

  /* ── Output pane ── */
  .py-output-pane {
    display: flex;
    flex-direction: column;
    background: var(--bg);
  
  }

  .py-output-body {
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
    font-family: var(--font-mono);
    font-size: 0.8rem;
    line-height: 1.65;
  }

  .py-output-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 0.5rem;
    color: var(--text-dimmer);
    font-size: 0.8rem;
    font-family: var(--font-mono);
  }
  .py-output-empty svg { opacity: 0.3; }

  .py-out-line { margin: 0; white-space: pre-wrap; word-break: break-all; }
  .py-out-stdout { color: #e6edf3; }
  .py-out-stderr { color: #f87171; }
  .py-out-info   { color: #60a5fa; font-style: italic; }

  /* Status bar */
  .py-statusbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.4rem 1rem;
    background: var(--surface);
    border-top: 1px solid var(--border);
    font-size: 0.7rem;
    font-family: var(--font-mono);
    color: var(--text-dimmer);
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  .py-status-indicator {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  .py-status-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: var(--text-dimmer);
    transition: background 0.3s;
  }
  .py-status-dot.ready   { background: var(--green); box-shadow: 0 0 6px var(--green); }
  .py-status-dot.loading { background: var(--accent2); animation: pulse 1s infinite; }
  .py-status-dot.running { background: var(--accent);  animation: pulse 0.6s infinite; }
  .py-status-dot.error   { background: var(--red); }

  @keyframes pulse {
    0%,100% { opacity:1; }
    50%      { opacity:0.4; }
  }

  /* Loading overlay */
  .py-loading-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(13,17,23,0.85);
    gap: 0.6rem;
    z-index: 10;
    backdrop-filter: blur(2px);
    font-size: 0.82rem;
    color: var(--text-dim);
    font-family: var(--font-mono);
  }
  .py-spinner {
    width: 28px; height: 28px;
    border: 2.5px solid rgba(59,130,246,0.2);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* Execution time badge */
  .py-exec-time {
    background: rgba(34,197,94,0.12);
    border: 1px solid rgba(34,197,94,0.2);
    color: #4ade80;
    padding: 1px 6px;
    border-radius: 4px;
    font-size: 0.68rem;
  }
`;

// ====================== COMPONENT ======================

export default function PythonLiveEditor({
  initialCode = EXAMPLES[0].code,
}: {
  initialCode?: string;
}) {
  const [code, setCode]           = useState(initialCode);
  const [output, setOutput]       = useState<OutputLine[]>([]);
  const [pyStatus, setPyStatus]   = useState<"idle" | "loading" | "ready" | "running" | "error">("idle");
  const [execTime, setExecTime]   = useState<number | null>(null);
  const [cursorLine, setCursorLine] = useState(1);

  const pyodideRef  = useRef<PyodideInstance | null>(null);
  const outputRef   = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // ── Load Pyodide on mount ──
  useEffect(() => {
    if (typeof window === "undefined") return;
    setPyStatus("loading");

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js";
    script.onload = async () => {
      try {
        const pyodide = await window.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/",
        });
        pyodideRef.current = pyodide;
        window.pyodide = pyodide;
        setPyStatus("ready");
      } catch {
        setPyStatus("error");
      }
    };
    script.onerror = () => setPyStatus("error");
    document.head.appendChild(script);

    return () => { document.head.removeChild(script); };
  }, []);

  // ── Auto-scroll output ──
  useEffect(() => {
    if (outputRef.current)
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, [output]);

  // ── Run code ──
  const runCode = useCallback(async () => {
    if (!pyodideRef.current || pyStatus !== "ready") return;

    setOutput([]);
    setExecTime(null);
    setPyStatus("running");

    const lines: OutputLine[] = [];
    const pyodide = pyodideRef.current;

    pyodide.setStdout({ batched: (text) => lines.push({ type: "stdout", text }) });
    pyodide.setStderr({ batched: (text) => lines.push({ type: "stderr", text }) });

    const t0 = performance.now();
    try {
      await pyodide.runPythonAsync(code);
      const elapsed = performance.now() - t0;
      setExecTime(Math.round(elapsed));
      if (lines.length === 0)
        lines.push({ type: "info", text: "✓ Code ran successfully (no output)" });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      lines.push({ type: "stderr", text: msg });
    }

    setOutput(lines);
    setPyStatus("ready");
  }, [code, pyStatus]);

  // ── Keyboard shortcut: Ctrl/Cmd + Enter ──
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      runCode();
      return;
    }
    // Tab → 4 spaces
    if (e.key === "Tab") {
      e.preventDefault();
      const el = e.currentTarget;
      const { selectionStart: s, selectionEnd: end } = el;
      const newCode = code.slice(0, s) + "    " + code.slice(end);
      setCode(newCode);
      requestAnimationFrame(() => { el.selectionStart = el.selectionEnd = s + 4; });
    }
  };

  const lineCount = code.split("\n").length;

  // ── Status label ──
  const statusLabels: Record<string, string> = {
    idle:    "Initializing…",
    loading: "Loading Python…",
    ready:   "Python Ready",
    running: "Running…",
    error:   "Load Failed",
  };

  const handleExampleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const ex = EXAMPLES.find(x => x.label === e.target.value);
    if (ex) { setCode(ex.code); setOutput([]); setExecTime(null); }
  };

  const handleCursorMove = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const el = e.currentTarget;
    const lines = el.value.slice(0, el.selectionStart).split("\n");
    setCursorLine(lines.length);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="py-editor-root">

        {/* ── Top bar ── */}
        <div className="py-topbar">
          <div className="py-topbar-left">
            <div className="py-dot py-dot-r" />
            <div className="py-dot py-dot-y" />
            <div className="py-dot py-dot-g" />
            <span className="py-lang-badge">
              {/* Python logo mark */}
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C9.79 2 8 3.79 8 6v2h4v1H6C3.79 9 2 10.79 2 13v3c0 2.21 1.79 4 4 4h1v-2H6c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2h6c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4z" fill="#60a5fa"/>
                <path d="M12 22c2.21 0 4-1.79 4-4v-2h-4v-1h6c2.21 0 4-1.79 4-4v-3c0-2.21-1.79-4-4-4h-1v2h1c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2h-6c-2.21 0-4 1.79-4 4v2c0 2.21 1.79 4 4 4z" fill="#fbbf24"/>
                <circle cx="9.5" cy="6.5" r="1" fill="#fff"/>
                <circle cx="14.5" cy="17.5" r="1" fill="#fff"/>
              </svg>
              Python 3
            </span>
          </div>

          <div className="py-topbar-right">
            <select className="py-examples-select" onChange={handleExampleChange} defaultValue="">
              <option value="" disabled>📂 Examples</option>
              {EXAMPLES.map(ex => (
                <option key={ex.label} value={ex.label}>{ex.label}</option>
              ))}
            </select>

            <button
              className="py-clear-btn"
              onClick={() => { setOutput([]); setExecTime(null); }}
            >
              🗑 Clear
            </button>

            <button
              className={`py-run-btn ${pyStatus === "running" ? "running" : ""}`}
              onClick={runCode}
              disabled={pyStatus !== "ready"}
            >
              {pyStatus === "running" ? (
                <>⏳ Running…</>
              ) : (
                <>▶ Run</>
              )}
            </button>
          </div>
        </div>

        {/* ── Editor + Output ── */}
        <div className="py-panes">

          {/* Editor */}
          <div className="py-editor-pane">
            <div className="py-pane-label">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6C4.9 2 4 2.9 4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z" fill="#60a5fa"/>
                <path d="M14 2v6h6" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
              </svg>
              main.py
            </div>
            <div className="py-editor-wrap">
              {/* Pyodide loading overlay */}
              {(pyStatus === "idle" || pyStatus === "loading") && (
                <div className="py-loading-overlay">
                  <div className="py-spinner" />
                  <span>Loading Python runtime…</span>
                </div>
              )}

              {/* Line numbers */}
              <div className="py-line-nums">
                {Array.from({ length: lineCount }, (_, i) => (
                  <span
                    key={i}
                    className={`py-line-num ${cursorLine === i + 1 ? "active" : ""}`}
                  >
                    {i + 1}
                  </span>
                ))}
              </div>

              {/* Code textarea */}
              <textarea
                ref={textareaRef}
                className="py-textarea"
                value={code}
                onChange={e => setCode(e.target.value)}
                onKeyDown={handleKeyDown}
                onSelect={handleCursorMove}
                onClick={handleCursorMove}
                spellCheck={false}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                placeholder="# Write your Python code here…"
              />
            </div>
          </div>

          {/* Output */}
          <div className="py-output-pane">
            <div className="py-pane-label">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#22c55e" strokeWidth="2"/>
                <path d="M7 12l4 4 6-6" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Output
              {execTime !== null && (
                <span className="py-exec-time">{execTime}ms</span>
              )}
            </div>
            <div className="py-output-body" ref={outputRef}>
              {output.length === 0 ? (
                <div className="py-output-empty">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#484f58" strokeWidth="1.5"/>
                    <path d="M9 12l2 2 4-4" stroke="#484f58" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Press ▶ Run or Ctrl+Enter</span>
                </div>
              ) : (
                output.map((line, i) => (
                  <p
                    key={i}
                    className={`py-out-line py-out-${line.type}`}
                  >
                    {line.text}
                  </p>
                ))
              )}
            </div>
          </div>
        </div>

        {/* ── Status bar ── */}
        <div className="py-statusbar">
          <div className="py-status-indicator">
            <span className={`py-status-dot ${pyStatus}`} />
            <span>{statusLabels[pyStatus]}</span>
          </div>
          <span>Ln {cursorLine}, Col — &nbsp;|&nbsp; Python 3.12 (Pyodide 0.26)</span>
          <span style={{ color: "#484f58" }}>Ctrl+Enter to run • Tab = 4 spaces</span>
        </div>

      </div>
    </>
  );
}
