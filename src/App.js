import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get("https://hubert-poldevs.github.io/test/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="App">
      <h1>App</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
