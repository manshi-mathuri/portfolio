'use client';

import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Puja Bazar',
    description: 'E-commerce website for puja materials (Diwali, Chhath Puja) with product listing and category-based navigation.',
    tags: ['React.js', 'Node.js', 'Frontend Design'],
    image: '🛍️',
    link: '#',
    github: '#',
  },
  {
    title: 'IntelliHire',
    description: 'Resume analysis platform focusing on UI/UX and performance with resume upload and result dashboard features.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    image: '📄',
    link: '#',
    github: '#',
  },
  {
    title: 'Calculator Web App',
    description: 'Fully functional calculator application for mathematical operations with intuitive interface design.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '🧮',
    link: '#',
    github: '#',
  },
  {
    title: 'To-Do List Application',
    description: 'Feature-rich to-do list web application for task management and productivity tracking.',
    tags: ['React', 'JavaScript', 'UI Design'],
    image: '✅',
    link: '#',
    github: '#',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex items-center py-20 z-10 relative">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group glass p-6 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 cursor-pointer glow-primary hover:scale-105"
            >
              {/* Project Image/Icon */}
              <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform">
                {project.image}
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-white/10">
                <a
                  href={project.link}
                  className="flex-1 flex items-center justify-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm"
                >
                  <ExternalLink size={16} />
                  View
                </a>
                <a
                  href={project.github}
                  className="flex-1 flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View all projects */}
        <div className="text-center mt-12">
          <button onClick={() => window.open('#projects')} className="glass px-8 py-3 rounded-lg text-purple-400 font-semibold hover:bg-purple-500/20 transition-all">
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  );
}
