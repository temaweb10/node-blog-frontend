import TextField from "@mui/material/TextField";
import React from "react";
import styles from "../input/Input.module.scss";
function Input({ onchange, placeholder }) {
  return (
    <div className={styles["input-parent"]}>
      <TextField
        id="standard-basic"
        label={placeholder}
        variant="standard"
        onChange={(e) => onchange(e)}
      />
    </div>
  );
}

export default Input;
