import React, { useState, useEffect } from "react";

export default function Warning() {
  const [width, setWidth] = useState<number>(window.innerWidth)

  function handleWindowSizeChange() {
      setWidth(window.innerWidth)
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, [])

  const isMobile = width <= 768

  {if (isMobile) {
    return (
    <section className="delphin" style={{ margin: "auto", fontSize: "24px" }}>
      <div>
        <h2 />Не адаптировано к мобильной вёрстке.
        <h2 /><a href="https://github.com/lilchiken/main-site/blob/main/public/resume/resumesample" style={{ color: "white" }}>Скачать/посмотреть резюме в PDF</a>
      </div>
    </section>
    )
  }}
}