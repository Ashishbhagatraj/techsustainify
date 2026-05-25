"use client";

import React, { useState, useRef, useCallback } from "react";
import styles from "@/app/styles/javaeditor.module.css";

// ─── Judge0 CE ───────────────────────────────────────────────────────────────
const JUDGE0_URL   = "https://ce.judge0.com";
const JAVA_LANG_ID = 62;

const DEFAULT_CODE = `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        // Try editing me!
        int a = 10, b = 20;
        System.out.println("Sum: " + (a + b));
    }
}`;

// ─── Types ───────────────────────────────────────────────────────────────────
interface OutputState {
  text: string;
  isError: boolean;
  time: string | null;
  memory: string | null;
  statusLabel: string;
}

type RunStatus = "idle" | "running" | "success" | "error";

// ─── Keywords ────────────────────────────────────────────────────────────────
const KEYWORDS = new Set([
  "abstract","assert","boolean","break","byte","case","catch","char","class",
  "const","continue","default","do","double","else","enum","extends","final",
  "finally","float","for","goto","if","implements","import","instanceof","int",
  "interface","long","native","new","package","private","protected","public",
  "return","short","static","strictfp","super","switch","synchronized","this",
  "throw","throws","transient","try","void","volatile","while",
]);
const LITERALS = new Set(["true","false","null"]);
const BUILTINS = new Set([
  "String","System","Math","Object","Integer","Double","Float","Boolean",
  "Byte","Short","Long","Character","StringBuilder","StringBuffer",
  "Thread","Runnable","Exception","RuntimeException","Override",
  "SuppressWarnings","out","err","in","println","print","printf","format",
  "length","size","get","set","add","remove","contains","equals","toString",
  "valueOf","parseInt","main","args","Scanner","ArrayList","HashMap",
]);

// ─── Syntax Highlighter ──────────────────────────────────────────────────────
function highlight(code: string): string {
  const esc = (s: string) =>
    s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");

  let result = "";
  let i = 0;

  while (i < code.length) {
    // Single-line comment
    if (code[i] === "/" && code[i+1] === "/") {
      const end = code.indexOf("\n", i);
      const e   = end === -1 ? code.length : end;
      result += `<span class="${styles.hCmt}">${esc(code.slice(i, e))}</span>`;
      i = e; continue;
    }
    // Multi-line comment
    if (code[i] === "/" && code[i+1] === "*") {
      let end = code.indexOf("*/", i+2);
      end = end === -1 ? code.length : end + 2;
      result += `<span class="${styles.hCmt}">${esc(code.slice(i, end))}</span>`;
      i = end; continue;
    }
    // String
    if (code[i] === '"') {
      let j = i + 1;
      while (j < code.length && code[j] !== '"') { if (code[j] === "\\") j++; j++; }
      j++;
      result += `<span class="${styles.hStr}">${esc(code.slice(i, j))}</span>`;
      i = j; continue;
    }
    // Char
    if (code[i] === "'") {
      let j = i + 1;
      if (code[j] === "\\") j++;
      j += 2;
      result += `<span class="${styles.hStr}">${esc(code.slice(i, j))}</span>`;
      i = j; continue;
    }
    // Number
    if (/[0-9]/.test(code[i]) && (i === 0 || /\W/.test(code[i-1]))) {
      let j = i;
      while (j < code.length && /[0-9._xXbBfFdDlL]/.test(code[j])) j++;
      result += `<span class="${styles.hNum}">${esc(code.slice(i, j))}</span>`;
      i = j; continue;
    }
    // Annotation
    if (code[i] === "@") {
      let j = i + 1;
      while (j < code.length && /\w/.test(code[j])) j++;
      result += `<span class="${styles.hAnnot}">${esc(code.slice(i, j))}</span>`;
      i = j; continue;
    }
    // Word
    if (/[a-zA-Z_$]/.test(code[i])) {
      let j = i;
      while (j < code.length && /[\w$]/.test(code[j])) j++;
      const w = code.slice(i, j);
      if      (KEYWORDS.has(w)) result += `<span class="${styles.hKw}">${esc(w)}</span>`;
      else if (LITERALS.has(w)) result += `<span class="${styles.hLit}">${esc(w)}</span>`;
      else if (BUILTINS.has(w)) result += `<span class="${styles.hBi}">${esc(w)}</span>`;
      else if (/^[A-Z]/.test(w)) result += `<span class="${styles.hCls}">${esc(w)}</span>`;
      else result += esc(w);
      i = j; continue;
    }
    // Punctuation
    if (/[{}()[\];,.]/.test(code[i]))
      result += `<span class="${styles.hPunct}">${esc(code[i])}</span>`;
    else if (/[+\-*/%=<>!&|^~?:]/.test(code[i]))
      result += `<span class="${styles.hOp}">${esc(code[i])}</span>`;
    else
      result += esc(code[i]);
    i++;
  }
  return result + "\n";
}

