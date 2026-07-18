import Link from "next/link";

export const goTopicsData = [
  {
    heading: "Go Tutorials",
    topics: [
      { label: "Go Home", path: "/go/go-home" },
      { label: "Go Intro", path: "/go/go-intro" },
      { label: "Go Installation", path: "/go/go-installation" },
      { label: "Go Workspace", path: "/go/go-workspace" },
      { label: "Go Syntax", path: "/go/go-syntax" },
      { label: "Go Comments", path: "/go/go-comments" },
      { label: "Go Variables", path: "/go/go-variables" },
      { label: "Go Constants", path: "/go/go-constants" },
      { label: "Go Data Types", path: "/go/go-data-types" },
      { label: "Go Operators", path: "/go/go-operators" },
      { label: "Go User Input", path: "/go/go-user-input" },
      { label: "Go Strings", path: "/go/go-strings" },
      { label: "Go Arrays", path: "/go/go-arrays" },
      { label: "Go Slices", path: "/go/go-slices" },
      { label: "Go Maps", path: "/go/go-maps" },
      { label: "Go Type Conversion", path: "/go/go-type-conversion" },
      { label: "Go Pointers", path: "/go/go-pointers" },
    ],
  },

  {
    heading: "Go Control Statements",
    topics: [
      { label: "Go If Else", path: "/go/go-if-else" },
      { label: "Go Switch", path: "/go/go-switch" },
      { label: "Go For Loop", path: "/go/go-for-loop" },
      { label: "Go Break", path: "/go/go-break" },
      { label: "Go Continue", path: "/go/go-continue" },
      { label: "Go Goto", path: "/go/go-goto" },
    ],
  },

  {
    heading: "Go Functions",
    topics: [
      { label: "Go Functions", path: "/go/go-functions" },
      { label: "Go Function Parameters", path: "/go/go-function-parameters" },
      { label: "Go Return Values", path: "/go/go-return-values" },
      { label: "Go Variadic Functions", path: "/go/go-variadic-functions" },
      { label: "Go Anonymous Functions", path: "/go/go-anonymous-functions" },
      { label: "Go Recursion", path: "/go/go-recursion" },
      { label: "Go Closures", path: "/go/go-closures" },
    ],
  },

  {
    heading: "Go Structs & Interfaces",
    topics: [
      { label: "Go Structs", path: "/go/go-structs" },
      { label: "Go Methods", path: "/go/go-methods" },
      { label: "Go Interfaces", path: "/go/go-interfaces" },
      { label: "Go Embedding", path: "/go/go-embedding" },
      { label: "Go Packages", path: "/go/go-packages" },
      { label: "Go Access Modifiers", path: "/go/go-access-modifiers" },
    ],
  },

  {
    heading: "Go Concurrency",
    topics: [
      { label: "Go Goroutines", path: "/go/go-goroutines" },
      { label: "Go Channels", path: "/go/go-channels" },
      { label: "Go Buffered Channels", path: "/go/go-buffered-channels" },
      { label: "Go Select Statement", path: "/go/go-select-statement" },
      { label: "Go WaitGroup", path: "/go/go-waitgroup" },
      { label: "Go Mutex", path: "/go/go-mutex" },
    ],
  },

  {
    heading: "Go Advanced",
    topics: [
      { label: "Go Error Handling", path: "/go/go-error-handling" },
      { label: "Go Panic and Recover", path: "/go/go-panic-recover" },
      { label: "Go File Handling", path: "/go/go-file-handling" },
      { label: "Go JSON", path: "/go/go-json" },
      { label: "Go HTTP Package", path: "/go/go-http-package" },
      { label: "Go Context", path: "/go/go-context" },
      { label: "Go Reflection", path: "/go/go-reflection" },
      { label: "Go Testing", path: "/go/go-testing" },
    ],
  },

  {
    heading: "Go Web Development",
    topics: [
      { label: "Go Web Development Intro", path: "/go/go-web-development-intro" },
      { label: "Go REST API", path: "/go/go-rest-api" },
      { label: "Go Gin Framework", path: "/go/go-gin-framework" },
      { label: "Go Echo Framework", path: "/go/go-echo-framework" },
      { label: "Go Database Connection", path: "/go/go-database-connection" },
      { label: "Go JWT Authentication", path: "/go/go-jwt-authentication" },
    ],
  },

  {
    heading: "Go Examples & Practice",
    topics: [
      { label: "Go Examples", path: "/go/go-examples" },
      { label: "Go Exercises", path: "/go/go-exercises" },
      { label: "Go Programs", path: "/go/go-programs" },
      { label: "Go Projects", path: "/go/go-projects" },
      { label: "Go Interview Questions", path: "/go/go-interview-questions" },
    ],
  },

  {
    heading: "Go MCQ",
    topics: [
      { label: "Go MCQ", path: "/go/go-mcq" },
    ],
  },
];

const GoTopics = () => {
  return (
    <div>
      {goTopicsData.map((section) => (
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

export default GoTopics;