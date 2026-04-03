'use client';

const certificates = [
  {
    title: 'Certificate of Excellence',
    issuer: 'Scaler',
    date: '2025',
    description: 'Recognized for exceptional performance and dedication to learning.',
    icon: '🏆',
  },
  {
    title: 'Certification of Achievement',
    issuer: 'Sayler Academy',
    date: '2025',
    description: 'Completed advanced training in web development and modern technologies.',
    icon: '📜',
  },
  {
    title: 'Paper Publication',
    issuer: 'IJSCI - International Journal',
    date: '2024',
    description: 'Published research paper (E-ISSN: 3049-0251) in technical journal.',
    icon: '📄',
  },
];

export function CertificatesSection() {
  return (
    <section id="certificates" className="min-h-screen flex items-center py-20 z-10 relative">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center">
          Certificates & Achievements
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="glass p-8 rounded-xl hover:border-purple-500/50 transition-all duration-300 glow-primary hover:scale-105"
            >
              <div className="text-5xl mb-4">{cert.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-purple-400 text-sm font-semibold mb-2">{cert.issuer}</p>
              <p className="text-gray-400 text-sm mb-4">{cert.date}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-16 glass p-8 rounded-xl glow-accent">
          <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-6">
            Key Achievements
          </h3>
          <ul className="space-y-4">
            {[
              'Active member of Social Service Club (PAHAL)',
              'Participated in multiple hackathons and coding competitions',
              'Contributed to open-source projects',
              'Received goodies and recognition from Byteminders',
              'Maintained 8.27 CGPA throughout B.Tech',
            ].map((achievement) => (
              <li key={achievement} className="flex items-start gap-3 text-gray-300">
                <span className="text-purple-400 text-xl">→</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
