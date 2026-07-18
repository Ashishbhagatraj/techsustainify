// components/HomeClient.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./styles/globals.css"


const languages = [
  { id:"c",          name:"C",          icon:"🔵", color:"#00b4d8", glow:"rgba(0,180,216,0.3)",   path:"/c/c-home",         category:"Core",     level:"Beginner",     topics:32, desc:"Foundation of system programming. Learn pointers, memory management and low-level concepts.",                                    badge:"Most Popular" },
  { id:"cpp",        name:"C++",        icon:"⚡", color:"#a78bfa", glow:"rgba(167,139,250,0.3)", path:"/cpp/cpp-home",     category:"Core",     level:"Intermediate", topics:40, desc:"Power of C plus OOP. Perfect for game development, competitive programming and high-performance systems.",                 badge:"" },
  { id:"java",       name:"Java",       icon:"☕", color:"#f78c6c", glow:"rgba(247,140,108,0.3)", path:"/java/java-home",      category:"Core",     level:"Beginner",     topics:78, desc:"The king of object-oriented programming. Build enterprise apps, Android and backend systems.",                             badge:"Top Rated" },
  { id:"python",     name:"Python",     icon:"🐍", color:"#ffd166", glow:"rgba(255,209,102,0.3)", path:"/python/python-home",    category:"Core",     level:"Beginner",     topics:45, desc:"Simple syntax, powerful results. Best for AI/ML, data science and automation.",                                            badge:"Trending" },
  { id:"sql",        name:"SQL",        icon:"🗄️", color:"#34d399", glow:"rgba(52,211,153,0.3)",  path:"/sql/sql-home",       category:"Database", level:"Beginner",     topics:30, desc:"The king of data. Learn queries, joins, indexes and database design fundamentals.",                                         badge:"" },
  { id:"html",       name:"HTML",       icon:"🌐", color:"#ef4444", glow:"rgba(239,68,68,0.3)",   path:"/html/html-home",      category:"Web",      level:"Beginner",     topics:28, desc:"The skeleton of the web. Every website starts with HTML — begin your journey here.",                                       badge:"Start Here" },
  { id:"css",        name:"CSS",        icon:"🎨", color:"#06b6d4", glow:"rgba(6,182,212,0.3)",   path:"/css/css-home",       category:"Web",      level:"Beginner",     topics:35, desc:"Make the web beautiful. Master layouts, animations and responsive design.",                                                  badge:"" },
  { id:"javascript", name:"JavaScript", icon:"💛", color:"#eab308", glow:"rgba(234,179,8,0.3)",   path:"/javascript/javascript-home",category:"Web",      level:"Beginner",     topics:52, desc:"The brain of the web. From DOM manipulation to async programming — full-stack JavaScript.",                               badge:"Most Used" },
  { id:"reactjs",    name:"React.js",   icon:"⚛️", color:"#38bdf8", glow:"rgba(56,189,248,0.3)",  path:"/react/react-home",     category:"Web",      level:"Intermediate", topics:38, desc:"Modern UI development. Components, hooks, state management and real-world projects.",                                     badge:"Hot 🔥" },
  { id:"nodejs",     name:"Node.js",    icon:"🟢", color:"#68a063", glow:"rgba(104,160,99,0.3)",  path:"/node/node-home",      category:"Backend",  level:"Intermediate", topics:42, desc:"Run JavaScript on the server. Build REST APIs, real-time apps and full-stack JS applications.",                          badge:"Full Stack" },
  { id:"j2ee",       name:"J2EE",       icon:"🏢", color:"#fb923c", glow:"rgba(251,146,60,0.3)",  path:"/j2ee/j2ee-home",      category:"Backend",  level:"Advanced",     topics:25, desc:"Enterprise Java development. Servlets, JSP, Spring Framework and large-scale applications.",                              badge:"" },
  { id:"kotlin",     name:"Kotlin",     icon:"🎯", color:"#7f52ff", glow:"rgba(127,82,255,0.3)",  path:"/kotlin/kotlin-home",    category:"Core",     level:"Intermediate", topics:35, desc:"Modern Android development language. Better syntax than Java, null safety and concise code.",                             badge:"Android" },
  { id:"django",     name:"Django",     icon:"🎸", color:"#44b78b", glow:"rgba(68,183,139,0.3)",  path:"/django/django-home",    category:"Backend",  level:"Intermediate", topics:36, desc:"Python's powerful web framework. Rapid development with built-in ORM and authentication.",                               badge:"Batteries 🔋" },
  { id:"swift",      name:"Swift",      icon:"🍎", color:"#ff6b35", glow:"rgba(255,107,53,0.3)",  path:"/swift/swift-home",     category:"Core",     level:"Intermediate", topics:30, desc:"Powerful language for Apple ecosystem. Build iOS, macOS and watchOS applications.",                                       badge:"iOS" },
  { id:"rust",       name:"Rust",       icon:"🦀", color:"#ce422b", glow:"rgba(206,66,43,0.3)",   path:"/rust/rust-home",      category:"Core",     level:"Advanced",     topics:28, desc:"Memory safety plus blazing speed. The future of systems programming — WebAssembly and OS development.",                 badge:"Fast 🚀" },
  { id:"go",         name:"Go",         icon:"🐹", color:"#00acd7", glow:"rgba(0,172,215,0.3)",   path:"/go/go-home",        category:"Backend",  level:"Intermediate", topics:32, desc:"Google's language. Simple, fast and concurrent. Best for cloud services and microservices.",                             badge:"Cloud ☁️" },
  { id:"ruby",       name:"Ruby",       icon:"💎", color:"#cc342d", glow:"rgba(204,52,45,0.3)",   path:"/ruby/ruby-home",      category:"Backend",  level:"Intermediate", topics:25, desc:"Designed for developer happiness. Rapid web development with the Rails framework.",                                       badge:"" },
  { id:"mongodb",    name:"MongoDB",    icon:"🍃", color:"#00ed64", glow:"rgba(0,237,100,0.3)",   path:"/mongodb/mongodb-home",   category:"Database", level:"Beginner",     topics:24, desc:"The NoSQL leader. JSON-style documents, flexible schema and modern app development.",                                     badge:"NoSQL" },
];

