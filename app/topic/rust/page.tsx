import Link from "next/link";

export const rustTopicsData = [
  {
    heading: "Rust Tutorials",
    topics: [
      { label: "Rust Home", path: "/rust/rust-home" },
      { label: "Rust Intro", path: "/rust/rust-intro" },
      { label: "Rust Installation", path: "/rust/rust-installation" },
      { label: "Rust Cargo", path: "/rust/rust-cargo" },
      { label: "Rust Syntax", path: "/rust/rust-syntax" },
      { label: "Rust Comments", path: "/rust/rust-comments" },
      { label: "Rust Variables", path: "/rust/rust-variables" },
      { label: "Rust Constants", path: "/rust/rust-constants" },
      { label: "Rust Data Types", path: "/rust/rust-data-types" },
      { label: "Rust Operators", path: "/rust/rust-operators" },
      { label: "Rust User Input", path: "/rust/rust-user-input" },
      { label: "Rust Strings", path: "/rust/rust-strings" },
      { label: "Rust Arrays", path: "/rust/rust-arrays" },
      { label: "Rust Tuples", path: "/rust/rust-tuples" },
      { label: "Rust Type Casting", path: "/rust/rust-type-casting" },
      { label: "Rust Shadowing", path: "/rust/rust-shadowing" },
    ],
  },

  {
    heading: "Rust Control Statements",
    topics: [
      { label: "Rust If Else", path: "/rust/rust-if-else" },
      { label: "Rust Match", path: "/rust/rust-match" },
      { label: "Rust Loop", path: "/rust/rust-loop" },
      { label: "Rust While Loop", path: "/rust/rust-while-loop" },
      { label: "Rust For Loop", path: "/rust/rust-for-loop" },
      { label: "Rust Break", path: "/rust/rust-break" },
      { label: "Rust Continue", path: "/rust/rust-continue" },
    ],
  },

  {
    heading: "Rust Functions",
    topics: [
      { label: "Rust Functions", path: "/rust/rust-functions" },
      { label: "Rust Function Parameters", path: "/rust/rust-function-parameters" },
      { label: "Rust Return Values", path: "/rust/rust-return-values" },
      { label: "Rust Closures", path: "/rust/rust-closures" },
      { label: "Rust Recursion", path: "/rust/rust-recursion" },
      { label: "Rust Higher Order Functions", path: "/rust/rust-higher-order-functions" },
    ],
  },

  {
    heading: "Rust Ownership & Borrowing",
    topics: [
      { label: "Rust Ownership", path: "/rust/rust-ownership" },
      { label: "Rust Borrowing", path: "/rust/rust-borrowing" },
      { label: "Rust References", path: "/rust/rust-references" },
      { label: "Rust Slices", path: "/rust/rust-slices" },
      { label: "Rust Lifetimes", path: "/rust/rust-lifetimes" },
      { label: "Rust Mutable References", path: "/rust/rust-mutable-references" },
    ],
  },

  {
    heading: "Rust OOPs & Structs",
    topics: [
      { label: "Rust Structs", path: "/rust/rust-structs" },
      { label: "Rust Enums", path: "/rust/rust-enums" },
      { label: "Rust Methods", path: "/rust/rust-methods" },
      { label: "Rust Traits", path: "/rust/rust-traits" },
      { label: "Rust Generics", path: "/rust/rust-generics" },
      { label: "Rust Pattern Matching", path: "/rust/rust-pattern-matching" },
    ],
  },

  {
    heading: "Rust Collections",
    topics: [
      { label: "Rust Vectors", path: "/rust/rust-vectors" },
      { label: "Rust Strings Collection", path: "/rust/rust-strings-collection" },
      { label: "Rust HashMap", path: "/rust/rust-hashmap" },
      { label: "Rust Iterators", path: "/rust/rust-iterators" },
      { label: "Rust Smart Pointers", path: "/rust/rust-smart-pointers" },
    ],
  },

  {
    heading: "Rust Advanced",
    topics: [
      { label: "Rust Error Handling", path: "/rust/rust-error-handling" },
      { label: "Rust Result and Option", path: "/rust/rust-result-option" },
      { label: "Rust Modules", path: "/rust/rust-modules" },
      { label: "Rust Crates", path: "/rust/rust-crates" },
      { label: "Rust Multithreading", path: "/rust/rust-multithreading" },
      { label: "Rust Async Await", path: "/rust/rust-async-await" },
      { label: "Rust Unsafe", path: "/rust/rust-unsafe" },
      { label: "Rust Macros", path: "/rust/rust-macros" },
    ],
  },

  {
    heading: "Rust Web Development",
    topics: [
      { label: "Rust Web Development Intro", path: "/rust/rust-web-development-intro" },
      { label: "Rust Rocket Framework", path: "/rust/rust-rocket-framework" },
      { label: "Rust Actix Web", path: "/rust/rust-actix-web" },
      { label: "Rust REST API", path: "/rust/rust-rest-api" },
      { label: "Rust Database Connection", path: "/rust/rust-database-connection" },
    ],
  },

  {
    heading: "Rust Examples & Practice",
    topics: [
      { label: "Rust Examples", path: "/rust/rust-examples" },
      { label: "Rust Exercises", path: "/rust/rust-exercises" },
      { label: "Rust Programs", path: "/rust/rust-programs" },
      { label: "Rust Projects", path: "/rust/rust-projects" },
      { label: "Rust Interview Questions", path: "/rust/rust-interview-questions" },
    ],
  },

  {
    heading: "Rust MCQ",
    topics: [
      { label: "Rust MCQ", path: "/rust/rust-mcq" },
    ],
  },
];

const RustTopics = () => {
  return (
    <div>
      {rustTopicsData.map((section) => (
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

export default RustTopics;