import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../add-post/AddPost.module.scss";
import Auth from "../auth/Auth";
import Button from "../button/Button";
import Header from "../header/Header";
import Input from "../input/Input";
import TextArea from "../textarea/TextArea";
function AddPost() {
  const [values, setValues] = useState({
    title: "",
    author: localStorage.getItem("login"),
    text: "",
  });

  const navigate = useNavigate();

  const addPost = (e) => {
    e.preventDefault();
    axios
      .post("https://her-backendg.herokuapp.com/api/add-post", {
        values,
      })
      .then(function (response) {
        console.log(response);
        navigate("/posts");
      })
      .catch(function (error) {
        console.log(error);
      });
    /*  navigate("/"); */
  };

  return (
    <div>
      <Header />
      <Auth />
      <div className={styles["add-post"]}>
        <div className={styles["add-post-content"]}>
          <div className={styles["input-div"]}>
            <Input
              type="text"
              name="title"
              onchange={(e) => {
                setValues({ ...values, title: e.target.value });
              }}
              placeholder="Заголовок"
            />
          </div>

          {/*   <div className="input-div">
            <Input
              type="text"
              name="title"
              onchange={(e) => {
                setValues({ ...values, author: e.target.value });
              }}
              placeholder="Автор"
            />
          </div> */}

          <div className="input-div">
            <TextArea
              onchange={(e) => {
                setValues({ ...values, text: e.target.value });
              }}
            />
          </div>

          <div className="form-button">
            <Button click={addPost}>Добавить</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
