export interface BulletItem {
  strong?: string;
  text?: string;
  html?: string;
  isHtml?: boolean;
}

export interface Block {
  type: "paragraph" | "subHeading" | "bulletList" | "codeBox" | "outputBox" | "liveEditor";
  text?: string;
  isHtml?: boolean;
  items?: BulletItem[];
  lang?: string;
  label?: string;
  lines?: string[];
  initialCode?: string;
}

export interface Section {
  sectionId: string;
  title: string;
  blocks: Block[];
}

export interface TopicData {
  meta: {
    title: string; description: string; keywords: string; author: string;
    canonical: string; ogTitle: string; ogDescription: string; ogUrl: string;
    ogImage?: string; ogSiteName: string; twitterReadingTime: string; twitterLevel: string;
    schemaDatePublished: string; schemaDateModified: string;
    schemaProficiencyLevel: string; schemaWordCount: number;
  };
  breadcrumbs: { position: number; name: string; path?: string; }[];
  articleHeader: { badge: string; title: string; subtitle: string; };
  infoCards: { icon: string; label: string; isTime?: boolean; dateTime?: string; value: string; }[];
  sections: Section[];
  faq: { sectionId: string; title: string; items: { q: string; a: string; }[]; };
  nav: { prev: { label: string; path: string; }; next: { label: string; path: string; }; };
  sidebar: {
    quickFacts: { dt: string; dd: string; }[];
    relatedArticles: { label: string; path: string; }[];
    tags: string[];
  };
}