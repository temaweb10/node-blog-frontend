import InputUnstyled from "@mui/base/InputUnstyled";
import React from "react";
import styles from "../input/Input.module.scss";
function Input({ onchange, placeholder }) {
  return (
    <InputUnstyled
      type="text"
      onChange={(e) => onchange(e)}
      placeholder={placeholder}
    />
  );
}

export default Input;
