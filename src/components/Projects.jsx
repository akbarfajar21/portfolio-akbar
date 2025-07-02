import React from "react";

const projects = [
  {
    title: "CoffeeShopMe (E-Commerce)",
    description: "Website toko kopi dengan fitur cart, checkout, dan realtime sync menggunakan React, Zustand, dan Supabase.",
    tech: ["React", "Tailwind", "Supabase", "Zustand"],
    image: "/coffeeshopme.png",
    demo: "https://coffeeshopme.com",
    code: "https://github.com/akbarfajar/coffeeshopme",
  },
  {
    title: "Image Generator Web",
    description: "Website AI image generator berbasis prompt. Dibuat menggunakan React dan API image gen.",
    tech: ["React", "Tailwind"],
    image: "/generator-image-web.png",
    demo: "https://generator-image-web.vercel.app",
    code: "#",
  },
  {
    title: "Toko Online",
    description: "Website toko online sederhana dengan katalog produk dan tampilan bersih.",
    tech: ["React", "Tailwind"],
    image: "/project-toko-online.png",
    demo: "https://project-toko-online.vercel.app",
    code: "#",
  },
  {
    title: "Website Hadist",
    description: "Website pencarian dan tampilan Hadist menggunakan API hadist. UI simpel dan fokus.",
    tech: ["React", "Tailwind", "API"],
    image: "/project-hadist.png",
    demo: "https://project-hadist.vercel.app",
    code: "#",
  },
  {
    title: "WebsiteFoods",
    description: "Website katalog makanan dengan animasi menarik dan tampilan responsive.",
    tech: ["React", "Tailwind"],
    image: "/websitefoods.png",
    demo: "https://websitefoods.vercel.app",
    code: "#",
  },
  {
    title: "Website Sekolah SMA IT Baitul 'Ilmi",
    description: "Website profil sekolah modern dengan hero, gallery, contact, dan fitur navigasi dinamis.",
    tech: ["React", "Tailwind"],
    image: "/smaitbaitulilmi.png",
    demo: "https://smaitbaitulilmi.vercel.app",
    code: "#",
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
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
            Koleksi proyek web development yang telah saya kerjakan dengan teknologi modern
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 font-semibold px-3 py-1.5 rounded-full border border-blue-200/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Live Demo
                  </a>
                  {project.code !== "#" && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-sm border-2 border-slate-300 text-slate-700 py-3 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
