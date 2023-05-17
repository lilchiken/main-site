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
  const y = useParallax(scrollYProgress, 0);

  const yRange = [-100, 0, 1, 100]
  const opacityRange = [1, 1, 1, 1]
  const opacity = useTransform(scrollYProgress, yRange, opacityRange)

  return (
    <section className="pyth">
      <div>
        ABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABC
      </div>
      <motion.div ref={ref} style={{ x: y }} className="python">
        <img src={require(`/public/images/gif_python/frame_${id}_delay-0.1s.gif`)} alt="A London skyscraper" />
      </motion.div>
    </section>
  );
}

export default function Python() {
  const arrayRange = (start: number, stop: number, step: number) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );

  return (
    <>
      {Array.from(Array(10).keys()).map((image) => (
        <Image id={image} />
      ))}
    </>
  );
}
