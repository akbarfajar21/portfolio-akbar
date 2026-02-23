import React, { useState, useEffect, useRef } from "react";
import {
  FaTrain,
  FaChalkboardTeacher,
  FaUsers,
  FaArrowRight,
  FaCommentDots,
} from "react-icons/fa";

// ── Typewriter hook ───────────────────────────────────────────────────────────
function useTypewriter(words, speed = 85, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    const delay = deleting
      ? speed / 2
      : charIdx === current.length
        ? pause
        : speed;
    const t = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setText(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      } else if (!deleting && charIdx === current.length) {
        setDeleting(true);
      } else if (deleting && charIdx > 0) {
        setText(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      } else {
        setDeleting(false);
        setWordIdx((w) => (w + 1) % words.length);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return text;
}

// ── Particle canvas ───────────────────────────────────────────────────────────
function ParticleCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let raf;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.3,
      dx: (Math.random() - 0.5) * 0.22,
      dy: (Math.random() - 0.5) * 0.22,
      opacity: Math.random() * 0.4 + 0.08,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(45,212,191,${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}

// ── Main Hero ─────────────────────────────────────────────────────────────────
const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const roles = [
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "IT Educator",
    "React Specialist",
  ];
  const role = useTypewriter(roles);

  useEffect(() => {
    setTimeout(() => setMounted(true), 80);
  }, []);

  const stats = [
    { value: "3+", label: "Tahun Experience" },
    { value: "20+", label: "Project Selesai" },
    { value: "8+", label: "Sertifikat" },
  ];

  const techBadges = [
    {
      name: "React.js",
      color: "#2dd4bf",
      bg: "rgba(45,212,191,0.08)",
      border: "rgba(45,212,191,0.22)",
    },
    {
      name: "Supabase",
      color: "#34d399",
      bg: "rgba(52,211,153,0.08)",
      border: "rgba(52,211,153,0.22)",
    },
    {
      name: "Tailwind",
      color: "#fbbf24",
      bg: "rgba(251,191,36,0.08)",
      border: "rgba(251,191,36,0.22)",
    },
    {
      name: "JavaScript",
      color: "#a78bfa",
      bg: "rgba(167,139,250,0.08)",
      border: "rgba(167,139,250,0.22)",
    },
  ];

  // Floating badge data — icons instead of emoji
  const floatingBadges = [
    {
      icon: <FaTrain size={11} />,
      label: "IT PT KAI",
      color: "#fbbf24",
      bg: "rgba(251,191,36,0.1)",
      border: "rgba(251,191,36,0.28)",
      style: { top: -24, left: -52 },
      delay: "0s",
    },
    {
      icon: <FaChalkboardTeacher size={11} />,
      label: "IT Teacher",
      color: "#2dd4bf",
      bg: "rgba(45,212,191,0.1)",
      border: "rgba(45,212,191,0.28)",
      style: { top: "50%", right: -64 },
      delay: "0.5s",
    },
    {
      icon: <FaUsers size={11} />,
      label: "Ex-Ketua OSIS",
      color: "#34d399",
      bg: "rgba(52,211,153,0.1)",
      border: "rgba(52,211,153,0.28)",
      style: { bottom: -24, left: -24 },
      delay: "1s",
    },
  ];

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#0d0d0f",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .hex-frame {
          clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
        }

        @keyframes h-fade-up {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes h-fade-left {
          from { opacity:0; transform:translateX(28px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes cursor-blink {
          0%,100% { opacity:1; } 50% { opacity:0; }
        }
        @keyframes orbit-ring {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes orb1 {
          from { transform: rotate(0deg) translateX(148px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(148px) rotate(-360deg); }
        }
        @keyframes orb2 {
          from { transform: rotate(120deg) translateX(148px) rotate(-120deg); }
          to   { transform: rotate(480deg) translateX(148px) rotate(-480deg); }
        }
        @keyframes orb3 {
          from { transform: rotate(240deg) translateX(148px) rotate(-240deg); }
          to   { transform: rotate(600deg) translateX(148px) rotate(-600deg); }
        }
        @keyframes hex-pulse {
          0%,100% { box-shadow: none; filter: drop-shadow(0 0 18px rgba(45,212,191,0.3)); }
          50%      { filter: drop-shadow(0 0 32px rgba(45,212,191,0.55)); }
        }
        @keyframes badge-float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-5px); }
        }
        @keyframes scroll-hint {
          0%   { opacity:0; transform:translateY(-6px); }
          50%  { opacity:1; }
          100% { opacity:0; transform:translateY(6px); }
        }

        .h-fade-up   { animation: h-fade-up  0.8s ease forwards; }
        .h-fade-left { animation: h-fade-left 0.8s ease 0.2s forwards; opacity:0; }
        .cursor      { animation: cursor-blink 1s step-end infinite; }
        .hex-glow    { animation: hex-pulse 3s ease-in-out infinite; }
        .scroll-dot  { animation: scroll-hint 2s ease infinite; }

        .orb-ring { position:absolute; animation: orbit-ring 28s linear infinite; }
        .orb1 { position:absolute; animation: orb1 9s linear infinite; }
        .orb2 { position:absolute; animation: orb2 9s linear infinite; }
        .orb3 { position:absolute; animation: orb3 9s linear infinite; }

        .stat-card { transition: transform 0.28s ease, box-shadow 0.28s ease; cursor:default; }
        .stat-card:hover { transform: translateY(-4px); box-shadow: 0 10px 24px rgba(45,212,191,0.14); }

        .tech-pill { transition: transform 0.22s ease; }
        .tech-pill:hover { transform: translateY(-2px); }

        .cta-main { transition: all 0.28s ease; }
        .cta-main:hover { transform: translateY(-2px); box-shadow: 0 14px 36px rgba(45,212,191,0.32) !important; }

        .cta-ghost { transition: all 0.28s ease; }
        .cta-ghost:hover { transform: translateY(-2px); background: rgba(255,255,255,0.07) !important; }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-grid > div:first-child { order: 2; }
          .hero-grid > div:last-child  { order: 1; }
        }
      `}</style>

      {/* Particles */}
      <ParticleCanvas />

      {/* Ambient glows */}
      <div
        style={{
          position: "absolute",
          right: "8%",
          top: "50%",
          transform: "translateY(-50%)",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(45,212,191,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "-4%",
          bottom: "0%",
          width: 380,
          height: 380,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(251,191,36,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Content grid ── */}
      <div
        className="hero-grid"
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1180,
          width: "100%",
          margin: "0 auto",
          padding: "88px 24px 64px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 72,
          alignItems: "center",
        }}
      >
        {/* ════ LEFT ════ */}
        <div
          className={mounted ? "h-fade-up" : ""}
          style={{ opacity: mounted ? undefined : 0 }}
        >
          {/* Status chip */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 14px 5px 10px",
              borderRadius: 999,
              background: "rgba(52,211,153,0.07)",
              border: "1px solid rgba(52,211,153,0.2)",
              marginBottom: 26,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#34d399",
                boxShadow: "0 0 8px rgba(52,211,153,0.75)",
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: 13, color: "#34d399", fontWeight: 500 }}>
              Open to Opportunities
            </span>
          </div>

          {/* Name */}
          <h1
            style={{
              margin: "0 0 10px",
              fontSize: "clamp(2.2rem, 4.8vw, 3.3rem)",
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#f1f5f9",
            }}
          >
            Muhammad
            <span
              style={{
                display: "block",
                background:
                  "linear-gradient(135deg, #2dd4bf 0%, #34d399 50%, #fbbf24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Akbar Fajar
            </span>
          </h1>

          {/* Typewriter */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                width: 32,
                height: 2,
                background: "linear-gradient(90deg, #2dd4bf, transparent)",
                flexShrink: 0,
              }}
            />
            <p
              style={{
                margin: 0,
                fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
                fontWeight: 500,
                color: "#64748b",
                minWidth: 220,
              }}
            >
              <span style={{ color: "#e2e8f0" }}>{role}</span>
              <span
                className="cursor"
                style={{ color: "#2dd4bf", marginLeft: 1 }}
              >
                |
              </span>
            </p>
          </div>

          {/* Description */}
          <p
            style={{
              margin: "0 0 28px",
              fontSize: "0.93rem",
              lineHeight: 1.82,
              color: "#475569",
              maxWidth: 490,
            }}
          >
            Developer dari{" "}
            <span style={{ color: "#94a3b8", fontWeight: 500 }}>
              Tambun, Bekasi
            </span>{" "}
            dengan pengalaman sebagai{" "}
            <span style={{ color: "#2dd4bf", fontWeight: 600 }}>
              IT Support PT KAI
            </span>{" "}
            dan{" "}
            <span style={{ color: "#fbbf24", fontWeight: 600 }}>
              IT Teacher
            </span>{" "}
            — membangun solusi digital yang cepat, bersih, dan modern.
          </p>

          {/* Tech pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 36,
            }}
          >
            {techBadges.map((t, i) => (
              <span
                key={i}
                className="tech-pill"
                style={{
                  padding: "5px 13px",
                  borderRadius: 7,
                  fontSize: 13,
                  fontWeight: 600,
                  color: t.color,
                  background: t.bg,
                  border: `1px solid ${t.border}`,
                  letterSpacing: "0.01em",
                }}
              >
                {t.name}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 44,
            }}
          >
            <a
              href="#projects"
              className="cta-main"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "11px 26px",
                borderRadius: 10,
                background: "linear-gradient(135deg, #2dd4bf 0%, #059669 100%)",
                color: "#0d0d0f",
                fontWeight: 700,
                fontSize: "0.9rem",
                textDecoration: "none",
                letterSpacing: "0.02em",
                boxShadow: "0 6px 22px rgba(45,212,191,0.25)",
              }}
            >
              Lihat Proyek <FaArrowRight size={13} />
            </a>
            <a
              href="#contact"
              className="cta-ghost"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "11px 26px",
                borderRadius: 10,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#cbd5e1",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
              Hubungi Saya <FaCommentDots size={13} />
            </a>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: 14,
              paddingTop: 24,
              borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="stat-card"
                style={{
                  flex: 1,
                  padding: "12px 14px",
                  borderRadius: 10,
                  textAlign: "center",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div
                  style={{
                    fontSize: "1.45rem",
                    fontWeight: 800,
                    color: "#2dd4bf",
                    lineHeight: 1.1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "#334155",
                    fontWeight: 600,
                    marginTop: 4,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ════ RIGHT — Photo ════ */}
        <div
          className={mounted ? "h-fade-left" : ""}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Orbit ring container */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <div
              className="orb-ring"
              style={{
                width: 316,
                height: 316,
                borderRadius: "50%",
                border: "1px dashed rgba(45,212,191,0.1)",
                position: "absolute",
              }}
            />
            <div className="orb1" style={{ position: "absolute" }}>
              <div
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: "#2dd4bf",
                  boxShadow: "0 0 10px rgba(45,212,191,0.85)",
                }}
              />
            </div>
            <div className="orb2" style={{ position: "absolute" }}>
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#fbbf24",
                  boxShadow: "0 0 10px rgba(251,191,36,0.85)",
                }}
              />
            </div>
            <div className="orb3" style={{ position: "absolute" }}>
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#34d399",
                  boxShadow: "0 0 10px rgba(52,211,153,0.85)",
                }}
              />
            </div>
          </div>

          {/* Hexagon photo frame */}
          <div style={{ position: "relative", zIndex: 2 }}>
            <div
              className="hex-frame hex-glow"
              style={{
                width: 272,
                height: 272,
                background:
                  "linear-gradient(135deg, #2dd4bf, #34d399, #fbbf24)",
                padding: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                className="hex-frame"
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  background: "#111116",
                }}
              >
                <img
                  src="./foto-akbar.jpg"
                  alt="Muhammad Akbar"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.55s ease",
                    filter: "brightness(0.92)",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.07)")
                  }
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />
              </div>
            </div>

            {/* Floating badges — icons only, no emoji */}
            {floatingBadges.map((badge, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  ...badge.style,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 12px",
                  borderRadius: 9,
                  background: badge.bg,
                  border: `1px solid ${badge.border}`,
                  color: badge.color,
                  fontSize: 11,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  backdropFilter: "blur(12px)",
                  animation: `badge-float 3s ease-in-out ${badge.delay} infinite`,
                  zIndex: 10,
                }}
              >
                <span style={{ opacity: 0.85 }}>{badge.icon}</span>
                {badge.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
        }}
      >
        <span
          style={{
            fontSize: 9,
            letterSpacing: "0.2em",
            color: "#1e293b",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 22,
            height: 36,
            border: "1.5px solid rgba(255,255,255,0.08)",
            borderRadius: 11,
            display: "flex",
            justifyContent: "center",
            paddingTop: 7,
          }}
        >
          <div
            className="scroll-dot"
            style={{
              width: 3,
              height: 7,
              borderRadius: 2,
              background: "linear-gradient(to bottom, #2dd4bf, #34d399)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
