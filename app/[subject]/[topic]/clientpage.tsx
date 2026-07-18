"use client";

import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, ComponentType } from "react";
import dynamic from "next/dynamic";

import styles from "@/app/styles/pagedata.module.css";
import { useTheme } from "@/app/components/themecontext";
import { TopicData, Block, Section, BulletItem } from "@/lib/types";

// ====================== CHANGE 1: SUBJECT CONFIG MAP ======================
// Naya subject add karna ho to sirf yahan ek entry add karo — baaki kuch nahi badlega.

interface SubjectConfig {
  icon: string;
  title: string;
  editorLoader: () => Promise<{ default: ComponentType<{ initialCode?: string }> }>;
  topicsLoader: () => Promise<unknown[]>;
}

const SUBJECT_CONFIG: Record<string, SubjectConfig> = {
  java: {
    icon:  "☕",
    title: "Java Tutorials",
    editorLoader: () => import("@/app/components/code-editor/java/page"),
    topicsLoader: () => import("@/app/topic/java/page").then((m) => m.javaTopicsData),
  },
  python: {
    icon:  "🐍",
    title: "Python Tutorials",
    editorLoader: () => import("@/app/components/code-editor/python/page"),
    topicsLoader: () => import("@/app/topic/python/page").then((m) => m.pythonTopicsData),
  },
   c: {
    icon:  "🔵",
    title: "C Language Tutorials",
    editorLoader: () => import("@/app/components/code-editor/java/page"),
    topicsLoader: () => import("@/app/topic/c/page").then((m) => m.cTopicsData),
  },
    cpp: {
    icon:  "⚡",
    title: "C-Pluse Tutorials",
    editorLoader: () => import("@/app/components/code-editor/java/page"),
    topicsLoader: () => import("@/app/topic/cpp/page").then((m) => m.cppTopicsData),
  },
    sql: {
    icon:  "🗄️",
    title: "SQL Tutorials",
    editorLoader: () => import("@/app/components/code-editor/java/page"),
    topicsLoader: () => import("@/app/topic/sql/page").then((m) => m.sqlTopicsData),
  },
  html: {
    icon:  "🌐",
    title: "HTML Tutorials",
    editorLoader: () => import("@/app/components/code-editor/java/page"),
    topicsLoader: () => import("@/app/topic/html/page").then((m) => m.htmlTopicsData),
  },
  
  css: {
    icon:  "🎨",
    title: "CSS Tutorials",
    editorLoader: () => import("@/app/components/code-editor/java/page"),
    topicsLoader: () => import("@/app/topic/css/page").then((m) => m.cssTopicsData),
  },
  
  javascript: {
    icon:  "💛",
    title: "JAVA-SCRIPT Tutorials",
    editorLoader: () => import("@/app/components/code-editor/java/page"),
    topicsLoader: () => import("@/app/topic/javascript/page").then((m) => m.javascriptTopicsData),
  },
  
 react: {
    icon:  "⚛️",
    title: "React-Js Tutorials",
    editorLoader: () => import("@/app/components/code-editor/java/page"),
    topicsLoader: () => import("@/app/topic/react/page").then((m) => m.reactTopicsData),
  },
  
  node: {
    icon:  "🟢",
    title: "Node Tutorials",
    editorLoader: () => import("@/app/components/code-editor/java/page"),
    topicsLoader: () => import("@/app/topic/node/page").then((m) => m.nodeTopicsData),
  },
  
  j2ee: {
    icon:  "🏢",
    title: "J2EE Tutorials",
    editorLoader: () => import("@/app/components/code-editor/java/page"),
    topicsLoader: () => import("@/app/topic/j2ee/page").then((m) => m.j2eeTopicsData),
  },
  
  kotlin: {
    icon:  "🎯",
    title: "Kotlin Tutorials",
    editorLoader: () => import("@/app/components/code-editor/java/page"),
    topicsLoader: () => import("@/app/topic/kotlin/page").then((m) => m.kotlinTopicsData),
  },
  
  django: {
    icon:  "🎸",
    title: "Django Tutorials",
    editorLoader: () => import("@/app/components/code-editor/java/page"),
    topicsLoader: () => import("@/app/topic/django/page").then((m) => m.djangoTopicsData),
  },
  
  swift: {
    icon:  "🍎",
    title: "Swift Tutorials",
    editorLoader: () => import("@/app/components/code-editor/java/page"),
    topicsLoader: () => import("@/app/topic/swift/page").then((m) => m.swiftTopicsData),
  },
  
  rust: {
    icon:  "🦀",
    title: "Rust Tutorials",
    editorLoader: () => import("@/app/components/code-editor/java/page"),
    topicsLoader: () => import("@/app/topic/rust/page").then((m) => m.rustTopicsData),
  },
  
  go: {
    icon:  "🐹",
    title: "GO Tutorials",
    editorLoader: () => import("@/app/components/code-editor/java/page"),
    topicsLoader: () => import("@/app/topic/go/page").then((m) => m.goTopicsData),
  },
  ruby: {
    icon:  "💎",
    title: "Ruby Tutorials",
    editorLoader: () => import("@/app/components/code-editor/java/page"),
    topicsLoader: () => import("@/app/topic/ruby/page").then((m) => m.rubyTopicsData),
  },
  mongodb: {
    icon:  "🍃",
    title: "MongoDB Tutorials",
    editorLoader: () => import("@/app/components/code-editor/java/page"),
    topicsLoader: () => import("@/app/topic/mongodb/page").then((m) => m.mongodbTopicsData),
  },
  
  
};

