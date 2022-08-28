import axios from "axios";
import React, { useState } from "react";
import styles from "../add-post/AddPost.module.scss";
import Button from "../button/Button";
import Header from "../header/Header";
import Input from "../input/Input";

function Registration() {
  const [values, setValues] = useState({
    login: "",
    password: "",
  });
  /* https://her-backendg.herokuapp.com */
  const register = () => {
    axios
      .post("/api/user/create", {
        login: "test",
        password: "niger",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Header />
      <div className={styles["add-post"]}>
        <div className={styles["add-post-content"]}>
          <div className={styles["input-div"]}>
            <Input
              type="text"
              name="login"
              onchange={(e) => {
                setValues({ ...values, login: e.target.value });
              }}
              placeholder="Логин"
            />
          </div>

          <div className="input-div">
            <Input
              type="text"
              name="password"
              onchange={(e) => {
                setValues({ ...values, password: e.target.value });
              }}
              placeholder="Пароль"
            />
          </div>

          <div className="form-button">
            <Button click={register}>Добавить</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
