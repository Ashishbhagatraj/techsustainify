// components/ViewTutorialsClient.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "../styles/Aaa.css"

const languages = [
{ id:"c",      name:"C",          icon:"C",  emoji:"🔵", color:"#38bdf8", glow:"rgba(56,189,248,0.18)",  path:"/c/c-home",                         category:"Core",     level:"Beginner",     topics:32, students:"12K+", desc:"Master pointers, memory management and low-level system programming from scratch.", tags:["Pointers","Memory","Structs"],     badge:"Most Popular", progress:88 },
{ id:"java",   name:"Java",       icon:"J",  emoji:"☕", color:"#f97316", glow:"rgba(249,115,22,0.18)",  path:"/java/java-home",                   category:"Core",     level:"Beginner",     topics:78, students:"28K+", desc:"OOP, enterprise development, Android foundations and the complete JVM ecosystem.",  tags:["OOP","JVM","Spring"],             badge:"Top Rated",    progress:95 },
{ id:"python", name:"Python",     icon:"Py", emoji:"🐍", color:"#facc15", glow:"rgba(250,204,21,0.18)",  path:"/python/python-home",               category:"Core",     level:"Beginner",     topics:45, students:"22K+", desc:"From automation scripts to AI/ML. The most versatile language for modern dev.",    tags:["AI/ML","Django","Scripts"],       badge:"Trending 🔥",  progress:91 },
{ id:"cpp",    name:"C++",        icon:"C+", emoji:"⚡", color:"#a78bfa", glow:"rgba(167,139,250,0.18)", path:"/cpp/cpp-home",                     category:"Core",     level:"Intermediate", topics:40, students:"9K+",  desc:"High-performance computing, game engines and competitive programming mastery.",    tags:["STL","Templates","Games"],        badge:"",             progress:74 },
{ id:"kotlin", name:"Kotlin",     icon:"Kt", emoji:"🎯", color:"#7c3aed", glow:"rgba(124,58,237,0.18)",  path:"/kotlin/kotlin-home",               category:"Core",     level:"Intermediate", topics:35, students:"7K+",  desc:"Modern Android development. Null safety, coroutines and Jetpack Compose.",         tags:["Android","Coroutines","Compose"], badge:"Android",      progress:68 },
{ id:"swift",  name:"Swift",      icon:"Sw", emoji:"🍎", color:"#ff6b35", glow:"rgba(255,107,53,0.18)",  path:"/swift/swift-home",                 category:"Core",     level:"Intermediate", topics:30, students:"5K+",  desc:"Build stunning iOS and macOS apps. SwiftUI, Combine and the Apple ecosystem.",     tags:["SwiftUI","iOS","Xcode"],          badge:"iOS",          progress:62 },
{ id:"rust",   name:"Rust",       icon:"Rs", emoji:"🦀", color:"#ef4444", glow:"rgba(239,68,68,0.18)",   path:"/rust/rust-home",                   category:"Core",     level:"Advanced",     topics:28, students:"4K+",  desc:"Zero-cost abstractions, memory safety without GC. Systems programming redefined.", tags:["Memory","WASM","CLI"],             badge:"Fast 🚀",      progress:55 },
{ id:"html",   name:"HTML",       icon:"H",  emoji:"🌐", color:"#fb923c", glow:"rgba(251,146,60,0.18)",  path:"/html/html-home",                   category:"Web",      level:"Beginner",     topics:28, students:"18K+", desc:"The foundation of every webpage. Semantic markup, accessibility and SEO practices.",tags:["Semantic","SEO","Forms"],         badge:"Start Here",   progress:93 },
{ id:"css",    name:"CSS",        icon:"CS", emoji:"🎨", color:"#06b6d4", glow:"rgba(6,182,212,0.18)",   path:"/css/css-home",                     category:"Web",      level:"Beginner",     topics:35, students:"15K+", desc:"Flexbox, Grid, animations and responsive design. Make the web beautiful.",         tags:["Flexbox","Grid","Animations"],    badge:"",             progress:85 },
{ id:"js",     name:"JavaScript", icon:"JS", emoji:"💛", color:"#eab308", glow:"rgba(234,179,8,0.18)",   path:"/javascript/javascript-home",       category:"Web",      level:"Beginner",     topics:52, students:"25K+", desc:"DOM manipulation, async programming, ES6+ and the entire browser ecosystem.",      tags:["DOM","Async","ES6+"],             badge:"Most Used",    progress:90 },
{ id:"react",  name:"React.js",   icon:"Re", emoji:"⚛️", color:"#38bdf8", glow:"rgba(56,189,248,0.18)",  path:"/react/react-home",                 category:"Web",      level:"Intermediate", topics:38, students:"16K+", desc:"Component architecture, Hooks, state management and modern React patterns.",       tags:["Hooks","Redux","Next.js"],        badge:"Hot 🔥",       progress:82 },
{ id:"nodejs", name:"Node.js",    icon:"No", emoji:"🟢", color:"#4ade80", glow:"rgba(74,222,128,0.18)",  path:"/nodejs/nodejs-home",               category:"Backend",  level:"Intermediate", topics:42, students:"11K+", desc:"Server-side JavaScript. REST APIs, real-time apps and full-stack development.",    tags:["Express","REST","Socket.io"],     badge:"Full Stack",   progress:78 },
{ id:"django", name:"Django",     icon:"Dj", emoji:"🎸", color:"#34d399", glow:"rgba(52,211,153,0.18)",  path:"/django/django-home",               category:"Backend",  level:"Intermediate", topics:36, students:"8K+",  desc:"Python's batteries-included framework. ORM, admin panel, auth — all built in.",    tags:["ORM","Auth","REST"],              badge:"",             progress:70 },
{ id:"go",     name:"Go",         icon:"Go", emoji:"🐹", color:"#22d3ee", glow:"rgba(34,211,238,0.18)",  path:"/go/go-home",                       category:"Backend",  level:"Intermediate", topics:32, students:"6K+",  desc:"Google's concurrency-first language. Microservices, CLI tools and cloud-native.",   tags:["Goroutines","gRPC","Docker"],     badge:"Cloud ☁️",    progress:65 },
{ id:"ruby",   name:"Ruby",       icon:"Rb", emoji:"💎", color:"#f43f5e", glow:"rgba(244,63,94,0.18)",   path:"/ruby/ruby-home",                   category:"Backend",  level:"Intermediate", topics:25, students:"4K+",  desc:"Elegant, developer-friendly. Rails framework for rapid web application development.",tags:["Rails","Gems","MVC"],             badge:"",             progress:58 },
{ id:"sql",    name:"SQL",        icon:"SQ", emoji:"🗄️", color:"#a3e635", glow:"rgba(163,230,53,0.18)",  path:"/sql/sql-home",                     category:"Database", level:"Beginner",     topics:30, students:"14K+", desc:"Query, manage and optimize relational databases. Joins, indexes and transactions.", tags:["Joins","Indexes","Postgres"],     badge:"",             progress:80 },
{ id:"mongo",  name:"MongoDB",    icon:"Mo", emoji:"🍃", color:"#00ed64", glow:"rgba(0,237,100,0.18)",   path:"/mongodb/mongodb-home",             category:"Database", level:"Beginner",     topics:24, students:"9K+",  desc:"Document-based NoSQL. Flexible schemas, aggregation pipelines and Atlas cloud.",    tags:["NoSQL","Atlas","Aggregation"],    badge:"NoSQL",        progress:72 },
{ id:"j2ee",   name:"J2EE",       icon:"J2", emoji:"🏢", color:"#fb923c", glow:"rgba(251,146,60,0.18)",  path:"/j2ee/j2ee-home",                   category:"Backend",  level:"Advanced",     topics:25, students:"3K+",  desc:"Enterprise Java. Servlets, JSP, Spring Boot, JPA and microservices architecture.", tags:["Spring","JPA","Microservices"],   badge:"Enterprise",   progress:50 },
];

