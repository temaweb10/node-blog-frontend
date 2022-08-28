import React from "react";
import { useParams } from "react-router-dom";
import PostsUser from "../Posts/PostsUser";
import styles from "../profile/Profile.module.scss";
function Profile() {
  const params = useParams();
  return (
    <div className="page">
      <h1 className={styles["profile-title"]}>
        Посты пользователя{" "}
        <span className={styles["profile-nickname"]}>{params.login}</span>
      </h1>

      <PostsUser login={params.login} />
    </div>
  );
}

export default Profile;
