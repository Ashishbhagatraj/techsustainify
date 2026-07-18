import Link from "next/link";

export const kotlinTopicsData = [
  {
    heading: "Kotlin Tutorials",
    topics: [
      { label: "Kotlin Home", path: "/kotlin/kotlin-home" },
      { label: "Kotlin Intro", path: "/kotlin/kotlin-intro" },
      { label: "Kotlin Installation", path: "/kotlin/kotlin-installation" },
      { label: "Kotlin IDE Setup", path: "/kotlin/kotlin-ide-setup" },
      { label: "Kotlin Syntax", path: "/kotlin/kotlin-syntax" },
      { label: "Kotlin Comments", path: "/kotlin/kotlin-comments" },
      { label: "Kotlin Keywords", path: "/kotlin/kotlin-keywords" },
      { label: "Kotlin Variables", path: "/kotlin/kotlin-variables" },
      { label: "Kotlin Data Types", path: "/kotlin/kotlin-data-types" },
      { label: "Kotlin Type Conversion", path: "/kotlin/kotlin-type-conversion" },
      { label: "Kotlin Operators", path: "/kotlin/kotlin-operators" },
      { label: "Kotlin User Input", path: "/kotlin/kotlin-user-input" },
      { label: "Kotlin Strings", path: "/kotlin/kotlin-strings" },
      { label: "Kotlin Arrays", path: "/kotlin/kotlin-arrays" },
      { label: "Kotlin Nullable Types", path: "/kotlin/kotlin-nullable-types" },
      { label: "Kotlin Type Casting", path: "/kotlin/kotlin-type-casting" },
    ],
  },

  {
    heading: "Kotlin Control Statements",
    topics: [
      { label: "Kotlin If Else", path: "/kotlin/kotlin-if-else" },
      { label: "Kotlin When", path: "/kotlin/kotlin-when" },
      { label: "Kotlin For Loop", path: "/kotlin/kotlin-for-loop" },
      { label: "Kotlin While Loop", path: "/kotlin/kotlin-while-loop" },
      { label: "Kotlin Do While", path: "/kotlin/kotlin-do-while" },
      { label: "Kotlin Break", path: "/kotlin/kotlin-break" },
      { label: "Kotlin Continue", path: "/kotlin/kotlin-continue" },
      { label: "Kotlin Ranges", path: "/kotlin/kotlin-ranges" },
    ],
  },

  {
    heading: "Kotlin Functions",
    topics: [
      { label: "Kotlin Functions", path: "/kotlin/kotlin-functions" },
      { label: "Kotlin Function Parameters", path: "/kotlin/kotlin-function-parameters" },
      { label: "Kotlin Default Arguments", path: "/kotlin/kotlin-default-arguments" },
      { label: "Kotlin Named Arguments", path: "/kotlin/kotlin-named-arguments" },
      { label: "Kotlin Recursion", path: "/kotlin/kotlin-recursion" },
      { label: "Kotlin Lambda Function", path: "/kotlin/kotlin-lambda-function" },
      { label: "Kotlin Higher Order Function", path: "/kotlin/kotlin-higher-order-function" },
      { label: "Kotlin Inline Function", path: "/kotlin/kotlin-inline-function" },
    ],
  },

  {
    heading: "Kotlin OOPs",
    topics: [
      { label: "Kotlin Classes and Objects", path: "/kotlin/kotlin-classes-objects" },
      { label: "Kotlin Constructors", path: "/kotlin/kotlin-constructors" },
      { label: "Kotlin Inheritance", path: "/kotlin/kotlin-inheritance" },
      { label: "Kotlin Abstract Class", path: "/kotlin/kotlin-abstract-class" },
      { label: "Kotlin Interface", path: "/kotlin/kotlin-interface" },
      { label: "Kotlin Encapsulation", path: "/kotlin/kotlin-encapsulation" },
      { label: "Kotlin Polymorphism", path: "/kotlin/kotlin-polymorphism" },
      { label: "Kotlin Data Class", path: "/kotlin/kotlin-data-class" },
      { label: "Kotlin Enum Class", path: "/kotlin/kotlin-enum-class" },
      { label: "Kotlin Sealed Class", path: "/kotlin/kotlin-sealed-class" },
      { label: "Kotlin Nested Class", path: "/kotlin/kotlin-nested-class" },
      { label: "Kotlin Object Declaration", path: "/kotlin/kotlin-object-declaration" },
    ],
  },

  {
    heading: "Kotlin Collections",
    topics: [
      { label: "Kotlin Collections", path: "/kotlin/kotlin-collections" },
      { label: "Kotlin List", path: "/kotlin/kotlin-list" },
      { label: "Kotlin Mutable List", path: "/kotlin/kotlin-mutable-list" },
      { label: "Kotlin Set", path: "/kotlin/kotlin-set" },
      { label: "Kotlin Map", path: "/kotlin/kotlin-map" },
      { label: "Kotlin ArrayList", path: "/kotlin/kotlin-arraylist" },
      { label: "Kotlin HashMap", path: "/kotlin/kotlin-hashmap" },
      { label: "Kotlin Iterator", path: "/kotlin/kotlin-iterator" },
    ],
  },

  {
    heading: "Kotlin Advanced",
    topics: [
      { label: "Kotlin Scope Functions", path: "/kotlin/kotlin-scope-functions" },
      { label: "Kotlin Exception Handling", path: "/kotlin/kotlin-exception-handling" },
      { label: "Kotlin Try Catch", path: "/kotlin/kotlin-try-catch" },
      { label: "Kotlin Throw Keyword", path: "/kotlin/kotlin-throw-keyword" },
      { label: "Kotlin Generics", path: "/kotlin/kotlin-generics" },
      { label: "Kotlin Coroutines", path: "/kotlin/kotlin-coroutines" },
      { label: "Kotlin File Handling", path: "/kotlin/kotlin-file-handling" },
      { label: "Kotlin Regex", path: "/kotlin/kotlin-regex" },
    ],
  },

  {
    heading: "Kotlin Android",
    topics: [
      { label: "Kotlin Android Intro", path: "/kotlin/kotlin-android-intro" },
      { label: "Kotlin Android Studio", path: "/kotlin/kotlin-android-studio" },
      { label: "Kotlin Activity", path: "/kotlin/kotlin-activity" },
      { label: "Kotlin Intent", path: "/kotlin/kotlin-intent" },
      { label: "Kotlin RecyclerView", path: "/kotlin/kotlin-recyclerview" },
      { label: "Kotlin ViewBinding", path: "/kotlin/kotlin-viewbinding" },
      { label: "Kotlin Jetpack Compose", path: "/kotlin/kotlin-jetpack-compose" },
    ],
  },

  {
    heading: "Kotlin Examples & Practice",
    topics: [
      { label: "Kotlin Examples", path: "/kotlin/kotlin-examples" },
      { label: "Kotlin Exercises", path: "/kotlin/kotlin-exercises" },
      { label: "Kotlin Programs", path: "/kotlin/kotlin-programs" },
      { label: "Kotlin Projects", path: "/kotlin/kotlin-projects" },
      { label: "Kotlin Interview Questions", path: "/kotlin/kotlin-interview-questions" },
    ],
  },

  {
    heading: "Kotlin MCQ",
    topics: [
      { label: "Kotlin MCQ", path: "/kotlin/kotlin-mcq" },
    ],
  },
];

const KotlinTopics = () => {
  return (
    <div>
      {kotlinTopicsData.map((section) => (
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

export default KotlinTopics;