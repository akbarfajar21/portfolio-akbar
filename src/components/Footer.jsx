import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <p className="mb-4 md:mb-0 text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-medium text-gray-800">Muhammad Akbar Fajar Fadillah Tandean</span>. All rights reserved.
        </p>
        <div className="flex gap-6">
          
          <a
            href="mailto:akbarfajar2112@gmail.com"
            className="hover:text-blue-600 transition duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
