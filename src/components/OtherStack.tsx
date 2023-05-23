import { motion } from "framer-motion";
import React from "react";
import AxisSrolling from "../constants/AxisScrolling";

function Stack({id}: {id: number}) {
  const words = [
    "{ JavaScript & ReactJS }",
    "Lua, Golang",
    "Docker & docker-compose & Nginx",
    "Linux (UNIX) & Bash"
  ]
  const { ref, yAxis } = AxisSrolling("y", 150, [0, 0], [0, 0])

  return (
    <section>
      <motion.h2 ref={ref} style={{x: yAxis}}>{words.at(id)}</motion.h2>
    </section>
  );
}

export default function OtherStack() {
  return (
    <>
    <section>
      <h2>Остальные технологии</h2>
    </section>
      {Array.from(Array(4).keys()).map((id) => (
        <Stack id={id} />
      ))}
    </>
  );
}
