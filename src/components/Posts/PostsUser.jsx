import { useAutoAnimate } from "@formkit/auto-animate/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../loading/Loading";
import Post from "../post/Post";
import styles from "../Posts/Posts.module.scss";

function PostsUser({ login }) {
  console.log(login);
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(null);

  const [animationParent] = useAutoAnimate();

  useEffect(() => {
    const getData = async () => {
      const apiUrl = `/api/user/${login}/posts`;
      await axios.get(apiUrl).then((resp) => {
        console.log(resp);
        const allPersons = resp.data;
        setPosts(allPersons);
        setLoading("true");
      });
    };
    getData();
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const filterPosts = (postsFilter) => {
    setPosts(postsFilter);
  };

  return (
    <div className="page">
      <div className={styles.posts}>
        <div
          ref={animationParent}
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
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}

export default PostsUser;
