import React, { useState, useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaGithub,
  FaCode,
  FaServer,
  FaWrench,
} from "react-icons/fa";
import { SiTailwindcss, SiSupabase, SiVite } from "react-icons/si";
import { PiPenNibFill } from "react-icons/pi";

// ── Skill data ───────────────────────────────────────────────────────────────
const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    level: 90,
    category: "Frontend",
    description: "Semantic markup & accessibility",
    iconColor: "#fb923c",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    level: 85,
    category: "Frontend",
    description: "Modern layouts & animations",
    iconColor: "#38bdf8",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    level: 88,
    category: "Frontend",
    description: "ES6+ & modern features",
    iconColor: "#fbbf24",
  },
  {
    name: "React",
    icon: <FaReact />,
    level: 92,
    category: "Frontend",
    description: "Hooks & component architecture",
    iconColor: "#2dd4bf",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    level: 95,
    category: "Frontend",
    description: "Utility-first CSS framework",
    iconColor: "#34d399",
  },
  {
    name: "Supabase",
    icon: <SiSupabase />,
    level: 80,
    category: "Backend",
    description: "Real-time database & auth",
    iconColor: "#34d399",
  },
  {
    name: "Figma",
    icon: <FaFigma />,
    level: 85,
    category: "Design",
    description: "UI/UX design & prototyping",
    iconColor: "#f472b6",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    level: 90,
    category: "Tools",
    description: "Version control & collaboration",
    iconColor: "#94a3b8",
  },
  {
    name: "Vite",
    icon: <SiVite />,
    level: 88,
    category: "Tools",
    description: "Fast build tool & dev server",
    iconColor: "#a78bfa",
  },
];

// Category meta
const categoryMeta = {
  Frontend: { label: "Frontend", accent: "#2dd4bf", icon: <FaCode /> },
  Backend: { label: "Backend", accent: "#34d399", icon: <FaServer /> },
  Design: { label: "Design", accent: "#f472b6", icon: <PiPenNibFill /> },
  Tools: { label: "Tools", accent: "#fbbf24", icon: <FaWrench /> },
};

// ── Animated progress bar ────────────────────────────────────────────────────
const ProgressBar = ({ level, accent, visible }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setWidth(level), 150);
      return () => clearTimeout(t);
    }
  }, [visible, level]);

  return (
    <div
      style={{
        position: "relative",
        height: 5,
        borderRadius: 99,
        background: "rgba(255,255,255,0.05)",
        overflow: "hidden",
        marginTop: 12,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: `${width}%`,
          borderRadius: 99,
          background: `linear-gradient(90deg, ${accent}99, ${accent})`,
          boxShadow: `0 0 10px ${accent}55`,
          transition: "width 1.1s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
    </div>
  );
};

// ── Skill card ───────────────────────────────────────────────────────────────
const SkillCard = ({ skill, accent, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 14,
        padding: "20px 22px",
        background: hovered
          ? "rgba(255,255,255,0.04)"
          : "rgba(255,255,255,0.025)",
        border: `1px solid ${hovered ? `${accent}44` : "rgba(255,255,255,0.06)"}`,
        boxShadow: hovered
          ? `0 12px 32px rgba(0,0,0,0.35), 0 0 0 1px ${accent}22`
          : "none",
        transform: visible
          ? hovered
            ? "translateY(-4px)"
            : "translateY(0)"
          : "translateY(20px)",
        opacity: visible ? 1 : 0,
        transition: `transform 0.5s ease ${index * 60}ms, opacity 0.5s ease ${index * 60}ms, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease`,
        cursor: "default",
      }}
    >
      {/* Icon + name row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 4,
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 11,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: `${skill.iconColor}15`,
            border: `1px solid ${skill.iconColor}30`,
            fontSize: 22,
            color: skill.iconColor,
            flexShrink: 0,
            transition: "transform 0.3s ease",
            transform: hovered ? "scale(1.08) rotate(-4deg)" : "scale(1)",
          }}
        >
          {skill.icon}
        </div>
        <div>
          <div
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: hovered ? "#f1f5f9" : "#cbd5e1",
              transition: "color 0.25s",
              letterSpacing: "-0.01em",
            }}
          >
            {skill.name}
          </div>
          <div style={{ fontSize: 12, color: "#475569", marginTop: 1 }}>
            {skill.description}
          </div>
        </div>
        {/* Level badge */}
        <div
          style={{
            marginLeft: "auto",
            fontSize: 12,
            fontWeight: 700,
            color: accent,
            background: `${accent}12`,
            border: `1px solid ${accent}30`,
            borderRadius: 6,
            padding: "2px 8px",
            letterSpacing: "0.02em",
            flexShrink: 0,
          }}
        >
          {skill.level}%
        </div>
      </div>

      {/* Animated progress */}
      <ProgressBar level={skill.level} accent={accent} visible={visible} />
    </div>
  );
};

