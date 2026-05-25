// app/[subject]/[topic]/page.tsx
"use client";

import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import styles from "@/app/styles/pagedata.module.css";
import { javaTopicsData } from "@/app/topic/java/page";
import LiveCodeEditor from "@/app/components/code-editor/java/page";
import { useTheme } from "@/app/components/themecontext";
// app/[subject]/[topic]/page.tsx
import { scanAllParams } from "@/lib/scansitemaptopic";

// ====================== INTERFACES ======================
interface BulletItem {
  strong?: string;
  text?: string;
  html?: string;
  isHtml?: boolean;
}

interface Block {
  type: "paragraph" | "subHeading" | "bulletList" | "codeBox" | "outputBox" | "liveEditor";
  text?: string;
  isHtml?: boolean;
  items?: BulletItem[];
  lang?: string;
  label?: string;
  lines?: string[];
  initialCode?: string;
}

interface Section {
  sectionId: string;
  title: string;
  blocks: Block[];
}

interface FAQItem { q: string; a: string; }
interface NavLink { label: string; path: string; }
interface InfoCard { icon: string; label: string; isTime?: boolean; dateTime?: string; value: string; }
interface Breadcrumb { position: number; name: string; path?: string; }
interface SidebarFact { dt: string; dd: string; }
interface SidebarArticle { label: string; path: string; }
interface TopicItem { label: string; path: string; }
interface SidebarSection { heading: string; topics: TopicItem[]; }

interface TopicData {
  meta: {
    title: string; description: string; keywords: string; author: string;
    canonical: string; ogTitle: string; ogDescription: string; ogUrl: string;
    ogImage?: string; ogSiteName: string; twitterReadingTime: string; twitterLevel: string;
    schemaDatePublished: string; schemaDateModified: string;
    schemaProficiencyLevel: string; schemaWordCount: number;
  };
  breadcrumbs: Breadcrumb[];
  articleHeader: { badge: string; title: string; subtitle: string; };
  infoCards: InfoCard[];
  sections: Section[];
  faq: { sectionId: string; title: string; items: FAQItem[]; };
  nav: { prev: NavLink; next: NavLink; };
  sidebar: {
    quickFacts: SidebarFact[];
    relatedArticles: SidebarArticle[];
    tags: string[];
  };
}

// ====================== BLOCK RENDERERS ======================
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

const RenderBlock = ({ block }: { block: Block }) => {
  switch (block.type) {
    case "paragraph":
      return block.isHtml ? 
        <p dangerouslySetInnerHTML={{ __html: block.text ?? "" }} /> : 
        <p>{block.text}</p>;

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
            <span className={styles.codeLang}>{block.lang ?? "☕ Java"}</span>
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

    case "liveEditor":
      return <LiveCodeEditor initialCode={block.initialCode} />;

    default:
      return null;
  }
};

