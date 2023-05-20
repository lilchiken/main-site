import "./flower.css";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue, MotionConfig } from "framer-motion";
import { MotionCanvas, motion as motion3d } from "framer-motion-3d";
import React from "react";
import * as THREE from "three";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function PythonStack({id}: {id: number}) {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ target: ref });
  const y = useParallax(scrollXProgress, 300);

  const yRange = [-1, 0, 1, 2]
  const opacityRange = [0, 1, 1, 0]
  const opacity = useTransform(scrollXProgress, yRange, opacityRange)

  return (
    <section>
      <div ref={ref} style={{ overflow: "auto", width: "auto", alignItems: "baseline" }}>
        <pre>
          Python3
        </pre>
        <pre>
          Python3
        </pre>
      </div>
    </section>
  );
}