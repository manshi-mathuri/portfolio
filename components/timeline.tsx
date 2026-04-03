'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export interface TimelineItem {
  year?: string;
  period?: string;
  title: string;
  organization: string;
  description: string | string[];
  icon?: string;
  cgpa?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  variant?: 'education' | 'experience';
}

export function Timeline({ items, variant = 'education' }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const elementHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate progress
      const start = rect.top - viewportHeight;
      const end = rect.bottom;
      const total = end - start;
      const progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / total));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full py-12">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-purple-500/30 via-pink-500/30 to-cyan-500/30">
        <div
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 transition-all duration-300"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Timeline items */}
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8 items-start md:gap-12`}
          >
            {/* Content */}
            <div className="w-full md:w-1/2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass p-6 rounded-lg border border-white/20 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-purple-400 text-sm">{item.organization}</p>
                  </div>
                  {item.cgpa && (
                    <div className="text-right">
                      <p className="text-cyan-400 font-semibold">{item.cgpa}</p>
                      <p className="text-xs text-gray-400">CGPA</p>
                    </div>
                  )}
                </div>

                <p className="text-gray-300 text-sm mb-3">
                  {item.year && `${item.year} • `}
                  {item.period}
                </p>

                {Array.isArray(item.description) ? (
                  <ul className="text-gray-400 text-sm space-y-2">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-pink-400 mt-1">→</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 text-sm">{item.description}</p>
                )}
              </motion.div>
            </div>

            {/* Center dot */}
            <div className="relative flex justify-center items-center w-full md:w-0">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/50 md:absolute md:left-1/2 md:-translate-x-1/2"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
