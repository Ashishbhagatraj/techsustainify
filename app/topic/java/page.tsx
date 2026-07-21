import Link from "next/link"

export const javaTopicsData = [
  {
    heading: "Java Tutorials",
    topics: [
      { label: "Java Home",            path: "/java/java-home" },
      { label: "Java Intro",           path: "/java/java-intro" },
      { label: "Java Installation",    path: "/java/java-installation" },
      { label: "Java JDK,JVM,JRE",     path: "/java/java-jdk-jvm-jre" },
      { label: "Java Keywords",        path: "/java/java-keywords" },
      { label: "Java Variables",       path: "/java/java-variables" },
      { label: "Java Identifier",      path: "/java/java-identifier" },
      { label: "Java Syntax",          path: "/java/java-syntax" },
      { label: "Java Comments",        path: "/java/java-comments" },
      { label: "Java Block",           path: "/java/java-block" },
      { label: "Java Data Types",      path: "/java/java-data-types" },
      { label: "Java Operators",       path: "/java/java-operators" },
      { label: "Java Boolean",         path: "/java/java-boolean" },
      { label: "Java Arrays",          path: "/java/java-arrays" },
      { label: "Java Strings",         path: "/java/java-strings" },
      { label: "Java User Input",      path: "/java/java-user-input" },
      { label: "Java Null Pointers",   path: "/java/java-null-pointers" },
      { label: "Java Wrapper Classes", path: "/java/java-wrapper-classes" },
      { label: "Java Type Casting",    path: "/java/java-type-casting" },
    ],
  },
  {
    heading: "Java Control Statement",
    topics: [
      { label: "Java If-Else",        path: "/java/java-if-else" },
      { label: "Java Switch",         path: "/java/java-switch" },
      { label: "Java While Loop",     path: "/java/java-while-loop" },
      { label: "Java DO While Loop",  path: "/java/java-do-while-loop" },
      { label: "Java For Loop",       path: "/java/java-for-loop" },
      { label: "Java Break/Continue", path: "/java/java-break-continue" },
    ],
  },
  {
    heading: "Java Access Modifiers",
    topics: [
      { label: "Java Access Modifiers", path: "/java/java-access-modifiers" },
    ],
  },
  {
    heading: "Java Methods",
    topics: [
      { label: "Java Methods",             path: "/java/java-methods" },
      { label: "Java Function Parameters", path: "/java/java-function-parameters" },
      { label: "Java Method Overloading",  path: "/java/java-method-overloading" },
      { label: "Java Method Overriding",   path: "/java/java-method-overriding" },
      { label: "Java Scope",               path: "/java/java-scope" },
      { label: "Java Recursion",           path: "/java/java-recursion" },
    ],
  },
  {
    heading: "Java OOPs",
    topics: [
      { label: "Java OOPs",                    path: "/java/java-oops" },
      { label: "Java Classes/Objects",         path: "/java/java-classes-objects" },
      { label: "Java Class Attributes",        path: "/java/java-class-attributes" },
      { label: "Java Class Methods",           path: "/java/java-class-methods" },
      { label: "Java Abstract/Concrete Class", path: "/java/java-abstract-concrete-class" },
      { label: "Java Constructors",            path: "/java/java-constructors" },
      { label: "Java Super()/This() Method",   path: "/java/java-super-this-method" },
      { label: "Java Abstraction",             path: "/java/java-abstraction" },
      { label: "Java Encapsulation",           path: "/java/java-encapsulation" },
      { label: "Java Inheritance",             path: "/java/java-inheritance" },
      { label: "Java Polymorphism",            path: "/java/java-polymorphism" },
      { label: "Java Packages/API",            path: "/java/java-packages-api" },
      { label: "Java Inner Class",             path: "/java/java-inner-class" },
      { label: "Java Interface",               path: "/java/java-interface" },
      { label: "Java Enums",                   path: "/java/java-enums" },
      { label: "Java Date",                    path: "/java/java-date" },
      { label: "Java Math",                    path: "/java/java-math" },
    ],
  },
  {
    heading: "Java Threads",
    topics: [
      { label: "Java Single-Thread", path: "/java/java-single-thread" },
      { label: "Java Multi-Threading",  path: "/java/java-multi-thread" },
    ],
  },
  {
    heading: "Java Exceptions",
    topics: [
      { label: "Java Error/Exceptions", path: "/java/java-error-exceptions" },
      { label: "Java Try/Catch",        path: "/java/java-try-catch" },
      { label: "Java Throw",            path: "/java/java-throw" },
      { label: "Java Throws",           path: "/java/java-throws" },
    ],
  },
  {
    heading: "Java Collection",
    topics: [
      { label: "Java Collection", path: "/java/java-collection" },
      { label: "Java Vector",     path: "/java/java-vector" },
      { label: "Java ArrayList",  path: "/java/java-arraylist" },
      { label: "Java LinkedList", path: "/java/java-linkedlist" },
      { label: "Java HashTable",  path: "/java/java-hashtable" },
      { label: "Java HashMap",    path: "/java/java-hashmap" },
      { label: "Java TreeSet",    path: "/java/java-treeset" },
      { label: "Java Map",        path: "/java/java-map" },
      { label: "Java Iterator",   path: "/java/java-iterator" },
      { label: "Java Lambda",     path: "/java/java-lambda" },
      { label: "Java RegEx",      path: "/java/java-regex" },
    ],
  },
  {
    heading: "Java Programming",
    topics: [
      { label: "Java Number System", path: "/java/java-number-system" },
      // { label: "Java Patterns",      path: "/java/java-patterns" },
    ],
  },
  {
    heading: "Java MCQ",
    topics: [
      { label: "Java MCQ", path: "/java/java-mcq" },
    ],
  },
  {
    heading: "Java Interview Question",
    topics: [
      { label: "Java Interview", path: "/java/java-interview" },
    ],
  },
];

const Javatopics = () => {
  return (
    <div>
      {javaTopicsData.map((section) => (
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

export default Javatopics;
