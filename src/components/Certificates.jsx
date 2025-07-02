import React from "react";

const certificates = [
  {
    title: "Belajar Dasar Pemrograman Web",
    image: "/certificates/web-dasar.png",
    link: "https://www.dicoding.com/certificates/0LZ0QL2K3Z65",
    category: "Web Development"
  },
  {
    title: "Belajar Membuat Front-End Web",
    image: "/certificates/Belajar-Frontend.png",
    link: "https://www.dicoding.com/certificates/1OP8WOJWVXQK",
    category: "Frontend"
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    image: "/certificates/Belajar-Pemrog-Js.png",
    link: "https://www.dicoding.com/certificates/6RPN1NGYRX2M",
    category: "Programming"
  },
  {
    title: "Belajar Dasar AWS Google Cloud",
    image: "/certificates/Belajar-Aws-Cloud.png",
    link: "https://www.dicoding.com/certificates/JLX17QGGNX72",
    category: "Cloud Computing"
  },
  {
    title: "Belajar Backend Untuk Pemula",
    image: "/certificates/Beckend-pemula.png",
    link: "https://www.dicoding.com/certificates/JMZV3WGG3PN9",
    category: "Backend"
  },
  {
    title: "Belajar Dasar AI",
    image: "/certificates/Belajar-dasar-ai.png",
    link: "https://www.dicoding.com/certificates/GRX5OR0ORP0M",
    category: "Artificial Intelligence"
  },
  {
    title: "Belajar Membuat Aplikasi Web dengan React",
    image: "/certificates/Belajar-Web-React.png",
    link: "https://www.dicoding.com/certificates/N9ZOMR0E8PG5",
    category: "React"
  },
  {
    title: "Belajar Dasar Google Cloud",
    image: "/certificates/Belajar-Google-Cloud.png",
    link: "https://www.dicoding.com/certificates/JMZV3WQ5QPN9",
    category: "Cloud Computing"
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
            Sertifikasi dan pencapaian dalam bidang teknologi dan pengembangan web
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/30 hover:-translate-y-3 hover:rotate-1"
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center px-2.5 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-slate-700 rounded-full border border-slate-200/50">
                    {cert.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 via-blue-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-150">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-5">
                <h3 className="text-sm font-bold text-slate-800 group-hover:text-purple-600 transition-colors duration-300 leading-tight line-clamp-2">
                  {cert.title}
                </h3>
                
                {/* Dicoding Badge */}
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">D</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">Dicoding</span>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className="w-5 h-5 text-slate-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all duration-300">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </a>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {certificates.length}+
              </div>
              <div className="text-sm text-slate-600 font-medium">Total Certificates</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                5+
              </div>
              <div className="text-sm text-slate-600 font-medium">Technology Areas</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-sm text-slate-600 font-medium">Completion Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                2024
              </div>
              <div className="text-sm text-slate-600 font-medium">Latest Year</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
