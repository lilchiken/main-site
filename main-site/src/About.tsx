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

export default function About({id}: {id: number}) {
  const words = [
    "Меня зовут Илья Андрюхин.",
    "Я занимаюсь Web разработкой."
  ];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 0);

  return (
    <section>
      <motion.div style={{ y }} className="About">
          <div><img src="/IMG_7544-2.jpg" className="About"/></div>
          <div className="BIO">
            Python'ом я заинтересовался ещё в школе, благодаря внеурочной деятельности. Тогда, он мне показался необычайно простым и невероятно интересным, по сравнению с остальными ЯП, с которыми я сталкивался (Basic, C++, Pascal). Позже свои знания в этой сфере я старался развивать в ВУЗе и это стало второй отправной точкой в мир программирования.<br></br><br></br>
            Вскоре, после поступления в ВУЗ, я устроился на свою первую IT профессию - "Системный администратор". И я понял, что хочу развиваться и работать в этой сфере.<br></br><br></br>
            Одновременно с учёбой в ВУЗе я начал самостоятельно изучать различные технологии на python3, оформлять свои первый pet-проекты.
          </div>
      </motion.div>
    </section>
  );
}
