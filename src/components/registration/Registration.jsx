import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../add-post/AddPost.module.scss";
import Button from "../button/Button";
import Header from "../header/Header";
import Input from "../input/Input";

function Registration() {
  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  const navigate = useNavigate();

  /* https://her-backendg.herokuapp.com */
  const register = () => {
    axios
      .post("https://her-backendg.herokuapp.com/api/user/create", {
        ...values,
      })
      .then(function (response) {
        console.log(response);
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className={styles["form-parent"]}>
      <div className={styles["add-post"]}>
        <div className={styles["add-post-content"]}>
          <h1 className={styles["form-title"]}>Регистрация</h1>
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
            <Button click={register}>Создать аккаунт</Button>
          </div>
          <Link to="/login" className={styles["bottom-link"]}>
            Уже есть аккаунт?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Registration;
