import React from "react";

function Error404({ type }) {
  let text = "";
  if (type === "post") {
    text = "Пост не найден";
  } else {
    text = "Страница не найдена";
  }
  return <div>{<h1>{text}</h1>}</div>;
}

export default Error404;
