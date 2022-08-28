import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "../post/Post.module.scss";

function Post({ data }) {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <Card className={styles.post}>
      <div className={styles["parent-title"]}>
        <Link to={`/post/${data._id}`} style={{ textDecoration: "none" }}>
          <h1 className={styles["post-title"]}>{data.title}</h1>
        </Link>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        {/* /user/tema_dev */}

        <Avatar sx={{ bgcolor: "#000" }} className="post-avatar">
          {data.author.slice(0, 1)}
        </Avatar>

        <Link to={`/user/${data.author}`} className={styles["post-author"]}>
          <p className={styles["post-author"]}>{`${data.author} `} </p>
        </Link>
        <p className={styles["post-date"]}>
          {`${new Date(data.createdAt).toLocaleDateString()} `}
        </p>
      </div>

      <p className={styles["post-text"]}>{data.text}</p>
    </Card>
  );
}

export default Post;
