import Link from "next/link";

export const mongodbTopicsData = [
  {
    heading: "MongoDB Tutorials",
    topics: [
      { label: "MongoDB Home", path: "/mongodb/mongodb-home" },
      { label: "MongoDB Intro", path: "/mongodb/mongodb-intro" },
      { label: "MongoDB Installation", path: "/mongodb/mongodb-installation" },
      { label: "MongoDB Compass", path: "/mongodb/mongodb-compass" },
      { label: "MongoDB Shell", path: "/mongodb/mongodb-shell" },
      { label: "MongoDB Database", path: "/mongodb/mongodb-database" },
      { label: "MongoDB Collection", path: "/mongodb/mongodb-collection" },
      { label: "MongoDB Documents", path: "/mongodb/mongodb-documents" },
      { label: "MongoDB BSON", path: "/mongodb/mongodb-bson" },
      { label: "MongoDB Data Types", path: "/mongodb/mongodb-data-types" },
    ],
  },

  {
    heading: "MongoDB CRUD Operations",
    topics: [
      { label: "MongoDB Insert", path: "/mongodb/mongodb-insert" },
      { label: "MongoDB Find", path: "/mongodb/mongodb-find" },
      { label: "MongoDB Update", path: "/mongodb/mongodb-update" },
      { label: "MongoDB Delete", path: "/mongodb/mongodb-delete" },
      { label: "MongoDB Query", path: "/mongodb/mongodb-query" },
      { label: "MongoDB Projection", path: "/mongodb/mongodb-projection" },
      { label: "MongoDB Limit", path: "/mongodb/mongodb-limit" },
      { label: "MongoDB Sort", path: "/mongodb/mongodb-sort" },
    ],
  },

  {
    heading: "MongoDB Operators",
    topics: [
      { label: "MongoDB Comparison Operators", path: "/mongodb/mongodb-comparison-operators" },
      { label: "MongoDB Logical Operators", path: "/mongodb/mongodb-logical-operators" },
      { label: "MongoDB Element Operators", path: "/mongodb/mongodb-element-operators" },
      { label: "MongoDB Array Operators", path: "/mongodb/mongodb-array-operators" },
      { label: "MongoDB Update Operators", path: "/mongodb/mongodb-update-operators" },
    ],
  },

  {
    heading: "MongoDB Aggregation",
    topics: [
      { label: "MongoDB Aggregation", path: "/mongodb/mongodb-aggregation" },
      { label: "MongoDB Pipeline", path: "/mongodb/mongodb-pipeline" },
      { label: "MongoDB Match", path: "/mongodb/mongodb-match" },
      { label: "MongoDB Group", path: "/mongodb/mongodb-group" },
      { label: "MongoDB Project", path: "/mongodb/mongodb-project" },
      { label: "MongoDB Lookup", path: "/mongodb/mongodb-lookup" },
      { label: "MongoDB Unwind", path: "/mongodb/mongodb-unwind" },
    ],
  },

  {
    heading: "MongoDB Indexing",
    topics: [
      { label: "MongoDB Indexing", path: "/mongodb/mongodb-indexing" },
      { label: "MongoDB Create Index", path: "/mongodb/mongodb-create-index" },
      { label: "MongoDB Unique Index", path: "/mongodb/mongodb-unique-index" },
      { label: "MongoDB Text Index", path: "/mongodb/mongodb-text-index" },
      { label: "MongoDB Compound Index", path: "/mongodb/mongodb-compound-index" },
    ],
  },

  {
    heading: "MongoDB Relationships",
    topics: [
      { label: "MongoDB Embedded Documents", path: "/mongodb/mongodb-embedded-documents" },
      { label: "MongoDB References", path: "/mongodb/mongodb-references" },
      { label: "MongoDB One to One", path: "/mongodb/mongodb-one-to-one" },
      { label: "MongoDB One to Many", path: "/mongodb/mongodb-one-to-many" },
      { label: "MongoDB Many to Many", path: "/mongodb/mongodb-many-to-many" },
    ],
  },

  {
    heading: "MongoDB Advanced",
    topics: [
      { label: "MongoDB Replication", path: "/mongodb/mongodb-replication" },
      { label: "MongoDB Sharding", path: "/mongodb/mongodb-sharding" },
      { label: "MongoDB Transactions", path: "/mongodb/mongodb-transactions" },
      { label: "MongoDB Backup", path: "/mongodb/mongodb-backup" },
      { label: "MongoDB Restore", path: "/mongodb/mongodb-restore" },
      { label: "MongoDB Atlas", path: "/mongodb/mongodb-atlas" },
    ],
  },

  {
    heading: "MongoDB with Node.js",
    topics: [
      { label: "MongoDB with Node.js", path: "/mongodb/mongodb-nodejs" },
      { label: "MongoDB with Express", path: "/mongodb/mongodb-express" },
      { label: "MongoDB with Mongoose", path: "/mongodb/mongodb-mongoose" },
      { label: "MongoDB CRUD API", path: "/mongodb/mongodb-crud-api" },
      { label: "MongoDB Authentication", path: "/mongodb/mongodb-authentication" },
    ],
  },

  {
    heading: "MongoDB Examples & Practice",
    topics: [
      { label: "MongoDB Examples", path: "/mongodb/mongodb-examples" },
      { label: "MongoDB Exercises", path: "/mongodb/mongodb-exercises" },
      { label: "MongoDB Projects", path: "/mongodb/mongodb-projects" },
      { label: "MongoDB Interview Questions", path: "/mongodb/mongodb-interview-questions" },
    ],
  },

  {
    heading: "MongoDB MCQ",
    topics: [
      { label: "MongoDB MCQ", path: "/mongodb/mongodb-mcq" },
    ],
  },
];

const MongoDBTopics = () => {
  return (
    <div>
      {mongodbTopicsData.map((section) => (
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

export default MongoDBTopics;