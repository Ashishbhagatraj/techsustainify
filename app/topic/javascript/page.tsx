import Link from "next/link";


export const javascriptTopicsData = [
  {
    heading: "JavaScript Tutorials",
    topics: [
      { label: "JavaScript Home", path: "/javascript/javascript-home" },
      { label: "JavaScript Intro", path: "/javascript/javascript-intro" },
      { label: "JavaScript History", path: "/javascript/javascript-history" },
      { label: "JavaScript Editors", path: "/javascript/javascript-editors" },
      { label: "JavaScript Syntax", path: "/javascript/javascript-syntax" },
      { label: "JavaScript Comments", path: "/javascript/javascript-comments" },
      { label: "JavaScript Variables", path: "/javascript/javascript-variables" },
      { label: "JavaScript Data Types", path: "/javascript/javascript-data-types" },
      { label: "JavaScript Operators", path: "/javascript/javascript-operators" },
      { label: "JavaScript Functions", path: "/javascript/javascript-functions" },
      { label: "JavaScript Events", path: "/javascript/javascript-events" },
      { label: "JavaScript Strings", path: "/javascript/javascript-strings" },
      { label: "JavaScript Numbers", path: "/javascript/javascript-numbers" },
      { label: "JavaScript Arrays", path: "/javascript/javascript-arrays" },
      { label: "JavaScript Objects", path: "/javascript/javascript-objects" },
      { label: "JavaScript Date", path: "/javascript/javascript-date" },
      { label: "JavaScript Math", path: "/javascript/javascript-math" },
    ],
  },

  {
    heading: "JavaScript Control Statements",
    topics: [
      { label: "JavaScript If Else", path: "/javascript/javascript-if-else" },
      { label: "JavaScript Switch", path: "/javascript/javascript-switch" },
      { label: "JavaScript For Loop", path: "/javascript/javascript-for-loop" },
      { label: "JavaScript While Loop", path: "/javascript/javascript-while-loop" },
      { label: "JavaScript Do While", path: "/javascript/javascript-do-while" },
      { label: "JavaScript Break", path: "/javascript/javascript-break" },
      { label: "JavaScript Continue", path: "/javascript/javascript-continue" },
    ],
  },

  {
    heading: "JavaScript Functions",
    topics: [
      { label: "JavaScript Functions", path: "/javascript/javascript-functions" },
      { label: "JavaScript Arrow Function", path: "/javascript/javascript-arrow-function" },
      { label: "JavaScript Callback Function", path: "/javascript/javascript-callback-function" },
      { label: "JavaScript Higher Order Function", path: "/javascript/javascript-higher-order-function" },
      { label: "JavaScript Closures", path: "/javascript/javascript-closures" },
      { label: "JavaScript Recursion", path: "/javascript/javascript-recursion" },
    ],
  },

  {
    heading: "JavaScript DOM",
    topics: [
      { label: "JavaScript DOM Intro", path: "/javascript/javascript-dom-intro" },
      { label: "JavaScript DOM Methods", path: "/javascript/javascript-dom-methods" },
      { label: "JavaScript DOM Events", path: "/javascript/javascript-dom-events" },
      { label: "JavaScript DOM Elements", path: "/javascript/javascript-dom-elements" },
      { label: "JavaScript Event Listener", path: "/javascript/javascript-event-listener" },
      { label: "JavaScript Form Validation", path: "/javascript/javascript-form-validation" },
    ],
  },

  {
    heading: "JavaScript Advanced",
    topics: [
      { label: "JavaScript Scope", path: "/javascript/javascript-scope" },
      { label: "JavaScript Hoisting", path: "/javascript/javascript-hoisting" },
      { label: "JavaScript Promises", path: "/javascript/javascript-promises" },
      { label: "JavaScript Async Await", path: "/javascript/javascript-async-await" },
      { label: "JavaScript Fetch API", path: "/javascript/javascript-fetch-api" },
      { label: "JavaScript JSON", path: "/javascript/javascript-json" },
      { label: "JavaScript Local Storage", path: "/javascript/javascript-local-storage" },
      { label: "JavaScript ES6", path: "/javascript/javascript-es6" },
    ],
  },

  {
    heading: "JavaScript OOP",
    topics: [
      { label: "JavaScript Classes", path: "/javascript/javascript-classes" },
      { label: "JavaScript Objects", path: "/javascript/javascript-objects" },
      { label: "JavaScript Constructor", path: "/javascript/javascript-constructor" },
      { label: "JavaScript Inheritance", path: "/javascript/javascript-inheritance" },
      { label: "JavaScript Encapsulation", path: "/javascript/javascript-encapsulation" },
      { label: "JavaScript Polymorphism", path: "/javascript/javascript-polymorphism" },
    ],
  },

  {
    heading: "JavaScript Browser BOM",
    topics: [
      { label: "JavaScript Window Object", path: "/javascript/javascript-window-object" },
      { label: "JavaScript Screen Object", path: "/javascript/javascript-screen-object" },
      { label: "JavaScript Location Object", path: "/javascript/javascript-location-object" },
      { label: "JavaScript History Object", path: "/javascript/javascript-history-object" },
      { label: "JavaScript Navigator Object", path: "/javascript/javascript-navigator-object" },
    ],
  },

  {
    heading: "JavaScript Examples & Practice",
    topics: [
      { label: "JavaScript Examples", path: "/javascript/javascript-examples" },
      { label: "JavaScript Exercises", path: "/javascript/javascript-exercises" },
      { label: "JavaScript Projects", path: "/javascript/javascript-projects" },
      { label: "JavaScript Interview Questions", path: "/javascript/javascript-interview-questions" },
    ],
  },

  {
    heading: "JavaScript MCQ",
    topics: [
      { label: "JavaScript MCQ", path: "/javascript/javascript-mcq" },
    ],
  },
];

const JavaScriptTopics = () => {
  return (
    <div className="javascript-container">
      {javascriptTopicsData.map((section) => (
        <div className="javascript-section" key={section.heading}>
          <h1 className="javascript-heading">{section.heading}</h1>

          <div className="javascript-topics">
            {section.topics.map((topic) => (
              <Link
                href={topic.path}
                key={topic.path}
                className="javascript-link"
              >
                <div className="javascript-card">
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

export default JavaScriptTopics;