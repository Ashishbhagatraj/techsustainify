// components/StartLearningClient.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import "../styles/Starting.css"
// ─── Data ─────────────────────────────────────────────────────────────────────

const STEPS = [
  { n:"01", icon:"🎯", title:"Pick Your Goal",        desc:"Decide what you want to build — a website, an app, a career in tech, or just learn for fun.", color:"#818cf8" },
  { n:"02", icon:"📘", title:"Choose a Language",     desc:"Start with one language. Beginners: HTML/CSS → JavaScript, or C → Python is the ideal path.", color:"#38bdf8" },
  { n:"03", icon:"🧑‍💻", title:"Follow the Tutorials", desc:"Read each topic step by step. Don't skip — every concept builds on the previous one.",          color:"#34d399" },
  { n:"04", icon:"✏️", title:"Practice Daily",         desc:"Code for at least 30 minutes every day. Consistency beats intensity — always.",                   color:"#f97316" },
  { n:"05", icon:"🏗️", title:"Build Real Projects",    desc:"Apply what you learn. Build a calculator, a to-do app or a personal portfolio site.",             color:"#a78bfa" },
  { n:"06", icon:"🚀", title:"Land Your First Job",    desc:"Publish your projects on GitHub, polish your resume and start applying with confidence.",           color:"#fb923c" },
];

const LANGUAGES = [
  { icon:"H",   name:"HTML",       sub:"Web Foundation",       color:"#fb923c", path:"/html/html-home",             level:"Beginner",     time:"2–3 weeks"  },
  { icon:"CS",  name:"CSS",        sub:"Web Styling",          color:"#06b6d4", path:"/css/css-home",               level:"Beginner",     time:"2–3 weeks"  },
  { icon:"C",   name:"C",          sub:"System Programming",   color:"#38bdf8", path:"/c/c-home",                   level:"Beginner",     time:"4–6 weeks"  },
  { icon:"C+",  name:"C++",        sub:"OOP & Systems",        color:"#818cf8", path:"/cpp/cpp-home",               level:"Beginner",     time:"5–7 weeks"  },
  { icon:"J",   name:"Java",       sub:"OOP & Enterprise",     color:"#f97316", path:"/java/java-home",             level:"Beginner",     time:"6–8 weeks"  },
  { icon:"J2",  name:"J2EE",       sub:"Enterprise Java",      color:"#f43f5e", path:"/j2ee/j2ee-home",             level:"Advanced",     time:"8–10 weeks" },
  { icon:"Py",  name:"Python",     sub:"AI / Automation",      color:"#facc15", path:"/python/python-home",         level:"Beginner",     time:"4–5 weeks"  },
  { icon:"JS",  name:"JavaScript", sub:"Web Interactivity",    color:"#eab308", path:"/javascript/javascript-home", level:"Beginner",     time:"4–6 weeks"  },
  { icon:"Re",  name:"React.js",   sub:"Modern UI",            color:"#38bdf8", path:"/react/react-home",           level:"Intermediate", time:"5–7 weeks"  },
  { icon:"No",  name:"Node.js",    sub:"Backend JS",           color:"#4ade80", path:"/nodejs/nodejs-home",         level:"Intermediate", time:"4–6 weeks"  },
  { icon:"SQL", name:"SQL",        sub:"Database Queries",     color:"#a78bfa", path:"/sql/sql-home",               level:"Beginner",     time:"3–4 weeks"  },
  { icon:"Mo",  name:"MongoDB",    sub:"NoSQL Database",       color:"#34d399", path:"/mongodb/mongodb-home",       level:"Intermediate", time:"3–4 weeks"  },
  { icon:"Kt",  name:"Kotlin",     sub:"Android Dev",          color:"#f472b6", path:"/kotlin/kotlin-home",         level:"Intermediate", time:"5–6 weeks"  },
  { icon:"Sw",  name:"Swift",      sub:"iOS Development",      color:"#fb923c", path:"/swift/swift-home",           level:"Intermediate", time:"5–6 weeks"  },
  { icon:"Go",  name:"Go",         sub:"Cloud & Backend",      color:"#22d3ee", path:"/go/go-home",                 level:"Intermediate", time:"4–5 weeks"  },
  { icon:"Rs",  name:"Rust",       sub:"Systems & Safety",     color:"#f97316", path:"/rust/rust-home",             level:"Advanced",     time:"7–9 weeks"  },
  { icon:"Rb",  name:"Ruby",       sub:"Web & Scripting",      color:"#f43f5e", path:"/ruby/ruby-home",             level:"Beginner",     time:"3–5 weeks"  },
  { icon:"Dj",  name:"Django",     sub:"Python Web Framework", color:"#4ade80", path:"/django/django-home",         level:"Intermediate", time:"5–6 weeks"  },
];

