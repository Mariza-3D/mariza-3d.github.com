import { lazy, Suspense } from 'react';
import BackToTop from './components/BackToTop';
import Navigation from './components/Navigation';
import SectionErrorBoundary from './components/SectionErrorBoundary';

import Curriculum from './sections/Curriculum';
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import InfoBar from './sections/InfoBar';
import Instructor from './sections/Instructor';
import Pricing from './sections/Pricing';
import SoftwareGrid from './sections/SoftwareGrid';
import StudentResults from './sections/StudentResults';
import Testimonials from './sections/Testimonials';

const ModelViewer = lazy(() => import('./sections/ModelViewer'));

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#0b0f18] text-white">
      <Navigation />
      <main>
        <Hero />
        <InfoBar />
        <SoftwareGrid />
        <SectionErrorBoundary
          fallback={
            <section id="models" className="mx-auto max-w-[1200px] px-4 py-24 text-center text-[#d8deea]">
              3D модельдер азыр жүктөлгөн жок, бирок курс программасы жана баалар төмөндө жеткиликтүү.
            </section>
          }
        >
          <Suspense fallback={<div className="mx-auto max-w-[1200px] px-4 py-24 text-center text-[#d8deea]">3D модельдер жүктөлүүдө...</div>}>
            <ModelViewer />
          </Suspense>
        </SectionErrorBoundary>
        <StudentResults />
        <Instructor />
        <Curriculum />
        <Testimonials />
        <FAQ />
        <Pricing />
        <FinalCTA />
        <Footer />
        <BackToTop />
      </main>
    </div>
  );
}
