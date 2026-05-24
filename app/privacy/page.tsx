import React from "react";
import Link from "next/link";
import "../styles/Aaa.css";

const sections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: (
      <>
        <p>
          At <strong>TechSustainify</strong>, we are committed to protecting your personal information
          while delivering the best coding education experience. We collect information in two primary
          ways: information you provide directly and information collected automatically when you use
          our platform.
        </p>
        <p>
          <strong>Personal Information:</strong> When you register an account, enroll in a course, or
          contact our support team, we collect your full name, email address, phone number (optional),
          country of residence, and billing information for paid services.
        </p>
        <p>
          <strong>Usage Data:</strong> We automatically collect data about how you interact with our
          platform. This includes your IP address, browser type, device identifiers, pages visited,
          time spent on lessons, quiz scores, assignment submissions, and course completion status.
          This data helps us improve our curriculum and personalize your learning journey.
        </p>
        <p>
          <strong>Cookies and Tracking:</strong> We use cookies, web beacons, and similar technologies
          to maintain your session, remember preferences, and analyze platform performance. You may
          control cookie settings through your browser, though some features may not function optimally
          without them.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: (
      <>
        <p>
          The information we collect is used exclusively to operate, improve, and secure our educational
          platform. We never sell your personal data to third parties for commercial advertising purposes.
        </p>
        <div className="cardGrid">
          <div className="infoCard">
            <h5>🎓 Education Delivery</h5>
            <p>Personalize course recommendations, track progress, issue certificates, and provide tailored feedback on your coding assignments.</p>
          </div>
          <div className="infoCard">
            <h5>📧 Communication</h5>
            <p>Send course updates, newsletters, important account notifications, and respond to your support queries in a timely manner.</p>
          </div>
          <div className="infoCard">
            <h5>🔒 Security</h5>
            <p>Detect and prevent fraudulent activity, unauthorized access, abuse of our systems, and protect the integrity of our community.</p>
          </div>
          <div className="infoCard">
            <h5>📊 Analytics</h5>
            <p>Analyze usage patterns to improve course quality, platform performance, UX design, and identify popular or underperforming content.</p>
          </div>
        </div>
        <p>
          We may also use aggregated, anonymized data for academic research, industry reports, and
          internal business planning. Such data cannot be used to identify you personally.
        </p>
      </>
    ),
  },
  {
    id: "data-sharing",
    title: "Data Sharing & Third Parties",
    content: (
      <>
        <p>
          We share your data only with trusted partners who assist in delivering our services. All
          third-party partners are contractually obligated to handle your data according to strict
          confidentiality and security standards.
        </p>
        <ul className="list">
          <li><span className="listDot"></span><span><strong>Payment Processors:</strong> Razorpay, Stripe, and PayPal process billing data. We do not store full card numbers on our servers.</span></li>
          <li><span className="listDot"></span><span><strong>Cloud Hosting:</strong> Amazon Web Services (AWS) and Google Cloud Platform host our platform infrastructure in secure, certified data centers.</span></li>
          <li><span className="listDot"></span><span><strong>Email Services:</strong> SendGrid handles transactional and marketing emails on our behalf under strict data processing agreements.</span></li>
          <li><span className="listDot"></span><span><strong>Analytics Tools:</strong> Google Analytics (anonymized) helps us understand platform usage trends without identifying individual users.</span></li>
          <li><span className="listDot"></span><span><strong>Legal Compliance:</strong> We may disclose your information if required by law, court order, or to protect the rights and safety of our users and staff.</span></li>
        </ul>
      </>
    ),
  },
  {
    id: "data-security",
    title: "Data Security",
    content: (
      <>
        <p>
          We take data security seriously and implement industry-standard measures to protect your
          personal information from unauthorized access, alteration, disclosure, or destruction.
        </p>
        <p>
          All data transmitted between your browser and our servers is encrypted using
          <strong> TLS 1.3 (HTTPS)</strong>. Stored passwords are hashed using <strong>bcrypt</strong>
          with salt rounds. Our servers undergo regular security audits, vulnerability assessments, and
          penetration testing by certified cybersecurity professionals.
        </p>
        <div className="highlightBox">
          <strong>⚠️ Important Notice</strong>
          While we apply industry-best security practices, no method of electronic storage or internet
          transmission is 100% secure. We encourage you to use a strong, unique password and enable
          two-factor authentication (2FA) on your account for maximum protection.
        </div>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights & Choices",
    content: (
      <>
        <p>
          You have meaningful control over your personal data. Depending on your jurisdiction, you may
          have the following rights under laws such as GDPR (EU), CCPA (California), and India's
          Digital Personal Data Protection Act 2023.
        </p>
        <ul className="list">
          <li><span className="listDot"></span><span><strong>Right to Access:</strong> Request a copy of all personal data we hold about you.</span></li>
          <li><span className="listDot"></span><span><strong>Right to Rectification:</strong> Correct inaccurate or incomplete personal information at any time.</span></li>
          <li><span className="listDot"></span><span><strong>Right to Erasure:</strong> Request deletion of your account and associated personal data, subject to legal obligations.</span></li>
          <li><span className="listDot"></span><span><strong>Right to Portability:</strong> Receive your data in a machine-readable format to transfer to another service.</span></li>
          <li><span className="listDot"></span><span><strong>Right to Opt-Out:</strong> Unsubscribe from marketing emails at any time via the link in any email we send.</span></li>
        </ul>
        <p>
          To exercise any of these rights, contact our Data Protection Officer at
          <strong> privacy@techsustainify.com</strong>. We will respond within 30 days of your request.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    content: (
      <>
        <p>
          TechSustainify is designed for learners aged <strong>13 and above</strong>. We do not
          knowingly collect personal information from children under 13 without verifiable parental
          consent. If you believe a child under 13 has registered on our platform without appropriate
          consent, please contact us immediately and we will promptly delete the account and associated data.
        </p>
        <p>
          For learners between 13–18 years of age, we recommend parental guidance when enrolling in
          paid courses. Parents or guardians may contact us to review or delete their child's data
          at any time.
        </p>
      </>
    ),
  },
  {
    id: "policy-updates",
    title: "Changes to This Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy periodically to reflect changes in our practices, technology,
          legal requirements, or business operations. When we make material changes, we will notify you
          via email or a prominent notice on our platform at least <strong>14 days</strong> before the
          changes take effect.
        </p>
        <p>
          Continued use of TechSustainify after the effective date of a revised policy constitutes your
          acceptance of the updated terms. We encourage you to review this page regularly. The "Last
          Updated" date at the top of this policy reflects the most recent revision.
        </p>
      </>
    ),
  },
];

const toc = sections.map((s) => ({ id: s.id, title: s.title }));

const Privacy = () => {
  return (
    <div className="page">

      {/* HERO */}
      <div className="hero">
        <div className="heroBadge">
          <span></span> Legal Document
        </div>
        <h1 className="heroTitle">
          Privacy <span>Policy</span>
        </h1>
        <div className="heroMeta">
          <span>🛡️ Your data, protected</span>
          <span className="heroDivider">|</span>
          <span>📅 Last Updated: January 1, 2025</span>
          <span className="heroDivider">|</span>
          <span>📖 ~8 min read</span>
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
            TechSustainify collects only the data necessary to deliver quality coding education.
            We never sell your data. You retain full control over your information and can
            request deletion at any time by contacting privacy@techsustainify.com.
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
            <h3>Have Privacy Concerns?</h3>
            <p>
              Our Data Protection Officer is available to help you with any questions regarding
              your personal data, rights, or how we process your information.
            </p>
            <Link href="/contact" className="contactBtn">Contact Our DPO</Link>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Privacy;
