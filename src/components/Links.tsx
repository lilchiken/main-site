import React from "react";

export default function Links() {
  const tg = "telegram-black-free-png.png"
  const mail = "free-mail-icon-142-thumb.png"
  const ldin = "61109.png"

  return (
    <section>
      <div style={{ display: "inline-block", fontSize: "20px", marginLeft: "28vw", marginRight: "200px" }}>
        <a
          href="https://t.me/spbdqs"
          style={
            {
              color: "black",
              textDecoration: "none"
            }
          }
        >
          <img src={require(`/public/images/imgoricons/${tg}`)} style={{ maxWidth: "20%" }} />
        </a>
        <a
          href="mailto:andryuhin2@yandex.ru"
          style={
            {
              color: "black",
              textDecoration: "none"
            }
          }
        >
          <img src={require(`/public/images/imgoricons/${mail}`)} style={{ maxWidth: "20%", marginLeft: "50px" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/ilia-andryuhin/"
          style={
            {
              color: "black",
              textDecoration: "none"
            }
          }
        >
          <img src={require(`/public/images/imgoricons/${ldin}`)} style={{ maxWidth: "15%", marginBottom: "35px", marginLeft: "80px" }} />
        </a>
      </div>
    </section>
  );
}