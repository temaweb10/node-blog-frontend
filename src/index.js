import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "../src/Index.css";
import App from "./App";
import Error404 from "./components/404/Error404";
import AddPost from "./components/add-post/AddPost";
import EditPost from "./components/edit-post/EditPost";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import PostId from "./components/post/PostId";
import Posts from "./components/Posts/Posts";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Profile from "./components/profile/Profile";
import Registration from "./components/registration/Registration";
import User from "./components/users/User";
import Users from "./components/users/Users";

const auth = (children) => {
  if (
    localStorage.getItem("login") !== null &&
    localStorage.getItem("password") !== null
  ) {
    return children;
  } else {
    return <Navigate to="/register" replace />;
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="add-post" element={auth(<AddPost />)} />
      <Route path="/" element={<App />} />
      <Route
        path="posts"
        element={auth(
          <div>
            <Header />
            <Posts />
          </div>
        )}
      />
      <Route path="/register" element={<Registration />} />
      <Route />

      <Route path="/login" element={<Login />} />
      <Route
        path="post/:id"
        element={
          <div>
            <Header />
            <PostId />
          </div>
        }
      />
      <Route path="edit-post/:id" element={auth(<EditPost />)} />

      <Route path="users" element={auth(<Users />)} />

      <Route path="user/:login" element={auth(<Profile />)} />

      <Route path="*" element={<Error404 type="page" />} />
    </Routes>
  </BrowserRouter>
);
