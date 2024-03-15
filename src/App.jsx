import { Canvas } from '@react-three/fiber';
import { Interface } from './components/Interface';
import { ModelControl } from './components/ModelControl';
import { Scroll, ScrollControls } from '@react-three/drei';
import Interface02 from './components/Interface02';

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
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>
      <Interface02 />
    </>
  );
}

export default App;
