"use client";

import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture, RoundedBox, Text, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { PROJECTS, type Project } from "@/lib/data";

type Vec3 = [number, number, number];
type SceneProps = { position: Vec3 };

/* ------------------------------------------------------------------ */
/* realistic image backdrop                                            */
/* ------------------------------------------------------------------ */

function Backdrop({
  url,
  position = [0, 4, 0],
  size = [22, 14],
}: {
  url: string;
  position?: Vec3;
  size?: [number, number];
}) {
  const tex = useTexture(url);
  tex.colorSpace = THREE.SRGBColorSpace;
  return (
    <mesh position={position}>
      <planeGeometry args={size} />
      <meshBasicMaterial map={tex} toneMapped={false} />
    </mesh>
  );
}

/* ------------------------------------------------------------------ */
/* projects carousel (lives in the bedroom)                            */
/* ------------------------------------------------------------------ */

function ProjectScreen({
  project,
  position,
  rotationY,
}: {
  project: Project;
  position: Vec3;
  rotationY: number;
}) {
  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      <RoundedBox args={[2.1, 1.35, 0.08]} radius={0.05} smoothness={3}>
        <meshStandardMaterial color="#0b0f1c" roughness={0.4} metalness={0.3} />
      </RoundedBox>
      <mesh position={[0, 0, 0.05]}>
        <planeGeometry args={[1.98, 1.23]} />
        <meshStandardMaterial
          color="#0b1020"
          emissive="#1b2440"
          emissiveIntensity={0.9}
        />
      </mesh>
      <mesh position={[0, 0.5, 0.06]}>
        <planeGeometry args={[1.9, 0.05]} />
        <meshBasicMaterial color="#6d5cf0" toneMapped={false} />
      </mesh>
      <Text
        position={[0, 0.28, 0.07]}
        fontSize={0.16}
        maxWidth={1.8}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
        color="#ffffff"
      >
        {project.title}
      </Text>
      <Text
        position={[0, -0.05, 0.07]}
        fontSize={0.075}
        lineHeight={1.35}
        maxWidth={1.8}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
        color="#9aa0b8"
      >
        {project.description.length > 90
          ? project.description.slice(0, 90).trimEnd() + "…"
          : project.description}
      </Text>
      <Text
        position={[0, -0.5, 0.07]}
        fontSize={0.07}
        maxWidth={1.9}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
        color="#8b7bff"
      >
        {project.tags.join("  ·  ")}
      </Text>
    </group>
  );
}

function ProjectsCarousel3D({ position }: { position: Vec3 }) {
  const group = useRef<THREE.Group>(null!);
  const rot = useRef(0);
  const vel = useRef(0);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const n = PROJECTS.length;
  const radius = 2.2;

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
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  useFrame(() => {
    if (!dragging.current) {
      rot.current += vel.current;
      vel.current *= 0.93;
      rot.current += 0.0016;
    }
    if (group.current) group.current.rotation.y = rot.current;
  });

  return (
    <group position={position}>
      <pointLight position={[0, 0, 3]} intensity={1.2} distance={12} color="#8b7bff" />
      <group
        ref={group}
        onPointerDown={(e) => {
          e.stopPropagation();
          dragging.current = true;
          lastX.current = e.nativeEvent.clientX;
          vel.current = 0;
        }}
      >
        {PROJECTS.map((project, i) => {
          const a = (i / n) * Math.PI * 2;
          return (
            <ProjectScreen
              key={project.title}
              project={project}
              position={[Math.sin(a) * radius, 0, Math.cos(a) * radius]}
              rotationY={a}
            />
          );
        })}
      </group>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* the four locations                                                  */
/* ------------------------------------------------------------------ */

export function Bangladesh({ position }: SceneProps) {
  return (
    <group position={position}>
      <Backdrop url="/scenes/bangladesh.jpg" />
      <Sparkles
        count={36}
        scale={[20, 10, 6]}
        position={[0, 5, 4]}
        size={3}
        color="#ffe7b0"
        speed={0.25}
        opacity={0.6}
      />
    </group>
  );
}

export function London({ position }: SceneProps) {
  return (
    <group position={position}>
      <Backdrop url="/scenes/london.jpg" />
      <Sparkles
        count={60}
        scale={[20, 12, 6]}
        position={[0, 5, 4]}
        size={1.6}
        color="#c8d2dc"
        speed={0.5}
        opacity={0.4}
      />
    </group>
  );
}

export function Bedroom({ position }: SceneProps) {
  return (
    <group position={position}>
      <Backdrop url="/scenes/bedroom.jpg" />
      <ProjectsCarousel3D position={[0, 3.5, 5]} />
    </group>
  );
}

export function PlayStationScene({ position }: SceneProps) {
  return (
    <group position={position}>
      <Backdrop url="/scenes/playstation.jpg" />
      <Sparkles
        count={50}
        scale={[20, 10, 6]}
        position={[0, 5, 4]}
        size={2.4}
        color="#7fd4ff"
        speed={0.4}
        opacity={0.6}
      />
    </group>
  );
}
