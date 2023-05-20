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
  const y = useParallax(scrollYProgress, -20);

  const yRange = [-1, 0.2, 0.5, 1]
  const opacityRange = [0, 0, 1, 0]
  const opacity = useTransform(scrollYProgress, yRange, opacityRange)

  const elemToScroll = () => {
    const elem = document.getElementById("work-exp")
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" })
    };
  };

  return (
    <section className="delphin">
      <motion.div ref={ref} style={{ opacity: opacity, x: y, y: y }} className="delphin">
        <img src={require(`/public/images/gif_delphin/frame_0${id}_delay-0.1s.gif`)} alt="Flower" />
      </motion.div>
      <motion.button className="scroll-down" style={{ opacity: opacity, x: y, y: y }} onClick={ elemToScroll }>Опыт работы</motion.button>
    </section>
  );
}

export default function Delphin() {
  const arrayRange = (start: number, stop: number, step: number) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );

  return (
    <>
      {arrayRange(0, 9, 1).map((image) => (
        <Image id={image} />
      ))}
    </>
  );
}
