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
        "Nginx, Celery",
        "Uvicorn"
      ],
      "RDR API - это программно доступный источник данных из вселенной игры Red Dead Redemption. Проект не содержит полные данные из игры, так как их очень много. Чтобы иметь полное представление о проекте, предлагаю посмотреть его аналоги по другим вселенным. Например, по звёздным войнам (swapi.dev), или по вселенной покемонов (pokeapi.co).",
      "https://github.com/lilchiken/rdrapi"
    ],
    [
      "Ecommerce Django Project",
      "Интернет-магазин на джанго",
      [
        "Python3, Django & DRF",
        "Docker, Redis",
        "Pytest, Swagger-UI"
      ],
      "Данный проект построен на сессиях, то есть без пользователей. Корзина генерируется и прикрепляется к сессии юзера. Также в проекте подключено Redis кэширование. Написаны тесты на PyTest, а также подключена документация к API при помощи Swagger-UI. API в этом проекте служит для отправки данных (кол-во заказов за день и т. п.).",
      "https://github.com/lilchiken/ecommerce-django-project"
    ],
    [
      "API Yamdb",
      "API для социальной сети",
      [
        "Python3, Django & DRF",
        "Pytest, redoc"
      ],
      "Групповой проект, где я принимал участие, как техлид. Проект YaMDb собирает отзывы пользователей на произведения. Сами произведения в YaMDb не хранятся, здесь нельзя посмотреть фильм или послушать музыку. Произведения делятся на категории, такие как «Книги», «Фильмы», «Музыка». Например, в категории «Книги» могут быть произведения «Винни-Пух и все-все-все» и «Марсианские хроники», а в категории «Музыка» — песня «Давеча» группы «Жуки» и вторая сюита Баха.",
      "https://github.com/lilchiken/api_yamdb"
    ],
    [
      "DTO with interface",
      "Получаемый Data Transfer Object при помощи FastAPI",
      [
        "Python3, FastAPI",
        "Uvicorn, Jinja2",
        "Docker"
      ],
      "Данный проект предназначен для изучения DTO. Ресурс с которого получаем объект - api.m3o.com .",
      "https://github.com/lilchiken/dto-with-interface-fastapi"
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
            <p />
            <a href={words.at(id)?.at(4)} style={{ fontSize: "22px", color: "white", fontWeight: "bold" }}>Ссылка на проект</a>
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
      {Array.from(Array(0, 1, 2, 3)).map((id) => (
        <Exp id={id} />
      ))}
    </>
  );
}
