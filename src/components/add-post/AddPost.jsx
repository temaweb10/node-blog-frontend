import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../add-post/AddPost.module.scss";
import Button from "../button/Button";
import Header from "../header/Header";
import Input from "../input/Input";
function AddPost() {
  const [values, setValues] = useState({
    title: "",
    author: "",
    text: "",
  });
  useEffect(() => {
    console.log(values);
  }, [values]);
  const navigate = useNavigate();

  const addPost = (e) => {
    e.preventDefault();
    axios
      .post("https://her-backendg.herokuapp.com/api/add-post", {
        values,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    /*  navigate("/"); */
  };

  return (
    <div>
      <Header />
      <div className={styles["add-post"]}>
        <div className={styles["add-post-content"]}>
          <Input
            type="text"
            name="title"
            onchange={(e) => {
              setValues({ ...values, title: e.target.value });
            }}
            placeholder="Заголовок"
          />
          <Input
            type="text"
            name="title"
            onchange={(e) => {
              setValues({ ...values, author: e.target.value });
            }}
            placeholder="Автор"
          />

          <textarea
            name="text"
            onChange={(e) => {
              setValues({ ...values, text: e.target.value });
            }}
          ></textarea>

          <div className="form-button">
            <Button click={addPost}>Добавить</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
