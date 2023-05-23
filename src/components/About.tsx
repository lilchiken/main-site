import { motion } from "framer-motion";
import React from "react";
import AxisSrolling from "../constants/AxisScrolling";

export default function About() {
  const { ref, xAxis, xOpacity } = AxisSrolling("x", 5, [0, 0.1, 0.9, 1], [1, 1, 1, 0])

  const img = "IMG_7544.JPG"

  return (
    <>
    <section id="MyJob">
      <h2>Меня зовут Илья Андрюхин.</h2>
    </section>
    <section id="MyJob">
      <h2>Я занимаюсь Web - разработкой.</h2>
    </section>
    <section ref={ref}>
      <div
        style={
          {
            fontSize: "21px",
            marginTop: "15px",
            marginLeft: "25px",
            marginRight: "25px"
          }
        }
        className="stack"
      >
        <div
          className="About"
          style={
            {
              display: "inline-block",
              marginLeft: "100px",
              maxWidth: "500px"
            }
          }
        >
          <img
            src={require(`/public/images/imgoricons/${img}`)}
            alt="bio"
            className="About"
          />
        </div>
        <motion.div
          style={
            {
              display: "inline-block",
              x: xAxis,
              opacity: xOpacity,
              position: "relative",
              textAlign: "left",
              marginLeft: "10px",
              transition: "0.4s",
            }
          }
        >
          <br />
          <br />
          <br />
          <div><span className="py-reswords">class</span> <span className="py-obj">WebDev<span className="py-brackets">(</span>human<span className="py-brackets">)</span><span className="py-vars">:</span></span></div>
          <div className="py-brackets">&nbsp;&nbsp;&nbsp;&nbsp;...</div>
          <div className="py-vars">ilia_andryuhin = <span className="py-obj">WebDev</span><span className="py-brackets">(</span>ilia_andryuhin<span className="py-brackets">)</span></div>
          <div className="py-vars">ilia_andryuhin.<span className="py-func">say</span><span className="py-brackets">(</span></div>
          <div><span className="py-string">&nbsp;&nbsp;&nbsp;&nbsp;"""</span><span className="py-text">Привет! Меня зовут Илья. Мне 21. Я занимаюсь разработкой около двух лет.</span></div>
          <div className="py-text">&nbsp;&nbsp;&nbsp;&nbsp;Не передать словами, насколько я рад тем, чем занимаюсь :)</div>
          <br />
          <div className="py-text">&nbsp;&nbsp;&nbsp;&nbsp;Хоть и опыт у меня не такой большой,</div>
          <div className="py-text">&nbsp;&nbsp;&nbsp;&nbsp;но я успел побывать как и в коммерческих, так и в некоммерческих проектах.</div>
          <div className="py-text">&nbsp;&nbsp;&nbsp;&nbsp;Сами проекты и мой опыт работы представлены ниже.</div>
          <div className="py-feature">{"\xa0".repeat(4)}Никогда не сдавайся! Ты супер ! :)</div>
          <div className="py-text">&nbsp;&nbsp;&nbsp;&nbsp;Я был бы очень рад с тобой поговорить, но увы это только статичная страница.</div>
          <div className="py-text">&nbsp;&nbsp;&nbsp;&nbsp;В самом конце есть ссылки на ресурсы, где можно со мной связаться.</div>
          <div className="py-text">&nbsp;&nbsp;&nbsp;&nbsp;Жду твоего сообщения)</div>
          <div className="py-string">&nbsp;&nbsp;&nbsp;&nbsp;"""</div>
          <div className="py-brackets">)</div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
