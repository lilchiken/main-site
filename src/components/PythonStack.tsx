import { motion } from "framer-motion";
import React from "react";
import AxisSrolling from "../constants/AxisScrolling";

function Stack({ id }: { id: number }) {
  const {ref, xAxis, xOpacity } = AxisSrolling("x", 5, [-1, -0.5, 0.5, 1], [0, 1, 1, 0])
  const { yAxis } = AxisSrolling("y", 1, [0], [0])

  const stack = [
    [
      "Django & DRF",
      "FastAPI",
      "AioHttp",
    ],
    [
      "Celery",
      "Aioredis / redis-cli",
      "Pika (RabbitMQ)",
    ],
    [
      "SQLAlchemy",
      "Alembic",
      "Aiogram",
    ],
    [
      "Uvicorn",
      "Gunicorn",
      "WebSockets",
    ],
    [
      "PyTest",
      "Selenium",
      "UnitTest",
    ],
  ]

  return (
    <section>
      <motion.div
        ref={ref}
        style={
          {
            y: yAxis,
            x: xAxis,
            opacity: xOpacity,
            marginLeft: `${200 + id * 100}px`,
            paddingTop: `${id * 90}px`,
            transition: "0.2s"
          }
        }
        className="python"
      >
        <h2>{stack.at(id)?.at(0)}</h2>
        <h2>&nbsp;{stack.at(id)?.at(1)}</h2>
        <h2>&nbsp;&nbsp;{stack.at(id)?.at(2)}</h2>
      </motion.div>
    </section>
  );
}

export default function PythonStack() {
  return (
    <>
    <section>
      <h2>Стек технологий</h2>
    </section>
    <section>
      <h2>Python3</h2>
    </section>
    {Array.from(Array(5).keys()).map((id) => (
      <Stack id={id} />
    ))}
    </>
  );
}
