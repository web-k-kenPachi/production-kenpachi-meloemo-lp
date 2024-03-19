import { Canvas, useFrame } from '@react-three/fiber';
import { View, OrthographicCamera, Preload, Sphere } from '@react-three/drei';
import { Background } from '../components/Background';
import * as THREE from 'three';
import BgGrid from '../components/BgGrid';
import Noise from '../components/Noise';

export default function Scene() {
  return (
    <>
      <Noise
        className="absolute h-full w-full overflow-hidden opacity-35"
        style={{
          clipPath: 'inset(2rem 5rem 2rem 5rem round 1rem)',
        }}
      />
      <BgGrid
        className="absolute h-full w-full overflow-hidden opacity-40"
        style={{
          clipPath: 'inset(2rem 5rem 2rem 5rem round 1rem)',
        }}
      />
      <div
        className="absolute z-[-51] h-full w-full overflow-hidden bg-themeYellow-500 "
        style={{
          clipPath: 'inset(2rem 5rem 2rem 5rem round 1rem)',
        }}
      ></div>
      <Canvas
        className="overflow-hidden"
        style={{
          position: 'relative',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          overflow: 'hidden',
          clipPath: 'inset(2rem 5rem 2rem 5rem round 1rem)',
          zIndex: '-50',
        }}
        eventSource={document.body}
      >
        <View.Port />
        <OrthographicCamera makeDefault position={[0, 0, 100]} zoom={1} />
        <Preload all />
      </Canvas>
    </>
  );
}
