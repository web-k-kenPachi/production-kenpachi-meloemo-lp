import {
  AdaptiveDpr,
  AdaptiveEvents,
  Environment,
  Lightformer,
} from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import { ModelCDCase } from './ModelCDCase';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

const Container = (props) => {
  const { children } = props;

  return (
    <div className="pointer-events-none fixed top-0 z-10 h-screen w-screen bg-transparent brightness-150">
      {children}
    </div>
  );
};

export const ModelControl = () => {
  return (
    <Container>
      <Canvas camera={{ fov: 14 }} style={{ pointerEvents: 'none' }}>
        <ambientLight intensity={0.4} />
        <directionalLight
          color="#ffffff"
          position={[0, 1, 4]}
          intensity={0.5}
        />
        <spotLight
          position={[0, 0, -5]}
          angle={-1.3}
          penumbra={1}
          castShadow
          intensity={10}
          shadow-bias={-0.0001}
        />
        {/* <Environment preset="warehouse" /> */}
        <Suspense fallback={null}>
          <ModelCDCase />
        </Suspense>
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        {/* <OrbitControls enableZoom={false} /> */}
      </Canvas>
    </Container>
  );
};
