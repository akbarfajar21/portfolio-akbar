import React, { useState, useEffect, useRef } from "react";
import { FaExternalLinkAlt, FaAward, FaShieldAlt } from "react-icons/fa";

// ── Data ─────────────────────────────────────────────────────────────────────
const certificates = [
  {
    title: "Belajar Dasar Pemrograman Web",
    image: "/certificates/web-dasar.png",
    link: "https://www.dicoding.com/certificates/0LZ0QL2K3Z65",
    category: "Web Development",
    year: "2024",
    difficulty: "Foundation",
  },
  {
    title: "Belajar Membuat Front-End Web",
    image: "/certificates/Belajar-Frontend.png",
    link: "https://www.dicoding.com/certificates/1OP8WOJWVXQK",
    category: "Frontend",
    year: "2024",
    difficulty: "Intermediate",
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    image: "/certificates/Belajar-Pemrog-Js.png",
    link: "https://www.dicoding.com/certificates/6RPN1NGYRX2M",
    category: "Programming",
    year: "2024",
    difficulty: "Foundation",
  },
  {
    title: "Belajar Dasar AWS Google Cloud",
    image: "/certificates/Belajar-Aws-Cloud.png",
    link: "https://www.dicoding.com/certificates/JLX17QGGNX72",
    category: "Cloud Computing",
    year: "2024",
    difficulty: "Advanced",
  },
  {
    title: "Belajar Backend Untuk Pemula",
    image: "/certificates/Beckend-pemula.png",
    link: "https://www.dicoding.com/certificates/JMZV3WGG3PN9",
    category: "Backend",
    year: "2024",
    difficulty: "Foundation",
  },
  {
    title: "Belajar Dasar AI",
    image: "/certificates/Belajar-dasar-ai.png",
    link: "https://www.dicoding.com/certificates/GRX5OR0ORP0M",
    category: "Artificial Intelligence",
    year: "2024",
    difficulty: "Advanced",
  },
  {
    title: "Belajar Membuat Aplikasi Web dengan React",
    image: "/certificates/Belajar-Web-React.png",
    link: "https://www.dicoding.com/certificates/N9ZOMR0E8PG5",
    category: "React",
    year: "2024",
    difficulty: "Intermediate",
  },
  {
    title: "Belajar Dasar Google Cloud",
    image: "/certificates/Belajar-Google-Cloud.png",
    link: "https://www.dicoding.com/certificates/JMZV3WQ5QPN9",
    category: "Cloud Computing",
    year: "2024",
    difficulty: "Advanced",
  },
  {
    title: "Memulai Pemrograman dengan Python",
    image: "/certificates/Memulai-Pemrograman-dengan-Python.png",
    link: "https://www.dicoding.com/certificates/72ZDKGQQLPYW",
    category: "Programming",
    year: "2025",
    difficulty: "Foundation",
  },
  {
    title: "Introduction to Financial Literacy",
    image: "/certificates/Introduction-to-Financial-Literacy.png",
    link: "https://www.dicoding.com/certificates/1OP8JKG3VPQK",
    category: "Finance",
    year: "2025",
    difficulty: "Foundation",
  },
];

// Per-category accent color
const catAccent = {
  "Web Development": "#2dd4bf",
  Frontend: "#38bdf8",
  Programming: "#a78bfa",
  "Cloud Computing": "#fbbf24",
  Backend: "#94a3b8",
  "Artificial Intelligence": "#f472b6",
  React: "#34d399",
  Finance: "#4ade80",
};

// Difficulty config
const diffConfig = {
  Foundation: {
    color: "#34d399",
    bg: "rgba(52,211,153,0.1)",
    border: "rgba(52,211,153,0.25)",
  },
  Intermediate: {
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.1)",
    border: "rgba(251,191,36,0.25)",
  },
  Advanced: {
    color: "#f87171",
    bg: "rgba(248,113,113,0.1)",
    border: "rgba(248,113,113,0.25)",
  },
};