// ─── Component ───────────────────────────────────────────────────────────────
const AA_Code_Editor = ({ initialCode = DEFAULT_CODE }: { initialCode?: string }) => {
  const [code,      setCode]      = useState<string>(initialCode);
  const [stdin,     setStdin]     = useState<string>("");
  const [stdinOpen, setStdinOpen] = useState<boolean>(false);
  const [output,    setOutput]    = useState<OutputState | null>(null);
  const [status,    setStatus]    = useState<RunStatus>("idle");
  const [copied,    setCopied]    = useState<boolean>(false);

  const taRef  = useRef<HTMLTextAreaElement>(null);
  const hlRef  = useRef<HTMLDivElement>(null);
  const lnRef  = useRef<HTMLDivElement>(null);

  const lineCount = code.split("\n").length;

  // ── Scroll sync ──
  const syncScroll = useCallback(() => {
    if (!taRef.current) return;
    if (hlRef.current) {
      hlRef.current.scrollTop  = taRef.current.scrollTop;
      hlRef.current.scrollLeft = taRef.current.scrollLeft;
    }
    if (lnRef.current) lnRef.current.scrollTop = taRef.current.scrollTop;
  }, []);

  // ── Tab key ──
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const ta = taRef.current;
      if (!ta) return;
      const s  = ta.selectionStart;
      const en = ta.selectionEnd;
      const next = code.substring(0, s) + "    " + code.substring(en);
      setCode(next);
      requestAnimationFrame(() => {
        ta.selectionStart = ta.selectionEnd = s + 4;
      });
    }
  };

  // ── Copy ──
  const copyCode = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // ── Run ──
  const runCode = async () => {
    setStatus("running");
    setOutput(null);
    try {
      const res = await fetch(
        `${JUDGE0_URL}/submissions?base64_encoded=false&wait=false`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ language_id: JAVA_LANG_ID, source_code: code, stdin }),
        }
      );
      if (!res.ok) throw new Error("Submission failed. Please try again.");
      const { token } = await res.json();

      let result = null;
      for (let i = 0; i < 20; i++) {
        await new Promise(r => setTimeout(r, 1000));
        const p = await fetch(
          `${JUDGE0_URL}/submissions/${token}?base64_encoded=false&fields=stdout,stderr,compile_output,status,time,memory`
        );
        result = await p.json();
        if (result.status?.id > 2) break;
      }
      if (!result) throw new Error("Timed out. Try again.");

      const isError =
        result.status?.id !== 3 || !!result.stderr || !!result.compile_output;

      setOutput({
        text: (
          result.stdout ||
          result.compile_output ||
          result.stderr ||
          "(No output)"
        ).trim(),
        isError,
        time:        result.time   ? `${result.time}s`                       : null,
        memory:      result.memory ? `${(result.memory / 1024).toFixed(1)} MB` : null,
        statusLabel: result.status?.description ?? "",
      });
      setStatus(isError ? "error" : "success");

    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      setOutput({
        text: `⚠️ ${msg}`,
        isError: true,
        time: null,
        memory: null,
        statusLabel: "Network Error",
      });
      setStatus("error");
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setStdin("");
    setOutput(null);
    setStatus("idle");
  };

  return (
    <section className={styles.editor} aria-labelledby="lce-heading">

      {/* ── Title bar ── */}
      <div className={styles.titleBar}>
        <div className={styles.dots}>
          <span className={styles.dot} data-c="r"/>
          <span className={styles.dot} data-c="y"/>
          <span className={styles.dot} data-c="g"/>
        </div>
        <h2 className={styles.titleText} id="lce-heading">
          Live Code Editor
        </h2>
        <div className={styles.titleRight}>
          <span className={styles.langPill}>
            <span className={styles.langPulse}/>☕ Java
          </span>
        </div>
      </div>

      {/* ── Code area ── */}
      <div className={styles.codeArea}>
        {/* Line numbers */}
        <div className={styles.lineNums} ref={lnRef} aria-hidden="true">
          {Array.from({ length: lineCount }, (_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>

        {/* Overlay editor */}
        <div className={styles.editorInner}>
          <div
            ref={hlRef}
            className={styles.highlight}
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: highlight(code) }}
          />
          <textarea
            ref={taRef}
            className={styles.textarea}
            value={code}
            onChange={e => setCode(e.target.value)}
            onKeyDown={handleKeyDown}
            onScroll={syncScroll}
            spellCheck={false}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            aria-label="Java code editor"
          />
        </div>
      </div>

      {/* ── Hint ── */}
      <div className={styles.hintBar}>
        <span>⌨ Tab = 4 spaces</span>
        <span className={styles.hintDivider}>|</span>
        <span>Powered by Judge0 CE</span>
      </div>

      {/* ── Stdin ── */}
      <div className={styles.stdinBlock}>
        <button
          className={styles.stdinToggle}
          onClick={() => setStdinOpen(o => !o)}
          aria-expanded={stdinOpen}
        >
          <span className={`${styles.arrow} ${stdinOpen ? styles.arrowDown : ""}`}>›</span>
          Standard Input (stdin)
          {stdin && <span className={styles.stdinDot}/>}
        </button>
        {stdinOpen && (
          <textarea
            className={styles.stdinArea}
            value={stdin}
            onChange={e => setStdin(e.target.value)}
            placeholder="Enter input here (one value per line)…"
            aria-label="Program stdin"
            rows={3}
          />
        )}
      </div>

      {/* ── Toolbar ── */}
      <div className={styles.toolbar}>
        <button
          className={`${styles.runBtn} ${status === "running" ? styles.runBusy : ""}`}
          onClick={runCode}
          disabled={status === "running"}
        >
          {status === "running"
            ? <><span className={styles.spinner}/> Compiling…</>
            : <><span className={styles.playIcon}>▶</span> Run Code</>}
        </button>

        <button
          className={`${styles.iconBtn} ${copied ? styles.iconBtnDone : ""}`}
          onClick={copyCode}
          title="Copy code"
        >
          {copied ? <>✓ Copied!</> : <>⎘ Copy</>}
        </button>

        <button className={styles.iconBtn} onClick={resetCode} title="Reset">
          ↺ Reset
        </button>
      </div>

      {/* ── Output ── */}
      {output && (
        <div
          className={`${styles.outputPanel} ${output.isError ? styles.outErr : styles.outOk}`}
          role="region"
          aria-live="polite"
        >
          <div className={styles.outputHead}>
            <div className={styles.outputLeft}>
              <span className={styles.statusDot}/>
              <span className={styles.statusLabel}>
                {output.isError ? "Error" : "Success"} &mdash; {output.statusLabel}
              </span>
            </div>
            {(output.time || output.memory) && (
              <div className={styles.stats}>
                {output.time   && <span className={styles.stat}><span>⏱</span>{output.time}</span>}
                {output.memory && <span className={styles.stat}><span>💾</span>{output.memory}</span>}
              </div>
            )}
          </div>
          <pre className={styles.outputText}>{output.text}</pre>
        </div>
      )}

    </section>
  );
};

export default AA_Code_Editor;