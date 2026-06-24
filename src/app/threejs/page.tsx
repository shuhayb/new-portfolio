"use client";

import dynamic from "next/dynamic";

const ThreeExperience = dynamic(
  () => import("@/components/three/ThreeExperience"),
  {
    ssr: false,
    loading: () => (
      <div className="tjs-loading">
        <span>loading the 3d experience…</span>
      </div>
    ),
  }
);

export default function ThreeJsPage() {
  return <ThreeExperience />;
}
