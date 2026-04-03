'use client';

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const roles = ['Frontend Developer', 'React Enthusiast', 'B.Tech CSE Student'];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < role.length) {
        timeout = setTimeout(() => {
          setDisplayText(role.slice(0, displayText.length + 1));
        }, 50);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-20 z-10"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Animated background orbs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Main content - Grid layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Hey, I&apos;m <span className="gradient-text">Manshi Kumari</span>
            </h1>

            <div className="h-16 mb-8">
              <p className="text-2xl md:text-3xl text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text font-semibold">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              I create beautiful, functional digital experiences. Specializing in modern web technologies,
              interactive design, and responsive solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollToSection('projects')} className="glass px-8 py-3 rounded-lg text-white font-semibold flex items-center justify-center gap-2 hover:bg-purple-500/20 transition-all glow-primary">
                View My Work
                <ArrowRight size={20} />
              </button>
              <button onClick={() => scrollToSection('contact')} className="border border-purple-500/50 px-8 py-3 rounded-lg text-white font-semibold hover:bg-purple-500/10 transition-all">
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right side - Profile Photo */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-30"></div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50">
              <Image
                src="manshi.jpeg"
                alt="Manshi Kumari - Frontend Developer"
                width={400}
                height={500}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
