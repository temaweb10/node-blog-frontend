import TextField from "@mui/material/TextField";
import React from "react";
function TextArea({ onchange }) {
  return (
    <TextField
      onChange={(e) => onchange(e)}
      id="filled-multiline-static"
      label="Multiline"
      multiline
      rows={2}
      defaultValue="Default Value"
      variant="filled"
    />
  );
}

export default TextArea;
