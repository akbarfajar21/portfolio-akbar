import React from "react";

const experiences = [
  {
    title: "Ketua OSIS UNISCO",
    date: "Jun 2024 - Mar 2025",
    description:
      "Memimpin organisasi OSIS UNISCO, mengkoordinasi kegiatan siswa, menyelenggarakan event internal-eksternal, serta menjadi penghubung strategis antara pihak sekolah dan siswa.",
    logo: "/unisco.png", // ganti sesuai logo yang kamu punya
  },
  {
    title: "Magang Guru IT – SMP Istiqlal Tambun",
    date: "Mar 2024",
    description:
      "Menjadi pengajar praktik untuk mata pelajaran Teknologi Informasi. Memberikan materi dasar-dasar komputer dan pengembangan web kepada siswa dengan pendekatan interaktif dan praktis.",
    logo: "/istiqlal.png",
  },
  {
    title: "Magang IT Support – PT Kereta Api Indonesia (Divisi LRT Jabodebek)",
    date: "Jan 2024 - Feb 2024",
    description:
      "Bertugas sebagai staf IT Support, membantu pengelolaan perangkat keras dan lunak, instalasi sistem, troubleshooting jaringan, serta dokumentasi IT di lingkungan operasional LRT Jabodebek.",
    logo: "/kai.jpg",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
            Perjalanan karir dan pengalaman organisasi yang membentuk keahlian profesional saya
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-9 h-9 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Content card */}
                <div className="ml-20">
                  <div className="bg-white/90 backdrop-blur-sm group-hover:bg-white group-hover:shadow-xl transition-all duration-500 p-8 rounded-2xl border border-slate-200/50 hover:border-blue-200 relative overflow-hidden">
                    {/* Decorative gradient */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-center gap-4 mb-4 sm:mb-0">
                        <img
                          src={exp.logo}
                          alt={`${exp.title} logo`}
                          className="w-12 h-12 rounded-xl border border-slate-200 shadow-sm object-contain"
                        />
                        <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                          {exp.title}
                        </h3>
                      </div>
                      <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-sm font-semibold rounded-full border border-blue-200/50">
                        {exp.date}
                      </span>
                    </div>

                    <p className="text-slate-600 leading-relaxed text-base mt-4">
                      {exp.description}
                    </p>

                    {/* Subtle hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/30 group-hover:to-indigo-50/30 transition-all duration-500 rounded-2xl pointer-events-none"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
