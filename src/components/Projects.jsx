import React, { useState, useRef, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

// ── Data ─────────────────────────────────────────────────────────────────────
const projects = [
  {
    title: "Website UKM Teater UI",
    description:
      "Website resmi UKM Teater Universitas Indonesia dengan informasi kegiatan, galeri, dan profil organisasi.",
    tech: ["React", "Tailwind", "Supabase"],
    image: "/TeaterUI.png",
    demo: "https://ukmteaterui.com/",
    code: null,
    category: "Organization",
    featured: true,
  },
  {
    title: "Organizo Task Manager",
    description:
      "Aplikasi manajemen tugas modern dengan fitur task tracking, prioritas, dan tampilan yang intuitif.",
    tech: ["React", "Tailwind", "Supabase"],
    image: "/Organizo.jpg",
    demo: "https://organizo-taskmanager.vercel.app/",
    code: "https://github.com/akbarfajar21/Organizo-TaskManager",
    category: "Productivity",
    featured: true,
  },
  {
    title: "CoffeeShopMe",
    description:
      "Toko kopi dengan fitur cart, checkout, dan realtime sync menggunakan Zustand & Supabase.",
    tech: ["React", "Tailwind", "Supabase", "Zustand"],
    image: "/coffeeshopme.png",
    demo: "https://coffeeshopme.com",
    code: "https://github.com/akbarfajar/coffeeshopme",
    category: "E-Commerce",
    featured: false,
  },
  {
    title: "Image Generator Web",
    description:
      "AI image generator berbasis prompt menggunakan React dan API image generation.",
    tech: ["React", "Tailwind"],
    image: "/generator-image-web.png",
    demo: "https://generator-image-web.vercel.app",
    code: null,
    category: "AI & ML",
    featured: false,
  },
  {
    title: "Toko Online",
    description:
      "Website toko online sederhana dengan katalog produk dan tampilan yang bersih.",
    tech: ["React", "Tailwind"],
    image: "/project-toko-online.png",
    demo: "https://project-toko-online.vercel.app",
    code: null,
    category: "E-Commerce",
    featured: false,
  },
  {
    title: "Website Hadist",
    description:
      "Pencarian dan tampilan Hadist menggunakan API hadist dengan UI simpel dan fokus.",
    tech: ["React", "Tailwind", "API"],
    image: "/project-hadist.png",
    demo: "https://project-hadist.vercel.app",
    code: null,
    category: "Education",
    featured: false,
  },
  {
    title: "WebsiteFoods",
    description:
      "Katalog makanan dengan animasi menarik dan tampilan responsif yang modern.",
    tech: ["React", "Tailwind"],
    image: "/websitefoods.png",
    demo: "https://websitefoods.vercel.app",
    code: null,
    category: "Food & Beverage",
    featured: false,
  },
  {
    title: "SMA IT Baitul 'Ilmi",
    description:
      "Website profil sekolah dengan hero, gallery, contact, dan navigasi dinamis.",
    tech: ["React", "Tailwind"],
    image: "/smaitbaitulilmi.png",
    demo: "https://smaitbaitulilmi.vercel.app",
    code: null,
    category: "Education",
    featured: false,
  },
];

// Category accent colors
const catColor = {
  Productivity: "#a78bfa",
  Organization: "#2dd4bf",
  "E-Commerce": "#34d399",
  "AI & ML": "#f472b6",
  Education: "#fbbf24",
  "Food & Beverage": "#fb923c",
};

// ── Project Card ─────────────────────────────────────────────────────────────
const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const accent = catColor[project.category] || "#2dd4bf";

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
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 14,
        overflow: "hidden",
        background: hovered
          ? "rgba(255,255,255,0.04)"
          : "rgba(255,255,255,0.025)",
        border: `1px solid ${hovered ? `${accent}40` : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered
          ? `0 16px 36px rgba(0,0,0,0.4), 0 0 0 1px ${accent}20`
          : "none",
        transform: visible
          ? hovered
            ? "translateY(-5px)"
            : "translateY(0)"
          : "translateY(22px)",
        opacity: visible ? 1 : 0,
        transition: `transform 0.55s ease ${index * 70}ms, opacity 0.55s ease ${index * 70}ms, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          height: 180,
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.6s ease",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            filter: hovered ? "brightness(0.85)" : "brightness(0.75)",
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(13,13,15,0.85) 0%, transparent 60%)",
          }}
        />

        {/* Top row: category badge + featured star */}
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            right: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: accent,
              background: `${accent}18`,
              border: `1px solid ${accent}35`,
              padding: "3px 9px",
              borderRadius: 99,
              backdropFilter: "blur(8px)",
              letterSpacing: "0.04em",
            }}
          >
            {project.category}
          </span>
          {project.featured && (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontSize: 11,
                fontWeight: 700,
                color: "#fbbf24",
                background: "rgba(251,191,36,0.12)",
                border: "1px solid rgba(251,191,36,0.3)",
                padding: "3px 9px",
                borderRadius: 99,
                backdropFilter: "blur(8px)",
              }}
            >
              <FaStar size={9} /> Featured
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "16px 18px 18px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <h3
          style={{
            margin: "0 0 6px",
            fontSize: "0.97rem",
            fontWeight: 700,
            color: hovered ? "#f1f5f9" : "#cbd5e1",
            transition: "color 0.25s",
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            margin: "0 0 12px",
            fontSize: "0.8rem",
            color: "#475569",
            lineHeight: 1.65,
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tech stack */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginBottom: 14,
          }}
        >
          {project.tech.map((t, i) => (
            <span
              key={i}
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#64748b",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "2px 8px",
                borderRadius: 5,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: 8 }}>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              padding: "8px 0",
              borderRadius: 8,
              background: `linear-gradient(135deg, ${accent}dd, ${accent}99)`,
              color: "#0d0d0f",
              fontSize: "0.78rem",
              fontWeight: 700,
              textDecoration: "none",
              transition: "filter 0.2s, transform 0.2s",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.filter = "brightness(1.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.filter = "brightness(1)")
            }
          >
            <FaExternalLinkAlt size={11} />
            Live Demo
          </a>

          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                padding: "8px 14px",
                borderRadius: 8,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#94a3b8",
                fontSize: "0.78rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${accent}55`;
                e.currentTarget.style.color = accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = "#94a3b8";
              }}
            >
              <FaGithub size={13} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
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

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
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
        @keyframes proj-fade-up {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .proj-fade-up { animation: proj-fade-up 0.7s ease forwards; }
        .filter-pill  { cursor: pointer; transition: all 0.25s ease; border: none; }
        .filter-pill:hover { transform: translateY(-1px); }
      `}</style>

      {/* Ambient glows */}
      <div
        style={{
          position: "absolute",
          top: "-5%",
          right: "15%",
          width: 340,
          height: 340,
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
          left: "5%",
          width: 260,
          height: 260,
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
          className={headerVisible ? "proj-fade-up" : ""}
          style={{
            opacity: headerVisible ? 1 : 0,
            textAlign: "center",
            marginBottom: 48,
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
              Portfolio
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
            Proyek &{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #2dd4bf 0%, #34d399 50%, #fbbf24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Karya
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
            Koleksi proyek yang saya bangun menggunakan teknologi modern.
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

        {/* ── Filter pills ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 8,
            marginBottom: 40,
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.6s ease 0.2s",
          }}
        >
          {categories.map((cat, i) => {
            const isActive = activeFilter === cat;
            const accent = catColor[cat] || "#2dd4bf";
            return (
              <button
                key={i}
                onClick={() => setActiveFilter(cat)}
                className="filter-pill"
                style={{
                  padding: "6px 16px",
                  borderRadius: 99,
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  color: isActive ? "#0d0d0f" : "#64748b",
                  background: isActive
                    ? `linear-gradient(135deg, ${accent}, ${accent}99)`
                    : "rgba(255,255,255,0.04)",
                  border: isActive
                    ? "none"
                    : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: isActive ? `0 4px 16px ${accent}40` : "none",
                }}
              >
                {cat}
                {cat !== "All" && (
                  <span
                    style={{
                      marginLeft: 6,
                      fontSize: 10,
                      fontWeight: 700,
                      color: isActive ? "rgba(13,13,15,0.7)" : "#334155",
                    }}
                  >
                    {projects.filter((p) => p.category === cat).length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ── Project grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 16,
          }}
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* ── Footer count ── */}
        <div
          style={{
            textAlign: "center",
            marginTop: 40,
            fontSize: "0.82rem",
            color: "#334155",
            fontWeight: 500,
          }}
        >
          Menampilkan{" "}
          <span style={{ color: "#2dd4bf", fontWeight: 700 }}>
            {filtered.length}
          </span>{" "}
          dari{" "}
          <span style={{ color: "#2dd4bf", fontWeight: 700 }}>
            {projects.length}
          </span>{" "}
          proyek
        </div>
      </div>
    </section>
  );
};

export default Projects;
