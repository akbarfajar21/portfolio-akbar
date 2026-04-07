import React, { useState, useRef, useEffect } from "react";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaStar, 
  FaTimes, 
  FaLightbulb, 
  FaCode, 
  FaTools,
  FaCheckCircle 
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// ── Data ─────────────────────────────────────────────────────────────────────
const projects = [
  {
    title: "Seeside Digital Agency",
    description:
      "Website resmi agensi digital saya yang melayani jasa pembuatan website, desain UI/UX, dan solusi kreatif.",
    problem:
      "Sebagai agensi baru, Seeside butuh identitas digital yang kuat untuk membangun kepercayaan klien dan menunjukkan kualitas desain.",
    solution:
      "Membangun website dengan estetika modern, animasi halus (Framer Motion), dan performa tinggi agar klien langsung merasakan kualitas kerja kami.",
    whyTech:
      "React untuk komponen reusabel, Tailwind untuk styling cepat, dan Framer Motion untuk interaksi premium.",
    features: ["Custom Animations", "Responsive Design", "Service Catalog"],
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/seeside-logo.png",
    demo: "https://seeside.site/",
    code: null,
    category: "Business",
    featured: true,
  },
  {
    title: "Website SMP Pembangunan Cibadak",
    description:
      "Profil sekolah SMP Pembangunan Cibadak yang sedang saya kembangkan agar lebih rapi dan lengkap informasinya.",
    problem:
      "Sekolah butuh media informasi online yang mudah diakses orang tua murid dan calon siswa baru.",
    solution:
      "Membuat website profil sekolah yang informatif dengan navigasi yang simpel dan desain yang bersih.",
    whyTech:
      "React digunakan agar pengelolaan konten ke depannya lebih mudah dengan sistem komponen.",
    features: ["Info Kurikulum", "Galeri Sekolah", "Pendaftaran Online"],
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/smppbcbd.png",
    demo: "https://smppembangunancibadak.vercel.app/",
    code: null,
    category: "Education",
    featured: true,
  },
  {
    title: "Website Yayasan Setinggi Langit",
    description:
      "Tempat donasi digital yang memudahkan orang bantu anak yatim & dhuafa secara transparan.",
    problem:
      "Proses donasi tradisional seringkali kurang transparan dan menyulitkan donatur dari luar kota.",
    solution:
      "Membangun portal donasi digital terintegrasi Payment Gateway untuk kemudahan transaksi dan transparansi data.",
    whyTech:
      "Supabase digunakan untuk database real-time dan sistem auth yang aman bagi pengelola yayasan.",
    features: ["Payment Gateway", "Real-time Donation", "Transparency Report"],
    tech: ["React.js", "Tailwind CSS", "Supabase", "Mayar"],
    image: "/setinggilangit.png",
    demo: "https://setinggilangit.org/",
    code: null,
    category: "Social Impact",
    featured: true,
  },
  {
    title: "Website Himpunan Vokasi Humas UI",
    description:
      "Pusat informasi buat temen-temen Himpunan Vokasi Humas UI, isinya lengkap soal progja dan info terbaru.",
    problem:
      "Himpunan mahasiswa kesulitan mendistribusikan informasi program kerja secara terpusat.",
    solution:
      "Website landing page sebagai hub utama informasi, agenda, dan visi-misi organisasi.",
    whyTech:
      "Vite dipilih karena build time yang sangat cepat, cocok untuk update konten yang sering.",
    features: ["Agenda Kegiatan", "Struktur Organisasi", "Landing Info"],
    tech: ["React", "Tailwind CSS", "Vite"],
    image: "/hmvokhum.png",
    demo: "https://hmvokhumui.com/",
    code: null,
    category: "Organization",
    featured: true,
  },
  {
    title: "Website UKM Teater UI",
    description:
      "Wajah digital UKM Teater UI buat liat jadwal dan kegiatan mentas temen-temen di sana.",
    problem:
      "Jadwal pementasan teater yang sering luput dari perhatian publik dan anggota.",
    solution:
      "Website profil dengan kalender acara dan galeri dokumentasi pementasan yang estetik.",
    whyTech:
      "Supabase membantu menyimpan data agenda pementasan secara dinamis.",
    features: ["Event Calendar", "Photo Gallery", "Internal Members Area"],
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
      "Aplikasi buat nyatet tugas biar nggak berantakan, simpel dan gampang dipakenya.",
    problem: "Banyak task manager yang terlalu kompleks dan lambat untuk penggunaan harian.",
    solution: "Aplikasi minimalis fokus pada kegesitan input dan kejelasan status tugas.",
    whyTech: "Zustand digunakan untuk state management yang ringan dan cepat.",
    features: ["Task CRUD", "Drag & Drop", "Dark Mode"],
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
      "Simpel e-commerce buat jualan kopi yang integrasi langsung ke database.",
    problem: "Pemilik kedai kopi kecil kesulitan go-digital dengan cara yang simpel.",
    solution: "E-Commerce minimalis yang memudahkan pelanggan memesan kopi favorit.",
    whyTech: "Eksperimen integrasi React dengan Supabase untuk backend tanpa server.",
    features: ["Product Catalog", "Cart System", "Order Management"],
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
      "Eksperimen bikin gambar dari teks pake bantuan AI, tinggal ketik dapet gambar.",
    problem: "Ingin mencoba integrasi API AI untuk menunjang kreativitas desain.",
    solution: "Interface simpel yang menghubungkan prompt teks ke model AI Image Generation.",
    whyTech: "Pure React & Tailwind untuk fokus pada logika integrasi API.",
    features: ["AI Integration", "Prompt History", "Image Download"],
    tech: ["React", "Tailwind"],
    image: "/generator-image-web.png",
    demo: "https://generator-image-web.vercel.app",
    code: null,
    category: "AI & ML",
    featured: false,
  },
  {
    title: "SMA IT Baitul 'Ilmi",
    description:
      "Bikin tampilan profil sekolah SMA IT Baitul 'Ilmi biar makin profesional secara online.",
    problem: "Kebutuhan profil sekolah yang representatif di era digital.",
    solution: "Landing page profil yang menonjolkan keunggulan dan fasilitas sekolah.",
    whyTech: "Menggunakan Tailwind untuk memastikan desain tetap modern dan ringan.",
    features: ["School Profile", "Vision & Mission", "Contact Info"],
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
  "Social Impact": "#38bdf8",
  Business: "#3b82f6",
};

// ── Project Modal ────────────────────────────────────────────────────────────
const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;
  const accent = catColor[project.category] || "#2dd4bf";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(13,13,15,0.85)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{
              width: "100%",
              maxWidth: 820,
              maxHeight: "90vh",
              background: "#111116",
              borderRadius: 24,
              border: "1px solid rgba(255,255,255,0.08)",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 50px 100px -20px rgba(0,0,0,0.7)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Image Area */}
            <div style={{ position: "relative", height: 260, overflow: "hidden" }}>
              <img
                src={project.image}
                alt={project.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, #111116 0%, transparent 100%)",
                }}
              />
              <button
                onClick={onClose}
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.5)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  backdropFilter: "blur(8px)",
                  zIndex: 2,
                }}
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Content Area */}
            <div
              style={{
                padding: "32px 40px 40px",
                overflowY: "auto",
                flex: 1,
                scrollbarWidth: "thin",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 24,
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: accent,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: 8,
                      display: "block",
                    }}
                  >
                    {project.category}
                  </span>
                  <h2
                    style={{
                      margin: 0,
                      fontSize: "2rem",
                      fontWeight: 900,
                      color: "#f1f5f9",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {project.title}
                  </h2>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "10px 20px",
                      borderRadius: 12,
                      background: accent,
                      color: "#0d0d0f",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      textDecoration: "none",
                    }}
                  >
                    <FaExternalLinkAlt size={12} /> Demo
                  </a>
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "10px 20px",
                        borderRadius: 12,
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#f1f5f9",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        textDecoration: "none",
                      }}
                    >
                      <FaGithub size={14} /> Code
                    </a>
                  )}
                </div>
              </div>

              {/* Case Study Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 32,
                  marginTop: 40,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  <section>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                      <FaLightbulb color={accent} size={16} />
                      <h4 style={{ margin: 0, fontSize: 14, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        Masalahnya Apa?
                      </h4>
                    </div>
                    <p style={{ margin: 0, fontSize: 15, color: "#64748b", lineHeight: 1.7 }}>
                      {project.problem || "Menghadirkan solusi digital yang efisien dan estetik."}
                    </p>
                  </section>

                  <section>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                      <FaCheckCircle color={accent} size={16} />
                      <h4 style={{ margin: 0, fontSize: 14, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        Solusinya Bagaimana?
                      </h4>
                    </div>
                    <p style={{ margin: 0, fontSize: 15, color: "#64748b", lineHeight: 1.7 }}>
                      {project.solution || "Membangun antarmuka yang intuitif dengan performa optimal."}
                    </p>
                  </section>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  <section>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                      <FaCode color={accent} size={16} />
                      <h4 style={{ margin: 0, fontSize: 14, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        Kenapa Pake Tech Ini?
                      </h4>
                    </div>
                    <p style={{ margin: 0, fontSize: 15, color: "#64748b", lineHeight: 1.7 }}>
                      {project.whyTech || "Memastikan skalabilitas dan kenyamanan pengembang."}
                    </p>
                  </section>

                  <section>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                      <FaTools color={accent} size={16} />
                      <h4 style={{ margin: 0, fontSize: 14, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        Fitur Utama
                      </h4>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {(project.features || project.tech).map((f, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            color: "#cbd5e1",
                            background: "rgba(255,255,255,0.04)",
                            padding: "6px 12px",
                            borderRadius: 8,
                            border: "1px solid rgba(255,255,255,0.06)",
                          }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ── Project Card ─────────────────────────────────────────────────────────────
const ProjectCard = ({ project, index, onOpen }) => {
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
      onClick={() => onOpen(project)}
      style={{
        borderRadius: 14,
        overflow: "hidden",
        background: hovered
          ? "rgba(255,255,255,0.05)"
          : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? `${accent}50` : "rgba(255,255,255,0.08)"}`,
        boxShadow: hovered
          ? `0 20px 40px rgba(0,0,0,0.45), 0 0 0 1px ${accent}25`
          : "none",
        transform: visible
          ? hovered
            ? "translateY(-6px)"
            : "translateY(0)"
          : "translateY(24px)",
        opacity: visible ? 1 : 0,
        transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1)`,
        display: "flex",
        flexDirection: "column",
        backdropFilter: "blur(10px)",
        cursor: "pointer",
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
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.demo, "_blank");
            }}
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
              border: "none",
              cursor: "pointer",
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
          </button>

          {project.code && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.code, "_blank");
              }}
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
                cursor: "pointer",
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
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

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
        .proj-fade-up { animation: proj-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .filter-pill  { cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); border: none; }
        .filter-pill:hover { transform: translateY(-2px); filter: brightness(1.1); }
        .filter-pill:active { transform: translateY(0); }
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
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {filtered.map((project, i) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={i} 
              onOpen={openModal} 
            />
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal 
          project={selectedProject} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />

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
