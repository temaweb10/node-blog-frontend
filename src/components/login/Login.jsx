import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../add-post/AddPost.module.scss";
import Button from "../button/Button";
import Header from "../header/Header";
import Input from "../input/Input";

function Login() {
  const [values, setValues] = useState({
    login: "",
    password: "",
  });
  const [user, setUser] = useState();

  const navigate = useNavigate();

  const checkedUser = () => {
    if (
      user?.login == values?.login &&
      user?.password == values?.password &&
      user !== null
    ) {
      console.log("SUCCESS");
      localStorage.setItem("login", user.login);
      localStorage.setItem("password", user.password);
      navigate("/");
    } else {
      alert("Ошибка при авторизации");
      console.log("не сходиться");
    }
  };

  const login = async () => {
    await axios
      .get(`https://her-backendg.herokuapp.com/api/user/find/${values.login}`)
      .then(function (response) {
        setUser(response.data);
        checkedUser();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
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
          <Button click={login}>Добавить</Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
