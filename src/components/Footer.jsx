import React from "react";
import {
  FaHeart,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: <FaGithub size={16} />,
    href: "https://github.com/akbarfajar21",
    accent: "#94a3b8",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={16} />,
    href: "https://www.linkedin.com/in/akbar-fajar-3a9220350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    accent: "#38bdf8",
    label: "LinkedIn",
  },
  {
    icon: <FaInstagram size={16} />,
    href: "https://www.instagram.com/akbarfajarrr.rr?igsh=bXhkcnI4c3Z1aTY0&utm_source=qr",
    accent: "#f472b6",
    label: "Instagram",
  },
  {
    icon: <FaEnvelope size={16} />,
    href: "mailto:akbarfajar2112@gmail.com",
    accent: "#2dd4bf",
    label: "Email",
  },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      style={{
        background: "#0a0a0e",
        borderTop: "1px solid rgba(45,212,191,0.1)",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        .footer-nav-link { transition: color 0.22s ease; }
        .footer-nav-link:hover { color: #2dd4bf !important; }
        .footer-social-btn { transition: all 0.25s ease; }
        .footer-social-btn:hover { transform: translateY(-2px); }
        .scroll-top-btn { transition: all 0.3s ease; }
        .scroll-top-btn:hover { background: rgba(45,212,191,0.2) !important; border-color: rgba(45,212,191,0.5) !important; transform: translateY(-2px); }
      `}</style>

      {/* Top gradient line */}
      <div
        style={{
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(45,212,191,0.3), rgba(251,191,36,0.2), transparent)",
        }}
      />

      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 500,
          height: 120,
          background:
            "radial-gradient(ellipse, rgba(45,212,191,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "48px 24px 32px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Main row ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "start",
            gap: 40,
            marginBottom: 36,
          }}
          className="footer-main"
        >
          {/* Left — Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 10,
              }}
            >
              <span
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  background:
                    "linear-gradient(135deg, #2dd4bf 0%, #34d399 50%, #fbbf24 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                akbar.dev
              </span>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#34d399",
                  boxShadow: "0 0 8px rgba(52,211,153,0.8)",
                  animation: "pulse-ft 2s ease infinite",
                  flexShrink: 0,
                }}
              />
              <style>{`@keyframes pulse-ft { 0%,100%{opacity:1}50%{opacity:0.4} }`}</style>
            </div>
            <p
              style={{
                fontSize: "0.82rem",
                color: "#334155",
                lineHeight: 1.7,
                maxWidth: 220,
                margin: 0,
              }}
            >
              Full Stack Developer dari Tambun, Bekasi. Membangun produk digital
              modern yang indah dan fungsional.
            </p>
          </div>

          {/* Center — Nav links */}
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: 10,
                color: "#1e293b",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 700,
                marginBottom: 14,
              }}
            >
              Navigasi
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="footer-nav-link"
                  style={{
                    fontSize: "0.82rem",
                    color: "#334155",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Social + scroll to top */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 16,
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 10,
                  color: "#1e293b",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 700,
                  marginBottom: 12,
                  textAlign: "right",
                }}
              >
                Sosial
              </p>
              <div style={{ display: "flex", gap: 8 }}>
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="footer-social-btn"
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 9,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      color: s.accent,
                      textDecoration: "none",
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="scroll-top-btn"
              title="Kembali ke atas"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "7px 13px",
                borderRadius: 9,
                background: "rgba(45,212,191,0.06)",
                border: "1px solid rgba(45,212,191,0.2)",
                color: "#2dd4bf",
                fontSize: "0.75rem",
                fontWeight: 600,
                cursor: "pointer",
                letterSpacing: "0.03em",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <FaArrowUp size={11} />
              Ke Atas
            </button>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            paddingTop: 20,
            borderTop: "1px solid rgba(255,255,255,0.04)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          <p style={{ margin: 0, fontSize: 12, color: "#1e293b" }}>
            © {new Date().getFullYear()} Muhammad Akbar Fajar. All rights
            reserved.
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 12,
              color: "#1e293b",
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            Crafted with Fajar
            <FaHeart
              size={11}
              style={{
                color: "#f87171",
                animation: "pulse-ft 1.5s ease infinite",
              }}
            />
            in Indonesia
          </p>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .footer-main {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .footer-main > div:last-child {
            align-items: center !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