const features = [
  { icon:"⚡", title:"Instant Learning",  desc:"Jump straight into topics — no fluff, no filler. Every tutorial is concise and to the point.",         color:"#ffd166" },
  { icon:"🧩", title:"Structured Path",   desc:"Carefully sequenced curriculum from beginner to advanced. Never feel lost again.",                      color:"#a78bfa" },
  { icon:"💻", title:"Live Code Editor",  desc:"Write and run code directly in your browser. No setup, no installs — just code.",                       color:"#38bdf8" },
  { icon:"🎯", title:"Interview Ready",   desc:"MCQs, interview questions and real-world problems to crack any technical interview.",                    color:"#34d399" },
  { icon:"📱", title:"Mobile Friendly",   desc:"Learn on the go — fully responsive design works perfectly on every device.",                            color:"#f78c6c" },
  { icon:"🆓", title:"100% Free",         desc:"No paywalls, no subscriptions. All content is completely free — forever.",                              color:"#00ed64" },
];

const FAQS = [
  { q:"Do I need any prior programming experience to start?",  a:"Not at all! Our courses are designed from absolute scratch. We explain every concept in plain English with simple examples before going deeper." },
  { q:"Are all the tutorials really free?",                    a:"Yes — 100% free, forever. No hidden fees, no paywalls, no subscription required. Just open a course and start learning right now." },
  { q:"Which programming language should I learn first?",      a:"If you want web development, start with HTML → CSS → JavaScript. For general programming, C or Python are excellent first languages." },
  { q:"How long does it take to complete a course?",           a:"It depends on the language and your daily practice. Most beginner courses take 4–8 weeks if you study 1–2 hours per day consistently." },
  { q:"Do I get a certificate after completing a course?",     a:"We are working on adding certificates soon. Currently the focus is on building real skills — which matter far more to employers than a certificate." },
  { q:"Can I practice code directly on the website?",          a:"Yes! Every tutorial page has a built-in Live Code Editor. You can write, edit and run code directly in your browser — no installation needed." },
  { q:"Is the content suitable for competitive programming?",  a:"Absolutely. The C, C++, Java and Python courses cover data structures, algorithms and problem-solving patterns used in competitive programming." },
  { q:"How often is new content added?",                       a:"We regularly update existing tutorials and add new topics. Follow us on social media or subscribe to our newsletter to stay notified." },
];

