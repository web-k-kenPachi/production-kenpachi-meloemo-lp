import { Canvas } from '@react-three/fiber';
import { ModelControl } from './components/ModelControl';
import {
  OrthographicCamera,
  Preload,
  Scroll,
  ScrollControls,
  View,
} from '@react-three/drei';
import HeroImage from './components/HeroImage';
import { ScrollAnimationSection } from './components/ScrollAnimationSection';
import { ContentSection } from './components/ContentSection';
function App() {
  return (
    <>
      <div className="absolute top-0 -z-10 h-screen w-screen bg-themePink-500"></div>
      <div className="absolute top-0 -z-[1] h-screen w-screen">
        <HeroImage />
      </div>
      <div className="pointer-events-none relative z-50 h-screen w-screen bg-transparent">
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
      </div>
      <ContentSection />
    </>
  );
}

export default App;
