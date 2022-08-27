import React from "react";
import styles from "../button/Button.module.scss";
function Button(props) {
  return (
    <button
      className={styles.button}
      onClick={(e) => {
        props.click(e);
      }}
    >
      {props.children}
    </button>
  );
}

export default Button;
