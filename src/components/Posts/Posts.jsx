import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import styles from "../Posts/Posts.module.scss";

function Posts() {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const apiUrl = "https://her-backendg.herokuapp.com/api/posts";
      await axios.get(apiUrl).then((resp) => {
        const allPersons = resp.data;
        setPosts(allPersons);
        setLoading("true");
      });
    };
    getData();
  }, []);

  const filterPosts = (postsFilter) => {
    setPosts(postsFilter);
  };

  return (
    <div className="page">
      <div className={styles.posts}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {loading ? (
            posts.map((elem) => {
              return (
                <Post
                  allPosts={posts}
                  filterPosts={filterPosts}
                  data={elem}
                  key={Date.now() + Math.random(128) * 10}
                />
              );
            })
          ) : (
            <div className="parent-loading">
              <h1 className="loading-text">Загрузка...</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Posts;
