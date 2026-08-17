import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="bg-slate-900 text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text & Buttons */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            We Build <span className="text-blue-500">Digital Solutions</span> For Your Business
          </h1>
          <p className="text-slate-300 text-lg">
            We are a creative digital agency helping brands grow with innovative solutions & modern technology.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition shadow"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="border border-slate-600 hover:border-blue-500 text-slate-200 hover:text-blue-400 font-semibold px-6 py-3 rounded-md transition"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Right Column: Image or Graphic Card */}
        <div className="relative">
          <div className="bg-slate-800 rounded-xl overflow-hidden shadow-2xl border border-slate-700 p-4">
            <div className="bg-slate-900 rounded-lg p-6 text-center space-y-4">
              <div className="text-blue-500 font-bold text-xl">CorpoX Agency</div>
              <p className="text-slate-400 text-sm">Professional Web Development, UI/UX Design & Digital Solutions.</p>
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800 text-center">
                <div>
                  <div className="text-blue-400 font-bold text-lg">450+</div>
                  <div className="text-xs text-slate-400">Projects</div>
                </div>
                <div>
                  <div className="text-blue-400 font-bold text-lg">250+</div>
                  <div className="text-xs text-slate-400">Clients</div>
                </div>
                <div>
                  <div className="text-blue-400 font-bold text-lg">10+</div>
                  <div className="text-xs text-slate-400">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}