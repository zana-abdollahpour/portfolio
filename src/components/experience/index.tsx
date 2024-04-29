"use client";

import { Canvas } from "@react-three/fiber";

import Scene from "./Scene";

export default function Experience() {
  return (
    <Canvas
      className="!fixed left-0 top-0 !-z-40 bg-[var(--experience-bg)]"
      camera={{
        position: [0, 0, 4],
      }}
    >
      <Scene />
    </Canvas>
  );
}
