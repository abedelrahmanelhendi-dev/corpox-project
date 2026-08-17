import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Visual Card / Image Placeholder */}
        <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-blue-600/20 rounded-full blur-2xl"></div>
          <h4 className="text-blue-400 font-semibold uppercase text-xs tracking-wider mb-2">Who We Are</h4>
          <h3 className="text-3xl font-bold mb-4">We Are A Creative Digital Agency</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            We are a creative digital agency with a passion for design and development. We help brands grow and succeed in the digital world through custom solutions and innovative ideas.
          </p>
          <ul className="space-y-3 text-sm text-slate-200">
            <li className="flex items-center space-x-2">
              <span className="text-blue-400 font-bold">✓</span> <span>Professional Team</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-400 font-bold">✓</span> <span>Best Quality Services</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-400 font-bold">✓</span> <span>100% Client Satisfaction</span>
            </li>
          </ul>
        </div>

        {/* Right Column: Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">About Us</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              We Are Increasing Business Success With Technology
            </h3>
          </div>
          <p className="text-slate-600 leading-relaxed">
            CorpoX is a leading digital agency providing web development, design, and marketing solutions to help businesses grow in the digital world.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <div className="text-2xl font-bold text-blue-600 mb-1">Years of Experience</div>
              <p className="text-xs text-slate-500">Dedicated to delivering excellence and modern technology solutions.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <div className="text-2xl font-bold text-blue-600 mb-1">Skilled Professionals</div>
              <p className="text-xs text-slate-500">Expert team specialized in frontend, design, and strategy.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}