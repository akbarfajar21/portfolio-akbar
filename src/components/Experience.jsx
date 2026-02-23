import React, { useState, useEffect, useRef } from "react";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaTrain,
  FaFileAlt,
  FaTimes,
  FaCalendarAlt,
} from "react-icons/fa";

// ── Data ─────────────────────────────────────────────────────────────────────
const experiences = [
  {
    title: "Ketua OSIS UNISCO",
    organization: "UNISCO",
    date: "Jun 2024 – Mar 2025",
    type: "Organization",
    description:
      "Memimpin organisasi OSIS UNISCO, mengkoordinasi kegiatan siswa, menyelenggarakan event internal-eksternal, serta menjadi penghubung strategis antara pihak sekolah dan siswa.",
    logo: "/unisco.png",
    certificateUrl: "/sertifikat-unisco.png",
    accent: "#fbbf24",
    icon: <FaGraduationCap />,
  },
  {
    title: "Magang Guru IT",
    organization: "SMP Istiqlal Tambun",
    date: "Mar 2024",
    type: "Teaching",
    description:
      "Menjadi pengajar praktik untuk mata pelajaran Teknologi Informasi. Memberikan materi dasar-dasar komputer dan pengembangan web dengan pendekatan interaktif dan praktis.",
    logo: "/istiqlal.png",
    certificateUrl: "/sertifikat-istiqlal.png",
    accent: "#34d399",
    icon: <FaLaptopCode />,
  },
  {
    title: "Magang IT Support",
    organization: "PT KAI – Divisi LRT Jabodebek",
    date: "Jan 2024 – Feb 2024",
    type: "Internship",
    description:
      "Bertugas sebagai staf IT Support, membantu pengelolaan perangkat keras dan lunak, instalasi sistem, troubleshooting jaringan, serta dokumentasi IT di lingkungan operasional LRT Jabodebek.",
    logo: "/kai.jpg",
    certificateUrl: "/sertifikat-kai.png",
    accent: "#2dd4bf",
    icon: <FaTrain />,
  },
];

