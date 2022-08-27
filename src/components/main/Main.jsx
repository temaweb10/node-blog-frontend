import React from "react";
import { Link } from "react-router-dom";
import styles from "../main/Main.module.scss";
function Main() {
  return (
    <div className="page">
      <div className={styles["main-content"]}>
        <h2 className={styles["main-title"]}>PASHKOVBLOG</h2>
        <p className={styles["main-text"]}>
          Build with Node.js Express, React.js, MongoDB
        </p>
        <Link to="/add-post" className={styles["main-link"]}>
          Добавь свой пост
        </Link>
      </div>
    </div>
  );
}

export default Main;
