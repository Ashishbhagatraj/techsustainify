import Link from "next/link";

export const reactTopicsData = [
  {
    heading: "React.js Tutorials",
    topics: [
      { label: "React Home", path: "/react/react-home" },
      { label: "React Intro", path: "/react/react-intro" },
      { label: "React Installation", path: "/react/react-installation" },
      { label: "React Folder Structure", path: "/react/react-folder-structure" },
      { label: "React JSX", path: "/react/react-jsx" },
      { label: "React Components", path: "/react/react-components" },
      { label: "React Functional Components", path: "/react/react-functional-components" },
      { label: "React Class Components", path: "/react/react-class-components" },
      { label: "React Props", path: "/react/react-props" },
      { label: "React State", path: "/react/react-state" },
      { label: "React Events", path: "/react/react-events" },
      { label: "React Conditional Rendering", path: "/react/react-conditional-rendering" },
      { label: "React Lists", path: "/react/react-lists" },
      { label: "React Forms", path: "/react/react-forms" },
      { label: "React Fragments", path: "/react/react-fragments" },
      { label: "React Styling", path: "/react/react-styling" },
    ],
  },

  {
    heading: "React Hooks",
    topics: [
      { label: "React Hooks Intro", path: "/react/react-hooks-intro" },
      { label: "React useState", path: "/react/react-usestate" },
      { label: "React useEffect", path: "/react/react-useeffect" },
      { label: "React useContext", path: "/react/react-usecontext" },
      { label: "React useRef", path: "/react/react-useref" },
      { label: "React useReducer", path: "/react/react-usereducer" },
      { label: "React useMemo", path: "/react/react-usememo" },
      { label: "React useCallback", path: "/react/react-usecallback" },
      { label: "React Custom Hooks", path: "/react/react-custom-hooks" },
    ],
  },

  {
    heading: "React Routing",
    topics: [
      { label: "React Router Intro", path: "/react/react-router-intro" },
      { label: "React Routes", path: "/react/react-routes" },
      { label: "React Link", path: "/react/react-link" },
      { label: "React useNavigate", path: "/react/react-usenavigate" },
      { label: "React Route Params", path: "/react/react-route-params" },
      { label: "React Nested Routes", path: "/react/react-nested-routes" },
    ],
  },

  {
    heading: "React Advanced",
    topics: [
      { label: "React Context API", path: "/react/react-context-api" },
      { label: "React Lazy Loading", path: "/react/react-lazy-loading" },
      { label: "React Memo", path: "/react/react-memo" },
      { label: "React Portals", path: "/react/react-portals" },
      { label: "React Error Boundary", path: "/react/react-error-boundary" },
      { label: "React Higher Order Components", path: "/react/react-hoc" },
      { label: "React Performance Optimization", path: "/react/react-performance-optimization" },
    ],
  },

  {
    heading: "React API Handling",
    topics: [
      { label: "React Fetch API", path: "/react/react-fetch-api" },
      { label: "React Axios", path: "/react/react-axios" },
      { label: "React Async Await", path: "/react/react-async-await" },
      { label: "React API Integration", path: "/react/react-api-integration" },
      { label: "React Loading Spinner", path: "/react/react-loading-spinner" },
    ],
  },

  {
    heading: "React State Management",
    topics: [
      { label: "React State Management", path: "/react/react-state-management" },
      { label: "React Redux", path: "/react/react-redux" },
      { label: "React Redux Toolkit", path: "/react/react-redux-toolkit" },
      { label: "React Zustand", path: "/react/react-zustand" },
      { label: "React Context vs Redux", path: "/react/react-context-vs-redux" },
    ],
  },

  {
    heading: "Next.js with React",
    topics: [
      { label: "Next.js Intro", path: "/react/nextjs-intro" },
      { label: "Next.js Routing", path: "/react/nextjs-routing" },
      { label: "Next.js Dynamic Routes", path: "/react/nextjs-dynamic-routes" },
      { label: "Next.js API Routes", path: "/react/nextjs-api-routes" },
      { label: "Next.js SEO", path: "/react/nextjs-seo" },
      { label: "Next.js Static Export", path: "/react/nextjs-static-export" },
    ],
  },

  {
    heading: "React Examples & Practice",
    topics: [
      { label: "React Examples", path: "/react/react-examples" },
      { label: "React Exercises", path: "/react/react-exercises" },
      { label: "React Projects", path: "/react/react-projects" },
      { label: "React Interview Questions", path: "/react/react-interview-questions" },
    ],
  },

  {
    heading: "React MCQ",
    topics: [
      { label: "React MCQ", path: "/react/react-mcq" },
    ],
  },
];

const ReactTopics = () => {
  return (
    <div className="react-container">
      {reactTopicsData.map((section) => (
        <div className="react-section" key={section.heading}>
          <h1 className="react-heading">{section.heading}</h1>

          <div className="react-topics">
            {section.topics.map((topic) => (
              <Link
                href={topic.path}
                key={topic.path}
                className="react-link"
              >
                <div className="react-card">
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

export default ReactTopics;