/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 compressed.glb --transform
Files: compressed.glb [238.43KB] > /Users/kk/MyDocuments/06_work/Webproduct/meloemo-lp/dev-env/compressed-transformed.glb [242.35KB] (-2%)
*/

import { useLayoutEffect, useRef } from 'react';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export const ModelCDCaseScroll = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('./model/model-cd-case.glb');

  let camera = useThree((state) => state.camera);
  let scene = useThree((state) => state.scene);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    camera.position.set(0.25, 0, 2);
    scene.rotation.set(0, 0, 0);

    let fov = camera.fov;

    fov = (window.innerHeight * 26) / window.innerWidth;
    // fov = (1400 * 18) / window.innerWidth;
    // fov = window.innerHeight / window.innerWidth;
    camera.fov = fov;
    camera.updateProjectionMatrix();

    let mm = gsap.matchMedia();

    mm.add(
      {
        // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
        isDesktop: `(min-width: 48em)`,
        isMobile: `(max-width:48em)`,
      },

      (context) => {
        let { isDesktop, isMobile } = context.conditions;

        const startTl = gsap.timeline({
          defaults: {
            ease: 'power3.inOut',
          },
        });

        startTl
          .fromTo(camera.position, { y: 0 }, { y: 0, duration: 1 })
          .fromTo(scene.rotation, { y: 0 }, { y: 0.4, duration: 1 });

        let t1 = gsap.timeline({
          scrollTrigger: {
            trigger: '#page-top',
            start: 'top top',
            endTrigger: '#feature-scroll-end',
            end: 'center center',
            scrub: 1,
            pin: true,
            pinSpacing: false,
          },
        });

        t1.to(scene.rotation, { x: 2.5, y: 1, z: 0.3 }, 'key1')
          .to(camera.position, { x: 0 }, 'key1')
          .to(scene.rotation, { x: 6.5, y: -0.15, z: 0 }, 'key2')
          .to(camera.position, { x: -0.25 }, 'key2')
          .to(scene.rotation, { x: 0, y: -2.5 }, 'key3')
          .to(camera.position, { x: 0.25 }, 'key3');

        if (isMobile) {
          camera.fov = 20;
          camera.updateProjectionMatrix();
        }

        return () => {
          if (t1) t1.kill();
          if (startTl) startTl.kill();
        };
      },
    );

    camera.position.y = 0.07;
  }, []);

  return (
    <group {...props} dispose={null} ref={group}>
      <mesh
        geometry={nodes.cdCase_closed_shell_down.geometry}
        material={materials.pla}
        position={[0, -0.1, -0.023]}
      />
      <mesh
        geometry={nodes.cdCase_closed_shell_up.geometry}
        material={materials.glass}
        position={[0, -0.1, -0.023]}
      />
      <mesh
        geometry={nodes.cdCase_closed_poster.geometry}
        material={materials.cdCase_closed_poster_Mat}
        position={[0, -0.1, -0.03]}
      />
    </group>
  );
};

useGLTF.preload('./model/model-cd-case.glb');
