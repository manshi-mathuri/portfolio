'use client';

import { Timeline, TimelineItem } from '@/components/timeline';

const experienceData: TimelineItem[] = [
  {
    title: 'Software Development Intern',
    organization: 'InternPe',
    period: 'July – August 2024',
    description: [
      'Built Calculator App with advanced mathematical operations',
      'Developed To-Do App with task management features',
      'Implemented responsive UI with React and Tailwind CSS',
      'Collaborated with team on project deployment',
    ],
  },
  {
    title: 'SEO & Content Intern',
    organization: 'Byteminders',
    period: 'Recent',
    description: [
      'Performed comprehensive keyword research and analysis',
      'Created high-quality content for web and social media',
      'Managed social media campaigns and engagement',
      'Optimized content for search engine rankings',
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8">
      <div className="max-w-4xl w-full">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and work experience
          </p>
        </div>

        {/* Timeline */}
        <Timeline items={experienceData} variant="experience" />
      </div>
    </section>
  );
}
