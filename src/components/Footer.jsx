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
        background: "#0d0d0f",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        .footer-nav-link { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .footer-nav-link:hover { color: #2dd4bf !important; transform: translateX(4px); }
        .footer-social-btn { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .footer-social-btn:hover { transform: translateY(-3px); background: rgba(255,255,255,0.06) !important; border-color: rgba(255,255,255,0.15) !important; }
        .scroll-top-btn { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .scroll-top-btn:hover { background: rgba(45,212,191,0.15) !important; border-color: rgba(45,212,191,0.4) !important; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(45,212,191,0.1); }
      `}</style>

      {/* Top accent bar */}
      <div
        style={{
          height: 2,
          background: "linear-gradient(90deg, #2dd4bf, #34d399, #fbbf24, transparent)",
          opacity: 0.15,
        }}
      />

      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 150,
          background: "radial-gradient(ellipse at top, rgba(45,212,191,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "64px 24px 40px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Main row ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1.2fr",
            alignItems: "start",
            gap: 60,
            marginBottom: 64,
          }}
          className="footer-main"
        >
          {/* Left — Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span
                style={{
                  fontSize: "1.45rem",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  background: "linear-gradient(135deg, #2dd4bf 0%, #34d399 50%, #fbbf24 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                akbar.dev
              </span>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#34d399",
                  boxShadow: "0 0 12px rgba(52,211,153,0.8)",
                  animation: "pulse-ft 2.5s ease-in-out infinite",
                }}
              />
              <style>{`@keyframes pulse-ft { 0%,100%{opacity:1; transform:scale(1);} 50%{opacity:0.4; transform:scale(0.8);} }`}</style>
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#475569",
                lineHeight: 1.8,
                maxWidth: 320,
                margin: 0,
              }}
            >
              Junior Full Stack Developer yang berdedikasi untuk menciptakan pengalaman digital yang intuitif dan berdampak sosial tinggi.
            </p>
          </div>

          {/* Center — Nav links */}
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: 11,
                color: "#1e293b",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                fontWeight: 800,
                marginBottom: 20,
              }}
            >
              Navigasi
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px 24px",
                maxWidth: 240,
                margin: "0 auto",
              }}
            >
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="footer-nav-link"
                  style={{
                    fontSize: "0.85rem",
                    color: "#64748b",
                    textDecoration: "none",
                    fontWeight: 500,
                    textAlign: "left",
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
              gap: 24,
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 11,
                  color: "#1e293b",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  fontWeight: 800,
                  marginBottom: 16,
                  textAlign: "right",
                }}
              >
                Media Sosial
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="footer-social-btn"
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 11,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: s.accent,
                      textDecoration: "none",
                      backdropFilter: "blur(8px)",
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
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
                borderRadius: 10,
                background: "rgba(45,212,191,0.08)",
                border: "1px solid rgba(45,212,191,0.2)",
                color: "#2dd4bf",
                fontSize: "0.8rem",
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "0.03em",
                fontFamily: "'Inter', sans-serif",
                backdropFilter: "blur(8px)",
              }}
            >
              <FaArrowUp size={12} />
              Scroll ke Atas
            </button>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            paddingTop: 32,
            borderTop: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <p style={{ margin: 0, fontSize: 13, color: "#334155", fontWeight: 500 }}>
            © {new Date().getFullYear()} <span style={{ color: "#475569" }}>Muhammad Akbar Fajar</span>. Semua hak dilindungi.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 99,
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.04)",
            }}
          >
            <span style={{ fontSize: 12, color: "#334155", fontWeight: 500 }}>
              Dibuat dengan
            </span>
            <FaHeart
              size={12}
              style={{
                color: "#f87171",
                animation: "heartBeat 1.5s ease-in-out infinite",
              }}
            />
            <span style={{ fontSize: 12, color: "#334155", fontWeight: 500 }}>
              di Bekasi, Indonesia
            </span>
            <style>{`
              @keyframes heartBeat {
                0%, 100% { transform: scale(1); }
                10%, 30% { transform: scale(1.2); }
                20% { transform: scale(1.1); }
              }
            `}</style>
          </div>
        </div>
      </div>

      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 900px) {
          .footer-main {
            grid-template-columns: 1fr 1fr !important;
            gap: 48px;
          }
          .footer-main > div:first-child {
            grid-column: span 2;
            text-align: center;
            align-items: center;
          }
        }
        @media (max-width: 600px) {
          .footer-main {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .footer-main > div:first-child {
            grid-column: span 1;
          }
          .footer-main > div:last-child {
            align-items: center !important;
          }
          .footer-main .footer-nav-link {
            text-align: center;
          }
          .footer-main > div:nth-child(2) > div {
            grid-template-columns: 1fr !important;
          }
          .footer-main > div:last-child > div {
            text-align: center !important;
          }
          .footer-main > div:last-child > div > div {
             justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