// ── Main component ───────────────────────────────────────────────────────────
const Skills = () => {
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const categories = [...new Set(skills.map((s) => s.category))];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true);
      },
      { threshold: 0.2 },
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
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
        @keyframes skills-fade-up {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .skills-fade-up { animation: skills-fade-up 0.7s ease forwards; }
      `}</style>

      {/* Background ambient glows */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "20%",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(45,212,191,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 60,
          right: "10%",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(251,191,36,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* ── Header ── */}
        <div
          ref={headerRef}
          className={headerVisible ? "skills-fade-up" : ""}
          style={{
            opacity: headerVisible ? 1 : 0,
            textAlign: "center",
            marginBottom: 64,
          }}
        >
          {/* Section label */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 14px",
              borderRadius: 999,
              background: "rgba(45,212,191,0.07)",
              border: "1px solid rgba(45,212,191,0.18)",
              marginBottom: 18,
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
              Arsenal Teknologi
            </span>
          </div>

          <h2
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 900,
              color: "#f1f5f9",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Skills &{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #2dd4bf 0%, #34d399 50%, #fbbf24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Expertise
            </span>
          </h2>

          <p
            style={{
              margin: "0 auto",
              maxWidth: 480,
              fontSize: "0.97rem",
              color: "#475569",
              lineHeight: 1.75,
            }}
          >
            Teknologi yang saya kuasai untuk membangun produk digital modern
            yang cepat, indah, dan fungsional.
          </p>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              marginTop: 28,
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

        {/* ── Category blocks ── */}
        {categories.map((cat) => {
          const meta = categoryMeta[cat] || { accent: "#2dd4bf", icon: "●" };
          const catSkills = skills.filter((s) => s.category === cat);

          return (
            <div key={cat} style={{ marginBottom: 52 }}>
              {/* Category header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    fontSize: 16,
                    color: meta.accent,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {meta.icon}
                </span>
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: meta.accent,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                  }}
                >
                  {cat}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: 1,
                    background: `linear-gradient(90deg, ${meta.accent}40, transparent)`,
                  }}
                />
                <span
                  style={{
                    fontSize: 11,
                    color: "#334155",
                    fontWeight: 500,
                  }}
                >
                  {catSkills.length} skill{catSkills.length > 1 ? "s" : ""}
                </span>
              </div>

              {/* Cards grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: 14,
                }}
              >
                {catSkills.map((skill, i) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    accent={meta.accent}
                    index={i}
                  />
                ))}
              </div>
            </div>
          );
        })}

        {/* ── Summary footer ── */}
        <div
          style={{
            marginTop: 20,
            padding: "24px 28px",
            borderRadius: 14,
            background: "rgba(45,212,191,0.04)",
            border: "1px solid rgba(45,212,191,0.1)",
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{ fontSize: "0.85rem", color: "#475569", marginBottom: 4 }}
            >
              Total teknologi dikuasai
            </div>
            <div
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                color: "#2dd4bf",
                letterSpacing: "-0.03em",
              }}
            >
              {skills.length} Technologies
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {categories.map((cat) => {
              const meta = categoryMeta[cat] || { accent: "#2dd4bf" };
              const avg = Math.round(
                skills
                  .filter((s) => s.category === cat)
                  .reduce((a, s) => a + s.level, 0) /
                  skills.filter((s) => s.category === cat).length,
              );
              return (
                <div key={cat} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#334155",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: 2,
                    }}
                  >
                    {cat}
                  </div>
                  <div
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 800,
                      color: meta.accent,
                    }}
                  >
                    {avg}%
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