// Fallback agar subject config mein na ho
const DEFAULT_CONFIG: SubjectConfig = SUBJECT_CONFIG["java"];

// ====================== INTERFACES ======================

interface FAQItem { q: string; a: string; }
interface NavLink { label: string; path: string; }
interface InfoCard { icon: string; label: string; isTime?: boolean; dateTime?: string; value: string; }
interface Breadcrumb { position: number; name: string; path?: string; }
interface SidebarFact { dt: string; dd: string; }
interface SidebarArticle { label: string; path: string; }
interface TopicItem { label: string; path: string; }
interface SidebarSection { heading: string; topics: TopicItem[]; }

interface FeatureCardItem { icon: string; title: string; text: string; }
interface FlowchartNode { id: string; label: string; sublabel: string; type: "start" | "process" | "data" | "decision" | "end"; }
interface FlowchartEdge { from: string; to: string; label?: string; }
interface ArchLayer { label: string; color: string; items: string[]; }
interface ProConItem { title: string; text: string; }
interface InterviewQAItem { q: string; a: string; tag: string; }
interface PracticeQItem { q: string; a: string; difficulty: "Easy" | "Medium" | "Hard"; }

// ====================== EXTENDED BLOCK TYPE ======================

type FeatureCardsBlock   = { type: "featureCards";        items: FeatureCardItem[] };
type FlowchartBlock      = { type: "flowchart";           nodes: FlowchartNode[]; edges: FlowchartEdge[] };
type ComparisonTableBlock= { type: "comparisonTable";     headers: string[]; rows: string[][] };
type ProsConsTableBlock  = { type: "prosConsTable";       pros: ProConItem[]; cons: ProConItem[] };
type ArchDiagramBlock    = { type: "architectureDiagram"; layers: ArchLayer[] };
type InterviewQABlock    = { type: "interviewQA";         items: InterviewQAItem[] };
type PracticeQBlock      = { type: "practiceQuestions";   items: PracticeQItem[] };

type ExtendedBlock =
  | Block
  | FeatureCardsBlock
  | FlowchartBlock
  | ComparisonTableBlock
  | ProsConsTableBlock
  | ArchDiagramBlock
  | InterviewQABlock
  | PracticeQBlock;

// ====================== DARK MODE CSS VARIABLES ======================

const DarkModeVars = () => (
  <style>{`
    .${styles.dark} {
      --bg: #0f172a;
      --card-bg: #1e293b;
      --border-color: #334155;
      --text-primary: #f1f5f9;
      --text-secondary: #94a3b8;
    }
    .${styles.dark} .dm-answer-box {
      background: #1e3a2e !important;
      border-color: #166534 !important;
      color: #86efac !important;
    }
    .${styles.dark} .dm-interview-answer {
      background: #1e293b !important;
      color: #94a3b8 !important;
      border-color: #334155 !important;
    }
    .${styles.dark} .dm-interview-btn {
      background: #1e293b !important;
    }
    .${styles.dark} .dm-interview-btn:hover {
      background: #263248 !important;
    }
    .${styles.dark} .dm-practice-card {
      background: #1e293b !important;
      border-color: #334155 !important;
    }
    .${styles.dark} .dm-flowchart-wrap {
      background: #1e293b !important;
      border-color: #334155 !important;
    }
    .${styles.dark} .dm-edge-label {
      background: #1e293b !important;
      color: #94a3b8 !important;
    }
    .${styles.dark} .dm-table-even {
      background: #1e293b !important;
    }
    .${styles.dark} .dm-table-odd {
      background: #0f172a !important;
    }
    .${styles.dark} .dm-table-cell-primary {
      color: #f1f5f9 !important;
    }
    .${styles.dark} .dm-table-cell-secondary {
      color: #94a3b8 !important;
    }
    .${styles.dark} .dm-feature-card {
      background: #1e293b !important;
      border-color: #334155 !important;
    }
    .${styles.dark} .dm-feature-card p {
      color: #94a3b8 !important;
    }
    .${styles.dark} .dm-arch-item {
      color: #f1f5f9 !important;
    }
    .${styles.dark} .dm-arch-caption {
      color: #64748b !important;
    }
    .${styles.dark} .dm-pros-cons-cons-row {
      border-color: #450a0a !important;
    }
    .${styles.dark} .dm-pros-pros-row {
      border-color: #052e16 !important;
    }
    @media (max-width: 640px) {
      .pros-cons-grid { grid-template-columns: 1fr !important; }
    }
  `}</style>
);

