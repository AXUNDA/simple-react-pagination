import { useState, useEffect } from "react";

import "./App.css";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const getPosts = async () => {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <p className="text-primary mb-3">My App</p>
        <Post posts={posts} loading={loading} />
      </div>
    </>
  );
}

export default App;
