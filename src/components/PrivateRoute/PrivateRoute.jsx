import React from "react";
import { Navigate, Route } from "react-router-dom";
function PrivateRoute({ children, path }) {
  const auth = () => {
    if (localStorage.getItem("login") !== null) {
      return children;
    } else {
      return <Navigate to="/login" replace />;
    }
  };
  return <Route path={path} element={auth()} />;
}

export default PrivateRoute;
