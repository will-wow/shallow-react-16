import React from "react";

const Post = ({ post }) => {
  return (
    <div>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
