import React from 'react';

export default function Navbar() {
  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-wider text-blue-500">CorpoX</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium items-center">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#services" className="hover:text-blue-400 transition">Services</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#blog" className="hover:text-blue-400 transition">Blog</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          <a href="#admin" className="text-blue-400 hover:text-blue-300 font-semibold transition">Admin</a>
        </nav>

        {/* Action Button */}
        <div>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition shadow"
          >
            Get A Quote
          </a>
        </div>
      </div>
    </header>
  );
}