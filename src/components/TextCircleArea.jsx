import { Suspense, useLayoutEffect, useRef } from 'react';
import './circle.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Canvas } from '@react-three/fiber';
import {
  AdaptiveDpr,
  AdaptiveEvents,
  Environment,
  Float,
  OrbitControls,
  Preload,
} from '@react-three/drei';
import { ModelCDCase } from './ModelCDCase';

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const TextCircleArea = () => {
  gsap.registerPlugin(useGSAP);

  const circlesText = useRef(null);

  useGSAP(
    () => {
      // gsap.from('.circles__text', { opacity: 0, stagger: 0.1 });
      gsap.set('.circles__text', { transformOrigin: '50% 50%' });
      gsap.set('.circles__text', { opacity: 0 });

      gsap.to('.circles__text', {
        duration: 0.5,
        ease: 'expo',
        rotation: '+=120',
        scale: 0.5,
        opacity: 0.2,
        stagger: {
          amount: -0.15,
        },
      });

      const enterMouseEnterEv = () => {
        gsap.killTweensOf(['.circles__text']);

        gsap.to('.circles__text', {
          duration: 0.5,
          ease: 'expo',
          rotation: '+=120',
          scale: 0.5,
          opacity: 0.2,
          stagger: {
            amount: -0.15,
          },
        });
      };

      const enterMouseLeaveEv = () => {
        gsap.killTweensOf(['.circles__text']);

        gsap.to('.circles__text', {
          duration: 2,
          ease: 'elastic.out(1, 0.4)',
          scale: 1,
          rotation: '-=120',
          opacity: 1,
          stagger: {
            amount: 0.15,
          },
        });
      };
      circlesText.current.addEventListener('mousedown', enterMouseEnterEv);
      circlesText.current.addEventListener('mouseup', enterMouseLeaveEv);
    },
    { scope: circlesText },
  ); // 親のRefをスコープにわたす

  return (
    <div
      className="relative z-20 h-[calc(100vh*2)] w-screen cursor-grab bg-themePink-500 active:cursor-grabbing"
      ref={circlesText}
    >
      <Canvas
        shadows
        camera={{ position: [0, 0, 10], fov: 42 }}
        style={{ zIndex: 100, filter: 'brightness(1.15) saturate(1.25)' }}
      >
        <ambientLight intensity={1.1} />
        {/* <directionalLight color="#fff" position={[-4, 7, 2]} intensity={1} /> */}
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
            <ModelCDCase scale={6} />
          </Float>
        </Suspense>
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <OrbitControls enableZoom={false} />
        <Preload all />
      </Canvas>
      {/* CIRCLE TEXT ART AREA */}
      <svg
        className="circles"
        width="100%"
        height="100%"
        viewBox="0 0 1400 1400"
      >
        <def>
          <path
            id="circle-1"
            d="M250,700.5A450.5,450.5 0 1 11151,700.5A450.5,450.5 0 1 1250,700.5"
          />
          <path
            id="circle-2"
            d="M382,700.5A318.5,318.5 0 1 11019,700.5A318.5,318.5 0 1 1382,700.5"
          />
          <path
            id="circle-3"
            d="M487,700.5A213.5,213.5 0 1 1914,700.5A213.5,213.5 0 1 1487,700.5"
          />
          <path
            id="circle-4"
            d="M567.5,700.5A133,133 0 1 1833.5,700.5A133,133 0 1 1567.5,700.5"
          />
        </def>
        <text className="circles__text circles__text--1">
          <textPath
            className="circles__text-path font-Anton"
            xlinkHref="#circle-1"
            aria-label=""
            textLength="2830"
          >
            Melo-Emo! Touch The Heartstrings&nbsp;
          </textPath>
        </text>
        <text className="circles__text circles__text--2">
          <textPath
            className="circles__text-path  font-NotoSans"
            xlinkHref="#circle-2"
            aria-label=""
            textLength="2001"
          >
            Melo-Emo! Touch The Heartstrings&nbsp;
          </textPath>
        </text>
        <text className="circles__text circles__text--3">
          <textPath
            className="circles__text-path font-KaiseiDecol"
            xlinkHref="#circle-3"
            aria-label=""
            textLength="1341"
          >
            Melo-Emo! Touch The Heartstrings&nbsp;
          </textPath>
        </text>
        <text className="circles__text circles__text--4">
          <textPath
            className="circles__text-path font-DotGothic"
            xlinkHref="#circle-4"
            aria-label=""
            textLength="836"
          >
            Melo-Emo! Touch The Heartstrings&nbsp;
          </textPath>
        </text>
      </svg>
    </div>
  );
};
