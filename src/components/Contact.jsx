import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // استبدل القيم أدناه بالمعلومات الخاصة بك من حسابك على EmailJS لاحقاً
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus('Failed to send message, please try again.');
      });
  };

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 border-b border-slate-800">
          
          {/* Left: Info */}
          <div className="space-y-6">
            <span className="text-blue-400 font-semibold uppercase text-xs tracking-wider">Contact Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Let's Build Something Great Together
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Have a project in mind or want to discuss digital solutions for your business? Get in touch with our team today.
            </p>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-center space-x-3">
                <span className="text-blue-500 font-bold">📍</span>
                <span>123 Business Ave, Tech City, USA</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-500 font-bold">📧</span>
                <span>contact@corpoxagency.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-500 font-bold">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Right: Simple Form */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
            <h3 className="text-xl font-bold mb-6 text-white">Send Us A Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Your Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Your Message</label>
                <textarea 
                  name="message"
                  rows="4" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..." 
                  className="w-full bg-slate-900 border border-slate-700 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition shadow"
              >
                Send Message
              </button>
              
              {status && (
                <p className="text-center text-xs mt-3 text-blue-400 font-medium">{status}</p>
              )}
            </form>
          </div>

        </div>

        {/* Copyright Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500">
          <div>© {new Date().getFullYear()} CorpoX Agency. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#home" className="hover:text-blue-400 transition">Privacy Policy</a>
            <a href="#home" className="hover:text-blue-400 transition">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}