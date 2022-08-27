import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../add-post/AddPost.module.scss";
import Button from "../button/Button";
import Header from "../header/Header";
import Input from "../input/Input";

function EditPost() {
  const [values, setValues] = useState({
    title: "",
    author: "",
    text: "",
  });
  const navigate = useNavigate();

  const params = useParams();

  const editPostPUT = (e) => {
    e.preventDefault();
    console.log(params.id);
    axios
      .put(
        `https://her-backendg.herokuapp.com/api/edit-post/${params.id}`,
        values
      )
      .then((result) => {
        console.log(result);
        navigate(`/`);
      })
      .catch((err) => console.log(err));
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
            value={values?.author}
            type="text"
            name="title"
            onchange={(e) => {
              setValues({ ...values, author: e.target.value });
            }}
            placeholder="Автор"
          />

          <textarea
            value={values?.text}
            name="text"
            onChange={(e) => {
              setValues({ ...values, text: e.target.value });
            }}
          ></textarea>

          <div className="form-button">
            <Button click={editPostPUT}>Добавить</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
