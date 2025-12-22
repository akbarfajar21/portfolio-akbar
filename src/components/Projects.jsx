import React, { useState, useEffect } from "react";

const projects = [
  {
    title: "CoffeeShopMe (E-Commerce)",
    description:
      "Website toko kopi dengan fitur cart, checkout, dan realtime sync menggunakan React, Zustand, dan Supabase.",
    tech: ["React", "Tailwind", "Supabase", "Zustand"],
    image: "/coffeeshopme.png",
    demo: "https://coffeeshopme.com",
    code: "https://github.com/akbarfajar/coffeeshopme",
    category: "E-Commerce",
    featured: true,
  },
  {
    title: "Image Generator Web",
    description:
      "Website AI image generator berbasis prompt. Dibuat menggunakan React dan API image gen.",
    tech: ["React", "Tailwind"],
    image: "/generator-image-web.png",
    demo: "https://generator-image-web.vercel.app",
    code: "#",
    category: "AI & ML",
    featured: false,
  },
  {
    title: "Toko Online",
    description:
      "Website toko online sederhana dengan katalog produk dan tampilan bersih.",
    tech: ["React", "Tailwind"],
    image: "/project-toko-online.png",
    demo: "https://project-toko-online.vercel.app",
    code: "#",
    category: "E-Commerce",
    featured: false,
  },
  {
    title: "Website Hadist",
    description:
      "Website pencarian dan tampilan Hadist menggunakan API hadist. UI simpel dan fokus.",
    tech: ["React", "Tailwind", "API"],
    image: "/project-hadist.png",
    demo: "https://project-hadist.vercel.app",
    code: "#",
    category: "Education",
    featured: false,
  },
  {
    title: "WebsiteFoods",
    description:
      "Website katalog makanan dengan animasi menarik dan tampilan responsive.",
    tech: ["React", "Tailwind"],
    image: "/websitefoods.png",
    demo: "https://websitefoods.vercel.app",
    code: "#",
    category: "Food & Beverage",
    featured: false,
  },
  {
    title: "Website Sekolah SMA IT Baitul 'Ilmi",
    description:
      "Website profil sekolah modern dengan hero, gallery, contact, dan fitur navigasi dinamis.",
    tech: ["React", "Tailwind"],
    image: "/smaitbaitulilmi.png",
    demo: "https://smaitbaitulilmi.vercel.app",
    code: "#",
    category: "Education",
    featured: true,
  },
];

const experiences = [
  {
    title: "Ketua OSIS UNISCO",
    date: "Jun 2024 - Mar 2025",
    description:
      "Memimpin organisasi OSIS UNISCO, mengkoordinasi kegiatan siswa, menyelenggarakan event internal-eksternal, serta menjadi penghubung strategis antara pihak sekolah dan siswa.",
  },
  {
    title: "Guru IT – SMP Istiqlal Tambun",
    date: "Mar 2024",
    description:
      "Menjadi pengajar praktik untuk mata pelajaran Teknologi Informasi. Memberikan materi dasar-dasar komputer dan pengembangan web kepada siswa dengan pendekatan interaktif dan praktis.",
  },
  {
    title: "Magang IT Support – PT Kereta Api Indonesia (Divisi LRT Jabodebek)",
    date: "Jan 2024 - Feb 2024",
    description:
      "Bertugas sebagai staf IT Support, membantu pengelolaan perangkat keras dan lunak, instalasi sistem, troubleshooting jaringan, serta dokumentasi IT di lingkungan operasional LRT Jabodebek.",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const featuredProjects = projects.filter((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Premium Header */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-block mb-6">
            <span className="text-xs font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-400/10 px-4 py-2 rounded-full border border-blue-400/20">
              Portfolio Showcase
            </span>
          </div>

          <h2 className="text-7xl md:text-8xl font-black mb-6 relative">
            <span className="bg-gradient-to-r from-white via-blue-200 to-indigo-300 bg-clip-text text-transparent">
              Exclusive
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
            {/* Glowing Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl -z-10 animate-pulse"></div>
          </h2>

          <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Karya eksklusif dalam pengembangan web modern dengan teknologi
            terdepan
          </p>

          {/* Decorative Line */}
          <div className="mt-10 flex justify-center">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </div>
        </div>

        {/* Premium Filter Pills */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-16 transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-500 transform hover:scale-105 relative overflow-hidden group ${
                activeFilter === category
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              <span className="relative z-10">{category}</span>
              {activeFilter !== category && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
          ))}
        </div>

        {/* Featured Projects - Special Layout */}
        {activeFilter === "All" && (
          <div
            className={`mb-20 transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="text-3xl font-bold text-white mb-10 text-center">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h3>

            <div className="grid gap-8 lg:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredProject(`featured-${index}`)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-700 hover:scale-[1.02] transform-gpu"
                >
                  {/* Premium Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    FEATURED
                  </div>

                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    {/* Hover Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent transition-opacity duration-500 ${
                        hoveredProject === `featured-${index}`
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    ></div>
                  </div>

                  <div className="p-8">
                    <div className="mb-3">
                      <span className="text-xs text-blue-400 font-semibold tracking-wide">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-white/10 text-blue-300 font-medium px-3 py-2 rounded-lg border border-white/20 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
                      >
                        View Live
                      </a>
                      {project.code !== "#" && (
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center border-2 border-white/30 text-white py-4 rounded-xl font-semibold hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 transform hover:scale-105"
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Glow Effect on Hover */}
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur opacity-10 transition-opacity duration-500 -z-10 ${
                      hoveredProject === `featured-${index}`
                        ? "opacity-30"
                        : "opacity-0"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects Grid */}
        <div
          className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {activeFilter === "All" && (
            <h3 className="text-3xl font-bold text-white mb-10 text-center">
              All Projects
            </h3>
          )}

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {(activeFilter === "All" ? regularProjects : filteredProjects).map(
              (project, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 transform-gpu"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-white/5 text-blue-300 font-medium px-2.5 py-1 rounded-md border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center text-sm bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-500/20"
                      >
                        Live Demo
                      </a>
                      {project.code !== "#" && (
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center text-sm border border-white/20 text-slate-300 py-3 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/5 transition-all duration-300"
                        >
                          Code
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Subtle Glow Effect */}
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 rounded-2xl blur transition-opacity duration-500 -z-10 ${
                      hoveredProject === index ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
