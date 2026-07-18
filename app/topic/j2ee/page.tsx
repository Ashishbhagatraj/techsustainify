import Link from "next/link";

export const j2eeTopicsData = [
  {
    heading: "J2EE Tutorials",
    topics: [
      { label: "J2EE Home", path: "/j2ee/j2ee-home" },
      { label: "J2EE Intro", path: "/j2ee/j2ee-intro" },
      { label: "J2EE Architecture", path: "/j2ee/j2ee-architecture" },
      { label: "J2EE Environment Setup", path: "/j2ee/j2ee-environment-setup" },
      { label: "J2EE Modules", path: "/j2ee/j2ee-modules" },
      { label: "J2EE Container", path: "/j2ee/j2ee-container" },
      { label: "J2EE Web Container", path: "/j2ee/j2ee-web-container" },
      { label: "J2EE Application Server", path: "/j2ee/j2ee-application-server" },
      { label: "J2EE Deployment Descriptor", path: "/j2ee/j2ee-deployment-descriptor" },
    ],
  },

  {
    heading: "Servlet",
    topics: [
      { label: "Servlet Intro", path: "/j2ee/servlet-intro" },
      { label: "Servlet Life Cycle", path: "/j2ee/servlet-life-cycle" },
      { label: "Servlet API", path: "/j2ee/servlet-api" },
      { label: "Servlet Request", path: "/j2ee/servlet-request" },
      { label: "Servlet Response", path: "/j2ee/servlet-response" },
      { label: "Servlet Config", path: "/j2ee/servlet-config" },
      { label: "Servlet Context", path: "/j2ee/servlet-context" },
      { label: "Servlet Session Tracking", path: "/j2ee/servlet-session-tracking" },
      { label: "Servlet Cookies", path: "/j2ee/servlet-cookies" },
      { label: "Servlet Filters", path: "/j2ee/servlet-filters" },
    ],
  },

  {
    heading: "JSP",
    topics: [
      { label: "JSP Intro", path: "/j2ee/jsp-intro" },
      { label: "JSP Life Cycle", path: "/j2ee/jsp-life-cycle" },
      { label: "JSP Directives", path: "/j2ee/jsp-directives" },
      { label: "JSP Scripting Elements", path: "/j2ee/jsp-scripting-elements" },
      { label: "JSP Implicit Objects", path: "/j2ee/jsp-implicit-objects" },
      { label: "JSP Actions", path: "/j2ee/jsp-actions" },
      { label: "JSP Expression Language", path: "/j2ee/jsp-expression-language" },
      { label: "JSP JSTL", path: "/j2ee/jsp-jstl" },
      { label: "JSP Exception Handling", path: "/j2ee/jsp-exception-handling" },
    ],
  },

  {
    heading: "JDBC",
    topics: [
      { label: "JDBC Intro", path: "/j2ee/jdbc-intro" },
      { label: "JDBC Drivers", path: "/j2ee/jdbc-drivers" },
      { label: "JDBC Connection", path: "/j2ee/jdbc-connection" },
      { label: "JDBC Statement", path: "/j2ee/jdbc-statement" },
      { label: "JDBC PreparedStatement", path: "/j2ee/jdbc-preparedstatement" },
      { label: "JDBC ResultSet", path: "/j2ee/jdbc-resultset" },
      { label: "JDBC Transactions", path: "/j2ee/jdbc-transactions" },
      { label: "JDBC Batch Processing", path: "/j2ee/jdbc-batch-processing" },
    ],
  },

  {
    heading: "EJB",
    topics: [
      { label: "EJB Intro", path: "/j2ee/ejb-intro" },
      { label: "EJB Architecture", path: "/j2ee/ejb-architecture" },
      { label: "Session Bean", path: "/j2ee/session-bean" },
      { label: "Entity Bean", path: "/j2ee/entity-bean" },
      { label: "Message Driven Bean", path: "/j2ee/message-driven-bean" },
      { label: "EJB Transactions", path: "/j2ee/ejb-transactions" },
      { label: "EJB Security", path: "/j2ee/ejb-security" },
    ],
  },

  {
    heading: "J2EE Frameworks",
    topics: [
      { label: "Spring Framework", path: "/j2ee/spring-framework" },
      { label: "Hibernate", path: "/j2ee/hibernate" },
      { label: "Struts", path: "/j2ee/struts" },
      { label: "JSF", path: "/j2ee/jsf" },
    ],
  },

  {
    heading: "J2EE Deployment",
    topics: [
      { label: "WAR File", path: "/j2ee/war-file" },
      { label: "EAR File", path: "/j2ee/ear-file" },
      { label: "Apache Tomcat", path: "/j2ee/apache-tomcat" },
      { label: "GlassFish Server", path: "/j2ee/glassfish-server" },
      { label: "J2EE Deployment Process", path: "/j2ee/j2ee-deployment-process" },
    ],
  },

  {
    heading: "J2EE Examples & Practice",
    topics: [
      { label: "J2EE Examples", path: "/j2ee/j2ee-examples" },
      { label: "J2EE Exercises", path: "/j2ee/j2ee-exercises" },
      { label: "J2EE Projects", path: "/j2ee/j2ee-projects" },
      { label: "J2EE Interview Questions", path: "/j2ee/j2ee-interview-questions" },
    ],
  },

  {
    heading: "J2EE MCQ",
    topics: [
      { label: "J2EE MCQ", path: "/j2ee/j2ee-mcq" },
    ],
  },
];

const J2EETopics = () => {
  return (
    <div className="j2ee-container">
      {j2eeTopicsData.map((section) => (
        <div className="j2ee-section" key={section.heading}>
          <h1 className="j2ee-heading">{section.heading}</h1>

          <div className="j2ee-topics">
            {section.topics.map((topic) => (
              <Link
                href={topic.path}
                key={topic.path}
                className="j2ee-link"
              >
                <div className="j2ee-card">
                  <h3>{topic.label}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default J2EETopics;