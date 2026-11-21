import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { BackgroundSection } from './components/BackgroundSection';
import { ContactFooter } from './components/ContactFooter';
import { HeroSection } from './components/HeroSection';
import { JourneyModals } from './components/JourneyModals';
import { JourneySection } from './components/JourneySection';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { RecognitionSection } from './components/RecognitionSection';
import type { JourneyBook, JourneyPhoto } from './data/portfolioData';

export default function App() {
  const [activeBook, setActiveBook] = useState<JourneyBook | null>(null);
  const [activePhoto, setActivePhoto] = useState<JourneyPhoto | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <Navbar />

      <main id="top" className="flex-1">
        <HeroSection />
        <AboutSection />
        <BackgroundSection />
        <ProjectsSection />
        <RecognitionSection />
        <JourneySection onSelectBook={setActiveBook} />
        <ContactFooter />
      </main>

      <JourneyModals
        activeBook={activeBook}
        activePhoto={activePhoto}
        onCloseBook={() => setActiveBook(null)}
        onSelectPhoto={setActivePhoto}
        onClosePhoto={() => setActivePhoto(null)}
      />
    </div>
  );
}
