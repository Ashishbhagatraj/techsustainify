import React from "react";
import Link from "next/link";
import "../styles/Aaa.css";

const sections = [
  {
    id: "general-disclaimer",
    title: "General Disclaimer",
    content: (
      <>
        <p>
          The information, tutorials, course materials, coding examples, project guides, and all
          other educational content provided on <strong>TechSustainify</strong> are intended solely
          for general educational and informational purposes. While we invest significant effort in
          creating accurate, up-to-date, and practical content, we make no representations or
          warranties of any kind — express, implied, or statutory — about the completeness,
          reliability, accuracy, or suitability of the information for any specific purpose.
        </p>
        <p>
          Technology is a rapidly evolving field. Programming languages, frameworks, tools, and
          best practices change frequently. Content that was accurate at the time of publication
          may become outdated. TechSustainify does not guarantee that all platform content reflects
          the latest industry standards, version releases, or emerging technologies at any given time.
        </p>
        <div className="highlightBox">
          <strong>⚠️ Important</strong>
          Nothing on this website constitutes professional advice — whether technical, legal,
          financial, or career-related. Always consult qualified professionals before making
          important decisions based on information learned through our platform.
        </div>
      </>
    ),
  },
  {
    id: "educational-outcomes",
    title: "Educational Outcomes Disclaimer",
    content: (
      <>
        <p>
          TechSustainify provides structured coding education designed to build real-world technical
          skills. However, we make <strong>no guarantees regarding specific learning outcomes,
          career placements, salary increases, or employment opportunities</strong> as a result of
          completing any course, program, or certification on our platform.
        </p>
        <p>
          Individual results vary significantly based on factors entirely outside our control,
          including but not limited to:
        </p>
        <ul className="list">
          <li><span className="listDot"></span><span>The learner's prior educational background, programming experience, and aptitude.</span></li>
          <li><span className="listDot"></span><span>The time and effort invested in completing lessons, assignments, and practice projects.</span></li>
          <li><span className="listDot"></span><span>Regional job market conditions, hiring trends, and employer-specific requirements.</span></li>
          <li><span className="listDot"></span><span>The learner's communication skills, portfolio quality, and overall interview preparation.</span></li>
          <li><span className="listDot"></span><span>Economic conditions, industry demand fluctuations, and technology adoption rates.</span></li>
        </ul>
        <p>
          Testimonials and success stories shared on our platform represent exceptional results
          achieved by highly motivated learners and are not representative of the average
          experience. We present them for inspirational purposes only.
        </p>
      </>
    ),
  },
  {
    id: "technical-accuracy",
    title: "Technical Content Accuracy",
    content: (
      <>
        <p>
          Our instructors and content creators are experienced developers and educators who strive
          to provide technically accurate and practically relevant content. However, given the
          rapid evolution of technology, the following limitations apply:
        </p>
        <div className="cardGrid">
          <div className="infoCard">
            <h5>🔧 Code Examples</h5>
            <p>Code snippets and examples are tested at the time of publication. They may not be compatible with future versions of languages, frameworks, or runtime environments.</p>
          </div>
          <div className="infoCard">
            <h5>📦 Third-Party Tools</h5>
            <p>References to third-party tools, libraries, APIs, and services reflect their state at time of writing. Their availability, pricing, or functionality may change without notice.</p>
          </div>
          <div className="infoCard">
            <h5>🌐 External Links</h5>
            <p>Links to external websites and documentation are provided for convenience. TechSustainify does not control external sites and is not responsible for their content or availability.</p>
          </div>
          <div className="infoCard">
            <h5>📚 Best Practices</h5>
            <p>Industry best practices evolve over time. Methods taught in our courses may not always reflect the latest community standards or security recommendations at the time of use.</p>
          </div>
        </div>
        <p>
          If you discover technical inaccuracies, outdated information, or errors in our content,
          we encourage you to report them at <strong>content@techsustainify.com</strong>.
          Your feedback helps us keep our platform accurate and trustworthy for all learners.
        </p>
      </>
    ),
  },
  {
    id: "professional-advice",
    title: "No Professional Advice",
    content: (
      <>
        <p>
          Content on TechSustainify is strictly educational and does not substitute for professional
          advice in any specialized field. Specifically:
        </p>
        <ul className="list">
          <li><span className="listDot"></span><span><strong>Not Legal Advice:</strong> Discussions of software licensing, intellectual property, data protection laws, or compliance are for educational awareness only. Consult a qualified attorney for legal guidance.</span></li>
          <li><span className="listDot"></span><span><strong>Not Financial Advice:</strong> Any mention of freelancing rates, tech salaries, startup funding, or monetizing skills is informational and not a substitute for advice from a licensed financial advisor.</span></li>
          <li><span className="listDot"></span><span><strong>Not Career Counselling:</strong> Course recommendations, career roadmaps, and industry insights are general guides, not personalized career advice from certified counselors.</span></li>
          <li><span className="listDot"></span><span><strong>Not Cybersecurity Consulting:</strong> Security concepts taught on our platform are educational. Do not rely solely on this knowledge to secure production systems without professional security assessment.</span></li>
        </ul>
      </>
    ),
  },
  {
    id: "third-party-content",
    title: "Third-Party Content & Affiliations",
    content: (
      <>
        <p>
          TechSustainify may feature content, tools, or links from third-party providers, open-source
          communities, and industry partners. We are not responsible for the accuracy, legality,
          decency, or reliability of any third-party content linked from or embedded within our platform.
        </p>
        <p>
          Some pages on TechSustainify may contain affiliate links or sponsored content, which
          will always be clearly disclosed. Clicking affiliate links may earn TechSustainify a
          commission at no additional cost to you. Our editorial content and course recommendations
          are never influenced by affiliate relationships — we only recommend products we genuinely
          believe are valuable to learners.
        </p>
        <p>
          Mention of specific companies, tools (e.g., GitHub, VS Code, AWS, Google), or programming
          languages does not imply endorsement by or official partnership with those organizations
          unless explicitly stated.
        </p>
      </>
    ),
  },
  {
    id: "platform-availability",
    title: "Platform Availability",
    content: (
      <>
        <p>
          We work hard to maintain 99.9% platform uptime, but TechSustainify does not guarantee
          uninterrupted, error-free, or completely secure access to our services at all times.
          Planned maintenance, unexpected technical issues, cyberattacks, or force majeure events
          may temporarily affect platform availability.
        </p>
        <p>
          We reserve the right to modify, suspend, or discontinue any part of our platform at
          any time without prior notice. In the event of course discontinuation, enrolled users
          will receive advance notice and options for refund or course migration where applicable.
        </p>
        <p>
          TechSustainify shall not be held liable for any loss of progress, data, or access resulting
          from technical failures beyond our reasonable control. We recommend users regularly save
          their work, download available resources, and keep notes of key learnings.
        </p>
      </>
    ),
  },
  {
    id: "updates",
    title: "Disclaimer Updates",
    content: (
      <>
        <p>
          This Disclaimer may be updated periodically to reflect changes in our services, content
          offerings, legal requirements, or business practices. Updates will be posted on this page
          with a revised "Last Updated" date. For significant changes, we will notify registered
          users via email or a platform-wide announcement.
        </p>
        <p>
          Your continued use of TechSustainify following any update to this Disclaimer constitutes
          your acknowledgment and acceptance of the revised terms. We recommend bookmarking this page
          and reviewing it periodically.
        </p>
      </>
    ),
  },
];

