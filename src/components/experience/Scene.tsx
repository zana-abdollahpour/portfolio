import { Cloud, Clouds, Float, OrbitControls } from "@react-three/drei";
// import { Perf } from "r3f-perf";

import Lights from "./Lights";

export default function Scene() {
  const positions: [number, number, number][] = [
    [0, -0.6, 1],
    [2.4, 0.5, -0.8],
    [-4.6, -1.8, -0.4],
    [-3.6, 0, -0.6],
    [4.8, -2.2, -1.2],
    [7, 1, -2.4],
  ];
  return (
    <>
      <Float
        speed={1}
        rotationIntensity={0.4}
        floatIntensity={0.4}
        floatingRange={[-0.5, 0.5]}
      >
        {positions.map((pos, i) => (
          <Clouds position={pos} key={i} texture="cloud.png">
            <Cloud growth={2} speed={0.08} segments={1} color="#c89310" />
          </Clouds>
        ))}
      </Float>

      <Lights />
      <OrbitControls
        enableDamping
        enablePan
        enableRotate
        enableZoom={false}
        rotateSpeed={0.2}
      />
      {/* <Perf position="bottom-left" /> */}
    </>
  );
}
