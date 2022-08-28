import Avatar from "@mui/material/Avatar";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../header/Header.module.scss";
function Header() {
  return (
    <header>
      <Link className={styles.logo} to="/" style={{ textDecoration: "none" }}>
        PASHKOVBLOG
      </Link>
      <nav>
        <Link className={styles["header-link"]} to="/">
          Главная
        </Link>

        <Link className={styles["header-link"]} to="/add-post">
          Добавить пост
        </Link>

        <Link className={styles["header-link"]} to="/posts">
          Посты
        </Link>

        <Link className={styles["header-link"]} to="/">
          <Avatar
            sx={{
              bgcolor: "#fff",
              color: "#000",
              fontSize: "24px",
            }}
            aria-label="recipe"
          >
            {localStorage.getItem("login").slice(0, 1).toUpperCase()}
          </Avatar>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
