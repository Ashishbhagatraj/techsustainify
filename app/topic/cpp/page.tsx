import Link from "next/link";

export const cppTopicsData = [
  {
    heading: "C++ Tutorials",
    topics: [
      { label: "C++ Home",              path: "/cpp/cpp-home" },
      { label: "C++ Intro",             path: "/cpp/cpp-intro" },
      { label: "C++ Installation",      path: "/cpp/cpp-installation" },
      { label: "C++ Syntax",            path: "/cpp/cpp-syntax" },
      { label: "C++ Comments",          path: "/cpp/cpp-comments" },
      { label: "C++ Variables",         path: "/cpp/cpp-variables" },
      { label: "C++ Data Types",        path: "/cpp/cpp-data-types" },
      { label: "C++ Type Casting",      path: "/cpp/cpp-type-casting" },
      { label: "C++ Operators",         path: "/cpp/cpp-operators" },
      { label: "C++ User Input",        path: "/cpp/cpp-user-input" },
      { label: "C++ Strings",           path: "/cpp/cpp-strings" },
      { label: "C++ Booleans",          path: "/cpp/cpp-booleans" },
      { label: "C++ Arrays",            path: "/cpp/cpp-arrays" },
      { label: "C++ References",        path: "/cpp/cpp-references" },
      { label: "C++ Pointers",          path: "/cpp/cpp-pointers" },
      { label: "C++ Memory Management", path: "/cpp/cpp-memory-management" },
    ],
  },

  {
    heading: "C++ Control Statements",
    topics: [
      { label: "C++ If Else",          path: "/cpp/cpp-if-else" },
      { label: "C++ Switch",           path: "/cpp/cpp-switch" },
      { label: "C++ While Loop",       path: "/cpp/cpp-while-loop" },
      { label: "C++ Do While Loop",    path: "/cpp/cpp-do-while-loop" },
      { label: "C++ For Loop",         path: "/cpp/cpp-for-loop" },
      { label: "C++ Break Continue",   path: "/cpp/cpp-break-continue" },
      { label: "C++ Goto Statement",   path: "/cpp/cpp-goto-statement" },
    ],
  },

  {
    heading: "C++ Functions",
    topics: [
      { label: "C++ Functions",            path: "/cpp/cpp-functions" },
      { label: "C++ Function Parameters", path: "/cpp/cpp-function-parameters" },
      { label: "C++ Function Overloading",path: "/cpp/cpp-function-overloading" },
      { label: "C++ Inline Functions",    path: "/cpp/cpp-inline-functions" },
      { label: "C++ Recursion",           path: "/cpp/cpp-recursion" },
      { label: "C++ Scope",               path: "/cpp/cpp-scope" },
      { label: "C++ Lambda Functions",    path: "/cpp/cpp-lambda-functions" },
    ],
  },

  {
    heading: "C++ OOP",
    topics: [
      { label: "C++ OOP",                 path: "/cpp/cpp-oop" },
      { label: "C++ Classes Objects",     path: "/cpp/cpp-classes-objects" },
      { label: "C++ Constructors",        path: "/cpp/cpp-constructors" },
      { label: "C++ Destructors",         path: "/cpp/cpp-destructors" },
      { label: "C++ Inheritance",         path: "/cpp/cpp-inheritance" },
      { label: "C++ Polymorphism",        path: "/cpp/cpp-polymorphism" },
      { label: "C++ Encapsulation",       path: "/cpp/cpp-encapsulation" },
      { label: "C++ Abstraction",         path: "/cpp/cpp-abstraction" },
      { label: "C++ Virtual Functions",   path: "/cpp/cpp-virtual-functions" },
      { label: "C++ Method Overriding",   path: "/cpp/cpp-method-overriding" },
      { label: "C++ Friend Function",     path: "/cpp/cpp-friend-function" },
      { label: "C++ This Pointer",        path: "/cpp/cpp-this-pointer" },
    ],
  },

  {
    heading: "C++ STL",
    topics: [
      { label: "C++ STL",                path: "/cpp/cpp-stl" },
      { label: "C++ Vector",             path: "/cpp/cpp-vector" },
      { label: "C++ List",               path: "/cpp/cpp-list" },
      { label: "C++ Queue",              path: "/cpp/cpp-queue" },
      { label: "C++ Stack",              path: "/cpp/cpp-stack" },
      { label: "C++ Set",                path: "/cpp/cpp-set" },
      { label: "C++ Map",                path: "/cpp/cpp-map" },
      { label: "C++ Iterators",          path: "/cpp/cpp-iterators" },
      { label: "C++ Algorithms",         path: "/cpp/cpp-algorithms" },
    ],
  },

  {
    heading: "C++ Exception Handling",
    topics: [
      { label: "C++ Exceptions",         path: "/cpp/cpp-exceptions" },
      { label: "C++ Try Catch",          path: "/cpp/cpp-try-catch" },
      { label: "C++ Throw Keyword",      path: "/cpp/cpp-throw-keyword" },
      { label: "C++ Finally Equivalent", path: "/cpp/cpp-finally-equivalent" },
    ],
  },

  {
    heading: "C++ File Handling",
    topics: [
      { label: "C++ File Handling",      path: "/cpp/cpp-file-handling" },
      { label: "C++ Read Files",         path: "/cpp/cpp-read-files" },
      { label: "C++ Write Files",        path: "/cpp/cpp-write-files" },
      { label: "C++ Append Files",       path: "/cpp/cpp-append-files" },
    ],
  },

  {
    heading: "C++ Advanced",
    topics: [
      { label: "C++ Templates",          path: "/cpp/cpp-templates" },
      { label: "C++ Smart Pointers",     path: "/cpp/cpp-smart-pointers" },
      { label: "C++ Multithreading",     path: "/cpp/cpp-multithreading" },
      { label: "C++ Move Semantics",     path: "/cpp/cpp-move-semantics" },
      { label: "C++ Namespaces",         path: "/cpp/cpp-namespaces" },
      { label: "C++ Namespaces",         path: "/cpp/cpp-namespaces" },
      { label: "C++ constexpr",          path: "/cpp/cpp-constexpr" },
      { label: "C++ Modules",            path: "/cpp/cpp-modules" },
    ],
  },

  {
    heading: "C++ Programs",
    topics: [
      { label: "C++ Number Programs",    path: "/cpp/cpp-number-programs" },
      { label: "C++ Patterns",           path: "/cpp/cpp-patterns" },
      { label: "C++ Array Programs",     path: "/cpp/cpp-array-programs" },
      { label: "C++ String Programs",    path: "/cpp/cpp-string-programs" },
    ],
  },

  {
    heading: "C++ MCQ",
    topics: [
      { label: "C++ MCQ", path: "/cpp/cpp-mcq" },
    ],
  },

  {
    heading: "C++ Interview Questions",
    topics: [
      { label: "C++ Interview", path: "/cpp/cpp-interview" },
    ],
  },
];

const CppTopics = () => {
  return (
    <div>
      {cppTopicsData.map((section) => (
        <div key={section.heading}>
          <h2>{section.heading}</h2>

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

export default CppTopics;