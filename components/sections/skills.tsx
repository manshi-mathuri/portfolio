'use client';

const skillCategories = [
  {
    id: 1,
    category: 'Programming Languages',
    skills: ['C', 'Java', 'JavaScript', 'TypeScript'],
    icon: '💻',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    category: 'Web Technologies',
    skills: ['HTML', 'CSS', 'React', 'Node.js', 'Next.js', 'Tailwind CSS'],
    icon: '🌐',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    category: 'Databases',
    skills: ['MySQL', 'MongoDB'],
    icon: '🗄️',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Canva', 'VS Code', 'Vercel'],
    icon: '⚙️',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    category: 'Other Skills',
    skills: ['Cloud Computing', 'Blogging', 'SEO', 'UI/UX Design', 'Responsive Design'],
    icon: '✨',
    color: 'from-pink-500 to-rose-500',
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen flex items-center py-20 z-10 relative">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center">
          Skills & Expertise
        </h2>

        {/* Vertical Timeline with 3-column layout */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 rounded-full"></div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((cat, index) => (
              <div key={cat.id} className="relative flex flex-col">
                {/* Timeline bullet and connector for desktop */}
                {index % 2 === 0 ? (
                  <>
                    {/* Left side content */}
                    <div className="hidden lg:block absolute right-full mr-8 top-8 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-background shadow-lg shadow-purple-500/50"></div>
                  </>
                ) : (
                  <>
                    {/* Right side content */}
                    <div className="hidden lg:block absolute left-full ml-8 top-8 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 border-4 border-background shadow-lg shadow-cyan-500/50"></div>
                  </>
                )}

                {/* Card */}
                <div className={`glass p-8 rounded-2xl glow-primary hover:scale-105 transition-all duration-300 h-full border-l-4 border-transparent bg-gradient-to-br from-white/5 to-white/[0.02] hover:from-white/10 hover:to-white/5`} style={{ borderLeftColor: `#${Math.random().toString(16).slice(2, 8)}` }}>
                  {/* Category header with icon */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${cat.color} text-white shadow-lg`}>
                      <span className="text-2xl">{cat.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skills list */}
                  <div className="space-y-3">
                    {cat.skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-3 group">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 group-hover:scale-150 transition-transform duration-300"></div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Step indicator */}
                  <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                      Step {cat.id}
                    </span>
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 w-2 rounded-full transition-all duration-300 ${
                            i < Math.min(cat.skills.length, 3)
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                              : 'bg-white/10'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6 text-lg font-semibold">Certifications & Achievements</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Certificate of Excellence - Scaler 2025', 'Certification of Achievement - Sayler Academy 2025', 'Paper Publication - IJSCI'].map((cert) => (
              <span key={cert} className="glass px-6 py-3 rounded-xl text-purple-300 text-sm font-medium border border-purple-500/20 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            width: 0;
          }
        }
      `}</style>
    </section>
  );
}
