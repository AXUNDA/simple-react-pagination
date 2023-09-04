import React from "react";
import Spinner from "./Spinner";

const Post = ({ posts, loading }) => {
  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <ul className="list-group mb-4">
          {posts.map((post) => (
            <li key={post.id} className="list-group-item">
              {post.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Post;
