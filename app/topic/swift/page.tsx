import Link from "next/link";

export const swiftTopicsData = [
  {
    heading: "Swift Tutorials",
    topics: [
      { label: "Swift Home", path: "/swift/swift-home" },
      { label: "Swift Intro", path: "/swift/swift-intro" },
      { label: "Swift Installation", path: "/swift/swift-installation" },
      { label: "Swift Xcode Setup", path: "/swift/swift-xcode-setup" },
      { label: "Swift Syntax", path: "/swift/swift-syntax" },
      { label: "Swift Comments", path: "/swift/swift-comments" },
      { label: "Swift Variables", path: "/swift/swift-variables" },
      { label: "Swift Constants", path: "/swift/swift-constants" },
      { label: "Swift Data Types", path: "/swift/swift-data-types" },
      { label: "Swift Operators", path: "/swift/swift-operators" },
      { label: "Swift Strings", path: "/swift/swift-strings" },
      { label: "Swift Arrays", path: "/swift/swift-arrays" },
      { label: "Swift Dictionaries", path: "/swift/swift-dictionaries" },
      { label: "Swift Sets", path: "/swift/swift-sets" },
      { label: "Swift Type Casting", path: "/swift/swift-type-casting" },
      { label: "Swift Optionals", path: "/swift/swift-optionals" },
    ],
  },

  {
    heading: "Swift Control Statements",
    topics: [
      { label: "Swift If Else", path: "/swift/swift-if-else" },
      { label: "Swift Switch", path: "/swift/swift-switch" },
      { label: "Swift For Loop", path: "/swift/swift-for-loop" },
      { label: "Swift While Loop", path: "/swift/swift-while-loop" },
      { label: "Swift Repeat While", path: "/swift/swift-repeat-while" },
      { label: "Swift Break", path: "/swift/swift-break" },
      { label: "Swift Continue", path: "/swift/swift-continue" },
      { label: "Swift Guard Statement", path: "/swift/swift-guard-statement" },
    ],
  },

  {
    heading: "Swift Functions",
    topics: [
      { label: "Swift Functions", path: "/swift/swift-functions" },
      { label: "Swift Function Parameters", path: "/swift/swift-function-parameters" },
      { label: "Swift Return Values", path: "/swift/swift-return-values" },
      { label: "Swift Recursion", path: "/swift/swift-recursion" },
      { label: "Swift Closures", path: "/swift/swift-closures" },
      { label: "Swift Higher Order Functions", path: "/swift/swift-higher-order-functions" },
      { label: "Swift Inout Parameters", path: "/swift/swift-inout-parameters" },
    ],
  },

  {
    heading: "Swift OOPs",
    topics: [
      { label: "Swift Classes and Objects", path: "/swift/swift-classes-objects" },
      { label: "Swift Structures", path: "/swift/swift-structures" },
      { label: "Swift Properties", path: "/swift/swift-properties" },
      { label: "Swift Methods", path: "/swift/swift-methods" },
      { label: "Swift Inheritance", path: "/swift/swift-inheritance" },
      { label: "Swift Polymorphism", path: "/swift/swift-polymorphism" },
      { label: "Swift Encapsulation", path: "/swift/swift-encapsulation" },
      { label: "Swift Protocols", path: "/swift/swift-protocols" },
      { label: "Swift Extensions", path: "/swift/swift-extensions" },
      { label: "Swift Enumerations", path: "/swift/swift-enumerations" },
    ],
  },

  {
    heading: "Swift Advanced",
    topics: [
      { label: "Swift Error Handling", path: "/swift/swift-error-handling" },
      { label: "Swift Generics", path: "/swift/swift-generics" },
      { label: "Swift ARC", path: "/swift/swift-arc" },
      { label: "Swift Access Control", path: "/swift/swift-access-control" },
      { label: "Swift Closures Advanced", path: "/swift/swift-closures-advanced" },
      { label: "Swift Async Await", path: "/swift/swift-async-await" },
      { label: "Swift Concurrency", path: "/swift/swift-concurrency" },
      { label: "Swift Result Type", path: "/swift/swift-result-type" },
    ],
  },

  {
    heading: "SwiftUI",
    topics: [
      { label: "SwiftUI Intro", path: "/swift/swiftui-intro" },
      { label: "SwiftUI Views", path: "/swift/swiftui-views" },
      { label: "SwiftUI Text", path: "/swift/swiftui-text" },
      { label: "SwiftUI Buttons", path: "/swift/swiftui-buttons" },
      { label: "SwiftUI Navigation", path: "/swift/swiftui-navigation" },
      { label: "SwiftUI Lists", path: "/swift/swiftui-lists" },
      { label: "SwiftUI Forms", path: "/swift/swiftui-forms" },
      { label: "SwiftUI State Management", path: "/swift/swiftui-state-management" },
    ],
  },

  {
    heading: "iOS Development",
    topics: [
      { label: "iOS App Development", path: "/swift/ios-app-development" },
      { label: "UIKit Basics", path: "/swift/uikit-basics" },
      { label: "Storyboard", path: "/swift/storyboard" },
      { label: "Auto Layout", path: "/swift/auto-layout" },
      { label: "TableView", path: "/swift/tableview" },
      { label: "CollectionView", path: "/swift/collectionview" },
      { label: "Core Data", path: "/swift/core-data" },
      { label: "API Integration", path: "/swift/api-integration" },
    ],
  },

  {
    heading: "Swift Examples & Practice",
    topics: [
      { label: "Swift Examples", path: "/swift/swift-examples" },
      { label: "Swift Exercises", path: "/swift/swift-exercises" },
      { label: "Swift Programs", path: "/swift/swift-programs" },
      { label: "Swift Mini Projects", path: "/swift/swift-mini-projects" },
      { label: "Swift Interview Questions", path: "/swift/swift-interview-questions" },
    ],
  },

  {
    heading: "Swift MCQ",
    topics: [
      { label: "Swift MCQ", path: "/swift/swift-mcq" },
    ],
  },
];

const SwiftTopics = () => {
  return (
    <div>
      {swiftTopicsData.map((section) => (
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

export default SwiftTopics;