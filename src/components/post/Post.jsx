import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "../post/Post.module.scss";

function Post({ data, allPosts, filterPosts }) {
  const navigate = useNavigate();
  const params = useParams();

  const deletePost = (e) => {
    const id = e.target.getAttribute("data-id");
    axios
      .delete(`https://her-backendg.herokuapp.com/api/post/${id}`)
      .then((res) => console.log("/posts"))
      .catch((err) => console.log(err));

    const filterArr = allPosts.filter((p) => {
      return e.target.getAttribute("data-id") !== p._id;
    });

    filterPosts(filterArr);
  };

  return (
    <Card className={styles.post}>
      <div className={styles["parent-title"]}>
        <Link to={`/post/${data._id}`} style={{ textDecoration: "none" }}>
          <h1 className={styles["post-title"]}>{data.title}</h1>
        </Link>

        <div>
          <BiTrashAlt
            className="icon"
            style={{ color: "#000", fontSize: "32px" }}
            data-id={data._id}
            onClick={deletePost}
          />

          <Link to={`/edit-post/${data._id}`}>
            <AiOutlineEdit style={{ color: "#000", fontSize: "32px" }} />
          </Link>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <p className={styles["post-date"]}>
          {`${new Date(data.createdAt).toLocaleDateString()} | ${data.author}`}
        </p>
      </div>

      <p className={styles["post-text"]}>{data.text}</p>
    </Card>
  );
}

export default Post;
