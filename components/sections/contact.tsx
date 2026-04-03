'use client';

import { Mail, Github, Linkedin, Twitter, Instagram, Download } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Send email via mailto
    const mailtoLink = `mailto:manshimathuri0709@gmail.com?subject=Portfolio Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', message: '' });
  };

  const handleDownloadResume = () => {
    // Replace with actual resume link
    window.open('/resume.pdf', '_blank');
  };

  const socialLinks = [
    { Icon: Github, label: 'GitHub', link: 'https://github.com', color: 'hover:text-white hover:shadow-white/20' },
    { Icon: Linkedin, label: 'LinkedIn', link: 'https://linkedin.com', color: 'hover:text-blue-400 hover:shadow-blue-400/50' },
    { Icon: Instagram, label: 'Instagram', link: 'https://instagram.com', color: 'hover:text-pink-400 hover:shadow-pink-400/50' },
    { Icon: Twitter, label: 'Twitter', link: 'https://twitter.com', color: 'hover:text-cyan-400 hover:shadow-cyan-400/50' },
    { Icon: Mail, label: 'Email', link: 'mailto:manshimathuri0709@gmail.com', color: 'hover:text-purple-400 hover:shadow-purple-400/50' },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 z-10 relative">
      <div className="max-w-5xl mx-auto px-4 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello 👋
          </p>
        </div>

        {/* Contact Card */}
        <div className="glass rounded-2xl p-8 md:p-12 mb-12 glow-primary">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 px-5 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-white/10 transition-all duration-300"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-3">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 px-5 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-white/10 transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 px-5 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-white/10 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform"
                >
                  Send Message 🚀
                </button>
                <button
                  type="button"
                  onClick={handleDownloadResume}
                  className="flex-1 border border-purple-500/50 text-purple-300 font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-purple-500/10 hover:scale-105 transition-all duration-300"
                >
                  <Download size={20} />
                  Download Resume
                </button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Email Card */}
              <a
                href="mailto:manshimathuri0709@gmail.com"
                className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-purple-500/10 hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="bg-purple-500/20 p-4 rounded-lg group-hover:bg-purple-500/30 transition-all duration-300">
                  <Mail className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <p className="text-gray-400 text-sm break-all">manshimathuri0709@gmail.com</p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href="tel:+916205270651"
                className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-pink-500/10 hover:border-pink-500/30 transition-all duration-300 group"
              >
                <div className="bg-pink-500/20 p-4 rounded-lg group-hover:bg-pink-500/30 transition-all duration-300">
                  <Mail className="text-pink-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <p className="text-gray-400 text-sm">+91 6205270651</p>
                </div>
              </a>

              {/* Status Card */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 p-6 rounded-xl">
                <h3 className="text-white font-semibold mb-2">Status</h3>
                <p className="text-gray-300 text-sm">
                  Available for freelance projects and collaborations. Let&apos;s build something amazing together!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Follow Me Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Follow Me</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {socialLinks.map(({ Icon, label, link, color }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative`}
                title={label}
                aria-label={label}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-all duration-300 group-hover:scale-110"></div>
                <div className={`relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 ${color} transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-lg`}>
                  <Icon size={28} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
