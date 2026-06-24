"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Text, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { PROJECTS, type Project } from "@/lib/data";

type Vec3 = [number, number, number];
type AreaProps = { position: Vec3 };

/* ------------------------------------------------------------------ */
/* shared animated wireframe shape                                     */
/* ------------------------------------------------------------------ */

function WireShape({
  children,
  position,
  color,
  speed = 0.3,
  scale = 1,
}: {
  children: ReactNode;
  position: Vec3;
  color: string;
  speed?: number;
  scale?: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * speed;
    ref.current.rotation.y = t * speed * 0.7;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.1}>
      <mesh ref={ref} position={position} scale={scale}>
        {children}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.55}
          wireframe
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>
    </Float>
  );
}

/* ------------------------------------------------------------------ */
/* 1. Home — floating wireframe shapes                                 */
/* ------------------------------------------------------------------ */

export function HomeArea({ position }: AreaProps) {
  return (
    <group position={position}>
      <pointLight position={[0, 5, 6]} intensity={1.2} distance={28} color="#8b7bff" />
      <WireShape position={[0, 4, -1]} color="#8b7bff" scale={2.4} speed={0.18}>
        <icosahedronGeometry args={[1, 1]} />
      </WireShape>
      <WireShape position={[-5.5, 6, -4]} color="#33d9ff" scale={1.1} speed={0.4}>
        <torusGeometry args={[1, 0.34, 12, 28]} />
      </WireShape>
      <WireShape position={[5.5, 2.5, -3]} color="#ff6ad5" scale={1.2} speed={0.3}>
        <octahedronGeometry args={[1, 0]} />
      </WireShape>
      <WireShape position={[3.4, 6.4, -5]} color="#ffd23e" scale={0.7} speed={0.5}>
        <tetrahedronGeometry args={[1, 0]} />
      </WireShape>
      <Sparkles
        count={60}
        scale={[24, 14, 10]}
        position={[0, 4, -2]}
        size={2.4}
        color="#cfd2ff"
        speed={0.3}
      />
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Projects — horizontal drag carousel                              */
/* ------------------------------------------------------------------ */

function ProjectCard({ project }: { project: Project }) {
  return (
    <group>
      <RoundedBox args={[2.7, 3.4, 0.12]} radius={0.1} smoothness={4}>
        <meshStandardMaterial
          color="#0d1120"
          roughness={0.4}
          metalness={0.3}
          emissive="#0a0e1c"
        />
      </RoundedBox>
      <mesh position={[0, 1.45, 0.07]}>
        <planeGeometry args={[2.4, 0.06]} />
        <meshBasicMaterial color="#8b7bff" toneMapped={false} />
      </mesh>
      <Text
        position={[0, 1, 0.08]}
        fontSize={0.22}
        maxWidth={2.3}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
        color="#ffffff"
      >
        {project.title}
      </Text>
      <Text
        position={[0, 0.05, 0.08]}
        fontSize={0.105}
        lineHeight={1.4}
        maxWidth={2.3}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
        color="#9aa0b8"
      >
        {project.description}
      </Text>
      <Text
        position={[0, -1.3, 0.08]}
        fontSize={0.095}
        maxWidth={2.4}
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

export function ProjectsArea({ position }: AreaProps) {
  const group = useRef<THREE.Group>(null!);
  const cardRefs = useRef<(THREE.Group | null)[]>([]);
  const offset = useRef(0);
  const target = useRef(0);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const n = PROJECTS.length;
  const spacing = 3.5;

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      const dx = e.clientX - lastX.current;
      lastX.current = e.clientX;
      offset.current += dx * 0.013;
    };
    const onUp = () => {
      if (!dragging.current) return;
      dragging.current = false;
      const idx = THREE.MathUtils.clamp(
        Math.round(-offset.current / spacing),
        0,
        n - 1
      );
      target.current = -idx * spacing;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [n]);

  useFrame(() => {
    if (!dragging.current) {
      offset.current += (target.current - offset.current) * 0.12;
    }
    if (group.current) group.current.position.x = offset.current;
    cardRefs.current.forEach((m, i) => {
      if (!m) return;
      const cx = i * spacing + offset.current;
      const k = Math.abs(cx);
      const s = THREE.MathUtils.clamp(1 - k * 0.13, 0.72, 1);
      m.scale.setScalar(s);
      m.position.z = -k * 0.7;
      m.rotation.y = THREE.MathUtils.clamp(-cx * 0.12, -0.5, 0.5);
    });
  });

  return (
    <group position={position}>
      <pointLight position={[0, 4, 6]} intensity={1.6} distance={24} color="#8b7bff" />
      <pointLight position={[-6, 4, 3]} intensity={0.8} distance={20} color="#33d9ff" />
      <group
        ref={group}
        position={[0, 4, 0]}
        onPointerDown={(e) => {
          e.stopPropagation();
          dragging.current = true;
          lastX.current = e.nativeEvent.clientX;
        }}
      >
        {PROJECTS.map((project, i) => (
          <group
            key={project.title}
            position={[i * spacing, 0, 0]}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
          >
            <ProjectCard project={project} />
          </group>
        ))}
      </group>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Content I Like — floating rings                                  */
/* ------------------------------------------------------------------ */

export function ContentArea({ position }: AreaProps) {
  const colors = ["#8b7bff", "#33d9ff", "#ff6ad5", "#ffd23e", "#5be8a0"];
  return (
    <group position={position}>
      <pointLight position={[0, 4, 6]} intensity={1.2} distance={26} color="#8b7bff" />
      {colors.map((c, i) => (
        <Float key={i} speed={1 + i * 0.25} rotationIntensity={1.2} floatIntensity={2}>
          <mesh
            position={[(i - 2) * 2.4, 4 + Math.sin(i * 1.7) * 1.4, -2 - (i % 2)]}
            rotation={[Math.PI / 3, 0, i]}
          >
            <torusGeometry args={[0.62, 0.17, 16, 36]} />
            <meshStandardMaterial
              color={c}
              emissive={c}
              emissiveIntensity={0.6}
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
        </Float>
      ))}
      <Sparkles
        count={50}
        scale={[20, 12, 8]}
        position={[0, 4, -2]}
        size={2}
        color="#cfd2ff"
        speed={0.3}
      />
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Contact — glowing portal                                         */
/* ------------------------------------------------------------------ */

export function ContactArea({ position }: AreaProps) {
  const ring = useRef<THREE.Mesh>(null!);
  const ring2 = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring.current) ring.current.rotation.z = t * 0.2;
    if (ring2.current) ring2.current.rotation.z = -t * 0.3;
  });
  return (
    <group position={position}>
      <mesh ref={ring} position={[0, 4, -1]}>
        <torusGeometry args={[2.5, 0.06, 24, 80]} />
        <meshBasicMaterial color="#8b7bff" toneMapped={false} />
      </mesh>
      <mesh ref={ring2} position={[0, 4, -1.4]}>
        <torusGeometry args={[3.2, 0.03, 24, 80]} />
        <meshBasicMaterial color="#33d9ff" toneMapped={false} />
      </mesh>
      <pointLight position={[0, 4, 2]} color="#8b7bff" intensity={3} distance={22} />
      <Sparkles
        count={90}
        scale={[14, 12, 8]}
        position={[0, 4, 0]}
        size={2.2}
        color="#aab4ff"
        speed={0.5}
      />
    </group>
  );
}
