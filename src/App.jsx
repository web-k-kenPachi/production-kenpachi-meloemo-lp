import { ModelScroll } from './components/ModelScroll';
import HeroImage from './components/HeroImage';
import { ScrollAnimationSection } from './components/ScrollAnimationSection';
import { ContentSection } from './components/ContentSection';
function App() {
  return (
    <>
      <div className="absolute top-0 -z-10 h-[400vh] w-screen bg-themePink-500"></div>
      <div className="absolute top-0 -z-[1] h-screen w-screen">
        <HeroImage />
      </div>
      {/* <div className="pointer-events-none relative z-50 h-screen w-screen bg-transparent">
        <Canvas
          shadows
          camera={{ position: [0, 3, 10], fov: 42 }}
          style={{ zIndex: 100 }}
        >
          <ScrollControls pages={4} damping={0.01}>
            <ModelControl />
            <Scroll></Scroll>
            <Scroll html>
              <ScrollAnimationSection />
            </Scroll>
          </ScrollControls>
          <Preload all />
        </Canvas>
      </div> */}
      <ModelScroll />
      <ScrollAnimationSection />
      <div className="z-50 relative">
        <ContentSection />
      </div>
    </>
  );
}

export default App;
