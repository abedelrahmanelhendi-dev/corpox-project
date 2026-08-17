import React, { useState } from 'react';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');

  const projectsList = [
    { title: "Business Website", category: "Web Development", imageBg: "bg-blue-900" },
    { title: "E-Commerce Platform", category: "Web Development", imageBg: "bg-slate-800" },
    { title: "Finance Dashboard", category: "UI/UX Design", imageBg: "bg-indigo-900" },
    { title: "Mobile App Design", category: "UI/UX Design", imageBg: "bg-sky-900" },
    { title: "Branding Design", category: "Branding", imageBg: "bg-blue-950" },
    { title: "Marketing Campaign", category: "Marketing", imageBg: "bg-slate-900" }
  ];

  const filteredProjects = activeTab === 'All' 
    ? projectsList 
    : projectsList.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Projects</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
            Discover Our Recent Works
          </h3>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {['All', 'Web Development', 'UI/UX Design', 'Branding', 'Marketing'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-slate-50 border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition group"
            >
              <div className={`${project.imageBg} h-48 flex items-center justify-center text-white font-bold text-lg relative overflow-hidden`}>
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition"></div>
                <span className="relative z-10">{project.title}</span>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{project.category}</span>
                <h4 className="text-xl font-bold text-slate-900 mt-1 mb-2">{project.title}</h4>
                <a href="#contact" className="text-sm font-semibold text-blue-600 hover:underline inline-flex items-center space-x-1">
                  <span>View Details</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}