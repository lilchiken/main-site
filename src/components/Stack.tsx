import * as THREE from "three";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import React, { useRef, useLayoutEffect } from "react";
import { useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";
import { Mesh, BufferGeometry } from "three";

const color = "white";

const Icosahedron = () => (
  <mesh rotation-x={0.7}>
    <icosahedronGeometry args={[1, 0]} />
    <meshBasicMaterial wireframe color={color} />
  </mesh>
);

const Star = ({ p }: { p: number }) => {
const ref = useRef<THREE.Object3D>(null);

useLayoutEffect(() => {
  const distance = mix(2, 3, Math.random());
  const yAngle = mix(
    degreesToRadians(80),
    degreesToRadians(90),
    Math.random()
  );
  const xAngle = degreesToRadians(360) * p;
  ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);
});

return (
  <mesh ref={ref as React.RefObject<Mesh<BufferGeometry>>}>
    <boxGeometry args={[0.05, 0.05, 0.05]} />
    <meshBasicMaterial wireframe color={color} />
  </mesh>
);
};

function Scene({ numStars = 220 }) {
  const gl = useThree((state) => state.gl);
  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      6,
      0.9,
      time.get() * 0.0005
    );
    camera.lookAt(0, 0, 0);
  });

  useLayoutEffect(() => gl.setPixelRatio(0.4));

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star p={progress(0, numStars, i)} />);
  }

  return (
    <>
      <Icosahedron />
      {stars}
    </>
  );
}

export default function App() {

  return (
    <>
    <section className="delphin" style={{ height: "10vh" }} />
    <section className="delphin">
      <div className="container">
        <Canvas gl={{ antialias: false }}>
          <Scene />
        </Canvas>
      </div>
    </section>
    </>
  );
}
