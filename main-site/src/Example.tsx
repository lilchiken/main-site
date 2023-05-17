import "./flower.css";
import React from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, -250);

  const yRange = [-1, 0.2, 0.3, 0.5]
  const opacityRange = [0, 0, 0, 1]
  const opacity = useTransform(scrollYProgress, yRange, opacityRange)

  return (
    <section>
      <motion.div ref={ref} style={{ opacity: opacity, y }} className="flower">
        <img src={`/gif_tree/frame_${id}_delay-0.1s.png`} alt="A London skyscraper" />
      </motion.div>
    </section>
  );
}

export default function Example() {
  const arrayRange = (start: number, stop: number, step: number) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );

  return (
    <>
      {arrayRange(15, 34, 1).map((image) => (
        <Image id={image} />
      ))}
    </>
  );
}