const CATS   = ["All","Core","Web","Backend","Database"];
const LEVELS = ["All Levels","Beginner","Intermediate","Advanced"];
const LVL: Record<string,{c:string;bg:string}> = {
  Beginner:     { c:"#4ade80", bg:"rgba(74,222,128,0.1)"  },
  Intermediate: { c:"#fb923c", bg:"rgba(251,146,60,0.1)"  },
  Advanced:     { c:"#f87171", bg:"rgba(248,113,113,0.1)" },
};

// Counter component — IntersectionObserver Next.js mein same kaam karta hai
const Counter = ({ to, suffix = "" }: { to: string; suffix?: string }) => {
  const [n, setN]   = useState(0);
  const ref         = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      let i = 0;
      const end = parseInt(to);
      const t = setInterval(() => { i++; setN(i); if (i >= end) clearInterval(t); }, Math.ceil(1400 / end));
      obs.disconnect();
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);

  return <span ref={ref}>{n}{suffix}</span>;
};

export default function ViewTutorialsClient() {
  const [cat,    setCat]    = useState("All");
  const [level,  setLevel]  = useState("All Levels");
  const [search, setSearch] = useState("");
  const [view,   setView]   = useState("grid");

  const list = languages.filter(l =>
    (cat   === "All"        || l.category === cat)   &&
    (level === "All Levels" || l.level    === level) &&
    (l.name.toLowerCase().includes(search.toLowerCase()) ||
     l.desc.toLowerCase().includes(search.toLowerCase()) ||
     l.tags.some(t => t.toLowerCase().includes(search.toLowerCase())))
  );

  return (
    <div className="root">

      {/* ─── HERO ─── */}
      <section className="vtHero">
        <div className="heroGrid"  aria-hidden="true"/>
        <div className="heroBlob1" aria-hidden="true"/>
        <div className="heroBlob2" aria-hidden="true"/>
        <div className="heroBlob3" aria-hidden="true"/>

        <div className="heroBody">
          <div className="eyebrow">
            <span className="eyebrowPulse"/>
            Explore All Courses
          </div>

          <h1 className="h1">
            Every Great Developer<br/>
            <span className="h1Grad">Started with One Course.</span>
          </h1>

          <p className="heroPara">
            Structured beginner-to-advanced tutorials across 18 languages.<br/>
            Learn at your own pace — completely free, forever.
          </p>

          <div className="heroCtas">
            <Link href="/starting-learning" className="btnPrimary">
              Start Learning Free
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a href="#courses" className="btnOutline">Browse Courses</a>
          </div>

          <div className="heroStats">
            {[{v:"18",s:"+",l:"Languages"},{v:"500",s:"+",l:"Topics"},{v:"50",s:"K+",l:"Students"},{v:"100",s:"%",l:"Free"}].map(x=>(
              <div key={x.l} className="hStat">
                <strong className="hStatNum"><Counter to={x.v} suffix={x.s}/></strong>
                <span className="hStatLbl">{x.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TOOLBAR ─── */}
      <div className="toolbar" id="courses">
        <div className="searchWrap">
          <svg className="searchIco" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input
            className="searchInput"
            type="search"
            placeholder="Search language, topic or tag…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && <button className="clearX" onClick={() => setSearch("")}>✕</button>}
        </div>

        <div className="filters">
          <div className="pillGroup">
            {CATS.map(c => (
              <button key={c} className={`pill ${cat === c ? "pillOn" : ""}`} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>
          <span className="sep"/>
          <div className="pillGroup">
            {LEVELS.map(l => (
              <button key={l} className={`pill ${level === l ? "pillOn" : ""}`} onClick={() => setLevel(l)}>{l}</button>
            ))}
          </div>
        </div>

        <div className="toolEnd">
          <span className="resultBadge">{list.length} courses</span>
          <div className="viewSwitch">
            <button className={`vBtn ${view === "grid" ? "vBtnOn" : ""}`} onClick={() => setView("grid")} title="Grid">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
            </button>
            <button className={`vBtn ${view === "list" ? "vBtnOn" : ""}`} onClick={() => setView("list")} title="List">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* ─── GRID ─── */}
      <main className={`grid ${view === "list" ? "gridList" : ""}`}>
        {list.length === 0 ? (
          <div className="empty">
            <span>🔍</span>
            <p>No courses found. Try a different filter.</p>
            <button className="resetBtn" onClick={() => { setCat("All"); setLevel("All Levels"); setSearch(""); }}>
              Reset Filters
            </button>
          </div>
        ) : list.map((l, i) => (
          <Link
            key={l.id}
            href={l.path}
            className={`card ${view === "list" ? "cardRow" : ""}`}
            style={{
              ["--c" as string]: l.color,
              ["--g" as string]: l.glow,
              animationDelay: `${i * 0.04}s`,
            }}
          >
            <span className="cardGlow"/>
            <span className="cardLine"/>

            {/* Head */}
            <div className="cardHead">
              <div className="iconBox">
                <span className="iconTxt">{l.icon}</span>
              </div>
              <div className="cardHeadRight">
                {l.badge && <span className="badge">{l.badge}</span>}
                <span className="lvl" style={{ color:LVL[l.level].c, background:LVL[l.level].bg }}>
                  {l.level}
                </span>
              </div>
            </div>

            {/* Content */}
            <h2 className="cardTitle">{l.name}</h2>
            <p className="cardDesc">{l.desc}</p>

            {/* Tags */}
            <div className="tags">
              {l.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>

            {/* Progress */}
            <div className="progRow">
              <div className="progTrack">
                <div className="progBar" style={{ width:`${l.progress}%` }}/>
              </div>
              <span className="progTxt">{l.progress}%</span>
            </div>

            {/* Footer */}
            <div className="cardFoot">
              <div className="footMeta">
                <span>📖 {l.topics} topics</span>
                <span>👥 {l.students}</span>
              </div>
              <span className="footArrow">
                Start
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          </Link>
        ))}
      </main>

      {/* ─── BOTTOM CTA ─── */}
      <section className="botCta">
        <div className="botCtaGlow"/>
        <span className="botEye">Ready to begin?</span>
        <h2 className="botH2">Start Your Tech Career —<br/>It's Completely Free.</h2>
        <p className="botP">No sign-up required. Pick a language and start your first lesson in 30 seconds.</p>
        <Link href="/" className="btnPrimary">
          Get Started Now
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </section>

    </div>
  );
}