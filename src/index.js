import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/Index.css";
import App from "./App";
import Error404 from "./components/404/Error404";
import AddPost from "./components/add-post/AddPost";
import EditPost from "./components/edit-post/EditPost";
import Header from "./components/header/Header";
import PostId from "./components/post/PostId";
import Posts from "./components/Posts/Posts";
import Registration from "./components/registration/Registration";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="add-post" element={<AddPost />} />
      <Route path="/" element={<App />} />
      <Route
        path="posts"
        element={
          <div>
            <Header />
            <Posts />
          </div>
        }
      />
      <Route path="/register" element={<Registration />} />
      <Route
        path="post/:id"
        element={
          <div>
            <Header />
            <PostId />
          </div>
        }
      />
      <Route path="edit-post/:id" element={<EditPost />} />

      <Route path="*" element={<Error404 type="page" />} />
    </Routes>
  </BrowserRouter>
);
