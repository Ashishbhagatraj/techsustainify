import Link from "next/link";

export const nodeTopicsData = [
  {
    heading: "Node.js Tutorials",
    topics: [
      { label: "Node.js Home", path: "/nodejs/nodejs-home" },
      { label: "Node.js Intro", path: "/nodejs/nodejs-intro" },
      { label: "Node.js Installation", path: "/nodejs/nodejs-installation" },
      { label: "Node.js REPL", path: "/nodejs/nodejs-repl" },
      { label: "Node.js Modules", path: "/nodejs/nodejs-modules" },
      { label: "Node.js NPM", path: "/nodejs/nodejs-npm" },
      { label: "Node.js Package.json", path: "/nodejs/nodejs-package-json" },
      { label: "Node.js File System", path: "/nodejs/nodejs-file-system" },
      { label: "Node.js Path Module", path: "/nodejs/nodejs-path-module" },
      { label: "Node.js OS Module", path: "/nodejs/nodejs-os-module" },
      { label: "Node.js Events", path: "/nodejs/nodejs-events" },
      { label: "Node.js Buffers", path: "/nodejs/nodejs-buffers" },
      { label: "Node.js Streams", path: "/nodejs/nodejs-streams" },
      { label: "Node.js Pipes", path: "/nodejs/nodejs-pipes" },
      { label: "Node.js Error Handling", path: "/nodejs/nodejs-error-handling" },
    ],
  },

  {
    heading: "Node.js HTTP Module",
    topics: [
      { label: "Node.js HTTP Server", path: "/nodejs/nodejs-http-server" },
      { label: "Node.js Request Object", path: "/nodejs/nodejs-request-object" },
      { label: "Node.js Response Object", path: "/nodejs/nodejs-response-object" },
      { label: "Node.js Routing", path: "/nodejs/nodejs-routing" },
      { label: "Node.js URL Module", path: "/nodejs/nodejs-url-module" },
    ],
  },

  {
    heading: "Node.js Express",
    topics: [
      { label: "Node.js Express Intro", path: "/nodejs/nodejs-express-intro" },
      { label: "Node.js Express Routing", path: "/nodejs/nodejs-express-routing" },
      { label: "Node.js Middleware", path: "/nodejs/nodejs-middleware" },
      { label: "Node.js REST API", path: "/nodejs/nodejs-rest-api" },
      { label: "Node.js CRUD API", path: "/nodejs/nodejs-crud-api" },
      { label: "Node.js Express Static Files", path: "/nodejs/nodejs-express-static-files" },
    ],
  },

  {
    heading: "Node.js Database",
    topics: [
      { label: "Node.js MongoDB", path: "/nodejs/nodejs-mongodb" },
      { label: "Node.js Mongoose", path: "/nodejs/nodejs-mongoose" },
      { label: "Node.js MySQL", path: "/nodejs/nodejs-mysql" },
      { label: "Node.js PostgreSQL", path: "/nodejs/nodejs-postgresql" },
      { label: "Node.js Sequelize", path: "/nodejs/nodejs-sequelize" },
    ],
  },

  {
    heading: "Node.js Authentication",
    topics: [
      { label: "Node.js Authentication", path: "/nodejs/nodejs-authentication" },
      { label: "Node.js JWT", path: "/nodejs/nodejs-jwt" },
      { label: "Node.js Cookies", path: "/nodejs/nodejs-cookies" },
      { label: "Node.js Sessions", path: "/nodejs/nodejs-sessions" },
      { label: "Node.js Password Hashing", path: "/nodejs/nodejs-password-hashing" },
    ],
  },

  {
    heading: "Node.js Advanced",
    topics: [
      { label: "Node.js Async Programming", path: "/nodejs/nodejs-async-programming" },
      { label: "Node.js Callbacks", path: "/nodejs/nodejs-callbacks" },
      { label: "Node.js Promises", path: "/nodejs/nodejs-promises" },
      { label: "Node.js Async Await", path: "/nodejs/nodejs-async-await" },
      { label: "Node.js Event Loop", path: "/nodejs/nodejs-event-loop" },
      { label: "Node.js Clustering", path: "/nodejs/nodejs-clustering" },
      { label: "Node.js Child Process", path: "/nodejs/nodejs-child-process" },
    ],
  },

  {
    heading: "Node.js Deployment",
    topics: [
      { label: "Node.js Deployment", path: "/nodejs/nodejs-deployment" },
      { label: "Node.js PM2", path: "/nodejs/nodejs-pm2" },
      { label: "Node.js Environment Variables", path: "/nodejs/nodejs-environment-variables" },
      { label: "Node.js Docker", path: "/nodejs/nodejs-docker" },
      { label: "Node.js Hosting", path: "/nodejs/nodejs-hosting" },
    ],
  },

  {
    heading: "Node.js Examples & Practice",
    topics: [
      { label: "Node.js Examples", path: "/nodejs/nodejs-examples" },
      { label: "Node.js Exercises", path: "/nodejs/nodejs-exercises" },
      { label: "Node.js Projects", path: "/nodejs/nodejs-projects" },
      { label: "Node.js Interview Questions", path: "/nodejs/nodejs-interview-questions" },
    ],
  },

  {
    heading: "Node.js MCQ",
    topics: [
      { label: "Node.js MCQ", path: "/nodejs/nodejs-mcq" },
    ],
  },
];

const NodeTopics = () => {
  return (
    <div>
      {nodeTopicsData.map((section) => (
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

export default NodeTopics;