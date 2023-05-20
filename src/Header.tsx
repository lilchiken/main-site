import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value: MotionValue, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Header() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 0);

  const elemToScroll = () => {
    const elem = document.getElementById("MyJob")
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" })
    };
  };

  return (
    <section>
      <section>
        <motion.h2 style={{y}}>Привет.</motion.h2>
      </section>
      <button className="scroll-down" onClick={ elemToScroll }>Обо мне</button>
    </section>
  );
}
