'use client';

import { Timeline, TimelineItem } from '@/components/timeline';

const educationData: TimelineItem[] = [
  {
    title: 'B.Tech in Computer Science & Engineering',
    organization: 'Quantum University',
    period: '2023 – 2027',
    cgpa: '8.27',
    description: 'Pursuing specialized degree in Computer Science with focus on full-stack development, data structures, and algorithms.',
  },
];

export function EducationSection() {
  return (
    <section id="education" className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8">
      <div className="max-w-4xl w-full">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        {/* Timeline */}
        <Timeline items={educationData} variant="education" />
      </div>
    </section>
  );
}