// ====================== BULLET ITEM RENDERER ======================

const RenderBulletItem = ({ item }: { item: BulletItem }) => {
  if (item.html) {
    return (
      <li className={styles.pointItem}>
        <span className={styles.bullet}>▶</span>
        <div><p dangerouslySetInnerHTML={{ __html: item.html }} /></div>
      </li>
    );
  }
  return (
    <li className={styles.pointItem}>
      <span className={styles.bullet}>▶</span>
      <div>
        <p>
          {item.strong && <strong>{item.strong}</strong>}
          {item.text && (item.isHtml ?
            <span dangerouslySetInnerHTML={{ __html: item.text }} /> : item.text)}
        </p>
      </div>
    </li>
  );
};

// ====================== FEATURE CARDS ======================

const RenderFeatureCards = ({ items }: { items: FeatureCardItem[] }) => (
  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "1rem",
    margin: "1.5rem 0"
  }}>
    {items.map((item, i) => (
      <div key={i} className="dm-feature-card" style={{
        display: "flex",
        gap: "0.75rem",
        padding: "1rem 1.1rem",
        borderRadius: "10px",
        border: "1px solid var(--border-color, #e5e7eb)",
        background: "var(--card-bg, #f8fafc)",
        transition: "box-shadow 0.2s",
      }}>
        <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.icon}</span>
        <div>
          <strong style={{ display: "block", marginBottom: "0.25rem", fontSize: "0.9rem", color: "var(--text-primary, #1e293b)" }}>
            {item.title}
          </strong>
          <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--text-secondary, #6b7280)", lineHeight: 1.5 }}>
            {item.text}
          </p>
        </div>
      </div>
    ))}
  </div>
);

// ====================== FLOWCHART ======================

const nodeColors: Record<string, string> = {
  start:    "#6366f1",
  process:  "#0ea5e9",
  data:     "#10b981",
  decision: "#f59e0b",
  end:      "#22c55e",
};

const RenderFlowchart = ({ nodes, edges }: { nodes: FlowchartNode[]; edges: FlowchartEdge[] }) => {
  return (
    <div className="dm-flowchart-wrap" style={{
      overflowX: "auto",
      margin: "1.5rem 0",
      padding: "1.5rem 1rem",
      borderRadius: "12px",
      border: "1px solid var(--border-color, #e5e7eb)",
      background: "var(--card-bg, #f8fafc)",
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
        minWidth: "280px",
      }}>
        {nodes.map((node, i) => (
          <div key={node.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.75rem 1.5rem",
              borderRadius: node.type === "decision" ? "8px" : "10px",
              background: nodeColors[node.type] ?? "#6366f1",
              color: "#fff",
              textAlign: "center",
              width: "clamp(200px, 60%, 400px)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              border: node.type === "decision" ? "2px dashed rgba(255,255,255,0.5)" : "none",
            }}>
              <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>{node.label}</span>
              <span style={{ fontSize: "0.75rem", opacity: 0.85, marginTop: "0.2rem" }}>{node.sublabel}</span>
            </div>

            {i < nodes.length - 1 && (() => {
              const edge = edges.find(e => e.from === node.id);
              return (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", margin: "4px 0" }}>
                  {edge?.label && (
                    <span className="dm-edge-label" style={{
                      fontSize: "0.7rem",
                      color: "var(--text-secondary, #6b7280)",
                      background: "var(--card-bg, #f8fafc)",
                      padding: "1px 6px",
                      borderRadius: "4px",
                    }}>{edge.label}</span>
                  )}
                  <svg width="24" height="28" viewBox="0 0 24 28">
                    <line x1="12" y1="0" x2="12" y2="20" stroke="#94a3b8" strokeWidth="2"/>
                    <polygon points="6,16 18,16 12,28" fill="#94a3b8"/>
                  </svg>
                </div>
              );
            })()}
          </div>
        ))}
      </div>
      <p className="dm-arch-caption" style={{
        textAlign: "center", fontSize: "0.75rem",
        color: "var(--text-secondary, #9ca3af)",
        marginTop: "1rem", marginBottom: 0
      }}>
        Code Execution Flow — from source to output
      </p>
    </div>
  );
};

