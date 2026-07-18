import Link from "next/link";

export const htmlTopicsData = [
  {
    heading: "HTML Tutorials",
    topics: [
      { label: "HTML Home",              path: "/html/html-home" },
      { label: "HTML Intro",             path: "/html/html-intro" },
      { label: "HTML Editors",           path: "/html/html-editors" },
      { label: "HTML Basic",             path: "/html/html-basic" },
      { label: "HTML Elements",          path: "/html/html-elements" },
      { label: "HTML Attributes",        path: "/html/html-attributes" },
      { label: "HTML Headings",          path: "/html/html-headings" },
      { label: "HTML Paragraphs",        path: "/html/html-paragraphs" },
      { label: "HTML Styles",            path: "/html/html-styles" },
      { label: "HTML Formatting",        path: "/html/html-formatting" },
      { label: "HTML Quotations",        path: "/html/html-quotations" },
      { label: "HTML Comments",          path: "/html/html-comments" },
      { label: "HTML Colors",            path: "/html/html-colors" },
      { label: "HTML CSS",               path: "/html/html-css" },
      { label: "HTML Links",             path: "/html/html-links" },
      { label: "HTML Images",            path: "/html/html-images" },
      { label: "HTML Favicon",           path: "/html/html-favicon" },
      { label: "HTML Page Title",        path: "/html/html-page-title" },
    ],
  },

  {
    heading: "HTML Tables & Lists",
    topics: [
      { label: "HTML Tables",            path: "/html/html-tables" },
      { label: "HTML Table Borders",     path: "/html/html-table-borders" },
      { label: "HTML Table Sizes",       path: "/html/html-table-sizes" },
      { label: "HTML Lists",             path: "/html/html-lists" },
      { label: "HTML Ordered Lists",     path: "/html/html-ordered-lists" },
      { label: "HTML Unordered Lists",   path: "/html/html-unordered-lists" },
      { label: "HTML Description Lists", path: "/html/html-description-lists" },
    ],
  },

  {
    heading: "HTML Forms",
    topics: [
      { label: "HTML Forms",             path: "/html/html-forms" },
      { label: "HTML Form Attributes",   path: "/html/html-form-attributes" },
      { label: "HTML Input Types",       path: "/html/html-input-types" },
      { label: "HTML Input Attributes",  path: "/html/html-input-attributes" },
      { label: "HTML Textarea",          path: "/html/html-textarea" },
      { label: "HTML Buttons",           path: "/html/html-buttons" },
      { label: "HTML Select",            path: "/html/html-select" },
      { label: "HTML Radio Button",      path: "/html/html-radio-button" },
      { label: "HTML Checkbox",          path: "/html/html-checkbox" },
    ],
  },

  {
    heading: "HTML Multimedia",
    topics: [
      { label: "HTML Audio",             path: "/html/html-audio" },
      { label: "HTML Video",             path: "/html/html-video" },
      { label: "HTML YouTube",           path: "/html/html-youtube" },
      { label: "HTML Iframe",            path: "/html/html-iframe" },
      { label: "HTML Canvas",            path: "/html/html-canvas" },
      { label: "HTML SVG",               path: "/html/html-svg" },
    ],
  },

  {
    heading: "HTML Semantic Elements",
    topics: [
      { label: "HTML Semantic",          path: "/html/html-semantic" },
      { label: "HTML Header",            path: "/html/html-header" },
      { label: "HTML Footer",            path: "/html/html-footer" },
      { label: "HTML Section",           path: "/html/html-section" },
      { label: "HTML Article",           path: "/html/html-article" },
      { label: "HTML Aside",             path: "/html/html-aside" },
      { label: "HTML Nav",               path: "/html/html-nav" },
    ],
  },

  {
    heading: "HTML Advanced",
    topics: [
      { label: "HTML Entities",          path: "/html/html-entities" },
      { label: "HTML Symbols",           path: "/html/html-symbols" },
      { label: "HTML Emojis",            path: "/html/html-emojis" },
      { label: "HTML Charset",           path: "/html/html-charset" },
      { label: "HTML URL Encode",        path: "/html/html-url-encode" },
      { label: "HTML Responsive",        path: "/html/html-responsive" },
      { label: "HTML Accessibility",     path: "/html/html-accessibility" },
    ],
  },

  {
    heading: "HTML APIs",
    topics: [
      { label: "HTML Geolocation",       path: "/html/html-geolocation" },
      { label: "HTML Drag and Drop",     path: "/html/html-drag-drop" },
      { label: "HTML Web Storage",       path: "/html/html-web-storage" },
      { label: "HTML Web Workers",       path: "/html/html-web-workers" },
      { label: "HTML SSE",               path: "/html/html-sse" },
    ],
  },

  {
    heading: "HTML Examples & Practice",
    topics: [
      { label: "HTML Examples",          path: "/html/html-examples" },
      { label: "HTML Exercises",         path: "/html/html-exercises" },
      { label: "HTML Projects",          path: "/html/html-projects" },
      { label: "HTML Interview Questions", path: "/html/html-interview-questions" },
    ],
  },

  {
    heading: "HTML MCQ",
    topics: [
      { label: "HTML MCQ",               path: "/html/html-mcq" },
    ],
  },
];

const HTMLTopics = () => {
  return (
    <div>
      {htmlTopicsData.map((section) => (
        <div key={section.heading}>
          <h1>{section.heading}</h1>

          {section.topics.map((topic) => (
            <Link href={topic.path} key={topic.path}>
              <h3>{topic.label}</h3>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HTMLTopics;