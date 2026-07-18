import Link from "next/link";

export const cssTopicsData = [
  {
    heading: "CSS Tutorials",
    topics: [
      { label: "CSS Home", path: "/css/css-home" },
      { label: "CSS Intro", path: "/css/css-intro" },
      { label: "CSS Syntax", path: "/css/css-syntax" },
      { label: "CSS Selectors", path: "/css/css-selectors" },
      { label: "CSS Comments", path: "/css/css-comments" },
      { label: "CSS Colors", path: "/css/css-colors" },
      { label: "CSS Backgrounds", path: "/css/css-backgrounds" },
      { label: "CSS Borders", path: "/css/css-borders" },
      { label: "CSS Margins", path: "/css/css-margins" },
      { label: "CSS Padding", path: "/css/css-padding" },
      { label: "CSS Height Width", path: "/css/css-height-width" },
      { label: "CSS Box Model", path: "/css/css-box-model" },
      { label: "CSS Outline", path: "/css/css-outline" },
      { label: "CSS Text", path: "/css/css-text" },
      { label: "CSS Fonts", path: "/css/css-fonts" },
      { label: "CSS Icons", path: "/css/css-icons" },
      { label: "CSS Links", path: "/css/css-links" },
      { label: "CSS Lists", path: "/css/css-lists" },
    ],
  },

  {
    heading: "CSS Layout",
    topics: [
      { label: "CSS Display", path: "/css/css-display" },
      { label: "CSS Position", path: "/css/css-position" },
      { label: "CSS Float", path: "/css/css-float" },
      { label: "CSS Overflow", path: "/css/css-overflow" },
      { label: "CSS Z Index", path: "/css/css-z-index" },
      { label: "CSS Align", path: "/css/css-align" },
      { label: "CSS Flexbox", path: "/css/css-flexbox" },
      { label: "CSS Grid", path: "/css/css-grid" },
    ],
  },

  {
    heading: "CSS Responsive Design",
    topics: [
      { label: "CSS Responsive", path: "/css/css-responsive" },
      { label: "CSS Media Queries", path: "/css/css-media-queries" },
      { label: "CSS Viewport", path: "/css/css-viewport" },
      { label: "CSS Mobile First", path: "/css/css-mobile-first" },
      { label: "CSS Responsive Images", path: "/css/css-responsive-images" },
    ],
  },

  {
    heading: "CSS Advanced",
    topics: [
      { label: "CSS Transitions", path: "/css/css-transitions" },
      { label: "CSS Animations", path: "/css/css-animations" },
      { label: "CSS Transform", path: "/css/css-transform" },
      { label: "CSS Shadows", path: "/css/css-shadows" },
      { label: "CSS Gradients", path: "/css/css-gradients" },
      { label: "CSS Variables", path: "/css/css-variables" },
      { label: "CSS Object Fit", path: "/css/css-object-fit" },
      { label: "CSS Filter", path: "/css/css-filter" },
    ],
  },

  {
    heading: "CSS Frameworks",
    topics: [
      { label: "CSS Bootstrap", path: "/css/css-bootstrap" },
      { label: "CSS Tailwind", path: "/css/css-tailwind" },
      { label: "CSS Bulma", path: "/css/css-bulma" },
      { label: "CSS Foundation", path: "/css/css-foundation" },
    ],
  },

  {
    heading: "CSS Examples & Practice",
    topics: [
      { label: "CSS Examples", path: "/css/css-examples" },
      { label: "CSS Exercises", path: "/css/css-exercises" },
      { label: "CSS Projects", path: "/css/css-projects" },
      { label: "CSS Interview Questions", path: "/css/css-interview-questions" },
    ],
  },

  {
    heading: "CSS MCQ",
    topics: [
      { label: "CSS MCQ", path: "/css/css-mcq" },
    ],
  },
];

const CSSTopics = () => {
  return (
    <div className="css-container">
      {cssTopicsData.map((section) => (
        <div className="css-section" key={section.heading}>
          <h1 className="css-heading">{section.heading}</h1>

          <div className="css-topics">
            {section.topics.map((topic) => (
              <Link
                href={topic.path}
                key={topic.path}
                className="css-link"
              >
                <div className="css-card">
                  <h3>{topic.label}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CSSTopics;