import {
  AdaptiveDpr,
  AdaptiveEvents,
  Environment,
  Float,
  Lightformer,
  OrthographicCamera,
  Preload,
  View,
} from '@react-three/drei';
import { ModelCDCaseScroll } from './ModelCDCaseScroll';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Background } from './Background';

export const ModelScroll = () => {
  return (
    <div
      className="pointer-events-none z-10 h-screen w-screen bg-transparent"
      id="page-top"
    >
      {/* <Background /> */}
      <Canvas>
        <ambientLight intensity={1.1} />
        <spotLight
          position={[1.5, 1, 0]}
          angle={3.5}
          penumbra={1}
          castShadow
          intensity={1}
          shadow-bias={-0.0001}
        />
        <Environment preset="city" />
        <Suspense fallback={null}>
          <Float speed={3} rotationIntensity={2} floatIntensity={0.5}>
            <ModelCDCaseScroll />
          </Float>
        </Suspense>
        <AdaptiveDpr pixelated />
        <Preload all />
      </Canvas>
    </div>
  );
};
