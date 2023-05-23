import React from "react";

function Exp({id}: {id: number}) {
  const words: any = [
    [
      "RDR API",
      "Open-source ресурс, для отработки своих навыков в Rest API",
      [
        "Python3, FastAPI",
        "SQLAlchemy, Alembic",
        "Redis, PostgreSQL",
        "JavaScript, ReactJS",
        "Docker, docker-compose",
        "Nginx, Celery"
      ],
      // "Автоматизировал до минимальных возможных значений начальные установочные рабочие процессы пункта наблюдения."
      "Автоматизировал до минимальных возможных значений начальные установочные рабочие процессы пункта наблюдения.Автоматизировал до минимальных возможных значений начальные установочные рабочие процессы пункта наблюдения.Автоматизировал до минимальных возможных значений начальные установочные рабочие процессы пункта наблюдения.Автоматизировал до минимальных возможных значений начальные установочные рабочие процессы пункта наблюдения.Автоматизировал до минимальных возможных значений начальные установочные рабочие процессы пункта наблюдения."
    ],
    [
      "Ecommerce Django Project",
      "Интернет-магазин на джанго",
      [
        "Python3, Django & DRF",
        "Docker, Redis"
      ],
      "Автоматизировал до минимальных возможных значений начальные установочные рабочие процессы пункта наблюдения.Автоматизировал до минимальных возможных значений начальные установочные рабочие процессы пункта наблюдения.Автоматизировал до минимальных возможных значений начальные установочные рабочие процессы пункта наблюдения.Автоматизировал до минимальных возможных значений начальные установочные рабочие процессы пункта наблюдения.Автоматизировал до минимальных возможных значений начальные установочные рабочие процессы пункта наблюдения."
    ]
  ];

  return (
    <section className="delphin" style={{ alignContent: "center" }}>
      <div className="work">
        <h2>{words.at(id)?.at(0)}</h2>
        <h3>{words.at(id)?.at(1)}</h3>
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
          <div style={
            {
              display: "inline-block",
              whiteSpace: "nowrap",
              textAlign: "center"
            }
          }>
            Стек проекта:
            <ol className="delphin" style={{ textAlign: "left" }}>
              {Array.from(words.at(id)?.at(2)).map((key: any) => (
                <li style={{ marginTop: "8px" }}>· {key}</li>
              )
              )}
            </ol>
          </div>
          <div 
            style={
              {
                display: "inline-block",
                textAlign: "left",
                marginLeft: "100px"
              }
            }
          >
            {words.at(id)?.at(3)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Projects() {
  return (
    <>
    <section className="delphin">
      <h2>Проекты</h2>
    </section>
      {Array.from(Array(0, 1)).map((id) => (
        <Exp id={id} />
      ))}
    </>
  );
}
