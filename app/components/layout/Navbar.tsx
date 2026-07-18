// components/Navbar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const navItems = [
  { label: "Home",        path: "/" },
  { label: "C",           path: "/c/c-home" },
  { label: "C++",         path: "/cpp/cpp-home" },
  { label: "JAVA",        path: "/java/java-home" },
  { label: "PYTHON",      path: "/python/python-home" },
  { label: "SQL",         path: "/sql/sql-home" },
  { label: "HTML",        path: "/html/html-home" },
  { label: "CSS",         path: "/css/css-home" },
  { label: "JAVA-SCRIPT", path: "/javascript/javascript-home" },
  { label: "REACT-JS",    path: "/react/react-home" },
  { label: "NODE-JS",     path: "/node/node-home" },
  { label: "J2EE",        path: "/j2ee/j2ee-home" },
  { label: "DJANGO",      path: "/django/django-home" },
  { label: "KOTLIN",      path: "/kotline/kotlin-home" },
  { label: "SWIFT",       path: "/swift/swift-home" },
  { label: "RUST",        path: "/rust/rust-home" },
  { label: "GO",          path: "/go/go-home" },
  { label: "RUBY",        path: "/ruby/ruby-home" },
  { label: "MongoDB",     path: "/mongodb/mongodb-home" },
];

const handleAuthClick = () => {
  alert("🚀 Login feature is coming soon. Stay tuned!");
};

interface NavProps {
  onSidebarToggle: () => void;
  sidebarOpen: boolean;
}

const Navbar = ({ onSidebarToggle, sidebarOpen }: NavProps) => {
  const pathname = usePathname();

  return (
    <nav className="navbar">

      {/* TOP BAR */}
      <div className="topbar">

        <button
          className="hamburger"
          onClick={onSidebarToggle}
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          aria-expanded={sidebarOpen}
        >
          <span
            className="hLine"
            style={sidebarOpen ? { transform: "rotate(45deg) translate(5px, 5px)" } : {}}
          />
          <span
            className="hLine"
            style={sidebarOpen ? { opacity: 0 } : {}}
          />
          <span
            className="hLine"
            style={sidebarOpen ? { transform: "rotate(-45deg) translate(5px, -5px)" } : {}}
          />
        </button>

        <Link href="/" className="brand">Tech Sustainify</Link>

        <div className="topbarRight">
          {/* ✅ Sahi syntax — plain string concatenation */}
          <button onClick={handleAuthClick} className="btn btnSolid">Sign In</button>
          <button onClick={handleAuthClick} className="btn btnSolid">Sign Up</button>
        </div>

      </div>

      {/* NAV LINKS BAR */}
      <div className="navlinks">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.path}
          
            className={`link ${pathname === item.path ? "active" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </div>

    </nav>
  );
};

export default Navbar;