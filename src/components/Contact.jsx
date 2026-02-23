import React, { useState, useEffect, useRef } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
  FaUser,
  FaCommentDots,
  FaCheckCircle,
} from "react-icons/fa";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/akbarfajar21",
    icon: <FaGithub size={17} />,
    accent: "#94a3b8",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akbar-fajar-3a9220350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: <FaLinkedin size={17} />,
    accent: "#38bdf8",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/akbarfajarrr.rr?igsh=bXhkcnI4c3Z1aTY0&utm_source=qr",
    icon: <FaInstagram size={17} />,
    accent: "#f472b6",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);
    try {
      await fetch("https://formspree.io/f/xpwrnzrg", {
        method: "POST",
        body: form,
        headers: { Accept: "application/json" },
      });
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Input field style helper
  const inputStyle = (field) => ({
    width: "100%",
    padding: "11px 14px",
    borderRadius: 10,
    background:
      focusedField === field
        ? "rgba(45,212,191,0.06)"
        : "rgba(255,255,255,0.03)",
    border: `1px solid ${focusedField === field ? "rgba(45,212,191,0.4)" : "rgba(255,255,255,0.08)"}`,
    color: "#e2e8f0",
    fontSize: "0.88rem",
    outline: "none",
    transition: "all 0.25s ease",
    fontFamily: "'Inter', sans-serif",
    boxSizing: "border-box",
    boxShadow:
      focusedField === field ? "0 0 0 3px rgba(45,212,191,0.08)" : "none",
  });

  return (
    <section
      id="contact"
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
        @keyframes contact-fade-up {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .contact-fade-up { animation: contact-fade-up 0.7s ease forwards; }
        ::placeholder { color: #334155 !important; }
        textarea { resize: vertical; }
      `}</style>

      {/* Ambient glows */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "15%",
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
          right: "5%",
          width: 260,
          height: 260,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(251,191,36,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>
        {/* ── Header ── */}
        <div
          ref={headerRef}
          className={headerVisible ? "contact-fade-up" : ""}
          style={{
            opacity: headerVisible ? 1 : 0,
            textAlign: "center",
            marginBottom: 52,
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
            <FaCommentDots size={12} style={{ color: "#2dd4bf" }} />
            <span
              style={{
                fontSize: 13,
                color: "#2dd4bf",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Kontak
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
            Mari{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #2dd4bf 0%, #34d399 50%, #fbbf24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Berkolaborasi
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
            Punya proyek menarik atau ingin berkolaborasi? Kirim pesan dan saya
            akan segera merespons.
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

        {/* ── Two-column layout ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 380px",
            gap: 20,
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.25s",
          }}
          className="contact-grid"
        >
          {/* ════ LEFT — Form ════ */}
          <div
            style={{
              borderRadius: 14,
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "28px 28px",
            }}
          >
            {/* Top accent */}
            <div
              style={{
                height: 2,
                borderRadius: 2,
                background:
                  "linear-gradient(90deg, #2dd4bf, #34d399, transparent)",
                marginBottom: 24,
              }}
            />

            <form onSubmit={handleSubmit}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 18 }}
              >
                {/* Name */}
                <div>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "#64748b",
                      marginBottom: 8,
                      letterSpacing: "0.03em",
                      textTransform: "uppercase",
                    }}
                  >
                    <FaUser size={10} style={{ color: "#2dd4bf" }} />
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Masukkan nama lengkap Anda"
                    required
                    style={inputStyle("name")}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "#64748b",
                      marginBottom: 8,
                      letterSpacing: "0.03em",
                      textTransform: "uppercase",
                    }}
                  >
                    <FaEnvelope size={10} style={{ color: "#2dd4bf" }} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="nama@email.com"
                    required
                    style={inputStyle("email")}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "#64748b",
                      marginBottom: 8,
                      letterSpacing: "0.03em",
                      textTransform: "uppercase",
                    }}
                  >
                    <FaCommentDots size={10} style={{ color: "#2dd4bf" }} />
                    Pesan Anda
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Ceritakan tentang proyek atau ide Anda..."
                    rows={5}
                    required
                    style={inputStyle("message")}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "12px 0",
                    borderRadius: 10,
                    background: submitted
                      ? "linear-gradient(135deg, #34d399, #059669)"
                      : "linear-gradient(135deg, #2dd4bf, #059669)",
                    color: "#0d0d0f",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    letterSpacing: "0.02em",
                    border: "none",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    opacity: isSubmitting ? 0.7 : 1,
                    transition: "all 0.3s ease",
                    boxShadow: "0 6px 20px rgba(45,212,191,0.25)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting)
                      e.currentTarget.style.boxShadow =
                        "0 10px 28px rgba(45,212,191,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(45,212,191,0.25)";
                  }}
                >
                  {submitted ? (
                    <>
                      <FaCheckCircle size={15} />
                      Pesan Terkirim!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div
                        style={{
                          width: 15,
                          height: 15,
                          border: "2px solid rgba(13,13,15,0.3)",
                          borderTopColor: "#0d0d0f",
                          borderRadius: "50%",
                          animation: "spin-btn 0.7s linear infinite",
                        }}
                      />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={14} />
                      Kirim Pesan
                    </>
                  )}
                </button>
                <style>{`@keyframes spin-btn { to { transform: rotate(360deg); } }`}</style>
              </div>
            </form>
          </div>

          {/* ════ RIGHT — Info ════ */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {/* Email card */}
            <div
              style={{
                borderRadius: 14,
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "22px",
              }}
            >
              <div
                style={{
                  height: 2,
                  borderRadius: 2,
                  background: "linear-gradient(90deg, #2dd4bf, transparent)",
                  marginBottom: 18,
                }}
              />

              <p
                style={{
                  margin: "0 0 6px",
                  fontSize: 11,
                  color: "#334155",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: 600,
                }}
              >
                Email
              </p>
              <a
                href="mailto:akbarfajar2112@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontSize: "0.88rem",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#2dd4bf")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#cbd5e1")}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 9,
                    background: "rgba(45,212,191,0.1)",
                    border: "1px solid rgba(45,212,191,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FaEnvelope size={14} style={{ color: "#2dd4bf" }} />
                </div>
                akbarfajar2112@gmail.com
              </a>
            </div>

            {/* Status card */}
            <div
              style={{
                borderRadius: 14,
                background: "rgba(52,211,153,0.04)",
                border: "1px solid rgba(52,211,153,0.14)",
                padding: "18px 22px",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: "#34d399",
                  boxShadow: "0 0 8px rgba(52,211,153,0.8)",
                  flexShrink: 0,
                  animation: "pulse-status 2s ease infinite",
                }}
              />
              <style>{`@keyframes pulse-status { 0%,100%{opacity:1} 50%{opacity:0.5} }`}</style>
              <div>
                <div
                  style={{
                    fontSize: "0.84rem",
                    fontWeight: 600,
                    color: "#34d399",
                  }}
                >
                  Online & Siap Membantu
                </div>
                <div style={{ fontSize: 12, color: "#334155", marginTop: 2 }}>
                  Respon dalam 24 jam
                </div>
              </div>
            </div>

            {/* Social links */}
            <div
              style={{
                borderRadius: 14,
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "20px 22px",
              }}
            >
              <p
                style={{
                  margin: "0 0 14px",
                  fontSize: 11,
                  color: "#334155",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: 600,
                }}
              >
                Social Media
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "9px 12px",
                      borderRadius: 9,
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      textDecoration: "none",
                      color: "#64748b",
                      fontSize: "0.84rem",
                      fontWeight: 500,
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = s.accent;
                      e.currentTarget.style.borderColor = `${s.accent}40`;
                      e.currentTarget.style.background = `${s.accent}08`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#64748b";
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.06)";
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.02)";
                    }}
                  >
                    <span style={{ color: s.accent }}>{s.icon}</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Responsive grid */}
        <style>{`
          @media (max-width: 768px) {
            .contact-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Contact;
