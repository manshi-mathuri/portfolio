import { Background3D } from '@/components/3d-background';
import { Navigation } from '@/components/navigation';
import { ScrollProgress } from '@/components/scroll-progress';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { SkillsSection } from '@/components/sections/skills';
import { ExperienceSection } from '@/components/sections/experience';
import { EducationSection } from '@/components/sections/education';
import { ProjectsSection } from '@/components/sections/projects';
import { CertificatesSection } from '@/components/sections/certificates';
import { ContactSection } from '@/components/sections/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <Background3D />

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Navigation */}
      <Navigation />

      {/* Sections */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
