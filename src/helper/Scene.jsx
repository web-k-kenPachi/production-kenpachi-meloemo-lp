import { Canvas, useFrame } from '@react-three/fiber';
import { View, OrthographicCamera, Preload, Sphere } from '@react-three/drei';
import { Background } from '../components/Background';
import * as THREE from 'three';
import BgGrid from '../components/BgGrid';
import Noise from '../components/Noise';
import { motion } from 'framer-motion';

export default function Scene() {
  return (
    <>
      <Noise
        className="absolute h-full w-full overflow-hidden opacity-35"
        style={{
          clipPath: 'inset(2rem 5rem 2rem 5rem round 1rem)',
        }}
      />
      {/* <BgGrid
        className="absolute h-full w-full overflow-hidden opacity-40"
        style={{
          clipPath: 'inset(2rem 5rem 2rem 5rem round 1rem)',
        }}
      /> */}
      <div
        className="absolute z-10 h-full w-full  overflow-hidden mix-blend-difference"
        style={{
          clipPath: 'inset(2rem 5rem 2rem 5rem round 1rem)',
        }}
      >
        <motion.div
          className="absolute ml-[5rem] mt-[2rem] flex h-full items-start justify-center text-nowrap font-DotGothic text-[30vw] font-bold text-white"
          animate={{
            x: ['0%', '-50%'],
            transition: {
              ease: 'linear',
              duration: 30,
              repeat: Infinity,
            },
          }}
        >
          <div className="w-[50%] flex-shrink-0">
            <div className="flex h-full flex-col items-center justify-center">
              Melo-Emo! Touch the Heartstrings
            </div>
          </div>
          <div className="w-[50%] flex-shrink-0">
            <div className="flex h-full flex-col items-center justify-center">
              Melo-Emo! Touch the Heartstrings
            </div>
          </div>
        </motion.div>
      </div>
      <div
        className="absolute z-[-51] h-full w-full overflow-hidden bg-themeYellow-500 "
        style={{
          clipPath: 'inset(2rem 5rem 2rem 5rem round 1rem)',
        }}
      ></div>
      <Canvas
        className="overflow-hidden blur-[1px]"
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
