import React from "react";
import { motion } from "framer-motion";
import ArrayRange from "../constants/ArrayRange";
import AxisSrolling from "../constants/AxisScrolling";
import ScrollToMyJob from "../constants/ScrollToMyJob";

function Image({ id }: { id: number }) {
  const { ref, yAxis, yOpacity } = AxisSrolling("y", -250, [-100, -0.1, 0.1, 100], [0, 1, 1, 0])

  return (
    <section>
      <motion.div ref={ref} style={{ opacity: yOpacity, y: yAxis }} className="flower">
        <img src={require(`/public/images/gif_tree/frame_${id}_delay-0.1s.png`)} alt="Flower" />
      </motion.div>
      <motion.button className="scroll-down" style={{ y: yAxis, opacity: yOpacity }} onClick={ ScrollToMyJob }>Обо мне</motion.button>
    </section>
  );
}

export default function Start() {
  const arrayRange = ArrayRange(15, 34, 1)
  return (
    <>
      <section>
        <section>
          <h2>Привет.</h2>
        </section>
        <button className="scroll-down" onClick={ ScrollToMyJob }>Обо мне</button>
      </section>
      {arrayRange.map((image) => (
        <Image id={image} />
      ))}
    </>
  );
}
