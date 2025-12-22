import React, { useState } from "react";

const certificates = [
  {
    title: "Belajar Dasar Pemrograman Web",
    image: "/certificates/web-dasar.png",
    link: "https://www.dicoding.com/certificates/0LZ0QL2K3Z65",
    category: "Web Development",
    year: "2024",
    difficulty: "Foundation",
  },
  {
    title: "Belajar Membuat Front-End Web",
    image: "/certificates/Belajar-Frontend.png",
    link: "https://www.dicoding.com/certificates/1OP8WOJWVXQK",
    category: "Frontend",
    year: "2024",
    difficulty: "Intermediate",
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    image: "/certificates/Belajar-Pemrog-Js.png",
    link: "https://www.dicoding.com/certificates/6RPN1NGYRX2M",
    category: "Programming",
    year: "2024",
    difficulty: "Foundation",
  },
  {
    title: "Belajar Dasar AWS Google Cloud",
    image: "/certificates/Belajar-Aws-Cloud.png",
    link: "https://www.dicoding.com/certificates/JLX17QGGNX72",
    category: "Cloud Computing",
    year: "2024",
    difficulty: "Advanced",
  },
  {
    title: "Belajar Backend Untuk Pemula",
    image: "/certificates/Beckend-pemula.png",
    link: "https://www.dicoding.com/certificates/JMZV3WGG3PN9",
    category: "Backend",
    year: "2024",
    difficulty: "Foundation",
  },
  {
    title: "Belajar Dasar AI",
    image: "/certificates/Belajar-dasar-ai.png",
    link: "https://www.dicoding.com/certificates/GRX5OR0ORP0M",
    category: "Artificial Intelligence",
    year: "2024",
    difficulty: "Advanced",
  },
  {
    title: "Belajar Membuat Aplikasi Web dengan React",
    image: "/certificates/Belajar-Web-React.png",
    link: "https://www.dicoding.com/certificates/N9ZOMR0E8PG5",
    category: "React",
    year: "2024",
    difficulty: "Intermediate",
  },
  {
    title: "Belajar Dasar Google Cloud",
    image: "/certificates/Belajar-Google-Cloud.png",
    link: "https://www.dicoding.com/certificates/JMZV3WQ5QPN9",
    category: "Cloud Computing",
    year: "2024",
    difficulty: "Advanced",
  },
];

const categoryColors = {
  "Web Development": "from-emerald-500 to-teal-600",
  Frontend: "from-blue-500 to-cyan-600",
  Programming: "from-purple-500 to-violet-600",
  "Cloud Computing": "from-orange-500 to-red-600",
  Backend: "from-gray-600 to-slate-700",
  "Artificial Intelligence": "from-pink-500 to-rose-600",
  React: "from-sky-500 to-blue-600",
};

const difficultyColors = {
  Foundation: "bg-green-100 text-green-800 border-green-200",
  Intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Advanced: "bg-red-100 text-red-800 border-red-200",
};

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    "All",
    ...new Set(certificates.map((cert) => cert.category)),
  ];
  const filteredCertificates =
    selectedCategory === "All"
      ? certificates
      : certificates.filter((cert) => cert.category === selectedCategory);

  return (
    <section
      id="certificates"
      className="relative py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white/70">
              Professional Certifications
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Elite
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Curated collection of premium certifications in cutting-edge
            technologies, representing mastery across multiple domains of
            software engineering.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-500 border ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-transparent shadow-lg shadow-purple-500/25"
                  : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCertificates.map((cert, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2"
              >
                {/* Holographic Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Certificate Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 h-56">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${
                        categoryColors[cert.category]
                      } text-white text-xs font-bold rounded-full shadow-lg`}
                    >
                      {cert.category}
                    </span>
                  </div>

                  {/* Difficulty Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full border ${
                        difficultyColors[cert.difficulty]
                      }`}
                    >
                      {cert.difficulty}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute bottom-4 right-4">
                    <span className="inline-flex items-center px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {cert.year}
                    </span>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-200">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-purple-300 transition-colors duration-300">
                    {cert.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-sm font-black">D</span>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-white">
                          Dicoding
                        </span>
                        <p className="text-xs text-gray-400">Indonesia</p>
                      </div>
                    </div>

                    <div className="w-6 h-6 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                    hoveredCard === index
                      ? "shadow-2xl shadow-purple-500/25"
                      : ""
                  }`}
                ></div>
              </a>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-24 relative">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-12 border border-white/20">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl"></div>

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-4">
                <div className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {certificates.length}
                </div>
                <div className="text-sm text-gray-300 font-medium uppercase tracking-wider">
                  Elite Certificates
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {categories.length - 1}
                </div>
                <div className="text-sm text-gray-300 font-medium uppercase tracking-wider">
                  Tech Domains
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-sm text-gray-300 font-medium uppercase tracking-wider">
                  Success Rate
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-5xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  2024
                </div>
                <div className="text-sm text-gray-300 font-medium uppercase tracking-wider">
                  Latest Achievement
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
