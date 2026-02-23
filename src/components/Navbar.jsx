import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Certificates", href: "#certificates", id: "certificates" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = navItems.map((i) => i.id);
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 110) {
          setActiveSection(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        /* ── Base nav ── */
        .nav-wrap {
          font-family: 'Inter', sans-serif;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 9000;
          transition: background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
          background: rgba(13, 13, 15, 0.6);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid transparent;
        }
        .nav-wrap.scrolled {
          background: rgba(13, 13, 15, 0.9);
          border-bottom: 1px solid rgba(45, 212, 191, 0.12);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        }

        /* Top accent bar */
        .nav-accent-bar {
          position: absolute;
          top: 0; left: 0;
          height: 2px;
          width: 100%;
          background: linear-gradient(90deg, #2dd4bf, #34d399, #fbbf24, transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .nav-wrap.scrolled .nav-accent-bar {
          opacity: 1;
        }

        /* ── Logo ── */
        .nav-logo-text {
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          background: linear-gradient(135deg, #2dd4bf 0%, #34d399 50%, #fbbf24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          cursor: pointer;
          transition: filter 0.3s;
        }
        .nav-logo-text:hover {
          filter: brightness(1.2) drop-shadow(0 0 10px rgba(45,212,191,0.5));
        }
        .logo-indicator {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 8px rgba(52, 211, 153, 0.9);
          animation: live-blink 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes live-blink {
          0%,100% { opacity:1; transform: scale(1); }
          50%      { opacity:0.5; transform: scale(0.7); }
        }

        /* ── Desktop links ── */
        .desktop-nav {
          display: none;
          align-items: center;
          gap: 2px;
        }
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }

        .nav-link {
          position: relative;
          padding: 6px 13px;
          font-size: 0.845rem;
          font-weight: 500;
          color: rgba(148, 163, 184, 0.85);
          border-radius: 8px;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: color 0.22s, background 0.22s;
        }
        .nav-link:hover {
          color: #e2e8f0;
          background: rgba(45, 212, 191, 0.07);
        }
        .nav-link.active {
          color: #2dd4bf;
          background: rgba(45, 212, 191, 0.1);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 3px; left: 50%;
          transform: translateX(-50%);
          width: 0; height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, #2dd4bf, #fbbf24);
          transition: width 0.28s ease;
        }
        .nav-link:hover::after,
        .nav-link.active::after { width: 55%; }

        /* ── CTA Hire Me ── */
        .nav-hire {
          margin-left: 10px;
          padding: 7px 18px;
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: 0.03em;
          color: #0d0d0f;
          background: linear-gradient(135deg, #2dd4bf 0%, #059669 100%);
          box-shadow: 0 4px 16px rgba(45,212,191,0.3);
          transition: all 0.3s ease;
        }
        .nav-hire:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(45,212,191,0.45);
          filter: brightness(1.08);
        }

        /* ── Hamburger ── */
        .mobile-toggle {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 38px; height: 38px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          background: rgba(45,212,191,0.05);
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .mobile-toggle:hover {
          background: rgba(45,212,191,0.12);
          border-color: rgba(45,212,191,0.3);
        }
        .hline {
          width: 20px; height: 2px;
          background: rgba(203,213,225,0.8);
          border-radius: 2px;
          transition: all 0.32s ease;
          transform-origin: center;
        }

        /* ── Mobile dropdown ── */
        .mobile-dropdown {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease;
          background: rgba(13,13,15,0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid rgba(45,212,191,0.1);
        }
        .mobile-dropdown.open  { max-height: 480px; opacity: 1; }
        .mobile-dropdown.closed { max-height: 0; opacity: 0; }

        .m-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          border-radius: 10px;
          font-size: 0.88rem;
          font-weight: 500;
          color: rgba(148,163,184,0.85);
          text-decoration: none;
          border: 1px solid transparent;
          transition: all 0.22s ease;
        }
        .m-link:hover {
          color: #e2e8f0;
          background: rgba(45,212,191,0.07);
          border-color: rgba(45,212,191,0.15);
          transform: translateX(4px);
        }
        .m-link.active {
          color: #2dd4bf;
          background: rgba(45,212,191,0.09);
          border-color: rgba(45,212,191,0.2);
        }
        .m-num {
          font-size: 11px;
          font-weight: 700;
          color: rgba(45,212,191,0.6);
          min-width: 20px;
          letter-spacing: 0.02em;
        }

        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #0d0d0f; }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #2dd4bf, #059669);
          border-radius: 4px;
        }
      `}</style>

      <nav className={`nav-wrap ${scrolled ? "scrolled" : ""}`}>
        {/* Top accent bar */}
        <div className="nav-accent-bar" />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: 60,
            }}
          >
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <a href="#home" style={{ textDecoration: "none" }}>
                <span className="nav-logo-text">akbar.dev</span>
              </a>
              <span className="logo-indicator" />
            </div>

            {/* Desktop nav */}
            <div className="desktop-nav">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="nav-hire">
                Hire Me ✦
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={toggleMenu}
              className="mobile-toggle"
              aria-label="Toggle menu"
            >
              <span
                className="hline"
                style={{
                  transform: isOpen
                    ? "rotate(45deg) translate(0, 7px)"
                    : "none",
                }}
              />
              <span
                className="hline"
                style={{
                  opacity: isOpen ? 0 : 1,
                  transform: isOpen ? "scaleX(0)" : "none",
                }}
              />
              <span
                className="hline"
                style={{
                  transform: isOpen
                    ? "rotate(-45deg) translate(0, -7px)"
                    : "none",
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div className={`mobile-dropdown ${isOpen ? "open" : "closed"}`}>
          <div
            style={{
              padding: "10px 20px 18px",
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={closeMenu}
                className={`m-link ${activeSection === item.id ? "active" : ""}`}
              >
                <span className="m-num">0{i + 1}</span>
                {item.label}
              </a>
            ))}
            <div
              style={{
                marginTop: 8,
                paddingTop: 12,
                borderTop: "1px solid rgba(45,212,191,0.1)",
              }}
            >
              <a
                href="#contact"
                onClick={closeMenu}
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "11px 0",
                  borderRadius: 10,
                  background:
                    "linear-gradient(135deg, #2dd4bf 0%, #059669 100%)",
                  color: "#0d0d0f",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  textDecoration: "none",
                  letterSpacing: "0.03em",
                }}
              >
                Hire Me ✦
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
