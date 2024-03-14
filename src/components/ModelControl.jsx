import { Environment, Lightformer } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import { Compressed } from './Compressed';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

const Container = (props) => {
  const { children } = props;

  return (
    <div className="fixed top-0 z-50 h-screen w-screen bg-transparent brightness-150">
      {children}
    </div>
  );
};

export const ModelControl = () => {
  return (
    <>
      <Container>
        <Canvas camera={{ position: [0, 0, 1], fov: 30 }}>
          <ambientLight intensity={0.4} />
          <directionalLight
            color="rgba(255, 255, 255, 0.931)"
            position={[0, 1, 10]}
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
          <Suspense>
            <Compressed scale={1} />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </Container>
    </>
  );
};