const TIPS = [
  { icon:"🧠", title:"Learn by Doing",            desc:"Reading is not enough. Type every code example yourself — muscle memory matters." },
  { icon:"🐛", title:"Embrace Errors",             desc:"Bugs are teachers. Read the error message carefully before searching for a solution." },
  { icon:"📓", title:"Keep a Code Journal",        desc:"Write down what you learned each day. Teaching it to yourself is the best revision." },
  { icon:"⏱️", title:"Use the Pomodoro Technique", desc:"25 min focus + 5 min break. Focused short sessions beat marathon cramming sessions." },
  { icon:"🌐", title:"Build in Public",            desc:"Share your progress on LinkedIn or Twitter. Accountability accelerates learning." },
  { icon:"🤝", title:"Join a Community",           desc:"Discord, Reddit, Stack Overflow — ask questions fearlessly. Everyone started somewhere." },
];

const TRACKS = [
  {
    label:"Web Development",       path:"/html/html-home",   color:"#38bdf8", glow:"rgba(56,189,248,0.15)",  icon:"🌐",
    steps:["HTML Basics","CSS & Flexbox","JavaScript ES6+","React.js","Node.js & Express","Deploy to Vercel"],
  },
  {
    label:"Programming Fundamentals", path:"/c/c-home",   color:"#f97316", glow:"rgba(249,115,22,0.15)",  icon:"⚙️",
    steps:["C Language","Data Types & Loops","Functions & Pointers","OOP with Java","Data Structures","Problem Solving"],
  },
  {
    label:"Data Science & AI",     path:"/python/python-home", color:"#a78bfa", glow:"rgba(167,139,250,0.15)", icon:"🤖",
    steps:["Python Basics","NumPy & Pandas","Data Visualization","Machine Learning","Deep Learning","Real Projects"],
  },
];

const CHECKLIST = [
  "Set up VS Code on your computer",
  "Write your first Hello World program",
  "Complete 5 tutorial topics",
  "Solve 3 practice problems",
  "Build your first mini project",
  "Share your project on GitHub",
  "Complete one full language course",
  "Apply for your first tech role",
];

