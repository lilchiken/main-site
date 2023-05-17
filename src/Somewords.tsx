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

function Job({id}: {id: number}) {
  const words = [
    "Меня зовут Илья Андрюхин.",
    "Я занимаюсь Web разработкой."
  ];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 0);

  return (
    <section>
      <motion.h2 style={{y}}>{words.at(id)}</motion.h2>
    </section>
  );
}

export default function MyJob() {
  const arrayRange = (start: number, stop: number, step: number) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );

  return (
    <>
      {arrayRange(0, 1, 1).map((id) => (
        <Job id={id} />
      ))}
    </>
  );
}
