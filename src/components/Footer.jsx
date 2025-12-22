import React from "react";
import { Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(147,51,234,0.08),transparent)] pointer-events-none"></div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side - Name & Copyright */}
          <div className="text-center md:text-left">
            <div className="mb-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Muhammad Akbar Fajar Fadillah Tandean
              </h3>
            </div>
            <p className="text-slate-400 text-sm flex items-center justify-center md:justify-start gap-2">
              <span>© {new Date().getFullYear()}</span>
              <span className="text-slate-600">•</span>
              <span>Crafted with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>in Indonesia</span>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-white/5 rounded-full text-xs">
                Portfolio 2025
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent blur-sm"></div>
    </footer>
  );
};

export default Footer;