// ====================== MAIN PAGE COMPONENT ======================
export default function DynamicTopicPage() {
  const params = useParams();
  const subject = params.subject as string;
  const topic = params.topic as string;

  const [data, setData] = useState<TopicData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [active, setActive] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sbSearch, setSbSearch] = useState("");
  const { darkMode, toggleTheme } = useTheme();

  // Dynamic JSON Import
  useEffect(() => {
    const loadData = async () => {
      try {
        const importedData = (await import(`@/data/${subject}/${topic}.json`)).default;
        setData(importedData);
        setActive(importedData.articleHeader.title);
      } catch (err) {
        console.error(err);
        setError("Topic data not found");
      } finally {
        setLoading(false);
      }
    };

    if (subject && topic) {
      loadData();
    }
  }, [subject, topic]);

  if (loading) return <div className={styles.loading}>Loading topic...</div>;
  if (error || !data) return <div className={styles.error}>Error: Topic not found</div>;

  const { meta, breadcrumbs, articleHeader, infoCards, sections, faq, nav, sidebar } = data;

  const handleLinkClick = (label: string) => {
    setActive(label);
    setSidebarOpen(false);
  };

  const filteredTopics = (topics: TopicItem[]) =>
    sbSearch.trim() === "" 
      ? topics 
      : topics.filter(t => t.label.toLowerCase().includes(sbSearch.toLowerCase()));

  // JSON-LD Schemas
  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: meta.title,
    datePublished: meta.schemaDatePublished,
    dateModified: meta.schemaDateModified,
    url: meta.canonical,
  };

  return (
    <div className={`${styles.kkk} ${darkMode ? styles.dark : ""}`}>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <link rel="canonical" href={meta.canonical} />
      </Head>

      {/* Hamburger */}
      <button className={styles.hamburger} onClick={() => setSidebarOpen(!sidebarOpen)}>
        <span className={styles.hLine} style={sidebarOpen ? { transform: "rotate(45deg) translate(5px,5px)" } : {}} />
        <span className={styles.hLine} style={sidebarOpen ? { opacity: 0 } : {}} />
        <span className={styles.hLine} style={sidebarOpen ? { transform: "rotate(-45deg) translate(5px,-5px)" } : {}} />
      </button>

      {sidebarOpen && <div className={styles.overlay} onClick={() => setSidebarOpen(false)} />}

      <div className={styles.page}>

        {/* Sidebar */}
        <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}>
          <button className={styles.sidebarClose} onClick={() => setSidebarOpen(false)}>✕</button>
          
          <div className={styles.sidebarHeader}>
            <span className={styles.sidebarIcon}>☕</span>
            <span className={styles.sidebarTitle}>Java Tutorials</span>
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
            {(javaTopicsData as SidebarSection[]).map((section) => {
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
          {/* Breadcrumb, Header, Sections, FAQ etc. */}
          {/* (Pura JSX yahan paste kar sakte hain jaise pehle diya tha) */}

          <nav className={styles.breadcrumb}>
            <ul>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} >
                  {crumb.path ? <Link href={crumb.path} style={{color:"#4f46e5"}}>{crumb.name}</Link> : <span>{crumb.name}</span>}
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

            {/* Info Cards */}
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

            {/* Dynamic Sections */}
            {sections.map((section) => (
              <section key={section.sectionId} className={styles.contentBox}>
                <h2 id={section.sectionId}>{section.title}</h2>
                {section.blocks.map((block, i) => (
                  <RenderBlock key={i} block={block} />
                ))}
              </section>
            ))}

            {/* FAQ */}
            <section className={styles.contentBox}>
              <h2>{faq.title}</h2>
              {faq.items.map((item, i) => (
                <div key={i} className={styles.faqItem}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </section>

            {/* Navigation */}
            <footer className={styles.articleFooter}>
              <Link href={nav.prev.path} className={styles.navBtn}>← {nav.prev.label}</Link>
              <Link href={nav.next.path} className={styles.navBtn}> {nav.next.label} →</Link>
            </footer>
          </article>
        </main>

        {/* Right Sidebar */}
        {/* <aside className={styles.right}>
          <section className={styles.rightCard}>
            <h3>Quick Facts</h3>
            {sidebar.quickFacts.map((f, i) => (
              <div key={i}><strong>{f.dt}</strong>: {f.dd}</div>
            ))}
          </section>
          <section className={styles.rightCard}>
            <h3>Quick Facts</h3>
            {sidebar.quickFacts.map((f, i) => (
              <div key={i}><strong>{f.dt}</strong>: {f.dd}</div>
            ))}
          </section>
        </aside> */}
        {/* Right Sidebar */}
<aside className={styles.right}>

  {/* Quick Facts */}
  <section className={styles.rightCard}>
    <h3 className={styles.rightCardTitle}>⚡ Quick Facts</h3>
    {sidebar.quickFacts.map((f, i) => (
      <div key={i} className={styles.factRow}>
        <strong>{f.dt}</strong>
        <span>{f.dd}</span>
      </div>
    ))}
  </section>

  {/* Related Articles */}
  <section className={styles.rightCard}>
    <h3 className={styles.rightCardTitle}>📰 Related Articles</h3>
    <ul className={styles.relatedList}>
      {sidebar.relatedArticles.map((article, i) => (
        <li key={i} className={styles.relatedItem}>
          <span className={styles.relatedDot} />
          <Link href={article.path} className={styles.relatedLink}>
            {article.label}
          </Link>
        </li>
      ))}
    </ul>
  </section>

  {/* Related Tags */}
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