"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ScrollControls, Scroll, useScroll } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import { SOCIALS, CONTENT } from "@/lib/data";
import { Bangladesh, London, Bedroom, PlayStationScene } from "./scenes";

const CAM_POINTS: [number, number, number][] = [
  [0, 3, 9],
  [6, 3, -31],
  [0, 3, -69],
  [4, 3, -111],
];

const LOOK_POINTS: [number, number, number][] = [
  [0, 4, 0],
  [0, 4, -40],
  [0, 3.5, -78],
  [0, 4, -120],
];

type MouseRef = React.MutableRefObject<{ x: number; y: number }>;

function CameraRig({ mouse }: { mouse: MouseRef }) {
  const scroll = useScroll();
  const camCurve = useMemo(
    () =>
      new THREE.CatmullRomCurve3(CAM_POINTS.map((p) => new THREE.Vector3(...p))),
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
    target.x += mouse.current.x * 0.9;
    target.y += -mouse.current.y * 0.5;
    state.camera.position.lerp(target, 0.05);
    lookCurve.getPoint(o, look);
    state.camera.lookAt(look);
  });

  return null;
}

function Atmosphere() {
  const { scene } = useThree();
  useMemo(() => {
    const c = new THREE.Color("#06070b");
    scene.background = c;
    scene.fog = new THREE.Fog("#06070b", 12, 34);
  }, [scene]);
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

      <Canvas camera={{ position: [0, 3, 9], fov: 55 }} dpr={[1, 1.8]}>
        <ambientLight intensity={0.6} />
        <ScrollControls pages={4} damping={0.3}>
          <CameraRig mouse={mouse} />
          <Atmosphere />

          <Suspense fallback={null}>
            <Bangladesh position={[0, 0, 0]} />
            <London position={[0, 0, -40]} />
            <Bedroom position={[0, 0, -80]} />
            <PlayStationScene position={[0, 0, -120]} />
          </Suspense>

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
            intensity={0.5}
            luminanceThreshold={0.55}
            luminanceSmoothing={0.3}
            mipmapBlur
          />
          <Vignette offset={0.25} darkness={0.65} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