// ====================== COMPARISON TABLE ======================

const RenderComparisonTable = ({ headers, rows }: { headers: string[]; rows: string[][] }) => (
  <div style={{ overflowX: "auto", margin: "1.5rem 0" }}>
    <table style={{
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "0.85rem",
      borderRadius: "10px",
      overflow: "hidden",
      border: "1px solid var(--border-color, #e5e7eb)",
    }}>
      <thead>
        <tr style={{ background: "#6366f1", color: "#fff" }}>
          {headers.map((h, i) => (
            <th key={i} style={{ padding: "0.7rem 1rem", textAlign: "left", fontWeight: 600, whiteSpace: "nowrap" }}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri} className={ri % 2 === 0 ? "dm-table-even" : "dm-table-odd"}
            style={{ background: ri % 2 === 0 ? "var(--card-bg, #f8fafc)" : "var(--bg, #fff)" }}>
            {row.map((cell, ci) => (
              <td key={ci}
                className={ci === 0 ? "dm-table-cell-primary" : "dm-table-cell-secondary"}
                style={{
                  padding: "0.65rem 1rem",
                  borderTop: "1px solid var(--border-color, #f1f5f9)",
                  fontWeight: ci === 0 ? 600 : 400,
                  color: ci === 0
                    ? "var(--text-primary, #1e293b)"
                    : "var(--text-secondary, #475569)",
                }}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// ====================== PROS & CONS TABLE ======================

const RenderProsConsTable = ({ pros, cons }: { pros: ProConItem[]; cons: ProConItem[] }) => (
  <div
    className="pros-cons-grid"
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1.25rem",
      margin: "1.5rem 0",
    }}
  >
    {/* Pros */}
    <div style={{ borderRadius: "12px", border: "1px solid #bbf7d0", overflow: "hidden" }}>
      <div style={{ background: "#16a34a", color: "#fff", padding: "0.7rem 1rem", fontWeight: 700, fontSize: "0.95rem" }}>
        ✅ Advantages
      </div>
      <div style={{ padding: "0.5rem 0" }}>
        {pros.map((p, i) => (
          <div key={i} className="dm-pros-pros-row" style={{
            padding: "0.6rem 1rem",
            borderBottom: i < pros.length - 1 ? "1px solid #f0fdf4" : "none",
          }}>
            <strong style={{ display: "block", fontSize: "0.85rem", color: "#15803d", marginBottom: "2px" }}>
              {p.title}
            </strong>
            <span style={{ fontSize: "0.8rem", color: "var(--text-secondary, #4b5563)" }}>{p.text}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Cons */}
    <div style={{ borderRadius: "12px", border: "1px solid #fecaca", overflow: "hidden" }}>
      <div style={{ background: "#dc2626", color: "#fff", padding: "0.7rem 1rem", fontWeight: 700, fontSize: "0.95rem" }}>
        ❌ Disadvantages
      </div>
      <div style={{ padding: "0.5rem 0" }}>
        {cons.map((c, i) => (
          <div key={i} className="dm-pros-cons-row" style={{
            padding: "0.6rem 1rem",
            borderBottom: i < cons.length - 1 ? "1px solid #fef2f2" : "none",
          }}>
            <strong style={{ display: "block", fontSize: "0.85rem", color: "#b91c1c", marginBottom: "2px" }}>
              {c.title}
            </strong>
            <span style={{ fontSize: "0.8rem", color: "var(--text-secondary, #4b5563)" }}>{c.text}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ====================== ARCHITECTURE DIAGRAM ======================

const RenderArchitectureDiagram = ({ layers }: { layers: ArchLayer[] }) => (
  <div style={{
    margin: "1.5rem 0",
    borderRadius: "14px",
    overflow: "hidden",
    border: "1px solid var(--border-color, #e5e7eb)",
    fontFamily: "monospace",
  }}>
    {layers.map((layer, i) => (
      <div key={i} style={{
        borderBottom: i < layers.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none",
      }}>
        <div style={{
          background: layer.color,
          color: "#fff",
          padding: "0.5rem 1.2rem",
          fontWeight: 700,
          fontSize: "0.82rem",
          letterSpacing: "0.04em",
        }}>
          {layer.label}
        </div>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          padding: "0.75rem 1.2rem",
          background: layer.color + "18",
        }}>
          {layer.items.map((item, j) => (
            <span key={j} className="dm-arch-item" style={{
              background: layer.color + "25",
              border: `1px solid ${layer.color}55`,
              color: "var(--text-primary, #1e293b)",
              borderRadius: "6px",
              padding: "0.3rem 0.75rem",
              fontSize: "0.8rem",
              fontFamily: "monospace",
            }}>{item}</span>
          ))}
        </div>
      </div>
    ))}
    <p className="dm-arch-caption" style={{
      textAlign: "center",
      fontSize: "0.72rem",
      color: "var(--text-secondary, #9ca3af)",
      margin: "0.6rem 0",
    }}>
      Architecture Diagram
    </p>
  </div>
);

// ====================== INTERVIEW Q&A ======================

const tagColors: Record<string, string> = {
  "Must Know":        "#6366f1",
  "Frequently Asked": "#0ea5e9",
  "Common Trap":      "#ef4444",
  "Current Affairs":  "#10b981",
};

const RenderInterviewQA = ({ items }: { items: InterviewQAItem[] }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", margin: "1.25rem 0" }}>
      {items.map((item, i) => {
        const isOpen = openIdx === i;
        return (
          <div key={i} style={{
            borderRadius: "10px",
            border: "1px solid var(--border-color, #e5e7eb)",
            overflow: "hidden",
          }}>
            <button
              onClick={() => setOpenIdx(isOpen ? null : i)}
              className="dm-interview-btn"
              aria-expanded={isOpen}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.85rem 1.1rem",
                background: "var(--card-bg, #f8fafc)",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span style={{
                fontWeight: 600,
                fontSize: "0.88rem",
                color: "var(--text-primary, #1e293b)",
                flex: 1,
              }}>
                {item.q}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
                <span style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  padding: "2px 8px",
                  borderRadius: "20px",
                  color: "#fff",
                  background: tagColors[item.tag] ?? "#6366f1",
                  whiteSpace: "nowrap",
                }}>{item.tag}</span>
                <span style={{ color: "#6366f1", fontSize: "1rem" }}>{isOpen ? "▲" : "▼"}</span>
              </div>
            </button>

            <div
              className="dm-interview-answer"
              aria-hidden={!isOpen}
              style={{
                padding: isOpen ? "0.85rem 1.1rem" : "0",
                maxHeight: isOpen ? "600px" : "0",
                overflow: "hidden",
                transition: "max-height 0.25s ease, padding 0.25s ease",
                background: "var(--bg, #fff)",
                borderTop: isOpen ? "1px solid var(--border-color, #e5e7eb)" : "none",
                fontSize: "0.85rem",
                lineHeight: 1.7,
                color: "var(--text-secondary, #374151)",
              }}
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ====================== FAQ SECTION (Accordion) ======================

const RenderFAQAccordion = ({ items }: { items: FAQItem[] }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", margin: "1.25rem 0" }}>
      {items.map((item, i) => {
        const isOpen = openIdx === i;
        return (
          <div key={i} style={{
            borderRadius: "10px",
            border: "1px solid var(--border-color, #e5e7eb)",
            overflow: "hidden",
          }}>
            <button
              onClick={() => setOpenIdx(isOpen ? null : i)}
              className="dm-interview-btn"
              aria-expanded={isOpen}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.85rem 1.1rem",
                background: "var(--card-bg, #f8fafc)",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span style={{
                fontWeight: 600,
                fontSize: "0.88rem",
                color: "var(--text-primary, #1e293b)",
                flex: 1,
              }}>
                {item.q}
              </span>
              <span style={{ color: "#6366f1", fontSize: "1rem", flexShrink: 0 }}>
                {isOpen ? "▲" : "▼"}
              </span>
            </button>

            <div
              className="dm-interview-answer"
              aria-hidden={!isOpen}
              style={{
                padding: isOpen ? "0.85rem 1.1rem" : "0",
                maxHeight: isOpen ? "600px" : "0",
                overflow: "hidden",
                transition: "max-height 0.25s ease, padding 0.25s ease",
                background: "var(--bg, #fff)",
                borderTop: isOpen ? "1px solid var(--border-color, #e5e7eb)" : "none",
                fontSize: "0.85rem",
                lineHeight: 1.7,
                color: "var(--text-secondary, #374151)",
              }}
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ====================== PRACTICE QUESTIONS ======================

const difficultyColors: Record<string, string> = {
  Easy:   "#16a34a",
  Medium: "#d97706",
  Hard:   "#dc2626",
};

const RenderPracticeQuestions = ({ items }: { items: PracticeQItem[] }) => {
  const [revealed, setRevealed] = useState<number[]>([]);
  const toggle = (i: number) =>
    setRevealed(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", margin: "1.25rem 0" }}>
      {items.map((item, i) => {
        const isRevealed = revealed.includes(i);
        return (
          <div key={i} className="dm-practice-card" style={{
            borderRadius: "10px",
            border: "1px solid var(--border-color, #e5e7eb)",
            padding: "1rem 1.2rem",
            background: "var(--card-bg, #f8fafc)",
          }}>
            <div style={{
              display: "flex", justifyContent: "space-between",
              alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.75rem"
            }}>
              <p style={{
                margin: 0, fontWeight: 600, fontSize: "0.88rem",
                color: "var(--text-primary, #1e293b)",
                flex: 1, lineHeight: 1.5,
              }}>
                {item.q}
              </p>
              <span style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                padding: "2px 8px",
                borderRadius: "20px",
                color: "#fff",
                background: difficultyColors[item.difficulty] ?? "#6366f1",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}>{item.difficulty}</span>
            </div>

            <div
              className="dm-answer-box"
              aria-hidden={!isRevealed}
              style={{
                maxHeight: isRevealed ? "400px" : "0",
                overflow: "hidden",
                transition: "max-height 0.25s ease",
                padding: isRevealed ? "0.8rem 1rem" : "0",
                borderRadius: "8px",
                background: "#f0fdf4",
                border: isRevealed ? "1px solid #bbf7d0" : "none",
                fontSize: "0.83rem",
                lineHeight: 1.7,
                color: "#166534",
                marginBottom: isRevealed ? "0.5rem" : "0",
              }}
            >
              <strong style={{ display: "block", marginBottom: "0.3rem", fontSize: "0.75rem" }}>
                ✅ Answer
              </strong>
              {item.a}
            </div>

            <button
              onClick={() => toggle(i)}
              style={{
                marginTop: "0.25rem",
                padding: isRevealed ? "0.3rem 0.8rem" : "0.45rem 1rem",
                borderRadius: "6px",
                border: isRevealed
                  ? "1px solid var(--border-color, #d1d5db)"
                  : "1px solid #6366f1",
                background: "transparent",
                color: isRevealed ? "var(--text-secondary, #6b7280)" : "#6366f1",
                cursor: "pointer",
                fontSize: isRevealed ? "0.75rem" : "0.8rem",
                fontWeight: isRevealed ? 400 : 600,
              }}
            >
              {isRevealed ? "Hide Answer" : "👁 Reveal Answer"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

// ====================== CHANGE 2: DYNAMIC LIVE CODE EDITOR WRAPPER ======================
// Subject ke hisaab se sahi editor load hota hai — Next.js bundle split hota hai automatically.

const DynamicLiveEditor = ({
  subject,
  initialCode,
}: {
  subject: string;
  initialCode?: string;
}) => {
  const config = SUBJECT_CONFIG[subject] ?? DEFAULT_CONFIG;

  // next/dynamic se lazy load — SSR off kyunki code editors window use karte hain
  const Editor = dynamic(config.editorLoader, { ssr: false });

  return <Editor initialCode={initialCode} />;
};

// ====================== MAIN BLOCK RENDERER ======================

// subject prop RenderBlock tak pass karo taaki liveEditor dynamic ho sake
const RenderBlock = ({
  block,
  subject,
}: {
  block: ExtendedBlock;
  subject: string;
}) => {
  switch (block.type) {

    case "paragraph":
      return block.isHtml
        ? <p dangerouslySetInnerHTML={{ __html: block.text ?? "" }} />
        : <p>{block.text}</p>;

    case "subHeading":
      return <h3 className={styles.subTitle}>{block.text}</h3>;

    case "bulletList":
      return (
        <ul className={styles.pointList}>
          {(block.items ?? []).map((item, i) => <RenderBulletItem key={i} item={item} />)}
        </ul>
      );

    case "codeBox":
      return (
        <div className={styles.codeBox}>
          <div className={styles.codeHeader}>
            <span className={styles.codeLang}>{block.lang ?? subject.toUpperCase()}</span>
            <span className={styles.codeLabel}>{block.label}</span>
          </div>
          <pre className={styles.code}>
            <code>{(block.lines ?? []).join("\n")}</code>
          </pre>
        </div>
      );

    case "outputBox":
      return (
        <div className={styles.outputBox}>
          <p className={styles.outputLabel}>Output</p>
          <samp className={styles.outputText}>{(block.lines ?? []).join("\n")}</samp>
        </div>
      );

    // CHANGE 3: liveEditor — ab DynamicLiveEditor use karo, subject pass karo
    case "liveEditor":
      return <DynamicLiveEditor subject={subject} initialCode={block.initialCode} />;

    case "featureCards":
      return <RenderFeatureCards items={block.items} />;

    case "flowchart":
      return <RenderFlowchart nodes={block.nodes} edges={block.edges} />;

    case "comparisonTable":
      return <RenderComparisonTable headers={block.headers} rows={block.rows} />;

    case "prosConsTable":
      return <RenderProsConsTable pros={block.pros} cons={block.cons} />;

    case "architectureDiagram":
      return <RenderArchitectureDiagram layers={block.layers} />;

    case "interviewQA":
      return <RenderInterviewQA items={block.items} />;

    case "practiceQuestions":
      return <RenderPracticeQuestions items={block.items} />;

    default:
      return null;
  }
};

// ====================== CLIENT PAGE ======================

export default function ClientPage({
  data,
  subject,
  topic,
}: {
  data: TopicData;
  subject: string;
  topic: string;
}) {
  const [active, setActive]         = useState(data.articleHeader.title);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sbSearch, setSbSearch]     = useState("");

  // CHANGE 4: topicsData state — useEffect mein subject ke hisaab se load hota hai
  const [topicsData, setTopicsData] = useState<unknown[]>([]);

  const { darkMode, toggleTheme } = useTheme();

  const { meta, breadcrumbs, articleHeader, infoCards, sections, faq, nav, sidebar } = data;

  // Subject ke hisaab se topics sidebar data lazy load
  useEffect(() => {
    const config = SUBJECT_CONFIG[subject] ?? DEFAULT_CONFIG;
    config.topicsLoader().then(setTopicsData).catch(() => setTopicsData([]));
  }, [subject]);

  // Subject ke hisaab se sidebar icon + title
  const subjectConfig = SUBJECT_CONFIG[subject] ?? DEFAULT_CONFIG;

  const handleLinkClick = (label: string) => {
    setActive(label);
    setSidebarOpen(false);
  };

  const filteredTopics = (topics: TopicItem[]) =>
    sbSearch.trim() === ""
      ? topics
      : topics.filter(t => t.label.toLowerCase().includes(sbSearch.toLowerCase()));

  return (
    <div className={`${styles.kkk} ${darkMode ? styles.dark : ""}`}>
      <DarkModeVars />

      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <link rel="canonical" href={meta.canonical} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                ...faq.items.map((item) => ({
                  "@type": "Question",
                  "name": item.q,
                  "acceptedAnswer": { "@type": "Answer", "text": item.a },
                })),
                ...sections.flatMap((section) =>
                  (section.blocks as ExtendedBlock[])
                    .filter((b): b is InterviewQABlock => b.type === "interviewQA")
                    .flatMap((b) =>
                      b.items.map((item) => ({
                        "@type": "Question",
                        "name": item.q,
                        "acceptedAnswer": { "@type": "Answer", "text": item.a },
                      }))
                    )
                ),
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TechArticle",
              "headline": articleHeader.title,
              "description": meta.description,
              "url": meta.canonical,
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": breadcrumbs.map((crumb, i) => ({
                  "@type": "ListItem",
                  "position": i + 1,
                  "name": crumb.name,
                  ...(crumb.path ? { "item": crumb.path } : {}),
                })),
              },
            }),
          }}
        />
      </Head>

      <button className={styles.hamburger} onClick={() => setSidebarOpen(!sidebarOpen)}>
        <span className={styles.hLine} style={sidebarOpen ? { transform: "rotate(45deg) translate(5px,5px)" } : {}} />
        <span className={styles.hLine} style={sidebarOpen ? { opacity: 0 } : {}} />
        <span className={styles.hLine} style={sidebarOpen ? { transform: "rotate(-45deg) translate(5px,-5px)" } : {}} />
      </button>

      {sidebarOpen && <div className={styles.overlay} onClick={() => setSidebarOpen(false)} />}

      <div className={styles.page}>

        {/* Left Sidebar */}
        <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}>
          <button className={styles.sidebarClose} onClick={() => setSidebarOpen(false)}>✕</button>

          {/* CHANGE 4b: icon + title ab SUBJECT_CONFIG se aate hain */}
          <div className={styles.sidebarHeader}>
            <span className={styles.sidebarIcon}>{subjectConfig.icon}</span>
            <span className={styles.sidebarTitle}>{subjectConfig.title}</span>
            <button className={styles.themeToggle} onClick={toggleTheme}>
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>

          <div className={styles.sidebarSearch}>
            <input
              type="search"
              placeholder="Search topics..."
              value={sbSearch}
              onChange={(e) => setSbSearch(e.target.value)}
            />
          </div>

          <nav className={styles.sidebarNav}>
            {/* CHANGE 4c: javaTopicsData ki jagah topicsData state */}
            {(topicsData as SidebarSection[]).map((section) => {
              const visible = filteredTopics(section.topics);
              if (!visible.length) return null;
              return (
                <div key={section.heading}>
                  <p className={styles.sidebarSection}>{section.heading}</p>
                  {visible.map((t) => (
                    <Link
                      key={t.path}
                      href={t.path}
                      className={`${styles.sidebarLink} ${active === t.label ? styles.sidebarActive : ""}`}
                      onClick={() => handleLinkClick(t.label)}
                    >
                      {active === t.label && <span className={styles.activeDot} />}
                      {t.label}
                    </Link>
                  ))}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className={styles.main}>
          <nav className={styles.breadcrumb}>
            <ul>
              {breadcrumbs.map((crumb, i) => (
                <span key={i}>
                  {crumb.path
                    ? <Link href={crumb.path} style={{ color: "#4f46e5" }}>{crumb.name}</Link>
                    : <span>{crumb.name}</span>}
                  {i < breadcrumbs.length - 1 && <span> › </span>}
                </span>
              ))}
            </ul>
          </nav>

          <article className={styles.article}>
            <header className={styles.titleWrap}>
              <span className={styles.titleBadge}>{articleHeader.badge}</span>
              <h1>{articleHeader.title}</h1>
              <p>{articleHeader.subtitle}</p>
            </header>

            <div className={styles.infoCards}>
              {infoCards.map((card, i) => (
                <div key={i} className={styles.infoCard}>
                  <span>{card.icon}</span>
                  <div>
                    <p>{card.label}</p>
                    <p>{card.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {sections.map((section) => (
              <section key={section.sectionId} className={styles.contentBox}>
                <h2 id={section.sectionId}>{section.title}</h2>
                {/* CHANGE 3b: subject prop pass karo RenderBlock ko */}
                {(section.blocks as ExtendedBlock[]).map((block, i) => (
                  <RenderBlock key={i} block={block} subject={subject} />
                ))}
              </section>
            ))}

            <section className={styles.contentBox}>
              <h2>{faq.title}</h2>
              <RenderFAQAccordion items={faq.items} />
            </section>

            <footer className={styles.articleFooter}>
              <Link href={nav.prev.path} className={styles.navBtn}>← {nav.prev.label}</Link>
              <Link href={nav.next.path} className={styles.navBtn}>{nav.next.label} →</Link>
            </footer>
          </article>
        </main>

        {/* Right Sidebar */}
        <aside className={styles.right}>
          <section className={styles.rightCard}>
            <h3 className={styles.rightCardTitle}>⚡ Quick Facts</h3>
            {sidebar.quickFacts.map((f, i) => (
              <div key={i} className={styles.factRow}>
                <strong>{f.dt}</strong>
                <span>{f.dd}</span>
              </div>
            ))}
          </section>
          <section className={styles.rightCard}>
            <h3 className={styles.rightCardTitle}>📰 Related Articles</h3>
            <ul className={styles.relatedList}>
              {sidebar.relatedArticles.map((article, i) => (
                <li key={i} className={styles.relatedItem}>
                  <span className={styles.relatedDot} />
                  <Link href={article.path} className={styles.relatedLink}>{article.label}</Link>
                </li>
              ))}
            </ul>
          </section>
          <section className={styles.rightCard}>
            <h3 className={styles.rightCardTitle}>🏷️ Related Tags</h3>
            <div className={styles.tagsWrap}>
              {sidebar.tags.map((tag, i) => (
                <span key={i} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </section>
        </aside>

      </div>
    </div>
  );
}