const QUIZ = [
  { q:"Which keyword is used to create a class in Java?",     opts:["struct","class","object","define"],                                                                           ans:1, lang:"Java ☕"   },
  { q:"What does HTML stand for?",                            opts:["Hyper Text Markup Language","High Tech Modern Language","Hyper Transfer Markup Link","Home Tool Markup Language"], ans:0, lang:"HTML 🌐" },
  { q:"Which symbol is used for single-line comments in C?",  opts:["#","//","--","/*"],                                                                                           ans:1, lang:"C 🔵"     },
  { q:"Which of these is NOT a Python data type?",            opts:["list","tuple","array","dict"],                                                                                ans:2, lang:"Python 🐍" },
  { q:"What does SQL stand for?",                             opts:["Structured Query Language","Simple Question Language","Standard Query Logic","Sequential Queue Language"],    ans:0, lang:"SQL 🗄️"   },
];

const categories = ["All", "Core", "Web", "Database", "Backend"];
const levels     = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const LEVEL_COLOR: Record<string, { bg: string; color: string }> = {
  Beginner:     { bg:"rgba(52,211,153,0.12)",  color:"#34d399" },
  Intermediate: { bg:"rgba(251,146,60,0.12)",  color:"#fb923c" },
  Advanced:     { bg:"rgba(239,68,68,0.12)",   color:"#f87171" },
};

