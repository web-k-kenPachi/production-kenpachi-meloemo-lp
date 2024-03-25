import { ModelScroll } from './components/ModelScroll';
import HeroImage from './components/HeroImage';
import { SectionScrollAnimation } from './components/SectionScrollAnimation';
import { SectionContent } from './components/SectionContent';
function App() {
  return (
    <>
      <div className="absolute top-0 -z-10 h-[400vh] w-screen bg-themePink-500"></div>
      <HeroImage />
      <ModelScroll />
      <SectionScrollAnimation />
      <SectionContent />
    </>
  );
}

export default App;
