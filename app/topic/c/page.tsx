import Link from "next/link";

export const cTopicsData = [
  {
    heading: "C Tutorials",
    topics: [
      { label: "C Home",               path: "/c/c-home" },
      { label: "C Intro",              path: "/c/c-intro" },
      { label: "C Installation",       path: "/c/c-installation" },
      { label: "C Compiler",           path: "/c/c-compiler" },
      { label: "C Keywords",           path: "/c/c-keywords" },
      { label: "C Identifier",         path: "/c/c-identifier" },
      { label: "C Syntax",             path: "/c/c-syntax" },
      { label: "C Comments",           path: "/c/c-comments" },
      { label: "C Block",              path: "/c/c-block" },
      { label: "C Data Types",         path: "/c/c-data-types" },
      { label: "C Variables",          path: "/c/c-variables" },
      { label: "C Constants",          path: "/c/c-constants" },
      { label: "C Operators",          path: "/c/c-operators" },
      { label: "C Boolean",            path: "/c/c-boolean" },
      { label: "C Arrays",             path: "/c/c-arrays" },
      { label: "C Strings",            path: "/c/c-strings" },
      { label: "C User Input",         path: "/c/c-user-input" },
      { label: "C Type Casting",       path: "/c/c-type-casting" },
      { label: "C Storage Classes",    path: "/c/c-storage-classes" },
    ],
  },

  {
    heading: "C Control Statement",
    topics: [
      { label: "C If-Else",        path: "/c/c-if-else" },
      { label: "C Switch",         path: "/c/c-switch" },
      { label: "C While Loop",     path: "/c/c-while-loop" },
      { label: "C DO While Loop",  path: "/c/c-do-while-loop" },
      { label: "C For Loop",       path: "/c/c-for-loop" },
      { label: "C Break/Continue", path: "/c/c-break-continue" },
      { label: "C Goto",           path: "/c/c-goto" },
    ],
  },

  {
    heading: "C Functions",
    topics: [
      { label: "C Functions",            path: "/c/c-functions" },
      { label: "C Function Parameters",  path: "/c/c-function-parameters" },
      { label: "C Function Recursion",   path: "/c/c-function-recursion" },
      { label: "C Call by Value",        path: "/c/c-call-by-value" },
      { label: "C Call by Reference",    path: "/c/c-call-by-reference" },
      { label: "C Scope Rules",          path: "/c/c-scope-rules" },
    ],
  },

  {
    heading: "C Pointers",
    topics: [
      { label: "C Pointers",             path: "/c/c-pointers" },
      { label: "C Pointer Arithmetic",   path: "/c/c-pointer-arithmetic" },
      { label: "C Null Pointer",         path: "/c/c-null-pointer" },
      { label: "C Void Pointer",         path: "/c/c-void-pointer" },
      { label: "C Wild Pointer",         path: "/c/c-wild-pointer" },
      { label: "C Dangling Pointer",     path: "/c/c-dangling-pointer" },
      { label: "C Double Pointer",       path: "/c/c-double-pointer" },
      { label: "C Function Pointer",     path: "/c/c-function-pointer" },
    ],
  },

  {
    heading: "C Arrays & Strings",
    topics: [
      { label: "C One Dimensional Array", path: "/c/c-one-dimensional-array" },
      { label: "C Multi Dimensional Array", path: "/c/c-multi-dimensional-array" },
      { label: "C Character Array",      path: "/c/c-character-array" },
      { label: "C String Functions",     path: "/c/c-string-functions" },
    ],
  },

  {
    heading: "C Memory Management",
    topics: [
      { label: "C Dynamic Memory Allocation", path: "/c/c-dynamic-memory-allocation" },
      { label: "C malloc()",                 path: "/c/c-malloc" },
      { label: "C calloc()",                 path: "/c/c-calloc" },
      { label: "C realloc()",                path: "/c/c-realloc" },
      { label: "C free()",                   path: "/c/c-free" },
    ],
  },

  {
    heading: "C Structures & Unions",
    topics: [
      { label: "C Structure",            path: "/c/c-structure" },
      { label: "C Nested Structure",     path: "/c/c-nested-structure" },
      { label: "C Union",                path: "/c/c-union" },
      { label: "C Typedef",              path: "/c/c-typedef" },
      { label: "C Enum",                 path: "/c/c-enum" },
    ],
  },

  {
    heading: "C File Handling",
    topics: [
      { label: "C File Handling",        path: "/c/c-file-handling" },
      { label: "C fopen()",              path: "/c/c-fopen" },
      { label: "C fclose()",             path: "/c/c-fclose" },
      { label: "C fprintf()",            path: "/c/c-fprintf" },
      { label: "C fscanf()",             path: "/c/c-fscanf" },
      { label: "C fread()",              path: "/c/c-fread" },
      { label: "C fwrite()",             path: "/c/c-fwrite" },
    ],
  },

  {
    heading: "C Preprocessor",
    topics: [
      { label: "C Preprocessor",         path: "/c/c-preprocessor" },
      { label: "C Macros",               path: "/c/c-macros" },
      { label: "C Header Files",         path: "/c/c-header-files" },
      { label: "C Conditional Compilation", path: "/c/c-conditional-compilation" },
    ],
  },

  {
    heading: "C Programming",
    topics: [
      { label: "C Number System", path: "/c/c-number-system" },
      { label: "C Patterns",      path: "/c/c-patterns" },
      { label: "C Programs",      path: "/c/c-programs" },
    ],
  },

  {
    heading: "C MCQ",
    topics: [
      { label: "C MCQ", path: "/c/c-mcq" },
    ],
  },

  {
    heading: "C Interview Question",
    topics: [
      { label: "C Interview", path: "/c/c-interview" },
    ],
  },
];

const CTopics = () => {
  return (
    <div>
      {cTopicsData.map((section) => (
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

export default CTopics;