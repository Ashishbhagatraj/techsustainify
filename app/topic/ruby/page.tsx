import Link from "next/link";

export const rubyTopicsData = [
  {
    heading: "Ruby Tutorials",
    topics: [
      { label: "Ruby Home", path: "/ruby/ruby-home" },
      { label: "Ruby Intro", path: "/ruby/ruby-intro" },
      { label: "Ruby Installation", path: "/ruby/ruby-installation" },
      { label: "Ruby Syntax", path: "/ruby/ruby-syntax" },
      { label: "Ruby Comments", path: "/ruby/ruby-comments" },
      { label: "Ruby Variables", path: "/ruby/ruby-variables" },
      { label: "Ruby Data Types", path: "/ruby/ruby-data-types" },
      { label: "Ruby Operators", path: "/ruby/ruby-operators" },
      { label: "Ruby Strings", path: "/ruby/ruby-strings" },
      { label: "Ruby Numbers", path: "/ruby/ruby-numbers" },
      { label: "Ruby Arrays", path: "/ruby/ruby-arrays" },
      { label: "Ruby Hashes", path: "/ruby/ruby-hashes" },
      { label: "Ruby Symbols", path: "/ruby/ruby-symbols" },
      { label: "Ruby User Input", path: "/ruby/ruby-user-input" },
      { label: "Ruby Type Casting", path: "/ruby/ruby-type-casting" },
    ],
  },

  {
    heading: "Ruby Control Statements",
    topics: [
      { label: "Ruby If Else", path: "/ruby/ruby-if-else" },
      { label: "Ruby Case", path: "/ruby/ruby-case" },
      { label: "Ruby While Loop", path: "/ruby/ruby-while-loop" },
      { label: "Ruby Until Loop", path: "/ruby/ruby-until-loop" },
      { label: "Ruby For Loop", path: "/ruby/ruby-for-loop" },
      { label: "Ruby Break", path: "/ruby/ruby-break" },
      { label: "Ruby Next", path: "/ruby/ruby-next" },
      { label: "Ruby Redo", path: "/ruby/ruby-redo" },
    ],
  },

  {
    heading: "Ruby Methods",
    topics: [
      { label: "Ruby Methods", path: "/ruby/ruby-methods" },
      { label: "Ruby Parameters", path: "/ruby/ruby-parameters" },
      { label: "Ruby Return Statement", path: "/ruby/ruby-return-statement" },
      { label: "Ruby Blocks", path: "/ruby/ruby-blocks" },
      { label: "Ruby Yield", path: "/ruby/ruby-yield" },
      { label: "Ruby Recursion", path: "/ruby/ruby-recursion" },
    ],
  },

  {
    heading: "Ruby OOP",
    topics: [
      { label: "Ruby Classes", path: "/ruby/ruby-classes" },
      { label: "Ruby Objects", path: "/ruby/ruby-objects" },
      { label: "Ruby Constructors", path: "/ruby/ruby-constructors" },
      { label: "Ruby Instance Variables", path: "/ruby/ruby-instance-variables" },
      { label: "Ruby Class Variables", path: "/ruby/ruby-class-variables" },
      { label: "Ruby Inheritance", path: "/ruby/ruby-inheritance" },
      { label: "Ruby Polymorphism", path: "/ruby/ruby-polymorphism" },
      { label: "Ruby Encapsulation", path: "/ruby/ruby-encapsulation" },
      { label: "Ruby Modules", path: "/ruby/ruby-modules" },
      { label: "Ruby Mixins", path: "/ruby/ruby-mixins" },
    ],
  },

  {
    heading: "Ruby Exception Handling",
    topics: [
      { label: "Ruby Exceptions", path: "/ruby/ruby-exceptions" },
      { label: "Ruby Begin Rescue", path: "/ruby/ruby-begin-rescue" },
      { label: "Ruby Raise", path: "/ruby/ruby-raise" },
      { label: "Ruby Ensure", path: "/ruby/ruby-ensure" },
    ],
  },

  {
    heading: "Ruby Collections",
    topics: [
      { label: "Ruby Arrays", path: "/ruby/ruby-arrays" },
      { label: "Ruby Hashes", path: "/ruby/ruby-hashes" },
      { label: "Ruby Iterators", path: "/ruby/ruby-iterators" },
      { label: "Ruby Enumerables", path: "/ruby/ruby-enumerables" },
      { label: "Ruby Ranges", path: "/ruby/ruby-ranges" },
    ],
  },

  {
    heading: "Ruby File Handling",
    topics: [
      { label: "Ruby File Handling", path: "/ruby/ruby-file-handling" },
      { label: "Ruby Read File", path: "/ruby/ruby-read-file" },
      { label: "Ruby Write File", path: "/ruby/ruby-write-file" },
      { label: "Ruby File Methods", path: "/ruby/ruby-file-methods" },
      { label: "Ruby Directories", path: "/ruby/ruby-directories" },
    ],
  },

  {
    heading: "Ruby Advanced",
    topics: [
      { label: "Ruby Regular Expressions", path: "/ruby/ruby-regular-expressions" },
      { label: "Ruby Lambda", path: "/ruby/ruby-lambda" },
      { label: "Ruby Proc", path: "/ruby/ruby-proc" },
      { label: "Ruby Threads", path: "/ruby/ruby-threads" },
      { label: "Ruby Gems", path: "/ruby/ruby-gems" },
    ],
  },

  {
    heading: "Ruby on Rails",
    topics: [
      { label: "Ruby on Rails Intro", path: "/ruby/ruby-on-rails-intro" },
      { label: "Ruby on Rails Installation", path: "/ruby/ruby-on-rails-installation" },
      { label: "Ruby on Rails MVC", path: "/ruby/ruby-on-rails-mvc" },
      { label: "Ruby on Rails Routing", path: "/ruby/ruby-on-rails-routing" },
      { label: "Ruby on Rails Active Record", path: "/ruby/ruby-on-rails-active-record" },
    ],
  },

  {
    heading: "Ruby Examples & Practice",
    topics: [
      { label: "Ruby Examples", path: "/ruby/ruby-examples" },
      { label: "Ruby Exercises", path: "/ruby/ruby-exercises" },
      { label: "Ruby Projects", path: "/ruby/ruby-projects" },
      { label: "Ruby Interview Questions", path: "/ruby/ruby-interview-questions" },
    ],
  },

  {
    heading: "Ruby MCQ",
    topics: [
      { label: "Ruby MCQ", path: "/ruby/ruby-mcq" },
    ],
  },
];

const RubyTopics = () => {
  return (
    <div>
      {rubyTopicsData.map((section) => (
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

export default RubyTopics;