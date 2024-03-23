import { ModelScroll } from './components/ModelScroll';
import HeroImage from './components/HeroImage';
import { ScrollAnimationSection } from './components/ScrollAnimationSection';
import { ContentSection } from './components/ContentSection';
function App() {
  return (
    <>
      <div className="absolute top-0 -z-10 h-[400vh] w-screen bg-themePink-500"></div>
      <HeroImage />
      <ModelScroll />
      <ScrollAnimationSection />
      <ContentSection />
    </>
  );
}

export default App;
