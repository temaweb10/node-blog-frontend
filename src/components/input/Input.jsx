import React from "react";
import styles from "../input/Input.module.scss";
function Input({ onchange, placeholder }) {
  return (
    <input
      type="text"
      className={styles.input}
      onChange={(e) => onchange(e)}
      placeholder={placeholder}
    />
  );
}

export default Input;
