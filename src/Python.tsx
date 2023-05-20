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

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useParallax(scrollYProgress, 100);
  const y = useParallax(scrollYProgress, -250)

  const yRange = [-1, 0.2, 0.5, 1]
  const opacityRange = [0, 0, 1, 0]
  const opacity = useTransform(scrollYProgress, yRange, opacityRange)

  return (
    <section className="pyth">
      <motion.div ref={ref} style={{ y: y, x: x, opacity: opacity }} className="python">
        <img src={require(`/public/images/gif_python/frame_${id}_delay-0.1s.gif`)} alt="A London skyscraper" />
      </motion.div>
    </section>
  );
}

export default function Python() {
  return (
    <>
      {Array.from(Array(5).keys()).map((image) => (
        <Image id={image} />
      ))}
    </>
  );
}
