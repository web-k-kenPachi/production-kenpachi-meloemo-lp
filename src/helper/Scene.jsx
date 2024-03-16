import { Canvas, useFrame } from '@react-three/fiber';
import { View, OrthographicCamera, Preload, Sphere } from '@react-three/drei';
import { Background } from '../components/Background';
import * as THREE from 'three';
import { useRef } from 'react';

export default function Scene() {
  return (
    <>
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
