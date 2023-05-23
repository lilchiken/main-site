import { motion } from "framer-motion";
import React from "react";
import AxisSrolling from "../constants/AxisScrolling";

function Image({ id }: { id: number }) {
  const { ref, xAxis, xOpacity } = AxisSrolling("x", 20, [-10, -5, 5, 10], [0, 1, 1, 0])

  return (
    <section className="pyth">
      <motion.div ref={ref} style={{ x: xAxis, opacity: xOpacity }} className="python">
        <img src={require(`/public/images/gif_python/frame_${id}_delay-0.1s.gif`)} alt="A London skyscraper" />
      </motion.div>
    </section>
  );
}

export default function Python() {
  return (
    <>
      {Array.from(Array(3).keys()).map((image) => (
        <Image id={image} />
      ))}
    </>
  );
}
