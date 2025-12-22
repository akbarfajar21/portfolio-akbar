import React, { useState } from "react";

const experiences = [
  {
    title: "Ketua OSIS UNISCO",
    date: "Jun 2024 - Mar 2025",
    description:
      "Memimpin organisasi OSIS UNISCO, mengkoordinasi kegiatan siswa, menyelenggarakan event internal-eksternal, serta menjadi penghubung strategis antara pihak sekolah dan siswa.",
    logo: "/unisco.png",
    certificateUrl: "/sertifikat-unisco.png",
  },
  {
    title: "Magang Guru IT – SMP Istiqlal Tambun",
    date: "Mar 2024",
    description:
      "Menjadi pengajar praktik untuk mata pelajaran Teknologi Informasi. Memberikan materi dasar-dasar komputer dan pengembangan web kepada siswa dengan pendekatan interaktif dan praktis.",
    logo: "/istiqlal.png",
    certificateUrl: "/sertifikat-istiqlal.png",
  },
  {
    title: "Magang IT Support – PT Kereta Api Indonesia (Divisi LRT Jabodebek)",
    date: "Jan 2024 - Feb 2024",
    description:
      "Bertugas sebagai staf IT Support, membantu pengelolaan perangkat keras dan lunak, instalasi sistem, troubleshooting jaringan, serta dokumentasi IT di lingkungan operasional LRT Jabodebek.",
    logo: "/kai.jpg",
    certificateUrl: "/sertifikat-kai.png",
  },
];

const Experience = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="experience"
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Dynamic Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 50%, 
            rgba(59, 130, 246, 0.1) 0%, 
            rgba(147, 51, 234, 0.05) 25%, 
            rgba(239, 68, 68, 0.03) 50%, 
            transparent 70%)`,
        }}
      ></div>

      {/* Animated mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-blue-900/10 to-slate-900/50"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-blue-400/60 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/60 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-pink-400/60 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/6 right-1/6 w-1 h-1 bg-cyan-400/60 rounded-full animate-ping delay-700"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="text-slate-300 mt-6 text-lg max-w-2xl mx-auto">
            Perjalanan karir dan pengalaman organisasi yang membentuk keahlian
            profesional saya
          </p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute left-4 top-6 w-9 h-9 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full border-4 border-black shadow-lg flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Experience Card */}
                <div className="ml-20">
                  <div className="bg-white/10 backdrop-blur-sm group-hover:bg-white/20 group-hover:shadow-xl transition-all duration-500 p-8 rounded-2xl border border-slate-200/10 hover:border-blue-200/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-center gap-4 mb-4 sm:mb-0">
                        <img
                          src={exp.logo}
                          alt={`${exp.title} logo`}
                          className="w-12 h-12 rounded-xl border border-slate-200 shadow-sm object-contain"
                        />
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                          {exp.title}
                        </h3>
                      </div>
                      <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-800 to-indigo-800 text-blue-100 text-sm font-semibold rounded-full border border-blue-200/10">
                        {exp.date}
                      </span>
                    </div>

                    <p className="text-slate-300 leading-relaxed text-base mt-4">
                      {exp.description}
                    </p>

                    {/* Button to open certificate image */}
                    {exp.certificateUrl && (
                      <button
                        onClick={() => setSelectedImage(exp.certificateUrl)}
                        className="inline-block mt-4 text-sm font-medium text-blue-300 hover:text-indigo-300 transition-colors underline underline-offset-4"
                      >
                        📄 Lihat Sertifikat
                      </button>
                    )}

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/10 group-hover:to-indigo-50/10 transition-all duration-500 rounded-2xl pointer-events-none"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Preview Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto relative">
            <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-t-xl">
              <h3 className="text-lg">Sertifikat</h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-white text-2xl hover:scale-110 transition"
              >
                &times;
              </button>
            </div>
            <img
              src={selectedImage}
              alt="Sertifikat"
              className="w-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
