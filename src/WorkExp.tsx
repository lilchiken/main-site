import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import React from "react";
import { array } from "yargs";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Exp({id}: {id: number}) {
  const words: string[][] = [
    [
      "АТС Смольного",
      "Системный администратор",
      "Администрирование в сфере видеонаблюдения.",
      "Автоматизировал до минимальных возможных значений начальные установочные рабочие процессы пункта наблюдения."
    ],
  ];

  return (
    <section className="delphin">
      <div className="work">
        <h2>{words.at(id)?.at(0)}</h2>
        <h3>{words.at(id)?.at(1)}</h3>
        <ol className="delphin">
          <li /><h4>{words.at(id)?.at(2)}</h4>
          <li /><h4>{words.at(id)?.at(3)}</h4>
        </ol>
      </div>
    </section>
  );
}

export default function WorkExp() {
  const arrayRange = (start: number, stop: number, step: number) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );

  return (
    <>
    <section className="delphin" id="work-exp">
      <h2>Опыт работы</h2>
    </section>
      {arrayRange(0, 0, 1).map((id) => (
        <Exp id={id} />
      ))}
    </>
  );
}
