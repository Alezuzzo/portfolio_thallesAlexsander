import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroCarouselSection from './pages/HeroCarouselSection';
import ProjectsSection from './pages/ProjectsSection';
import AboutMeSection from './pages/AboutMeSection';
import WorkExperienceSection from './pages/WorkExperienceSection';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen font-sans antialiased text-white">
      <Header />
      <main>
        <HeroCarouselSection />
        <AboutMeSection/>
        <WorkExperienceSection/>
        <ProjectsSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton/>
    </div>
  );
}

export default App;