const toc = sections.map((s) => ({ id: s.id, title: s.title }));

const Disclaimer = () => {
  return (
    <div className="page">

      {/* HERO */}
      <div className="hero">
        <div className="heroBadge">
          <span></span> Legal Document
        </div>
        <h1 className="heroTitle">
          <span>Disclaimer</span>
        </h1>
        <div className="heroMeta">
          <span>⚖️ Important Notices</span>
          <span className="heroDivider">|</span>
          <span>📅 Last Updated: January 1, 2025</span>
          <span className="heroDivider">|</span>
          <span>📖 ~9 min read</span>
        </div>
      </div>

      {/* LAYOUT */}
      <div className="layout">

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebarTitle">Table of Contents</div>
          <ul className="tocList">
            {toc.map((item, i) => (
              <li key={i}>
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </aside>

        {/* CONTENT */}
        <main className="content">

          <div className="highlightBox">
            <strong>📋 Summary</strong>
            TechSustainify content is for educational purposes only. We do not guarantee specific
            career outcomes, technical accuracy beyond publication date, or professional advice
            in any specialized field. Use our content as a learning foundation, not a definitive guide.
          </div>

          {sections.map((sec, i) => (
            <div key={i}>
              <section className="section" id={sec.id}>
                <div className="sectionHeader">
                  <div className="sectionNum">{String(i + 1).padStart(2, "0")}</div>
                  <h2 className="sectionTitle">{sec.title}</h2>
                </div>
                <div className="sectionBody">{sec.content}</div>
              </section>
              {i < sections.length - 1 && <div className="divider"></div>}
            </div>
          ))}

          {/* CONTACT BANNER */}
          <div className="contactBanner">
            <h3>Need Clarification?</h3>
            <p>
              If you have questions about the scope of this Disclaimer or want to report
              inaccurate content on our platform, we'd love to hear from you.
            </p>
            <Link href="/contact" className="contactBtn">Get in Touch</Link>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Disclaimer;