// ── Experience Card ───────────────────────────────────────────────────────────
const ExpCard = ({ exp, index, onViewCert }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        gap: 0,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${index * 120}ms, transform 0.6s ease ${index * 120}ms`,
      }}
    >
      {/* ── Timeline column ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 48,
          flexShrink: 0,
        }}
      >
        {/* Icon bubble */}
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: `${exp.accent}18`,
            border: `2px solid ${exp.accent}50`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            color: exp.accent,
            flexShrink: 0,
            boxShadow: `0 0 16px ${exp.accent}25`,
            marginTop: 4,
            transition: "box-shadow 0.3s ease",
            ...(hovered ? { boxShadow: `0 0 24px ${exp.accent}45` } : {}),
          }}
        >
          {exp.icon}
        </div>
        {/* Vertical line (not after last) */}
        {index < experiences.length - 1 && (
          <div
            style={{
              flex: 1,
              width: 2,
              marginTop: 8,
              background: `linear-gradient(to bottom, ${exp.accent}50, transparent)`,
              minHeight: 40,
            }}
          />
        )}
      </div>

      {/* ── Card ── */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          flex: 1,
          marginLeft: 20,
          marginBottom: index < experiences.length - 1 ? 28 : 0,
          borderRadius: 14,
          overflow: "hidden",
          background: hovered
            ? "rgba(255,255,255,0.04)"
            : "rgba(255,255,255,0.025)",
          border: `1px solid ${hovered ? `${exp.accent}40` : "rgba(255,255,255,0.07)"}`,
          boxShadow: hovered
            ? `0 12px 32px rgba(0,0,0,0.35), 0 0 0 1px ${exp.accent}18`
            : "none",
          transition: "all 0.3s ease",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            height: 2,
            background: `linear-gradient(90deg, ${exp.accent}, transparent)`,
            opacity: hovered ? 1 : 0.4,
            transition: "opacity 0.3s ease",
          }}
        />

        <div style={{ padding: "20px 22px" }}>
          {/* Header row */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 12,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* Org logo */}
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  overflow: "hidden",
                  border: `1px solid rgba(255,255,255,0.1)`,
                  background: "#fff",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={exp.logo}
                  alt={exp.organization}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              <div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: hovered ? "#f1f5f9" : "#cbd5e1",
                    transition: "color 0.25s",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.25,
                  }}
                >
                  {exp.title}
                </h3>
                <div
                  style={{
                    fontSize: 13,
                    color: exp.accent,
                    fontWeight: 500,
                    marginTop: 2,
                  }}
                >
                  {exp.organization}
                </div>
              </div>
            </div>

            {/* Date + type badges */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 6,
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#64748b",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "3px 10px",
                  borderRadius: 99,
                  whiteSpace: "nowrap",
                }}
              >
                <FaCalendarAlt size={9} style={{ color: "#475569" }} />
                {exp.date}
              </span>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: exp.accent,
                  background: `${exp.accent}12`,
                  border: `1px solid ${exp.accent}30`,
                  padding: "2px 8px",
                  borderRadius: 99,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {exp.type}
              </span>
            </div>
          </div>

          {/* Description */}
          <p
            style={{
              margin: "0 0 16px",
              fontSize: "0.85rem",
              color: "#475569",
              lineHeight: 1.75,
            }}
          >
            {exp.description}
          </p>

          {/* Certificate button */}
          {exp.certificateUrl && (
            <button
              onClick={() => onViewCert(exp.certificateUrl)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 14px",
                borderRadius: 8,
                fontSize: "0.78rem",
                fontWeight: 600,
                color: exp.accent,
                background: `${exp.accent}10`,
                border: `1px solid ${exp.accent}30`,
                cursor: "pointer",
                transition: "all 0.25s ease",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${exp.accent}20`;
                e.currentTarget.style.borderColor = `${exp.accent}55`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `${exp.accent}10`;
                e.currentTarget.style.borderColor = `${exp.accent}30`;
              }}
            >
              <FaFileAlt size={11} />
              Lihat Sertifikat
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
const Experience = () => {
  const [selectedImage, setSelectedImage] = useState(null);
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

  return (
    <section
      id="experience"
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
        @keyframes exp-fade-up {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .exp-fade-up { animation: exp-fade-up 0.7s ease forwards; }

        /* Modal backdrop */
        .cert-modal-backdrop {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex; align-items: center; justify-content: center;
          z-index: 9999; padding: 24px;
          animation: exp-fade-up 0.2s ease;
        }
        .cert-modal-box {
          background: #141418;
          border: 1px solid rgba(45,212,191,0.2);
          border-radius: 16px;
          overflow: hidden;
          max-width: 860px; width: 100%;
          max-height: 90vh;
          display: flex; flex-direction: column;
          box-shadow: 0 32px 80px rgba(0,0,0,0.6);
        }
      `}</style>

      {/* Ambient glows */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
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
          bottom: "5%",
          right: "10%",
          width: 260,
          height: 260,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(251,191,36,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px" }}>
        {/* ── Header ── */}
        <div
          ref={headerRef}
          className={headerVisible ? "exp-fade-up" : ""}
          style={{
            opacity: headerVisible ? 1 : 0,
            textAlign: "center",
            marginBottom: 56,
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
            <span
              style={{
                fontSize: 13,
                color: "#2dd4bf",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Perjalanan
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
            Pengalaman &{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #2dd4bf 0%, #34d399 50%, #fbbf24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Karir
            </span>
          </h2>

          <p
            style={{
              margin: "0 auto",
              maxWidth: 440,
              fontSize: "0.95rem",
              color: "#475569",
              lineHeight: 1.75,
            }}
          >
            Perjalanan profesional yang membentuk perspektif dan keahlian saya
            di dunia teknologi.
          </p>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              marginTop: 24,
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

        {/* ── Timeline ── */}
        <div>
          {experiences.map((exp, i) => (
            <ExpCard
              key={i}
              exp={exp}
              index={i}
              onViewCert={setSelectedImage}
            />
          ))}
        </div>
      </div>

      {/* ── Certificate Modal ── */}
      {selectedImage && (
        <div
          className="cert-modal-backdrop"
          onClick={() => setSelectedImage(null)}
        >
          <div className="cert-modal-box" onClick={(e) => e.stopPropagation()}>
            {/* Modal header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 20px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(45,212,191,0.05)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <FaFileAlt style={{ color: "#2dd4bf" }} size={14} />
                <span
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#cbd5e1",
                  }}
                >
                  Sertifikat
                </span>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  width: 30,
                  height: 30,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#94a3b8",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  fontSize: 14,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(239,68,68,0.15)";
                  e.currentTarget.style.color = "#f87171";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.color = "#94a3b8";
                }}
              >
                <FaTimes size={13} />
              </button>
            </div>

            {/* Image */}
            <div style={{ overflow: "auto", flex: 1 }}>
              <img
                src={selectedImage}
                alt="Sertifikat"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
