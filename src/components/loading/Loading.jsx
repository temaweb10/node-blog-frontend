import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
function Loading() {
  return (
    <div className="parent-loading">
      <CircularProgress style={{ color: "#000" }} className="loader" />
    </div>
  );
}

export default Loading;
