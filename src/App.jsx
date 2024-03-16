import { Canvas } from '@react-three/fiber';
import { Interface } from './components/Interface';
import { ModelControl } from './components/ModelControl';
import {
  OrthographicCamera,
  Preload,
  Scroll,
  ScrollControls,
  View,
} from '@react-three/drei';
import Interface02 from './components/Interface02';
import InterfaceTest from './components/InterfacTest';
import HeroImage from './components/HeroImage';
function App() {
  return (
    <>
      <div className="pointer-events-none z-10 h-screen w-screen bg-transparent">
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          <ScrollControls pages={6} damping={0.1}>
            <ModelControl />
            <Scroll></Scroll>
            <Scroll html>
              <Interface />
              {/* <InterfaceTest /> */}
            </Scroll>
          </ScrollControls>
          <Preload all />
        </Canvas>
      </div>
      <Interface02 />
      <div className="absolute top-0 -z-[1] h-screen w-screen">
        <HeroImage />
      </div>
    </>
  );
}

export default App;