export default function HomeClient() {
  const [activeCat,   setActiveCat]   = useState("All");
  const [activeLevel, setActiveLevel] = useState("All Levels");
  const [search,      setSearch]      = useState("");
  const [open,        setOpen]        = useState<number | null>(null);
  const [current,     setCurrent]     = useState(0);
  const [selected,    setSelected]    = useState<number | null>(null);
  const [score,       setScore]       = useState(0);
  const [finished,    setFinished]    = useState(false);

  const filtered = languages.filter((l) => {
    const matchCat    = activeCat   === "All"        || l.category === activeCat;
    const matchLevel  = activeLevel === "All Levels"  || l.level    === activeLevel;
    const matchSearch = l.name.toLowerCase().includes(search.toLowerCase()) ||
                        l.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchLevel && matchSearch;
  });

  const q = QUIZ[current];

  const choose = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.ans) setScore(s => s + 1);
  };

  const next = () => {
    if (current + 1 >= QUIZ.length) { setFinished(true); return; }
    setCurrent(c => c + 1);
    setSelected(null);
  };

  const restart = () => {
    setCurrent(0); setSelected(null); setScore(0); setFinished(false);
  };

  return (
    <div className="page">

      {/* ── Hero ── */}
      <header className="hero">
        <div className="heroBg" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="heroOrb" data-i={i} />
          ))}
        </div>
        <div className="heroContent">
          <span className="heroPill">📚 Tech Sustainify</span>
          <h1 className="heroTitle">
            <span className="heroAa">Start Your Coding Journey Today </span>🚀<br />
            <span className="heroAccent">
              Learn programming step-by-step with clear explanations, real-world examples, and practical concepts that actually make sense.
            </span>
          </h1>
          <p className="heroSub">
            {languages.length} languages · {languages.reduce((a, l) => a + l.topics, 0)}+ topics · Free forever
          </p>

          <div className="searchWrap">
            <span className="searchIcon">🔍</span>
            <input
              className="searchInput"
              type="search"
              placeholder="Search language or topic..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              aria-label="Search tutorials"
            />
            {search && (
              <button className="searchClear" onClick={() => setSearch("")}>✕</button>
            )}
          </div>

          <div className="heroBtns">
            <Link href="/starting-learning" className="startBtn">🚀 Start Learning — It's Free</Link>
            <Link href="/view-tutorials" className="viewBtn">📚 View Tutorials</Link>
          </div>
        </div>
      </header>

      {/* ── Stats bar ── */}
      <div className="statsBar">
        {[
          { n:"18+",  l:"Languages" },
          { n:"500+", l:"Topics"    },
          { n:"50K+", l:"Students"  },
          { n:"Free", l:"Forever"   },
        ].map(s => (
          <div key={s.l} className="stat">
            <span className="statNum">{s.n}</span>
            <span className="statLbl">{s.l}</span>
          </div>
        ))}
      </div>

      {/* ── Filters ── */}
      <div className="filtersWrap">
        <div className="filterGroup">
          <span className="filterLabel">Category</span>
          <div className="filterBtns" role="group" aria-label="Filter by category">
            {categories.map(c => (
              <button
                key={c}
                className={`filterBtn ${activeCat === c ? "filterActive" : ""}`}
                onClick={() => setActiveCat(c)}
              >{c}</button>
            ))}
          </div>
        </div>
        <div className="filterGroup">
          <span className="filterLabel">Level</span>
          <div className="filterBtns" role="group" aria-label="Filter by level">
            {levels.map(l => (
              <button
                key={l}
                className={`filterBtn ${activeLevel === l ? "filterActive" : ""}`}
                onClick={() => setActiveLevel(l)}
              >{l}</button>
            ))}
          </div>
        </div>
        <span className="resultCount">
          {filtered.length} result{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* ── Cards Grid ── */}
      <main className="grid" aria-label="Tutorial cards">
        {filtered.length === 0 ? (
          <div className="empty">
            <span>😕</span>
            <p>No results found — try changing your search or filter.</p>
          </div>
        ) : (
          filtered.map((lang, idx) => (
            <Link
              href={lang.path}
              key={lang.id}
              className="card"
              style={{
                ["--accent" as string]: lang.color,
                ["--glow"   as string]: lang.glow,
                animationDelay: `${idx * 0.05}s`,
              }}
              aria-label={`${lang.name} tutorial`}
            >
              <span className="cardTopLine" />
              {lang.badge && <span className="cardBadge">{lang.badge}</span>}
              <div className="cardIcon">{lang.icon}</div>
              <h2 className="cardName">{lang.name}</h2>
              <span
                className="cardLevel"
                style={{
                  background: LEVEL_COLOR[lang.level].bg,
                  color:      LEVEL_COLOR[lang.level].color,
                }}
              >{lang.level}</span>
              <p className="cardDesc">{lang.desc}</p>
              <div className="cardFooter">
                <span className="cardTopics">📖 {lang.topics} topics</span>
                <span className="cardArrow">Start →</span>
              </div>
            </Link>
          ))
        )}
      </main>

      {/* ── Bottom CTA ── */}
      <section className="cta">
        <h2 className="ctaTitle">Start Your Coding Journey — It's Free!</h2>
        <p className="ctaSub">No signup required. Just pick a language and start learning.</p>
        <Link href="/view-tutorials" className="ctaBtn">Browse All Courses →</Link>
      </section>

      {/* ── Path Banner ── */}
      <section className="pathBanner">
        <div className="pathBannerInner">
          <div className="pathText">
            <h2 className="pathTitle">
              Every Great Coder<br />
              <span className="pathAccent">Started Somewhere.</span>
            </h2>
            <p className="pathSub">
              No prior experience needed. Our structured path takes you from absolute beginner to job-ready professional — step by step.
            </p>
            <Link href="starting-learning" className="pathBtn">Begin Your Journey →</Link>
          </div>
          <div className="pathSteps">
            {["Pick a Language","Follow the Path","Practice & Build","Get Hired 🎉"].map((s, i) => (
              <div key={s} className="pathStep">
                <span className="pathStepNum">{i + 1}</span>
                <span className="pathStepLabel">{s}</span>
                {i < 3 && <span className="pathStepLine" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Companies ── */}
      <section className="companies">
        <div className="companiesInner">
          <div className="companiesHead">
            <span className="testiPill">🏢 Industry</span>
            <h2 className="testiH2">Languages Used by Top Companies</h2>
            <p className="testiSub">The same languages you learn here power the world's biggest tech companies.</p>
          </div>
          <div className="companyGrid">
            {[
              { company:"Google",    lang:"Java · Python · Go",       color:"#4285f4", icon:"G",  desc:"Search, Android, Cloud" },
              { company:"Amazon",    lang:"Java · Python · Node.js",  color:"#ff9900", icon:"A",  desc:"AWS, E-commerce, Alexa" },
              { company:"Netflix",   lang:"Java · Python · Node.js",  color:"#e50914", icon:"N",  desc:"Streaming, Microservices" },
              { company:"Meta",      lang:"JavaScript · React · C++", color:"#0866ff", icon:"M",  desc:"Facebook, Instagram, WhatsApp" },
              { company:"Microsoft", lang:"Java · C++ · TypeScript",  color:"#00a4ef", icon:"Ms", desc:"Azure, Office, Xbox" },
              { company:"Uber",      lang:"Go · Node.js · Python",    color:"#000000", icon:"U",  desc:"Rides, Maps, Payments" },
            ].map((c, i) => (
              <div
                key={c.company}
                className="companyCard"
                style={{ ["--cc" as string]: c.color, animationDelay:`${i * 0.07}s` }}
              >
                <div
                  className="companyLogo"
                  style={{
                    background: `color-mix(in srgb, ${c.color} 15%, #0d1421)`,
                    border:     `1.5px solid color-mix(in srgb, ${c.color} 35%, transparent)`,
                    color:       c.color,
                  }}
                >{c.icon}</div>
                <div className="companyInfo">
                  <h3 className="companyName">{c.company}</h3>
                  <p  className="companyDesc">{c.desc}</p>
                </div>
                <div className="companyLangs">
                  {c.lang.split(" · ").map(l => (
                    <span key={l} className="companyLangTag">{l}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="companiesCta">
            <p className="companiesCtaText">🎯 Master these in-demand languages and get hired at companies like these.</p>
            <Link href="/starting-learning" className="companiesCtaBtn">Start Learning Today →</Link>
          </div>
        </div>
      </section>

      {/* ── Final Banner ── */}
      <section className="finalBanner">
        <div className="finalBannerGlow" />
        <div className="finalBannerInner">
          <div className="finalBannerLeft">
            <h2 className="finalBannerH2">
              Your Future in Tech<br />
              <span className="finalBannerAccent">Starts with One Click.</span>
            </h2>
            <p className="finalBannerP">
              18+ languages. 500+ topics. Zero cost.<br />
              No sign-up. No downloads. Just open and learn.
            </p>
            <div className="finalBannerBtns">
              <Link href="/starting-learning"      className="startBtn">🚀 Start Learning Free</Link>
              <Link href="/view-tutorials" className="viewBtn">Browse Courses</Link>
            </div>
          </div>
          <div className="finalBannerStats">
            {[
              { icon:"👨‍💻", val:"50,000+", label:"Active Learners" },
              { icon:"📖",  val:"500+",    label:"Free Topics"     },
              { icon:"🏆",  val:"18+",     label:"Languages"       },
              { icon:"⭐",  val:"4.9/5",   label:"Avg. Rating"     },
            ].map(s => (
              <div key={s.label} className="finalStat">
                <span    className="finalStatIcon">{s.icon}</span>
                <strong  className="finalStatVal">{s.val}</strong>
                <span    className="finalStatLabel">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section sectionDark" aria-labelledby="features-heading">
        <div className="sectionHead">
          <span className="sectionPill">✨ Why Us</span>
          <h2 className="sectionTitle" id="features-heading">Everything You Need to Succeed</h2>
          <p className="sectionSub">Built for serious learners who want real results, not just certifications.</p>
        </div>
        <div className="featGrid">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="featCard"
              style={{ ["--fc" as string]: f.color, animationDelay:`${i * 0.08}s` }}
            >
              <span className="featIcon" style={{ color: f.color }}>{f.icon}</span>
              <h3  className="featTitle">{f.title}</h3>
              <p   className="featDesc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="nlSection">
        <div className="nlGlow" />
        <div className="nlInner">
          <div className="nlLeft">
            <span className="nlPill">📬 Stay Updated</span>
            <h2 className="nlH2">Get New Tutorials<br />Delivered to You.</h2>
            <p className="nlP">Join 50,000+ developers. No spam — just quality content, tips and new course announcements.</p>
            <div className="nlPerks">
              {["Weekly coding tips","New course alerts","Interview prep Q&A","100% free, unsubscribe anytime"].map(p => (
                <span key={p} className="nlPerk">
                  <span className="nlCheck">✓</span>{p}
                </span>
              ))}
            </div>
          </div>
          <div className="nlRight">
            <div className="nlCard">
              <h3 className="nlCardTitle">Subscribe for Free</h3>
              <p  className="nlCardSub">Get instant access to our beginner guide when you subscribe.</p>
              <div className="nlForm">
                <input className="nlInput" type="text"  placeholder="Your Name"         />
                <input className="nlInput" type="email" placeholder="Your Email Address" />
                <button className="nlBtn">Subscribe Now 🚀</button>
              </div>
              <p className="nlDisclaimer">We respect your privacy. No spam, ever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quiz ── */}
      <section className="quiz">
        <div className="quizHead">
          <span className="testiPill">🧠 Quick Challenge</span>
          <h2 className="testiH2">Test Your Coding Knowledge</h2>
          <p className="testiSub">5 quick questions. How many can you get right?</p>
        </div>
        <div className="quizCard">
          {!finished ? (
            <>
              <div className="quizProgress">
                <div className="quizProgressFill" style={{ width:`${(current / QUIZ.length) * 100}%` }} />
              </div>
              <div className="quizMeta">
                <span className="quizLang">{q.lang}</span>
                <span className="quizCount">{current + 1} / {QUIZ.length}</span>
              </div>
              <p className="quizQ">{q.q}</p>
              <div className="quizOpts">
                {q.opts.map((o, i) => (
                  <button
                    key={i}
                    className={`quizOpt ${selected !== null && i === q.ans ? "quizCorrect" : ""} ${selected === i && i !== q.ans ? "quizWrong" : ""} ${selected === null ? "quizOptIdle" : ""}`}
                    onClick={() => choose(i)}
                    disabled={selected !== null}
                  >
                    <span className="quizOptLetter">{String.fromCharCode(65 + i)}</span>
                    {o}
                  </button>
                ))}
              </div>
              {selected !== null && (
                <div className="quizFeedback">
                  <span>{selected === q.ans ? "✅ Correct!" : `❌ Correct answer: ${q.opts[q.ans]}`}</span>
                  <button className="quizNext" onClick={next}>
                    {current + 1 >= QUIZ.length ? "See Results" : "Next →"}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="quizResult">
              <span className="quizResultEmoji">
                {score === 5 ? "🏆" : score >= 3 ? "🎉" : "💪"}
              </span>
              <h3 className="quizResultScore">{score} / {QUIZ.length}</h3>
              <p className="quizResultMsg">
                {score === 5
                  ? "Perfect score! You're a natural coder."
                  : score >= 3
                  ? "Great job! Keep learning to improve further."
                  : "Good attempt! Our tutorials will help you ace this next time."}
              </p>
              <div className="quizResultBtns">
                <button className="quizNext" onClick={restart}>Try Again 🔄</button>
                <a href="#courses" className="quizLearnBtn">Start Learning →</a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq">
        <div className="faqHead">
          <span className="testiPill">❓ FAQ</span>
          <h2 className="testiH2">Frequently Asked Questions</h2>
          <p className="testiSub">Everything you need to know before you start learning.</p>
        </div>
        <div className="faqList">
          {FAQS.map((f, i) => (
            <div key={i} className={`faqItem ${open === i ? "faqOpen" : ""}`}>
              <button className="faqQ" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <span className="faqIcon">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <div className="faqA">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}