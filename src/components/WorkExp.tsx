import React from "react";


function Exp({id}: {id: number}) {
  const words: any = [
    [
      "АТС Смольного",
      "Системный администратор",
      [
        "Администрирование в сфере видеонаблюдения.",
        "Автоматизировал до минимальных возможных значений начальные установочные рабочие процессы пункта наблюдения.",
      ],
      "март 2021 г. - август 2021 г."
    ],
    [
      "Яндекс.Практикум",
      "Python - разработчик (обучение)",
      [
        "Проходил обучение на онлайн платформе.",
        "Освоил разные методики, ресурсы веб-разработки.",
        "Внёс вклад в обсуждениях об инструментариях, сервисах, тенденциях в рабочей сфере и их перспективах с более опытными коллегами."
      ],
      "сентябрь 2022 г. - июль 2023 г."
    ],
    [
      "Itvist.org",
      "Web - разработчик",
      [
        "Работа pro bono для НКО и частично коммерческих организаций.",
        `Лендинг проекта для "Московской школы профессиональной филантропии".`,
        `Телеграмм бот "Кризисного центра для женщин, подверженных насилию".`,
        `Участие в проектах "Ночлежки".`,
        "Частичное участие в других проектах."
      ],
      "с января 2023 г."
    ]
  ];

  return (
    <section className="delphin">
      <div className="stack" style={{ marginLeft: "100px", marginRight: "100px" }}>
        <div style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          <h2 style={
            { color: "white" }
          }
          >
            {words.at(id)?.at(0)}
          </h2>
          <br />
          <h3 style={
            { color: "white", fontSize: "33px", display: "inline" }
          }
          >
            {words.at(id)?.at(1)}
          </h3>
          <br />
          <h3 style={
            { color: "white", fontSize: "33px" }
          }
          >
            {words.at(id)?.at(3)}
          </h3>
        </div>
        <div style={{ display: "inline-flex" }}>
          <ol className="delphin" style={{ fontSize: "28px", textAlign: "left" }}>
            {Array.from(words.at(id)?.at(2)).map((key: any) => (
              <li style={{ listStyle: "inside" }}>{key}</li>
            )
            )}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default function WorkExp() {
  return (
    <>
    <section className="delphin" id="work-exp">
      <h2>Опыт работы</h2>
    </section>
      {Array.from(Array(0, 1, 2)).map((id) => (
        <Exp id={id} />
      ))}
    </>
  );
}
