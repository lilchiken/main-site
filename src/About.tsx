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

export default function About({id}: {id: number}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 50);

  const yRange = [0, 0.5, 1, 2]
  const opacityRange = [0, 1, 0, 0]
  const opacity = useTransform(scrollYProgress, yRange, opacityRange)

  return (
    <section>
      <motion.div ref={ref} style={{ x: y, opacity: opacity }} className="About">
        <img
          src={require("./IMG_7544-2.jpg")}
          alt="bio"
          className="About"
        />
      </motion.div>
    </section>
  );
}
