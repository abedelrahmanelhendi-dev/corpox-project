import React from 'react';

export default function Services() {
  const servicesList = [
    {
      title: "Web Development",
      desc: "We build fast, secure & modern websites.",
      icon: "💻"
    },
    {
      title: "UI/UX Design",
      desc: "We design beautiful and user-friendly interfaces.",
      icon: "🎨"
    },
    {
      title: "Digital Marketing",
      desc: "We help you grow your business online.",
      icon: "📈"
    },
    {
      title: "Support & Maintenance",
      desc: "We provide 24/7 support for our clients.",
      icon: "⚙️"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Services</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            We Provide The Best Service For You
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="bg-slate-50 border border-slate-100 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}