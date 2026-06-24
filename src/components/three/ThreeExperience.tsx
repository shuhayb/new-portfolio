"use client";

import { useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ScrollControls, Scroll, useScroll } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import { SOCIALS, CONTENT } from "@/lib/data";
import {
  Bangladesh,
  London,
  Bedroom,
  PlayStationScene,
} from "./scenes";

const THEME = ["#e3a45f", "#717c8a", "#171522", "#07070d"];

const CAM_POINTS: [number, number, number][] = [
  [0, 1.8, 9],
  [7, 2.2, -29],
  [0, 2.6, -73],
  [5, 2.2, -111],
];

const LOOK_POINTS: [number, number, number][] = [
  [0, 1, 0],
  [0, 1.5, -40],
  [0, 2.2, -80],
  [0, 2.2, -120],
];

type MouseRef = React.MutableRefObject<{ x: number; y: number }>;

function CameraRig({ mouse }: { mouse: MouseRef }) {
  const scroll = useScroll();
  const camCurve = useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        CAM_POINTS.map((p) => new THREE.Vector3(...p))
      ),
    []
  );
  const lookCurve = useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        LOOK_POINTS.map((p) => new THREE.Vector3(...p))
      ),
    []
  );
  const target = useMemo(() => new THREE.Vector3(), []);
  const look = useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    const o = THREE.MathUtils.clamp(scroll.offset, 0, 1);
    camCurve.getPoint(o, target);
    target.x += mouse.current.x * 1.1;
    target.y += -mouse.current.y * 0.6;
    state.camera.position.lerp(target, 0.05);
    lookCurve.getPoint(o, look);
    state.camera.lookAt(look);
  });

  return null;
}

function Atmosphere() {
  const scroll = useScroll();
  const { scene } = useThree();
  const colors = useMemo(() => THEME.map((c) => new THREE.Color(c)), []);
  const cur = useMemo(() => new THREE.Color(THEME[0]), []);

  useMemo(() => {
    scene.fog = new THREE.Fog(THEME[0], 5, 36);
    scene.background = cur;
  }, [scene, cur]);

  useFrame(() => {
    const o = scroll.offset * (colors.length - 1);
    const i = Math.min(Math.floor(o), colors.length - 2);
    const f = o - i;
    cur.copy(colors[i]).lerp(colors[i + 1], f);
    if (scene.fog) (scene.fog as THREE.Fog).color.copy(cur);
  });

  return null;
}

function Caption({
  title,
  sub,
  children,
}: {
  title: string;
  sub: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="tjs-cap">
      <div className="tjs-cap-inner">
        <h2 className="tjs-cap-title">{title}</h2>
        <p className="tjs-cap-sub">{sub}</p>
        {children}
      </div>
    </section>
  );
}

export default function ThreeExperience() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="tjs-root tjs-fixed">
      <header className="tjs-bar">
        <Link href="/" className="tjs-brand">
          <span className="tjs-star">✦</span> shuhayb
        </Link>
        <Link href="/" className="tjs-exit">
          ← standard site
        </Link>
      </header>

      <Canvas camera={{ position: [0, 1.8, 9], fov: 55 }} dpr={[1, 1.8]}>
        <ambientLight intensity={0.16} />
        <ScrollControls pages={4} damping={0.3}>
          <CameraRig mouse={mouse} />
          <Atmosphere />

          <Bangladesh position={[0, 0, 0]} />
          <London position={[0, 0, -40]} />
          <Bedroom position={[0, 0, -80]} />
          <PlayStationScene position={[0, 0, -120]} />

          <Scroll html>
            <div className="tjs-overlay">
              <Caption title="bangladesh" sub="where it started">
                <span className="tjs-scroll-hint">scroll to travel ↓</span>
              </Caption>

              <Caption title="london" sub="where i am now" />

              <Caption title="the bedroom" sub="where i build">
                <span className="tjs-mini">drag the floating screens →</span>
              </Caption>

              <Caption title="playstation" sub="where i unwind">
                <ul className="tjs-cap-links">
                  {CONTENT.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="tjs-cap-contact">
                  <a href={`mailto:${SOCIALS.email}`}>email</a>
                  <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer">
                    github
                  </a>
                  <a
                    href={SOCIALS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin
                  </a>
                </div>
              </Caption>
            </div>
          </Scroll>
        </ScrollControls>

        <EffectComposer>
          <Bloom
            intensity={0.9}
            luminanceThreshold={0.25}
            luminanceSmoothing={0.3}
            mipmapBlur
          />
          <Vignette offset={0.3} darkness={0.7} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
