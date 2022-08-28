import React from "react";
import { useParams } from "react-router-dom";
import PostsUser from "../Posts/PostsUser";
function Profile() {
  const params = useParams();
  return (
    <div>
      <PostsUser login={params.login} />
    </div>
  );
}

export default Profile;
