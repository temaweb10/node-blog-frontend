import React from "react";

function Error404({ type }) {
  let text = "";
  if (type === "post") {
    text = "Ошибка пост не найден 404";
  } else {
    text = "Ошибка страница не найдена 404";
  }
  return <div>{<h1>{text}</h1>}</div>;
}

export default Error404;