// ── Certificate Card ──────────────────────────────────────────────────────────
const CertCard = ({ cert, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const accent = catAccent[cert.category] || "#2dd4bf";
  const diff = diffConfig[cert.difficulty] || diffConfig.Foundation;

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 13,
        overflow: "hidden",
        background: hovered
          ? "rgba(255,255,255,0.045)"
          : "rgba(255,255,255,0.025)",
        border: `1px solid ${hovered ? `${accent}45` : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered
          ? `0 16px 36px rgba(0,0,0,0.4), 0 0 0 1px ${accent}20`
          : "none",
        transform: visible
          ? hovered
            ? "translateY(-5px)"
            : "translateY(0)"
          : "translateY(22px)",
        opacity: visible ? 1 : 0,
        transition: `transform 0.55s ease ${index * 55}ms, opacity 0.55s ease ${index * 55}ms, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease`,
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          height: 160,
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <img
          src={cert.image}
          alt={cert.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.55s ease",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            filter: "brightness(0.8)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(13,13,15,0.9) 0%, transparent 55%)",
          }}
        />

        {/* Top badges */}
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            right: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: diff.color,
              background: diff.bg,
              border: `1px solid ${diff.border}`,
              padding: "3px 9px",
              borderRadius: 99,
              backdropFilter: "blur(8px)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            {cert.difficulty}
          </span>
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: "#64748b",
              background: "rgba(0,0,0,0.5)",
              padding: "3px 8px",
              borderRadius: 99,
              backdropFilter: "blur(8px)",
            }}
          >
            {cert.year}
          </span>
        </div>

        {/* Hover - external icon */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              background: `${accent}25`,
              border: `1px solid ${accent}60`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(8px)",
              transform: hovered ? "scale(1)" : "scale(0.7)",
              transition: "transform 0.3s ease 0.05s",
            }}
          >
            <FaExternalLinkAlt size={13} style={{ color: accent }} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "14px 16px 16px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* Category tag */}
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: accent,
            textTransform: "uppercase",
            letterSpacing: "0.07em",
            marginBottom: 6,
          }}
        >
          {cert.category}
        </span>

        <h3
          style={{
            margin: "0 0 12px",
            fontSize: "0.87rem",
            fontWeight: 700,
            color: hovered ? "#f1f5f9" : "#94a3b8",
            transition: "color 0.25s",
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
            flex: 1,
          }}
        >
          {cert.title}
        </h3>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: 10,
            marginTop: "auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span
              style={{
                width: 16,
                height: 16,
                borderRadius: 4,
                background: "#f97316",
                color: "#fff",
                fontSize: 10,
                fontWeight: 900,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              D
            </span>
            <span style={{ fontSize: 11, color: "#475569", fontWeight: 500 }}>
              Dicoding
            </span>
          </div>
          <FaExternalLinkAlt
            size={10}
            style={{
              color: hovered ? accent : "#334155",
              transition: "color 0.25s",
            }}
          />
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        style={{
          height: 2,
          background: `linear-gradient(90deg, ${accent}, transparent)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </a>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setHeaderVisible(true);
      },
      { threshold: 0.2 },
    );
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  const categories = ["All", ...new Set(certificates.map((c) => c.category))];
  const filtered =
    selectedCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === selectedCategory);

  const stats = [
    { value: certificates.length, label: "Sertifikat", color: "#2dd4bf" },
    { value: categories.length - 1, label: "Domain", color: "#34d399" },
    { value: "100%", label: "Success Rate", color: "#fbbf24" },
    { value: "2025", label: "Terbaru", color: "#a78bfa" },
  ];

  return (
    <section
      id="certificates"
      style={{
        background: "#0d0d0f",
        padding: "100px 0 80px",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        @keyframes cert-fade-up {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .cert-fade-up { animation: cert-fade-up 0.7s ease forwards; }
        .cert-filter  { cursor: pointer; transition: all 0.25s ease; border: none; }
        .cert-filter:hover { transform: translateY(-1px); }
      `}</style>

      {/* Ambient glows */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          right: "10%",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(45,212,191,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: 260,
          height: 260,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(167,139,250,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* ── Header ── */}
        <div
          ref={headerRef}
          className={headerVisible ? "cert-fade-up" : ""}
          style={{
            opacity: headerVisible ? 1 : 0,
            textAlign: "center",
            marginBottom: 44,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 14px",
              borderRadius: 999,
              marginBottom: 18,
              background: "rgba(45,212,191,0.07)",
              border: "1px solid rgba(45,212,191,0.18)",
            }}
          >
            <FaAward size={12} style={{ color: "#2dd4bf" }} />
            <span
              style={{
                fontSize: 13,
                color: "#2dd4bf",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Sertifikasi
            </span>
          </div>

          <h2
            style={{
              margin: "0 0 14px",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 900,
              color: "#f1f5f9",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Sertifikat &{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #2dd4bf 0%, #34d399 50%, #fbbf24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Pencapaian
            </span>
          </h2>

          <p
            style={{
              margin: "0 auto",
              maxWidth: 420,
              fontSize: "0.95rem",
              color: "#475569",
              lineHeight: 1.75,
            }}
          >
            Koleksi sertifikat dari platform Dicoding yang membuktikan keahlian
            di berbagai domain teknologi.
          </p>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              marginTop: 22,
            }}
          >
            <div
              style={{
                height: 1,
                width: 60,
                background:
                  "linear-gradient(90deg, transparent, rgba(45,212,191,0.3))",
              }}
            />
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#2dd4bf",
                boxShadow: "0 0 8px rgba(45,212,191,0.7)",
              }}
            />
            <div
              style={{
                height: 1,
                width: 60,
                background:
                  "linear-gradient(90deg, rgba(45,212,191,0.3), transparent)",
              }}
            />
          </div>
        </div>

        {/* ── Filter pills ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 8,
            marginBottom: 36,
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.6s ease 0.2s",
          }}
        >
          {categories.map((cat, i) => {
            const isActive = selectedCategory === cat;
            const accent = catAccent[cat] || "#2dd4bf";
            return (
              <button
                key={i}
                onClick={() => setSelectedCategory(cat)}
                className="cert-filter"
                style={{
                  padding: "5px 14px",
                  borderRadius: 99,
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: isActive ? "#0d0d0f" : "#64748b",
                  background: isActive
                    ? `linear-gradient(135deg, ${accent}, ${accent}bb)`
                    : "rgba(255,255,255,0.04)",
                  border: isActive
                    ? "none"
                    : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: isActive ? `0 4px 14px ${accent}40` : "none",
                  letterSpacing: "0.02em",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ── Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 14,
            marginBottom: 48,
          }}
        >
          {filtered.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>

        {/* ── Stats row ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: 12,
            padding: "24px 28px",
            borderRadius: 14,
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(45,212,191,0.1)",
          }}
        >
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: "center", padding: "8px 0" }}>
              <div
                style={{
                  fontSize: "1.7rem",
                  fontWeight: 800,
                  color: s.color,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "#334155",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: 600,
                  marginTop: 5,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
