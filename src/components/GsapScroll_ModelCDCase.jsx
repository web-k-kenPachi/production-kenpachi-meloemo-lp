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

export const ModelCDCase = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('./model/compressed-transformed.glb');

  let camera = useThree((state) => state.camera);
  let scene = useThree((state) => state.scene);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    camera.position.set(0.21, 5, 2);
    scene.rotation.set(0, 0, 0);

    let fov = camera.fov;

    fov = (1400 * 18) / window.innerWidth;
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
        // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
        let { isDesktop, isMobile } = context.conditions;

        const startTl = gsap.timeline({
          defaults: {
            ease: 'power3.inOut',
          },
        });

        startTl
          .fromTo(camera.position, { y: 5 }, { y: 0.05, duration: 1 })
          .fromTo(scene.rotation, { y: 0 }, { y: 0.4, duration: 1 });

        let t1 = gsap.timeline({
          scrollTrigger: {
            trigger: '#page-top',
            start: 'top top',
            endTrigger: '#feature-scroll-end',
            end: 'top bottom',
            scrub: 1,
            // markers: true,
          },
        });

        t1.to(scene.rotation, { y: -1 })
          // .to(camera.position, { x: -0.3 })
          .to(scene.rotation, { y: -1.8 }, 'key1')
          // .to(camera.position, { x: +0 }, 'key1')
          // .to(scene.rotation, { z: 1.58 }, 'key1')
          // .to(camera.position, { z: 4 }, 'key1')
          .to(scene.rotation, { y: 3.5 }, 'key2');
        // .to(camera.position, { z: +2 }, 'key2')

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

    // camera.position.y = 0.07
  }, []);

  return (
    <group {...props} dispose={null} ref={group}>
      {/* <PerspectiveCamera
        far={2}
        near={100}
        fov={0}
        position={[0,0,0]}
        rotation={[0, 0, 0]}
      /> */}
      <mesh
        geometry={nodes.cdCase_closed_shell_down.geometry}
        material={materials.pla}
      />
      <mesh
        geometry={nodes.cdCase_closed_shell_up.geometry}
        material={materials.glass}
      />
      <mesh
        geometry={nodes.cdCase_closed_blackDisc.geometry}
        material={materials.cdCase_closed_blackPlastic_Mat}
      />
      <mesh
        geometry={nodes.cdCase_closed_poster.geometry}
        material={materials.cdCase_closed_poster_Mat}
      />
    </group>
  );
};

useGLTF.preload('./model/compressed-transformed.glb');
