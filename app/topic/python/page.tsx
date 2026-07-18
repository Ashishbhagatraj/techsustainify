import Link from "next/link";

export const pythonTopicsData = [
  {
    heading: "Python Tutorials",
    topics: [
      { label: "Python Home",           path: "/python/python-home" },
      { label: "Python Intro",          path: "/python/python-intro" },
      { label: "Python Installation",   path: "/python/python-installation" },
      { label: "Python Syntax",         path: "/python/python-syntax" },
      { label: "Python Comments",       path: "/python/python-comments" },
      { label: "Python Variables",      path: "/python/python-variables" },
      { label: "Python Data Types",     path: "/python/python-data-types" },
      { label: "Python Type Casting",   path: "/python/python-type-casting" },
      { label: "Python Operators",      path: "/python/python-operators" },
      { label: "Python User Input",     path: "/python/python-user-input" },
      { label: "Python Strings",        path: "/python/python-strings" },
      { label: "Python Booleans",       path: "/python/python-booleans" },
      { label: "Python Lists",          path: "/python/python-lists" },
      { label: "Python Tuples",         path: "/python/python-tuples" },
      { label: "Python Sets",           path: "/python/python-sets" },
      { label: "Python Dictionaries",  path: "/python/python-dictionaries" },
      { label: "Python Arrays",         path: "/python/python-arrays" },
    ],
  },

  {
    heading: "Python Control Statements",
    topics: [
      { label: "Python If Else",        path: "/python/python-if-else" },
      { label: "Python Match Case",     path: "/python/python-match-case" },
      { label: "Python While Loop",     path: "/python/python-while-loop" },
      { label: "Python For Loop",       path: "/python/python-for-loop" },
      { label: "Python Break Continue", path: "/python/python-break-continue" },
      { label: "Python Pass Statement", path: "/python/python-pass-statement" },
    ],
  },

  {
    heading: "Python Functions",
    topics: [
      { label: "Python Functions",          path: "/python/python-functions" },
      { label: "Python Function Arguments", path: "/python/python-function-arguments" },
      { label: "Python Lambda",             path: "/python/python-lambda" },
      { label: "Python Recursion",          path: "/python/python-recursion" },
      { label: "Python Scope",              path: "/python/python-scope" },
    ],
  },

  {
    heading: "Python OOPs",
    topics: [
      { label: "Python OOPs",              path: "/python/python-oops" },
      { label: "Python Classes Objects",   path: "/python/python-classes-objects" },
      { label: "Python Constructors",      path: "/python/python-constructors" },
      { label: "Python Inheritance",       path: "/python/python-inheritance" },
      { label: "Python Polymorphism",      path: "/python/python-polymorphism" },
      { label: "Python Encapsulation",     path: "/python/python-encapsulation" },
      { label: "Python Abstraction",       path: "/python/python-abstraction" },
      { label: "Python Method Overriding", path: "/python/python-method-overriding" },
      { label: "Python Super Function",    path: "/python/python-super-function" },
    ],
  },

  {
    heading: "Python Exceptions",
    topics: [
      { label: "Python Exceptions",    path: "/python/python-exceptions" },
      { label: "Python Try Except",    path: "/python/python-try-except" },
      { label: "Python Finally",       path: "/python/python-finally" },
      { label: "Python Raise Exception", path: "/python/python-raise-exception" },
    ],
  },

  {
    heading: "Python Modules",
    topics: [
      { label: "Python Modules",       path: "/python/python-modules" },
      { label: "Python Math Module",   path: "/python/python-math-module" },
      { label: "Python Datetime",      path: "/python/python-datetime" },
      { label: "Python JSON",          path: "/python/python-json" },
      { label: "Python RegEx",         path: "/python/python-regex" },
      { label: "Python File Handling", path: "/python/python-file-handling" },
    ],
  },

  {
    heading: "Python Collections",
    topics: [
      { label: "Python List Methods",       path: "/python/python-list-methods" },
      { label: "Python Tuple Methods",      path: "/python/python-tuple-methods" },
      { label: "Python Set Methods",        path: "/python/python-set-methods" },
      { label: "Python Dictionary Methods", path: "/python/python-dictionary-methods" },
    ],
  },

  {
    heading: "Python Advanced",
    topics: [
      { label: "Python Iterators",      path: "/python/python-iterators" },
      { label: "Python Generators",     path: "/python/python-generators" },
      { label: "Python Decorators",     path: "/python/python-decorators" },
      { label: "Python Multithreading", path: "/python/python-multithreading" },
    ],
  },

  {
    heading: "Python Programs",
    topics: [
      { label: "Python Number Programs", path: "/python/python-number-programs" },
      { label: "Python Patterns",        path: "/python/python-patterns" },
    ],
  },

  {
    heading: "Python MCQ",
    topics: [
      { label: "Python MCQ", path: "/python/python-mcq" },
    ],
  },

  {
    heading: "Python Interview Questions",
    topics: [
      { label: "Python Interview", path: "/python/python-interview" },
    ],
  },
];

const Pythontopics = () => {
  return (
    <div>
      {pythonTopicsData.map((section) => (
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

export default Pythontopics;