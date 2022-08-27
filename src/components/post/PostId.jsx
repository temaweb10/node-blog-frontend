import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "../post/Post.module.scss";
function Post() {
  const params = useParams();
  const [post, setPost] = useState();
  const [currentPost, setCurrentPost] = useState();
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();

  const getData = async () => {
    const apiUrl = `/api/post/${params.id}`;
    await axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setPost(allPersons);
      setLoading("true");
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const deletePost = (e) => {
    const id = e.target.getAttribute("data-id");
    console.log("daelete", e.target.getAttribute("data-id"));
    axios
      .delete(`/api/post/${id}`)
      .then((res) => console.log("/posts"))
      .catch((err) => console.log(err));

    navigate("/posts", { replace: true });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {loading ? (
        <div className={styles.post}>
          <div className={styles["parent-title"]}>
            <Link to={`/post/${post._id}`} style={{ textDecoration: "none" }}>
              <h1 className={styles["post-title"]}>{post.title}</h1>
            </Link>

            <div>
              <BiTrashAlt
                className="icon"
                style={{ color: "#000", fontSize: "32px" }}
                data-id={post._id}
                onClick={deletePost}
              />

              <Link to={`/edit-post/${post._id}`}>
                <AiOutlineEdit style={{ color: "#000", fontSize: "32px" }} />
              </Link>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <p className={styles["post-date"]}>
              {`${new Date(post.createdAt).toLocaleDateString()} | ${
                post.author
              }`}
            </p>
          </div>

          <p className={styles["post-text"]}>{post.text}</p>
        </div>
      ) : (
        <div className="parent-loading">
          <h1 className="loading-text">Загрузка...</h1>
        </div>
      )}
    </div>
  );
}

export default Post;
