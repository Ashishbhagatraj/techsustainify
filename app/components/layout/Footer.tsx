// components/Footer.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";


function footer() {
  const [email, setEmail] = useState("");

  const quickLinks = [
    { icon: "🏠", label: "Home",       path: "/" },
    { icon: "📚", label: "Courses",    path: "/courses" },
    { icon: "</>", label: "Tutorials", path: "/tutorials" },
    { icon: "💼", label: "Projects",   path: "/projects" },
    { icon: "📝", label: "Blog",       path: "/blog" },
    { icon: "✉️", label: "Contact Us", path: "/contact" },
  ];

  const courses = [
    { icon: "🌐", label: "Web Development", path: "/web-development" },
    { icon: "🐍", label: "Python",          path: "/python" },
    { icon: "JS", label: "JavaScript",      path: "/javascript" },
    { icon: "📊", label: "Data Science",    path: "/data-science" },
    { icon: "⚛️", label: "React & Node.js", path: "/react-nodejs" },
    { icon: "🤖", label: "Machine Learning",path: "/machine-learning" },
  ];

  const resources = [
    { icon: "📖", label: "Free Ebooks",        path: "/ebooks" },
    { icon: "🎯", label: "Interview Questions", path: "/interview" },
    { icon: "</>", label: "Coding Practice",   path: "/practice" },
    { icon: "🏆", label: "Certificates",       path: "/certificates" },
    { icon: "📰", label: "Blogs",              path: "/blogs" },
    { icon: "👥", label: "Community",          path: "/community" },
  ];

  return (
    <footer className="footer">

      {/* TOP SECTION */}
      <div className="top">

        <div className="brand">

          <Link href="/" className="logo">
            <div className="logoIcon">&lt;/&gt;</div>
            <span className="logoText">
              Tech<span>Sustainify</span>
            </span>
          </Link>

          <span className="tagline">Learn Code. Build Future.</span>

          <p className="desc">
            Empowering learners with real-world coding skills.
            Tutorials, Projects and Career Guidance.
          </p>

        </div>

        {/* Newsletter */}
        <div className="newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Get coding tutorials and updates weekly</p>
          <div className="subscribe">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      {/* BOTTOM GRID */}
      <div className="bottom">

        {/* Quick Links */}
        <div className="column">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((item, i) => (
              <li key={i}>
                <Link href={item.path}>
                  <span>{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div className="column">
          <h4>Courses</h4>
          <ul>
            {courses.map((item, i) => (
              <li key={i}>
                <Link href={item.path}>
                  <span>{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="column">
          <h4>Resources</h4>
          <ul>
            {resources.map((item, i) => (
              <li key={i}>
                <Link href={item.path}>
                  <span>{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="column">
          <h4>Contact</h4>
          <p>Have questions or feedback? Contact us below or reach us via email.</p>
          <p>Email:- ab035780@gmail.com</p>
          <p>www.TechSustainify.com</p>
          <p>India • USA • UK</p>
          <p>+91-9162696783</p>

          <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>

            {/* Facebook */}
            <a href="https://www.facebook.com/ashish.bhagat.397" target="_blank" rel="noreferrer"
              className="social" style={{ color: "#1877F2" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/bhagatashish19/" target="_blank" rel="noreferrer"
              className="social" style={{ color: "#E1306C" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.226 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038C23.986 15.668 24 15.259 24 12s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>

            {/* Telegram */}
            <a href="https://web.telegram.org/k/#-3764075516" target="_blank" rel="noreferrer"
              className="social" style={{ color: "#29A8E2" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>

            {/* Twitter / X */}
            <a href="https://web.telegram.org/a/#1736792149" target="_blank" rel="noreferrer"
              className="social" style={{ color: "#ffffff" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="bar">
        <span>© 2024 CodeMastery. All rights reserved.</span>
        <div className="links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms-conditions">Terms</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
      </div>

    </footer>
  );
}

export default footer;