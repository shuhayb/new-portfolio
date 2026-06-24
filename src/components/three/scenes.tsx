"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sparkles, Text } from "@react-three/drei";
import * as THREE from "three";
import { PROJECTS, type Project } from "@/lib/data";

type Vec3 = [number, number, number];
type SceneProps = { position: Vec3 };

/* ------------------------------------------------------------------ */
/* shared helpers                                                      */
/* ------------------------------------------------------------------ */

function Ground({
  color,
  y = 0,
  metalness = 0,
  roughness = 1,
  size = 38,
}: {
  color: string;
  y?: number;
  metalness?: number;
  roughness?: number;
  size?: number;
}) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, y, 0]} receiveShadow>
      <planeGeometry args={[size, size]} />
      <meshStandardMaterial
        color={color}
        metalness={metalness}
        roughness={roughness}
      />
    </mesh>
  );
}

function Glow({
  position,
  color,
  scale = 1,
  intensity = 2,
}: {
  position: Vec3;
  color: string;
  scale?: number;
  intensity?: number;
}) {
  return (
    <group position={position}>
      <mesh scale={scale}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
      <pointLight color={color} intensity={intensity} distance={30} />
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* 1. Bangladesh                                                       */
/* ------------------------------------------------------------------ */

function PalmTree({ position, scale = 1 }: { position: Vec3; scale?: number }) {
  const fronds = Array.from({ length: 7 });
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 1.6, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.22, 3.2, 6]} />
        <meshStandardMaterial color="#6b4f2a" roughness={1} />
      </mesh>
      <group position={[0, 3.2, 0]}>
        {fronds.map((_, i) => {
          const a = (i / fronds.length) * Math.PI * 2;
          return (
            <mesh
              key={i}
              rotation={[Math.PI / 3, a, 0]}
              position={[Math.cos(a) * 0.3, 0, Math.sin(a) * 0.3]}
            >
              <coneGeometry args={[0.28, 2.2, 4]} />
              <meshStandardMaterial color="#3f7d3a" roughness={1} />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}

function Boat({ position }: { position: Vec3 }) {
  return (
    <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.4}>
      <group position={position} rotation={[0, 0.5, 0]}>
        <mesh castShadow>
          <boxGeometry args={[3.4, 0.5, 1.1]} />
          <meshStandardMaterial color="#7a5230" roughness={0.9} />
        </mesh>
        <mesh position={[1.8, 0.15, 0]} rotation={[0, 0, 0.4]}>
          <boxGeometry args={[0.9, 0.4, 1.1]} />
          <meshStandardMaterial color="#7a5230" roughness={0.9} />
        </mesh>
        <mesh position={[-1.8, 0.15, 0]} rotation={[0, 0, -0.4]}>
          <boxGeometry args={[0.9, 0.4, 1.1]} />
          <meshStandardMaterial color="#7a5230" roughness={0.9} />
        </mesh>
        <mesh position={[0, 1.4, 0]}>
          <boxGeometry args={[1.6, 0.05, 1]} />
          <meshStandardMaterial color="#caa46a" roughness={1} />
        </mesh>
        <mesh position={[0, 0.9, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 1, 6]} />
          <meshStandardMaterial color="#5a3d22" />
        </mesh>
      </group>
    </Float>
  );
}

function Hills({ z }: { z: number }) {
  const hills = [
    [-18, 0, "#caa05f"],
    [-6, 0, "#b78d4f"],
    [8, 0, "#caa05f"],
    [20, 0, "#b88f52"],
  ] as const;
  return (
    <group position={[0, 0, z]}>
      {hills.map(([x, , c], i) => (
        <mesh key={i} position={[x, 1.5, 0]}>
          <coneGeometry args={[7 + (i % 2) * 2, 5, 5]} />
          <meshStandardMaterial color={c as string} roughness={1} />
        </mesh>
      ))}
    </group>
  );
}

function River() {
  const mat = useRef<THREE.MeshStandardMaterial>(null!);
  useFrame((state) => {
    if (mat.current)
      mat.current.opacity = 0.85 + Math.sin(state.clock.elapsedTime) * 0.05;
  });
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
      <planeGeometry args={[40, 40]} />
      <meshStandardMaterial
        ref={mat}
        color="#2f7e84"
        metalness={0.6}
        roughness={0.2}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

export function Bangladesh({ position }: SceneProps) {
  return (
    <group position={position}>
      <River />
      <Hills z={-19} />
      <Glow position={[9, 8, -18]} color="#ffb55e" scale={2.6} intensity={3} />
      <pointLight position={[6, 12, 0]} intensity={3} distance={34} color="#ffcf9e" />
      <pointLight position={[-8, 6, 4]} intensity={1.4} distance={26} color="#ffe3b0" />
      <group position={[0, 0, -2]}>
        <PalmTree position={[-7, 0, -6]} scale={1.1} />
        <PalmTree position={[-9, 0, -10]} scale={0.9} />
        <PalmTree position={[8, 0, -8]} scale={1.2} />
      </group>
      <Boat position={[0, 0.3, 2]} />
      <Boat position={[-5, 0.3, -3]} />
      <Sparkles
        count={40}
        scale={[30, 8, 20]}
        position={[0, 4, -8]}
        size={3}
        color="#ffe7b0"
        speed={0.3}
      />
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* 2. London                                                           */
/* ------------------------------------------------------------------ */

function DoubleDecker({ position }: { position: Vec3 }) {
  return (
    <group position={position}>
      <mesh position={[0, 1.4, 0]} castShadow>
        <boxGeometry args={[5.5, 2.8, 2.2]} />
        <meshStandardMaterial color="#c0392b" roughness={0.5} metalness={0.2} />
      </mesh>
      {/* windows */}
      <mesh position={[0, 2.2, 1.12]}>
        <planeGeometry args={[5, 0.7]} />
        <meshStandardMaterial color="#dfe9f2" emissive="#9fb8cc" />
      </mesh>
      <mesh position={[0, 1.1, 1.12]}>
        <planeGeometry args={[5, 0.6]} />
        <meshStandardMaterial color="#dfe9f2" emissive="#9fb8cc" />
      </mesh>
      {[-1.8, 1.8].map((x) => (
        <mesh key={x} position={[x, 0.35, 1.05]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 16]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
      ))}
    </group>
  );
}

function PhoneBox({ position }: { position: Vec3 }) {
  return (
    <group position={position}>
      <mesh position={[0, 1.3, 0]} castShadow>
        <boxGeometry args={[1, 2.6, 1]} />
        <meshStandardMaterial color="#b32b1f" roughness={0.5} />
      </mesh>
      <mesh position={[0, 1.5, 0.51]}>
        <planeGeometry args={[0.7, 1.6]} />
        <meshStandardMaterial color="#ffeaa0" emissive="#ffd766" emissiveIntensity={1.2} />
      </mesh>
      <mesh position={[0, 2.75, 0]}>
        <boxGeometry args={[1.1, 0.3, 1.1]} />
        <meshStandardMaterial color="#8f2117" />
      </mesh>
    </group>
  );
}

function ClockTower({ position }: { position: Vec3 }) {
  return (
    <group position={position}>
      <mesh position={[0, 9, 0]}>
        <boxGeometry args={[3, 18, 3]} />
        <meshStandardMaterial color="#6d6450" roughness={1} />
      </mesh>
      <mesh position={[0, 16, 1.55]}>
        <circleGeometry args={[1, 24]} />
        <meshStandardMaterial color="#f3ecd2" emissive="#d8c98a" emissiveIntensity={0.6} />
      </mesh>
      <mesh position={[0, 19, 0]}>
        <coneGeometry args={[2.2, 4, 4]} />
        <meshStandardMaterial color="#574f3e" />
      </mesh>
    </group>
  );
}

function StreetLamp({ position }: { position: Vec3 }) {
  return (
    <group position={position}>
      <mesh position={[0, 2, 0]}>
        <cylinderGeometry args={[0.08, 0.12, 4, 8]} />
        <meshStandardMaterial color="#2b2b2b" />
      </mesh>
      <Glow position={[0, 4.1, 0]} color="#ffd98a" scale={0.28} intensity={2.5} />
    </group>
  );
}

function Rain() {
  const ref = useRef<THREE.Points>(null!);
  const count = 1200;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 60;
      arr[i * 3 + 1] = Math.random() * 30;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return arr;
  }, []);
  useFrame(() => {
    const pos = ref.current.geometry.attributes.position
      .array as Float32Array;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] -= 0.6;
      if (pos[i * 3 + 1] < 0) pos[i * 3 + 1] = 30;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#aeb9c6" size={0.06} transparent opacity={0.6} />
    </points>
  );
}

export function London({ position }: SceneProps) {
  return (
    <group position={position}>
      <Ground color="#33373d" metalness={0.4} roughness={0.35} />
      <pointLight position={[0, 13, 2]} intensity={2.4} distance={36} color="#bcc7d4" />
      <pointLight position={[-6, 6, -10]} intensity={1.2} distance={24} color="#9fb0c2" />
      <ClockTower position={[-13, 0, -16]} />
      <DoubleDecker position={[6, 0, -6]} />
      <PhoneBox position={[-5, 0, 1]} />
      <StreetLamp position={[3, 0, 4]} />
      <StreetLamp position={[-9, 0, -4]} />
      <Rain />
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Tech bedroom (with the projects carousel)                        */
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
          emissiveIntensity={0.8}
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
        color="#6d5cf0"
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
  const radius = 2.7;

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

function RGBStrip() {
  const light = useRef<THREE.PointLight>(null!);
  const mat = useRef<THREE.MeshBasicMaterial>(null!);
  const col = useMemo(() => new THREE.Color(), []);
  useFrame((state) => {
    const h = (state.clock.elapsedTime * 0.08) % 1;
    col.setHSL(h, 0.8, 0.55);
    if (light.current) light.current.color.copy(col);
    if (mat.current) mat.current.color.copy(col);
  });
  return (
    <group>
      <mesh position={[0, 3.4, -5.4]}>
        <planeGeometry args={[10, 0.12]} />
        <meshBasicMaterial ref={mat} toneMapped={false} />
      </mesh>
      <pointLight ref={light} position={[0, 3, -4]} intensity={3} distance={18} />
    </group>
  );
}

export function Bedroom({ position }: SceneProps) {
  return (
    <group position={position}>
      {/* room shell */}
      <Ground color="#15151d" roughness={0.9} />
      <mesh position={[0, 4, -6]} receiveShadow>
        <planeGeometry args={[24, 12]} />
        <meshStandardMaterial color="#1b1b27" roughness={1} />
      </mesh>
      <mesh position={[-8, 4, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[24, 12]} />
        <meshStandardMaterial color="#181822" roughness={1} />
      </mesh>
      {/* window */}
      <mesh position={[5.5, 4, -5.9]}>
        <planeGeometry args={[4, 3] } />
        <meshStandardMaterial color="#0a1430" emissive="#16224d" emissiveIntensity={0.7} />
      </mesh>
      <Sparkles
        count={30}
        scale={[3.6, 2.6, 0.5]}
        position={[5.5, 4, -5.7]}
        size={2}
        color="#9fc0ff"
        speed={0.2}
      />
      {/* desk */}
      <mesh position={[0, 1, -4.4]} castShadow>
        <boxGeometry args={[6, 0.18, 1.6]} />
        <meshStandardMaterial color="#26222b" roughness={0.7} />
      </mesh>
      {[-2.7, 2.7].map((x) => (
        <mesh key={x} position={[x, 0.45, -4.4]}>
          <boxGeometry args={[0.18, 1.1, 1.4]} />
          <meshStandardMaterial color="#1c1920" />
        </mesh>
      ))}
      {/* keyboard */}
      <mesh position={[0, 1.12, -3.9]}>
        <boxGeometry args={[1.6, 0.05, 0.5]} />
        <meshStandardMaterial color="#0e0e14" emissive="#3b2a5e" emissiveIntensity={0.5} />
      </mesh>
      {/* desk lamp glow */}
      <Glow position={[-2.4, 2.4, -4.2]} color="#ffd27a" scale={0.16} intensity={2} />
      <RGBStrip />
      <pointLight position={[0, 4, 0]} intensity={0.7} distance={20} color="#8a93c0" />
      {/* the projects carousel hovering above the desk */}
      <ProjectsCarousel3D position={[0, 2.4, -1.2]} />
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* 4. PlayStation / game                                               */
/* ------------------------------------------------------------------ */

function NeonTube({ position, color }: { position: Vec3; color: string }) {
  return (
    <group position={position}>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.06, 0.06, 5, 8]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
      <pointLight color={color} intensity={2} distance={14} />
    </group>
  );
}

function Controller({ position }: { position: Vec3 }) {
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
      <group position={position} rotation={[0.3, 0.4, 0]} scale={1.4}>
        <mesh>
          <boxGeometry args={[1.4, 0.4, 0.9]} />
          <meshStandardMaterial color="#e9eaf0" roughness={0.4} metalness={0.3} />
        </mesh>
        {[-0.7, 0.7].map((x) => (
          <mesh key={x} position={[x, -0.1, 0.2]} rotation={[0.3, 0, 0]}>
            <cylinderGeometry args={[0.22, 0.18, 0.7, 12]} />
            <meshStandardMaterial color="#e9eaf0" roughness={0.4} />
          </mesh>
        ))}
        {[-0.35, 0.35].map((x) => (
          <mesh key={x} position={[x, 0.22, 0.2]}>
            <cylinderGeometry args={[0.12, 0.12, 0.1, 16]} />
            <meshStandardMaterial color="#15151c" />
          </mesh>
        ))}
        <mesh position={[0, 0.22, -0.1]}>
          <boxGeometry args={[0.5, 0.06, 0.18]} />
          <meshBasicMaterial color="#33d9ff" toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
}

function GameIcon({ position, color }: { position: Vec3; color: string }) {
  return (
    <Float speed={1.6} rotationIntensity={1} floatIntensity={1.4}>
      <mesh position={position}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          roughness={0.3}
        />
      </mesh>
    </Float>
  );
}

export function PlayStationScene({ position }: SceneProps) {
  return (
    <group position={position}>
      <Ground color="#0a0a12" roughness={0.6} metalness={0.3} />
      <mesh position={[0, 4, -6]}>
        <planeGeometry args={[26, 12]} />
        <meshStandardMaterial color="#0c0c16" roughness={1} />
      </mesh>
      <pointLight position={[0, 4, 2]} intensity={0.6} distance={20} color="#5566aa" />
      {/* media unit */}
      <mesh position={[0, 0.6, -5]}>
        <boxGeometry args={[7, 1.2, 1]} />
        <meshStandardMaterial color="#15151f" roughness={0.6} />
      </mesh>
      {/* big TV */}
      <mesh position={[0, 3.2, -5.4]}>
        <boxGeometry args={[7.2, 4, 0.2]} />
        <meshStandardMaterial color="#05050a" />
      </mesh>
      <mesh position={[0, 3.2, -5.28]}>
        <planeGeometry args={[6.7, 3.6]} />
        <meshStandardMaterial
          color="#0a1840"
          emissive="#1b3a8c"
          emissiveIntensity={1.1}
        />
      </mesh>
      <Text
        position={[0, 3.2, -5.2]}
        fontSize={0.7}
        anchorX="center"
        anchorY="middle"
        color="#7fd4ff"
      >
        PLAY
      </Text>
      <NeonTube position={[-6, 5, -5.5]} color="#ff3ea5" />
      <NeonTube position={[6, 2, -5.5]} color="#33d9ff" />
      <Controller position={[0, 1.6, -1.5]} />
      <GameIcon position={[-3.5, 2.5, -2]} color="#ff3ea5" />
      <GameIcon position={[3.5, 3, -2]} color="#33d9ff" />
      <GameIcon position={[-2, 4, -3]} color="#ffd23e" />
      <Sparkles
        count={50}
        scale={[16, 8, 8]}
        position={[0, 4, -3]}
        size={2.5}
        color="#7fd4ff"
        speed={0.4}
      />
    </group>
  );
}
