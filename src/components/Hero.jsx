import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Dynamic gradient background */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(59, 130, 246, 0.15) 0%, 
            rgba(147, 51, 234, 0.1) 25%, 
            rgba(239, 68, 68, 0.05) 50%, 
            transparent 70%)`,
        }}
      ></div>

      {/* Animated mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-500"></div>

        {/* Large floating elements */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Grid overlay with glow effect */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-20">
          {/* LEFT - Content */}
          <div
            className={`space-y-10 transform transition-all duration-1200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            {/* Exclusive badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-xl">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-sm font-medium text-gray-300">
                Available for Projects
              </span>
            </div>

            {/* Main heading with enhanced typography */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight">
                <span className="block text-white/90 mb-2">Hai, Saya</span>
                <span className="block relative">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-shift">
                    Muhammad Akbar
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-lg opacity-75 animate-pulse-glow"></div>
                </span>
              </h1>

              <div className="flex items-center space-x-4">
                <div className="h-px w-12 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                <span className="text-xl sm:text-2xl font-semibold text-gray-300 tracking-wide">
                  Full Stack Developer
                </span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>

            {/* Enhanced description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-400 leading-relaxed max-w-xl font-light">
                Saya{" "}
                <span className="text-white font-semibold">
                  Muhammad Akbar Fajar Fadillah Tandean
                </span>
                , developer berpengalaman dari Tambun, Bekasi yang berfokus pada
                pembuatan
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
                  {" "}
                  aplikasi web modern
                </span>{" "}
                dengan teknologi terdepan.
              </p>

              {/* Tech stack with icons */}
              <div className="flex flex-wrap gap-4">
                <div className="group flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 backdrop-blur hover:from-blue-500/20 hover:to-blue-600/20 transition-all duration-300">
                  <div className="w-3 h-3 bg-blue-400 rounded-full group-hover:animate-spin"></div>
                  <span className="text-blue-300 font-medium text-sm">
                    React.js
                  </span>
                </div>
                <div className="group flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 backdrop-blur hover:from-purple-500/20 hover:to-purple-600/20 transition-all duration-300">
                  <div className="w-3 h-3 bg-purple-400 rounded-full group-hover:animate-bounce"></div>
                  <span className="text-purple-300 font-medium text-sm">
                    Tailwind CSS
                  </span>
                </div>
                <div className="group flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 backdrop-blur hover:from-green-500/20 hover:to-green-600/20 transition-all duration-300">
                  <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-pulse"></div>
                  <span className="text-green-300 font-medium text-sm">
                    Supabase
                  </span>
                </div>
              </div>
            </div>

            {/* Premium achievement badges */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 text-amber-300 text-sm font-medium rounded-xl backdrop-blur">
                🏆 Ex-Ketua OSIS UNISCO
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium rounded-xl backdrop-blur">
                💼 IT Support PT KAI
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium rounded-xl backdrop-blur">
                🎓 IT Teacher
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center text-lg">
                  Eksplorasi Proyek
                  <svg
                    className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
              </a>

              <a
                href="#contact"
                className="group px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 flex items-center justify-center shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg"
              >
                Mari Berkolaborasi
                <svg
                  className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT - Enhanced Image */}
          <div
            className={`flex justify-center lg:justify-end transform transition-all duration-1200 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700 animate-pulse-glow"></div>

              {/* Floating elements around image */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl rotate-12 animate-float shadow-lg shadow-blue-400/25"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl -rotate-12 animate-float-delayed shadow-lg shadow-purple-400/25"></div>
              <div className="absolute top-1/2 -right-12 w-8 h-8 bg-gradient-to-br from-pink-400 to-red-400 rounded-xl rotate-45 animate-float shadow-lg shadow-pink-400/25"></div>

              {/* Main image container with enhanced styling */}
              <div className="relative w-80 h-80 lg:w-[420px] lg:h-[420px]">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-blue-500 animate-border-spin p-1">
                  <div className="w-full h-full rounded-full bg-black"></div>
                </div>

                {/* Image container */}
                <div className="absolute inset-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full shadow-2xl overflow-hidden border border-white/10">
                  <img
                    src="./foto-akbar.jpg"
                    alt="Muhammad Akbar"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 filter hover:brightness-110"
                  />

                  {/* Image overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Enhanced floating badges with animations */}
              <div className="absolute -top-4 left-8 px-4 py-2 bg-black/80 backdrop-blur-xl border border-blue-500/30 rounded-2xl shadow-xl text-sm font-bold text-blue-300 animate-float">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                  React Expert
                </span>
              </div>

              <div className="absolute top-1/2 -right-8 px-4 py-2 bg-black/80 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-xl text-sm font-bold text-purple-300 animate-float-delayed">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                  UI/UX Design
                </span>
              </div>

              <div className="absolute -bottom-4 left-12 px-4 py-2 bg-black/80 backdrop-blur-xl border border-green-500/30 rounded-2xl shadow-xl text-sm font-bold text-green-300 animate-float">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Full Stack
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-xs text-gray-400 font-medium tracking-wider">
            SCROLL
          </span>
          <div className="w-6 h-10 border-2 border-gray-600/50 rounded-full flex justify-center backdrop-blur">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%,
          100% {
            background-size: 300% 300%;
            background-position: 0% 50%;
          }
          50% {
            background-size: 300% 300%;
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.02);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(1deg);
          }
          50% {
            transform: translateY(-5px) rotate(-1deg);
          }
          75% {
            transform: translateY(-15px) rotate(1deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(-1deg);
          }
          50% {
            transform: translateY(-5px) rotate(1deg);
          }
          75% {
            transform: translateY(-10px) rotate(-1deg);
          }
        }

        @keyframes border-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes scroll-indicator {
          0% {
            opacity: 0;
            transform: translateY(-10px) scaleY(0.5);
          }
          50% {
            opacity: 1;
            transform: translateY(0px) scaleY(1);
          }
          100% {
            opacity: 0;
            transform: translateY(10px) scaleY(0.5);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-gradient-shift {
          background-size: 300% 300%;
          animation: gradient-shift 4s ease infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
        }

        .animate-border-spin {
          animation: border-spin 8s linear infinite;
        }

        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
