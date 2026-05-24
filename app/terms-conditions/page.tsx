import React from "react";
import Link from "next/link";
import "../styles/Aaa.css";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: (
      <>
        <p>
          By accessing or using <strong>TechSustainify</strong> — including our website, mobile
          applications, online courses, coding challenges, and all related services — you agree to be
          legally bound by these Terms and Conditions. Please read them carefully before proceeding.
        </p>
        <p>
          These Terms constitute a legally binding agreement between you ("User," "Learner," or "you")
          and TechSustainify ("Company," "we," "us," or "our"). If you do not agree with any part of
          these Terms, you must discontinue use of our platform immediately.
        </p>
        <div className="highlightBox">
          <strong>📌 Effective Date</strong>
          These Terms and Conditions are effective as of January 1, 2025, and supersede all previous
          versions of our terms of service. Continued use of the platform after this date constitutes
          acceptance of these Terms.
        </div>
      </>
    ),
  },
  {
    id: "account-registration",
    title: "Account Registration & Eligibility",
    content: (
      <>
        <p>
          To access most features of TechSustainify, you must create a registered account. By
          registering, you represent and warrant that:
        </p>
        <ul className="list">
          <li><span className="listDot"></span><span>You are at least <strong>13 years of age</strong>. Users under 18 must have consent from a parent or legal guardian.</span></li>
          <li><span className="listDot"></span><span>All registration information you provide is accurate, current, and complete to the best of your knowledge.</span></li>
          <li><span className="listDot"></span><span>You will promptly update your account information if any details change after registration.</span></li>
          <li><span className="listDot"></span><span>You are solely responsible for maintaining the confidentiality of your account credentials.</span></li>
          <li><span className="listDot"></span><span>You will immediately notify TechSustainify of any unauthorized use of your account at security@techsustainify.com.</span></li>
        </ul>
        <p>
          You may not create more than one personal account. Duplicate accounts may be merged or
          terminated at our discretion. Accounts created using automated scripts, bots, or false
          identities will be permanently suspended without refund.
        </p>
      </>
    ),
  },
  {
    id: "courses-payments",
    title: "Courses, Payments & Refunds",
    content: (
      <>
        <p>
          TechSustainify offers both free and paid educational content. The following terms apply
          to all commercial transactions on our platform:
        </p>
        <div className="cardGrid">
          <div className="infoCard">
            <h5>💳 Pricing</h5>
            <p>All prices are displayed in Indian Rupees (INR) or US Dollars (USD) as applicable. Prices are inclusive of applicable taxes where required by law.</p>
          </div>
          <div className="infoCard">
            <h5>🔄 Refund Policy</h5>
            <p>We offer a 7-day money-back guarantee on all paid courses, provided less than 20% of the course content has been accessed or completed.</p>
          </div>
          <div className="infoCard">
            <h5>📦 Subscription Plans</h5>
            <p>Monthly and annual subscription plans auto-renew unless cancelled at least 24 hours before the renewal date through account settings.</p>
          </div>
          <div className="infoCard">
            <h5>🎫 Certificates</h5>
            <p>Course completion certificates are issued digitally. Physical certificates, if requested, may incur additional printing and shipping charges.</p>
          </div>
        </div>
        <p>
          TechSustainify reserves the right to modify pricing at any time. Price changes will not
          affect courses already purchased. Promotional offers and discounts cannot be applied
          retroactively to completed transactions.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property Rights",
    content: (
      <>
        <p>
          All content on TechSustainify — including but not limited to video lectures, written
          tutorials, coding exercises, quizzes, assessments, graphics, logos, UI design, and
          brand materials — is the exclusive intellectual property of TechSustainify or its
          licensed content creators.
        </p>
        <p>
          Your enrollment in a course grants you a <strong>personal, non-exclusive, non-transferable,
          revocable license</strong> to access and use the course content for your own personal
          learning purposes only. You may not:
        </p>
        <ul className="list">
          <li><span className="listDot"></span><span>Copy, reproduce, or redistribute course materials in any form without prior written consent.</span></li>
          <li><span className="listDot"></span><span>Screen-record, download (unless explicitly permitted), or offline-store video lectures.</span></li>
          <li><span className="listDot"></span><span>Sell, sublicense, or share your account access or course materials with others.</span></li>
          <li><span className="listDot"></span><span>Use TechSustainify's branding, logos, or trademarks without explicit written authorization.</span></li>
        </ul>
        <p>
          <strong>User-Generated Content:</strong> By submitting projects, forum posts, or code solutions,
          you grant TechSustainify a worldwide, royalty-free license to display and use that content
          for educational and promotional purposes while you retain original ownership.
        </p>
      </>
    ),
  },
  {
    id: "prohibited-conduct",
    title: "Prohibited Conduct",
    content: (
      <>
        <p>
          To maintain a safe, productive, and respectful learning environment for all users, the
          following behaviors are strictly prohibited on TechSustainify:
        </p>
        <ul className="list">
          <li><span className="listDot"></span><span>Posting offensive, abusive, discriminatory, or hateful content in forums, comments, or community spaces.</span></li>
          <li><span className="listDot"></span><span>Academic dishonesty — sharing quiz answers, submitting others' work as your own, or manipulating completion records.</span></li>
          <li><span className="listDot"></span><span>Attempting to gain unauthorized access to other users' accounts, our databases, or administrative systems.</span></li>
          <li><span className="listDot"></span><span>Using automated bots, scrapers, or crawlers to extract platform content at scale.</span></li>
          <li><span className="listDot"></span><span>Spamming, phishing, or soliciting other users through our messaging or community features.</span></li>
          <li><span className="listDot"></span><span>Engaging in any activity that violates local, national, or international laws and regulations.</span></li>
        </ul>
        <p>
          Violation of these conduct standards may result in immediate account suspension,
          permanent ban, and, in cases involving illegal activity, reporting to the appropriate
          law enforcement authorities.
        </p>
      </>
    ),
  },
  {
    id: "limitation-liability",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          TechSustainify provides its platform and educational content on an <strong>"as is"</strong>
          and <strong>"as available"</strong> basis. We make no warranties, express or implied,
          regarding the accuracy, completeness, or fitness for a particular purpose of any content.
        </p>
        <p>
          To the maximum extent permitted by applicable law, TechSustainify shall not be liable
          for any indirect, incidental, special, consequential, or punitive damages — including
          loss of profits, data, goodwill, or employment opportunities — arising from your use of
          or inability to use our services, even if advised of the possibility of such damages.
        </p>
        <p>
          Our total cumulative liability for any claim related to these Terms shall not exceed
          the total fees you paid to TechSustainify in the <strong>12 months</strong> immediately
          preceding the event giving rise to the claim.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law & Disputes",
    content: (
      <>
        <p>
          These Terms are governed by the laws of <strong>India</strong>, specifically the
          jurisdiction of the courts located in <strong>Patna, Bihar</strong>. Any disputes
          arising from or relating to these Terms shall first be attempted to be resolved through
          good-faith negotiation between the parties.
        </p>
        <p>
          If negotiation fails, disputes shall be submitted to binding arbitration under the
          Arbitration and Conciliation Act, 1996. The language of arbitration shall be English.
          Both parties agree to keep arbitration proceedings confidential.
        </p>
      </>
    ),
  },
];

const toc = sections.map((s) => ({ id: s.id, title: s.title }));

const Terms = () => {
  return (
    <div className="page">

      {/* HERO */}
      <div className="hero">
        <div className="heroBadge">
          <span></span> Legal Document
        </div>
        <h1 className="heroTitle">
          Terms & <span>Conditions</span>
        </h1>
        <div className="heroMeta">
          <span>📜 Binding Agreement</span>
          <span className="heroDivider">|</span>
          <span>📅 Last Updated: January 1, 2025</span>
          <span className="heroDivider">|</span>
          <span>📖 ~10 min read</span>
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
            By using TechSustainify you agree to these Terms. Key points: enroll honestly,
            respect our intellectual property, maintain professional conduct in our community,
            and contact us at legal@techsustainify.com with any questions.
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
            <h3>Questions About Our Terms?</h3>
            <p>
              Our legal team is happy to clarify any clause in these Terms and Conditions.
              Reach out to us before taking any action you're unsure about.
            </p>
            <Link href="/contact" className="contactBtn">Contact Legal Team</Link>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Terms;
