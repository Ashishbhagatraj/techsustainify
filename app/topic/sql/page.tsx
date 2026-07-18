import Link from "next/link";

export const sqlTopicsData = [
  {
    heading: "SQL Tutorials",
    topics: [
      { label: "SQL Home",                 path: "/sql/sql-home" },
      { label: "SQL Intro",                path: "/sql/sql-intro" },
      { label: "SQL Installation",         path: "/sql/sql-installation" },
      { label: "SQL Syntax",               path: "/sql/sql-syntax" },
      { label: "SQL Comments",             path: "/sql/sql-comments" },
      { label: "SQL Data Types",           path: "/sql/sql-data-types" },
      { label: "SQL Operators",            path: "/sql/sql-operators" },
      { label: "SQL Constraints",          path: "/sql/sql-constraints" },
      { label: "SQL NULL Values",          path: "/sql/sql-null-values" },
      { label: "SQL Aliases",              path: "/sql/sql-aliases" },
    ],
  },

  {
    heading: "SQL Database",
    topics: [
      { label: "SQL CREATE DATABASE",      path: "/sql/sql-create-database" },
      { label: "SQL DROP DATABASE",        path: "/sql/sql-drop-database" },
      { label: "SQL CREATE TABLE",         path: "/sql/sql-create-table" },
      { label: "SQL DROP TABLE",           path: "/sql/sql-drop-table" },
      { label: "SQL ALTER TABLE",          path: "/sql/sql-alter-table" },
      { label: "SQL TRUNCATE TABLE",       path: "/sql/sql-truncate-table" },
    ],
  },

  {
    heading: "SQL Queries",
    topics: [
      { label: "SQL SELECT",               path: "/sql/sql-select" },
      { label: "SQL SELECT DISTINCT",      path: "/sql/sql-select-distinct" },
      { label: "SQL WHERE Clause",         path: "/sql/sql-where-clause" },
      { label: "SQL ORDER BY",             path: "/sql/sql-order-by" },
      { label: "SQL GROUP BY",             path: "/sql/sql-group-by" },
      { label: "SQL HAVING Clause",        path: "/sql/sql-having-clause" },
      { label: "SQL LIMIT",                path: "/sql/sql-limit" },
      { label: "SQL BETWEEN",              path: "/sql/sql-between" },
      { label: "SQL IN Operator",          path: "/sql/sql-in-operator" },
      { label: "SQL LIKE Operator",        path: "/sql/sql-like-operator" },
    ],
  },

  {
    heading: "SQL Joins",
    topics: [
      { label: "SQL Joins",                path: "/sql/sql-joins" },
      { label: "SQL INNER JOIN",           path: "/sql/sql-inner-join" },
      { label: "SQL LEFT JOIN",            path: "/sql/sql-left-join" },
      { label: "SQL RIGHT JOIN",           path: "/sql/sql-right-join" },
      { label: "SQL FULL JOIN",            path: "/sql/sql-full-join" },
      { label: "SQL SELF JOIN",            path: "/sql/sql-self-join" },
      { label: "SQL CROSS JOIN",           path: "/sql/sql-cross-join" },
    ],
  },

  {
    heading: "SQL Functions",
    topics: [
      { label: "SQL Functions",            path: "/sql/sql-functions" },
      { label: "SQL COUNT()",              path: "/sql/sql-count" },
      { label: "SQL SUM()",                path: "/sql/sql-sum" },
      { label: "SQL AVG()",                path: "/sql/sql-avg" },
      { label: "SQL MIN()",                path: "/sql/sql-min" },
      { label: "SQL MAX()",                path: "/sql/sql-max" },
      { label: "SQL ROUND()",              path: "/sql/sql-round" },
      { label: "SQL NOW()",                path: "/sql/sql-now" },
    ],
  },

  {
    heading: "SQL Clauses",
    topics: [
      { label: "SQL DISTINCT",             path: "/sql/sql-distinct" },
      { label: "SQL AS Alias",             path: "/sql/sql-as-alias" },
      { label: "SQL UNION",                path: "/sql/sql-union" },
      { label: "SQL UNION ALL",            path: "/sql/sql-union-all" },
      { label: "SQL EXISTS",               path: "/sql/sql-exists" },
      { label: "SQL ANY and ALL",          path: "/sql/sql-any-all" },
    ],
  },

  {
    heading: "SQL Keys & Constraints",
    topics: [
      { label: "SQL Primary Key",          path: "/sql/sql-primary-key" },
      { label: "SQL Foreign Key",          path: "/sql/sql-foreign-key" },
      { label: "SQL Unique Key",           path: "/sql/sql-unique-key" },
      { label: "SQL Check Constraint",     path: "/sql/sql-check-constraint" },
      { label: "SQL Default Constraint",   path: "/sql/sql-default-constraint" },
      { label: "SQL Index",                path: "/sql/sql-index" },
    ],
  },

  {
    heading: "SQL Advanced",
    topics: [
      { label: "SQL Subquery",             path: "/sql/sql-subquery" },
      { label: "SQL Views",                path: "/sql/sql-views" },
      { label: "SQL Stored Procedure",     path: "/sql/sql-stored-procedure" },
      { label: "SQL Trigger",              path: "/sql/sql-trigger" },
      { label: "SQL Transactions",         path: "/sql/sql-transactions" },
      { label: "SQL Normalization",        path: "/sql/sql-normalization" },
    ],
  },

  {
    heading: "SQL Programming",
    topics: [
      { label: "SQL Examples",             path: "/sql/sql-examples" },
      { label: "SQL Exercises",            path: "/sql/sql-exercises" },
      { label: "SQL Projects",             path: "/sql/sql-projects" },
      { label: "SQL Interview Questions",  path: "/sql/sql-interview-questions" },
    ],
  },

  {
    heading: "SQL MCQ",
    topics: [
      { label: "SQL MCQ",                  path: "/sql/sql-mcq" },
    ],
  },
];

const SQLTopics = () => {
  return (
    <div>
      {sqlTopicsData.map((section) => (
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

export default SQLTopics;