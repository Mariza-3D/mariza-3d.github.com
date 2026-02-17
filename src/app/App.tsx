import { useState, lazy, Suspense } from 'react';
import BackToTop from './components/BackToTop';
import CookieConsent from './components/CookieConsent';
import CustomCursor from './components/CustomCursor';
import LoadingBar from './components/LoadingBar';
import FloatingParticles from './components/FloatingParticles';
import Navigation from './components/Navigation';
import SplashScreen from './components/SplashScreen';

// Lazy load heavy Three.js component
const Text3DScene = lazy(() => import('./components/Text3DScene'));
import Curriculum from './sections/Curriculum';
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import InfoBar from './sections/InfoBar';
import Instructor from './sections/Instructor';
import ModelViewer from './sections/ModelViewer';
import Pricing from './sections/Pricing';
import SoftwareGrid from './sections/SoftwareGrid';
import StudentResults from './sections/StudentResults';
import Testimonials from './sections/Testimonials';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <LoadingBar />
      <CustomCursor />
      <CookieConsent />
      {!isLoaded && <SplashScreen onLoadComplete={() => setIsLoaded(true)} />}

      {/* Global 3D scene - fixed position, follows scroll, in background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <Suspense fallback={null}>
          <Text3DScene />
        </Suspense>
      </div>



      <div className="min-h-screen text-white overflow-hidden relative">
        {isLoaded && <Navigation />}
        <FloatingParticles />
        <Hero />
        <InfoBar />
        <SoftwareGrid />
        <ModelViewer />
        <StudentResults />
        <Instructor />
        <Curriculum />
        <Testimonials />
        <FAQ />
        <Pricing />
        <FinalCTA />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}