const featuredCourses = [
  { eye:"⭐ Featured Course",     h2:"Start with Java — The Most Complete Course",              p:"78 topics, OOP deep-dives, real-world projects and interview preparation. Java is the #1 language for enterprise development and Android.",                                                               list:["78 structured topics","OOP, Collections & Threads","Interview Q&A included","Completely free — no login"],                  link:"/java/java-home",        btnLabel:"Start Java Course",        icon:"☕", name:"Java",       sub:"OOP & Enterprise",      badge:"Top Rated",          topics:["Basics","OOP","Collections","Threads","Exceptions","Projects"],       satisfaction:95 },
  { eye:"🔥 Most Popular",        h2:"Master Python — From Beginner to Advanced",               p:"85 topics covering scripting, data structures, file handling, and automation. Python is the top language for AI, ML, and backend development.",                                                             list:["85 structured topics","File I/O, Modules & Decorators","Mini projects included","Completely free — no login"],              link:"/python/python-home",      btnLabel:"Start Python Course",      icon:"🐍", name:"Python",     sub:"AI / Automation",       badge:"Most Popular",       topics:["Basics","Functions","OOP","File I/O","Libraries","Projects"],         satisfaction:97 },
  { eye:"🌐 Web Essentials",      h2:"Learn HTML — Build Your First Webpage Today",             p:"50 topics from basic tags to semantic HTML5. The gateway to web development — everything you need to structure the web.",                                                                                   list:["50 structured topics","Semantic HTML5 & Forms","SEO best practices","Completely free — no login"],                          link:"/html/html-home",        btnLabel:"Start HTML Course",        icon:"🌐", name:"HTML",       sub:"Web Foundation",        badge:"Beginner Friendly",  topics:["Tags","Forms","Tables","Semantic","Media","Projects"],                satisfaction:93 },
  { eye:"🎨 Style the Web",       h2:"Master CSS — Design Stunning Interfaces",                 p:"60 topics covering Flexbox, Grid, animations, and responsive design. Turn plain HTML into beautiful, professional websites.",                                                                               list:["60 structured topics","Flexbox, Grid & Animations","Responsive design patterns","Completely free — no login"],             link:"/css/css-home",         btnLabel:"Start CSS Course",         icon:"🎨", name:"CSS",        sub:"Web Styling",           badge:"Highly Rated",       topics:["Selectors","Flexbox","Grid","Animations","Responsive","Projects"],    satisfaction:94 },
  { eye:"🔧 System Programming",  h2:"Learn C — The Foundation of All Programming",             p:"65 topics from variables to pointers, memory management and file handling. C is the base of almost every modern language and OS.",                                                                           list:["65 structured topics","Pointers & Memory Management","File I/O & Structures","Completely free — no login"],                link:"/c/c-home",           btnLabel:"Start C Course",           icon:"⚙️", name:"C",          sub:"System Programming",    badge:"Core Language",      topics:["Basics","Pointers","Arrays","Structs","File I/O","Projects"],         satisfaction:91 },
  { eye:"🧱 OOP & Systems",       h2:"Master C++ — Power, Performance and OOP",                 p:"75 topics from basics to STL, templates and advanced OOP. C++ is used in game engines, compilers, and high-performance systems.",                                                                           list:["75 structured topics","OOP, Templates & STL","Memory & Performance","Completely free — no login"],                         link:"/cpp/cpp-home",       btnLabel:"Start C++ Course",         icon:"🧱", name:"C++",        sub:"OOP & Systems",         badge:"High Performance",   topics:["Basics","OOP","Templates","STL","Pointers","Projects"],               satisfaction:92 },
  { eye:"🏢 Enterprise Java",     h2:"Learn J2EE — Build Enterprise-Grade Applications",        p:"80 topics covering Servlets, JSP, EJB, JPA, and web services. J2EE is the gold standard for large-scale Java backend development.",                                                                         list:["80 structured topics","Servlets, JSP & EJB","JPA & Web Services","Completely free — no login"],                            link:"/j2ee/j2ee-home",        btnLabel:"Start J2EE Course",        icon:"🏢", name:"J2EE",       sub:"Enterprise Java",       badge:"Advanced",           topics:["Servlets","JSP","EJB","JPA","REST","Projects"],                       satisfaction:89 },
  { eye:"⚡ Make it Dynamic",     h2:"Learn JavaScript — Add Life to Your Websites",            p:"90 topics from variables to async/await, DOM manipulation, and ES6+. JavaScript runs the modern web — frontend and backend both.",                                                                           list:["90 structured topics","DOM, Events & Fetch API","ES6+ modern syntax","Completely free — no login"],                        link:"/javascript/javascript-home",  btnLabel:"Start JavaScript Course",  icon:"⚡", name:"JavaScript", sub:"Web Interactivity",     badge:"In Demand",          topics:["Basics","DOM","ES6+","Async","APIs","Projects"],                      satisfaction:96 },
  { eye:"⚛️ Modern Frontend",     h2:"Master React.js — Build Powerful SPAs",                   p:"70 topics including hooks, state management, routing, and API integration. React powers the world's most interactive web applications.",                                                                     list:["70 structured topics","Hooks, Context & Redux","REST API integration","Completely free — no login"],                        link:"/react/react-home",       btnLabel:"Start React Course",       icon:"⚛️", name:"React.js",   sub:"Modern UI",             badge:"Trending",           topics:["JSX","Hooks","Router","Context","Redux","Projects"],                  satisfaction:98 },
  { eye:"🟢 Backend JS",          h2:"Learn Node.js — Server-Side JavaScript Mastery",          p:"68 topics covering Express, REST APIs, authentication, and database integration. Node.js lets you run JavaScript on the server at scale.",                                                                   list:["68 structured topics","Express & REST APIs","Auth & Middleware","Completely free — no login"],                              link:"/node/node-home",        btnLabel:"Start Node.js Course",     icon:"🟢", name:"Node.js",    sub:"Backend JS",            badge:"Full Stack",         topics:["Basics","Express","REST","Auth","MongoDB","Projects"],                satisfaction:94 },
  { eye:"🗄️ Data Essentials",     h2:"Learn SQL — Query Any Database with Confidence",          p:"55 topics covering SELECT to advanced JOINs, subqueries, indexes and stored procedures. SQL is a must-have skill for every developer.",                                                                     list:["55 structured topics","JOINs, Subqueries & Views","Real database exercises","Completely free — no login"],                 link:"/sql/sql-home",         btnLabel:"Start SQL Course",         icon:"🗄️", name:"SQL",        sub:"Database Queries",      badge:"Essential Skill",    topics:["SELECT","JOINs","Subqueries","Indexes","Procedures","Projects"],      satisfaction:92 },
  { eye:"🍃 NoSQL Database",      h2:"Learn MongoDB — Modern NoSQL for Modern Apps",             p:"52 topics covering documents, collections, aggregation pipelines, and Mongoose. MongoDB is the #1 choice for Node.js and cloud-native apps.",                                                               list:["52 structured topics","CRUD & Aggregation","Mongoose & Indexing","Completely free — no login"],                            link:"/mongodb/mongodb-home",     btnLabel:"Start MongoDB Course",     icon:"🍃", name:"MongoDB",    sub:"NoSQL Database",        badge:"Cloud Ready",        topics:["Basics","CRUD","Aggregation","Mongoose","Indexes","Projects"],        satisfaction:91 },
  { eye:"📱 Android Dev",         h2:"Learn Kotlin — Modern Android Development",               p:"65 topics from null safety to coroutines, Jetpack and Android UI. Kotlin is Google's official language for Android app development.",                                                                        list:["65 structured topics","Coroutines & Jetpack","Android UI & Navigation","Completely free — no login"],                      link:"/kotlin/kotlin-home",      btnLabel:"Start Kotlin Course",      icon:"📱", name:"Kotlin",     sub:"Android Dev",           badge:"Google Official",    topics:["Basics","OOP","Coroutines","Jetpack","UI","Projects"],                satisfaction:93 },
  { eye:"🍎 iOS Development",     h2:"Learn Swift — Build Apps for iPhone & Mac",               p:"62 topics covering Swift syntax, UIKit, SwiftUI, and App Store deployment. Swift is Apple's powerful language for iOS and macOS apps.",                                                                      list:["62 structured topics","SwiftUI & UIKit","App Store deployment","Completely free — no login"],                               link:"/swift/swift-home",       btnLabel:"Start Swift Course",       icon:"🍎", name:"Swift",      sub:"iOS Development",       badge:"Apple Official",     topics:["Basics","OOP","SwiftUI","UIKit","Networking","Projects"],             satisfaction:92 },
  { eye:"☁️ Cloud & Backend",     h2:"Learn Go — Fast, Simple, and Scalable",                   p:"58 topics from syntax to goroutines, channels, and REST APIs. Go is the language of choice at Google, Uber, and Docker for cloud services.",                                                                list:["58 structured topics","Goroutines & Channels","REST APIs & Microservices","Completely free — no login"],                   link:"/go/go-home",          btnLabel:"Start Go Course",          icon:"🐹", name:"Go",         sub:"Cloud & Backend",       badge:"Cloud Native",       topics:["Basics","Goroutines","Channels","REST","Modules","Projects"],         satisfaction:93 },
  { eye:"🦀 Systems & Safety",    h2:"Learn Rust — Memory Safety Without Garbage Collection",   p:"70 topics from ownership to async Rust, WebAssembly, and systems programming. Rust is the most loved language for safe, fast, low-level code.",                                                              list:["70 structured topics","Ownership & Borrowing","Async & WebAssembly","Completely free — no login"],                         link:"/rust/rust-home",        btnLabel:"Start Rust Course",        icon:"🦀", name:"Rust",       sub:"Systems & Safety",      badge:"Most Loved",         topics:["Basics","Ownership","Lifetimes","Traits","Async","Projects"],        satisfaction:94 },
  { eye:"💎 Web & Scripting",     h2:"Learn Ruby — Elegant, Readable, Productive",              p:"55 topics covering Ruby syntax, blocks, gems, and Rails basics. Ruby's clean syntax makes it one of the fastest languages to learn and ship with.",                                                          list:["55 structured topics","Blocks, Procs & Gems","Rails introduction","Completely free — no login"],                           link:"/ruby/ruby-home",        btnLabel:"Start Ruby Course",        icon:"💎", name:"Ruby",       sub:"Web & Scripting",       badge:"Developer Friendly", topics:["Basics","OOP","Blocks","Gems","Rails","Projects"],                    satisfaction:90 },
  { eye:"🎸 Python Web Framework", h2:"Learn Django — Build Full-Stack Web Apps Fast",           p:"65 topics covering models, views, templates, REST APIs, and deployment. Django's batteries-included philosophy makes it the fastest way to ship Python web apps.",                                          list:["65 structured topics","MVT, ORM & Admin Panel","REST APIs & Deployment","Completely free — no login"],                     link:"/django/django-home",      btnLabel:"Start Django Course",      icon:"🎸", name:"Django",     sub:"Python Web Framework",  badge:"Batteries Included", topics:["Setup","Models","Views","Templates","REST","Projects"],               satisfaction:95 },
];

