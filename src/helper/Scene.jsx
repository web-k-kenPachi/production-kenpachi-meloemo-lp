import { Canvas, useFrame } from '@react-three/fiber';
import { View, OrthographicCamera, Preload, Sphere } from '@react-three/drei';
import { Background } from '../components/Background';
import * as THREE from 'three';
import { useRef } from 'react';

export default function Scene() {
  return (
    <>
      <Canvas
        className="overflow-hidden rounded-2xl px-20 py-8"
        style={{
          position: 'relative',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: '10',
          overflow: 'hidden',
          borderRadius: '2rem',
        }}
        eventSource={document.body}
      >
        <View.Port />
        <OrthographicCamera makeDefault position={[0, 0, 300]} zoom={1} />
        <Preload all />
      </Canvas>
    </>
  );
}
