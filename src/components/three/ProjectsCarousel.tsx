"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Text } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { PROJECTS, type Project } from "@/lib/data";

type DragRefs = {
  rot: React.MutableRefObject<number>;
  vel: React.MutableRefObject<number>;
  dragging: React.MutableRefObject<boolean>;
};

function Card({
  project,
  position,
  rotationY,
}: {
  project: Project;
  position: [number, number, number];
  rotationY: number;
}) {
  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      <RoundedBox args={[2.2, 3, 0.1]} radius={0.12} smoothness={4}>
        <meshStandardMaterial
          color="#0f1118"
          roughness={0.4}
          metalness={0.35}
          emissive="#0b0d16"
        />
      </RoundedBox>
      {/* accent bar */}
      <mesh position={[0, 1.18, 0.06]}>
        <planeGeometry args={[1.7, 0.06]} />
        <meshBasicMaterial color="#6d5cf0" />
      </mesh>
      <Text
        position={[0, 0.7, 0.07]}
        fontSize={0.24}
        maxWidth={1.85}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
        color="#ffffff"
      >
        {project.title}
      </Text>
      <Text
        position={[0, -0.05, 0.07]}
        fontSize={0.115}
        lineHeight={1.35}
        maxWidth={1.85}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
        color="#9aa0b8"
      >
        {project.description.length > 110
          ? project.description.slice(0, 110).trimEnd() + "…"
          : project.description}
      </Text>
      <Text
        position={[0, -1.15, 0.07]}
        fontSize={0.1}
        maxWidth={1.95}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
        color="#6d5cf0"
      >
        {project.tags.join("   ·   ")}
      </Text>
    </group>
  );
}

function Ring({ rot, vel, dragging }: DragRefs) {
  const group = useRef<THREE.Group>(null!);
  const n = PROJECTS.length;
  const radius = 3.6;

  useFrame(() => {
    if (!dragging.current) {
      rot.current += vel.current;
      vel.current *= 0.93;
      rot.current += 0.0018; // gentle idle spin
    }
    if (group.current) group.current.rotation.y = rot.current;
  });

  return (
    <group ref={group}>
      {PROJECTS.map((project, i) => {
        const a = (i / n) * Math.PI * 2;
        return (
          <Card
            key={project.title}
            project={project}
            position={[Math.sin(a) * radius, 0, Math.cos(a) * radius]}
            rotationY={a}
          />
        );
      })}
    </group>
  );
}

export default function ProjectsCarousel() {
  const rot = useRef(0);
  const vel = useRef(0);
  const dragging = useRef(false);
  const lastX = useRef(0);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      const dx = e.clientX - lastX.current;
      lastX.current = e.clientX;
      const d = dx * 0.006;
      rot.current += d;
      vel.current = d;
    };
    const onUp = () => {
      dragging.current = false;
      document.body.style.userSelect = "";
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  const onDown = (e: React.PointerEvent) => {
    dragging.current = true;
    lastX.current = e.clientX;
    vel.current = 0;
    document.body.style.userSelect = "none";
  };

  return (
    <div
      className="tjs-carousel"
      onPointerDown={onDown}
      style={{ touchAction: "pan-y" }}
    >
      <Canvas camera={{ position: [0, 0, 6.4], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={1.3} />
        <directionalLight position={[2, 3, 5]} intensity={2.4} />
        <pointLight position={[-4, 0, 3]} intensity={25} color="#6d5cf0" />
        <Ring rot={rot} vel={vel} dragging={dragging} />
      </Canvas>
      <span className="tjs-hint">drag to explore →</span>
    </div>
  );
}