const LVL_COLOR: Record<string, string> = {
  Beginner:"#4ade80", Intermediate:"#fb923c", Advanced:"#f87171",
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function StartLearningClient() {
  const [done,        setDone]        = useState<Set<number>>(new Set());
  const [activeTrack, setActiveTrack] = useState(0);

  const toggle = (i: number) => {
    const s = new Set(done);
    s.has(i) ? s.delete(i) : s.add(i);
    setDone(s);
  };

  return (
    <div className="root">

      {/* ══════ HERO ══════ */}
      <section className="heroa">
        <div className="heroGrid"  aria-hidden="true"/>
        <div className="heroBlob1" aria-hidden="true"/>
        <div className="heroBlob2" aria-hidden="true"/>

        <div className="heroBody">
          <span className="heroBadge">
            <span className="badgeDot"/>
            Your Coding Journey Starts Here
          </span>

          <h1 className="heroH1">
            From Zero to Developer —<br/>
            <span className="heroGrad">One Step at a Time.</span>
          </h1>

          <p className="heroP">
            No prior experience needed. Follow our structured roadmap,
            pick your first language, and write real code today.
          </p>

          <div className="heroActions">
            <a href="#roadmap" className="btnPrimary">
              View Roadmap
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <Link href="/view-tutorials" className="btnGhost">Browse All Courses</Link>
          </div>

          <div className="heroStats">
            {[["18+","Languages"],["500+","Free Topics"],["6 Steps","To Your First Job"]].map(([v,l])=>(
              <div key={l} className="hStat">
                <strong>{v}</strong><span>{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="codeFloat" aria-hidden="true">
          <div className="codeFloatBar">
            <span data-c="r"/><span data-c="y"/><span data-c="g"/>
            <span className="codeFloatFile">main.java</span>
          </div>
          <pre className="codeFloatPre">{`public class Main {
  public static void
  main(String[] args) {
    System.out.println(
      "Hello, World!");
  }
}`}</pre>
          <div className="codeFloatOut">
            <span className="codeFloatLabel">Output</span>
            <span className="codeFloatVal">Hello, World!</span>
          </div>
        </div>
      </section>

      {/* ══════ FEATURED COURSES ══════ */}
      <section className="featured">
        {featuredCourses.map((course, index) => (
          <div key={index} className="featuredInner" style={{ marginBottom:"40px" }}>
            <div className="featuredLeft">
              <span className="secEye">{course.eye}</span>
              <h2 className="featH2">{course.h2}</h2>
              <p className="featP">{course.p}</p>
              <ul className="featList">
                {course.list.map(f => (
                  <li key={f}>
                    <span className="featCheck">✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link href={course.link} className="btnPrimary" style={{ marginTop:"8px" }}>
                {course.btnLabel}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
            <div className="featuredRight">
              <div className="featCard">
                <div className="featCardHead">
                  <span className="featCardIcon">{course.icon}</span>
                  <div>
                    <p className="featCardName">{course.name}</p>
                    <p className="featCardSub">{course.sub}</p>
                  </div>
                  <span className="featBadge">{course.badge}</span>
                </div>
                <div className="featTopics">
                  {course.topics.map((t, i) => (
                    <span key={t} className="featTopic" style={{ animationDelay:`${i * 0.1}s` }}>{t}</span>
                  ))}
                </div>
                <div className="featBar">
                  <div className="featBarFill" style={{ width:`${course.satisfaction}%` }}/>
                </div>
                <p className="featBarLabel">{course.satisfaction}% student satisfaction</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ══════ ROADMAP ══════ */}
      <section className="section" id="roadmap">
        <div className="secHead">
          <span className="secEye">📍 Roadmap</span>
          <h2 className="secH2">Your 6-Step Journey to Becoming a Developer</h2>
          <p className="secP">Follow this proven path — thousands of students have used it to land their first tech job.</p>
        </div>
        <div className="steps">
          {STEPS.map((s, i) => (
            <div key={s.n} className="step" style={{ ["--sc" as string]:s.color, animationDelay:`${i*0.08}s` }}>
              <div className="stepNumWrap">
                <span className="stepNum">{s.n}</span>
                {i < STEPS.length - 1 && <span className="stepLine"/>}
              </div>
              <div className="stepCard">
                <span className="stepIcon">{s.icon}</span>
                <div>
                  <h3 className="stepTitle">{s.title}</h3>
                  <p className="stepDesc">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ LEARNING TRACKS ══════ */}
      <section className="section" id="tracks">
        <div className="secHead">
          <span className="secEye">🗺️ Learning Tracks</span>
          <h2 className="secH2">Choose Your Path</h2>
          <p className="secP">Pick the track that matches your goal. Each is structured from beginner to job-ready.</p>
        </div>

        <div className="trackTabs">
          {TRACKS.map((t, i) => (
            <button key={t.label}
              className={`trackTab ${activeTrack === i ? "trackTabOn" : ""}`}
              style={activeTrack === i ? { ["--tc" as string]:t.color } : {}}
              onClick={() => setActiveTrack(i)}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {TRACKS.map((t, ti) => ti !== activeTrack ? null : (
          <div key={t.label} className="trackBody" style={{ ["--tc" as string]:t.color, ["--tg" as string]:t.glow }}>
            <div className="trackSteps">
              {t.steps.map((s, si) => (
                <div key={s} className="trackStep" style={{ animationDelay:`${si*0.07}s` }}>
                  <span className="trackStepNum">{si + 1}</span>
                  <span className="trackStepName">{s}</span>
                  {si < t.steps.length - 1 && (
                    <svg className="trackArrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  )}
                </div>
              ))}
            </div>
            <Link href={t.path} className="trackCta">
              Start This Track
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        ))}
      </section>

      {/* ══════ CHOOSE LANGUAGE ══════ */}
      <section className="section" id="languages">
        <div className="secHead">
          <span className="secEye">💻 First Language</span>
          <h2 className="secH2">Pick Your First Language</h2>
          <p className="secP">Not sure where to begin? Every card shows difficulty level and estimated time to complete.</p>
        </div>
        <div className="langGrid">
          {LANGUAGES.map((l, i) => (
            <Link key={l.name} href={l.path}
              className="langCard"
              style={{ ["--lc" as string]:l.color, animationDelay:`${i*0.06}s` }}
            >
              <span className="langGlow"/>
              <div className="langIconBox">
                <span className="langIcon">{l.icon}</span>
              </div>
              <div className="langInfo">
                <h3 className="langName">{l.name}</h3>
                <span className="langSub">{l.sub}</span>
              </div>
              <div className="langMeta">
                <span className="langLevel" style={{ color:LVL_COLOR[l.level] }}>{l.level}</span>
                <span className="langTime">⏱ {l.time}</span>
              </div>
              <span className="langArrow">Start →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════ WHY CODE ══════ */}
      <section className="whySection">
        <div className="whyInner">
          <div className="secHead">
            <span className="secEye">💡 Why Code?</span>
            <h2 className="secH2">Why Learning to Code is the Best Investment</h2>
          </div>
          <div className="whyGrid">
            {[
              { icon:"💼", title:"High Demand Jobs",      desc:"Tech roles are among the fastest-growing globally. Companies are constantly hiring skilled developers." },
              { icon:"💰", title:"Top Salaries",           desc:"Software engineers earn some of the highest salaries across all industries — entry-level to senior." },
              { icon:"🌍", title:"Work From Anywhere",     desc:"Remote work is standard in tech. Code from your home, a café or anywhere in the world." },
              { icon:"🧩", title:"Problem-Solving Skills", desc:"Coding sharpens logical thinking and creativity — skills that apply far beyond programming." },
              { icon:"🏗️", title:"Build Real Products",    desc:"Turn ideas into actual apps, websites and tools that people use. Your imagination is the limit." },
              { icon:"📈", title:"Freelance Freedom",      desc:"Take freelance projects, launch your own startup or consult — coding opens multiple income paths." },
            ].map((w, i) => (
              <div key={w.title} className="whyCard" style={{ animationDelay:`${i*0.07}s` }}>
                <span className="whyIcon">{w.icon}</span>
                <h3 className="whyTitle">{w.title}</h3>
                <p className="whyDesc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ TIPS ══════ */}
      <section className="section" id="tips">
        <div className="secHead">
          <span className="secEye">🎓 Pro Tips</span>
          <h2 className="secH2">Tips for Beginners That Actually Work</h2>
          <p className="secP">These habits separate developers who make it from those who quit after week two.</p>
        </div>
        <div className="tipsGrid">
          {TIPS.map((t, i) => (
            <div key={t.title} className="tipCard" style={{ animationDelay:`${i*0.06}s` }}>
              <span className="tipIcon">{t.icon}</span>
              <div>
                <h3 className="tipTitle">{t.title}</h3>
                <p className="tipDesc">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ CHECKLIST ══════ */}
      <section className="section" id="checklist">
        <div className="secHead">
          <span className="secEye">✅ Beginner Checklist</span>
          <h2 className="secH2">Your First Week Progress Tracker</h2>
          <p className="secP">Check off each milestone as you complete it. Progress is motivating!</p>
        </div>
        <div className="checkWrap">
          <div className="checkProgress">
            <div className="checkProgressFill" style={{ width:`${(done.size/CHECKLIST.length)*100}%` }}/>
          </div>
          <p className="checkProgressLabel">{done.size} / {CHECKLIST.length} completed</p>
          <div className="checkList">
            {CHECKLIST.map((item, i) => (
              <button
                key={item}
                className={`checkItem ${done.has(i) ? "checkDone" : ""}`}
                onClick={() => toggle(i)}
              >
                <span className="checkBox">
                  {done.has(i) && (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  )}
                </span>
                <span className="checkText">{item}</span>
                <span className="checkNum">#{i+1}</span>
              </button>
            ))}
          </div>
          {done.size === CHECKLIST.length && (
            <div className="checkComplete">
              🎉 Amazing! You've completed your first week checklist. Time to apply for jobs!
            </div>
          )}
        </div>
      </section>

      {/* ══════ BOTTOM CTA ══════ */}
      <section className="botCta">
        <div className="botGlow"/>
        <span className="secEye" style={{ marginBottom:"16px" }}>🚀 Ready?</span>
        <h2 className="botH2">The Best Time to Start Was Yesterday.<br/>The Second Best Time is Now.</h2>
        <p className="botP">No degree. No experience. No cost. Just open a tutorial and write your first line of code.</p>
        <div className="botBtns">
          <Link href="/view-tutorials" className="btnPrimary">
            Browse All Tutorials
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <Link href="/c/c-home"   className="btnGhost">Start with C</Link>
          <Link href="/java/java-home" className="btnGhost">Start with Java</Link>
        </div>
      </section>

    </div>
  );
}