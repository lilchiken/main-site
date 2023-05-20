import "./flower.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import React from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function AboutText({id}: {id: number}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  const yRange = [-1, 0, 1, 2]
  const opacityRange = [0, 1, 1, 0]
  const opacity = useTransform(scrollYProgress, yRange, opacityRange)

  return (
    <section>
      <motion.div ref={ref} style={{ x: y, opacity: opacity }}>
        Ляляля
      </motion.div>
    </section>
  );
}
