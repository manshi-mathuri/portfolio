'use client';

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 z-10 relative">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m Manshi Kumari, a passionate Frontend Developer and React enthusiast currently pursuing B.Tech in Computer Science at Quantum University. I specialize in creating beautiful and functional user experiences using modern web technologies.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              My journey began with curiosity about how web applications work. I&apos;ve honed my skills in React, Next.js, Tailwind CSS, and modern frontend development practices. I&apos;m dedicated to building scalable and performant applications.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m an active member of Social Service Club (PAHAL) and passionate about contributing to the tech community. When I&apos;m not coding, you&apos;ll find me exploring new technologies, participating in hackathons, or working on open-source projects.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">4+</div>
                <div className="text-gray-400 text-sm mt-2">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">8.27</div>
                <div className="text-gray-400 text-sm mt-2">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">2+</div>
                <div className="text-gray-400 text-sm mt-2">Internships</div>
              </div>
            </div>
          </div>

          {/* Right side - Glass Card with info */}
          <div className="glass p-8 rounded-xl space-y-6 glow-primary">
            <div>
              <h3 className="text-purple-400 font-semibold mb-2">Education</h3>
              <p className="text-gray-300">B.Tech in Computer Science</p>
              <p className="text-gray-400 text-sm">Quantum University, Roorkee (2023–2027)</p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h3 className="text-purple-400 font-semibold mb-2">Currently</h3>
              <p className="text-gray-300">Freelance Frontend Developer</p>
              <p className="text-gray-400 text-sm">Building modern web applications with React</p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h3 className="text-purple-400 font-semibold mb-2">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'UI/UX Design', 'Web Development', 'Cloud Computing', 'SEO'].map((tag) => (
                  <span
                    key={tag}
                    className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
