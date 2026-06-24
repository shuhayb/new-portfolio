"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, MeshDistortMaterial, Float } from "@react-three/drei";
import { useRef, type MutableRefObject } from "react";
import * as THREE from "three";

type Refs = {
  progress: MutableRefObject<number>;
  mouse: MutableRefObject<{ x: number; y: number }>;
};

function Blob({ progress, mouse }: Refs) {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = progress.current;
    mesh.current.rotation.y = t * 0.1 + mouse.current.x * 0.5;
    mesh.current.rotation.x = mouse.current.y * 0.35;
    // drift the blob down and back as you scroll through the page
    mesh.current.position.y = -p * 1.6;
    mesh.current.position.z = -p * 2.2;
    const s = 1.7 - p * 0.4;
    mesh.current.scale.setScalar(s);
  });

  return (
    <Float speed={1.1} rotationIntensity={0.5} floatIntensity={1.1}>
      <mesh ref={mesh}>
        <sphereGeometry args={[1, 96, 96]} />
        <MeshDistortMaterial
          color="#6d5cf0"
          emissive="#1a1147"
          distort={0.38}
          speed={1.6}
          roughness={0.18}
          metalness={0.55}
        />
      </mesh>
    </Float>
  );
}

function Rig({ mouse }: { mouse: Refs["mouse"] }) {
  useFrame((state) => {
    state.camera.position.x +=
      (mouse.current.x * 0.7 - state.camera.position.x) * 0.04;
    state.camera.position.y +=
      (-mouse.current.y * 0.5 - state.camera.position.y) * 0.04;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Background({ progress, mouse }: Refs) {
  return (
    <Canvas
      className="tjs-canvas"
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[3, 4, 5]} intensity={2.6} color="#ffffff" />
      <pointLight position={[-5, -3, 2]} intensity={40} color="#33d9ff" />
      <Stars
        radius={70}
        depth={45}
        count={3500}
        factor={4}
        saturation={0}
        fade
        speed={0.8}
      />
      <Blob progress={progress} mouse={mouse} />
      <Rig mouse={mouse} />
    </Canvas>
  );
}
